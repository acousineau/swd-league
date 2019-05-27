# Contributing to Repo

## New Features
* `git checkout -b feature/<feature-name>` - Creates a new local branch based on current checked out branch and changes into it
* Modify code as needed
    * `git add -A` - Adds all changed files to be staged
    * `git commit -m '<message>' - Commits those files to the branch
* `` - Push changes to remote branch

# Starting Dev Server

## Backend
* `cd <repo>` - Top level of repo is the server
* `npm install` - Installs all dependencies (should only be needed once at beginning)
* `npm run dev` - Runs development server for BE at port 5000

## Frontend
* `cd <repo>/client` - Change into FE directory
* `yarn install` - Installs dependencies - should only be needed once unless you install new dependencies
* `yarn start` - Starts local development server at http://localhost:3000
