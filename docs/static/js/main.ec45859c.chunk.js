(this.webpackJsonpanimse=this.webpackJsonpanimse||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(15),r=s.n(n),l=(s(26),s(27),s(0));var i=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"globalheader",children:Object(l.jsx)("div",{className:"globalheaderContent",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"menuItem col-auto",children:"Animse.se"}),Object(l.jsx)("div",{className:"col"}),Object(l.jsx)("div",{className:"menuItem col-auto",children:"Logga I"})]})})}),Object(l.jsx)("div",{className:"headerSpacer"})]})},o=s(16),d=s(17),j=s(21),m=s(20);s(29);function u(e){var t=e.eventInfo,s=new Date(t.startdate);return Object(l.jsxs)("div",{className:"bg-light mt-2 row",children:[Object(l.jsx)("div",{className:"col-md-3 d-flex align-items-center",children:Object(l.jsx)("img",{className:"img-fluid",src:"http://api.animse.se:8055/assets/"+t.banner})}),Object(l.jsx)("div",{className:"col-md my-2",children:Object(l.jsxs)("div",{className:"col text-start",children:[Object(l.jsx)("h5",{className:"text-muted",children:t.organizer}),Object(l.jsx)("h4",{className:"",children:t.title}),Object(l.jsx)("div",{className:"",children:t.shortdescription})]})}),Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-auto  mt-4 mb-2 ",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"d-flex col-auto h3 align-items-center",children:Object(l.jsx)("i",{className:"bi bi-clock"})}),Object(l.jsxs)("div",{className:"col text-start",children:[Object(l.jsx)("div",{className:"h6 text-muted",children:s.toLocaleString("sv-SE",{day:"numeric",month:"short",year:"numeric"})}),Object(l.jsx)("div",{className:"h4",children:s.toLocaleString("sv-SE",{hour:"2-digit",minute:"2-digit"})})]})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-auto h4",children:Object(l.jsx)("i",{className:"bi bi-box-arrow-in-right"})}),Object(l.jsx)("div",{className:"col h6 d-flex  align-items-center",children:t.location})]})]})})})]})}var h=function(e){Object(j.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={events:[],status:"loading"},c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.animse.se:8055/items/animeevents/").then((function(e){return e.json()})).then((function(t){e.setState({events:t.data,status:"idle"})}))}},{key:"render",value:function(){return"loading"===this.state.status?Object(l.jsx)("div",{children:"loading...."}):Object(l.jsx)("div",{className:"Events container",children:this.state.events.map((function(e){return Object(l.jsx)(u,{eventInfo:e})}))})}}]),s}(a.a.Component),b=s(9);function x(e){var t=this;e.preventDefault();var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.email})};fetch("http://api.animse.se:8055/users",s).then((function(e){return console.log(e),200===e.status&&t.setState("success"),e.json()})).then((function(e){console.log(e)}))}var p=function(){var e=a.a.useState("idle"),t=Object(b.a)(e,2),s=t[0],c=t[1],n=a.a.useState(""),r=Object(b.a)(n,2),i=r[0],o=r[1],d=a.a.useState(""),j=Object(b.a)(d,2),m=j[0],u=j[1];return"idle"===s?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md"}),Object(l.jsxs)("form",{className:"col-md-8",children:[Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"col-sm-2 col-form-label",children:"Email address"}),Object(l.jsx)("div",{className:"col-sm-10",children:Object(l.jsx)("input",{type:"email",value:i,onChange:function(e){return o(e.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})})]}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("label",{htmlFor:"exampleInputPassword1",className:"col-sm-2 col-form-label",children:"Password"}),Object(l.jsx)("div",{className:"col-sm-10",children:Object(l.jsx)("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:x.bind({email:i,password:m,setState:c}),children:"Submit"})]}),Object(l.jsx)("div",{className:"col-md"})]})}):"success"===s?Object(l.jsx)("div",{children:"Nice"}):void 0};var O=function(){return Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"form-row",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"formGroupExampleInput2",children:"Event name"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]})}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"formGroupExampleInput2",children:"Event date"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"formGroupExampleInput2",children:"Event location"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]})]}),Object(l.jsx)("div",{className:"form-row",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"formGroupExampleInput2",children:"short description"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]})}),Object(l.jsx)("div",{className:"form-row",children:"uwu todo picture"})]})},v=s(18),f=s(2);var N=function(){return Object(l.jsx)(v.a,{children:Object(l.jsx)(a.a.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(f.a,{exact:!0,path:"/createAccount",component:p}),Object(l.jsx)(f.a,{exact:!0,path:"/createEvent",component:O})]})]})})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};s(35),s(36),s(37);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.ec45859c.chunk.js.map