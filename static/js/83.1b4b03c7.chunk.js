"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[83],{288:function(n,e,t){t.d(e,{H:function(){return l}});var r,c,a,u=t(739),o=t(168),p=t(444),i=t(731),s=p.ZP.ul(r||(r=(0,o.Z)(["\n  padding-left: 80px;\n"]))),x=p.ZP.li(c||(c=(0,o.Z)(["\n  margin-bottom: 5px;\n"]))),f=(0,p.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  font-size: 20px;\n  border-bottom: 1px solid black;\n  :hover {\n    color: #0a0a85;\n    font-size: 25px;\n    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,\n      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,\n      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,\n      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,\n      7px 6px 1px #cccccc, 2px 2px 2px rgba(44, 23, 206, 0);\n  }\n"]))),d=t(184),l=function(n){var e=n.items,t=(0,u.TH)(),r=e.map((function(n){var e=n.id,r=n.title;return(0,d.jsx)(x,{children:(0,d.jsx)(f,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}));return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s,{children:r})})}},83:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,c,a=t(861),u=t(885),o=t(757),p=t.n(o),i=t(607),s=t(791),x=t(288),f=t(168),d=t(444),l=d.ZP.h1(r||(r=(0,f.Z)(["\n  margin-bottom: 20px;\n  padding-left: 80px;\n"]))),h=d.ZP.h1(c||(c=(0,f.Z)(["\n  text-align: center;\n  font-weight: bold;\n  color: #ff0000;\n  margin-top: 40px;\n"]))),v=t(184),g=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,s.useState)(!1),o=(0,u.Z)(c,2),f=o[0],d=o[1];(0,s.useEffect)((function(){g()}),[]);var g=function(){var n=(0,a.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.R8)();case 3:return e=n.sent,n.abrupt("return",r(e));case 7:n.prev=7,n.t0=n.catch(0),d(!0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[0!==t.length&&(0,v.jsxs)("main",{children:[(0,v.jsx)(l,{children:"Tredding today"}),(0,v.jsx)(x.H,{items:t})]}),f&&(0,v.jsx)(h,{children:"Please try one more time"})]})}},607:function(n,e,t){t.d(e,{P7:function(){return l},R8:function(){return s},Rx:function(){return f},S0:function(){return d},dg:function(){return x}});var r=t(861),c=t(757),a=t.n(c),u=t(44),o="https://api.themoviedb.org/3",p="9d0cbfdf54c935b25322d86e1e3b7dd0",i="movie",s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat("trending/all/day","?api_key=").concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat("search/movie","?api_key=").concat(p,"&language=en-US&query=").concat(e,"&page=1&include_adult=true"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat(i,"/").concat(e,"?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat(i,"/").concat(e,"/").concat(t,"?api_key=").concat(p,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/").concat(i,"/").concat(e,"/").concat(t,"?api_key=").concat(p,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=83.1b4b03c7.chunk.js.map