(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{34:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,b,s,d,j,l,u,m,O=t(10),p=t.n(O),h=t(3),x=t(18),f=(t(34),t(6)),g=t(7),v=t(19),y=t.n(v),C=t(13),k=t(23),w=t(2),A=t(24),z=Object(f.b)("contacts/AddContact",(function(e){var n=e.name,t=e.number;return{payload:{id:Object(A.a)(),name:n,number:t}}})),D=Object(f.b)("contacts/DeleteContact"),F=Object(f.b)("contacts/ChangeFilter"),S=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(C.a)(a,z,(function(e,n){return[n.payload].concat(Object(k.a)(e))})),Object(C.a)(a,D,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),a)),T=Object(f.c)("",Object(C.a)({},F,(function(e,n){return n.payload}))),B=Object(w.b)({items:S,filter:T}),J={key:"contacts",storage:y.a,blacklist:["filter"]},N=Object(f.a)({reducer:{contacts:Object(g.g)(J,B)},middleware:function(e){return e({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})},devTools:!1}),Z=Object(g.h)(N),q=t(4),E=t(5),L=E.a.div(c||(c=Object(q.a)(["\n  width: 600px;\n  display: flex;\n  justify-content: space-between;\n  margin: 25px auto 0;\n"]))),P=E.a.h2(r||(r=Object(q.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: DarkCyan;\n"]))),H=E.a.form(i||(i=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=E.a.label(o||(o=Object(q.a)(["\n  color: Teal;\n  font-size: 1em;\n"]))),K=E.a.input(b||(b=Object(q.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: Teal;\n  background: AliceBlue;\n  border: none;\n  border-radius: 3px;\n"]))),M=E.a.button(s||(s=Object(q.a)(["\n  background: DarkCyan;\n  color: white;\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid DarkCyan;\n  border-radius: 3px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: white;\n    color: DarkCyan;\n  }\n"]))),R=Object(E.a)(M)(d||(d=Object(q.a)(["\n  margin: 0;\n"]))),Y=E.a.p(j||(j=Object(q.a)(["\n  color: Teal;\n  font-size: 1em;\n"]))),$=Object(E.a)(Y)(l||(l=Object(q.a)(["\n  margin-left: 10px;\n"]))),G=E.a.ul(u||(u=Object(q.a)(["\n  margin-top: 15px;\n  padding: 15px;\n  border: 2px solid DarkCyan;\n  border-radius: 3px;\n"]))),Q=E.a.li(m||(m=Object(q.a)(["\n  min-width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),U=t(15),V=t(0),W=function(e){return e.contacts.filter},X=function(e){var n=function(e){return e.contacts.items}(e),t=W(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},_=t(1);var ee=function(){var e=Object(V.useState)(""),n=Object(U.a)(e,2),t=n[0],a=n[1],c=Object(V.useState)(""),r=Object(U.a)(c,2),i=r[0],o=r[1],b=Object(h.c)(X),s=Object(h.b)(),d=function(e){var n=e.target,t=n.name,c=n.value;switch(t){case"name":a(c);break;case"number":o(c);break;default:return}};return Object(_.jsxs)(H,{onSubmit:function(e){if(e.preventDefault(),b.find((function(e){return e.name===t})))return alert("".concat(t," is already in contacts!"));s(z({name:t,number:i})),a(""),o("")},children:[Object(_.jsxs)(I,{children:["Name",Object(_.jsx)("br",{}),Object(_.jsx)(K,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:d,required:!0})]}),Object(_.jsxs)(I,{children:["Number",Object(_.jsx)("br",{}),Object(_.jsx)(K,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:d,required:!0})]}),Object(_.jsx)(M,{type:"submit",children:"Add contact"})]})},ne=function(){var e=Object(h.c)(W),n=Object(h.b)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($,{children:"Find contacts by name"}),Object(_.jsx)(K,{type:"text",name:"filter",value:e,onChange:function(e){return n(F(e.target.value))}})]})},te=function(e){var n=e.name,t=e.number,a=e.onClick;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(Y,{children:[n,":"]}),Object(_.jsx)(Y,{children:t}),Object(_.jsx)(R,{type:"button",onClick:a,children:"Delete"})]})},ae=function(){var e=Object(h.c)(X),n=Object(h.b)();return Object(_.jsx)(G,{children:e.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(_.jsx)(Q,{children:Object(_.jsx)(te,{id:t,name:a,number:c,onClick:function(){return function(e){return n(D(e))}(t)}})},t)}))})};var ce=function(){var e=Object(h.c)(X);return Object(_.jsxs)(L,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(P,{children:"Phonebook"}),Object(_.jsx)(ee,{})]}),e.length>0?Object(_.jsxs)("div",{children:[Object(_.jsx)(P,{children:"Contacts"}),Object(_.jsx)(ne,{}),Object(_.jsx)(ae,{})]}):Object(_.jsx)(P,{children:"You don't have contacts"})]})};p.a.render(Object(_.jsx)(h.a,{store:N,children:Object(_.jsx)(x.a,{loading:null,persistor:Z,children:Object(_.jsx)(ce,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.924654ec.chunk.js.map