# Docker compose as containerization

* Status: accepted 
* Workload: 0.5h <!-- optional -->
* Decider: [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue: [Issue 13](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/13) <!-- optional -->
* Date: 2022-05-27


## Context and Problem Statement

In order to enable the review partner to execute the project on their individual systems (MacOS, Windows and Linux) as quickly and easily as possible a containerization is needed.

## Considered Options

* Docker + docker-compose

## Decision Outcome

Docker is considered a quasi-standard. It keeps the overheat for installation, configuration and update low through automation.

### Positive Consequences <!-- optional -->

* Installation of development components is not necessary
* Extension of new components is easily possible

### Negative Consequences <!-- optional -->

* Docker is required as a dependency and must be installed accordingly on all systems
* Requires more system resources

## Links <!-- optional -->
* [Docker Compose](https://docs.docker.com/compose/)
