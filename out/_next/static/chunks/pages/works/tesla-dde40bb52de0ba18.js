(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),s=r(7294),c=r(7375);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=s.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,c=a(e,o);return s.createElement("img",l({width:r,height:t,ref:n,alt:i},c))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,h=e.src,f=e.srcSet,x=e.align,j=e.fit,g=e.loading,m=e.ignoreFallback,p=e.crossOrigin,b=a(e,u),v=null!=g||m||void 0===r&&void 0===o,k=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,l=e.onError,a=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],f=d[1];(0,s.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(r){g();var e=new Image;e.src=r,a&&(e.crossOrigin=a),t&&(e.srcset=t),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){g(),f("loaded"),null==i||i(e)},e.onerror=function(e){g(),f("failed"),null==l||l(e)},x.current=e}}),[r,a,t,o,i,l,n]),g=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===h&&j(),function(){g()}}),[h,j,u]),u?"loaded":h}(l({},e,{ignoreFallback:v})),w=l({ref:n,objectFit:j,objectPosition:x},v?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||s.createElement(t.m$.img,l({as:d,className:"chakra-image__placeholder",src:r},w)):s.createElement(t.m$.img,l({as:d,src:h,srcSet:f,crossOrigin:p,loading:g,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},7306:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/tesla",function(){return r(3385)}])},603:function(e,n,r){"use strict";r.d(n,{P4:function(){return a},Et:function(){return o},Pg:function(){return u}});var t=r(5893),i=r(1664),s=r(5675),c=r(8527),l=r(917),a=function(e){var n=e.children,r=e.href,i=e.title,l=e.thumbnail;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:l,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(c.AB,{href:r,target:"_blank",children:(0,t.jsx)(c.xv,{mt:2,children:i})}),(0,t.jsx)(c.xv,{fontSize:14,children:n})]})})},o=function(e){var n=e.children,r=e.id,l=e.title,a=e.thumbnail;return(0,t.jsx)(c.xu,{w:"100%",textAlign:"center",children:(0,t.jsx)(i.default,{href:"/works/".concat(r),children:(0,t.jsxs)(c.fG,{cursor:"pointer",children:[(0,t.jsx)(s.default,{src:a,alt:l,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(c.AB,{href:"/works/".concat(r),children:(0,t.jsx)(c.xv,{mt:2,fontSize:20,children:l})}),(0,t.jsx)(c.xv,{fontSize:14,children:n})]})})})},u=function(){return(0,t.jsx)(l.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,n,r){"use strict";var t=r(5893),i=r(9235),s=r(9008),c=r(603),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(s.default,{children:[(0,t.jsxs)("title",{children:[r," - Abhishek Kuntare "]}),(0,t.jsx)("meta",{name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"og:title",content:r})]}),n,(0,t.jsx)(c.Pg,{})]})})}},3562:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());n.Z=i},3922:function(e,n,r){"use strict";r.d(n,{Dx:function(){return a},WZ:function(){return o},h_:function(){return u}});var t=r(5893),i=r(1664),s=r(8527),c=r(4651),l=r(9876),a=function(e){var n=e.children;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(i.default,{href:"/works",children:(0,t.jsx)(s.rU,{children:"Works"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(l.XC,{})," "]}),(0,t.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:n})]})},o=function(e){var n=e.src,r=e.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:n,alt:r,mb:4})},u=function(e){var n=e.children;return(0,t.jsx)(s.Ct,{colorScheme:"green",mr:2,children:n})}},3385:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(8527),s=r(2857),c=r(9876),l=r(3922),a=r(3562);n.default=function(){return(0,t.jsx)(s.Z,{title:"Tesla",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(l.Dx,{children:["Tesla ",(0,t.jsx)(i.Ct,{children:" 2021"})]}),(0,t.jsx)(a.Z,{children:"Tesla"}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Website"}),(0,t.jsxs)(i.rU,{href:"https://tesla-cbfc3.web.app/",children:["https://tesla-cbfc3.web.app/ ",(0,t.jsx)(c.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Platform"}),(0,t.jsx)("span",{children:"Windows/macOS/Linux/iOS/Android"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Stack"}),(0,t.jsx)("span",{children:"NextJs, TailwindCss, Firebase"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(l.h_,{children:"Source"}),(0,t.jsxs)(i.rU,{href:"https://github.com/Abhishekkuntare",children:["https://github.com/Abhishekkuntare ",(0,t.jsx)(c.h0,{mx:"2px"})]})]})]}),(0,t.jsx)(l.WZ,{src:"/images/works/tesla1.png",alt:"tesla"}),(0,t.jsx)(l.WZ,{src:"/images/works/tesla2.png",alt:"tesla"})]})})}}},function(e){e.O(0,[675,774,888,179],(function(){return n=7306,e(e.s=n);var n}));var n=e.O();_N_E=n}]);