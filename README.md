# javascript-basics
This repository contains a selection of Javascript-focused exercises intended to teach the basic concepts of Javascript running inside a browser.
## How To Use
The exercises are based on each other, s.t. exercise 1 through 6 should be done in exactly that order.
Different states of the repository are marked with branches. The branch name pattern is as follows:
- `exercise_n` - Start of exercise n, containing the description and all code from the preceding exercises
- `exercise_n_solution` - A solution to exercise n. This is by no means meant to be the only solution.
- `exercise_n_solution_challenges` - A solution to the challenges of exercise n.

Set your working copy to the first exercise state to start hacking (`git checkout exercise_1`).

# How To Change
In order to keep the linear history of all exercise branches, whenever you changes something, you have to rebase all the other branches on top of it, in order to restore the linear history. 
Luckily, `git rebase` has a feature making this very simple: `git rebase --update-refs`, so that you only have to rebase once the last branch in the exercise history and git will automatically update all branches inbetween.

For example: Let's say we found a bug in `exercise_1_solution`
The workflow to fix it could be as follows (assuming that `exercise_6_solution` is the last branch):
```sh
git pull
./setup_exercise_branches.sh
git checkout exercise_1_solution
# Make changes
git add --update
git commit
git rebase --update-refs exercise_1_solution exercise_6_solution
<<<<<<< Updated upstream
git push --all
```
=======
# IMPORTANT: Pause and look at your commit graph. Only if it looks like you expect, proceed with force-pushing. You may otherwise permanently delete things!
# git push --all --force
```
>>>>>>> Stashed changes
