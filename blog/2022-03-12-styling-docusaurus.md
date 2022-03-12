---
slug: setup-styling-docusaurus
title: Personalizing Docusaurus
authors:
  laurent
tags: [web dev, docusaurus]
---

Phew, just finished the first draft of the personalization of my website. I chose the [Nord palette](https://www.nordtheme.com/docs/colors-and-palettes) since my development environment also uses that colour palette. This means that having my documentation website open right next to my IDE results in a single design language and is very aesthetically pleasing.

<!-- truncate -->

Since I started with the `classic` template from Docusaurus, a lot of the theming of my website was already done, but it followed Docusaurus's colour palette. After some inspection with the browser and reading this [blog](https://theochu.com/docusaurus/styling/), I started to understand how the CSS is handled in Docusaurus.

I also experimented with the [typewriter-effect](https://www.npmjs.com/package/typewriter-effect) library and imported it as a React component to act as my main header page (and add a little flair).

Finally, I added GitHub Actions to automatically deploy my website when `main` is updated, which makes adding new content extremely easy. I can boot up my developer environment, or straight up use Github's editor, and my website will be updated.

Very nice!