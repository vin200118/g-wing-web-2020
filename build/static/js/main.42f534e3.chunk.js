(this["webpackJsonpg-wing-web-2020"]=this["webpackJsonpg-wing-web-2020"]||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(77),t(14)),s=t(15),i=t(17),u=t(16),m=t(18),d=(t(54),t(24)),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).logoutfun=t.logoutfun.bind(Object(d.a)(t)),t.openLeftMenu=t.openLeftMenu.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"openLeftMenu",value:function(){this.setState({dummy:"empty"}),document.getElementById("leftMenu").style.display="block"}},{key:"closeLeftMenu",value:function(){document.getElementById("leftMenu").style.display="none"}},{key:"logoutfun",value:function(){document.getElementById("leftMenu").style.display="none",this.setState({dummy:"empty"}),window.localStorage.setItem("password","")}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"leftMenu"},l.a.createElement("button",{id:"closeButton",onClick:this.closeLeftMenu,className:"w3-bar-item w3-button w3-small"},"Close \xd7"),l.a.createElement("div",null,l.a.createElement("a",{onClick:this.closeLeftMenu,href:"#/registration",className:"w3-bar-item w3-button"},"Registration"),l.a.createElement("a",{onClick:this.closeLeftMenu,href:"#/login",className:"w3-bar-item w3-button"},"Login"))),l.a.createElement("div",{className:"w3-teal"},l.a.createElement("button",{className:"w3-button w3-teal w3-xlarge w3-left",onClick:this.openLeftMenu},"\u2630"),l.a.createElement("span",{className:"headerTitle"},"G Wing")))}}]),a}(l.a.Component),E=t(40),f=t(29),h=t(47),G=t.n(h),p=t(160),g=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.variant,t=e.message;return l.a.createElement("div",null,null!=t?l.a.createElement(p.a,{variant:a},t):"")}}]),a}(l.a.Component),w=t(50),b=t.n(w),y=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{class:"col s12"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{id:"username",type:"text",class:"validate"}),l.a.createElement("label",{for:"username"},"Username"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{id:"new_password",type:"password",class:"validate"}),l.a.createElement("label",{for:"password"},"New Password"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s6"},l.a.createElement("input",{id:"confirm_password",type:"password",class:"validate"}),l.a.createElement("label",{for:"password"},"Confirm Password"))))}}]),a}(l.a.Component),j=t(67),O=t(162),k=t(161),C=t(155),N=t(159),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={username:null,password:null,age:null},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleChangeAge=t.handleChangeAge.bind(Object(d.a)(t)),t.login=t.login.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.id,e.target.value))}},{key:"handleChangeAge",value:function(e){this.setState({flatNo:e.target.value})}},{key:"login",value:function(){var e=this;console.log(this.state.username),console.log(this.state.password),this.setState({loader:!0});G.a.post("https://tam-g-wing.herokuapp.com/gwing/api/user-login",{username:this.state.username,password:this.state.password},{headers:{"Content-Type":"application/json"}}).then((function(a){console.log("res"+a),e.setState({data:a.data,message:"User logged in successfully.",variant:"success",loader:!1})})).catch((function(a){void 0!==a.response&&401===a.response.status?e.setState({message:a.response.data,variant:"danger",loader:!1}):e.setState({message:"ERROR:Registration failed, please contact to Admin",variant:"danger",loader:!1})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{class:"col s12"},l.a.createElement(g,{variant:this.state.variant,message:this.state.message}),l.a.createElement(C.a,null,l.a.createElement(O.a,{id:"flatNo"},"Flat No"),l.a.createElement(N.a,{style:{width:120},id:"flatNo",value:this.state.flatNo,onChange:this.handleChangeAge},l.a.createElement(k.a,{value:"G-101"},"G-101"),l.a.createElement(k.a,{value:"G-102"},"G-102"),l.a.createElement(k.a,{value:"G-103"},"G-103"),l.a.createElement(k.a,{value:"G-104"},"G-104"),l.a.createElement(k.a,{value:"G-201"},"G-201"),l.a.createElement(k.a,{value:"G-202"},"G-202"),l.a.createElement(k.a,{value:"G-203"},"G-203"),l.a.createElement(k.a,{value:"G-204"},"G-204"),l.a.createElement(k.a,{value:"G-301"},"G-301"),l.a.createElement(k.a,{value:"G-302"},"G-302"),l.a.createElement(k.a,{value:"G-303"},"G-303"),l.a.createElement(k.a,{value:"G-304"},"G-304"),l.a.createElement(k.a,{value:"G-401"},"G-401"),l.a.createElement(k.a,{value:"G-402"},"G-402"),l.a.createElement(k.a,{value:"G-403"},"G-403"),l.a.createElement(k.a,{value:"G-404"},"G-404"),l.a.createElement(k.a,{value:"G-501"},"G-501"),l.a.createElement(k.a,{value:"G-502"},"G-502"),l.a.createElement(k.a,{value:"G-503"},"G-503"),l.a.createElement(k.a,{value:"G-504"},"G-504"),l.a.createElement(k.a,{value:"G-601"},"G-601"),l.a.createElement(k.a,{value:"G-602"},"G-602"),l.a.createElement(k.a,{value:"G-603"},"G-603"),l.a.createElement(k.a,{value:"G-604"},"G-604"),l.a.createElement(k.a,{value:"G-701"},"G-701"),l.a.createElement(k.a,{value:"G-702"},"G-702"),l.a.createElement(k.a,{value:"G-703"},"G-703"),l.a.createElement(k.a,{value:"G-704"},"G-704"),l.a.createElement(k.a,{value:"G-801"},"G-801"),l.a.createElement(k.a,{value:"G-802"},"G-802"),l.a.createElement(k.a,{value:"G-803"},"G-803"),l.a.createElement(k.a,{value:"G-804"},"G-804"),l.a.createElement(k.a,{value:"G-901"},"G-901"),l.a.createElement(k.a,{value:"G-902"},"G-902"),l.a.createElement(k.a,{value:"G-903"},"G-903"),l.a.createElement(k.a,{value:"G-904"},"G-904"),l.a.createElement(k.a,{value:"G-1001"},"G-1001"),l.a.createElement(k.a,{value:"G-1002"},"G-1002"),l.a.createElement(k.a,{value:"G-1003"},"G-1003"),l.a.createElement(k.a,{value:"G-1004"},"G-1004"),l.a.createElement(k.a,{value:"G-1101"},"G-1101"),l.a.createElement(k.a,{value:"G-1102"},"G-1102"),l.a.createElement(k.a,{value:"G-1103"},"G-1103"),l.a.createElement(k.a,{value:"G-1104"},"G-1104"),l.a.createElement(k.a,{value:"G-1201"},"G-1201"),l.a.createElement(k.a,{value:"G-1202"},"G-1202"),l.a.createElement(k.a,{value:"G-1203"},"G-1203"),l.a.createElement(k.a,{value:"G-1204"},"G-1024"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"input-field col s3"},l.a.createElement("input",{id:"password",type:"password",class:"validate",onChange:function(a){return e.handleChange(a)}}),l.a.createElement("label",{for:"password"},"Password"))),l.a.createElement("a",{class:"waves-effect waves-light btn-small",onClick:this.login},"Login"),l.a.createElement("div",{className:"spinnerEvent"},this.state.loader?l.a.createElement(b.a,{name:"three-bounce",color:"Black"}):""))}}]),a}(l.a.Component),L=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("main",null,l.a.createElement("div",{className:"content"},l.a.createElement(E.a,null,l.a.createElement(f.a,{path:"/registration",component:y}),l.a.createElement(f.a,{path:"/login",component:M})))))}}]),a}(l.a.Component),S=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement(v,null),l.a.createElement(L,null))}}]),a}(l.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(123);c.a.render(l.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");A?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(a,e)}))}}()},54:function(e,a,t){},72:function(e,a,t){e.exports=t(124)},77:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.42f534e3.chunk.js.map