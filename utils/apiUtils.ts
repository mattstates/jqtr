import { jiraApiUrlByIssue } from '../utils/urls';
import { JiraIdentity, JiraIssue, JiraIssueParent } from '../types/JiraTypes';
import { MappedIdentity, MappedJiraIssue, MappedJiraSubtask } from '../types/JQTRTypes';

/**
 * @param {Object} issue - Raw Jira issue
 * Initial issue mapping of the raw response from Jira.
 */
// eslint-disable-next-line complexity
function mapToUsefulData(issue: JiraIssue): MappedJiraIssue {
    const { fields } = issue;

    const mappedIssue = {
        parent: null as JiraIssueParent,
        id: issue.id,
        taskNumber: issue.key,
        taskTitle: fields.summary,
        projectType: fields.project.key,
        issueType: fields.issuetype,
        components: fields.components
            ? fields.components.map(component => {
                  return { name: component.name, id: component.id };
              })
            : [],
        labels: propertyCheck(fields.labels) || 'None',
        resourceQueue: fields.customfield_10050 ? fields.customfield_10050.value : 'None',
        failedQACount: propertyCheck(fields.customfield_11882) || 0,
        failedCodeReviewCount: propertyCheck(fields.customfield_12680) || 0,
        epicTaskNumber: propertyCheck(fields.customfield_10380),
        keyTask:
            fields.customfield_13680 &&
            fields.customfield_13680.some(item => item.value.toLowerCase() === 'yes'),
        flags:
            fields.customfield_10180 && fields.customfield_10180.map(flag => flag.value).join(' '),
        status: fields.status.name,
        resolution: propertyCheck(fields.resolution),
        fixVersion: fields.fixVersions,
        assignee: personHelper(fields.assignee),
        resourceGroup: propertyCheck(fields.customfield_10040),
        assignedQA: fields.customfield_10682 ? fields.customfield_10682.map(personHelper) : [],
        productOwner: personHelper(fields.customfield_11480),
        creator: personHelper(fields.creator),
        issueLinks: fields.issuelinks,
        isSubtask: fields.issuetype.subtask,
        subtasks: fields.subtasks
            ? fields.subtasks.map(subtask => {
                  return {
                      id: subtask.id,
                      isSubtask: subtask.fields.issuetype.subtask,
                      issueType: subtask.fields.issuetype,
                      status: subtask.fields.status.name,
                      taskNumber: subtask.key,
                      taskTitle: subtask.fields.summary,
                      omitFromJqtr: false
                  };
              })
            : [],
        timeProps: {
            aggregateProgress: fields.aggregateprogress,
            aggregateTimeEstimate: fields.aggregatetimeestimate,
            aggregateTimeOriginalEstimate: fields.aggregatetimeoriginalestimate,
            aggregateTimeSpent: fields.aggregatetimespent || 0,
            originalEstimate: fields.timeoriginalestimate,
            timeEstimate: fields.timeestimate,
            timeRemaining: fields.timeestimate,
            needsEstimate: fields.timeestimate === null,
            progress: fields.progress
        },

        // Flag to denote when we have had to access additional Jira info but should not include
        // the issue's data in the table's results for time and resources.
        omitFromJqtr: false
    };

    if (mappedIssue.isSubtask) {
        mappedIssue.parent = fields.parent;
    }

    return mappedIssue;
}

// TODO: Refactor...
/**
 * @param {Array} taskCollection - full collection of tasks
 * Returns an array of formatted Jira results aggregated by parent tasks.
 */
