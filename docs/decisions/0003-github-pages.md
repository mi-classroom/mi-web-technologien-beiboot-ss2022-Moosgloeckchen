# Hosting via GitHub Pages

* Status: accepted
* Workload: 30min
* Deciders: [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue: [5](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/5)
* Date: 2022-05-11 <!-- optional -->


## Context and Problem Statement

To deploy the projects content not only on localhost, we need a hosting service.

## Decision Drivers <!-- optional -->

* costs
* availability
* htaccess capable

## Considered Options

* AWS
* GitHub Pages

## Decision Outcome

Chosen option: "GitHub Pages", because for the current specs it is sufficient.

### Positive Consequences <!-- optional -->

* content is deployed

### Negative Consequences <!-- optional -->

* the developer is not able to hide the content behin a htaccess

## Pros and Cons of the Options <!-- optional -->

### AWS

* Good, because it can be hidden behind a htaccess
* Bad, because it is more complex
* Bad, because it is not free of charge

### GitHub Pages

* Good, because it is free of charge
* Good, because easy to deploy
* Bad, because htaccess does not work

## Links <!-- optional -->

* [AWS](https://aws.amazon.com/)
* [GitHub Pages](https://pages.github.com/)
