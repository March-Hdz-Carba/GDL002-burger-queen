(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},15:function(e){e.exports={a:[{breakfast:[{description:"Caf\xe9 Americano",price:"$5.00"},{description:"Caf\xe9 con Leche",price:"$7.00"},{description:"Sandwich de Jam\xf3n y queso",price:"$10.00"},{description:"Juego de Frutas Natural",price:"$7.00"}]},{meal:[{description:"Hamburguesa Res sencilla",price:"$10.00"},{description:"Hamburguesa Pollo sencilla",price:"$10.00"},{description:"Hamburguesa Vegetariana sencilla",price:"$10.00"},{description:"Hamburguesa Res doble",price:"$15.00"},{description:"Hamburguesa Pollo doble",price:"$15.00"},{description:"Hamburguesa Vegetariana doble",price:"$15.00"},{description:"+ Queso",price:"$1.00"},{description:"+ Huevo",price:"$1.00"},{description:"Papas Fritas",price:"$5.00"},{description:"Aros de Cebolla",price:"$5.00"},{description:"Agua de 500ml",price:"$5.00"},{description:"Agua de 750ml",price:"$7.00"},{description:"Refresco 500ml",price:"$7.00"},{description:"Refresco 750ml",price:"$10.00"}]}]}},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=(a(31),a(32),a(11)),l=a(13),s=a(1),u=a(2),m=a(4),p=a(3),d=a(5),b=(a(33),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"tittle"},"Burger-",r.a.createElement("p",{className:"tittle-p"},"Queen")))}}]),t}(r.a.Component)),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg positionButton"},"Mesero")))}}]),t}(r.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"kitchen"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-lg positionButton"},"Cocina")))}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"administration"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg positionButton"},"Administraci\xf3n")))}}]),t}(r.a.Component),v=(a(10),a(12)),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).print=function(){var t=e.state.name;console.log("funcionando"+t)},e.state={name:null},e.handleInput=e.handleInput.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleInput",value:function(e){var t=this,a=e.currentTarget.value;this.setState({name:a},function(){return console.log(t.state)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("enviando")}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-group input-group-sm mb-3 inputName row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleInput,name:this.handleInput,className:"form-control colorIn subCap","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm",placeholder:"Nombre del cliente"}))),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"submit",onClick:this.print,className:"btn btn-secondary subCap"},"Capturar")))}}]),t}(r.a.Component),j=a(16),O=a(15),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).addItem=function(e){var t=e.currentTarget,n=t.getAttribute("name"),c=t.getAttribute("value");console.log(n,c);var o={keyFood:n,keyPrice:c};a.setState({printFood:[].concat(Object(j.a)(a.state.printFood),[o])},function(){var e=document.getElementsByClassName("totalCommand")[0];e.innerHTML="",a.state.printFood.map(function(t,n){return e.innerHTML+="<p>"+t.keyFood+t.keyPrice+r.a.createElement("button",{type:"button",class:"btn btn-light",onClick:a.removeItems.bind(Object(v.a)(a),n),key:n},"Eliminar")+"</p>"}),console.log(a.state.printFood)})},a.state={menuBreakfast:O.a[0].breakfast,printFood:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"removeItems",value:function(e){this.setState({printFood:this.state.printFood.filter(function(t,a){return a!==e})})}},{key:"render",value:function(){var e=this,t=this.state.menuBreakfast.map(function(t,a){return r.a.createElement("p",{className:"buttonsmenu",key:a},r.a.createElement("button",{className:"btn btn-secondary buttonFoodPosition",key:a,onClick:e.addItem,name:t.description,value:t.price},t.description,r.a.createElement("br",null),t.price))});return r.a.createElement("section",null,t)}}]),t}(r.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bottonBreak buttonsmenu"},r.a.createElement("a",{className:"btn btn-primary btn-warning","data-toggle":"collapse",href:"#collapseExample1",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},"Desayuno"),r.a.createElement("div",{className:"collapse buttonsmenu",id:"collapseExample1"},r.a.createElement("div",{className:"card card-body buttonsmenu"},r.a.createElement(g,null))))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).addItem=function(e){var t=e.currentTarget,n=t.getAttribute("name"),r=t.getAttribute("value");console.log(n,r);var c={keyFood:n,keyPrice:r};a.setState({printFood:[].concat(Object(j.a)(a.state.printFood),[c])},function(){var e=document.getElementsByClassName("totalCommand")[0];e.innerHTML="",a.state.printFood.map(function(t,a){return e.innerHTML+="<p>"+t.keyFood+t.keyPrice+"</p>"}),console.log(a.state.printFood)})},a.state={menuMeal:O.a[1].meal,printFood:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.menuMeal.map(function(t,a){return r.a.createElement("p",{className:"buttonsmenu",key:a},r.a.createElement("button",{className:"btn btn-secondary",key:a,onClick:e.addItem,name:t.description,value:t.price},t.description,r.a.createElement("br",null),t.price))});return r.a.createElement("section",null,t)}}]),t}(r.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bottonMeal"},r.a.createElement("button",{className:"btn btn-primary btn-warning",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Comida"),r.a.createElement("div",{className:"collapse",id:"collapseExample"},r.a.createElement("div",{className:"card card-body buttonsmenu"},r.a.createElement(k,null))))}}]),t}(r.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card text-center commandStyle"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Pedido"),r.a.createElement("p",{className:"card-text totalCommand"}),r.a.createElement("button",{className:"btn btn-primary"},"Enviar Pedido")))}}]),t}(r.a.Component),$=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,null)),r.a.createElement("div",{className:"buttons-food"},r.a.createElement("div",null,r.a.createElement(N,null)),r.a.createElement("div",null,r.a.createElement(C,null))),r.a.createElement("div",{className:"commandPosition"},r.a.createElement(F,null)))))},w=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Hola cocina")))},x=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Hola administracion")))};var H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,null)),r.a.createElement("section",{className:"button-position"},r.a.createElement(E,null),r.a.createElement(h,null),r.a.createElement(f,null)),r.a.createElement(l.a,{exact:!0,path:"/",component:$}),r.a.createElement(l.a,{path:"/waiter",component:$}),r.a.createElement(l.a,{path:"/kitchen",component:w}),r.a.createElement(l.a,{path:"/administration",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.223dab18.chunk.js.map