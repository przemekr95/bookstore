(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{28:function(t,e,n){},36:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(28),n(3)),s=n(7),j=(n(36),n(2)),u=n(1),b=function(t,e,n){var a=Object(c.useState)(t),r=Object(j.a)(a,2),o=r[0],i=r[1],s="use-dropdown-".concat(e);return[o,function(){return Object(u.jsxs)("label",{htmlFor:s,children:[e,Object(u.jsx)("select",{id:s,value:o,onChange:function(t){return i(t.target.value)},onBlur:function(t){return i(t.target.value)},children:n.map((function(t){return Object(u.jsx)("option",{value:t,children:t},t)}))})]})},i]},l=n(19),O=n(20),d=n(23),h=n(21),p=(n(38),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={id:"component-input-".concat(c.props.label)},c}return Object(O.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.state,c=t.setState,a=t.type,r=void 0===a?"text":a;return Object(u.jsxs)("label",{htmlFor:this.state.id,children:[e,":",Object(u.jsx)("input",{id:this.state.id,type:r,value:n,placeholder:"",onChange:function(t){return c(t.target.value)}})]})}}]),n}(a.a.Component)),x=n(10),f=n(22),k="ADD_BOOK",v={books:[]},m=(n(39),function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),s=o[0],l=o[1],O=Object(c.useState)(""),d=Object(j.a)(O,2),h=d[0],x=d[1],f=Object(i.b)(),v=b("","Gatunek",["Fantastyka","Horror","Krymina\u0142"]),m=Object(j.a)(v,2),y=m[0],D=m[1],g=b("","Dla",["Dzieci","M\u0142odzie\u017c","Doro\u015bli"]),w=Object(j.a)(g,2),S=w[0],_=w[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"add-box",children:[Object(u.jsx)(p,{label:"Tytu\u0142",state:n,setState:a}),Object(u.jsx)(p,{label:"Autor",state:s,setState:l}),Object(u.jsx)(p,{label:"Rok publikacji",state:h,setState:x,type:"number"}),Object(u.jsx)(D,{}),Object(u.jsx)(_,{}),Object(u.jsx)("button",{onClick:function(t){return function(t){t.preventDefault(),t.stopPropagation(),f({type:k,payload:{author:s,title:n,publicationDate:h,genre:y,audience:S}})}(t)},children:"Dodaj"})]})})}),y=(n(40),function(t){var e=t.title,n=t.author,c=t.publicationDate,a=t.genre,r=t.audience;return Object(u.jsxs)("div",{className:"book",children:[Object(u.jsx)("h2",{children:e}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{children:"Autor: "}),n]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{children:"Rok publikacji: "}),c]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{children:"Gatunek: "}),a]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("span",{children:"Dla: "}),r]})]})}),D=(n(41),function(t){var e=t.books,n=e.map((function(t){return Object(u.jsx)(y,{title:t.title,author:t.author,publicationDate:t.publicationDate,genre:t.genre,audience:t.audience},t.title)}));return Object(u.jsxs)("div",{className:"inventory",children:[Object(u.jsx)(s.a,{className:"admin-link",to:"/admin",children:"Zarz\u0105dzaj inwentarzem"}),0===e.length?Object(u.jsx)("h3",{children:"Brak ksi\u0105\u017cek"}):n]})});var g=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.reducer.books}));return Object(c.useEffect)((function(){fetch("https://clockworkjava.pl/books.php").then((function(t){return t.json()})).then((function(e){e.forEach((function(e){t({type:k,payload:e})}))}))}),[]),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(s.a,{className:"header",to:"/",children:Object(u.jsx)("h1",{children:"Bookstore"})}),Object(u.jsxs)(s.b,{children:[Object(u.jsx)(m,{path:"/admin"}),Object(u.jsx)(D,{books:e,path:"/"})]})]})},w=n(4),S=Object(w.b)({reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:var n=[].concat(Object(f.a)(t.books),[e.payload]);return Object(x.a)(Object(x.a)({},t),{},{books:n});default:return console.warn("Unknow action ".concat(e.type)),Object(x.a)({},t)}}}),_=Object(w.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=function(){return Object(u.jsx)(i.a,{store:_,children:Object(u.jsx)(g,{})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bc28c2fa.chunk.js.map