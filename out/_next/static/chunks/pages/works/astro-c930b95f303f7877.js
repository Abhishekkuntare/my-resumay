(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return h}});var t=n(6052),i=n(5031),s=n(7294),c=n(7375);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=s.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,c=l(e,o);return s.createElement("img",a({width:n,height:t,ref:r,alt:i},c))})),h=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,o=e.fallback,h=e.src,f=e.srcSet,x=e.align,j=e.fit,m=e.loading,g=e.ignoreFallback,p=e.crossOrigin,b=l(e,u),v=null!=m||g||void 0===n&&void 0===o,k=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,a=e.onError,l=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],f=d[1];(0,s.useEffect)((function(){f(n?"loading":"pending")}),[n]);var x=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(n){m();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),o&&(e.sizes=o),r&&(e.loading=r),e.onload=function(e){m(),f("loaded"),null==i||i(e)},e.onerror=function(e){m(),f("failed"),null==a||a(e)},x.current=e}}),[n,l,t,o,i,a,r]),m=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===h&&j(),function(){m()}}),[h,j,u]),u?"loaded":h}(a({},e,{ignoreFallback:v})),w=a({ref:r,objectFit:j,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||s.createElement(t.m$.img,a({as:d,className:"chakra-image__placeholder",src:n},w)):s.createElement(t.m$.img,a({as:d,src:h,srcSet:f,crossOrigin:p,loading:m,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},707:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/astro",function(){return n(7836)}])},603:function(e,r,n){"use strict";n.d(r,{P4:function(){return l},Et:function(){return o},Pg:function(){return u}});var t=n(5893),i=n(1664),s=n(5675),c=n(8527),a=n(917),l=function(e){var r=e.children,n=e.href,i=e.title,a=e.thumbnail;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(c.AB,{href:n,target:"_blank",children:(0,t.jsx)(c.xv,{mt:2,children:i})}),(0,t.jsx)(c.xv,{fontSize:14,children:r})]})})},o=function(e){var r=e.children,n=e.id,a=e.title,l=e.thumbnail;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(n),children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:l,alt:a,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(c.AB,{href:"/works/".concat(n),children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,children:a})}),(0,t.jsx)(c.xv,{fontSize:14,children:r})]})})})},u=function(){return(0,t.jsx)(a.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,r,n){"use strict";var t=n(5893),i=n(9235),s=n(9008),c=n(603),a={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=function(e){var r=e.children,n=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:a,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:[n," - Abhishek Kuntare "]}),(0,t.jsx)("meta",{name:"twitter:title",content:n}),(0,t.jsx)("meta",{property:"og:title",content:n})]}),r,(0,t.jsx)(c.Pg,{})]})})}},3562:function(e,r,n){"use strict";function t(){var e,r,n=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return t=function(){return n},n}var i=n(5934).Z.p(t());r.Z=i},3922:function(e,r,n){"use strict";n.d(r,{Dx:function(){return l},WZ:function(){return o},h_:function(){return u}});var t=n(5893),i=n(1664),s=n(8527),c=n(4651),a=n(9876),l=function(e){var r=e.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(a.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},o=function(e){var r=e.src,n=e.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},u=function(e){var r=e.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:r})}},7836:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=(n(7294),n(8527)),s=n(9876),c=n(3922),a=n(3562),l=n(2857);r.default=function(){return(0,t.jsx)(l.Z,{title:"Astro",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(c.Dx,{children:["Astro ",(0,t.jsx)(i.Ct,{children:"2021-"})]}),(0,t.jsx)(a.Z,{children:"Astro is a E-Commerce website, We strive to deliver the best quality products and services and are always there to help both before and after you have made your purchase!"}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Website"}),(0,t.jsxs)(i.rU,{href:"https://astro-ecommerce.herokuapp.com/",children:["https://astro-ecommerce.herokuapp.com/ ",(0,t.jsx)(s.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Windows/macOS/Linux/iOS/Android"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"NodeJS, ReactJS, ExpressJS, Mongodb"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.h_,{children:"HOST"}),"Heroku"]})]}),(0,t.jsx)(c.WZ,{src:"/images/works/Astro01.png",alt:"Inkdrop"}),(0,t.jsx)(c.WZ,{src:"/images/works/Astro02.png",alt:"Inkdrop"})]})})}}},function(e){e.O(0,[675,774,888,179],(function(){return r=707,e(e.s=r);var r}));var r=e.O();_N_E=r}]);