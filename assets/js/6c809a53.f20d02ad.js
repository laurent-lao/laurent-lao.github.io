"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[9708],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,h=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},p="Advanced Git Guides",c={unversionedId:"git/git-advanced",id:"git/git-advanced",title:"Advanced Git Guides",description:"Changing a commit",source:"@site/docs/git/git-advanced.md",sourceDirName:"git",slug:"/git/git-advanced",permalink:"/docs/git/git-advanced",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/docs/git/git-advanced.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Git Commands",permalink:"/docs/git/git-commands"},next:{title:"Good Practices",permalink:"/docs/git/git-good-practices"}},u={},m=[{value:"Changing a commit",id:"changing-a-commit",level:2},{value:"Archiving Branches",id:"archiving-branches",level:2},{value:"Overwrite Local Branch",id:"overwrite-local-branch",level:2},{value:"Overwrite Remote Branch",id:"overwrite-remote-branch",level:2},{value:"Delete Sensitive Files from Git",id:"delete-sensitive-files-from-git",level:2},{value:"Forking Workflow",id:"forking-workflow",level:2},{value:"Keeping the main branch updated",id:"keeping-the-main-branch-updated",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-git-guides"},"Advanced Git Guides"),(0,a.kt)("h2",{id:"changing-a-commit"},"Changing a commit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~n")," use a commit before the one you want to change"),(0,a.kt)("p",null,'Use VIM to pick/reword/... (actually rewrite pick into "reword" or whatever other command)'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push")," (sometimes need ",(0,a.kt)("inlineCode",{parentName:"p"},"--force"),")"),(0,a.kt)("h2",{id:"archiving-branches"},"Archiving Branches"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/35738790/how-to-close-a-branch-in-git"},"Source")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git tag archive/<branchname> <branchname>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git branch -d <branchname>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git checkout main")),(0,a.kt)("p",null,"Retrieving the archived branch"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git checkout -b new_branch_name archive/<branchname>")),(0,a.kt)("p",null,"My solution (from remote)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git tag archive/<branchname> remotes/origin/<branchname>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push origin --delete <branchname>")),(0,a.kt)("p",null,"Then, update remote"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push --tags")),(0,a.kt)("h2",{id:"overwrite-local-branch"},"Overwrite Local Branch"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/forum/t/git-pull-how-to-override-local-files-with-git-pull/13216"},"Source")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git fetch (--all)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git reset (--hard <remote>/<branch_name>)")," i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset --hard origin/main")),(0,a.kt)("h2",{id:"overwrite-remote-branch"},"Overwrite Remote Branch"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push --force-with-lease")," (better way, won't push if unknown state)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push --force")," (unsafe way)"),(0,a.kt)("h2",{id:"delete-sensitive-files-from-git"},"Delete Sensitive Files from Git"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository"},"Source")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://rtyley.github.io/bfg-repo-cleaner/"},"BFG guide")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"bfg")," instead of the java commands (make sure to mirror)"),(0,a.kt)("p",null,"Can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"git filter-branch")," (more details in source)"),(0,a.kt)("h2",{id:"forking-workflow"},"Forking Workflow"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.qmk.fm/#/newbs_git_using_your_master_branch"},"Source")),(0,a.kt)("p",null,"For some development projects, you might want to fork an existing repository and keep the main branch updated with the fork, and only work off in a development branch in the fork."),(0,a.kt)("h2",{id:"keeping-the-main-branch-updated"},"Keeping the main branch updated"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the source repo as your as a remote alias ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote add upstream <repolink.git>")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Here we used ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream")," by convention, but you can name it anything you want"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Verify that the repository has been added by running ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v")," (the ",(0,a.kt)("inlineCode",{parentName:"p"},"<repolink.git>")," should be displayed right next to the alias you chose (",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," in this case))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now you can check for updates in the source repo by using ",(0,a.kt)("inlineCode",{parentName:"p"},"git fetch <alias>")," (",(0,a.kt)("inlineCode",{parentName:"p"},"git fetch upstream"),")."))),(0,a.kt)("p",null,"To update your fork's main branch, run the following (with ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," key after each line):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit fetch upstream\ngit pull upstream main\ngit push origin main\n")))}d.isMDXComponent=!0}}]);