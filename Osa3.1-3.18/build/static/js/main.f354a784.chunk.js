(this.webpackJsonppart3fronted=this.webpackJsonppart3fronted||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(14),a=t.n(o),i=t(3),c=t(4),s=t.n(c),u={getAll:function(){return s.a.get("/api/persons")},newPerson:function(e){return s.a.post("/api/persons",e)},deletePerson:function(e){return s.a.delete("/api/persons/".concat(e))}},d=t(0),l=function(e){var n=e.nameToShow,t=e.handleFilterChange;return Object(d.jsxs)("div",{children:["filter shown with",Object(d.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.handleForm,t=e.newName,r=e.handleNameChange,o=e.newNumber,a=e.handleNumberChange;e.setPersons;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Add a new"}),Object(d.jsxs)("form",{onSubmit:n,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{value:t,onChange:r})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{value:o,onChange:a})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})]})},j=function(e){var n=e.persons;e.setPersons;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)("ul",{children:n.map((function(e){return Object(d.jsx)(h,{name:e.name,number:e.number,id:e.id},e.name)}))})]})},h=function(e){var n=e.name,t=e.number,r=e.id;return Object(d.jsxs)("li",{children:[n," ",t,Object(d.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to delete?"),u.deletePerson(r),window.location.reload()},children:"delete"})]})},f=function(e){var n=e.name;return""===n?null:Object(d.jsxs)("div",{style:{color:"green",background:"lightgrey",padding:10,borderRadius:5,borderStyle:"solid",margin:5,fontSize:25},children:["Added ",n]})},O=function(e){var n=e.errorText;return""===n?null:Object(d.jsx)("div",{style:{color:"red",background:"lightgrey",padding:10,borderRadius:5,borderStyle:"solid",margin:5,fontSize:25},children:n})},m=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],h=c[1],m=Object(r.useState)(""),x=Object(i.a)(m,2),g=x[0],v=x[1],p=Object(r.useState)(""),w=Object(i.a)(p,2),S=w[0],C=w[1],y=Object(r.useState)(""),N=Object(i.a)(y,2),k=N[0],P=N[1],T=Object(r.useState)(""),A=Object(i.a)(T,2),F=A[0],L=A[1],E=t.filter((function(e){return e.name.toLocaleLowerCase().includes(S.toLocaleLowerCase())}));Object(r.useEffect)((function(){u.getAll().then((function(e){o(e.data)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(f,{name:k}),Object(d.jsx)(O,{errorText:F}),Object(d.jsx)(l,{nameToShow:S,handleFilterChange:function(e){C(e.target.value)}}),Object(d.jsx)(b,{handleForm:function(e){if(e.preventDefault(),void 0!==t.find((function(e){return e.name===s})))return alert("".concat(s," is already in phonebook")),h(""),void v("");var n=t.length+1;t.forEach((function(e){e.id===n&&(n+=1)}));var r={name:s,number:g,id:n};u.newPerson(r).then((function(e){console.log(e.data),P(s),h(""),v(""),setTimeout((function(){P("")}),3e3),setTimeout((function(){window.location.reload()}),4e3)})).catch((function(e){var n=e.response.data;console.log(n.substring(n.indexOf("<pre>")+5,n.indexOf("<br>"))),L(n.substring(n.indexOf("<pre>")+5,n.indexOf("<br>"))),h(""),v(""),setTimeout((function(){L("")}),6e3)}))},newName:s,handleNameChange:function(e){h(e.target.value)},newNumber:g,handleNumberChange:function(e){v(e.target.value)}}),Object(d.jsx)(j,{persons:E})]})};a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f354a784.chunk.js.map