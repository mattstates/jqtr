export interface JiraIssue {
    changelog: JiraIssueChangeLog;
    expand: string;
    fields: JiraIssueField;
    id: string;
    key: string;
    self: string;
    omitFromJqtr: boolean;
}

export type JiraIssueField = {
    assignee?: JiraIdentity;
    aggregateprogress: JiraIssueProgress;
    attachment: any[]; // TODO: Add more...
    comment: {
        comments: any[]; // TODO: Add more...
        maxResults: number;
        startAt: number;
        total: number;
    };
    aggregatetimeestimate: number;
    aggregatetimeoriginalestimate: number;
    aggregatetimespent: number;
    components: { name: string; id: string }[];
    created: string;
    creator: JiraIdentity;
    customfield_10000?: any;
    customfield_10001?: any;
    customfield_10020?: any;
    customfield_10031?: any;
    customfield_10032?: any;
    customfield_10040?: { name: string; self: string }; // Resource Group = Team Name
    customfield_10050?: { id: string; value: string }; // Resource Queue
    customfield_10060?: string;
    customfield_10180?: { value: string }[]; // Flags
    customfield_10380?: number; // epic task number
    customfield_10682?: JiraIdentity[]; // Assigned QA
    customfield_11480?: JiraIdentity; // Product Owner
    customfield_11882?: number; // Failed QA Count
    customfield_12680?: number; // Failed Code Review Count
    customfield_13380?: number; // Failed Code Review Count
    customfield_13381?: number; // Failed QA Count
    customfield_13680?: { value: string }[]; // KeyTasks
    description: string;
    duedate?: string;
    fixVersions: JiraIssueFixVersion[];
    issuelinks: any[];
    issuetype: JiraFieldIssueType;
    labels: string;
    parent?: JiraIssueParent;
    progress: JiraIssueProgress;
    project: { id: string; key: string; name: string; projectTypeKey: string };
    reporter: JiraIdentity;
    resolution?: string;
    status: JiraIssueFieldStatus;
    subtasks: JiraSubTask[];
    summary: string;
    timeestimate?: number;
    timeoriginalestimate: number;
    timespent: number;
    timetracking: {
        originalEstimate: string;
        originalEstimateSeconds: number;
        remainingEstimate: string;
        remainingEstimateSeconds: number;
        timeSpent: string;
        timeSpentSeconds: number;
    };
    worklog: { worklogs: JiraIssueWorklog[] };
};

export type JiraIssueFixVersion = { archived: boolean; id: string; name: string; released: boolean; releaseDate?: string; self: string }

export type JiraIssueParent = {fields: JiraIssueField; id: string; key: string; self: string; }

export type JiraIssueProgress = { progress: number; total: number; percent: number };

export type JiraSubTask = {
    avatarId: number;
    iconUrl: string;
    id: string;
    fields: {
        issuetype: JiraFieldIssueType;
        priority: JiraIssueFieldPriority;
        status: JiraIssueFieldStatus;
        summary: string;
    };
    key: string;
    self: string;
    parent?: JiraIssueParent;
};

export type JiraIdentity = {
    active: boolean;
    avatarUrls: { [dimension: string]: string };
    displayName: string;
    emailAddress: string;
    key: string;
    name: string;
    self: string;
    timeZone: string;
};

type JiraIssueFieldPriority = {
    iconUrl: string;
    id: string;
    name: string;
    self: string;
};

export type JiraFieldIssueType = {
    avatarId: number;
    description: string;
    iconUrl: string;
    id: string;
    name: string;
    self: string;
    subtask: boolean;
};

type JiraIssueFieldStatus = {
    description: string;
    iconUrl: string;
    id: string;
    name: string;
    self: string;
    statusCategory: {
        colorName: string;
        id: number;
        key: string;
        name: string;
        self: string;
    };
};

export type JiraIssueWorklog = {
    author: JiraIdentity;
    created: string; // EX: "2018-09-06T17:47:00.000-0700"
    id: string;
    issueId: string;
    started: string; // EX: "2018-09-06T17:47:00.000-0700"
    timeSpent: string; // EX: "2h"
    timeSpentSeconds: number;
    updateAuthor: JiraIdentity;
    updated: string; // EX: "2018-09-06T17:47:00.000-0700"
};

export type JiraResponse = {
    expand: string;
    issues: JiraIssue[];
    maxResults: number;
    startAt: number;
    total: number;
};

export type JiraIssueChangeLog = {
    histories: JiraChangelogHistory[];
    maxResults: number;
    startAt: number;
    total: number;
};

export type JiraChangelogHistory = {
    author: JiraIdentity;
    created: string; // EX: "2016-10-19T14:44:23.830-0700"
    id: string;
    items: JiraHistoryItem[];
};

export type JiraHistoryItem = {
    field: string;
    fieldtype: string;
    from?: string;
    fromString?: string;
    to: string;
    toString: string;
};

export type JiraAutocompleteIdentity = {
    displayName: string;
    value: string;
};
