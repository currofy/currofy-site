# Contributing 💪
You can contribute to Currofy.com with issues and PRs. Simply [filing issues](https://github.com/currofy/currofy-site/issues/new?assignees=&labels=&template=bug_report.md&title=) for problems you encounter is a great way to contribute. Contributing implementations is greatly appreciated.

### Fork the repository

If you're not familiar with this term, GitHub's [help pages](https://help.github.com/articles/fork-a-repo/) provide again a simple explanation:

> A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.

## Our Git Contribution Workflow

### Create a new branch

You should never develop against the "master" branch. The development team will not accept a pull request against that branch. Instead, create a descriptive named branch and work on it.

First, you should always pull the latest changes from the master repository:

```
git checkout master
git pull
```

Now we can create a new branch for your additions:

```
git checkout -b <BRANCH-NAME>
```

You can check on which branch you are with `git branch`. You should see a list of all local branches. The current branch is indicated with a little asterisk.


## Commit messages
The project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) for commit messages in order to aid in automatic generation of changelogs. As described in the Conventional Commmits specification, commit messages should be of the form:

<type>[optional scope]: <description>

[optional body]

[optional footer]

where the type is one of
* "fix": for bug fixes
* "feat": for new features
* "refactor": for refactors
* "test": for test-only changes
* "docs": for docs-only changes
* "revert": for reverting other changes
* "perf", "style", "build", "ci", or "chore": as described in the [Angular specification](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) for Conventional Commits.
