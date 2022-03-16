"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[2333],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},l="TL;DR",p={unversionedId:"git/git-tldr",id:"git/git-tldr",title:"TL;DR",description:"More Details:",source:"@site/docs/git/git-tldr.md",sourceDirName:"git",slug:"/git/git-tldr",permalink:"/docs/git/git-tldr",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/docs/git/git-tldr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Git Basics",permalink:"/docs/git/git-basics"}},s={},u=[],g={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tldr"},"TL;DR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the Repo\ngit clone <repolink.git>\n\n# Get Status (whether files were modified or remote was updated)\ngit status\n# Pull changes to local\ngit pull # alternatively: git pull origin <branchName> (no '-u')\n# Stage your changes\ngit add <filename> # alternatively: git add . to add all files\n# Commit your changes\ngit commit -m \"[#XX] Add Git guide's TLDR\"\n# Push your changes\ngit push # alternatively: git push -u origin <branchName> (note the '-u')\n\n# Create a branch and switch to it\ngit checkout -b <branchName> # alternatively: just create the branch with git branch <branchName>\n# Update the list of branches from the remote\ngit fetch -a\n# Update your branch with the changes from main\ngit merge main\n# Change branch\ngit checkout <branchName>\n# Go back to main\ngit checkout main\n\n# See the list of commits\ngit log\n")),(0,a.kt)("p",null,"More Details:"),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," see ",(0,a.kt)("a",{parentName:"p",href:"./git-basics#existing-folder"},"Using Existing Folder")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"git add")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," see ",(0,a.kt)("a",{parentName:"p",href:"./git-commands#basic-snapshotting"},"Basic Snapshotting")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," see ",(0,a.kt)("a",{parentName:"p",href:"./git-commands#sharing--updating-projects"},"Sharing & Updating Projects")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," see ",(0,a.kt)("a",{parentName:"p",href:"./git-commands#branching--merging"},"Branching & Merging")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," see ",(0,a.kt)("a",{parentName:"p",href:"./git-commands#inspection--comparison"},"Inspection & Comparison")))}m.isMDXComponent=!0}}]);