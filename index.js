import './node_modules/react-table/react-table.css';
import './styles/styles.scss';
import Error from './Components/Error.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table/Table.jsx';
/* MOCK API RESPONSE DATA */
// import sampleData from './ignore/sampleData1.js';
// import sampleData2 from './ignore/sampleData2.js';

import {
    mapToUsefulData,
    mapSubtasksAndResourcesToParentTask,
    storageAvailable,
    lampstrackUrl,
    jiraApiUrl
} from './utils/utils.js';

const domEntryPoint = document.getElementById('jqtrapp');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: undefined,
            input: '',
            loading: true,
            hasError: false,
            hasWarning: false,
            notification: {
                message: '',
                items: []
            }
        };
        this.getJiraTasks = this.getJiraTasks.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    getJiraTasks(searchQuery) {

        this.setState({
            loading: true,
            hasError: false,
            hasWarning: false,
            notification: { message: '', items: [] }
        });

        /* MOCK API CALL */
        // searchQuery.length % 2 == 0 ? (searchQuery = sampleData) : (searchQuery = sampleData2);
        // setTimeout(() => {
        //     let data = mapSubtasksAndResourcesToParentTask(
        //         searchQuery.issues.map(mapToUsefulData),
        //         this.setState.bind(this)
        //     );
        //     this.setState({
        //         issues: data,
        //         loading: false
        //     });
        // }, 1500);

        fetch(
            `${jiraApiUrl}${window.encodeURIComponent(
                'jql=' + window.encodeURIComponent(searchQuery) + '&maxResults=1000'
            )}`,
            {
                method: 'GET',
                credentials: 'same-origin'
            }
        )
            .then(response => {
                return response.json();
            })
            .then(jiraData => {

                window.location.hash = `jql=${window.encodeURIComponent(searchQuery)}`;
                this.setState({
                    issues: mapSubtasksAndResourcesToParentTask(
                        jiraData.issues.map(mapToUsefulData),
                        this.setState.bind(this)
                    ),
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    loading: false,
                    hasError: true,
                    notification: {
                        message:
                            'There was a problem getting a response. Please check your JQL query and/or try again.',
                        items: []
                    }
                });
            });
    }

    changeHandler(e) {
        this.setState({ input: e.target.value });
    }

    submit(e) {
        if (e.which !== 13 || !this.state.input.trim().length) return;
        if (storageAvailable) {
            window.localStorage.lpTimeRemainingQuery = this.state.input;
        }
        this.getJiraTasks(this.state.input);
    }

    render() {
        return (
            <React.Fragment>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.changeHandler}
                    onKeyUp={this.submit}
                />

                {/* show errors, otherwise loading/table */}
                {this.state.hasError ? (
                    <Error message={this.state.notification.message} />
                ) : this.state.loading ? (
                    <div className="loader" />
                ) : (
                    <Table
                        issues={this.state.issues}
                        appWidth={domEntryPoint.offsetWidth}
                        lampstrackUrl={lampstrackUrl}
                        maxRows={this.state.issues ? this.state.issues.length : 0}
                    />
                )}

                {this.state.hasWarning && this.state.notification.message ? (
                    <Error
                        type={'Warning'}
                        message={this.state.notification.message}
                        items={this.state.notification.items}
                        classNames={['warning']}
                    />
                ) : (
                    ''
                )}
            </React.Fragment>
        );
    }

    componentDidMount() {
        let initialQuery = '';

        if (window.location.hash) {
            let queryArray = window.location.hash.split('&');
            if (queryArray[0].indexOf('jql=') > -1) {
                initialQuery = queryArray[0].split('jql=')[1] || '';
                initialQuery = window.decodeURIComponent(initialQuery);
            }
        } else if (storageAvailable) {
            initialQuery = localStorage.lpTimeRemainingQuery || '';
        }

        if (initialQuery.length) {
            this.setState({ input: initialQuery });
        }

        this.getJiraTasks(initialQuery);
    }
}

ReactDOM.render(<App />, domEntryPoint);
