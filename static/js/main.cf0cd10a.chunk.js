(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/products.bc9df596.jpg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/home1.db456796.jpg"},function(e,t,a){e.exports=a.p+"static/media/contact.60db013a.jpg"},function(e,t,a){e.exports=a.p+"static/media/register.2f50d4cc.jpg"},,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(33),a(10)),o=a(11),u=a(13),m=a(12),s=(a(34),a(6)),p=a(2),E=(a(35),a(24)),d=a.n(E),h=a(15),f=a.n(h),b=a(25),g=a.n(b),v=a(26),y=a.n(v),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:d.a,alt:"Suits"})}}),r.a.createElement(p.b,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"clothes in the store"})}}),r.a.createElement(p.b,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"letter boxes"})}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement("img",{src:y.a,alt:"login and password"})}}),r.a.createElement(p.b,{render:function(){return r.a.createElement("img",{src:f.a,alt:"clothes in the store"})}})))},N=(a(40),[{name:"Home",path:"/",exact:!0},{name:"Product",path:"/products"},{name:"Contact",path:"/contact"},{name:"Sign In",path:"/login"}]),S=function(){var e=N.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},j=function(e){var t=e.title,a=e.subtitle,n=e.text;return r.a.createElement("article",{className:"home__article"},r.a.createElement("h3",null,t),r.a.createElement("span",null,a),r.a.createElement("p",null,n))},O=(a(41),[{id:1,title:"Fashion Shop",subtitle:"Here you will find everything you are looking for",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"},{id:2,title:"New Collection",subtitle:"Lorem lorem",text:"111Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."}]),w=function(){var e=O.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},C=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},k=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Back"))},_=(a(42),["Suits","Shirts","Shoes","T-shirts","Trousers"]),F=function(){var e=_.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h3",null,"COLECTION"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},I=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:"",isEmpty:!0},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:"",isEmpty:!0})},e.handleChange=function(t){t.target.value.length>0?e.setState({value:t.target.value,isEmpty:!1}):e.setState({value:t.target.value,isEmpty:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"CONTACT US"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Enter your message here..."}),r.a.createElement("button",null,"SEND")),r.a.createElement(p.a,{when:!this.state.isEmpty,message:"You have a blank form. Are you sure you want to leave this page"}))}}]),a}(r.a.Component)),T=function(){return r.a.createElement("div",null,"Error. This page does not exist")},q=(a(44),function(){return r.a.createElement("div",{className:"page__login"},r.a.createElement("h3",null,"Sign Into Next"),r.a.createElement("label",{htmlFor:""},"Login"),r.a.createElement("input",{type:"text"}),r.a.createElement("label",{htmlFor:""},"Password"),r.a.createElement("input",{type:"password"}),r.a.createElement("button",null,"SIGN IN"))}),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:w}),r.a.createElement(p.b,{path:"/products",component:F}),r.a.createElement(p.b,{path:"/product/:id",component:k}),r.a.createElement(p.b,{path:"/contact",component:I}),r.a.createElement(p.b,{path:"/login",component:q}),r.a.createElement(p.b,{component:T})))},L=(a(45),a(18)),z=a(20),B=r.a.createElement(L.a,{icon:z.a,size:"lg"}),D=r.a.createElement(L.a,{icon:z.b,size:"lg"}),H=function(){return r.a.createElement("div",{className:"footer__box"},r.a.createElement("h3",null,"Follow us"),r.a.createElement(p.b,{path:"/",render:function(e){return r.a.createElement("div",{className:"footer__social"},B,D)}}))},J=(a(49),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(S,null)),r.a.createElement("section",{className:"page"},r.a.createElement(A,null))),r.a.createElement("footer",null,r.a.createElement(H,null))))}}]),a}(n.Component));c.a.render(r.a.createElement(J,null),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.cf0cd10a.chunk.js.map