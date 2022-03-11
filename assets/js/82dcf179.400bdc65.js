"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[660],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4618:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],u={slug:"first-blog-post",title:"First Blog Post",authors:"laurent",tags:["guide","docusaurus"]},l="First Blog Post - Setting up Docusaurus",s={permalink:"/blog/first-blog-post",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/blog/2022-03-11-first-blog-post.md",source:"@site/blog/2022-03-11-first-blog-post.md",title:"First Blog Post",description:"After some time familiarizing myself with React, I decided to ditch my old docsify-based website and transitioned over to Docusaurus.",date:"2022-03-11T00:00:00.000Z",formattedDate:"March 11, 2022",tags:[{label:"guide",permalink:"/blog/tags/guide"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:1.39,truncated:!0,authors:[{name:"Laurent Lao",title:"Software Developer",url:"https://github.com/laurent-lao",imageURL:"https://github.com/laurent-lao.png",key:"laurent"}],frontMatter:{slug:"first-blog-post",title:"First Blog Post",authors:"laurent",tags:["guide","docusaurus"]}},c={authorsImageUrls:[void 0]},p=[{value:"Create a Docusaurus website",id:"create-a-docusaurus-website",level:2}],m={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After some time familiarizing myself with React, I decided to ditch my old docsify-based website and transitioned over to Docusaurus."),(0,i.kt)("p",null,"With this new change to Docusaurus, I can add custom React elements and custom pages, while keeping the ability to write and publish with Markdown. This makes it very useful for a personal website like mine."),(0,i.kt)("p",null,"There are many ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/showcase"},"other websites")," built with Docusaurus (like ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),") since working with Markdown files when documenting or taking notes is far less verbose than with HTML."),(0,i.kt)("p",null,"Below you will find detailed instructions as to how to create a website such as mine very quickly."),(0,i.kt)("h2",{id:"create-a-docusaurus-website"},"Create a Docusaurus website"),(0,i.kt)("p",null,"If you wish for your Docusaurus website to point at ",(0,i.kt)("a",{parentName:"p",href:"https://username.github.io/"},"https://username.github.io/")," like mine, you must create a Github repository named ",(0,i.kt)("inlineCode",{parentName:"p"},"username.github.io"),". Otherwise, it will create it at ",(0,i.kt)("a",{parentName:"p",href:"https://username.github.io/reponame/"},"https://username.github.io/reponame/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an empty Github Repository (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"laurent-lao.github.io"),")"),(0,i.kt)("li",{parentName:"ul"},"Create the Docusaurus application in your local machine using this command ",(0,i.kt)("inlineCode",{parentName:"li"},"npx create-docusaurus@latest laurent-lao.github.io classic")),(0,i.kt)("li",{parentName:"ul"},"Navigate to the new application ",(0,i.kt)("inlineCode",{parentName:"li"},"cd laurent-lao.github.io"),")"),(0,i.kt)("li",{parentName:"ul"},"Init it as a Git directory ",(0,i.kt)("inlineCode",{parentName:"li"},"git init")),(0,i.kt)("li",{parentName:"ul"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," with the proper information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},'deploymentBranch: "gh-pages"')," property to the file"))),(0,i.kt)("li",{parentName:"ul"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},'git commit -am "npx create-docusarus@lastest"')," to stage and commit the newly created files"),(0,i.kt)("li",{parentName:"ul"},"Link the local repo with the remote and push it",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add origin git@github.com:laurent-lao/laurent-lao.github.io.git\ngit branch -M main\ngit push -u origin main\n"))),(0,i.kt)("li",{parentName:"ul"},"Modify the website to your liking"),(0,i.kt)("li",{parentName:"ul"},"Finally, deploy it with ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run deploy")),(0,i.kt)("li",{parentName:"ul"},"You might have to configure the deployment through Github by going to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings -> Pages"),' and change the branch to "gh-pages"')))}h.isMDXComponent=!0}}]);