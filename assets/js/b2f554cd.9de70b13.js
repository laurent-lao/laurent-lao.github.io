"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[477],{10:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/laurent-lao/laurent-lao.github.io/blog/2022-03-11-first-blog-post.md","source":"@site/blog/2022-03-11-first-blog-post.md","title":"First Blog Post","description":"After some time familiarizing myself with React, I decided to ditch my old docsify-based website and transitioned over to Docusaurus.","date":"2022-03-11T00:00:00.000Z","formattedDate":"March 11, 2022","tags":[{"label":"guide","permalink":"/blog/tags/guide"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.235,"truncated":true,"authors":[{"name":"Laurent Lao","title":"Software Developer","url":"https://github.com/laurent-lao","imageURL":"https://github.com/laurent-lao.png","key":"laurent"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":"laurent","tags":["guide","docusaurus"]}},"content":"After some time familiarizing myself with React, I decided to ditch my old docsify-based website and transitioned over to Docusaurus.\\n\\n\x3c!-- truncate --\x3e\\n\\nWith this new change to Docusaurus, I can add custom React elements and custom pages, while keeping the ability to write and publish with Markdown. This makes it very useful for a personal website like mine.\\n\\nThere are many [other websites](https://docusaurus.io/showcase) built with Docusaurus (like [Jest](https://jestjs.io/) and [React Native](https://reactnative.dev/)) since working with Markdown files when documenting or taking notes is far less verbose than with HTML.\\n\\nBelow you will find detailed instructions as to how to create a website such as mine very quickly.\\n\\n## Create a Docusaurus website\\n\\nIf you wish for your Docusaurus website to point at https://username.github.io/ like mine, you must create a Github repository named `username.github.io`. Otherwise, it will create it at https://username.github.io/reponame/\\n\\n* Create an empty Github Repository (e.g. `laurent-lao.github.io`)\\n* Create the Docusaurus application in your local machine using this command `npx create-docusaurus@latest laurent-lao.github.io classic`\\n* Navigate to the new application `cd laurent-lao.github.io`)\\n* Init it as a Git directory `git init`\\n* Edit the `docusaurus.config.js` with the proper information\\n* Execute `git commit -am \\"npx create-docusarus@lastest\\"` to stage and commit the newly created files\\n* Link the local repo with the remote and push it\\n  * \\n  ```bash\\n  git remote add origin git@github.com:laurent-lao/laurent-lao.github.io.git\\n  git branch -M main\\n  git push -u origin main\\n  ```\\n* Modify the website to your liking\\n* Finally, deploy it with `npm run deploy`"}]}')}}]);