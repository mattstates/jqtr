# JQTR

JQTR Stands for Jira Query Time Remaining.

JQTR allows a user to supply a valid JQL (*JIRA query language*) query and show a table of results to help determine the number of remaining hours left in the result set.

This code is deployed pasting the transpiled and minified source code into an HTML widget in Confluence.
[https://confluence.lampsplus.com:8093/display/WDP/Jira+Query+Time+Remaining](https://confluence.lampsplus.com:8093/display/WDP/Jira+Query+Time+Remaining)

## Features

There are two views: Assignee and Initiative.

### Assignee View
- Data is organized by each person assigned a task within the query result set.

### Initiative View
- Data is organized and aggregated by Jira parent level task.

## Core Technologies

 - [React](https://github.com/facebook/react)
 - [ReactDOM](https://github.com/facebook/react/tree/master/packages/react-dom)
 - [React-Table](https://github.com/react-tools/react-table)
 - [Parcel](https://github.com/parcel-bundler/parcel)

You can run the code by cloning the repo and running the following commands in the terminal. *You will need to supply the base url for any relative links as well as the url for the JIRA API.*


    npm install
    npm start
or you can run a local server with hot reloading with

    npm run dev

Please feel free to contribute.