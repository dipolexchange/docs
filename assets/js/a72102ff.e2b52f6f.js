"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[995],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,k=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"factory",title:"Factory",sidebar_position:1},l=void 0,d={unversionedId:"developers/smart-contract/factory",id:"developers/smart-contract/factory",title:"Factory",description:"DipoleSwap is based on Uniswap v2. Read the Uniswap v2 documentation.",source:"@site/docs/developers/smart-contract/factory.md",sourceDirName:"developers/smart-contract",slug:"/developers/smart-contract/factory",permalink:"/docs/developers/smart-contract/factory",editUrl:"https://github.com/dipolexchange/docs/tree/main/docs/developers/smart-contract/factory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"factory",title:"Factory",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bug Bounty",permalink:"/docs/developers/bug-bounty"},next:{title:"Router",permalink:"/docs/developers/smart-contract/router"}},p={},c=[{value:"Read functions",id:"read-functions",level:2},{value:"getPair",id:"getpair",level:3},{value:"allPairs",id:"allpairs",level:3},{value:"allPairsLength",id:"allpairslength",level:3},{value:"feeTo",id:"feeto",level:3},{value:"feeToSetter",id:"feetosetter",level:3},{value:"Write functions",id:"write-functions",level:2},{value:"createPair",id:"createpair",level:3},{value:"setFeeTo",id:"setfeeto",level:3},{value:"setFeeToSetter",id:"setfeetosetter",level:3},{value:"Events",id:"events",level:2},{value:"PairCreated",id:"paircreated",level:3},{value:"Interface",id:"interface",level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DipoleSwap is based on Uniswap v2. Read the ",(0,i.kt)("a",{parentName:"p",href:"https://uniswap.org/docs/v2/"},"Uniswap v2 documentation"),".",(0,i.kt)("br",{parentName:"p"}),"\n","For more in-depth information on the core contract logic, read the ",(0,i.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper.pdf"},"Uniswap v2 Core whitepaper"),"."))),(0,i.kt)("h2",{id:"read-functions"},"Read functions"),(0,i.kt)("h3",{id:"getpair"},"getPair"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function getPair(address tokenA, address tokenB) external view returns (address pair);")),(0,i.kt)("p",null,"Address for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenA")," and address for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenB")," return address of pair contract ","(","where one exists",")","."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tokenA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenB")," order is interchangeable."),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," as address where no pair exists."),(0,i.kt)("h3",{id:"allpairs"},"allPairs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function allPairs(uint) external view returns (address pair);")),(0,i.kt)("p",null,"Returns the address of the ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"th pair ","(",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"-indexed",")"," created through the Factory contract."),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," where pair has not yet been created."),(0,i.kt)("p",null,"Begins at ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," for first created pair."),(0,i.kt)("h3",{id:"allpairslength"},"allPairsLength"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function allPairsLength() external view returns (uint);")),(0,i.kt)("p",null,"Displays the current number of pairs created through the Factory contract as an integer."),(0,i.kt)("h3",{id:"feeto"},"feeTo"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function feeTo() external view returns (address);")),(0,i.kt)("p",null,"The address to where non-LP-holder fees are sent."),(0,i.kt)("h3",{id:"feetosetter"},"feeToSetter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"function feeToSetter() external view returns (address);")),(0,i.kt)("p",null,"The address with permission to set the feeTo address."),(0,i.kt)("h2",{id:"write-functions"},"Write functions"),(0,i.kt)("h3",{id:"createpair"},"createPair"),(0,i.kt)("p",null,"function createPair","(","address tokenA, address tokenB",")"," external returns ","(","address pair",")",";"),(0,i.kt)("p",null,"Creates a pair for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenB")," where a pair doesn't already exist."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tokenA")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenB")," order is interchangeable."),(0,i.kt)("p",null,"Emits ",(0,i.kt)("inlineCode",{parentName:"p"},"PairCreated")," ","(","see Events",")","."),(0,i.kt)("h3",{id:"setfeeto"},"setFeeTo"),(0,i.kt)("p",null,"Sets address for ",(0,i.kt)("inlineCode",{parentName:"p"},"feeTo"),"."),(0,i.kt)("h3",{id:"setfeetosetter"},"setFeeToSetter"),(0,i.kt)("p",null,"Sets address for permission to adjust ",(0,i.kt)("inlineCode",{parentName:"p"},"feeTo"),"."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"paircreated"},"PairCreated"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"event PairCreated(address indexed token0, address indexed token1, address pair, uint);")),(0,i.kt)("p",null,"Emitted whenever a ",(0,i.kt)("inlineCode",{parentName:"p"},"createPair")," creates a new pair."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"token0")," will appear before ",(0,i.kt)("inlineCode",{parentName:"p"},"token1")," in sort order."),(0,i.kt)("p",null,"The final ",(0,i.kt)("inlineCode",{parentName:"p"},"uint")," log value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," for the first pair created, ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," for the second, etc."),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pragma solidity =0.5.16;\ninterface IDipoleFactory {\n    event PairCreated(address indexed token0, address indexed token1, address pair, uint);\n    function feeTo() external view returns (address);\n    function feeToSetter() external view returns (address);\n    function getPair(address tokenA, address tokenB) external view returns (address pair);\n    function allPairs(uint) external view returns (address pair);\n    function allPairsLength() external view returns (uint);\n    function createPair(address tokenA, address tokenB) external returns (address pair);\n    function setFeeTo(address) external;\n    function setFeeToSetter(address) external;\n}\n")))}f.isMDXComponent=!0}}]);