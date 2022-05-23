# Github Workflow

## Branching
The __[Feature Branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)__ workflow was chosen for this project.
Naming will follow this convention: <type of branch> /ms- <milestone number> / <short description> (E.g.: `feature/ms-1/basic-functioning`)

## Commit Messages
The [Gitmoji](https://gitmoji.dev/) declares the type of commit, followed by a short description (E.g.: `:sparkles: add basic functions`)

## Review

1. Author creates PR
    * on [https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/pulls](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/pulls)
    * choose: _Compare & pull request_ 
        * Add title: _Issue Number - short description_ e.g.: `Issue 2 - Review Process`
        * Use [template](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/blob/feature/ms-2/review-process/.github/pull_request_template.md) (Template from: [EmbeddedArtistry](https://embeddedartistry.com/blog/2017/08/04/a-github-pull-request-template-for-your-projects/))
        * Add Reviewers: ?
        * _Create pull request_
2. Move issue to review column
3. Reviewer adds comments/ suggestions/ declines or approves the PR
4. If a request to improve exists, it will be implemented by the author
5. Once approved, the PR can be __squash merged__ (after rebasing if nesseccary)
