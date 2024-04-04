#!/bin/bash

# This script creates tracking branches for all remote branches (i.e. "checks out all exercise branches")
# Having all local exercise branches is an essential prerequisite for running `git rebase --update-refs`!

for remote_branch in `git branch -a | grep remotes | grep exercise`; do 
    git branch --track ${remote_branch#remotes/origin/} ${remote_branch}
done