(this["webpackJsonpaxa-test-code"]=this["webpackJsonpaxa-test-code"]||[]).push([[0],{119:function(e,t,a){e.exports=a(243)},124:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},180:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(5),c=a.n(o),l=(a(124),a(19)),u=a(8),s=a(20),i=a(30),m=a(9),p="undefined"!==typeof window,d=function(){return window.localStorage.axaToken&&JSON.parse(window.localStorage.axaToken)},f=function(e){return window.localStorage.axaToken=JSON.stringify(e)},b=Object(n.createContext)({}),h=function(e){var t=e.children,a=Object(n.useState)({loading:!0,token:d()}),o=Object(m.a)(a,2),c=o[0],l=o[1];Object(n.useEffect)((function(){var e=d();console.log(e,"AuthProvider"),e&&l({loading:!1,token:e})}),[]);return r.a.createElement(b.Provider,{value:{auth:c,setAuthToken:function(e){console.log(e,"CONTASDASD!!"),f(e),l((function(t){return Object(i.a)({},t,{token:e})}))},setClearToken:function(){p&&(console.log("Ensuring the `Token` property exists."),f("")),l((function(e){return Object(i.a)({},e,{token:""})}))}}},t)},E=function(e){var t=e.children,a=Object(s.a)(e,["children"]),o=Object(n.useContext)(b).auth;return console.log(o,"PrivateRoute"),r.a.createElement(u.b,Object.assign({},a,{render:function(e){var a=e.location;return o.token?t:r.a.createElement(u.a,{to:{pathname:"/",state:{from:a}}})}}))},v=(a(129),function(e){var t=e.children;return r.a.createElement("div",{className:"layout"},r.a.createElement("header",{className:"header"},r.a.createElement("ul",{className:"nav"},[{name:"Home",path:"/"},{name:"Registration",path:"/registration"},{name:"Enter Token",path:"/enter-token"},{name:"Upload Resume",path:"/upload-resume"},{name:"Request Schedule",path:"/request-schedule"}].map((function(e){return r.a.createElement("li",{key:e.name,className:"nav-item"},r.a.createElement(l.c,{exact:!0,activeClassName:"selected",to:e.path},e.name))})))),t)}),g=(a(130),function(e){var t=e.text,a=e.type,n=e.color,o=Object(s.a)(e,["text","type","color"]);return r.a.createElement("button",Object.assign({className:"button ".concat(n||""),type:a},o),t)});g.defaultProps={type:"button",color:""};var y=g,O=(a(131),function(){return r.a.createElement(v,null,r.a.createElement("h1",null,"Good Morning, Developer!"),r.a.createElement(l.b,{to:"/registration"},r.a.createElement(y,{text:"Ready? Let's get started!"})))}),j=a(13),k=a.n(j),x=a(26),S=a(55),w=(a(133),function(e){var t=e.type,a=e.name,n=e.label,o=e.placeholder,c=e.onChange,l=Object(s.a)(e,["type","name","label","placeholder","onChange"]);return r.a.createElement("div",{className:"field-wrap"},n&&r.a.createElement("label",{className:"field-label",htmlFor:a},n),r.a.createElement("input",Object.assign({},l,{className:"field-input",type:t,name:a,id:a,placeholder:o,onChange:c})))});w.defaultProps={type:"text",placeholder:"",label:"",onChange:function(){}};var T=w,C=(a(134),function(e){var t=e.message,a=e.status,n=Object(s.a)(e,["message","status"]);return r.a.createElement("div",Object.assign({className:"alert-display ".concat(a)},n),r.a.createElement("h3",null,a),r.a.createElement("p",null,t))});C.defaultProps={status:""};var N=C;function P(e){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(k.a.mark((function e(t){var a,n,r,o,c,l,u,m=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>1&&void 0!==m[1]?m[1]:{},n=a.body,r=Object(s.a)(a,["body"]),o=m.length>2?m[2]:void 0,c=o?"":d(),l={"Content-Type":"application/json"},c&&(l["x-axa-api-key"]="".concat(c)),u=Object(i.a)({method:n?n.method:"GET"},r,{headers:Object(i.a)({},l,{},r.headers)}),n&&(u.body=JSON.stringify(n)),e.abrupt("return",window.fetch("/".concat(t),u).then(function(){var e=Object(x.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(a=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",a);case 7:return e.abrupt("return",Promise.reject(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return P("register",{method:"POST",body:e},!0)}a(135);var D={type:"",message:""},q=function(){var e=Object(u.g)(),t=Object(n.useState)({name:"",email:"",mobile:"",positionApplied:"",source:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(D),s=Object(m.a)(l,2),p=s[0],d=s[1],f=Object(n.useState)(!1),b=Object(m.a)(f,2),h=b[0],E=b[1];function g(e,t){d(D),c((function(a){return Object(i.a)({},a,Object(S.a)({},t,e))}))}function O(){return(O=Object(x.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={Name:o.mobile,Email:o.email,Mobile:o.mobile,PositionApplied:o.positionApplied,Source:o.source},E(!0),t.prev=3,t.next=6,R(n);case 6:d({type:"success",message:"Your information has been successfully submitted."}),setTimeout((function(){e.push("/enter-token")}),1500),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0.Result>=400&&d({type:"error",message:"Oops, Please check the fields and re-submit, Thank you!"});case 13:return t.prev=13,E(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})))).apply(this,arguments)}return r.a.createElement(v,null,r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Registration"),p.type&&r.a.createElement(N,{message:p.message,status:p.type}),r.a.createElement("form",{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement(T,{required:!0,name:"name",label:"Name",value:o.name,onChange:function(e){return g(e.target.value,"name")}}),r.a.createElement(T,{required:!0,type:"email",name:"Email",label:"email",value:o.email,onChange:function(e){return g(e.target.value,"email")}}),r.a.createElement(T,{required:!0,type:"tel",name:"mobile",label:"Mobile",value:o.mobile,onChange:function(e){return g(e.target.value,"mobile")}}),r.a.createElement(T,{required:!0,name:"positionApplied",label:"Position Applied",value:o.positionApplied,onChange:function(e){return g(e.target.value,"positionApplied")}}),r.a.createElement(T,{required:!0,name:"source",label:"Source",value:o.source,onChange:function(e){return g(e.target.value,"source")}}),r.a.createElement(y,{text:"Submit",type:"submit",disabled:h}))))},M=a(115),Y=a.n(M),F=a(118),J=a(22),U=a.n(J);function B(e){return P("schedule",{method:"POST",body:e})}a(180),a(181),a(182);var G={type:"",message:""},H=function(){Object(u.g)();var e=Object(n.useState)(G),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),s=l[0],i=l[1],p=Object(n.useState)(new Date),d=Object(m.a)(p,2),f=d[0],b=d[1],h=Object(n.useState)(U()().hour(0).minute(0)),E=Object(m.a)(h,2),g=E[0],O=E[1],j=function(){var e=Object(x.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={ProposedDate:U()(f).format("YYYY-MM-DD"),ProposedTime:g,Online:"true"},i(!0),e.prev=3,e.next=6,B(a);case 6:o({type:"success",message:"Your Schedule has been successfully submitted."}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),o({type:"error",message:e.t0.Message||"Oops, Please try to select new schedule, Thank you!"});case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v,null,r.a.createElement("div",{className:"schedule-page"},r.a.createElement("h1",null,"Please select your schedule"),a.type&&r.a.createElement(N,{message:a.message,status:a.type}),r.a.createElement("form",{onSubmit:j},r.a.createElement("label",{className:"field-label"},"Proposed Time"),r.a.createElement(F.a,{showSecond:!1,defaultValue:g,className:"field-wrap",onChange:function(e){O(e.format("h:mm A")),o(G)},format:"h:mm A",use12Hours:!0,inputReadOnly:!0}),r.a.createElement(Y.a,{selected:f,onChange:function(e){b(e),o(G)},dateFormat:"yyyy-MM-dd",customInput:r.a.createElement(T,{label:"Proposed Date"})}),r.a.createElement(y,{text:"Submit",type:"submit",disabled:s}))))},I=(a(240),function(){var e=Object(n.useContext)(b),t=e.auth,a=e.setAuthToken,o=e.setClearToken,c=Object(n.useState)(""),l=Object(m.a)(c,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){console.log(t.token,"TOKE!!@!@"),t.token&&s(t.token)}),[t.token]),r.a.createElement(v,null,r.a.createElement("div",{className:"enter-token-page"},r.a.createElement("h1",null,"Enter your token"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(u)}},r.a.createElement(T,{required:!0,name:"token",label:"Token",value:u,onChange:function(e){return s(e.target.value)}}),r.a.createElement(y,{text:"Save Token",type:"submit"}),r.a.createElement(y,{text:"Clear Token",color:"light",onClick:function(){s(""),o()}}))))});function L(e){return P("upload",{method:"POST",body:e})}a(241);var W={type:"",message:""},K=function(){var e=Object(u.g)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(W),s=Object(m.a)(l,2),i=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),b=f[0],h=f[1],E=function(){var t=Object(x.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),h(!0),n={file:{mime:"application/pdf",data:o}},t.prev=3,t.next=6,L(n);case 6:p({type:"success",message:"Your Resume has been successfully uploaded."}),setTimeout((function(){e.push("/request-schedule")}),1500),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log({error:t.t0},"ERROR !!!!"),p({type:"error",message:"Oops, Please check your resume and re-upload, Thank you!"});case 14:return t.prev=14,h(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[3,10,14,17]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(v,null,r.a.createElement("div",{className:"upload-page"},r.a.createElement("h1",null,"Please upload your resume"),i.type&&r.a.createElement(N,{message:i.message,status:i.type}),r.a.createElement("form",{onSubmit:E},r.a.createElement(T,{required:!0,type:"file",name:"file-resume",label:"File upload",onChange:function(e){var t=e.target.files[0],a=new FileReader;p(W),a.onloadend=function(){c(a.result.split(",").pop())},t&&a.readAsDataURL(t)}}),r.a.createElement(y,{text:"Upload File",type:"submit",disabled:b}))))};a(242);var V=function(){return r.a.createElement(l.a,null,r.a.createElement(u.d,null,r.a.createElement(u.a,{from:"/axa-test-code",to:"/"}),r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(u.b,{path:"/registration"},r.a.createElement(q,null)),r.a.createElement(u.b,{path:"/enter-token"},r.a.createElement(I,null)),r.a.createElement(E,{path:"/request-schedule"},r.a.createElement(H,null)),r.a.createElement(E,{path:"/upload-resume"},r.a.createElement(K,null)),r.a.createElement(u.b,null,r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.c28e52fd.chunk.js.map