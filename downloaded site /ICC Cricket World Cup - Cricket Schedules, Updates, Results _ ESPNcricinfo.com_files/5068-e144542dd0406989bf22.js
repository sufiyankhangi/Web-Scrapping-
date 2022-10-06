"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5068],{26805:function(e,t,r){var i=r(27378),n=r(2251),a=r(44757),o=r(36077),c=r(54104),l=r(78392),s=r(71244),u=r(24246),d=(0,i.forwardRef)((function(e,t){var r=e.className,i=e.topOffset,d=void 0===i?0:i,v=e.label,m=e.visibleOffset,p=(0,s.Z)(t);(0,l.Z)((function(){if(m){var e=function(){p.current&&(window.scrollY>m?p.current.classList.remove("ds-hidden"):p.current.classList.add("ds-hidden"))};return document.addEventListener("scroll",e),e(),function(){return document.removeEventListener("scroll",e)}}}));return(0,u.jsx)(a.ZP,{className:r,label:v,variant:a.Tu.FLOATING,ref:p,startIcon:{name:n.v.KEYBOARD_UP_SOLID,color:o.BG.PRIMARY},onClick:function(){return(0,c.k3)(d),!1}})}));d.displayName="DSScrollToTop",t.Z=d},98617:function(e,t,r){var i=r(1717),n=r(31750),a=r(27378),o=r(7839),c=r(62882),l=r(66581),s=r(1319),u=r(73627),d=r(62961),v=r(81577),m=r(56528),p=r(25867),y=r(35046),f=r(6129),g=r(43781),b=r(24246),O=["contentItem"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.contentItem,r=(0,n.Z)(e,O),i=r.size,j=r.variant,P=r.contentType,E=r.action,D=r.hide,L=r.className,z=r.imgVariant,N=r.imgSize,Z=r.imgLazy,w=r.onClick,k=(0,a.useContext)(s.Z).lang,A=(0,l.jX)(k,t,z),T={type:o.f$.IMAGE,imageUrl:A.imageUrl||c.DN.LAZYIMAGE_PLACEHOLDER,alt:A.title||"",variant:z,size:N,lazy:Z},I=(0,b.jsx)(o.ZP,{variant:j,size:i,title:A.title,description:null!==D&&void 0!==D&&D.description?void 0:A.summary,anchorType:{href:A.url,data:h({},E&&{action:E}),onClick:w},contentType:P,media:T,className:L}),S={title:A.title,summary:A.summary,imageUrl:A.imageUrl};switch(t.type){case u.Bg.IMAGE:I=(0,b.jsx)(v.Z,h(h({},r),{},{image:h(h({},t.image),{},{dateTaken:null}),override:S,className:L}));break;case u.Bg.GALLERY:I=(0,b.jsx)(d.Z,h(h({},r),{},{gallery:t.gallery,override:S,className:L}));break;case u.Bg.STORY:I=(0,b.jsx)(m.Z,h(h({},r),{},{story:t.story,override:S,className:L}));break;case u.Bg.VIDEO:I=(0,b.jsx)(p.Z,h(h({},r),{},{video:t.video,override:S,className:L,modal:t.video.origin.type===u.i0.CLIP}));break;case u.Bg.MATCH:I=(0,b.jsx)(y.Z,{layout:f.KO.FEED,match:t.match,className:L,action:E});break;case u.Bg.POLL:var C=t.poll;I=(0,b.jsx)(g.Z,{poll:C})}return I}},51148:function(e,t,r){r(27378);var i=r(73627),n=r(94993),a=r(3982),o=r(98617),c=r(7839),l=r(60042),s=r.n(l),u=r(97458),d=r(24246);t.Z=function(e){var t=e.items,r=e.dynamicNodes,l=t.map((function(e,r){var n=e.type===i.Bg.VIDEO?"video":"story",a="righttrail:".concat(n,":").concat(r+1);return(0,d.jsx)("div",{className:s()("ds-p-4",{"ds-border-b ds-border-line":r<t.length-1}),children:(0,d.jsx)(o.Z,{contentItem:e,variant:c.YQ.BOTTOM,size:c.io.SM,imgVariant:u.N6.WIDE,imgSize:u.Ui.SIDEBAR_FULL,action:a,hide:{category:!0,description:!0,attributes:!0}})},r)})),v=(0,n.sc)(l,r);return(0,d.jsx)(a.ZP,{className:"ds-mb-4",children:(0,d.jsx)(a.ZP.Content,{size:a.kC.FULL,className:"ds-flex ds-flex-col",children:v})})}},62961:function(e,t,r){var i=r(1717),n=r(31750),a=(r(27378),r(80598)),o=r(7839),c=r(62882),l=r(27693),s=r.n(l),u=r(32549),d=r(97458),v=r(24246),m=["gallery","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r=e.gallery,i=e.size,l=e.variant,p=e.contentType,f=e.action,g=e.override,b=e.hide,O=e.className,j=e.imgVariant,h=e.imgSize,P=e.imgLazy,E=e.onClick,D=(0,n.Z)(e,m),L=r.title,z=r.image,N=r.publishedAt,Z=null!==(t=null===g||void 0===g?void 0:g.title)&&void 0!==t?t:L,w=null===g||void 0===g?void 0:g.summary,k=null!==g&&void 0!==g&&g.imageUrl?null===g||void 0===g?void 0:g.imageUrl:z.url,A={type:o.f$.IMAGE_MEDIA,mediaType:u._L.GALLERY,imageUrl:k||c.DN.LAZYIMAGE_PLACEHOLDER,alt:Z||"",variant:j||d.N6.NONE,size:h,lazy:P},T=[{label:s()(N).format("MMM DD, YYYY")}];return(0,v.jsx)(o.ZP,y({variant:l,size:i,title:Z,description:null!==b&&void 0!==b&&b.description?void 0:w,anchorType:{href:(0,a.q)(r),data:y({},f&&{action:f}),onClick:E},contentType:p,media:A,attributes:null!==b&&void 0!==b&&b.attributes?void 0:T,className:O},D))}},81577:function(e,t,r){var i=r(1717),n=r(31750),a=(r(27378),r(29881)),o=r(7839),c=r(62882),l=r(27693),s=r.n(l),u=r(24246),d=["image","navigate","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r=e.image,i=e.navigate,l=void 0===i||i,v=e.size,p=e.variant,y=e.contentType,f=e.action,g=e.override,b=e.hide,O=e.className,j=e.imgVariant,h=e.imgSize,P=e.imgLazy,E=e.onClick,D=(0,n.Z)(e,d),L=r.caption,z=r.dateTaken,N=r.credit,Z=r.photographer,w=(null===g||void 0===g?void 0:g.title)||r.longCaption||void 0,k=(null===g||void 0===g?void 0:g.summary)||void 0,A=null!==g&&void 0!==g&&g.imageUrl?null===g||void 0===g?void 0:g.imageUrl:r.url,T=!1===l&&void 0===E?"ds-cursor-default ".concat(O):O,I={type:o.f$.IMAGE,imageUrl:A||c.DN.LAZYIMAGE_PLACEHOLDER,alt:w||"",variant:j,size:h,lazy:P},S=[];L&&S.push({label:L}),z&&S.push({label:(0,u.jsx)("time",{children:s()(z).format("MMM DD, YYYY")})}),Z&&(t=Z),N&&(t=t?"".concat(t,"/").concat(N):N),t&&S.push({label:t});return(0,u.jsx)(o.ZP,m({variant:p,size:v,title:null!==b&&void 0!==b&&b.title?void 0:w,description:null!==b&&void 0!==b&&b.description?void 0:k,anchorType:l?{href:(0,a.g)(r),data:m({},f&&{action:f}),onClick:E}:function(){return!!E&&E()},contentType:y,media:I,attributes:null!==b&&void 0!==b&&b.attributes?void 0:S,className:T},D))}},29881:function(e,t,r){r.d(t,{E:function(){return i},g:function(){return n}});var i=function(){return"/photo"},n=function(e,t){var r=e.objectId,i=e.slug;return"/photo/".concat(i||"image","-").concat(r).concat(t?"?objectId=".concat(t):"")}},56528:function(e,t,r){var i=r(1717),n=r(31750),a=(r(27378),r(69731)),o=r(7839),c=r(22e3),l=r(62882),s=r(97458),u=r(78364),d=r(16311),v=r(73627),m=r(24246),p=["story","anchorUrl","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t,r,i=e.story,y=e.anchorUrl,g=e.size,b=e.variant,O=e.contentType,j=e.action,h=e.override,P=e.hide,E=e.className,D=e.imgVariant,L=e.imgSize,z=e.imgLazy,N=e.onClick,Z=(0,n.Z)(e,p),w=i.title,k=i.summary,A=i.image,T=i.byline,I=null!==(t=null===h||void 0===h?void 0:h.title)&&void 0!==t?t:w,S=null!==(r=null===h||void 0===h?void 0:h.summary)&&void 0!==r?r:k,C=null!==h&&void 0!==h&&h.imageUrl?null===h||void 0===h?void 0:h.imageUrl:A?(0,u.lX)(A,D===s.N6.SQUARE?v.rh.SQUARE:v.rh.WIDE):l.DN.THUMBNAIL_PLACEHOLDER,U={type:o.f$.IMAGE,imageUrl:C,alt:I,variant:D,size:L,lazy:z},x=[{label:(0,c.vl)(i)}];return T&&x.push({label:T}),(0,m.jsx)(o.ZP,f({variant:b,size:g,title:null!==P&&void 0!==P&&P.title?void 0:I,description:null!==P&&void 0!==P&&P.description?void 0:S?(0,m.jsx)(d.Z,{element:"div",html:S}):void 0,anchorType:{href:y||(0,a.S1)(i),data:f({},j&&{action:j}),onClick:N},contentType:O,media:U,attributes:null!==P&&void 0!==P&&P.attributes?void 0:x,className:E},Z))}}}]);