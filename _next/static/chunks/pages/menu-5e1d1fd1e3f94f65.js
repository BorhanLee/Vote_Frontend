(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{9119:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return c(141)}])},141:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return y}});var h=a(4111),i=a(1438),j=a(2951),d=a(4924),k=a(8029),l=a(797),m=a(460),n=a(5893),e=a(7294),o=a(5005),p=a(9583),q=a(6212),r=a(5147),s=function(b){var j=function(){},c=(0,e.useState)(!1),i=c[0],d=(c[1],(0,e.useState)(null)),a=d[0],f=(d[1],(0,e.useRef)(null)),g=(0,e.useState)(!1),h=g[0];return g[1],(0,e.useEffect)(function(){return i||j(),function(){}},[i,b.show,f]),(0,n.jsx)(e.Fragment,{children:(0,n.jsxs)(q.Z,{show:b.show,onHide:function(){b.setShow(!1)},size:"lg",children:[(0,n.jsx)(q.Z.Header,{children:(0,n.jsx)(q.Z.Title,{children:"Voter List"})}),(0,n.jsx)(q.Z.Body,{children:(0,n.jsxs)(r.Z,{striped:!0,hover:!0,size:"sm",style:{margin:"auto",padding:0},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:a?a.headers.map(function(a,b){return(0,n.jsx)("th",{children:a},"header"+b)}):""})}),(0,n.jsx)("tbody",{children:a?a.lines.map(function(a,b){return(0,n.jsx)("tr",{children:a.map(function(a,b){return(0,n.jsx)("th",{children:a},"lines"+b)})},b+1)}):""})]})}),(0,n.jsx)(q.Z.Footer,{children:"admin"==b.role&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{onChange:function(){var a;null===(a=f.current)|| void 0===a||a.files},ref:f,className:"d-none",type:"file"}),(0,n.jsx)(o.Z,{onClick:function(){var a;null===(a=f.current)|| void 0===a||a.click()},style:{padding:10},variant:h?"success":"primary",children:h?"\u4E0A\u50B3\u6210\u529F":"\u4E0A\u50B3\u6A94\u6848"})]})})]})})},t=function(a){var b=(0,e.useState)(!1),c=b[0],d=b[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{role:a.role,show:c,setShow:d}),(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"modal-dialog modal-lg",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("div",{className:"modal-header",style:{display:"inline-block"},children:(0,n.jsxs)("h3",{children:[a.number&&(0,n.jsx)("span",{className:"label",id:"qid",children:a.number}),a.title,(0,n.jsx)(o.Z,{size:"lg",variant:"success",onClick:function(){d(!c)},style:{float:"right",padding:3,marginTop:0,backgroundColor:"#45cc94"},children:(0,n.jsx)(p.I$,{})})]})}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsx)("div",{className:"quiz",id:"quiz","data-toggle":"buttons",children:a.content}),a.footer]})]})})})]})},u=function(a){var b=(0,e.useState)(a.status),h=b[0],k=b[1],c=(0,e.useState)(a.qid),i=c[0],l=c[1],d=(0,e.useState)(!1),f=d[0],m=d[1],g=(0,e.useState)(a.text),j=g[0],q=g[1];return(0,e.useEffect)(function(){(h!=a.status||i!=a.qid)&&(console.log("props change!"),k(a.status),l(a.qid),q(a.text))},[h,a.status,a.qid,a.text,i]),(0,n.jsx)("div",{className:"d-grid",children:(0,n.jsxs)("label",{className:"btn btn-lg btn-primary btn-block ".concat(a.isSelected?"btn-success":""),id:a.id,onClick:function(){a.handleClick(a.id,j)},children:[(0,n.jsx)("span",{className:"btn-label",children:(0,n.jsx)(p.Dli,{})}),"admin"==a.role&& !1==a.voting?(0,n.jsx)("input",{type:"text",disabled:!f,value:j,onChange:function(a){q(a.target.value)},style:{backgroundColor:"#00000"},size:"25"}):(0,n.jsx)(n.Fragment,{children:a.text}),"admin"==a.role&& !1==a.voting?f?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{onClick:function(){console.log("save"),m(!1),a.handleUpdate(h,i,j,a.id)},width:"sm",style:{padding:0,float:"right",backgroundColor:"transparent",border:"none"},children:(0,n.jsx)(p.l_A,{})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{onClick:function(){console.log("edit"),m(!0)},width:"sm",style:{padding:0,float:"right",backgroundColor:"transparent",border:"none"},children:(0,n.jsx)(p.tU3,{})})}):(0,n.jsx)(n.Fragment,{})]})})},v=function(a){var b=a.items.map(function(c,b){return(0,n.jsx)(u,{text:c,id:b,isSelected:a.selected.includes(b),handleClick:a.handleClick,status:a.status,role:a.role,qid:a.qid,handleUpdate:a.handleUpdate,voting:a.voting},b)});return(0,n.jsx)(e.Fragment,{children:b})},w=a(2304),f=a(2130),x={case:0,page:0,status:"start",answers_id:[],selected_id:[],votingData:{},shares:1,editing:!1},c=function(b){(0,k.Z)(a,b);var c=(0,m.Z)(a);function a(e){var b;return(0,i.Z)(this,a),b=c.call(this,e),(0,d.Z)((0,h.Z)(b),"handleCaseSelect",function(a,c){b.setState({case:a,selected_id:[a]})}),(0,d.Z)((0,h.Z)(b),"handleAnswerSelect",function(a,c){b.state.selected_id.includes(a)?b.setState({selected_id:b.state.selected_id.filter(function(b){return b!=a})}):b.setState({selected_id:(0,l.Z)(b.state.selected_id).concat([a])})}),(0,d.Z)((0,h.Z)(b),"handleStart",function(){b.setState({status:"voting",selected_id:[]})}),(0,d.Z)((0,h.Z)(b),"handleNext",function(){var a=b.state,c=a.page;c+1<a.votingData[b.state.case].content.length?b.setState({page:c+1,answers_id:(0,l.Z)(b.state.answers_id).concat([(0,l.Z)(b.state.selected_id)]),selected_id:[]}):(b.setState({page:0,status:"end",answers_id:(0,l.Z)(b.state.answers_id).concat([(0,l.Z)(b.state.selected_id)]),selected_id:[]}),console.log(b.state.answers_id))}),(0,d.Z)((0,h.Z)(b),"handleReset",function(){b.setState(x)}),(0,d.Z)((0,h.Z)(b),"handleUpdateVoteItem",function(d,e,c,f){var a=b.state.votingData;switch(d){case"start":try{var g=a.filter(function(b,a){return a==f})[0];g.title=c,b.setState({votingData:a.map(function(a,b){return b==f?g:a})})}catch(h){console.log(h)}break;case"voting":try{var i=a[b.state.case];i.content[e-1].answers[f].text=c,b.setState({votingData:a.map(function(a,b){return b==f?i:a})})}catch(j){console.log(j)}break;case"end":break;default:console.log("Unknown state.")}}),(0,d.Z)((0,h.Z)(b),"handleNewVoteCase",function(){var a=b.state.votingData;a.push({title:"",content:[{text:"",answers:[{text:"",count:0}]}]}),b.setState({votingData:a})}),(0,d.Z)((0,h.Z)(b),"handleNewVoteItem",function(){var a=b.state.votingData;a[b.state.case].content[0].answers.push({text:"",count:0}),b.setState({votingData:a})}),(0,d.Z)((0,h.Z)(b),"handleTally",function(){var a=b.state.votingData;b.props.handleTally(a),console.log("new data"),b.setState({votingData:b.state.original})}),(0,d.Z)((0,h.Z)(b),"handleVote",function(){var a=b.state.votingData;b.state.answers_id.forEach(function(c,d){c.forEach(function(c,e){a[b.state.case].content[d].answers[c].count+=1*b.state.shares})}),console.log(a),b.setState({votingData:a}),b.props.handleLogout()}),(0,d.Z)((0,h.Z)(b),"handleStartVoting",function(){b.props.handleStartVoting(),b.props.handleLogout()}),(0,d.Z)((0,h.Z)(b),"edit",function(){console.log("edit"),b.setState({editing:!0})}),(0,d.Z)((0,h.Z)(b),"save",function(){console.log("save"),b.setState({editing:!1})}),(0,d.Z)((0,h.Z)(b),"setText",function(){b.setState({text:!1})}),(0,d.Z)((0,h.Z)(b),"setCaseText",function(c){var a=b.state.votingData;a[b.state.case].content[b.state.page].text=c,b.setState({votingData:a})}),b.state=x,b.state.votingData=w,b}return(0,j.Z)(a,[{key:"render",value:function(){var b,c,d,e,f,g=this.state,h=g.status,r=g.answers_id,j=g.votingData,k=g.page,l=this.state.selected_id,a=this.context.role,m=this.context.voting;switch(h){case"start":b=!1,c="Ureka Voting Machine",f=j.map(function(a){return a.title}),d=(0,n.jsx)(v,{status:h,voting:m,qid:b,role:a,items:f,selected:l,handleClick:this.handleCaseSelect,handleUpdate:this.handleUpdateVoteItem}),e=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onClick:this.handleStart,children:"\u78BA\u8A8D"}),"\xa0","admin"==a&&(0,n.jsx)(n.Fragment,{children:!1==this.context.voting?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onClick:this.handleNewVoteCase,children:"\u65B0\u589E\u8B70\u6848"}),"\xa0",(0,n.jsx)(o.Z,{onClick:this.handleStartVoting,children:"\u958B\u59CB\u6295\u7968"}),"\xa0"]}):(0,n.jsx)(o.Z,{onClick:this.handleTally,children:"\u958B\u7968"})})]});break;case"voting":var s=this;b=k+1;var i=j[this.state.case].content[k],q=this.state.editing;c=(0,n.jsxs)(n.Fragment,{children:["admin"==this.context.role&& !1==this.context.voting?(0,n.jsx)("input",{type:"text",disabled:!q,value:i.text,onChange:function(a){s.setCaseText(a.target.value)},style:{backgroundColor:"#00000"},size:"28"}):(0,n.jsx)(n.Fragment,{children:i.text}),"admin"==this.context.role&& !1==this.context.voting?q?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{onClick:this.save,width:"sm",style:{padding:3,float:"",backgroundColor:"transparent",color:"grey",border:"none"},children:(0,n.jsx)(p.l_A,{})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{onClick:this.edit,width:"sm",style:{padding:3,float:"",backgroundColor:"transparent",color:"grey",border:"none"},children:(0,n.jsx)(p.tU3,{})})}):(0,n.jsx)(n.Fragment,{})]}),f=i.answers.map(function(a){return a.text}),d=(0,n.jsx)(v,{status:h,voting:m,qid:b,role:a,items:f,selected:l,handleClick:this.handleAnswerSelect,handleUpdate:this.handleUpdateVoteItem}),e=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onClick:this.handleNext,children:"\u78BA\u8A8D"}),"\xa0","admin"==a&& !1==this.props.voting&&(0,n.jsx)(o.Z,{onClick:this.handleNewVoteItem,children:"\u65B0\u589E\u9078\u9805"})]});break;case"end":var u=this;c="\u7D50\u675F",d=r[0].map(function(a){return j[u.state.case].content[0].answers[a].text}),e="voter"==a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onClick:this.handleReset,children:"\u91CD\u65B0\u9078\u64C7"}),"\xa0",(0,n.jsx)(o.Z,{onClick:this.handleVote,children:"\u9001\u51FA"}),"\xa0"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onClick:this.props.handleLogout,children:"\u5B8C\u6210"}),"\xa0"]});break;default:console.log("Unknown state.")}return(0,n.jsx)(t,{status:h,role:a,number:b,title:c,content:d,footer:e})}}]),a}(e.Component);(0,d.Z)(c,"contextType",f.Z);var y=c}},function(a){a.O(0,[445,839,774,888,179],function(){var b;return a(a.s=9119)}),_N_E=a.O()}])