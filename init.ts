import merge from 'deepmerge'; //https://github.com/TehShrike/deepmerge
declare var DEVMODE: string; //Webpack assigns a value to this
import { checkStorageAvailability } from './utils/utils';
import { WINDOW_STORAGE_KEY } from './utils/constants';

interface IAppConfiguration {
    jiraApiConfiguration: {
        doneStatusDefinitions: string[];
        jiraApiMaxResults: number;
        options?: {
            jiraCustomFields?: {
                aggregate: boolean;
                average: boolean;
                displayName: string;
                fieldName: string;
                percentOfTotal: boolean;
            }[];
        };
    };
    urlConfiguration: {
        apiHostName: string;
        jiraApiAutocompleteEndpoint: string;
        jiraApiSearchEndpoint: string;
        jiraBaseApiEndpoint: string;
        jiraApplicationUrl: string;
    };
}

class Configuration implements IAppConfiguration {
    public jiraApiConfiguration: {
        doneStatusDefinitions: [];
        jiraApiMaxResults: 0;
    };
    public urlConfiguration: {
        apiHostName: '';
        jiraApiAutocompleteEndpoint: '';
        jiraApiSearchEndpoint: '';
        jiraBaseApiEndpoint: '';
        jiraApplicationUrl: '';
    };
}

let publicConfiguration: IAppConfiguration;
try {
    publicConfiguration = require('./appconfig.json');
} catch (error) {
    console.error(error.message);
    publicConfiguration = new Configuration();
}

let CONFIG = publicConfiguration;

try {
    let privateConfiguration = require('./_appconfig.json');
    CONFIG = merge(publicConfiguration, privateConfiguration);
} catch (_error) {
    console.warn('No Private appconfig.json');
}

// TODO: Implement a configuration validator;
const {
    apiHostName,
    jiraApiAutocompleteEndpoint,
    jiraApiSearchEndpoint,
    jiraBaseApiEndpoint,
    jiraApplicationUrl
} = CONFIG.urlConfiguration;

const { doneStatusDefinitions, jiraApiMaxResults, options } = CONFIG.jiraApiConfiguration;
const { jiraCustomFields } = options;

let hostName: string;
try {
    hostName = DEVMODE === 'true' ? apiHostName : '';
} catch (_error) {
    hostName = '';
}

const isLocalStorageAvailable = checkStorageAvailability(WINDOW_STORAGE_KEY);

export {
    doneStatusDefinitions,
    hostName,
    isLocalStorageAvailable,
    jiraApiAutocompleteEndpoint,
    jiraApiMaxResults,
    jiraApiSearchEndpoint,
    jiraBaseApiEndpoint,
    jiraCustomFields,
    jiraApplicationUrl
};
