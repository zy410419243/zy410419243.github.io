(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1509:function(e,t,a){"use strict";a.r(t);var r=a(82),n=a.n(r),l=a(2),i=a.n(l),u=a(131),o=a.n(u),s=a(90),c=a.n(s),p=a(0),m=a.n(p),d=a(1486),y=a(1489),h=a(1485),g=a(1511),f=a(1487),v=a(1490),T=a(1492),k=a(1504),x=a(1513),C=a(1497),w=a(1498),b=a(70),E=a(1514),O=a(1499),I=a(1496),F=a(1328),B=a.n(F),S=a(1327),V=a.n(S),L=a(1326),W=a.n(L),N=a(67),Q=a(72),j=a(1506),q=a(1484),P=Object(N.a)((function(e){return Object(Q.a)({container:{display:"flex",flexWrap:"wrap"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},formControl:{margin:e.spacing(1)},title:{flexGrow:1},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-50},buttonSuccess:{backgroundColor:q.a[500],"&:hover":{backgroundColor:q.a[700]}},success:{backgroundColor:q.a[600]},failed:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}})})),D=function(e){var t=e.key,a=e.error,r=e.inputLabel,n=e.inputValue,l=e.helperText,i=e.xs,u=e.unit,o=void 0===u?"mm":u,s=e.readOnly,c=void 0!==s&&s,p=e.required,y=void 0===p||p,k=e.onChange,x=e.onBlur,C=e.classes,w=e.shrink,b=void 0!==w&&w,E=e.stateType;return m.a.createElement(h.a,{item:!0,xs:i,key:t},m.a.createElement(d.a,{required:y,className:C.formControl,error:a},m.a.createElement(g.a,{shrink:b||!!n},r),m.a.createElement(f.a,{value:n,type:"number",onChange:function(e){return k({item:{text:e.target.value,value:e.target.value},controllType:"input",key:t,stateType:E})},onBlur:x,endAdornment:m.a.createElement(v.a,{position:"end"},o),readOnly:c}),m.a.createElement(T.a,null,l)))},R=function(e){var t=e.formOptions,a=e.formData,r=e.classes,n=e.onSpecificationInputBlur,l=e.onChange,i=function(e,t){var a=parseInt(""+t.materialType.value);return e.filter((function(e){return 0===a?!t.length.value||t.length.value==e.length:1===a?t.length.value&&t.width.value?t.length.value==e.length&&t.width.value==e.width:t.width.value?t.width.value==e.width:!t.length.value||t.length.value==e.length:void 0})).filter((function(e){return e.sellType==t.sellType.value&&e.round==t.round.value}))}(t.materialId,a),u=parseInt(""+a.materialType.value);return m.a.createElement(m.a.Fragment,null,m.a.createElement(h.a,{item:!0,xs:6},m.a.createElement(d.a,{required:!0,fullWidth:!0,className:r.formControl,error:a.materialType.error},m.a.createElement(g.a,{shrink:-1!==a.materialType.value},"类别"),m.a.createElement(k.a,{value:a.materialType.value,onChange:function(e){return l({item:{text:e.target.value,value:e.target.value},controllType:"select",key:"materialType",stateType:"stateful"})}},t.materialType.map((function(e){var t=e.text,a=e.value;return m.a.createElement(x.a,{value:a,key:t+"-"+a},t)}))))),m.a.createElement(h.a,{item:!0,xs:6},m.a.createElement(d.a,{required:!0,fullWidth:!0,className:r.formControl,error:a.sellType.error},m.a.createElement(g.a,{shrink:-1!==a.sellType.value},"卖出方式"),m.a.createElement(k.a,{value:a.sellType.value,onChange:function(e){return l({item:{text:e.target.value,value:e.target.value},controllType:"select",key:"sellType",stateType:"stateful"})}},t.sellType.map((function(e){var t=e.text,a=e.value;return m.a.createElement(x.a,{value:a,key:t+"-"+a},t)}))))),function(e){var t=e.onChange,a=e.formData,r=e.onSpecificationInputBlur,n=e.classes;switch(parseInt(a.materialType.value+"")){case 0:return m.a.createElement(m.a.Fragment,null,D({key:"length",error:a.length.error,inputLabel:"截面直径",inputValue:a.length.value,helperText:a.length.message,xs:6,onChange:t,onBlur:r,classes:n,stateType:"stateful"}));case 1:return m.a.createElement(m.a.Fragment,null,D({key:"length",error:a.length.error,inputLabel:"截面长度",inputValue:a.length.value,helperText:a.length.message,xs:6,onChange:t,onBlur:r,classes:n,stateType:"stateful"}),D({key:"width",error:a.width.error,inputLabel:"截面宽度",inputValue:a.width.value,helperText:a.width.message,xs:6,onChange:t,onBlur:r,classes:n,stateType:"stateful"}));default:return null}}({onChange:l,formData:a,onSpecificationInputBlur:n,classes:r}),0===u&&m.a.createElement(h.a,{item:!0,xs:6,key:"round"},m.a.createElement(d.a,{required:!0,fullWidth:!0,className:r.formControl,error:a.round.error},m.a.createElement(g.a,{shrink:-1!==a.round.value},"圆钢类别"),m.a.createElement(k.a,{value:a.round.value,onChange:function(e){return l({item:{text:e.target.value,value:e.target.value},controllType:"select",key:"round",stateType:"stateful"})}},t.roundType.map((function(e){var t=e.text,a=e.value;return m.a.createElement(x.a,{value:a,key:t+"-"+a},t)}))))),m.a.createElement(d.a,{fullWidth:!0,error:a.materialId.error,className:r.formControl},m.a.createElement(j.a,{options:i,getOptionLabel:function(e){return e.text},value:a.materialId.value,onChange:function(e,t){return l({item:t,controllType:"autoComplete",key:"materialId",stateType:"stateful"})},id:"material-id","aria-controls":"material-id",renderInput:function(e){return m.a.createElement(C.a,c()({},e,{fullWidth:!0,margin:"normal",required:!0,label:"材质",error:a.materialId.error}))}}),m.a.createElement(T.a,null,a.materialId.message)))},z=function(e){var t=e.classes,a=e.onSubmit,r=e.loading;return m.a.createElement(d.a,{fullWidth:!0,className:t.formControl},m.a.createElement(w.a,{variant:"contained",color:"primary",disabled:r,onClick:a},"保存"),r&&m.a.createElement(b.a,{size:24,className:t.buttonProgress}))},J=function(e){var t=e.type,a=e.message,r=e.open,n=e.onClose,l=P();return m.a.createElement(E.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:r},m.a.createElement(O.a,{className:l[t],message:m.a.createElement("span",{className:l.message},"success"===t?m.a.createElement(W.a,{className:l.iconVariant}):m.a.createElement(V.a,{className:l.iconVariant}),m.a.createElement("span",null,a)),action:[m.a.createElement(I.a,{key:"close","aria-label":"close",color:"inherit",onClick:n},m.a.createElement(B.a,{className:l.icon}))]}))},G=function(e){var t=e.onSubmit,a=e.formData,r=e.onChange,n=e.onSpecificationInputBlur,l=e.formOptions,i=e.loading,u=P();return m.a.createElement("div",{className:u.container},R({formOptions:l,formData:a,classes:u,onChange:r,onSpecificationInputBlur:n}),D({key:"weight",error:a.weight.error,inputLabel:"实际重量",inputValue:a.weight.value,helperText:a.weight.message,xs:6,unit:"kg",onChange:r,onBlur:n,classes:u,stateType:"stateful"}),D({key:"height",error:a.height.error,inputLabel:"高度",inputValue:a.height.value,helperText:a.height.message,xs:6,onChange:r,onBlur:n,classes:u,stateType:"stateful"}),D({key:"materialCost",error:a.materialCost.error,inputLabel:"单价",inputValue:a.materialCost.value,helperText:a.materialCost.message,xs:6,unit:"元/kg",onChange:r,onBlur:n,classes:u,stateType:"stateful"}),D({key:"freight",error:a.freight.error,inputLabel:"运费",inputValue:a.freight.value,helperText:a.freight.message,xs:6,unit:"元",onChange:r,onBlur:n,classes:u,stateType:"stateful"}),D({key:"extraCost",error:!1,inputLabel:"其他费用",inputValue:a.extraCost,helperText:"",xs:6,unit:"元",onChange:r,onBlur:n,classes:u,required:!1,stateType:"stateless"}),D({key:"predictWeight",error:!1,inputLabel:"预估重量",inputValue:a.predictWeight,helperText:"计算公式：体积 x 密度",xs:6,unit:"kg",readOnly:!0,required:!1,onChange:r,onBlur:n,classes:u,stateType:"stateless"}),m.a.createElement(d.a,{fullWidth:!0,className:u.formControl},m.a.createElement(y.a,{placeholder:"备注",rows:8,onChange:function(e){return r({item:{text:e.target.value,value:e.target.value},controllType:"input",key:"description",stateType:"stateless"})},value:a.description})),z({classes:u,onSubmit:t,loading:i}))},U=function(e){var t=e.onSubmit,a=e.formData,r=e.formOptions,n=e.onChange,l=e.onSpecificationInputBlur,i=e.loading,u=P();return m.a.createElement("div",{className:u.container},R({formOptions:r,formData:a,classes:u,onChange:n,onSpecificationInputBlur:l}),D({key:"weight",error:a.weight.error,inputLabel:"实际重量",inputValue:a.weight.value,helperText:a.weight.message,xs:6,unit:"kg",onChange:n,onBlur:l,classes:u,stateType:"stateful"}),D({key:"height",error:a.height.error,inputLabel:"高度",inputValue:a.height.value,helperText:a.height.message,xs:6,onChange:n,onBlur:l,classes:u,stateType:"stateful"}),D({key:"materialQuantity",error:a.materialQuantity.error,inputLabel:"数量",inputValue:a.materialQuantity.value,helperText:a.materialQuantity.message,xs:6,unit:"个",onChange:n,onBlur:l,classes:u,stateType:"stateful"}),D({key:"materialCost",error:!1,inputLabel:"单价",inputValue:a.materialCost.value,helperText:"",xs:6,unit:"元/kg",readOnly:!0,required:!1,onChange:n,onBlur:l,classes:u,stateType:"stateless"}),D({key:"predictWeight",error:!1,inputLabel:"预估重量",inputValue:a.predictWeight,helperText:"计算公式：体积 x 密度",xs:6,unit:"kg",readOnly:!0,required:!1,onChange:n,onBlur:l,classes:u,stateType:"stateless"}),D({key:"costFee",error:!1,inputLabel:"据费",inputValue:a.costFee,helperText:"",xs:6,unit:"元/个",readOnly:!0,required:!1,onChange:n,onBlur:l,classes:u,stateType:"stateless"}),D({key:"predictPrice",error:!1,inputLabel:"预估总价",inputValue:a.predictPrice,helperText:"",xs:6,unit:"元",readOnly:!0,required:!1,onChange:n,onBlur:l,classes:u,stateType:"stateless"}),m.a.createElement(d.a,{fullWidth:!0,className:u.formControl},m.a.createElement(y.a,{placeholder:"备注",rows:8,onChange:function(e){return n({item:{text:e.target.value,value:e.target.value},controllType:"input",key:"description",stateType:"stateless"})},value:a.description})),z({classes:u,onSubmit:t,loading:i}))},A=a(1500),M=a(1501),H=a(1491),K=a(1329),X=a.n(K),Y=a(88),Z=function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{o(r.next(e))}catch(e){l(e)}}function u(e){try{o(r.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,u)}o((r=r.apply(e,t||[])).next())}))},$={value:-1,error:!1,message:""},_={value:"",error:!1,message:""},ee={materialType:$,materialId:c()({},$,{value:{text:"",value:-1}}),materialCost:_,length:_,width:_,height:_,weight:_,freight:_,materialQuantity:_,round:$,sellType:$},te={type:0,predictWeight:"",extraCost:"",description:"",costFee:"",predictPrice:""},ae={loading:!1,submitSuccess:!1,submitFailed:!1},re={materialTypeOption:[],materialIdOption:[],roundTypeOption:[],sellTypeOption:[]},ne=function(e,t){var a=function(a){return t.data.value===a?c()(c()({},e),o()({},t.key,{value:a,error:!0,message:"该项不能为空"})):c()(c()({},e),o()({},t.key,{value:"autoComplete"===t.type?{text:t.data.text,value:t.data.value}:t.data.value,error:t.data.value===a,message:t.data.value===a?"该项不能为空":""}))};switch(t.type){case"input":return a("");case"select":case"autoComplete":return a(-1);default:throw new Error('Unknown type "'.concat(t.type,'" in statefulReducer.'))}},le=function(e,t){return c()(c()({},e),o()({},t.type,t.data))},ie=function(e,t){switch(t.type){case"loading":return{loading:!0,submitSuccess:!1,submitFailed:!1};case"reset":return{loading:!1,submitSuccess:!1,submitFailed:!1};case"success":return c()(c()({},e),{submitSuccess:!0});case"failed":return c()(c()({},e),{submitFailed:!0});default:throw new Error('Unknown type "'.concat(t.type,'" in viewStateReducer.'))}},ue=function(e,t){return c()(c()({},e),o()({},t.type,t.data))};t.default=function(){var e=Object(p.useReducer)(ne,ee),t=i()(e,2),a=t[0],r=t[1],l=Object(p.useReducer)(le,te),u=i()(l,2),o=u[0],s=u[1],d=Object(p.useReducer)(ie,ae),y=i()(d,2),h=y[0],g=y[1],f=Object(p.useReducer)(ue,re),v=i()(f,2),T=v[0],k=v[1];Object(p.useEffect)((function(){var e=function(e,t){return Z(void 0,void 0,void 0,n.a.mark((function a(){var r,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/toy/get/get-material-type?sign="+e);case 2:return r=a.sent,a.next=5,r.json();case 5:return l=a.sent,a.t0=t,a.next=9,l;case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:case"end":return a.stop()}}),a)})))};e(1,(function(e){return k({type:"materialTypeOption",data:e})})),e(10,(function(e){return k({type:"roundTypeOption",data:e})})),e(9,(function(e){return k({type:"sellTypeOption",data:e})}))}),[]);var x=function(){var e=a.materialType,t=a.materialCost,n=a.length,l=a.width,i=a.height,u=a.weight,s=a.freight,c=a.round,p=a.sellType,m=a.materialId,d=a.materialQuantity;r({type:"select",key:"materialType",data:e}),r({type:"input",key:"materialCost",data:t}),r({type:"input",key:"length",data:n}),""===l.value&&-1!==e.value&&r({type:"input",key:"width",data:l}),r({type:"input",key:"height",data:i}),r({type:"input",key:"weight",data:u}),r({type:"input",key:"freight",data:s}),r({type:"input",key:"materialQuantity",data:d}),r({type:"select",key:"round",data:c}),r({type:"select",key:"sellType",data:p}),r({type:"autoComplete",key:"materialId",data:m.value});for(var y={materialType:e.value,materialCost:t.value,type:o.type,height:i.value,weight:u.value,freight:s.value,description:o.description,extraCost:o.extraCost,materialId:m.value.value,materialQuantity:d.value},h=!1,g=0,f=Object.values(Object(Y.default)(y,["description","freight","extraCost"]));g<f.length;g++){var v=f[g];if(!v||-1===v){h=!0;break}}return{hasError:h,params:y}},C=function(){var e=a.materialQuantity,t=a.materialCost,n=a.length,l=a.width,i=a.height,u=a.weight,o=a.freight,c=a.materialType,p=a.sellType,m=a.round,d=a.materialId;g({type:"reset"}),s({type:"predictWeight",data:0}),s({type:"extraCost",data:0}),s({type:"description",data:""}),s({type:"costFee",data:0}),s({type:"predictPrice",data:0}),r({type:"input",key:"materialQuantity",data:e}),r({type:"input",key:"materialCost",data:t}),r({type:"input",key:"length",data:n}),r({type:"input",key:"width",data:l}),r({type:"input",key:"height",data:i}),r({type:"input",key:"weight",data:u}),r({type:"input",key:"freight",data:o}),r({type:"select",key:"materialType",data:c}),r({type:"select",key:"sellType",data:p}),r({type:"select",key:"round",data:m}),r({type:"autoComplete",key:"materialId",data:d})},w={materialType:a.materialType,materialId:a.materialId,materialCost:a.materialCost,type:o.type,length:a.length,width:a.width,height:a.height,weight:a.weight,predictWeight:o.predictWeight,freight:a.freight,extraCost:o.extraCost,description:o.description,round:a.round,sellType:a.sellType,materialQuantity:a.materialQuantity},b={loading:h.loading,onSubmit:function(){return Z(void 0,void 0,void 0,n.a.mark((function e(){var t,a,r,l,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x(),a=t.hasError,r=t.params,!a){e.next=3;break}return e.abrupt("return");case 3:return g({type:"loading"}),e.next=6,fetch("/toy/good/in",{body:JSON.stringify(r),method:"POST",headers:{"Content-Type":"application/json"}});case 6:return l=e.sent,e.next=9,l.text();case 9:return i=e.sent,g({type:"success"===i?"success":"failed"}),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))},formOptions:{materialType:T.materialTypeOption,materialId:T.materialIdOption,roundType:T.roundTypeOption,sellType:T.sellTypeOption},onChange:function(e){var t,a=e.item,l=e.controllType,i=e.key,u=e.stateType,o=function(e){"stateful"===u?r({type:e,key:i,data:a}):"stateless"===u&&s({type:i,data:a.value})};switch(l){case"input":o(l);break;case"select":-1!==a.value&&"materialType"===i&&(t=a.value,Z(void 0,void 0,void 0,n.a.mark((function e(){var a,r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/toy/get/get-detail?materialType="+t);case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,l=[],r.map((function(e){l.push({value:e.id,text:e["材质"],costFee:e["锯费"],materialCost:e["单价"],length:e["长"],width:e["宽"],sellType:e["卖出方式"],round:e["圆钢种类"]})})),k({type:"materialIdOption",data:l});case 9:case"end":return e.stop()}}),e)})))),o(l);break;case"autoComplete":s({type:"costFee",data:a?a.costFee:0}),o(l)}},onSpecificationInputBlur:function(){var e=a.length,t=a.width,r=a.height,n=a.materialQuantity;!function(e,t,a,r){s({type:"predictPrice",data:parseFloat((e*a+r*t).toFixed(1))})}(function(e,t,a,r,n){0!==n||r||(r=1);var l=function(e,t,a){var n=Math.PI*e*e;return t&&(n=e*t),parseFloat((n*a*7.874/1e3*r).toFixed(2))}(e/2/10,t/10,a/10);return(e&&t&&a||e&&a)&&s({type:"predictWeight",data:l}),l}(parseFloat(e.value),parseFloat(t.value),parseFloat(r.value),parseFloat(n.value),o.type),o.costFee,parseFloat(a.materialCost.value),parseFloat(n.value))}};return m.a.createElement(m.a.Fragment,null,m.a.createElement(A.a,{position:"static"},m.a.createElement(M.a,null,m.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return s({type:"type",data:0===o.type?1:0})}},m.a.createElement(X.a,null)),m.a.createElement(H.a,{variant:"h6"},o.type?"出库":"入库"))),J({type:"success",message:"保存成功",open:h.submitSuccess,onClose:C}),J({type:"failed",message:"保存失败",open:h.submitFailed,onClose:C}),o.type?m.a.createElement(U,c()({formData:c()({},w,{costFee:o.costFee,predictPrice:o.predictPrice})},b)):m.a.createElement(G,c()({formData:w},b)))}}}]);