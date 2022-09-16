# Biggest challenges encountered along the way
## Deploy & Authentication
In the first Issue I struggled to meet the requirement of deployment with authentication. As I chose to deploy via the proposed Github Pages, htaccess authentication is not active. ([ADR - Github Pages](./decisions/0003-github-pages.md))
## Dockerization
The second challenge was the dockerization of the application. A mapping of different ports lead to a reload of the web page. It could be fixed by adjusting the ports.
## Three dimensional realm
As it was completely new to me working with a three dimensional realm, I had a hard time creating and working in one. My approach was to start a new project and create a 3D area without any Chranach context. That started out okay, with me getting to know three.js. When I transferred the knowledge onto the Cranach project, the specifications became hard to implement. Especially the implementation of a camera and the controller was adifficult task.
## Painting sizes
Also the sizing of the paintings caused difficulties. I was not able to ditermine the dimensions by the textfield dimensions. So I decided to use *sizes.medium.dimensions.height* and *sizes.medium.dimensions.width* for the aspect ratio within an image and the *maxDimensions* for the overall sizing of the image in order to have a comparison between all paintings.
The sizing might not be 100% correct.