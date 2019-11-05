import './SearchBar.scss';
import React, { useContext, useEffect, useState } from 'react';
import { TimeInStatusContext } from '../contexts/TimeInStatusContext';
import { isLocalStorageAvailable } from '../init';

interface SEARCHBAR_PROPS {
    initialSearchString: string;
    submitCallback: (searchString: string, abortController: AbortController) => void;
    abortController: AbortController;
}
export default function SearchBar({
    initialSearchString,
    submitCallback,
    abortController
}: SEARCHBAR_PROPS) {
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
        if (isLocalStorageAvailable) {
            window.localStorage.lpTimeRemainingQuery = searchString;
        }

        submitCallback(searchString, abortController);
        timeInStatusContext.clearTimeInStatus();
    }

    return <input type="text" value={searchString} onChange={changeHandler} onKeyUp={submit} />;
}
