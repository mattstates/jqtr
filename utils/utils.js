import { lampstrackUrl, jiraApiUrl, jiraApiUrlByIssue, base64Key } from '../ignore/private.js';

/*
*   Initial issue mapping of the raw response from JIRA.
*   Code is mostly organized in the same way as a JIRA task on lampstrack.
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
        issueType: fields.issuetype.name,
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
        // TODO: attachments?

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

        omitFromJqtr: false
    };

    if (mappedIssue.isSubtask) {
        mappedIssue.parent = fields.parent;
    }

    return mappedIssue;
    //customfield_13180 has details about Branches, Builds, etc. in the Development section of JIRA.
}

// TODO: Try to break this up so it can be done without adding more array looping
/*
*   Attempts to map fully-detailed issues to a parent task's subtask array.
*   Takes the whole issues collection from the API response and removes issues that are subtasks
*   * I am sure that passing setState here should be wrapped and called from the invoking component
*   TODO: Refactor...
*/

function gatherAllTasks(unmappedCollection, errorCallback) {
    let tasks = unmappedCollection;

    let missingParentTaskIds = findMissingParentTasks(unmappedCollection);

    if (missingParentTaskIds.length) {
        return Promise.all(missingParentTaskIds.map((id) => getJiraTaskById(id))).then((data) => {
            // data parameter is an array of parent task objects.
            console.warn('JQL query fetched subtasks where the parent was omitted. Missing parents were added:', data);
            const mappedData = data.map((task) => {
                task.omitFromJqtr = true;
                task.subtasks.map((subtask) => {
                    if (!unmappedCollection.find((task) => task.id === subtask.id)) {
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

function mapSubtasksToParents(taskCollection) {
    return taskCollection.reduce((collection, task, index, array) => {
        if (task.isSubtask) {
            return collection;
        }

        if (task.subtasks.length) {
            task.subtasks = groupTasksByKey(array, task.subtasks, 'id');
        }

        return [...collection, task];
    }, []);
}

function groupTasksByKey(parentArray, childArray, primaryKey) {
    return childArray
        .map((childArrayTask) => {
            const matchedTask = parentArray.find((parentArrayTask) => parentArrayTask[primaryKey] === childArrayTask[primaryKey]);
            //TODO: Refactor, remove the console.warn to make this more pure.
            return matchedTask ? matchedTask : console.warn(`The JQL query has omitted a subtask (${childArrayTask.taskNumber}: ${childArrayTask.taskTitle}).`);
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
 * @param collection: Array of Jira Tasks
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

function printHoursPretty(duration) {
    // Ported from original JQTR
    duration = duration / 3600;
    const hours = Math.floor(duration) || 0;
    const minutes = Math.floor(((duration * 3600) % 3600) / 60) || 0;
    const prettyTime = (hours > 0 ? hours + 'h' : '') + (minutes > 0 ? ' ' + minutes + 'm' : '');
    return prettyTime || '0h';
}

const storageAvailable = ((type) => {
    // Ported from original JQTR
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
})('localStorage');

/**
 * Makes an API call to JIRA to get full Jira task information.
 * @param taskId - string
 * returns - Javascript Object with Jira Task information.
 */
function getJiraTaskById(taskId) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', `Basic ${base64Key}`);
    // Create your own JIRA API Key this one is tied to: mstates.

    return fetch(jiraApiUrlByIssue + taskId, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    })
        .then((data) => data.json())
        .then(mapToUsefulData);
}

export { mapToUsefulData, gatherAllTasks, printHoursPretty, storageAvailable, jiraApiUrl, lampstrackUrl };