# Three.js as 3D Framework

* Status: accepted <!-- optional -->
* Workload: 2 <!-- optional -->
* Decider: [Linnéa Doberstein](https://github.com/Moosgloeckchen)
* Issue: [16](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/16) <!-- optional -->
* Date: [2022-09-09] <!-- optional -->

## Context and Problem Statement

In order to show relations of the paintings of Lukas Cranach, a three dimensional view is proposed. The focus lies on plain WebGl and the WebGl based library **Three.js**.

## Considered Options

* WebGl
* Three.js

## Decision Outcome

As plain WebGl would require a very low level implementation it might be more time consuming for both developer and reviewer. 
Therefore the decision outcome is the library three.js.
### Positive Consequences <!-- optional -->

* High-Level abstractions
* React Three Fiber can be used to build the scene with re-usable, self-contained components. React Three Fiber has no limitations to three.js
* React Three Drei with useful helpers and fully functional abstractions can be used on top on React Three Fiber. This can simplify for example the implementation of Text elements.
* React Three Cannon can be used for a simpler implementation of controls

### Negative Consequences <!-- optional -->

* For the renderer, the documentation is substatially smaller than the documentation of three.js. The basics are covered, but specific components might be harder to implement.
* As Fiber, Drei and Cannon are React specific it would be hard to migrate to another frontend framework.

## Links <!-- optional -->

* [WebGl](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API?retiredLocale=de)
* [Three.js](https://threejs.org/)
* [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* [React Three Drei](https://www.npmjs.com/package/@react-three/drei)
* [React Three Cannon](https://www.npmjs.com/package/@react-three/cannon)
