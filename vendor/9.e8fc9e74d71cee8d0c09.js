(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(t,e,n){var r={"./EditForm.tsx":[124,8,20],"./ExHentaiList.tsx":[97,25],"./ExhentaiSearcher.tsx":[133,22],"./MainPageContentWrapper.tsx":[130,32],"./MainPageList.tsx":[90,5,29],"./MappingDetail.tsx":[67,4,28],"./MarkdownDetail.tsx":[87,33],"./MarkdownEditor.tsx":[63,34],"./SlicingImage.tsx":[300,18],"./TohoLoading.tsx":[6],"./Upload.tsx":[303,19],"./UtilList.tsx":[127,35],"./__tests__/EditForm.test.tsx":[306,37],"./__tests__/ExHentaiList.test.tsx":[307,1,2,24],"./__tests__/MainPageList.test.tsx":[409,1,2,5,27],"./__tests__/MappingDetail.test.tsx":[410,1,2,4,26],"./__tests__/MarkdownDetail.test.tsx":[411,1,2,30],"./__tests__/MarkdownEditor.test.tsx":[412,1,2,31],"./__tests__/TohoLoading.test.tsx":[413,1,2,36]};function s(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],s=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(r)},s.id=265,t.exports=s},41:function(t,e,n){"use strict";n.r(e);var r=n(44),s=n.n(r),a=n(1),o=n.n(a),i=n(0),c=n.n(i),u=n(50),d=n(75),f=n.n(d),l=(n(56),function(t,e,n,r){return new(n||(n=Promise))((function(s,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,i)}c((r=r.apply(t,e||[])).next())}))});e.default=function(){var t=Object(u.b)(),e=Object(u.a)(t),r=Object(i.useState)(null),a=o()(r,2),d=a[0],x=a[1];return Object(i.useEffect)((function(){n(265)("./".concat(e,".tsx")).then((function(e){return l(void 0,void 0,void 0,s.a.mark((function n(){var r,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(void 0,void 0,void 0,s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./assets/document/".concat(t,".md"));case 2:return n=e.sent,e.next=5,n.text();case 5:return r=e.sent,e.abrupt("return",f()(r||""));case 7:case"end":return e.stop()}}),e)})));case 2:r=n.sent,a=function(){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r},className:"markdown-body"})},x(c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"50% 50%"}},c.a.createElement(e.default,{innerHTML:r}),a()));case 5:case"end":return n.stop()}}),n)})))}))}),[t,e]),d||null}},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){var e=t||location.pathname;return e.endsWith("/")&&(e=e.substr(0,e.length-1)),e.substr(e.lastIndexOf("/")+1)},s=function(t){return t.replace(/-\w/g,(function(e,n){return t.charAt(n+1).toUpperCase()})).replace(/^\S/,(function(t){return t.toUpperCase()}))}}}]);