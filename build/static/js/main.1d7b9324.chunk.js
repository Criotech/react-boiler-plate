(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=(n(79),n(18)),i=n(41),l=n.n(i),u=n(60),s=n.n(u),m=n(12),d=n(61),f=n(62),h=n(34),p={user:{},isLoggingIn:!1,isAuthenticated:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOGGING_IN":return Object(h.a)({},e,{isLoggingIn:!0});case"DONE_LOGGING_IN":return Object(h.a)({},e,{isLoggingIn:!1});case"SET_USER":return Object(h.a)({},e,{user:t.payload,isAuthenticated:!0});default:return e}},b=Object(m.combineReducers)({auth:E}),v=(n(104),[Object(f.createLogger)(),d.a]),g=m.applyMiddleware.apply(void 0,v),w=Object(m.createStore)(b,{},g),O=function(e){return function(t){t({type:"SET_USER",payload:e})}},j=n(10),y=n(13),S=n(42),N=n.n(S),k=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement(N.a,{type:"Oval",color:"black",width:"56",height:"56"}))},x=n(19),A=n(29),I=n(30),R=n(32),U=n(31),z=n(33),L=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,error:""},n}return Object(z.a)(t,e),Object(I.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Something went wrong. Unable to render this part.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(a.Component),D=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"navigation-div"},r.a.createElement("div",{id:"branding"},r.a.createElement(j.b,{to:"/"},r.a.createElement("h1",null,"React Redux Base"))),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"navigation-items"},r.a.createElement("li",null,r.a.createElement(j.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},r.a.createElement(j.b,{to:"/login"},"Login")))))))},T=Object(c.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,n=e.auth,a=Object(x.a)(e,["component","auth"]);return r.a.createElement(y.b,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(L,null,r.a.createElement(D,null),r.a.createElement("main",{className:"container",id:"private-route-layout"},r.a.createElement(t,e))):r.a.createElement(y.a,{to:"/login"})}}))}),C=Object(c.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,n=e.auth,a=Object(x.a)(e,["component","auth"]);return r.a.createElement(y.b,Object.assign({},a,{render:function(e){return n.isAuthenticated?r.a.createElement(y.a,{to:"/"}):r.a.createElement("main",{className:"container",id:"auth-route-layout"},r.a.createElement(L,null,r.a.createElement(t,e)))}}))}),G=function(e){var t=e.component,n=Object(x.a)(e,["component"]);return r.a.createElement(y.b,Object.assign({},n,{render:function(e){return r.a.createElement(L,null,r.a.createElement(D,null),r.a.createElement("main",{className:"container",id:"public-route-layout"},r.a.createElement(t,e)))}}))},W=function(e){var t=e.location;return r.a.createElement("section",{className:"container",id:"error404"},r.a.createElement("h1",null,"Error: 404"),r.a.createElement("p",null,"The requested url ",r.a.createElement("span",{id:"address404"},t.pathname)," was not found on the server."))},_=n(53),B=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,150))}),J=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,151))}),P=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,152))}),q=function(){return r.a.createElement(j.a,{basename:"/react-redux-base"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(k,null)},r.a.createElement(_.a,{ref:function(e){return window.alertRef=e}}),r.a.createElement(y.d,null,r.a.createElement(C,{exact:!0,path:"/",component:J}),r.a.createElement(C,{exact:!0,path:"/login",component:J}),r.a.createElement(T,{exact:!0,path:"/home",component:B}),r.a.createElement(G,{exact:!0,path:"/about",component:P}),r.a.createElement(y.b,{component:W}))))};if(localStorage.jwt){l.a.defaults.headers.common.Authorization=w.getState().auth.user.token,l.a.defaults.headers.common.Authorization=localStorage.jwt;var F=s()(localStorage.jwt);localStorage.user&&w.dispatch(O(JSON.parse(localStorage.user)));var M=Date.now()/1e3;F.exp<M&&w.dispatch(function(e){e({type:"LOGOUT_USER"})})}var $=function(){return r.a.createElement(c.a,{store:w},r.a.createElement(q,null))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}Object(o.render)(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-redux-base",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-redux-base","/service-worker.js");H?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,e)})}}()},53:function(e,t,n){"use strict";n.d(t,"a",function(){return R}),n.d(t,"b",function(){return U});var a=n(29),r=n(30),o=n(32),c=n(31),i=n(33),l=n(45),u=n.n(l),s=n(64),m=n(73),d=n(0),f=n.n(d),h=n(65),p=n.n(h),E=(n(128),n(46)),b=n.n(E),v=n(66),g=n.n(v),w=n(70),O=n.n(w),j=n(71),y=n.n(j),S=n(72),N=n.n(S),k=n(47),x=n.n(k),A=b()(),I=function(e){var t=e.alert,n=e.removeAlert,a=Object(d.useState)("slideInUp"),r=Object(m.a)(a,2),o=r[0],c=r[1];Object(d.useEffect)(function(){setTimeout(Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("fadeOutDown");case 2:i(A);case 3:case"end":return e.stop()}},e)})),3e3)});var i=function(e){c("fadeOutDown"),setTimeout(function(){return n(e)},500)};return f.a.createElement("li",{className:p()("alert-item animated faster",{slideInUp:"slideInUp"===o,fadeOutDown:"fadeOutDown"===o})},f.a.createElement("div",{className:"icon"},function(e){switch(e){case"success":return f.a.createElement(g.a,{fontSize:"30px",color:"#27ae60"});case"error":return f.a.createElement(y.a,{fontSize:"30px",color:"#e74c3c"});case"warning":return f.a.createElement(N.a,{fontSize:"26px",color:"orange"});case"info":default:return f.a.createElement(x.a,{fontSize:"30px",color:"#69f"})}}(t.type)),f.a.createElement("div",{className:"alert-content"},f.a.createElement("span",{style:{color:"#ccc"}},t.message)),f.a.createElement("div",{className:"close",onClick:function(){return i(t.id)}},f.a.createElement(O.a,{fontSize:"16px",color:"grey"})))},R=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).doAlert=function(e,t){n.setState({alerts:[{message:e,type:t,id:A}]})},n.removeAlert=function(e){var t=n.state.alerts.filter(function(t){return t.id!==e});n.setState({alerts:t})},n.state={alerts:[]},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("ul",{className:"alert-container",style:{}},this.state.alerts.map(function(t,n){return f.a.createElement(I,{alert:t,key:b()(),index:n,removeAlert:e.removeAlert})}))}}]),t}(f.a.Component),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";window.alertRef?window.alertRef.doAlert(e,t):console.log("no container found")}},74:function(e,t,n){e.exports=n(149)},79:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.1d7b9324.chunk.js.map