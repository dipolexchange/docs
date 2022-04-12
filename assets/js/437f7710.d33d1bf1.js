"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[181],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function n(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,a,o=function(A,e){if(null==A)return{};var t,a,o={},r=Object.keys(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var l=a.createContext({}),s=function(A){var e=a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):n(n({},e),A)),t},u=function(A){var e=s(A.components);return a.createElement(l.Provider,{value:e},A.children)},f={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(A,e){var t=A.components,o=A.mdxType,r=A.originalType,l=A.parentName,u=i(A,["components","mdxType","originalType","parentName"]),p=s(t),d=o,w=p["".concat(l,".").concat(d)]||p[d]||f[d]||r;return t?a.createElement(w,n(n({ref:e},u),{},{components:t})):a.createElement(w,n({ref:e},u))}));function d(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var r=t.length,n=new Array(r);n[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i.mdxType="string"==typeof A?A:o,n[1]=i;for(var s=2;s<r;s++)n[s]=t[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3674:function(A,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),n=["components"],i={id:"farm-guide",title:"How to Use Farms",sidebar_position:1},l="How to Use Farms",s={unversionedId:"products/yield-farming/farm-guide",id:"products/yield-farming/farm-guide",title:"How to Use Farms",description:"Yield Farming in Farms is a great way to earn LAT rewards on DipoleSwap.",source:"@site/docs/products/yield-farming/farm-guide.md",sourceDirName:"products/yield-farming",slug:"/products/yield-farming/farm-guide",permalink:"/docs/products/yield-farming/farm-guide",editUrl:"https://github.com/dipolexchange/docs/tree/main/docs/products/yield-farming/farm-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"farm-guide",title:"How to Use Farms",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Add or Remove Liquidity",permalink:"/docs/products/exchange/liquidity-guide"},next:{title:"How to User Zapper",permalink:"/docs/products/zapper/zapper-guide"}},u={},f=[{value:"Getting prepared",id:"getting-prepared",level:2},{value:"Finding your Farm",id:"finding-your-farm",level:3},{value:"Providing liquidity to get LP Tokens",id:"providing-liquidity-to-get-lp-tokens",level:3},{value:"Putting your LP Tokens into a farm",id:"putting-your-lp-tokens-into-a-farm",level:2},{value:"Adding or removing LP Tokens from a Farm",id:"adding-or-removing-lp-tokens-from-a-farm",level:2},{value:"Collecting your farming rewards",id:"collecting-your-farming-rewards",level:2},{value:"Returning to your Farm to Harvest",id:"returning-to-your-farm-to-harvest",level:3},{value:"How often should I harvest my rewards?",id:"how-often-should-i-harvest-my-rewards",level:3}],p={toc:f};function d(A){var e=A.components,i=(0,o.Z)(A,n);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-farms"},"How to Use Farms"),(0,r.kt)("p",null,"Yield Farming in Farms is a great way to earn LAT rewards on DipoleSwap."),(0,r.kt)("p",null,"Unlike Syrup Pools, Farms require you to stake ",(0,r.kt)("strong",{parentName:"p"},"two tokens")," to get LP Tokens, which you then stake in the Farm to earn rewards. This lets you earn LAT while still keeping a position in your other tokens!"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Yield farming can give better rewards than Syrup Pools, but it comes with a risk of ",(0,r.kt)("strong",{parentName:"p"},"Impermanent Loss"),". It\u2019s not as scary as it sounds, but it is worth learning about the concept before you get started."),(0,r.kt)("p",{parentName:"div"},"Check out this great ",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/impermanent-loss-explained"},"article about Impermanent Loss "),"from PlatON Academy to learn more."))),(0,r.kt)("h2",{id:"getting-prepared"},"Getting prepared"),(0,r.kt)("p",null,"Yield farming takes a little work to get set up."),(0,r.kt)("p",null,'You\u2019re going to need some "LP Tokens" to enter into a Farm with. Farms can only accept their own exact LP Token; for example, the GT-LAT Farm will only accept GT-LAT LP Tokens.'),(0,r.kt)("p",null,"To get the exact LP Token, you'll need to provide liquidity for that trading pair. So to get GT-LAT LP Tokens, you'll first have to provide liquidity for the GT-LAT pair."),(0,r.kt)("p",null,"It may sound intimidating, but it's not too complicated. Let's go through step by step."),(0,r.kt)("h3",{id:"finding-your-farm"},"Finding your Farm"),(0,r.kt)("p",null,"Before you proceed, you'll want to choose a Farm that's right for you. ",(0,r.kt)("a",{parentName:"p",href:"https://dipoleswap.exchange/farms"},"Visit the Farms page")," and you\u2019ll see a list of available Farms."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(5550).Z+"#center",width:"1163",height:"523"})),(0,r.kt)("p",null,"GT-LAT and USDT-LAT are pinned to the top of the list with the default ",(0,r.kt)("strong",{parentName:"p"},"Hot")," sorting. After the pinned Farms, Hot will show other Farms in order of how new they are."),(0,r.kt)("p",null,"You can choose another sorting option if you like, such as by ",(0,r.kt)("strong",{parentName:"p"},"APR")," for the Farms with the highest reward rate currently."),(0,r.kt)("p",null,"When you find a Farm that you'd like to use, note down the trading pair, e.g. LAT-GT in case you need it later."),(0,r.kt)("h3",{id:"providing-liquidity-to-get-lp-tokens"},"Providing liquidity to get LP Tokens"),(0,r.kt)("p",null,"Now that you've found a Farm to stake in, you will need to get your LP Tokens."),(0,r.kt)("p",null,"There are two ways to get your LP Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can open the Add Liquidity page for your Farm's pair. We have a ",(0,r.kt)("a",{parentName:"p",href:"https://dipolexchange.github.io/docs/products/exchange/liquidity-guide"},"guide to adding liquidity")," you can follow to get your LP Tokens.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can open the zapper page for your Farm's pair. We have a ",(0,r.kt)("a",{parentName:"p",href:"https://dipolexchange.github.io/docs/products/zapper/zapper-guide"},"guide to zapper")," you can follow to get your LP Tokens."))),(0,r.kt)("h2",{id:"putting-your-lp-tokens-into-a-farm"},"Putting your LP Tokens into a farm"),(0,r.kt)("p",null,"Now that you have your LP Tokens, you\u2019re ready to start staking them in a Farm and earning rewards!"),(0,r.kt)("p",null,"1","."," Go back to the ",(0,r.kt)("a",{parentName:"p",href:"https://dipoleswap.exchange/farms"},"Farms page")," and locate your Farm. Click anywhere on the row showing your pair. It will expand to show more details."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(7958).Z+"#center",width:"1517",height:"298"})),(0,r.kt)("p",null,"When you\u2019re ready, click the ",(0,r.kt)("strong",{parentName:"p"},"Enable")," button and confirm your action in your wallet."),(0,r.kt)("p",null,"2","."," After a short wait, the Enable button will change to ",(0,r.kt)("strong",{parentName:"p"},"Stake LP"),". Click it and a new window will appear."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(2119).Z+"#center",width:"1512",height:"298"})),(0,r.kt)("p",null,"Type the amount of LP Tokens you would like to farm with into the field, or just click ",(0,r.kt)("strong",{parentName:"p"},"100%")," to use all of your LP Tokens."),(0,r.kt)("p",null,"3","."," When you have the amount entered, the ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," button will light up. Click it. Your wallet will ask you to confirm your action."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(4819).Z+"#center",width:"610",height:"750"})),(0,r.kt)("p",null,"4","."," After a short wait, the window will close, and you will see your new staked LP Token balance in the details."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(3592).Z+"#center",width:"1156",height:"219"})),(0,r.kt)("h2",{id:"adding-or-removing-lp-tokens-from-a-farm"},"Adding or removing LP Tokens from a Farm"),(0,r.kt)("p",null,"You may decide you would like to add more LP Tokens to a Farm at a later date, or to take some out of a Farm. You can do this very easily whenever you'd like."),(0,r.kt)("p",null,"1","."," Return to the ",(0,r.kt)("a",{parentName:"p",href:"https://dipoleswap.exchange/farms"},"Yield Farms page"),". At the top of the page you'll see a ",(0,r.kt)("strong",{parentName:"p"},"Staked only")," toggle. Click the toggle."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(452).Z+"#center",width:"149",height:"47"})),(0,r.kt)("p",null,"You should now only see the pairs you have LP Tokens in on the list, making it easier to find your Farm."),(0,r.kt)("p",null,"2","."," Find the Farm you have LP Tokens in, and click the row to view details. You will see a ",(0,r.kt)("strong",{parentName:"p"},"-")," and ",(0,r.kt)("strong",{parentName:"p"},"+")," button on the right-hand side. Click ",(0,r.kt)("strong",{parentName:"p"},"-")," to remove LP Tokens, or ",(0,r.kt)("strong",{parentName:"p"},"+")," to add more LP Tokens."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(4941).Z+"#center",width:"710",height:"156"})),(0,r.kt)("p",null,"3","."," A window will open that looks like the one you used earlier to first stake your LP Tokens. Like last time, type the amount you would like to unstake/stake, or click ",(0,r.kt)("strong",{parentName:"p"},"Max")," to remove/add all available LP Tokens."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(8014).Z+"#center",width:"457",height:"443"})),(0,r.kt)("p",null,"4","."," Make sure your information is correct. When you are ready, click the ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," button and confirm the action in your wallet.\n5","."," After a short wait, your new balance will show in the details section of your LP Token pair. If you've unstaked your LP Tokens, any unharvested rewards you had will automatically have been collected."),(0,r.kt)("h2",{id:"collecting-your-farming-rewards"},"Collecting your farming rewards"),(0,r.kt)("p",null,"Farming will bring you LAT rewards over time. You can collect these rewards and use them to get more LP Tokens, stake them in Syrup Pools, use them to play Lottery, or anything else you\u2019d like."),(0,r.kt)("h3",{id:"returning-to-your-farm-to-harvest"},"Returning to your Farm to Harvest"),(0,r.kt)("p",null,"You can harvest your Farm and Syrup Pool rewards together from the Home page. If you'd like to collect your farming rewards only, follow along."),(0,r.kt)("p",null,"To collect your rewards, you\u2019ll need to visit your chosen Farm and collect the LAT waiting for you."),(0,r.kt)("p",null,"1","."," Return to the Farms page ",(0,r.kt)("a",{parentName:"p",href:"https://dipoleswap.exchange/farms"},"here"),".\n2","."," Find the Farm you staked your LP Tokens in, and click the row to view details. You should see an estimate of your rewards under \u201cLAT earned\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(9551).Z+"#center",width:"355",height:"78"})),(0,r.kt)("p",null,"3","."," Click the ",(0,r.kt)("strong",{parentName:"p"},"Harvest")," button and confirm the action in your wallet. After a short wait, the LAT will be claimed to your wallet for you to use as you like."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(5431).Z+"#center",width:"459",height:"254"})),(0,r.kt)("h3",{id:"how-often-should-i-harvest-my-rewards"},"How often should I harvest my rewards?"),(0,r.kt)("p",null,"How often you harvest your rewards is up to you, but it does help to remember that there is a small fee involved in harvesting."),(0,r.kt)("p",null,"You can see this fee in your wallet when confirming after clicking ",(0,r.kt)("strong",{parentName:"p"},"Harvest"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:t(507).Z+"#center",width:"402",height:"240"})),(0,r.kt)("p",null,"This shows the fee for harvesting as it appears in the MetaMask wallet. Different wallets will show the information a little differently. Consider leaving your rewards to grow for a while so you pay fees less often."),(0,r.kt)("p",null,"And that's all there is to it! You may also want to look at ",(0,r.kt)("a",{parentName:"p",href:"https://dipolexchange.github.io/docs/get-started/syrup-pool-guide"},"how to use DipoleSwap Syrup Pools")," to earn rewards."),(0,r.kt)("p",null,"Happy farming!"))}d.isMDXComponent=!0},7958:function(A,e,t){e.Z=t.p+"assets/images/farm-enable-2ecd3633f059d293170ce2821b7f771a.jpg"},507:function(A,e,t){e.Z=t.p+"assets/images/farm-fee-detail-0fccffdd4bcb942455dfa102edb10dc4.jpg"},5431:function(A,e,t){e.Z=t.p+"assets/images/farm-harvest-confirm-fe3b46a43ff0bf3fefb61769c2921e1c.jpg"},9551:function(A,e){e.Z="data:image/jpeg;base64,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"},5550:function(A,e,t){e.Z=t.p+"assets/images/farm-list-89b4810cc784c91199fb0681c29ccb40.jpg"},4941:function(A,e,t){e.Z=t.p+"assets/images/farm-stake-add-or-remove-cc187827341079fa3c4f3fa065e347eb.jpg"},4819:function(A,e,t){e.Z=t.p+"assets/images/farm-stake-confirm-faf68a274816283e131e88d6ef2c5691.jpg"},2119:function(A,e,t){e.Z=t.p+"assets/images/farm-stake-ecaab9e2f30ca31140d2b031bab812ef.jpg"},3592:function(A,e,t){e.Z=t.p+"assets/images/farm-staked-detail-56fff29812aae891cd7f11de6cc8e79c.jpg"},8014:function(A,e,t){e.Z=t.p+"assets/images/farm-unstake-confirm-e3f1606d3f96e2ccc7c26f021b40d595.jpg"},452:function(A,e){e.Z="data:image/jpeg;base64,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"}}]);