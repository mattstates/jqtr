import { hostName, jiraApiSearchEndpoint, jiraBaseApiEndpoint, jiraApplicationUrl } from '../init';

const jiraApiUrl = hostName + jiraBaseApiEndpoint + jiraApiSearchEndpoint + '?';

const jiraApiUrlByIssue = hostName + jiraBaseApiEndpoint + '/issue/';

export { jiraApiUrl, jiraApiUrlByIssue, jiraApplicationUrl };
