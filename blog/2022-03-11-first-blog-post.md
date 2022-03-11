---
slug: first-blog-post
title: First Blog Post
authors:
  laurent
tags: [guide, docusaurus]
---

# First Blog Post - Setting up Docusaurus

After some time familiarizing myself with React, I decided to ditch my old docsify-based website and transitioned over to Docusaurus.

<!-- truncate -->

With this new change to Docusaurus, I can add custom React elements and custom pages, while keeping the ability to write and publish with Markdown. This makes it very useful for a personal website like mine.

There are many [other websites](https://docusaurus.io/showcase) built with Docusaurus (like [Jest](https://jestjs.io/) and [React Native](https://reactnative.dev/)) since working with Markdown files when documenting or taking notes is far less verbose than with HTML.

Below you will find detailed instructions as to how to create a website such as mine very quickly.

## Create a Docusaurus website

If you wish for your Docusaurus website to point at https://username.github.io/ like mine, you must create a Github repository named `username.github.io`. Otherwise, it will create it at https://username.github.io/reponame/

* Create an empty Github Repository (e.g. `laurent-lao.github.io`)
* Create the Docusaurus application in your local machine using this command `npx create-docusaurus@latest laurent-lao.github.io classic`
* Navigate to the new application `cd laurent-lao.github.io`)
* Init it as a Git directory `git init`
* Edit the `docusaurus.config.js` with the proper information
* Execute `git commit -am "npx create-docusarus@lastest"` to stage and commit the newly created files
* Link the local repo with the remote and push it
  * 
  ```bash
  git remote add origin git@github.com:laurent-lao/laurent-lao.github.io.git
  git branch -M main
  git push -u origin main
  ```
* Modify the website to your liking
* Finally, deploy it with `npm run deploy`




