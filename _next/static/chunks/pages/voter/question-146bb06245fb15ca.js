(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{9046:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voter/question",function(){return c(6506)}])},6506:function(e,b,a){"use strict";a.r(b),a.d(b,{default:function(){return y}});var f=a(7568),g=a(1799),h=a(797),c=a(4051),i=a.n(c),j=a(5893),k=a(5789),l=a(7673),m=a(7294),n=a(682),o=a(5005),p=a(1608),q=a(1555),r=a(1163),s=a(2130),t=a(3193),d=a(214),u=a.n(d),v=a(6212);a(3175),a(2360);var w=a(2920);function x(a){var b=(0,m.useState)(!1),c=b[0],d=b[1],e=(0,r.useRouter)();function g(){return(g=(0,f.Z)(i().mark(function b(){return i().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:w.Am.error("has not implement yet"),d(!1),setTimeout(function(){w.Am.info("Thanks for voting!"),e.push("/voter?vote_id=".concat(a.vote_id),"/".concat("Vote_Frontend","/voter?vote_id=").concat(a.vote_id))},1e3);case 3:case"end":return b.stop()}},b)}))).apply(this,arguments)}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{variant:a.variant,style:a.style,onClick:function(){d(!0)},children:a.buttonName})," ",(0,j.jsxs)(v.Z,{show:c,onHide:function(){d(!1)},keyboard:!1,children:[(0,j.jsx)(v.Z.Header,{children:(0,j.jsx)(v.Z.Title,{children:"Vote Content Confirmation"})}),(0,j.jsx)(v.Z.Body,{children:(0,j.jsx)("ol",{children:a.questions.map(function(d,b){var c=d.data.attributes,f=a.answers[b],e=JSON.parse(c.options);return(0,j.jsxs)("li",{children:[c.title,(0,j.jsx)("ul",{children:e.map(function(c,a){return f.includes(a)?(0,j.jsx)("li",{children:c},"options-".concat(b,"-").concat(a)):""})})]},b)})})}),(0,j.jsx)(v.Z.Footer,{children:(0,j.jsx)(o.Z,{variant:"secondary",style:{float:"left"},onClick:function(){!function(){return g.apply(this,arguments)}()},children:"Vote!"})})]})]})}function y(){var y=function(){e.push("/vote/setting?vote_id=".concat(w),"/".concat("Vote_Frontend","/vote/setting?vote_id=").concat(w))},z=function(a,b){if(v[a]||(v[a]=[b]),v[a].includes(b)){var c=v[a];c=c.filter(function(a){return a!=b}),v[a]=(0,h.Z)(c)}else v[a].push(b);B((0,g.Z)({},v))},e=(0,r.useRouter)();(0,m.useContext)(s.Z).backToHome;var a=(0,m.useState)([]),b=a[0],A=a[1],c=(0,m.useState)({0:[],1:[],2:[]}),v=c[0],B=c[1],d=(0,m.useState)(null),w=d[0],C=d[1];function D(){return(D=(0,f.Z)(i().mark(function a(){var b,c,d;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return C(b=e.query.vote_id),c={method:"GET",headers:{"Content-Type":"application/json"}},a.next=5,fetch("../Mock_getOwnedVoteQuestion.json",c);case 5:return d=a.sent,a.next=8,d.json();case 8:A((d=a.sent).data);case 10:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,m.useEffect)(function(){e.isReady&&function a(){return D.apply(this,arguments)}()},[e.isReady]),(0,j.jsxs)(k.Z,{children:[(0,j.jsx)(l.Z,{}),(0,j.jsxs)(n.Z,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{style:{float:"left"},children:"Vote Questions"}),(0,j.jsx)(o.Z,{variant:"primary",type:"button",style:{float:"right"},onClick:function(a){y()},children:"\u2190Back to vote"})]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("ul",{style:{listStyleType:"none"},children:b.map(function(c,a){var b=c.data.attributes,d=JSON.parse(b.options);return(0,j.jsxs)("li",{children:[(0,j.jsxs)("h3",{children:[a+1,". ",b.title]}),(0,j.jsx)("div",{className:u().grid,style:{maxWidth:"100%"},children:d.map(function(e,c){var b,d;return(0,j.jsx)("a",{className:u().card,style:{backgroundColor:(b=a,d=c,v[b]&&v[b].includes(d))?"gray":"#eaeaea"},onClick:function(){z(a,c)},children:e},"options-".concat(a,"-").concat(c))})})]},a)})}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(q.Z,{style:{justifyContent:"center",textAlign:"center"},children:(0,j.jsx)(x,{style:{width:"30%"},buttonName:"Vote",questions:b,answers:v,vote_id:w})})})]}),(0,j.jsx)(t.Z,{})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(a){a.O(0,[445,439,613,713,307,774,888,179],function(){var b;return a(a.s=9046)}),_N_E=a.O()}])