(this["webpackJsonpsingle-spa"]=this["webpackJsonpsingle-spa"]||[]).push([[0],{18:function(e,t,r){e.exports={img:"Preloader_img__dbT88",text:"Preloader_text__2usxp"}},26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(20),s=r.n(n),i=(r(26),r(7)),o=r(8),l=r(10),j=r(9),d=(r(27),r(28),r(11)),u=r(0);var b=function(e){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(d.b,{to:"/",className:"header-brand",children:e.brand})})})},h=r(2);r(35);var m=function(e){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsx)("div",{className:"about__bg"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"about__title",children:e.title}),Object(u.jsx)("div",{className:"about__description",children:e.children})]})]})};r(36);var f=function(e){var t=e.work;return Object(u.jsxs)(d.b,{to:"/project/".concat(t.id),className:"portfolio-item",children:[Object(u.jsx)("img",{className:"portfolio-item__screenshot",src:t.screenshot,alt:t.title}),Object(u.jsx)("div",{className:"portfolio-item__title",children:t.title})]})},O=(r(37),function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={email:"",emailError:null,offer:"",offerError:null},e.emailChangeHandler=function(t){var r=t.target.value;e.setState({email:r,emailError:!r})},e.offerChangeHandler=function(t){var r=t.target.value;e.setState({offer:r,offerError:!r})},e.submitHandler=function(t){t.preventDefault();var r=e.state,c=r.email,a=r.offer;if(c&&a)return e.setState({email:"",emailError:!1,offer:"",offerError:!1}),void e.props.onSubmit();e.setState({emailError:!c,offerError:!a})},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.emailError,c=e.offer,a=e.offerError;return Object(u.jsxs)("form",{className:"contact-form",onSubmit:this.submitHandler,children:[Object(u.jsxs)("div",{className:"contact-form__field",children:[Object(u.jsx)("input",{value:t,onChange:this.emailChangeHandler,placeholder:"Email \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438"}),r?Object(u.jsx)("div",{className:"error",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}):null]}),Object(u.jsxs)("div",{className:"contact-form__field",children:[Object(u.jsx)("textarea",{rows:"10",value:c,onChange:this.offerChangeHandler,placeholder:"\u0412\u0430\u0448\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),a?Object(u.jsx)("div",{className:"error",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}):null]}),Object(u.jsx)("button",{className:"button",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),r}(c.Component)),p=[{id:"spa-1",title:"SPA #1",screenshot:r.p+"static/media/spa-1.924d9c28.jpg",description:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 Demo Social Network(\u0435\u0449\u0451 \u043d\u0435 \u0434\u043e\u0432\u0435\u0434\u0435\u043d \u0434\u043e \u043a\u043e\u043d\u0446\u0430)",link:"https://github.com/BaichorovNory/social-network-demo",stack:["react","redux"]}],v=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={closed:!0},e}return Object(o.a)(r,[{key:"openForm",value:function(){this.setState({closed:!1})}},{key:"closeForm",value:function(){this.setState({closed:!0})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsxs)(m,{title:"React-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u041d\u043e\u0440\u0438\u0439 \u0411\u0430\u0439\u0447\u043e\u0440\u043e\u0432",children:[Object(u.jsxs)("p",{children:["\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e \u043d\u0430 \u043b\u0443\u0447\u0448\u0435\u0439 UI \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 \u0434\u043b\u044f JS",Object(u.jsx)("br",{}),"\u0441\u0430\u043c\u044b\u0435 \u043b\u0443\u0447\u0448\u0438\u0435 SPA!"]}),Object(u.jsx)("p",{children:"\u0421 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435\u043c \u0438 \u0432\u0430\u043c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u044e )"})]}),Object(u.jsx)("div",{className:"portfolio",children:Object(u.jsx)("div",{className:"container",children:p.map((function(e){return Object(u.jsx)(f,{work:e},e.id)}))})}),Object(u.jsx)("div",{className:"contacts",children:Object(u.jsx)("div",{className:"container",children:this.state.closed?Object(u.jsx)("button",{className:"button",onClick:function(){return e.openForm()},children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u043d\u0435"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(O,{onSubmit:function(){return e.closeForm()}})]})})})]})}}]),r}(a.a.Component),x=r.p+"static/media/ZKZx.4ace5f17.gif",N=r(18),_=r.n(N),g=function(){return Object(u.jsxs)("div",{className:_.a.text,children:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",Object(u.jsx)("img",{src:x,alt:"",className:_.a.img})]})},k=(r(38),function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={project:null,error:!1},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;setTimeout((function(){var r=p.find((function(e){return e.id===t}));e.setState({project:r,error:!r})}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.project;return e.error?Object(u.jsx)("div",{className:"container",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}):t?Object(u.jsx)("div",{className:"project",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"project__screenshot",src:t.screenshot,alt:t.title}),Object(u.jsx)("h1",{className:"project__title",children:t.title}),Object(u.jsx)("p",{className:"project__description",children:t.description}),Object(u.jsx)("div",{className:"project__stack",children:t.stack.join(", ")}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:t.link,className:"project__link",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442"})})]})}):Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(g,{})})}}]),r}(a.a.Component)),y=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{brand:"\u041d\u043e\u0440\u0438\u0439 \u0411\u0430\u0439\u0447\u043e\u0440\u043e\u0432"}),Object(u.jsx)("main",{className:"main",children:Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"/project/:id",component:k}),Object(u.jsx)(h.b,{exact:!0,path:"/",component:v}),Object(u.jsx)(h.a,{to:"/"})]})})]})}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(u.jsx)(d.a,{children:Object(u.jsx)(y,{})});s.a.render(w,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.274f9d80.chunk.js.map