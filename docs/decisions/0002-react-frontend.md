# React as Frontend framework

* Status: accepted 
* Workload: 30min <!-- optional -->
* Deciders: [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue:  [2](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/2)
* Date: 2022-05-10

## Context and Problem Statement
For the implementation of the frontend, the selection of plain js or a framework is required.

## Considered Options

* Vanilla JS
* Framework

## Decision Outcome

The development of the frontend components is done with the React.js framework. The decision is primarily based on the level of knowledge of the developer.

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

React.js was chosen. The frameworks under consideration are technically very similar. Therefore, personal preferences were taken into account in the decision-making process. These include the fact that the developer already has experience with Reactjs, which significantly shortens the learning curve and allows the project to be set up quickly.
### React.js

* Good, because the developer has some experience with React.js
* Good, because it uses JSX

### Vue.js

* Bad, because the developer has no experience

### Angular

* Bad, because the develop has no experience
* is a bit more complex than the other two

## Links <!-- optional -->

* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)