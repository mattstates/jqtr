# JQTR

JQTR Stands for Jira Query Time Remaining. This code is used at my company by pasting the transpiled source code into an HTML widget in confluence.

## Features

Currently there is one view that shows a table of table index, task names, status, total time remaining, followed by a dynamic set of column showing total time remaining for each resource group.

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

Please open any issues and feel free to contribute.