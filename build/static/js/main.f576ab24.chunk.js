(this["webpackJsonpmy-app-pwa"]=this["webpackJsonpmy-app-pwa"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(19),o=a.n(s),r=(a(54),a(9)),c=a(10),l=a(12),u=a(11),m=a(13),d=(a(32),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"openLeftMenu",value:function(){document.getElementById("leftMenu").style.display="block",window.location.href="#"}},{key:"closeLeftMenu",value:function(){document.getElementById("leftMenu").style.display="none"}},{key:"subMenuPresent",value:function(){var e=document.getElementById("presentSubMenu");-1===e.className.indexOf("show")?e.className="show":e.className="hide"}},{key:"componentWillMount",value:function(){var e=window.location.href;-1===e.indexOf("permission=admin@cs@event")&&"admin"!==window.localStorage.getItem("permission")||-1!==e.indexOf("permission=user")?window.localStorage.setItem("permission","user"):window.localStorage.setItem("permission","admin"),-1!==e.indexOf("permission=admin@cs@event")&&(window.location.href=window.location.href.replace("permission=admin@cs@event","")),-1!==e.indexOf("permission=user")&&(window.location.href=window.location.href.replace("permission=user",""))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left",style:{display:"none"},id:"leftMenu"},i.a.createElement("button",{id:"closeButton",onClick:this.closeLeftMenu,className:"w3-bar-item w3-button w3-small"},"Close \xd7"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/registration",className:"w3-bar-item w3-button"},"Registration"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/status",className:"w3-bar-item w3-button"},"Status"),"admin"===window.localStorage.getItem("permission")?i.a.createElement("div",null,i.a.createElement("a",{onClick:this.subMenuPresent,href:"#",className:"w3-bar-item w3-button"},"Admin ",i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{id:"presentSubMenu",className:"hide"},i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/admin_gift",className:"w3-bar-item w3-button"},"Gift"),i.a.createElement("a",{onClick:this.closeLeftMenu,href:"?#/event/admin_lunch",className:"w3-bar-item w3-button"},"Lunch"))):""),i.a.createElement("div",{className:"w3-teal"},i.a.createElement("button",{className:"w3-button w3-teal w3-xlarge w3-left",onClick:this.openLeftMenu},"\u2630"),i.a.createElement("span",{className:"headerTitle"},"ADJF Advent")))}}]),t}(i.a.Component)),h=a(28),p=a(16),v=a(20),f=a(15),b=a(107),g=a(105),w=a(21),E=a.n(w),O=a(106),y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.variant,a=e.message;return i.a.createElement("div",null,null!=a?i.a.createElement(O.a,{variant:t},a):"")}}]),t}(i.a.Component),k=a(22),j=a.n(k),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={otp:null,message:null,variant:null,event:""},a.event=a.event.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({event:this.props.match.params.eventId.replace("admin_","")})}},{key:"event",value:function(){var e=this;this.setState({loader:!0}),E.a.put("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/event",{eventName:this.state.event,otp:this.state.otp}).then((function(t){e.setState({message:t.data,variant:"success",loader:!1})})).catch((function(t){void 0!==t.response&&400===t.response.status?e.setState({message:t.response.data,variant:"warning",loader:!1}):e.setState({message:"ERROR:Registration failed, please contact to Admin",variant:"danger",loader:!1})}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"menuDetails"},i.a.createElement(y,{variant:this.state.variant,message:this.state.message}),i.a.createElement(b.a,null,i.a.createElement(b.a.Group,{controlId:"formBasicOTP"},i.a.createElement("h5",{className:"eventHeader"},this.state.event.toUpperCase()+" :"),i.a.createElement(b.a.Control,{id:"otp",value:this.state.otp,onChange:function(t){return e.handleChange(t)},type:"input",placeholder:"Enter OTP for "+this.state.event})),i.a.createElement(g.a,{onClick:this.event,variant:"primary",type:"submit"},"Register"),i.a.createElement("div",{className:"spinnerEvent"},this.state.loader?i.a.createElement(j.a,{name:"three-bounce",color:"Black"}):"")))}}]),t}(i.a.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={otp:null,data:null,variant:null,event:""},a.event=a.event.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"event",value:function(){var e=this;this.setState({loader:!0}),E.a.get("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/data/otp/"+this.state.otp).then((function(t){e.setState({data:t.data,variant:"success",loader:!1})})).catch((function(t){void 0!==t.response&&400===t.response.status?e.setState({message:t.response.data,variant:"warning",loader:!1}):e.setState({message:"ERROR:Registration failed, please contact to Admin",variant:"danger",loader:!1})}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"menuDetails"},i.a.createElement(y,{variant:this.state.variant,message:this.state.message}),i.a.createElement(b.a,null,i.a.createElement(b.a.Group,{id:"formBasicOTP"},i.a.createElement("h5",{className:"eventHeader"},"Status :"),i.a.createElement(b.a.Control,{id:"otp",value:this.state.otp,onChange:function(t){return e.handleChange(t)},type:"input",placeholder:"Enter OTP for Status"})),i.a.createElement(g.a,{onClick:this.event,variant:"primary",type:"submit"},"Status"),i.a.createElement("div",{className:"spinnerEvent"},this.state.loader?i.a.createElement(j.a,{name:"three-bounce",color:"Black"}):""),i.a.createElement("ul",{style:{marginTop:"12px"},className:"b"},this.state.data?Object.entries(this.state.data).map((function(e,t){return i.a.createElement("li",null,i.a.createElement("span",{style:{fontWeight:"bold",color:"#9a9a9a"}},e[0].toUpperCase()+" : "),null==+e[1]?"":e[1])})):"")))}}]),t}(i.a.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("main",null,i.a.createElement("div",{className:"content"},i.a.createElement(h.a,null,i.a.createElement(p.a,{path:"/event/:eventId",component:C}),i.a.createElement(p.a,{path:"/status",component:N})))))}}]),t}(i.a.Component),M=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(d,null),i.a.createElement(S,null))}}]),t}(i.a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(102);o.a.render(i.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");R?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()},32:function(e,t,a){},49:function(e,t,a){e.exports=a(103)},54:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.f576ab24.chunk.js.map