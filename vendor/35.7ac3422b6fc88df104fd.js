(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{193:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i);e(194);t.default=function(n){var t=n.dataSource,e=n.onListItemClick;return o.a.createElement("ul",{className:"util-list"},t.map((function(n){return o.a.createElement("li",{key:"list-item-".concat(n.id),className:"list-item",onClick:function(){return e({category:n.category,id:n.id,key:n.key})}},n.title)})))}},194:function(n,t,e){var i=e(5),o=e(195);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var l={insert:"head",singleton:!1},r=(i(o,l),o.locals?o.locals:{});n.exports=r},195:function(n,t,e){(t=e(6)(!1)).push([n.i,".util-list .list-item {\n  cursor: pointer;\n  padding: 0px 8px;\n  border: 1px solid #e7e7e7;\n  margin-bottom: -1px;\n  height: 88px;\n  line-height: 88px;\n}\n\n.util-list .list-item:hover {\n  background: #e6f7ff;\n}\n\n.util-list {\n  font-size: 21px;\n  list-style: none;\n  border-radius: 4px;\n  margin: 16px;\n}\n",""]),n.exports=t}}]);