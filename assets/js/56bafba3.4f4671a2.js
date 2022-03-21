"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[4299],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4599:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={slug:"cypress-artifacts-with-circleci",title:"Cypress Artifacts with CircleCI",authors:"laurent",tags:["CI/CD","web dev","snippet"]},s=void 0,l={permalink:"/blog/cypress-artifacts-with-circleci",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/blog/2021/03/15/cypress-artifacts-with-circleci.md",source:"@site/blog/2021/03/15/cypress-artifacts-with-circleci.md",title:"Cypress Artifacts with CircleCI",description:"Making CircleCI work with Cypress auto-generated artifacts is pretty easy. Just store the artifacts by adding this to the CircleCI workflow:",date:"2021-03-15T00:00:00.000Z",formattedDate:"March 15, 2021",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"web dev",permalink:"/blog/tags/web-dev"},{label:"snippet",permalink:"/blog/tags/snippet"}],readingTime:.42,truncated:!1,authors:[{name:"Laurent Lao",title:"Software Developer",url:"https://github.com/laurent-lao",imageURL:"https://github.com/laurent-lao.png",key:"laurent"}],frontMatter:{slug:"cypress-artifacts-with-circleci",title:"Cypress Artifacts with CircleCI",authors:"laurent",tags:["CI/CD","web dev","snippet"]},prevItem:{title:"I'm upgrading to Windows 11",permalink:"/blog/upgrading-to-windows-11"},nextItem:{title:"Personalizing Docusaurus",permalink:"/blog/setup-styling-docusaurus"}},p={authorsImageUrls:[void 0]},u=[],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Making CircleCI work with Cypress auto-generated artifacts is pretty easy. Just store the artifacts by adding this to the CircleCI workflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- store_artifacts:\n    path: cypress/videos\n- store_artifacts:\n    path: cypress/screenshots\n")),(0,i.kt)("p",null,"A more detailed snippet for context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=config.yml",title:"config.yml"},"  e2e-tests:\n      docker:\n        - image: cypress/base:14.16.0\n          environment:\n            TERM: xterm\n      steps:\n        - attach_workspace:\n            at: ./\n        - run:\n            name: Install cypress\n            command: npm run circle:install:cypress\n        - run:\n            name: Run server and E2E tests \n            command: npm run circle:cy:run\n            working_directory: ./\n        - store_artifacts:\n            path: cypress/videos\n        - store_artifacts:\n            path: cypress/screenshots\n")))}m.isMDXComponent=!0}}]);