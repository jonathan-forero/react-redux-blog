(this["webpackJsonpplatzi-blog"]=this["webpackJsonpplatzi-blog"]||[]).push([[0],{42:function(e,t,n){e.exports=n(72)},47:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getAll",(function(){return b}));var r=n(0),l=n.n(r),c=n(13),u=n.n(c),s=(n(47),n(11)),o=n(9),i=function(){return l.a.createElement("nav",{id:"menu"},l.a.createElement(s.b,{to:"/users"},"Users"),l.a.createElement(s.b,{to:"/tasks"},"Tasks"))},m=n(15),d=n(21),E=n.n(d),p=n(34),v=n(35),f=n.n(v),b=function(){return function(){var e=Object(p.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING"}),e.prev=1,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,t({type:"GET_ALL_USERS",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"ERROR",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=n(36),y=n(37),O=n(40),g=n(38),j=n(41),k=(n(71),function(){return l.a.createElement("div",{className:"spinner-container"},l.a.createElement("div",{className:"lds-spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}),R=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).setRows=function(){return n.props.users.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.website))}))},n.setContent=function(){return n.props.loading?l.a.createElement(k,null):l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Link"))),l.a.createElement("tbody",null,n.setRows()))},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getAll()}},{key:"render",value:function(){return l.a.createElement("div",null,this.setContent())}}]),t}(l.a.Component),w=Object(m.b)((function(e){return e.usersReducer}),a)(R),x=function(){return l.a.createElement("div",null,"Tasks")},A=function(){return l.a.createElement(s.a,null,l.a.createElement(i,null),l.a.createElement("div",{className:"margin"},l.a.createElement(o.a,{exact:!0,path:"/",component:w}),l.a.createElement(o.a,{exact:!0,path:"/users",component:w}),l.a.createElement(o.a,{exact:!0,path:"/tasks",component:x})))},L=n(10),N=n(39),G=n(16),S={users:[],loading:!1,error:""},T=Object(L.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return Object(G.a)({},e,{users:t.payload,loading:!1});case"LOADING":return Object(G.a)({},e,{loading:!0});case"ERROR":return Object(G.a)({},e,{error:t.payload,loading:!1});default:return e}}}),_=Object(L.d)(T,{},Object(L.a)(N.a));u.a.render(l.a.createElement(m.a,{store:_},l.a.createElement(A,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.93274c74.chunk.js.map