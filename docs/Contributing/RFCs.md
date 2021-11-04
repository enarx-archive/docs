# RFCs
The Enarx project welcomes contributions!

Would you like to help with the development of Enarx?

This page will guide you towards submiting your first RFC – Request for Comment
–, the process used by the project to formally describe improvements or new
ideas.

There are many different skills needed to build Enarx, from low-level assembly
code for platform-specific enablement (think SGX, SEV, etc.) to kernel-related 
work, from WebAssembly to building and maintaining our infrastracture and automated
integration and testing (CI/CD), and more, so please don't hesitate to try your
hand at any of these or to come and talk to us.

You will find the list of accepted RFCs
[here](https://github.com/enarx/rfcs/blob/master/index.md) and the list of those
open and currently under review [here](https://github.com/enarx/rfcs/pulls).

## Code of Conduct
The Enarx project aims to be a welcoming and inclusive community, and to this
end adheres to and enforces the Contributor Covenant code of conduct. You can read it
[here](https://github.com/enarx/.github/blob/master/CODE_OF_CONDUCT.md).

## RFCs

Most of the explanations for contributing to the Enarx RFC process is described
on the [RFC repo](https://github.com/enarx/rfcs).

You'll find below extra information not covered there, such as how to set up
your system to use git and do Pull Request, which are the basis of the RFC
process.

TODO: explain git in more detail
o
### Git environment set up

Here are a few pointers to help you set up git.

These commands assume you are using a free and open source linux-based operating system, such as Fedora or
Debian.
If you are using something else, please help us make them robust by testing them
and pointing out any issues!

#### On the Github side
* Ensure you have an SSH key set up. If you do not, you can generate one with the following command:
  * `ssh-keygen -t ed25519 -C "$(whoami) on $(hostname), generated on $(date -I)"`
Then add it to your Github profile.
* Fork the desired repo on github.com to your user, to be able to work on your own version of the code before submitting it. On any given repo, say [enarx/rfcs](https://github.com/enarx/rfcs), use the "fork" button at the top right to create a copy of the repo in your Github account.

#### On your local machine
* If you have not already done so, set your username and email:
  * `git config --global user.name "your name"`
  * `git config --global user.email "your.em@il.test"`
* Clone your fork locally:
  * `git clone https://github.com/<your_username>/rfcs>`
* Add an "upstream" remote to your local git repo:
  * `git remote add upstream https://github.com/enarx/rfcs.git`
* To check the remote repositories: `git remote -v`

### Working on the documents
* Create a branch for your work:
  * `git checkout -b <your_working_branch>`
* Make your changes, then add the changed files to the staging area:
  * `git add <file>` (or `git add -a` to take into account all modified files, including deletions)
* Commit your changes:
  * `git commit -m "commit message here"`
* Push your changes:
  * `git push`
* If this is your first commit on your new branch, you will need to create the new branch remotely before pushing to it. This can all be done in one command with: `git push --set-upstream origin <your-branch-name>`. Git should suggest this as a command when a regular push fails.

With this, your code is visible in your personal repo on Github and can be shown to others, for instance.

### Contributing your changes
When you consider your documents to be ready, you can make a request for these to be reviewed and, if al goes well, merged into repository: a Pull Request (or PR).

On Github, go to your personal repo (the one you `git clone`d earlier) and find the branch you worked on. You can see your branches at: `https://github.com/<your_username>/rfcs/branches`.

You can then click on  "New pull request".

If your PR includes multiple commits, explain what you are trying to achieve, to give context to the reviewers.

Once you are ready, click on "Create pull request".

You have just contributed code to the project, thanks!

#### How often to commit, how often to make pull requests?
Our recommendation is to commit incrementally, whether it works or not, and to push it to your *personal* repo.

When your code is at a point at which you're ready to merge it, squash all the "stream of consciousness" commits into a series of logical commits. This helps maintain a history of code changes that is both truthfull and readable to others.

Also, make sure that your commit messages follow these conventions in order to be clear and maintainable: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

### Keeping your code up to date with the project's code
Note: probably of less importance for RFCs, but leaving just in case.

As the project keeps moving, the code base will change. Once changes have been made to the Enarx repo, to keep your local version of the code up to date:
* [Sync the fork](https://help.github.com/en/articles/syncing-a-fork):
  * `git fetch upstream`
* Ensure you are on your master branch:
  * `git checkout master`
* Make sure your local master branch is up to date with the upstream (that any commits you've made that aren't already in upstream/master are replayed on top of that other branch):
  * `git rebase upstream/master`

From then on, you can go on to making changes again on your working branch, committing them etc..
