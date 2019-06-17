import React, { useState, useEffect } from 'react';
import { storageAvailable } from '../utils/utils.js';

export default function SearchBar({ initialSearchString, submitCallback, abortController }) {
    const [searchString, updateSearchString] = useState(initialSearchString);

    useEffect(
        () => {
            updateSearchString(initialSearchString);
        },
        [initialSearchString]
    );

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
    }

    return <input type="text" value={searchString} onChange={changeHandler} onKeyUp={submit} />;
}
