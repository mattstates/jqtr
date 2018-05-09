import React from 'react';
import { lampstrackUrl, jiraApiUrl } from '../ignore/private.js';

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
        taskDescription: fields.description,
        // TODO: attachments?

        // RELATED BY/TO
        issueLinks: fields.issuelinks, // [{ id, outwardIssue/inwardIssue: { fields, id, key, type:{ name } } }]

        isSubtask: fields.issuetype.subtask,

        // Items in the fields.subtasks array are not fully detailed issues/tasks.
        // The mapSubtasksAndResourcesToParentTask function attempts to address this, but API calls might be
        // better since the JQL Query may accidentally omit a subtask.
        subtasks: fields.subtasks
            ? fields.subtasks.map(subtask => {
                  return {
                      id: subtask.id,
                      isSubtask: subtask.fields.issuetype.subtask,
                      issueType: subtask.fields.issuetype.name,
                      status: subtask.fields.status.name,
                      taskNumber: subtask.key,
                      taskTitle: subtask.fields.summary
                  };
              })
            : [], // []

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
             * SAMPLE VALUE: ["com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]"
length
:
1
__proto__
:
Array(0)
]
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
        }
    };

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
function mapSubtasksAndResourcesToParentTask(tasks, errorCallback) {
    const errors = {
        message: '',
        items: []
    };
    const mappedTasks = tasks.reduce((collection, task, index, array) => {
        if (task.isSubtask) {
            // Remove Subtasks from the top level array.
            return collection;
        }

        // Parent task level resourceInfo accumulation.
        task.resourceInfo = {};

        task.resourceInfo[task.resourceQueue] = task.timeProps.timeEstimate;

        if (!task.subtasks.length) {
            // Parent tasks without subtasks carryover
            return [...collection, task];
        }

        // Attempt to map fully detailed subtask to a parent's subtasks collection using the issue.id as a primary key.
        task.subtasks = task.subtasks.map(subtask => {
            const fullSubtask = array.find(element => element.id === subtask.id);
            if (!fullSubtask) {
                // TODO: This issue may be fixed with API calls.
                console.warn(
                    `JQL query has omitted a subtask (${subtask.taskNumber}: ${subtask.taskTitle}).`
                );
                errors.message =
                    'Your JQL query has subtask(s) omitted. This may cause time estimation errors, consider updating your JQL query.';
                errors.items = [
                    ...errors.items,
                    <a href={`${lampstrackUrl}${subtask.taskNumber}`}>{subtask.taskTitle}</a>
                ];
            }
            return fullSubtask ? fullSubtask : subtask;
        });

        task.resourceInfo = task.subtasks.reduce((totals, subtask) => {
            try {
                totals[subtask.resourceQueue]
                    ? (totals[subtask.resourceQueue] += subtask.timeProps.timeEstimate)
                    : (totals[subtask.resourceQueue] = subtask.timeProps.timeEstimate);
            } catch (err) {
                console.error(`${err.message} for ${subtask.taskNumber}: ${subtask.taskTitle}`);
            }
            return totals;
        }, Object.assign(task.resourceInfo, {}));

        return [...collection, task];
    }, []);
    if (errorCallback) {
        errorCallback({ notification: errors, hasWarning: Boolean(errors.items.length) });
    }
    return mappedTasks;
}

function personHelper(roleField) {
    return roleField
        ? {
              name: roleField.displayName,
              avatarUrl: roleField.avatarUrls['24x24'],
              email: roleField.emailAddress
          }
        : {
              name: 'None',
              avatarUrl: '',
              email: ''
          };
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

const storageAvailable = (type => {
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

export {
    mapToUsefulData,
    mapSubtasksAndResourcesToParentTask,
    printHoursPretty,
    storageAvailable,
    jiraApiUrl,
    lampstrackUrl
};
