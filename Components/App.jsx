import Error from './Error.jsx';
import Loader from './Loaders/Loader.jsx';
import React, { useEffect, useMemo, useReducer } from 'react';
import SearchBar from './SearchBar.jsx';
import Table from './Table/Table.jsx';
import { jiraApiUrl, jiraApplicationUrl } from '../utils/urls.ts';
import { mapToUsefulData, gatherAllTasks, getFetchOptions } from '../utils/apiUtils.js';
import { isLocalStorageAvailable } from '../init';

function EmptyNotification() {
    return { message: '', items: [] };
}

const initialAppState = {
    isLoading: true,
    hasError: false,
    data: undefined,
    hasHad401: false,
    notification: new EmptyNotification(),
    action: {
        type: undefined
    },
    jiraTasksAbortController: new AbortController()
};

const ACTIONS = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAIL: 'FETCH_FAIL',
    FETCH_401: 'FETCH_401',
    FETCH_DETACH: 'FETCH_DETACH'
};

function jiraFetchReducer(state, action) {
    switch (action.type) {
        case ACTIONS.FETCH_START:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                notification: new EmptyNotification()
            };
        case ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                data: action.payload,
                jiraTasksAbortController: new AbortController()
            };
        case ACTIONS.FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                notification: action.payload,
                jiraTasksAbortController: new AbortController()
            };
        case ACTIONS.FETCH_401:
            return {
                ...state,
                hasHad401: true
            };
        case ACTIONS.FETCH_DETACH:
            return {
                ...state,
                jiraTasksAbortController: new AbortController()
            };
        default:
            return new Error();
    }
}

function getInitialQuery() {
    if (window.location.hash) {
        let initialQuery;

        let queryArray = window.location.hash.split('&');
        if (queryArray[0].indexOf('jql=') > -1) {
            initialQuery = queryArray[0].split('jql=')[1] || '';
            initialQuery = window.decodeURIComponent(initialQuery);
        }
        return initialQuery;
    } else if (isLocalStorageAvailable) {
        return localStorage.lpTimeRemainingQuery || '';
    }
    return '';
}

export default function App({ appWidth }) {
    const initialSearchString = useMemo(getInitialQuery, []);

    const [appState, dispatch] = useReducer(jiraFetchReducer, initialAppState);

    function fetchJiraTasks(searchQuery, abortController) {
        dispatch({ type: ACTIONS.FETCH_START });

        const signal = abortController.signal;
        const encodedSearchQuery = window.encodeURIComponent(searchQuery);

        fetch(`${jiraApiUrl}jql=${window.encodeURIComponent(encodedSearchQuery)}&maxResults=1000&fields=-description`, getFetchOptions([['signal', signal]]))
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((jiraData) => {
                window.location.hash = `jql=${encodedSearchQuery}`;
                return gatherAllTasks(jiraData.issues.map(mapToUsefulData));
            })
            .then((formattedIssues) => {
                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: formattedIssues });
            })
            .catch((err) => {
                console.error(err);
                const requestMessage = err.ok ? 'There was a problem getting a response.' : `${err.status} ${err.statusText}.`;
                dispatch({ type: ACTIONS.FETCH_FAIL, payload: requestMessage });

                if (err.status === 401) {
                    dispatch({ type: ACTIONS.FETCH_401 });
                }
            });
    }

    useEffect(() => {
        if (initialSearchString.length) {
            fetchJiraTasks(initialSearchString, appState.jiraTasksAbortController);
        }

        return () => {
            appState.jiraTasksAbortController.abort();
            dispatch({ type: ACTIONS.FETCH_DETACH });
        };
    }, []);

    let renderComponent;

    // show errors, otherwise loading/table
    if (appState.hasError) {
        renderComponent = <Error message={appState.notification.message} permissions={appState.hasHad401} />;
    } else {
        renderComponent = appState.isLoading ? <Loader /> : <Table issues={appState.data} appWidth={appWidth} jiraApplicationUrl={jiraApplicationUrl} />;
    }

    return (
        <React.Fragment>
            <SearchBar abortController={appState.jiraTasksAbortController} initialSearchString={initialSearchString} submitCallback={fetchJiraTasks} />
            {renderComponent}
        </React.Fragment>
    );
}
