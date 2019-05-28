# Contributing to Repo

## New Features
* `git checkout -b feature/<feature-name>` - Creates a new local branch based on current checked out branch and changes into it
* Modify code as needed
    * `git add -A` - Adds all changed files to be staged
    * `git commit -m '<message>' - Commits those files to the branch
* Push up changes to remote repo
    * If branch does **NOT** exist remotely (first commit to branch)
        * `git push --set-upstream origin feature/<feature-name>` - Push changes to remote branch
    * If branch does exist remotely
        * `git push`

* Updating branch w/latest changes to master
    * Update your local master branch
        * `git checkout master` - Switches from current branch to master
        * `git fetch -p origin` - Brings branches and their commits from remote.
            * Can use -p (--prune) to delete any remote-tracking references that no longer exist in remote
        * `git merge origin/master` - Merge changes from remote to your local master
    * Update feature branch with local master
        * `git checkout <feature-branch>` - Switch back to branch
        * `$ git merge master` - Merge changes from updated local master


* Ensuring master is up to date locally
    * Make sure you have master currently checked out
        * **If NOT** `git checkout master`
    * `git push` - Does both `git fetch` & `git merge` in one command


# Starting Dev Server

## Backend
* `cd <repo>` - Top level of repo is the server
* `npm install` - Installs all dependencies (should only be needed once at beginning)
* `npm run dev` - Runs development server for BE at port 5000

## Frontend
* `cd <repo>/client` - Change into FE directory
* `yarn install` - Installs dependencies - should only be needed once unless you install new dependencies
* `yarn start` - Starts local development server at http://localhost:3000
