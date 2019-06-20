import { createContext } from 'react';

const TimeInStatusContext = createContext({
    /* bunch of key: value pairs. */
    clearTimeInStatus: () => {},
    loadedDate: new Date(),
    updateTimeInStatus: () => {}
});

export default TimeInStatusContext;
