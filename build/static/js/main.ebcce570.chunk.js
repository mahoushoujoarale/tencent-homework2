(this.webpackJsonphomework2=this.webpackJsonphomework2||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(3),l=t.n(i),h=(t(11),t(12),t(19)),a=(t(13),t(2)),j=Object(a.e)({show:!1,showMessage:!1,data:{checkbox:[],select:"",slide:0,input:"",switch:!1},setShow:function(){j.show=!0,j.showMessage=!1},setData:function(e){j.data=e,j.showMessage=!0,setTimeout((function(){j.setShow()}),2e3)}}),r=j,o=t(0);function u(){return Object(o.jsx)(h.a,{children:function(){return Object(o.jsxs)("div",{className:"showpane",children:[Object(o.jsx)("h2",{children:"ShowPane"}),Object(o.jsxs)("ul",{style:{display:r.show?"":"none"},children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:"checkbox"}),r.data.checkbox.map((function(e){return e+" "}))]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:"select"}),r.data.select]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:"slide"}),r.data.slide]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:"input"}),r.data.input]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:"switch"}),r.data.switch.toString()]})]})]})}})}var d=t(6);t(16);function b(){var e=!1,c=Object(n.useRef)(null),t=function(){(e=!e)?(c.current.classList.add("switch_check"),c.current.classList.remove("switch_uncheck")):(c.current.classList.remove("switch_check"),c.current.classList.add("switch_uncheck"))},s=function(e){null===e||void 0===e||e.preventDefault();var c,t=document.forms.form,n=[],s=Object(d.a)(t.checkbox);try{for(s.s();!(c=s.n()).done;){var i=c.value;!0===i.checked&&n.push(i.value)}}catch(l){s.e(l)}finally{s.f()}r.setData({checkbox:n,select:t.select.value,slide:t.slide.value,input:t.input.value,switch:t.switch.checked})},i=function(e){null===e||void 0===e||e.preventDefault(),document.forms.form.input.value=""};return Object(o.jsx)(h.a,{children:function(){return Object(o.jsxs)("div",{className:"editpane",children:[Object(o.jsx)("h2",{children:"EditPane"}),Object(o.jsxs)("form",{action:"",onSubmit:s,name:"form",children:[Object(o.jsx)("h3",{children:"checkbox"}),Object(o.jsx)("input",{type:"checkbox",name:"checkbox",value:"\u597d\u5bb6\u4f19"}),"\u597d\u5bb6\u4f19",Object(o.jsx)("input",{type:"checkbox",name:"checkbox",value:"\u574f\u5bb6\u4f19"}),"\u574f\u5bb6\u4f19",Object(o.jsx)("input",{type:"checkbox",name:"checkbox",value:"\u7b28\u5bb6\u4f19"}),"\u7b28\u5bb6\u4f19",Object(o.jsx)("h3",{children:"select"}),Object(o.jsxs)("select",{name:"select",children:[Object(o.jsx)("option",{value:"\u8d5b\u7f57",children:"\u8d5b\u7f57"}),Object(o.jsx)("option",{value:"\u8fea\u8fe6",children:"\u8fea\u8fe6"}),Object(o.jsx)("option",{value:"\u76d6\u4e9a",children:"\u76d6\u4e9a"}),Object(o.jsx)("option",{value:"\u6234\u62ff",children:"\u6234\u62ff"})]}),Object(o.jsx)("h3",{children:"slide"}),Object(o.jsx)("input",{type:"range",name:"slide"}),Object(o.jsx)("h3",{children:"input"}),Object(o.jsx)("input",{type:"text",name:"input",placeholder:"\u5360\u4f4d\u63d0\u793a"}),Object(o.jsx)("button",{onClick:i,children:"\xd7"}),Object(o.jsx)("h3",{children:"switch"}),Object(o.jsx)("input",{type:"checkbox",className:"switch switch_uncheck",ref:c,onClick:t,name:"switch"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",name:"submit"})]})]})}})}t(17);var x=function(e){return Object(o.jsx)(h.a,{children:function(){return Object(o.jsx)("div",{className:"message",style:{display:r.showMessage?"":"none"},children:Object(o.jsx)("div",{className:"slide-in-top",children:e.str})})}})};var O=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(x,{str:"\u5373\u5c06\u5c55\u793a\u7ed3\u679c"}),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{})]})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,l=c.getTTFB;t(e),n(e),s(e),i(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.ebcce570.chunk.js.map