"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[5642],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},s="Git Basics",c={unversionedId:"git/git-basics",id:"git/git-basics",title:"Git Basics",description:"Git GUI Client",source:"@site/docs/git/git-basics.md",sourceDirName:"git",slug:"/git/git-basics",permalink:"/docs/git/git-basics",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/docs/git/git-basics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TL;DR",permalink:"/docs/git/git-tldr"},next:{title:"Git Commands",permalink:"/docs/git/git-commands"}},u={},p=[{value:"Git GUI Client",id:"git-gui-client",level:2},{value:"Accessing a repo",id:"accessing-a-repo",level:2},{value:"Cloning",id:"cloning",level:3},{value:"Existing Folder",id:"existing-folder",level:3},{value:"Branches",id:"branches",level:2},{value:"Update your branch cache",id:"update-your-branch-cache",level:3},{value:"Creating a new branch",id:"creating-a-new-branch",level:3},{value:"Typical workflow",id:"typical-workflow",level:2},{value:"Staging, Commiting, Pushing",id:"staging-commiting-pushing",level:3},{value:"Reverting some changes",id:"reverting-some-changes",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-basics"},"Git Basics"),(0,o.kt)("h2",{id:"git-gui-client"},"Git GUI Client"),(0,o.kt)("p",null,"There are other options of using Git if you are uncomfortable with the Terminal. However, since it is most likely that your development environment will feature some sort of Terminal, but not necessarily a Git GUI client, it is still recommended to learn the Terminal commands instead. If you wish to use a Git GUI client, consider this list:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://git-fork.com"},"Fork"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://desktop.github.com"},"GitHub Desktop"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.gitkraken.com"},"GitKraken"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.sourcetreeapp.com"},"SourceTree")))),(0,o.kt)("h2",{id:"accessing-a-repo"},"Accessing a repo"),(0,o.kt)("p",null,"Two ways of accessing a repo, one by cloning, and the other one by ",(0,o.kt)("inlineCode",{parentName:"p"},"git init"),"."),(0,o.kt)("h3",{id:"cloning"},"Cloning"),(0,o.kt)("p",null,"While your terminal is at the folder where you want to clone the repo, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone <repolink.git>"),". When you ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the repo folder, your git should now be at ",(0,o.kt)("inlineCode",{parentName:"p"},"main")),(0,o.kt)("h3",{id:"existing-folder"},"Existing Folder"),(0,o.kt)("p",null,"If you have an existing folder where you want to place the files of the repo, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"git init")," workflow instead."),(0,o.kt)("p",null,"Navigate to your folder using the terminal. Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"git init"),". This will create the ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," files that Git needs to function. Your terminal might now indicate that you are in a Git folder."),(0,o.kt)("p",null,"Then, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin <repolink.git>"),". This tells Git that the remote repo (aka upstream) is at ",(0,o.kt)("inlineCode",{parentName:"p"},"<repolink.git>"),"."),(0,o.kt)("p",null,"Now, pull the remote files using ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),". Your folder should now fill with the repo files and you are ready to work on ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,o.kt)("h2",{id:"branches"},"Branches"),(0,o.kt)("h3",{id:"update-your-branch-cache"},"Update your branch cache"),(0,o.kt)("p",null,"When there are new branches created, Git does not automatically update your cache. Use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git fetch -a")," to receive a list of all the branches available at the remote. Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"git branch -a")," to see a list of all the branches (including those at the remote)."),(0,o.kt)("h3",{id:"creating-a-new-branch"},"Creating a new branch"),(0,o.kt)("p",null,"While you don't always need to, you should do ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"git fetch -a")," to ensure that you have the latest version locally. This is especially true for if you're trying to create a branch off ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,o.kt)("p",null,"First ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout <branch>")," you want to start your new branch from."),(0,o.kt)("p",null,"Then, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -b <nameOfnewBranch>")," to create a branch."),(0,o.kt)("p",null,"Alternatively, you can just do ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -b <nameOfnewBranch> origin/<branch>"),"."),(0,o.kt)("h2",{id:"typical-workflow"},"Typical workflow"),(0,o.kt)("p",null,"While you are contributing to a repo, there is a typical workflow you will be doing all the time."),(0,o.kt)("h3",{id:"staging-commiting-pushing"},"Staging, Commiting, Pushing"),(0,o.kt)("p",null,"After you've done some modifications, you use ",(0,o.kt)("inlineCode",{parentName:"p"},"git add <fileName>")," to stage them (add them to your commit). Alternatively, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"git add .")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"git add *")," to stage all modified files."),(0,o.kt)("p",null,"Then you commit the changes by giving them a ",(0,o.kt)("a",{parentName:"p",href:"#writing-good-git-commit-messages"},"Good commit message")," using ",(0,o.kt)("inlineCode",{parentName:"p"},'git commit -m "[#issueNumber] PresentTenseVerb + detail"'),". Alternatively, you could do the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," in one step using ",(0,o.kt)("inlineCode",{parentName:"p"},'git commit -am "<commit message>"'),". Note that this ",(0,o.kt)("inlineCode",{parentName:"p"},"-am")," command only stages and commit files already tracked by Git (if you created any new files, they will be ignored, so you'll have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"git add <file>"),"."),(0,o.kt)("p",null,"Before you push the commit, ensure that your branch has been updated with any new commits from the remote by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),"."),(0,o.kt)("p",null,"Finally, push the commit with ",(0,o.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,o.kt)("h3",{id:"reverting-some-changes"},"Reverting some changes"),(0,o.kt)("p",null,"If you've tried something, it's not working and you would like to go back to a previous edition of the file you have modified, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout <nameOfFile>"),". There is also ",(0,o.kt)("inlineCode",{parentName:"p"},"git reset")," that will reset all changes to the nearest commit and ",(0,o.kt)("inlineCode",{parentName:"p"},"git revert")," that can revert the changes of files you have committed. Check the commands help page for more usage information. This is why ",(0,o.kt)("em",{parentName:"p"},"frequent commits")," and ",(0,o.kt)("em",{parentName:"p"},"frequent pushes")," are important, as you risk losing all your work if you do not do it often enough."))}d.isMDXComponent=!0}}]);