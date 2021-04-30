(this["webpackJsonpfrontend-mentor-todo-app"]=this["webpackJsonpfrontend-mentor-todo-app"]||[]).push([[0],{48:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(40),c=n.n(a),i=(n(48),n(14)),s=n(82),d=n(83),u=n(6),l=n(42),h=n.n(l),p=function(t){try{localStorage.setItem("todos",JSON.stringify(t))}catch(e){alert("Error inesperado al guardar la informaci\xf3n, por favor tenga cuidado al cerrar la aplicaci\xf3n.")}},g=n(41),m=n.p+"static/media/icon-sun.910b1f9a.svg",f=n.p+"static/media/icon-moon.6c03114b.svg",b=n.p+"static/media/icon-cross.6ee81d30.svg",v=n(22),x=n(84),j=function t(e){var n=this,r=e.uuid,o=void 0===r?Object(x.a)():r,a=e.content,c=void 0===a?"Empty":a,i=e.checked,s=void 0!==i&&i;Object(v.a)(this,t),this.getUuid=function(){return n.uuid},this.getChecked=function(){return n.checked},this.getContent=function(){return n.content},this.setChecked=function(t){n.checked=t},this.uuid=o,this.content=c,this.checked=s},k=n(3);var O=h()((function(t){return{title:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"var(--space-md)","& img":{userSelect:"none",cursor:"pointer",transition:"transform 250ms ease","&:hover":{transform:"scale(1.2)"},"&:active":{transform:"scale(1)"}}},header:{display:"flex",flexFlow:"row",justifyContent:"flex-start",alignItems:"center",width:"100%",height:"50px",backgroundColor:"var(--color-list)",borderRadius:"var(--radius)",marginBottom:"var(--space-md)",'& input[type="checkbox"]':{margin:"0 var(--space-sm)",cursor:"pointer"},'& input[type="text"]':{height:"50px",appearance:"none",border:"none",color:"var(--color-font-dark)",backgroundColor:"transparent",boxShadow:"inset -5px 0 6px 0 rgb(0 0 0 / 10%)",flexGrow:1,"&:focus":{outline:"0"},"&:placeholder":{color:"var(--color-font-soft)",fontSize:"0.6rem"}}},main:{boxShadow:"0 12px 24px -12px rgb(0 0 0 / 20%)","& .todo:first-child":{borderRadius:"var(--radius) var(--radius) 0 0"},"& .todo":{display:"flex",flexFlow:"row",justifyContent:"flex-start",alignItems:"center",width:"100%",padding:"var(--space-sm) 0",minHeight:"50px",backgroundColor:"var(--color-list)",borderBottom:"solid 1px var(--color-check-inactive)","&:hover img":{opacity:1},'& input[type="checkbox"]':{margin:"0 var(--space-sm)",cursor:"pointer"},"& p":{maxWidth:"80%",flexGrow:1,cursor:"grabbing"},"& img":{width:"16px",height:"16px",margin:"0 var(--space-sm)",opacity:0,cursor:"pointer",transition:"opacity 150ms ease, transform 250ms ease","&:hover":{transform:"scale(1.2)"}},'& input[type="checkbox"]:checked + p':{color:"var(--color-line-through)",textDecoration:"line-through"}}}}}))((function(t){var e=t.classes,n=t.darkMode,r=t.setDarkMode,a=o.a.useState([]),c=Object(i.a)(a,2),s=c[0],d=c[1];o.a.useEffect((function(){!function(){var t=document.getElementById("todos");new g.a(t,{handle:".grabbing",animation:150,ghostClass:"ghost"})}();var t=function(){try{return JSON.parse(localStorage.getItem("todos"))}catch(t){return null}}();d(null===t?[]:t.map((function(t){return new j(t)})))}),[]);var l=function(t){var e=t.target.parentNode.dataset.uuid,n=Object(u.a)(s).map((function(n){return n.getUuid()===e&&n.setChecked(t.target.checked),n}));d(n),p(n)},h=function(t){var e=t.target.parentNode.dataset.uuid,n=Object(u.a)(s).filter((function(t){return t.getUuid()!==e}));d(n),p(n)};return Object(k.jsxs)(o.a.Fragment,{children:[Object(k.jsxs)("div",{className:e.title,children:[Object(k.jsx)("h1",{children:"TODO"}),Object(k.jsx)("img",{src:n?m:f,onClick:n?function(){r(!1),document.documentElement.setAttribute("data-theme","light")}:function(){r(!0),document.documentElement.setAttribute("data-theme","dark")},alt:"Dark Mode Button"})]}),Object(k.jsxs)("div",{className:e.header,children:[Object(k.jsx)("input",{type:"checkbox",onChange:function(t){var e=Object(u.a)(s).map((function(e){return e.setChecked(t.target.checked),e}));d(e),p(e)}}),Object(k.jsx)("input",{type:"text",placeholder:"Create a new todo...",onKeyUp:function(t){if(13===t.keyCode){var e=[].concat(Object(u.a)(s),[new j({content:t.target.value})]);t.target.value="",d(e),function(t){try{localStorage.setItem("todos",JSON.stringify(t))}catch(e){alert("Error inesperado al crear el TODO, por favor vuelva a intentarlo.")}}(e)}}})]}),Object(k.jsx)("div",{className:e.main,id:"todos",children:s.map((function(t){return Object(k.jsxs)("div",{className:"todo","data-uuid":t.getUuid(),children:[Object(k.jsx)("input",{type:"checkbox",checked:t.getChecked(),onChange:l}),Object(k.jsx)("p",{className:"grabbing",children:t.getContent()}),Object(k.jsx)("img",{src:b,onClick:h,alt:"Close Button"})]},t.getUuid())}))}),Object(k.jsx)("span",{children:"Drag and drop to reorder list"})]})}));var y=function(){var t=o.a.useState(!1),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(k.jsx)(s.a,{theme:Object(d.a)(),children:Object(k.jsx)(O,{darkMode:n,setDarkMode:r})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))};c.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(y,{})}),document.getElementById("root")),C()}},[[77,1,2]]]);
//# sourceMappingURL=main.00a0e4b7.chunk.js.map