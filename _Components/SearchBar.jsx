import './SearchBar.scss';
import React, { useState, useEffect, useContext } from 'react';
import TimeInStatusContext from '../contexts/TimeInStatusContext.js';
import { storageAvailable } from '../utils/utils.js';

export default function SearchBar({ initialSearchString, submitCallback, abortController }) {
    const [searchString, updateSearchString] = useState(initialSearchString);
    // TODO: Consider removing the timeInStatusContext reset to a different component. Having the
    // App component handle the context was causing tons of re-renders of the whole app due to context
    // data changes...
    const timeInStatusContext = useContext(TimeInStatusContext);

    useEffect(() => {
        updateSearchString(initialSearchString);
    }, [initialSearchString]);

    function changeHandler(e) {
        updateSearchString(e.target.value);
    }

    function submit(e) {
        if (e.which !== 13 || searchString.trim().length < 1) {
            return;
        }
        if (storageAvailable) {
            window.localStorage.lpTimeRemainingQuery = searchString;
        }

        submitCallback(searchString, abortController);
        timeInStatusContext.clearTimeInStatus();
    }

    return <input type="text" value={searchString} onChange={changeHandler} onKeyUp={submit} />;
}
