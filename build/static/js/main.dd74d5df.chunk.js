(this["webpackJsonpplatzi-blog"]=this["webpackJsonpplatzi-blog"]||[]).push([[0],{43:function(e,t,r){e.exports=r(74)},48:function(e,t,r){},49:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"getAll",(function(){return g}));var n=r(0),s=r.n(n),c=r(17),l=r.n(c),u=(r(48),r(49),r(13)),o=r(12),i=function(){return s.a.createElement("nav",{id:"menu"},s.a.createElement(u.b,{to:"/react-redux-blog/users"},"Users"),s.a.createElement(u.b,{to:"/react-redux-blog/tasks"},"Tasks"))},p=r(11),m=r(9),d=r.n(m),E=r(15),h=r(19),b=r.n(h),f="USERS_GET_ALL",v="USERS_ERROR",g=function(){return function(){var e=Object(E.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"USERS_LOADING"}),e.prev=1,e.next=4,b.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=e.sent,t({type:f,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:v,payload:e.t0.message+" - User info not available"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},y=r(20),O=r(21),R=r(23),j=r(22),k=r(24),x=(r(73),function(){return s.a.createElement("div",{className:"spinner-container"},s.a.createElement("div",{className:"lds-spinner"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))}),S=function(e){return s.a.createElement("div",{className:"text-center"},s.a.createElement("h2",{className:"red"},"Something went wrong, please try later."),e.message)},_=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Link"))),s.a.createElement("tbody",null,e.users.map((function(e,t){return s.a.createElement("tr",{key:e.id},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.email),s.a.createElement("td",null,e.website),s.a.createElement("td",null,s.a.createElement(u.b,{to:"/react-redux-blog/posts/".concat(t)},s.a.createElement("div",{className:"eye-solid icon"}))))})))))},w=Object(p.b)((function(e){return e.usersReducer}))(_),U=function(e){function t(){var e,r;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(R.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(n)))).setContent=function(){return r.props.error?s.a.createElement(S,{message:r.props.error}):r.props.loading?s.a.createElement(x,null):s.a.createElement(w,null)},r}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.users.length||this.props.getAll()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Users"),this.setContent())}}]),t}(s.a.Component),N=Object(p.b)((function(e){return e.usersReducer}),a)(U),A=function(e){function t(){var e,r;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(R.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(n)))).setUser=function(){var e=r.props,t=e.usersReducer,a=e.match.params.key,n=t.users.length?t.users[a].name:null;return t.error?s.a.createElement(S,{message:t.error}):t.loading?s.a.createElement(x,null):s.a.createElement("h1",{className:"text-center"},"Posts from ",n)},r.setPosts=function(){var e=r.props,t=e.usersReducer.users,a=e.postsReducer,n=e.postsReducer.posts,c=e.match.params.key;return a.error?s.a.createElement(S,{message:a.error}):a.loading?s.a.createElement(x,null):n.length&&"posts_key"in t[c]?n[t[c].posts_key].map((function(e){return s.a.createElement("div",{className:"post_title",key:e.id,onClick:function(){return alert(e.id)}},s.a.createElement("h2",null,e.title),s.a.createElement("p",null,e.body))})):null},r}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(d.a.mark((function e(){var t,r,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.getAllUsers,a=t.getPostsByUser,n=t.match.params.key,this.props.usersReducer.users.length){e.next=4;break}return e.next=4,r();case 4:if(!this.props.usersReducer.error){e.next=6;break}return e.abrupt("return");case 6:"posts_key"in this.props.usersReducer.users[n]||a(n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),s.a.createElement(s.a.Fragment,null,this.setUser(),this.setPosts())}}]),t}(n.Component),P=r(10),T=r(29),G={getAllUsers:g,getPostsByUser:function(e){return function(){var t=Object(E.a)(d.a.mark((function t(r,a){var n,s,c,l,u,o,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"POSTS_LOADING"}),n=a().usersReducer.users,s=a().postsReducer.posts,c=n[e].id,t.prev=4,t.next=7,b.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(c));case 7:l=t.sent,u=[].concat(Object(T.a)(s),[l.data]),r({type:"POSTS_GET_BY_USER",payload:u}),o=u.length-1,(i=Object(T.a)(n))[e]=Object(P.a)({},n[e],{posts_key:o}),r({type:f,payload:i}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),r({type:"POSTS_ERROR",payload:t.t0.message+" posts not available"});case 19:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e,r){return t.apply(this,arguments)}}()}},L=Object(p.b)((function(e){return{usersReducer:e.usersReducer,postsReducer:e.postsReducer}}),G)(A),B=function(){return s.a.createElement("div",null,"Tasks")},C=function(){return s.a.createElement(u.a,null,s.a.createElement(i,null),s.a.createElement("div",{className:"margin"},s.a.createElement(o.a,{exact:!0,path:"/",component:N}),s.a.createElement(o.a,{exact:!0,path:"/react-redux-blog",component:N}),s.a.createElement(o.a,{exact:!0,path:"/react-redux-blog/users",component:N}),s.a.createElement(o.a,{exact:!0,path:"/react-redux-blog/tasks",component:B}),s.a.createElement(o.a,{exact:!0,path:"/react-redux-blog/posts/:key",component:L})))},D=r(14),I=r(42),z={users:[],loading:!1,error:""},F={posts:[],loading:!1,error:""},J=Object(D.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(P.a)({},e,{users:t.payload,loading:!1,error:""});case"USERS_LOADING":return Object(P.a)({},e,{loading:!0});case v:return Object(P.a)({},e,{error:t.payload,loading:!1});default:return e}},postsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS_GET_BY_USER":return Object(P.a)({},e,{posts:t.payload,loading:!1,error:""});case"POSTS_ERROR":return Object(P.a)({},e,{error:t.payload,loading:!1});default:return e}}}),M=Object(D.d)(J,{},Object(D.a)(I.a));l.a.render(s.a.createElement(p.a,{store:M},s.a.createElement(C,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dd74d5df.chunk.js.map