function gatherAllTasks(taskCollection: MappedJiraIssue[]) {
    let tasks = taskCollection;

    let missingParentTaskIds = findMissingParentTasks(taskCollection);

    if (missingParentTaskIds.length) {
        return Promise.all(missingParentTaskIds.map(id => getJiraTaskById(id))).then(jiraIssues => {
            // data parameter is an array of parent task objects.
            console.warn(
                'JQL query fetched subtasks where the parent was omitted. Missing parents were added:',
                jiraIssues
            );
            const mappedData = jiraIssues.map<MappedJiraIssue>(task => {
                task.omitFromJqtr = true;

                // If the missing parent task brings missing subtasks with it we will omit them.
                task.subtasks.map<MappedJiraSubtask>(subtask => {
                    if (!taskCollection.some(issue => issue.id === subtask.id)) {
                        subtask.omitFromJqtr = true;
                    }

                    return subtask;
                });

                return task;
            });

            // Merge orginal JQL queried tasks with fetched parent tasks. All fetched tasks are flagged with omitFromJqtr = true.
            return mapSubtasksToParents([...tasks, ...mappedData]);
        });
    }

    return new Promise(resolve => {
        resolve(mapSubtasksToParents(tasks));
    });
}

/**
 * @param {Array} taskCollection - full collection of tasks
 * Returns all an array of only parent level tasks with all subtasks
 * mapped to the parent's .subtasks property.
 */
function mapSubtasksToParents(taskCollection: MappedJiraIssue[]) {
    return taskCollection.reduce<MappedJiraIssue[]>((collection, task) => {
        if (task.isSubtask && task.parent) {
            return collection;
        }

        if (task.subtasks.length) {
            task.subtasks = groupTasksById(taskCollection, task.subtasks);
        }

        return [...collection, task];
    }, []);
}

/**
 * @param {MappedJiraIssue[]} taskCollection - full collection of tasks
 * @param {MappedJiraSubtask[]} childTasksCollection - a task's .subtasks collection
 *
 * Returns childArray mapped to fully details tasks and filtered to match the jql query results.
 *
 * Normally the tasks inside of a parent's subtasks property comes from Jira without all of the subtask's Jira information.
 * Using this method, the entire collection is passed in and all matching subtasks are replaced
 * with their "full" versions. This is done so every task in the collection will behave more uniformly.
 */
function groupTasksById(
    taskCollection: MappedJiraIssue[],
    childTasksCollection: MappedJiraSubtask[]
) {
    return childTasksCollection
        .map(childTask => {
            const matchedTask = taskCollection.find(task => task.id === childTask.id);
            if (matchedTask) {
                return matchedTask;
            }
            console.warn(
                `The JQL query has omitted a subtask (${childTask.taskNumber}: ${childTask.taskTitle}).`
            );
            return null;
        })
        .filter(subtask => Boolean(subtask));
}

function personHelper(roleField: JiraIdentity): MappedIdentity {
    return roleField
        ? {
              name: roleField.displayName,
              avatarUrls: roleField.avatarUrls['24x24'],
              emailAddress: roleField.emailAddress
          }
        : {
              name: 'None',
              avatarUrls: '',
              emailAddress: ''
          };
}

/**
 * @param {Array} collection - Array of Jira Tasks
 * returns Array of unique parent task IDs where the parent task was not in the original collection.
 */
function findMissingParentTasks(collection: MappedJiraIssue[]): string[] {
    return Array.from(
        new Set(
            collection
                .filter(task => task.isSubtask && task.parent)
                .reduce((prev, curr) => {
                    if (
                        collection.find(item => {
                            return item.id === curr.parent.id;
                        }) === undefined
                    ) {
                        return [...prev, curr.parent.id];
                    }
                    return prev;
                }, [])
        )
    );
}

function propertyCheck<T>(property: T): T {
    return property ? property : null;
}

const getFetchOptions = (options: [string, string | AbortSignal][] = []) => {
    const headers = new Headers({});

    const config: { [key: string]: string | AbortSignal } = {
        method: 'GET'
    };

    if (options.length) {
        options.forEach(option => (config[option[0]] = option[1]));
    }

    return { ...config, headers };
};

/**
 * Makes an API call to JIRA to get full Jira task information.
 * @param {String} taskId
 * returns - Javascript Object with Jira Task information.
 */
function getJiraTaskById(taskId: string) {
    return fetch(jiraApiUrlByIssue + taskId, getFetchOptions())
        .then(data => data.json())
        .then(mapToUsefulData);
    // .catch(error => console.error(error.message));
}

export {
    gatherAllTasks,
    mapToUsefulData,
    getFetchOptions,
    findMissingParentTasks,
    mapSubtasksToParents
};
