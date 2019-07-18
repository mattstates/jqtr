# JQTR Version 2.1.0

### JQTR: *Jira Query Time Remaining*

JQTR allows a user to supply a valid [JQL](https://confluence.atlassian.com/jiracore/blog/2015/07/search-jira-like-a-boss-with-jql) (*JIRA query language*) query and show a table of results to help determine the number of remaining hours left in the result set.

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
 - [react-tooltip](https://github.com/wwayne/react-tooltip)
 - [jest](https://jestjs.io/)
 - [date-fns](https://github.com/date-fns/date-fns)

## Development
You can transpile the code by cloning the repo and running the following commands in the terminal.

````javascript
    npm install
    npm start
````
or you can run a local dev server environment with
````javascript
    npm run dev
````
Then you would want to create html tags to link to localhost to request the .js and .css files. *(see the Deployment section below for a similar example of this)*

You will need a `div` with an id of `jqtrapp` to serve as the React entrypoint
````html
<div id="jqtrapp"></div>
````

## Deployment
The best way to use this app would be to compile your code changes with
````javascript
    npm run build
````
Then drop the index.css and index.js files into this folder:
````
\\prod1_atlas1\custom\JQTR
````

Within a Confluence page add a HTML macro and drop this markup into it:
```html
<link rel="stylesheet" href="/custom/JQTR/index.css">
<div id="jqtrapp">
    ...LOADING
</div>
<script src="/custom/JQTR/index.js"></script>
````
## Tests
````javascript
    npm run test
````

Please feel free to contribute.

#### Release Notes
*2.1.0*

* Use React-Tooltip to style hover data
* Update NPM dependencies
* Extract the App component and convert to use React hooks
* Reduce the API data requested to increase speed
* Add a percent-complete component (Parent level shows aggregate percent complete, sub tables show task level percent complete.)
* Display the duration a task has been in its current status
* Show an indication when a total time column has tasks that don't have an estimate
* Add the ability to write and run unit tests (Jest)
* Fixed rounding issue in printHoursPretty fn'