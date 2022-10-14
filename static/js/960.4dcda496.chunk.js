"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[960],{960:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,c,a,o,s,i,p,u,x,d,l=t(861),f=t(885),h=t(757),v=t.n(h),g=t(607),m=t(739),Z=t(791),b=t(168),j=t(444),w=t(731),k=(0,j.ZP)(w.rU)(r||(r=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  border: transparent;\n  background-color: transparent;\n  padding-left: 40px;\n  margin-bottom: 20px;\n  cursor: pointer;\n  :hover,\n  :focus {\n    color: #0a0a85;\n  }\n"]))),y=j.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-left: 40px;\n  padding-right: 40px;\n"]))),_=j.ZP.img(a||(a=(0,b.Z)(["\n  margin-right: 20px;\n"]))),P=j.ZP.h1(o||(o=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),S=j.ZP.h2(s||(s=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),U=j.ZP.p(i||(i=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),F=j.ZP.span(p||(p=(0,b.Z)(["\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),R=t(617),z=t(184),C=function(n){var e,t,r=n.data,c=r.title,a=r.release_date,o=r.poster_path,s=r.overview,i=r.genres,p=r.vote_average,u=new Date(a),x=null!==(e=null===(t=(0,m.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",d=i.map((function(n){var e=n.id,t=n.name;return(0,z.jsx)(F,{children:t},e)}));return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(k,{to:x,children:[(0,z.jsx)(R.ldB,{}),"Go back"]}),(0,z.jsxs)(y,{children:[(0,z.jsx)(_,{src:"".concat("https://image.tmdb.org/t/p/w300").concat(o),alt:c}),(0,z.jsxs)("div",{children:[(0,z.jsxs)(P,{children:[c," (",u.getFullYear(),")"]}),(0,z.jsxs)(U,{children:["User Score: ",Math.round(10*p),"%"]}),(0,z.jsx)(S,{children:"Overview"}),(0,z.jsx)(U,{children:s}),(0,z.jsx)(S,{children:"Genres"}),d]})]})]})},O=j.ZP.div(u||(u=(0,b.Z)(["\n  padding-left: 40px;\n  margin-bottom: 20px;\n"]))),G=(0,j.ZP)(w.rU)(x||(x=(0,b.Z)(["\n  font-size: 20px;\n  border-bottom: 1px solid black;\n  :hover {\n    color: #0a0a85;\n    font-size: 25px;\n    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,\n      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,\n      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,\n      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,\n      7px 6px 1px #cccccc, 2px 2px 2px rgba(44, 23, 206, 0);\n  }\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),H=j.ZP.h2(d||(d=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),I=t(966),T=function(){var n,e,t=(0,m.TH)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(O,{children:[(0,z.jsx)(H,{children:"Additional Information"}),(0,z.jsx)(G,{to:"cast",state:{from:null===(n=t.state)||void 0===n?void 0:n.from},children:"Cast"}),(0,z.jsx)(G,{to:"reviews",state:{from:null===(e=t.state)||void 0===e?void 0:e.from},children:"Reviews"})]}),(0,z.jsx)(Z.Suspense,{fallback:(0,z.jsx)(I.a,{}),children:(0,z.jsx)(m.j3,{})})]})},q=function(){var n=(0,Z.useState)({}),e=(0,f.Z)(n,2),t=e[0],r=e[1],c=(0,Z.useState)(!1),a=(0,f.Z)(c,2),o=a[0],s=a[1],i=(0,m.UO)().movieId;(0,Z.useEffect)((function(){p(i)}),[i]);var p=function(){var n=(0,l.Z)(v().mark((function n(e){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Rx)(e);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s(!0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,z.jsxs)(z.Fragment,{children:[o&&(0,z.jsx)("p",{children:"Sorry ( please try again"}),0!==Object.keys(t).length&&(0,z.jsxs)("main",{children:[(0,z.jsx)(C,{data:t}),(0,z.jsx)(T,{})]})]})}},607:function(n,e,t){t.d(e,{P7:function(){return f},R8:function(){return u},Rx:function(){return d},S0:function(){return l},dg:function(){return x}});var r=t(861),c=t(757),a=t.n(c),o=t(44),s="https://api.themoviedb.org/3",i="9d0cbfdf54c935b25322d86e1e3b7dd0",p="movie",u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/").concat("trending/all/day","?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/").concat("search/movie","?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=true"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/").concat(p,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/").concat(p,"/").concat(e,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/").concat(p,"/").concat(e,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=960.4dcda496.chunk.js.map