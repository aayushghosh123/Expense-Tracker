(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=n(0),o=function(){return Object(i.jsx)("h2",{children:"Expense Tracker"})},u=n(3),j=n(8),l=n(4),d=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transctions:t.transctions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},t),{},{transctions:[e.payload].concat(Object(j.a)(t.transctions))});default:return t}},b={transctions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},x=Object(c.createContext)(b),O=function(t){var e=t.children,n=Object(c.useReducer)(d,b),r=Object(u.a)(n,2),s=r[0],a=r[1];return Object(i.jsx)(x.Provider,{value:{transctions:s.transctions,deleteTransaction:function(t){a({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){a({type:"ADD_TRANSACTION",payload:t})}},children:e})},h=function(){var t=Object(c.useContext)(x).transctions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(i.jsxs)("h2",{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsxs)("h1",{children:["$",t]})]})},m=function(){var t=Object(c.useContext)(x).transctions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{className:"money plus",children:e})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{className:"money minus",children:n})]})]})},f=function(t){var e=t.transctions,n=Object(c.useContext)(x).deleteTransaction,r=e.amount<0?"-":"+";return Object(i.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(i.jsxs)("span",{children:[r,"$",Math.abs(e.amount)]}),Object(i.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"x"})]})},p=function(){var t=Object(c.useContext)(x).transctions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:t.map((function(t){return Object(i.jsx)(f,{transctions:t},t.id)}))})]})},v=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(0),a=Object(u.a)(s,2),o=a[0],j=a[1],l=Object(c.useContext)(x).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefalt();var e={id:Math.floor(1e8*Math.random()),text:n,amount:+o};l(e)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};n(14);var N=function(){return Object(i.jsxs)(O,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),T()}},[[15,1,2]]]);
//# sourceMappingURL=main.a9a01834.chunk.js.map