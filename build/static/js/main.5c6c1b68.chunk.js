(this["webpackJsonpmy-app-pwa"]=this["webpackJsonpmy-app-pwa"]||[]).push([[0],{31:function(e,t,n){},48:function(e,t,n){e.exports=n(86)},53:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(19),o=n.n(s),r=(n(53),n(8)),c=n(9),l=n(12),u=n(10),m=n(13),d=(n(31),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"openLeftMenu",value:function(){document.getElementById("leftMenu").style.display="block",window.location.href="#"}},{key:"closeLeftMenu",value:function(){document.getElementById("leftMenu").style.display="none"}},{key:"subMenuPresent",value:function(){var e=document.getElementById("presentSubMenu");-1===e.className.indexOf("show")?e.className="show":e.className="hide"}},{key:"componentWillMount",value:function(){var e=window.location.href;-1===e.indexOf("permission=admin@cs@event")&&"admin"!==window.localStorage.getItem("permission")||-1!==e.indexOf("permission=user")?window.localStorage.setItem("permission","user"):window.localStorage.setItem("permission","admin"),-1!==e.indexOf("permission=admin@cs@event")&&(window.location.href=window.location.href.replace("permission=admin@cs@event","")),-1!==e.indexOf("permission=user")&&(window.location.href=window.location.href.replace("permission=user",""))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"leftMenu"},i.a.createElement("button",{id:"closeButton",onClick:this.closeLeftMenu,className:"w3-bar-item w3-button w3-small"},"Close \xd7"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/registration",className:"w3-bar-item w3-button"},"Registration"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/status",className:"w3-bar-item w3-button"},"Status"),"admin"===window.localStorage.getItem("permission")?i.a.createElement("div",null,i.a.createElement("a",{onClick:this.subMenuPresent,href:"#",className:"w3-bar-item w3-button"},"Admin ",i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{id:"presentSubMenu",className:"hide"},i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/admin_gift",className:"w3-bar-item w3-button"},"Gift"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/admin_lunch",className:"w3-bar-item w3-button"},"Lunch"))):""),i.a.createElement("div",{className:"w3-teal"},i.a.createElement("button",{className:"w3-button w3-teal w3-xlarge w3-left",onClick:this.openLeftMenu},"\u2630"),i.a.createElement("span",{className:"headerTitle"},"Pune Event App")))}}]),t}(i.a.Component)),h=n(26),p=n(16),v=n(20),f=n(15),b=n(90),g=n(88),w=n(21),E=n.n(w),O=n(89),y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.variant,n=e.message;return i.a.createElement("div",null,null!=n?i.a.createElement(O.a,{variant:t},n):"")}}]),t}(i.a.Component),j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={otp:null,message:null,variant:null,event:""},n.event=n.event.bind(Object(f.a)(n)),n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({event:this.props.match.params.eventId.replace("admin_","")})}},{key:"event",value:function(){var e=this;E.a.put("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/event",{eventName:this.state.event,otp:this.state.otp}).then((function(t){e.setState({message:t.data,variant:"success"})})).catch((function(t){void 0!==t.response&&400===t.response.status?e.setState({message:t.response.data,variant:"warning"}):e.setState({message:"ERROR:Registration failed, please contact to Admin",variant:"danger"})}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"menuDetails"},i.a.createElement(y,{variant:this.state.variant,message:this.state.message}),i.a.createElement(b.a,null,i.a.createElement(b.a.Group,{controlId:"formBasicOTP"},i.a.createElement("h5",{className:"eventHeader"},this.state.event.toUpperCase()+" :"),i.a.createElement(b.a.Control,{id:"otp",value:this.state.otp,onChange:function(t){return e.handleChange(t)},type:"input",placeholder:"Enter OTP for "+this.state.event})),i.a.createElement(g.a,{onClick:this.event,variant:"primary",type:"submit"},"Register")))}}]),t}(i.a.Component),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={otp:null,data:null,variant:null,event:""},n.event=n.event.bind(Object(f.a)(n)),n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"event",value:function(){var e=this;E.a.get("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/data/otp/"+this.state.otp).then((function(t){e.setState({data:t.data,variant:"success"})})).catch((function(t){void 0!==t.response&&400===t.response.status?e.setState({message:t.response.data,variant:"warning"}):e.setState({message:"ERROR:Registration failed, please contact to Admin",variant:"danger"})}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"menuDetails"},i.a.createElement(y,{variant:this.state.variant,message:this.state.message}),i.a.createElement(b.a,null,i.a.createElement(b.a.Group,{id:"formBasicOTP"},i.a.createElement("h5",{className:"eventHeader"},"Status :"),i.a.createElement(b.a.Control,{id:"otp",value:this.state.otp,onChange:function(t){return e.handleChange(t)},type:"input",placeholder:"Enter OTP for Status"})),i.a.createElement(g.a,{onClick:this.event,variant:"primary",type:"submit"},"Status"),i.a.createElement("ul",{style:{marginTop:"12px"},className:"b"},this.state.data?Object.entries(this.state.data).map((function(e,t){return i.a.createElement("li",null,i.a.createElement("span",{style:{fontWeight:"bold",color:"#9a9a9a"}},e[0].toUpperCase()+" : "),null==+e[1]?"":e[1])})):"")))}}]),t}(i.a.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("main",null,i.a.createElement("div",{className:"content"},i.a.createElement(h.a,null,i.a.createElement(p.a,{path:"/event/:eventId",component:j}),i.a.createElement(p.a,{path:"/status",component:k})))))}}]),t}(i.a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(d,null),i.a.createElement(C,null))}}]),t}(i.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(85);o.a.render(i.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.5c6c1b68.chunk.js.map