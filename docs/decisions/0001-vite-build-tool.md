# Vite as Build Tool

* Status: accepted
* Workload: 1h
* Decider: [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue: [3](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/3)
* Date: 2022-05-09

## Context and Problem Statement

To automate the creation of executable applications from code this project is in need of a build tool.

## Considered Options

* no build tool
* Webpack
* Vite

## Decision Outcome

Chosen option: "Vite", because for the current requirements, Webpack and Vite are interchangable. With a view on a future project size the decision was made to use Vite. Also using Vite brings new experiences, because it is new to the developer.

### Positive Consequences <!-- optional -->

* faster automated build for large projects


## Pros and Cons of the Options <!-- optional -->

### No build tool

Linking, compiling, packaging the source code manually  <!-- optional -->

* Bad, because of the not necessary manual work
* … <!-- numbers of pros and cons can vary -->

### Webpack

Automated build via Webpack

* Good, because it is open source
* Good, because it has on-demand compilation
* Bad, because with big projects, it takes a long time building
* … <!-- numbers of pros and cons can vary -->

### Vite

Automated build via Vite

* Good, because it is open source
* Good, because it is faster, regardless of the app size
* Good, because it has on-demand compilation
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* [Webpack](https://webpack.js.org/)
* [Vite](https://vitejs.dev/)