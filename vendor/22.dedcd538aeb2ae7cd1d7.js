(window.webpackJsonp=window.webpackJsonp||[]).push([[22,27],{121:function(t,n,e){"use strict";e.r(n);var r=e(52),a=e.n(r),o=e(42),i=e.n(o),c=e(38),u=e.n(c),s=e(1),l=e.n(s),f=e(0),p=e.n(f),h=(e(122),function(t,n,e,r){return new(e||(e=Promise))((function(a,o){function i(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,c)}u((r=r.apply(t,n||[])).next())}))});n.default=function(t){var n=t.dataSource,e=void 0===n?[]:n,r=t.onDownload,o=t.onDetail,c=Object(f.useState)([]),s=l()(c,2),d=s[0],v=s[1];return Object(f.useEffect)((function(){var t=function(t){return h(void 0,void 0,void 0,i.a.mark((function n(){var e,r,a,o,c,s,l;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=[],r=!0,a=!1,o=void 0,n.prev=4,c=i.a.mark((function t(){var n,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.value,(r=new Image).src=n.thumbnailUrl,t.next=5,new Promise((function(t){r.onload=function(){t({width:r.width,height:r.height})}}));case 5:a=t.sent,e.push(u()(u()({},a),n));case 7:case"end":return t.stop()}}),t)})),s=t[Symbol.iterator]();case 7:if(r=(l=s.next()).done){n.next=12;break}return n.delegateYield(c(),"t0",9);case 9:r=!0,n.next=7;break;case 12:n.next=18;break;case 14:n.prev=14,n.t1=n.catch(4),a=!0,o=n.t1;case 18:n.prev=18,n.prev=19,r||null==s.return||s.return();case 21:if(n.prev=21,!a){n.next=24;break}throw o;case 24:return n.finish(21);case 25:return n.finish(18);case 26:return n.abrupt("return",e);case 27:case"end":return n.stop()}}),n,null,[[4,14,18,26],[19,,21,25]])})))};!function n(e,r,o){return h(void 0,void 0,void 0,i.a.mark((function c(){var u;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return u=e.splice(0,o),i.t0=[],i.t1=a()(r),i.t2=a.a,i.next=6,t(u);case 6:i.t3=i.sent,i.t4=(0,i.t2)(i.t3),r=i.t0.concat.call(i.t0,i.t1,i.t4),v(r),e.length&&n(e,r,o);case 11:case"end":return i.stop()}}),c)})))}(e,[],15)}),[e]),p.a.createElement("ul",{className:"exhentai-list"},d.map((function(t){return p.a.createElement("li",{key:t.detailUrl},p.a.createElement("img",{alt:t.name,src:t.thumbnailUrl,style:{height:t.height,width:t.width},onClick:function(){return o(t.detailUrl)},onContextMenu:function(){return r({url:t.detailUrl})}}))})))}},122:function(t,n,e){var r=e(5),a=e(123);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},123:function(t,n,e){(n=e(6)(!1)).push([t.i,".exhentai-list {\n  display: grid;\n  grid-template-columns: repeat(5, 20%);\n  list-style: none;\n  text-align: center;\n}\n",""]),t.exports=n},38:function(t,n){function e(){return t.exports=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}t.exports=e},52:function(t,n,e){var r=e(53),a=e(54),o=e(55);t.exports=function(t){return r(t)||a(t)||o()}},53:function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},54:function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},55:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},714:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(77),i=e(121);describe("ExHentaiList",(function(){var t=jest.spyOn(console,"error").mockImplementation((function(){}));afterAll((function(){t.mockRestore()})),it("render correctly",(function(){var t=jest.fn(),n=Object(o.shallow)(a.a.createElement(i.default,{dataSource:[{name:"[Zakotsu] Amanita Pantherina (COMIC Koh 2018-06) [Chinese] [嗷呜个人汉化] [Digital]",detailUrl:"https://exhentai.org/g/1430261/17651c12eb/",postTime:155941242e4,thumbnailUrl:"https://exhentai.org/t/5b/47/5b47c48abf0fb6c685869520cdb8ab0d97990e4d-1074410-1280-1807-jpg_250.jpg"}],wrapperHeight:1e3,onDownload:function(){},onDetail:t}));expect(n).toMatchSnapshot()}))}))},78:function(t,n){},81:function(t,n){},82:function(t,n){},83:function(t,n){}}]);