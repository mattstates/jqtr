import './node_modules/react-table/react-table.css';
import './styles/styles.scss';
import App from './Components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import TimeInStatusProvider from './contexts/TimeInStatusProvider.jsx';

const domEntryPoint = document.getElementById('jqtrapp');

ReactDOM.render(
    <TimeInStatusProvider>
        <App appWidth={domEntryPoint.offsetWidth} />
    </TimeInStatusProvider>,
    domEntryPoint
);
