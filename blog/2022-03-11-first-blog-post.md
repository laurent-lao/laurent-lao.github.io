---
slug: first-blog-post
title: First blog post with Docusaurus! 
authors:
  laurent
tags: [web dev, guide, docusaurus]
---

# Setting up Docusaurus (First blog post!)

After some time familiarizing myself with React, I decided to ditch my [old docsify-based](https://github.com/laurent-lao/guides) website and transitioned over to Docusaurus.

With this new change to Docusaurus, I can add custom React elements and custom pages, while keeping the ability to write and publish with Markdown. This makes it very useful for a personal website like mine.

There are many [other websites](https://docusaurus.io/showcase) built with Docusaurus (like [Jest](https://jestjs.io/) and [React Native](https://reactnative.dev/)) since working with Markdown files when documenting or taking notes is far less verbose than with HTML.

Below you will find detailed instructions as to how to create a website such as mine very quickly.

<!-- truncate -->

## Create a Docusaurus website

If you wish for your Docusaurus website to point at https://username.github.io/ like mine, you must create a Github repository named `username.github.io`. Otherwise, it will create it at https://username.github.io/reponame/

* Create an empty Github Repository (e.g. `laurent-lao.github.io`)
* Create the Docusaurus application in your local machine using this command `npx create-docusaurus@latest laurent-lao.github.io classic`
* Navigate to the new application `cd laurent-lao.github.io`)
* Init it as a Git directory `git init`
* Edit the `docusaurus.config.js` with the proper information
  * Add a `deploymentBranch: "gh-pages"` property to the file
  * Add a `trailingSlash: false` property to the file
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
* You might have to configure the deployment through Github by going to `Settings -> Pages` and change the branch to "gh-pages"

## Custom Domain

After the initial setup is complete and some content is added, it might be time to use a custom domain for you Docusaurus website. Nothing wrong with a .github.io suffix, but it is nice to have a custom domain.

There is instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) from the GitHub Docs. I personally use Hover for my domains and [this guide](https://nickymarino.com/2018/07/29/hover-github-pages/) helped me get set up.




