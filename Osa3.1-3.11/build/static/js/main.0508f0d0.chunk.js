(this.webpackJsonppart3fronted=this.webpackJsonppart3fronted||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(15),o=t.n(a),c=t(6),i=t(4),s=t(3),u=t.n(s),d={getAll:function(){return u.a.get("/api/persons")},newPerson:function(e){return u.a.post("/api/persons",e)}},l=t(0),j=function(e){var n=e.nameToShow,t=e.handleFilterChange;return Object(l.jsxs)("div",{children:["filter shown with",Object(l.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.handleForm,t=e.newName,r=e.handleNameChange,a=e.newNumber,o=e.handleNumberChange;e.setPersons;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Add a new"}),Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{value:t,onChange:r})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{value:a,onChange:o})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})]})},h=function(e){var n=e.persons;e.setPersons;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsx)(m,{name:e.name,number:e.number,id:e.id},e.name)}))})]})},m=function(e){var n=e.name,t=e.number,r=e.id;return Object(l.jsxs)("li",{children:[n," ",t,Object(l.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to delete?"),u.a.delete("http://localhost:3001/persons/".concat(r)).then((function(e){console.log(e.data)})),window.location.reload()},children:"delete"})]})},f=function(e){var n=e.name;return""===n?null:Object(l.jsxs)("div",{style:{color:"green",background:"lightgrey",padding:10,borderRadius:5,borderStyle:"solid",margin:5,fontSize:25},children:["Added ",n]})},O=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),s=Object(i.a)(o,2),m=s[0],O=s[1],p=Object(r.useState)(""),v=Object(i.a)(p,2),x=v[0],g=v[1],w=Object(r.useState)(""),C=Object(i.a)(w,2),S=C[0],N=C[1],y=Object(r.useState)(""),k=Object(i.a)(y,2),A=k[0],P=k[1],E=t.filter((function(e){return e.name.toLocaleLowerCase().includes(S.toLocaleLowerCase())}));Object(r.useEffect)((function(){d.getAll().then((function(e){a(e.data)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(f,{name:A}),Object(l.jsx)(j,{nameToShow:S,handleFilterChange:function(e){N(e.target.value)}}),Object(l.jsx)(b,{handleForm:function(e){if(e.preventDefault(),void 0!==t.find((function(e){return e.name===m})))return alert("".concat(m," is already in phonebook, replace the old number with a new one?")),t.forEach((function(e){if(e.name===m){var n=Object(c.a)(Object(c.a)({},e),{},{number:x});u.a.put("http://localhost:3001/persons/".concat(n.id),n)}})),O(""),g(""),void window.location.reload();var n=t.length+1;t.forEach((function(e){e.id===n&&(n+=1)}));var r={name:m,number:x,id:n};d.newPerson(r),P(m),O(""),g(""),setTimeout((function(){P("")}),3e3)},newName:m,handleNameChange:function(e){O(e.target.value)},newNumber:x,handleNumberChange:function(e){g(e.target.value)}}),Object(l.jsx)(h,{persons:E})]})};o.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0508f0d0.chunk.js.map