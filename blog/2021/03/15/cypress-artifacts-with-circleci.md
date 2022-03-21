---
slug: cypress-artifacts-with-circleci
title: Cypress Artifacts with CircleCI 
authors:
  laurent
tags: [CI/CD, web dev, snippet]
---

Making CircleCI work with Cypress auto-generated artifacts is pretty easy. Just store the artifacts by adding this to the CircleCI workflow:

```yml
- store_artifacts:
    path: cypress/videos
- store_artifacts:
    path: cypress/screenshots
```

A more detailed snippet for context:

```yml title=config.yml
  e2e-tests:
      docker:
        - image: cypress/base:14.16.0
          environment:
            TERM: xterm
      steps:
        - attach_workspace:
            at: ./
        - run:
            name: Install cypress
            command: npm run circle:install:cypress
        - run:
            name: Run server and E2E tests 
            command: npm run circle:cy:run
            working_directory: ./
        - store_artifacts:
            path: cypress/videos
        - store_artifacts:
            path: cypress/screenshots
```
