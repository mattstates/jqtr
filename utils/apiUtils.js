import { authorizationValue, jiraApiUrlByIssue } from '../utils/urls.js';

/**
 * @param {Object} issue - Raw Jira issue
 * Initial issue mapping of the raw response from Jira.
 * Code is mostly organized in the same way as a Jira task on lampstrack.
 */
function mapToUsefulData(issue) {
    const { fields } = issue;

    const mappedIssue = {
        id: issue.id,
        // TASK INFO
        taskNumber: issue.key,
        taskTitle: fields.summary,
        projectType: fields.project.key, // "UTI", "LP", "PSS" etc.

        // TASK DETAILS
        /*
            Type, Priority, Affects Version, Component, Labels, Resource Queue, P4 Job, Failed QA, Failed Code Review,
            Epic Link, Sprint, Status, Resolution, Fix Version
        */
        issueType: {
            name: fields.issuetype.name,
            iconUrl: fields.issuetype.iconUrl
        },
        // TODO: priority?
        // TODO: affectsVersion?
        components: fields.components ?
            fields.components.map((component) => {
                return { name: component.name, id: component.id };
            }) :
            [],
        labels: propertyCheck(fields.labels) || 'None',
        resourceQueue: fields.customfield_10050 ? fields.customfield_10050.value : 'None',
        failedQACount: propertyCheck(fields.customfield_11882) || 0,
        failedCodeReviewCount: propertyCheck(fields.customfield_12680) || 0,
        epicTaskNumber: propertyCheck(fields.customfield_10380),
        sprint: 'experimental', // See Experimental TODO: Fix This.

        // customfield_13680 is currently only used to designate something as a Key Task. I am not sure why it uses an array of objects as its datatype.
        keyTask: fields.customfield_13680 && fields.customfield_13680.some((item) => item.value.toLowerCase() === 'yes'),

        // customefield_10180 is used for all flags.
        flags: fields.customfield_10180 && fields.customfield_10180.map((flag) => flag.value).join(' '),

        // status: fields.status.statusCategory.name, // "Done", "In Progress", "Closed" etc
        status: fields.status.name, // "Done", "In Progress", "Closed" etc

        resolution: propertyCheck(fields.resolution),
        fixVersion: fields.fixVersions, // [{ archived, id, name, released, self }]

        // PEOPLE
        assignee: personHelper(fields.assignee),
        resourceGroup: propertyCheck(fields.customfield_10040),
        assignedQA: fields.customfield_10682 ? fields.customfield_10682.map(personHelper) : [],
        productOwner: personHelper(fields.customfield_11480),
        creator: personHelper(fields.creator),

        // TASK DESCRIPTION
        // taskDescription: fields.description, // Excluding this from the API query for now.

        // RELATED BY/TO
        issueLinks: fields.issuelinks, // [{ id, outwardIssue/inwardIssue: { fields, id, key, type:{ name } } }]

        isSubtask: fields.issuetype.subtask,

        // Items in the fields.subtasks array are not fully detailed issues/tasks.
        // The gatherAllTasks and mapSubtasksToParents functions attempts to address this, but API calls might be
        // better since the JQL Query may accidentally omit a subtask.
        subtasks: fields.subtasks ?
            fields.subtasks.map((subtask) => {
                return {
                    id: subtask.id,
                    isSubtask: subtask.fields.issuetype.subtask,
                    issueType: subtask.fields.issuetype.name,
                    status: subtask.fields.status.name,
                    taskNumber: subtask.key,
                    taskTitle: subtask.fields.summary
                };
            }) :
            [], // []

        // TIME TRACKING
        timeProps: {
            aggregateProgress: fields.aggregateprogress,
            aggregateTimeEstimate: fields.aggregatetimeestimate,
            aggregateTimeOriginalEstimate: fields.aggregatetimeoriginalestimate,
            aggregateTimeSpent: fields.aggregatetimespent || 0, // JIRA-Loggd
            originalEstimate: fields.timeoriginalestimate, // JIRA-Estimatd
            timeEstimate: fields.timeestimate,
            timeRemaining: fields.timeestimate,
            needsEstimate: fields.timeestimate === null
        },

        // TODO: Add to sprint property.
        experimental: {
            /**
             * sprintInfo {Object}
             * { completeDate, endDate, goal, id, name, rapidViewId, sequence, startDate, state }
             * This value is derived from a string and the value isn't always present on fields.customfield_10281.
             * SAMPLE VALUE:
             * ["com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=
             * ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,
             * completeDate=<null>,sequence=444,goal=]"length:1__proto__:Array(0)]
             */
            sprintInfo: (() => {
                if (!fields.customfield_10281) {
                    console.warn(`No sprint info for ${issue.key}: ${fields.summary}`);
                    return {};
                }
                fields.customfield_10281[0]
                    .split('[')[1]
                    .replace(']', '')
                    .split(',')
                    .reduce((prev, curr) => {
                        // Some magic to turn this string into some key/values
                        const entry = curr.split('=');
                        const temp = {};
                        temp[entry[0]] = entry[1];
                        return Object.assign(prev, temp);
                    }, {});
            })()
        },

        // Flag to denote when we have had to access additional Jira info but should not include
        // the issue's data in the table's results for time and resources.
        omitFromJqtr: false
    };

    if (mappedIssue.isSubtask) {
        mappedIssue.parent = fields.parent;
    }

    return mappedIssue;
    //customfield_13180 has details about Branches, Builds, etc. in the Development section of JIRA.
}

