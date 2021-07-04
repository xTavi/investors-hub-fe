(this["webpackJsonpinvestors-hub"]=this["webpackJsonpinvestors-hub"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(16),i=n.n(c),r=(n(23),n(24),n(9)),l=n(2),o=n(0);var m=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)("div",{className:"nav__icon-container",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/icon.svg",alt:"icon",className:"nav__icon"})}),Object(o.jsx)("div",{className:"nav__profile-container",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/profile.svg",alt:"my profile",className:"nav__profile"})})]})})},j=n(7),u=n(17);var b=function(e){Object(u.a)(e);var t=Object(l.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"form__button",onClick:function(){t.push("/Select")},children:"Proceed"})})};function d(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),s=n[0],c=n[1],i=Object(l.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"form__name",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"name",value:s,onChange:function(e){return function(e){c(e.target.value),window.localStorage.setItem("userName",e.target.value)}(e)},onKeyUp:function(e){return function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(""===e.target.value?alert("Please enter your name"):e.target.value.length>=1&&i.push("/Select"))}(e)}}),Object(o.jsx)(b,{})]})})}d.defaultProps={value:""};var f=d;var O=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"blob blob--1",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/blob-1.svg",alt:"blob",className:"blob--one"})}),Object(o.jsx)("div",{className:"blob blob--2",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/blob-2.svg",alt:"blob",className:"blob--two"})})]})},h=function(){localStorage.clear();var e=Object(a.useRef)(null),t=Object(a.useRef)(null);function n(e){var t=.1,n=setInterval((function(){t>=1&&clearInterval(n),e.style.opacity=t,e.style.filter="alpha(opacity="+100*t+")",t+=.09*t}),50)}return Object(a.useEffect)((function(){t.current.style.opacity="0",e.current.style.opacity="0",n(e.current),setTimeout((function(){!function(e){var t=1,n=setInterval((function(){t<=.05&&(clearInterval(n),e.style.display="none"),e.style.opacity=t,e.style.filter="alpha(opacity="+100*t+")",t-=.09*t}),50)}(e.current)}),1800),setTimeout((function(){n(t.current)}),3e3)})),Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsx)(O,{}),Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"container",ref:e,children:Object(o.jsx)("div",{className:"information__container",children:Object(o.jsx)("h2",{className:"enter-name",children:"Welcome to Investors Hub!"})})}),Object(o.jsx)("div",{className:"container",ref:t,children:Object(o.jsxs)("div",{className:"information__container",children:[Object(o.jsx)("h2",{className:"enter-name",children:"Enter your name"}),Object(o.jsx)(f,{})]})})]})};var v,_=function(){var e=Object(l.f)();function t(t){localStorage.setItem("userType",t),e.push("/Information")}return Object(o.jsxs)("div",{className:"select__container",children:[Object(o.jsx)(m,{}),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"wrapper__container",children:[Object(o.jsx)("h2",{className:"select__main-heading",children:"What are you?"}),Object(o.jsxs)("div",{className:"select",children:[Object(o.jsxs)("div",{className:"select__investor",onClick:function(){return t("investor")},children:[Object(o.jsx)("h3",{className:"select__heading",children:"Investor"}),Object(o.jsx)("div",{className:"select__image-container",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/investor.svg",alt:"investor",className:"select__image"})}),Object(o.jsx)("p",{className:"select__description",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda maxime eaque!"})]}),Object(o.jsxs)("div",{className:"select__entrepreneur",onClick:function(){return t("entrepreneur")},children:[Object(o.jsx)("h3",{className:"select__heading",children:"Entrepreneur"}),Object(o.jsx)("div",{className:"select__image-container",children:Object(o.jsx)("img",{src:"/investors-hub-feassets/entrepreneur.svg",alt:"entrepreneur",className:"select__image"})}),Object(o.jsx)("p",{className:"select__description",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore assumenda maxime eaque!"})]})]})]})})]})};!function(e){e.BIO="bio",e.EMAIL="email",e.LOCATION="location",e.FULL_NAME="fullName"}(v||(v={}));var x=localStorage.getItem("userType")||"",p=localStorage.getItem("userName")||"";var N=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=(t[0],t[1]),s=Object(a.useState)(""),c=Object(j.a)(s,2),i=(c[0],c[1]),r=Object(a.useState)(""),l=Object(j.a)(r,2),u=(l[0],l[1]),b=Object(a.useState)(""),d=Object(j.a)(b,2),f=(d[0],d[1]),O=Object(a.useState)(x),h=Object(j.a)(O,2),_=h[0],N=(h[1],Object(a.useState)(p)),g=Object(j.a)(N,2),y=g[0];function I(e,t){switch(window.localStorage.setItem(t,e.target.value),t){case v.BIO:f(e.target.value);break;case v.EMAIL:u(e.target.value);break;case v.LOCATION:i(e.target.value);break;case v.FULL_NAME:n(e.target.value)}}return g[1],Object(a.useEffect)((function(){!function(){var e=document.getElementsByTagName("textarea");Array.prototype.forEach.call(e,(function(e){e.placeholder=e.placeholder.replace(/\\n/g,"\n")}))}()})),Object(o.jsxs)("div",{className:"info__container",children:[Object(o.jsx)(m,{}),Object(o.jsxs)("div",{className:"informationn",children:[Object(o.jsxs)("div",{className:"informationn__container",children:[Object(o.jsxs)("div",{className:"informationn__profile",children:[Object(o.jsx)("img",{src:"/investors-hub-fe/assets/profile.svg",alt:"Profile",className:"informationn__image"}),Object(o.jsxs)("div",{className:"informationn__headings",children:[Object(o.jsx)("h3",{className:"informationn__name",children:y}),Object(o.jsx)("h5",{className:"informationn__type",children:_})]})]}),Object(o.jsxs)("div",{className:"informationn__input-container",children:[Object(o.jsxs)("div",{className:"informationn__form",children:[Object(o.jsx)("label",{htmlFor:"name",className:"informationn__label",children:"Full Name"}),Object(o.jsx)("input",{type:"text",name:"name",className:"informationn__input",placeholder:"Your real full name",onChange:function(e){return I(e,v.FULL_NAME)}})]}),Object(o.jsxs)("div",{className:"informationn__form",children:[Object(o.jsx)("label",{htmlFor:"location",className:"informationn__label",children:"Location"}),Object(o.jsx)("input",{type:"text",name:"location",className:"informationn__input",placeholder:"City and country",onChange:function(e){return I(e,v.LOCATION)}})]}),Object(o.jsxs)("div",{className:"informationn__form",children:[Object(o.jsx)("label",{htmlFor:"email",className:"informationn__label",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",className:"informationn__input",placeholder:"Your email address",onChange:function(e){return I(e,v.EMAIL)}})]}),Object(o.jsxs)("div",{className:"informationn__form",children:[Object(o.jsx)("label",{htmlFor:"bio",className:"informationn__label",children:"Bio"}),Object(o.jsx)("textarea",{name:"bio",id:"informationn__text-area",className:"informationn__input",rows:5,cols:30,placeholder:"Type some general information about yourself. \\nHobbies, interests and little details about your cat are all welcome!",onChange:function(e){return I(e,v.BIO)}})]}),Object(o.jsx)("div",{className:"informationn__form",children:Object(o.jsx)("button",{type:"submit",className:"informationn__button",children:"Submit"})})]})]}),Object(o.jsx)("div",{className:"informationn__illustration-container",children:Object(o.jsx)("img",{src:"/investors-hub-fe/assets/form.svg",alt:"form.svg",className:"informationn__illustration"})})]})]})};var g=function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",exact:!0,component:h}),Object(o.jsx)(l.a,{path:"/select",component:_}),Object(o.jsx)(l.a,{path:"/information",component:N})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.a082b488.chunk.js.map