"use strict";(self.webpackChunklaurent_lao_github_io=self.webpackChunklaurent_lao_github_io||[]).push([[676],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"setup-styling-docusaurus",title:"Personalizing Docusaurus",authors:"laurent",tags:["web dev","docusaurus"]},u=void 0,l={permalink:"/blog/setup-styling-docusaurus",editUrl:"https://github.com/laurent-lao/laurent-lao.github.io/blog/2022-03-12-styling-docusaurus.md",source:"@site/blog/2022-03-12-styling-docusaurus.md",title:"Personalizing Docusaurus",description:"Phew, just finished the first draft of the personalization of my website. I chose the Nord palette since my development environment also uses that colour palette. This means that having my documentation website open right next to my IDE results in a single design language and is very aesthetically pleasing.",date:"2022-03-12T00:00:00.000Z",formattedDate:"March 12, 2022",tags:[{label:"web dev",permalink:"/blog/tags/web-dev"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.63,truncated:!0,authors:[{name:"Laurent Lao",title:"Software Developer",url:"https://github.com/laurent-lao",imageURL:"https://github.com/laurent-lao.png",key:"laurent"}],frontMatter:{slug:"setup-styling-docusaurus",title:"Personalizing Docusaurus",authors:"laurent",tags:["web dev","docusaurus"]},nextItem:{title:"First blog post with Docusaurus!",permalink:"/blog/first-blog-post"}},c={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Phew, just finished the first draft of the personalization of my website. I chose the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nordtheme.com/docs/colors-and-palettes"},"Nord palette")," since my development environment also uses that colour palette. This means that having my documentation website open right next to my IDE results in a single design language and is very aesthetically pleasing."),(0,o.kt)("p",null,"Since I started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," template from Docusaurus, a lot of the theming of my website was already done, but it followed Docusaurus's colour palette. After some inspection with the browser and reading this ",(0,o.kt)("a",{parentName:"p",href:"https://theochu.com/docusaurus/styling/"},"blog"),", I started to understand how the CSS is handled in Docusaurus."),(0,o.kt)("p",null,"I also experimented with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typewriter-effect"},"typewriter-effect")," library and imported it as a React component to act as my main header page (and add a little flair)."))}m.isMDXComponent=!0}}]);