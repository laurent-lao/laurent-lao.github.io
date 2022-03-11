---
sidebar_position: 1 
---

# TL;DR

```bash
# Clone the Repo
git clone <repolink.git>

# Get Status (whether files were modified or remote was updated)
git status
# Pull changes to local
git pull # alternatively: git pull origin <branchName> (no '-u')
# Stage your changes
git add <filename> # alternatively: git add . to add all files
# Commit your changes
git commit -m "[#XX] Add Git guide's TLDR"
# Push your changes
git push # alternatively: git push -u origin <branchName> (note the '-u')

# Create a branch and switch to it
git checkout -b <branchName> # alternatively: just create the branch with git branch <branchName>
# Update the list of branches from the remote
git fetch -a
# Update your branch with the changes from main
git merge main
# Change branch
git checkout <branchName>
# Go back to main
git checkout main

# See the list of commits
git log
```

More Details:

For `git clone` see [Using Existing Folder](./git-basics#existing-folder)

For `git status`, `git add` and `git commit` see [Basic Snapshotting](./git-commands#basic-snapshotting)

For `git pull` and `git push` see [Sharing & Updating Projects](./git-commands#sharing--updating-projects)

For `git checkout` see [Branching & Merging](./git-commands#branching--merging)

For `git log` see [Inspection & Comparison](./git-commands#inspection--comparison)