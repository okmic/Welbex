(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),l=a(6),s=a.n(l),u=a(17),m=a(2),i=function(e,t,a,n,c,r){if("min"===e)switch(n){case"amount":if(t){a(t.sort(function(e,t){return e.amount>t.amount?1:-1})),r(!c);break}return t;case"distance":a(t.sort(function(e,t){return e.distance>t.distance?1:-1})),r(!c);break;default:return t}else switch(n){case"amount":a(t.sort(function(e,t){return e.amount>t.amount?-1:1})),r(!c);break;case"distance":a(t.sort(function(e,t){return e.distance>t.distance?-1:1})),r(!c);break;default:return t}},f=Object(n.memo)(function(e){var t=e.posts,a=e.setPosts,r=e.sort,o=e.setSort,l=e.setSelect,s=Object(n.useState)(""),u=Object(m.a)(s,2),i=u[0],f=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",value:i,onChange:function(e){return function(e){f(e.target.value)}(e)}}),c.a.createElement("button",{onClick:function(){!function(e,t,a,n,c){t(e.filter(function(t){try{return a===t.title}catch(n){return e}})),c(!n)}(t,a,i,r,o),l("")}},"search"))}),E=Object(n.memo)(function(e){var t=e.setSelect,a=e.more,n=e.less;return c.a.createElement("select",{onChange:function(e){return function(e){t(e.target.value)}(e)}},c.a.createElement("option",{value:""},"Nothing"),c.a.createElement("option",{value:a},"More"),c.a.createElement("option",{value:n},"Less"),c.a.createElement("option",{value:"equality"},"Equality"))}),d=Object(n.memo)(function(e){var t=e.date,a=e.title,n=e.amount,r=e.distance;return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},t),c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,r)))}),p=Object(n.memo)(function(e){var t=e.posts,a=e.loading,r=e.setPosts,o=e.currentPage,l=e.postsPerPage,s=e.sort,u=e.setSort,p=e.setStateOrder,b=e.stateOrder,h=Object(n.useState)([]),O=Object(m.a)(h,2),j=O[0],g=O[1],v=Object(n.useState)(""),S=Object(m.a)(v,2),k=S[0],w=S[1];Object(n.useEffect)(function(){var e=o*l,a=e-l;g(t.slice(a,e))},[t,o,s,l]),Object(n.useEffect)(function(){!function(e,t,a,n,c,r){switch(e){case"moreAmount":i("max",t,a,"amount",n,c),r("");break;case"lessAmount":i("min",t,a,"amount",n,c),r("");break;case"moreDistance":i("max",t,a,"distance",n,c),r("");break;case"lessDistance":i("min",t,a,"distance",n,c),r("");break;case"equality":!function(e,t){t(e.filter(function(e){return e.amount===e.distance}))}(t,a),r("");break;default:r("")}}(k,t,r,s,u,w)},[k]);return a?c.a.createElement("h2",null,"Loading..."):c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{scope:"col"},"Amount"),c.a.createElement("th",{scope:"col"},"Distance"))),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},c.a.createElement("button",{onClick:function(){p(!b),u(!s)}},"Remove Filters",c.a.createElement("sup",null,"\u2716"))),c.a.createElement("th",{scope:"col"},c.a.createElement(f,{posts:t,setPosts:r,setSelect:w,setSort:u,sort:s})),c.a.createElement("th",{scope:"col"},c.a.createElement(E,{less:"lessAmount",more:"moreAmount",setSelect:w})),c.a.createElement("th",{scope:"col"},c.a.createElement(E,{less:"lessDistance",more:"moreDistance",setSelect:w})))),j.map(function(e){return c.a.createElement(d,{key:e.id,date:e.date,title:e.title,amount:e.amount,distance:e.distance})}))}),b=a(5),h=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,r=[],o=1;o<=Math.ceil(a/t);o++)r.push(o);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},r.map(function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement(b.b,{to:""},c.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e)))})))},O=a(18),j=a.n(O),g=a(1),v=["welbex","ozon","apple","microsoft","google","github","meta","tesla","windows","linux"],S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),l=Object(m.a)(o,2),i=l[0],f=l[1],E=Object(n.useState)(!1),d=Object(m.a)(E,2),b=d[0],O=d[1],g=Object(n.useState)(1),S=Object(m.a)(g,2),k=S[0],w=S[1],P=Object(n.useState)(10),y=Object(m.a)(P,1)[0],M=Object(n.useState)(!0),x=Object(m.a)(M,2),N=x[0],D=x[1];Object(n.useEffect)(function(){r([]),function(){var e=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,j.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,n=t.data,a=n.map(function(e){return{id:e.id,date:"0".concat(Math.floor(7*Math.random())+1,".0").concat(Math.floor(8*Math.random())+1,".2021"),title:v[Math.floor(10*Math.random())],amount:Math.floor(7*Math.random())+1,distance:Math.floor(7*Math.random())+1}}),r(a),O(!1);case 7:case"end":return e.stop()}var n},e)}));return function(){return e.apply(this,arguments)}}()()},[i]);return c.a.createElement("div",{className:"container mt-5",style:{maxWidth:"95vw"}},c.a.createElement("h1",{className:"text-primary mb-3"},"WELBEX"),c.a.createElement(h,{postsPerPage:y,totalPosts:a.length,paginate:function(e){return w(e)}}),c.a.createElement(p,{posts:a,loading:b,setPosts:r,setStateOrder:f,stateOrder:i,currentPage:k,postsPerPage:y,sort:N,setSort:D}))},k=Object(n.memo)(function(){return c.a.createElement(b.a,null,c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"*",element:c.a.createElement(S,null)})))});o.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f3d9ff22.chunk.js.map