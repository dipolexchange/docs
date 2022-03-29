"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[871],{3905:function(A,e,t){t.d(e,{Zo:function(){return l},kt:function(){return g}});var o=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function f(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},a=Object.keys(A);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var w=o.createContext({}),i=function(A){var e=o.useContext(w),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},l=function(A){var e=i(A.components);return o.createElement(w.Provider,{value:e},A.children)},B={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,w=A.parentName,l=f(A,["components","mdxType","originalType","parentName"]),p=i(t),g=n,h=p["".concat(w,".").concat(g)]||p[g]||B[g]||a;return t?o.createElement(h,r(r({ref:e},l),{},{components:t})):o.createElement(h,r({ref:e},l))}));function g(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,r=new Array(a);r[0]=p;var f={};for(var w in e)hasOwnProperty.call(e,w)&&(f[w]=e[w]);f.originalType=A,f.mdxType="string"==typeof A?A:n,r[1]=f;for(var i=2;i<a;i++)r[i]=t[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},827:function(A,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return w},default:function(){return g},frontMatter:function(){return f},metadata:function(){return i},toc:function(){return B}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),r=["components"],f={id:"trade-guide",title:"How to Trade",sidebar_position:2},w=void 0,i={unversionedId:"products/exchange/trade-guide",id:"products/exchange/trade-guide",title:"How to Trade",description:"Trading on DipoleSwap is very easy compared to most exchanges. You aren't going to be overwhelmed by charts or jargon, and calculations are all handled for you.",source:"@site/docs/products/exchange/trade-guide.md",sourceDirName:"products/exchange",slug:"/products/exchange/trade-guide",permalink:"/docs/products/exchange/trade-guide",editUrl:"https://github.com/dipolexchange/docs/tree/main/docs/products/exchange/trade-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"trade-guide",title:"How to Trade",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Token Swaps",permalink:"/docs/products/exchange/trade"},next:{title:"Liquidity Pools",permalink:"/docs/products/exchange/dipoleswap-pools"}},l={},B=[{value:"Getting set up to trade",id:"getting-set-up-to-trade",level:2},{value:"Trading on the DipoleSwap exchange",id:"trading-on-the-dipoleswap-exchange",level:2}],p={toc:B};function g(A){var e=A.components,f=(0,n.Z)(A,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,f,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Trading on DipoleSwap is very easy compared to most exchanges. You aren't going to be overwhelmed by charts or jargon, and calculations are all handled for you."),(0,a.kt)("h2",{id:"getting-set-up-to-trade"},"Getting set up to trade"),(0,a.kt)("p",null,"Before you can trade, you will need a PlatON Smart Chain-compatible wallet. You can learn how to get one ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started/wallet-guide"},"here"),". You will also need to have some PRC20 tokens to trade with. You can learn how to get some ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started/prc20-guide"},"here"),"."),(0,a.kt)("h2",{id:"trading-on-the-dipoleswap-exchange"},"Trading on the DipoleSwap exchange"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the exchange page ",(0,a.kt)("a",{parentName:"li",href:"https://dipoleswap.exchange/swap"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Unlock your PlatON Smart Chain-compatible wallet by clicking Unlock Wallet (you can also Connect in the top right-hand corner). If you haven't yet connected your wallet to DipoleSwap, you can view the guide to ",(0,a.kt)("a",{parentName:"li",href:"/docs/get-started/connection-guide"},"here"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"unlock",src:t(2704).Z+"#center",width:"294",height:"52"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Choose the token you want to trade from the dropdown menu in the "From" section. The default setting is LAT.')),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"swap-default-token",src:t(427).Z+"#center",width:"845",height:"407"})),(0,a.kt)("p",null,"Whichever token you choose, you will need to make sure you have some to trade with. Your balance is displayed to the right of the token dropdown."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Choose the token you want to trade to in the "To" section as above. Next, type an amount for your "To" currency by clicking inside the input box.')),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"swap-input",src:t(2978).Z+"#center",width:"833",height:"515"})),(0,a.kt)("p",null,'Your "From" currency amount will be estimated automatically. You can also type your "From" amount and have the "To" amount estimate automatically if you like.'),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Check the details, and click the Swap button.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"swap-button",src:t(985).Z+"#center",width:"774",height:"49"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"A window with more details will appear. Check the details are correct.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"swap-confirm",src:t(4255).Z+"#center",width:"458",height:"520"})),(0,a.kt)("p",null,"When you are ready, click the Confirm Swap button. Your wallet will ask you to confirm the action."),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Done! You can click View on PlatScan to see your transaction details on the explorer.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"swap-done",src:t(239).Z+"#center",width:"455",height:"608"})))}g.isMDXComponent=!0},985:function(A,e){e.Z="data:image/jpeg;base64,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"},4255:function(A,e,t){e.Z=t.p+"assets/images/swap-confirm-69daa872377a4bf5e4cb99ea004ec15c.jpg"},427:function(A,e,t){e.Z=t.p+"assets/images/swap-default-token-bad0f10078e35055011219c04c1aee88.jpg"},239:function(A,e,t){e.Z=t.p+"assets/images/swap-done-6c246ea62813fb66987f2139e9037ed5.jpg"},2978:function(A,e,t){e.Z=t.p+"assets/images/swap-input-ccb9226ab66b40ec679f6f5a81832049.jpg"},2704:function(A,e){e.Z="data:image/jpeg;base64,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"}}]);