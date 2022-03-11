"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[112],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=n,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7180:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],c={sidebar_position:5},l="Good Practices",s={unversionedId:"git/git-good-practices",id:"git/git-good-practices",title:"Good Practices",description:"Writing good Git Commit Messages",source:"@site/docs/git/git-good-practices.md",sourceDirName:"git",slug:"/git/git-good-practices",permalink:"/docs/git/git-good-practices",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/docs/git/git-good-practices.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced Git Guides",permalink:"/docs/git/git-advanced"},next:{title:"Setting the Mac terminal",permalink:"/docs/mac/mac-setting-terminal"}},p={},u=[{value:"Writing good Git Commit Messages",id:"writing-good-git-commit-messages",level:2},{value:"Gitignore Templates",id:"gitignore-templates",level:2},{value:"Being a good Code Reviewer",id:"being-a-good-code-reviewer",level:2}],g={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"good-practices"},"Good Practices"),(0,o.kt)("h2",{id:"writing-good-git-commit-messages"},"Writing good Git Commit Messages"),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit/"},"How to write a Git Commit Message")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Separate subject from body with a blank line"),(0,o.kt)("li",{parentName:"ol"},"Limit the subject line to 50 characters"),(0,o.kt)("li",{parentName:"ol"},"Capitalize the subject line"),(0,o.kt)("li",{parentName:"ol"},"Do not end the subject line with a period"),(0,o.kt)("li",{parentName:"ol"},"Use the imperative mood in the subject line"),(0,o.kt)("li",{parentName:"ol"},"Wrap the body at 72 characters"),(0,o.kt)("li",{parentName:"ol"},"Use the body to explain what and why vs. how")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Fix typo in README.md")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Fixed typo in READMEmd.")),(0,o.kt)("h2",{id:"gitignore-templates"},"Gitignore Templates"),(0,o.kt)("p",null,"A good practice is to add a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file to avoid uploading non-useful files into a repo."),(0,o.kt)("p",null,"There are templates to get started at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/gitignore"},"this website")),(0,o.kt)("h2",{id:"being-a-good-code-reviewer"},"Being a good Code Reviewer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/eng-practices/review/"},"Google's Enginnering Practices documentation")," is a good reference for writing a good Code Review."))}d.isMDXComponent=!0}}]);