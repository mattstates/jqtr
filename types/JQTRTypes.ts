import {
    JiraIssueParent,
    JiraIssueFixVersion,
    JiraIssueProgress,
    JiraFieldIssueType
} from './JiraTypes';

export type MappedJiraIssue = {
    assignedQA: MappedIdentity[];
    assignee: MappedIdentity;
    components: { name: string; id: string }[];
    creator: MappedIdentity;
    epicTaskNumber: number;
    failedCodeReviewCount: number;
    failedQACount: number;
    fixVersion?: JiraIssueFixVersion[];
    flags?: string;
    id: string;
    isSubtask: boolean;
    issueLinks: any[];
    issueType: JiraFieldIssueType;
    keyTask: boolean;
    labels: string;
    parent?: JiraIssueParent;
    productOwner: MappedIdentity;
    projectType: string;
    resolution?: string;
    resourceGroup?: { name: string; self: string };
    resourceQueue: string;
    status: string;
    subtasks: MappedJiraSubtask[];
    taskNumber: string;
    taskTitle: string;
    timeProps: {
        aggregateProgress: JiraIssueProgress;
        aggregateTimeEstimate: number;
        aggregateTimeOriginalEstimate: number;
        aggregateTimeSpent: number;
        originalEstimate: number;
        timeEstimate: number;
        timeRemaining: number;
        needsEstimate: boolean;
        progress: JiraIssueProgress;
    };

    // Flag to denote when we have had to access additional Jira info but should not include
    // the issue's data in the table's results for time and resources.
    omitFromJqtr: boolean;
};

export type MappedJiraSubtask = {
    assignedQA?: MappedIdentity[];
    assignee?: MappedIdentity;
    components?: { name: string; id: string }[];
    creator?: MappedIdentity;
    epicTaskNumber?: number;
    failedCodeReviewCount?: number;
    failedQACount?: number;
    fixVersion?: JiraIssueFixVersion[];
    flags?: string;
    id: string;
    isSubtask: boolean;
    issueLinks?: any[];
    issueType: JiraFieldIssueType;
    keyTask?: boolean;
    labels?: string;
    omitFromJqtr?: boolean;
    parent?: JiraIssueParent;
    productOwner?: MappedIdentity;
    projectType?: string;
    resolution?: string;
    resourceGroup?: { name: string; self: string };
    resourceQueue?: string;
    status: string;
    subtasks?: any[];
    taskNumber: string;
    taskTitle: string;
    timeProps?: {
        aggregateProgress?: JiraIssueProgress;
        aggregateTimeEstimate?: number;
        aggregateTimeOriginalEstimate?: number;
        aggregateTimeSpent?: number;
        originalEstimate?: number;
        timeEstimate?: number;
        timeRemaining?: number;
        needsEstimate?: boolean;
        progress?: JiraIssueProgress;
    };
};

export type MappedIdentity = {
    name: string;
    avatarUrls: string;
    emailAddress: string;
};

export interface ToolTipTimeData {
    assignee: string;
    timeRemaining: number;
    needsEstimate: boolean;
}
