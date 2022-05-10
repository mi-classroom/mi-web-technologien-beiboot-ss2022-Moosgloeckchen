# [short title of solved problem and solution]

* Status: accepted 
* Workload: [in hours] <!-- optional -->
* Deciders:v [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue:  [?](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/?)
* Date: 10.05.2022 <!-- optional -->

## Context and Problem Statement

For the implementation of the frontend, the selection of plain js or a framework is required.


## Decision Drivers <!-- optional -->

* [driver 1, e.g., a force, facing concern, …]
* [driver 2, e.g., a force, facing concern, …]
* … <!-- numbers of drivers can vary -->

## Considered Options

* Vanilla JS
* Framework
* … <!-- numbers of options can vary -->

## Decision Outcome

The development of the frontend components is done with the React.js framework. The decision is primarily based on the time frame of the project and the different level of knowledge of the team.

### Positive Consequences <!-- optional -->

* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, …]
* …

### Negative Consequences <!-- optional -->

* [e.g., compromising quality attribute, follow-up decisions required, …]
* …

## Pros and Cons of the Options <!-- optional -->

### Framework
#### Pro

* Debugging is taken over by the framework  
* Increases development speed by, for example, abstracting complex code or pre-built utilities that come with it 
* Frameworks follow industry standards 
* developer can concentrate on the solution to be developed
* Consistent interfaces and methods facilitate collaboration regardless of the developers skill level 

#### Con

* Implementing a framework at this time might be too restrictive
* If problems occur, the search for a solution may take longer, since the peculiarities of the framework must be taken into account or may be the cause.
* Possible problems occurring during upgrades of a framework 

* … <!-- numbers of pros and cons can vary -->

### Vanilla JS
#### Pro

* Own code, independent dealing with all details like DOM or ECMAScript 
* All connections of the code comprehensible
* Fully customizable 

#### Con

* Very time consuming as the complete code has to be written from scratch by the developer  


## Reviewed framework options

* Reacts.js
* Vue.js
* Angular.js

## Decision Outcome

Reactjs was chosen. The frameworks under consideration are technically very similar. Therefore, personal preferences were taken into account in the decision-making process. These include the fact that the developer already have experience with Reactjs, which significantly shortens the learning curve and allows the project to be set up quickly.
### [option 3]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->