// TODO: Refactor...
/**
 * @param {Array} taskCollection - full collection of tasks
 * Returns an array of formatted Jira results aggregated by parent tasks.
 */
function gatherAllTasks(taskCollection) {
    let tasks = taskCollection;

    let missingParentTaskIds = findMissingParentTasks(taskCollection);

    if (missingParentTaskIds.length) {
        return Promise.all(missingParentTaskIds.map((id) => getJiraTaskById(id))).then((data) => {
            // data parameter is an array of parent task objects.
            console.warn('JQL query fetched subtasks where the parent was omitted. Missing parents were added:', data);
            const mappedData = data.map((task) => {
                task.omitFromJqtr = true;
                task.subtasks.map((subtask) => {
                    if (!taskCollection.find((issue) => issue.id === subtask.id)) {
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

    return new Promise((resolve) => {
        resolve(mapSubtasksToParents(tasks));
    });
}

/**
 * @param {Array} taskCollection - full collection of tasks
 * Returns all an array of only parent level tasks with all subtasks
 * mapped to the parent's .subtasks property.
 */
function mapSubtasksToParents(taskCollection) {
    return taskCollection.reduce((collection, task) => {
        if (task.isSubtask) {
            return collection;
        }

        if (task.subtasks.length) {
            task.subtasks = groupTasksByKey(taskCollection, task.subtasks, 'id');
        }

        return [...collection, task];
    }, []);
}

/**
 * @param {Array} taskCollection - full collection of tasks
 * @param {Array} childArray - a task's .subtasks collection
 * @param {string} primaryKey - the property to identify tasks
 * Returns childArray mapped to fully details tasks and filtered to match the jql query results.
 *
 * Normally the tasks inside of a parent's subtasks property comes from Jira without all of the subtask's Jira information.
 * Using this method, the entire collection is passed in and all matching subtasks are replaced
 * with their "full" versions. This is done so every task in the collection will behave more uniformly.
 */
function groupTasksByKey(taskCollection, childArray, primaryKey) {
    return childArray
        .map((childArrayTask) => {
            const matchedTask = taskCollection.find((parentArrayTask) => parentArrayTask[primaryKey] === childArrayTask[primaryKey]);
            if (matchedTask) {
                return matchedTask;
            }
            console.warn(`The JQL query has omitted a subtask (${childArrayTask.taskNumber}: ${childArrayTask.taskTitle}).`);
            return null;
        })
        .filter((subtask) => Boolean(subtask));
}

function personHelper(roleField) {
    return roleField ?
        {
            name: roleField.displayName,
            avatarUrl: roleField.avatarUrls['24x24'],
            email: roleField.emailAddress
        } :
        {
            name: 'None',
            avatarUrl: '',
            email: ''
        };
}

/**
 * @param {Array} collection - Array of Jira Tasks
 * returns Array of unique parent task IDs where the parent task was not in the original collection.
 */
function findMissingParentTasks(collection) {
    return Array.from(
        new Set(
            collection.filter((task) => task.isSubtask).reduce((prev, curr) => {
                if (
                    collection.find((item) => {
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

function propertyCheck(property) {
    return property ? property : '';
}

const getFetchOptions = (options = []) => {
    const headers = new Headers();

    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', authorizationValue);

    const config = {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    };

    if (options.length) {
        options.forEach((option) => (config[option[0]] = option[1]));
    }

    return config;
};

/**
 * Makes an API call to JIRA to get full Jira task information.
 * @param {String} taskId
 * returns - Javascript Object with Jira Task information.
 */
function getJiraTaskById(taskId) {
    return fetch(jiraApiUrlByIssue + taskId, getFetchOptions())
        .then((data) => data.json())
        .then(mapToUsefulData)
        .catch((error) => console.error(error.message));
}

export { gatherAllTasks, mapToUsefulData, getFetchOptions };
