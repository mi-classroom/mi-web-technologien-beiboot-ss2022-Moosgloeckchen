![cda experience](./frontend/src/assets/images/header.PNG)
# Web Technologies // Project 2022

This is the accompanying project for the module Web Technologies. We will successively develop a project from issue to issue, look at the progress and do code reviews as well as present and discuss development steps.

We will use GitHub Classroom as the organizational framework for the project. In terms of content, we are looking at developing a small web application for editing images. The focus here is less on a professional conception, design and development process, but rather on successively developing an application, trying it out, comparing, refactoring and enjoying executable code.

## Team
Author: [Linnéa Doberstein](https://github.com/Moosgloeckchen)  
Reviewer: [Max Hammer](https://github.com/MaxHam)

## Domain
[https://moosgloeckchen.github.io/](https://moosgloeckchen.github.io/)

## Quick start

To start the Project Docker Compose must be installed on the device. After that, follow these steps:

1. Clone project
2. Copy prepared Cranach images into a new folder `data` inside the `frontend` folder:
    ```
    auth/
    docs/
    frontend/
        data
        src
    ```
3. Create and start the service via `docker-compose up -d --build` from inside the folder `frontend`.
4. Finally call [localhost:3000](http://localhost:3000)
5. To shut down the container, use `docker-compose down --remove-orphans`.

## Decision Records
Interested in decisions made along the way? Have a look at the [Architectural Decision Records (ADR's)](./docs/decisions/README.md).

## Process documentations
* [Kanban Board](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/projects/1)
* [Github Workflow](./docs/review-process.md)
* [Timetracking](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-Moosgloeckchen/issues/7)
* [Challenges](./docs/challenges.md)

## Notes
This implementation is a prototype.
This prototype should give a preview of a display of Cranachs paintings.