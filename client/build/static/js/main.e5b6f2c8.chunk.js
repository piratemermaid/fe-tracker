(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a(132)},106:function(e,t,a){},126:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=(a(106),a(14)),i=a.n(c),u=a(30),o=a(16),m=a(17),h=a(31),d=a(19),p=a(18),f=a(6),g=a.n(f),v=a(8),E=a.n(v),y=a(10),b=a(21),k="http://fethtracker.arielschnur.com",S=(a(126),function(e){var t=function(t){Object(d.a)(n,t);var a=Object(p.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.checkAndRedirect()}},{key:"componentDidUpdate",value:function(){this.checkAndRedirect()}},{key:"checkAndRedirect",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"/api/account/authenticated"}).then((function(e){e.data.authenticated||t.props.history.push("/login")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.props.authenticated?r.a.createElement(e,this.props):null)}}]),n}(r.a.Component);return Object(b.f)(t)}),N=a(171),w=a(173),C=a(168),O=Object(C.a)((function(e){return{root:{marginTop:"100px"}}})),j=function(){var e=O();return r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement(N.a,{item:!0},r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{size:60,thickness:4}))))},x=a(46),_=a(180),I=a(175),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",errorMessage:null,isLoading:!1},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0});var a=this.state,n=a.username,r=a.password;E()({method:"post",url:"/api/account/login",params:{username:n,password:r}}).then((function(e){"success"===e.data.login&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}},{key:"useDemoAccount",value:function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0}),E()({method:"post",url:"/api/account/login",params:{username:"testuser",password:"userpass12"}}).then((function(e){"success"===e.data.login&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(x.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=t.errorMessage;return t.isLoading?r.a.createElement(j,null):r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Log In"),r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"password",label:"password",value:n,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement("div",{className:"form-error"},l),r.a.createElement(I.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Log In"),r.a.createElement("br",null),r.a.createElement(I.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.useDemoAccount(t)}},"Demo Account"),r.a.createElement("div",null,"Don't have an account yet?"," ",r.a.createElement(y.b,{to:"/signup"},"Sign Up")))))}}]),a}(n.Component),D=Object(b.f)(L),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",passwordMatch:"",errorMessage:null},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.validateFields();if(a)this.setState({errorMessage:a});else{var n=this.state,r=n.username,l=n.password,s=n.passwordMatch,c=n.email;E()({method:"post",url:"/api/account/signup",params:{username:r,password:l,passwordMatch:s,email:c}}).then((function(e){"success"===e.data.signup&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(x.a)({},t,e.target.value))}},{key:"validateFields",value:function(){var e=this.state,t=e.username,a=e.password,n=e.passwordMatch,r=e.email;return t?r?a?n?t.length<8?"Please enter a longer username":a.length<10?"Please enter a password of at least 10 characters":n!==a?"Please enter a matching password":U?void 0:"Invalid email":"Please enter a matching password":"Please enter a password":"Please enter an email":"Please enter a username"}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,l=t.password,s=t.passwordMatch,c=t.errorMessage;return r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"text",label:"email",value:n,onChange:function(t){return e.onInputChange(t,"email")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"password",label:"password",value:l,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(_.a,{type:"password",label:"passwordMatch",value:s,onChange:function(t){return e.onInputChange(t,"passwordMatch")}})),r.a.createElement("div",{className:"form-error"},c),r.a.createElement(I.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Sign Up"))),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(y.b,{to:"/login"},"Log In")))}}]),a}(n.Component);function U(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var A=Object(b.f)(B),P=a(85),M=a.n(P),F=function(e){return r.a.createElement("div",{id:"back-button"},r.a.createElement(y.b,{to:e.url?e.url:"/"},r.a.createElement(M.a,null)))},R=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).startNewPlaythrough=function(){var e=n.state,t=e.house,a=e.byleth;E()({method:"post",url:"api/user/new_playthrough",params:{house:t,byleth:a}}).then((function(e){"success"===e.data&&(n.props.history.push("/"),n.props.getPlaythrough())})).catch((function(e){console.log(e)}))},n.state={house:null,byleth:null},n}return Object(m.a)(a,[{key:"selectHouse",value:function(e){this.setState({house:e})}},{key:"selectByleth",value:function(e){this.setState({byleth:e})}},{key:"houseButtonUI",value:function(e){var t=this,a="/img/banners/".concat(e.replace(/\s+/g,"_"),"_Banner.png"),n="banner-choice new-playthrough-choice";return this.state.house===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(N.a,{item:!0,xs:4,onClick:function(){return t.selectHouse(e)}},r.a.createElement("img",{src:a,className:n,alt:e,title:e}))}},{key:"bylethButtonUI",value:function(e){var t=this,a="/img/students/Byleth_".concat(e,".png"),n="byleth-choice new-playthrough-choice";return this.state.byleth===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(N.a,{item:!0,xs:4,onClick:function(){return t.selectByleth(e)}},r.a.createElement("img",{src:a,className:n,alt:"Byleth-".concat(e),title:"Byleth-".concat(e)}))}},{key:"submitButtonUI",value:function(){return this.state.house&&this.state.byleth?r.a.createElement(I.a,{className:"button ".concat(this.state.house.replace(/\s+/g,"")),variant:"contained",color:"primary",onClick:this.startNewPlaythrough},"Start!"):r.a.createElement(I.a,{className:"button",variant:"contained",color:"primary",disabled:!0},"Start")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("div",{className:"padding center"},r.a.createElement("h2",null,"New Playthrough"),r.a.createElement("h3",null,"Select House"),r.a.createElement(N.a,{container:!0,spacing:2},this.houseButtonUI("Black Eagles"),this.houseButtonUI("Blue Lions"),this.houseButtonUI("Golden Deer")),r.a.createElement("h3",null,"Select Byleth"),r.a.createElement(N.a,{container:!0,justify:"center",spacing:2},this.bylethButtonUI("M"),this.bylethButtonUI("F")),this.submitButtonUI()))}}]),a}(n.Component),T=Object(b.f)(R),G=a(38);function q(e){if(!e||e&&e.length<1)return null;var t=e.filter((function(e){if(!e.certified)return e}));return t.length<1?null:z(t)[0]}function z(e){var t=["Beginner","Intermediate","Advanced","Master","DLC","Unique"];return e.sort((function(e,a){return g.a.indexOf(t,e.type)-g.a.indexOf(t,a.type)}))}function H(e){var t=e.studentSkillLevel,a=e.reqLevel,n=["D","D+","C","C+","B","B+","A","A+","S"];return!!t&&g.a.indexOf(n,t)>=g.a.indexOf(n,a)}function W(e){var t=e.skills,a=e.classSkills;return a.filter((function(e){var a=g.a.find(t,{name:e.name});if(a&&H({studentSkillLevel:a.level,reqLevel:e.level}))return e})).length===a.length}function J(e){return e.replace(/\s+/g,"")}function K(e){return e.map((function(e){var t=e.name,a=e.level;return r.a.createElement("span",{className:"skill-icon",key:t},r.a.createElement("img",{src:"/img/skills/".concat(J(t),".png"),alt:t,title:t}),a)}))}function Z(e){if(e.length>0)return e.map((function(e){var t=e.name;return r.a.createElement("img",{src:"/img/skills/".concat(J(t),".png"),className:"skill-icon",alt:t,title:t})}))}function $(e){switch(e){case"Black Eagles":return"rgb(206, 54, 87)";case"Blue Lions":return"rgb(77, 95, 169)";default:return"rgb(223, 192, 74)"}}var Q=function(e){var t=e.name,a=e.byleth_gender,n=e.house,l="/img/students/".concat(t,".png");return"Byleth"===t&&(l="/img/students/Byleth_".concat(a,".png")),r.a.createElement("img",{src:l,className:"roster-img ".concat(n.replace(/\s+/g,"")),alt:t,title:t})},V=a(86),X=a.n(V),Y=a(61),ee=a.n(Y),te=function(e){var t=e.student,a=t.name,n=t.classes,l=t.skills,s=e.appStudents,c=e.byleth_gender,i=e.house,u=q(n),o=function(e){var t=e.classes,a=e.skills;if(!(t&&t.length>0))return[];var n,r=z(t),l=Object(G.a)(r);try{for(l.s();!(n=l.n()).done;){var s=n.value,c=s.certified,i=s.classSkills;if(!c&&!W({skills:a,classSkills:i}))return i}}catch(u){l.e(u)}finally{l.f()}}({classes:n,skills:l}),m=g.a.find(s,{name:a}),h=!1;return u&&(h=W({skills:l,classSkills:u.classSkills})),r.a.createElement("div",{key:a,className:"roster-row"},r.a.createElement(y.b,{to:"/student/".concat(a),className:"no-link-style"},r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(N.a,{item:!0,xs:3},r.a.createElement(Q,{name:a,byleth_gender:c,house:"Byleth"!==a?m.house:i})),r.a.createElement(N.a,{item:!0,xs:8,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},a," ",h?r.a.createElement("span",null,r.a.createElement(ee.a,{className:"ready-for-cert",style:{color:$(i)}})):null),r.a.createElement("p",null,n.length>0?r.a.createElement("span",null,function(e,t){if(e){var a=e.name,n=e.type;return t?r.a.createElement("span",null,"Ready for cert: ",a," (",n,")"):r.a.createElement("span",null,"Next class: ",a," (",n,")")}return r.a.createElement("span",{className:"italic"},"Completed all set classes")}(u,h)):r.a.createElement("span",{className:"italic"},"No classes set")),r.a.createElement("p",null,o&&o.length>0?r.a.createElement("span",null,"Next goals:"," ",o?K(g.a.compact(o.map((function(e){var t=g.a.find(l,{name:e.name});if(!t||!H({studentSkillLevel:t.level,reqLevel:e.level}))return e})))):"none"):null)),r.a.createElement(N.a,{item:!0,xs:1},r.a.createElement(X.a,{className:"right-arrow"})))))},ae=a(176),ne=a(177),re=a(62),le=a.n(re),se=a(87),ce=a.n(se),ie=a(88),ue=a.n(ie),oe=a(89),me=a.n(oe),he=Object(b.f)((function(e){return r.a.createElement(ae.a,null,r.a.createElement(y.b,{to:"/new_playthrough"},r.a.createElement(ne.a,{label:"Recents",value:"recents",icon:r.a.createElement(le.a,null)})),r.a.createElement(y.b,{to:"/info"},r.a.createElement(ne.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(ce.a,null)})),r.a.createElement(y.b,{to:"/dev_notes"},r.a.createElement(ne.a,{label:"Folder",value:"folder",icon:r.a.createElement(ue.a,null)})),r.a.createElement(y.b,{to:"/",onClick:function(){window.confirm("Do you want to log out?")&&e.logOut()}},r.a.createElement(ne.a,{label:"Folder",value:"folder",icon:r.a.createElement(me.a,null)})))})),de=a(90),pe=a.n(de),fe=function(e){if(e.isLoadingUserData)return r.a.createElement(j,null);if(!e.playthrough)return r.a.createElement("div",{className:"padding"},r.a.createElement("h2",null,"No playthrough found."),r.a.createElement(y.b,{to:"/new_playthrough"},r.a.createElement(I.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary"},"Start New Playthrough")));var t=e.playthrough,a=t.house,n=t.byleth_gender,l=t.students;return r.a.createElement("div",null,r.a.createElement("div",{className:"padding"},r.a.createElement("h2",null,a," Roster",r.a.createElement("span",{style:{float:"right"}},r.a.createElement(y.b,{to:"/add_student"},r.a.createElement(pe.a,null))))),r.a.createElement("ul",null,l.map((function(t){return r.a.createElement(te,{key:t.name,student:t,byleth_gender:n,house:a,appStudents:e.appStudents})}))),r.a.createElement(he,{logOut:e.logOut}))},ge=a(174),ve=a(91),Ee=a.n(ve),ye=a(63),be=a.n(ye),ke=a(183),Se=a(181),Ne=Object(b.f)((function(e){if(!e.playthrough)return r.a.createElement(j,null);var t=e.match.params.name,a=g.a.find(e.playthrough.students,{name:t}),n=a.classes,l=a.skills,s=g.a.find(e.appStudents,{name:t}),c=q(n),i=g.a.compact([c]),u=g.a.compact(g.a.filter(n,{certified:!0})),o=g.a.compact(n.filter((function(e){if(!e.certified&&e.name!==c.name)return e}))),m=function(a,n){return n.length<1?r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement(ge.a,{className:"goal-row",elevation:1,key:t},"None","current"===a?r.a.createElement("span",null," ","-"," ",r.a.createElement(y.b,{to:"/select_classes/".concat(t)},"Set now")):null)):r.a.createElement("div",null,r.a.createElement("h3",null,a),n.length>0?n.map((function(t){var n=t.name,s=t.classSkills,c=t.certified,i=!1;return!c&&s.length>0&&(i=W({skills:l,classSkills:s})),r.a.createElement(ge.a,{className:"goal-row ".concat("completed"===a?"italic":null),elevation:1,key:n},r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("h4",null,"Class"),r.a.createElement(ke.a,{control:r.a.createElement(Se.a,{checked:c,onChange:function(t){return function(t,a){e.selectClass({studentName:e.match.params.name,className:a})}(0,n)},style:{color:$(e.playthrough.house)}}),label:n}),i?r.a.createElement(ee.a,{style:{color:$(e.playthrough.house)}}):null),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("h4",null,"Skills Required"),s.length>0?s.map((function(t){var a=function(e,t){var a=g.a.filter(e,{name:t});if(a.length<1)return null;if(1===a.length)return a[0].level;var n,r="E",l=Object(G.a)(a);try{for(l.s();!(n=l.n()).done;){var s=n.value.level;s<r&&(r=s)}}catch(c){l.e(c)}finally{l.f()}return r}(l,t.name);return r.a.createElement(ke.a,{control:r.a.createElement(Se.a,{checked:H({studentSkillLevel:a,reqLevel:t.level}),onChange:function(a){return function(t,a){e.selectSkill({studentName:e.match.params.name,skillName:a.name,level:a.level})}(0,t)},style:{color:$(e.playthrough.house)}}),label:"".concat(t.name," ").concat(t.level)})})):"None")))})):r.a.createElement("div",null,"none"))};return r.a.createElement("div",{id:"student-overview",style:{width:"100%"},className:"padding"},r.a.createElement(F,null),r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:3},r.a.createElement(Q,{name:t,byleth_gender:e.playthrough.byleth_gender,house:"Byleth"!==t?s.house:e.playthrough.house})),r.a.createElement(N.a,{item:!0,xs:9,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},t," ",r.a.createElement(y.b,{to:"/select_classes/".concat(t)},r.a.createElement(Ee.a,{fontSize:"small",style:{color:$(e.playthrough.house)}}))),r.a.createElement("p",{className:"roster-desc"},"Next class:"," ",c?"".concat(c.name," (").concat(c.type,"}"):"none"),r.a.createElement("p",{className:"roster-desc"},"Skills needed:"," ",c?K(c.classSkills):"n/a"," "))),m("current",i),o.length>0?m("upcoming",o):null,m("completed",u),r.a.createElement("div",{className:"footer center hover",style:{marginTop:"20px"},onClick:function(){return function(t){E()({method:"post",url:"/api/user/remove_student",params:{name:t}}).then((function(a){"success"===a.data&&(e.removeStudent(t),e.history.push("/"))}))}(t)}},r.a.createElement(be.a,{style:{position:"relative",top:"7px"}}),r.a.createElement("span",null," Remove from Roster")))})),we=a(182),Ce=a(178),Oe=a(179),je=a(92),xe=a.n(je),_e=function(e){var t=e.appStudentInfo,a=e.studentClasses,n=e.type,l=e.filters,s=(e.percentages,!1),c=g.a.compact(e.studentClasses.map((function(e){if(e.type===n)return e.name})));c.length>0&&(s=!0);return r.a.createElement("div",{style:{marginBottom:"4px"}},r.a.createElement(we.a,null,r.a.createElement(Ce.a,{expandIcon:r.a.createElement(xe.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",className:s?"".concat(J(e.house),"-bg"):null},e.type,s?" (".concat(c.join(", "),")"):null),r.a.createElement(Oe.a,null,r.a.createElement("ul",{style:{width:"100%"}},e.classes.map((function(n){var s=n.name,c=n.skills,i=n.abilities,u=n.gender,o=n.student,m=n.mastery_ability,h=n.mastery_combat_art,d=function(e){if(l.length<1)return!0;var t,a=Object(G.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(l.includes(n.name))return!0}}catch(r){a.e(r)}finally{a.f()}}(c);if(o&&o!==e.student&&(d=!1),u&&u!==t.gender&&(d=!1),!d)return null;var p=!1,f=!1,v=g.a.find(a,{name:s});v&&(p=!0,v.certified&&(f=!0));var E="set-class";return E+=f?" certified":p?" ".concat(J(e.house),"-bg"):" unset",r.a.createElement("li",{key:s,className:E,onClick:function(){return e.selectClassGoal({studentName:e.student,className:s})}},r.a.createElement("span",{className:"class-name"},s,f?" (Certified)":null),r.a.createElement("span",{className:"class-percentage"},g.a.find(e.percentages,{name:s})?g.a.find(e.percentages,{name:s}).percentage:"--","% of users chose this class for"," ",e.student),r.a.createElement("br",null),"Skills required:"," ",K(c),r.a.createElement("br",null),"Class abilities: ",i||"none",r.a.createElement("br",null),"Class mastery:"," ",m?r.a.createElement("span",null,"Ability ",m):null,m&&h?", ":null,h?r.a.createElement("span",null,"Combat Art ",h):null)}))))))},Ie=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={classes:{},filters:[],percentages:{}},n}return Object(m.a)(a,[{key:"onFilterChange",value:function(e){var t=this.state.filters;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({filters:t})}},{key:"componentDidMount",value:function(){var e=this;this.props.appData&&this.setState({classes:this.props.appData.classes}),E()({method:"get",url:"/api/app/class_percentage",params:{studentName:this.props.match.params.name}}).then((function(t){e.setState({percentages:t.data})}))}},{key:"render",value:function(){var e=this;if(!this.props.playthrough)return r.a.createElement(j,null);var t=this.props.match.params.name,a=g.a.find(this.props.appData.students,{name:t}),n=a.skills.filter((function(e){if(e.proficient||e.budding)return e})),l=this.props.playthrough,s=l.students,c=l.house;return r.a.createElement("div",{className:"padding"},r.a.createElement(F,{url:"/student/".concat(t)}),r.a.createElement("h2",null,"Select Classes for ",t),r.a.createElement("div",{className:"skill-filters"},n.map((function(t){var a=t.name;return r.a.createElement("img",{key:a,onClick:function(){return e.onFilterChange(a)},className:"skill-filter".concat(e.state.filters.includes(a)?" filter-selected":""),src:"/img/skills/".concat(J(a),".png"),alt:a,title:a})}))),["Beginner","Intermediate","Advanced","Master","Unique","DLC"].map((function(n){var l=g.a.find(s,{name:t});return r.a.createElement(_e,{type:n,student:t,classes:g.a.filter(e.state.classes,{type:n}),studentClasses:l.classes,house:c,selectClassGoal:e.props.selectClassGoal,key:n,filters:e.state.filters,appStudentInfo:a,percentages:e.state.percentages})})))}}]),a}(n.Component),Le=function(e){var t=e.skills;return r.a.createElement("div",null,["proficient","budding","weakness"].map((function(e){var a=g.a.filter(t,Object(x.a)({},e,!0));if(a.length>0)return r.a.createElement("div",null,function(e,t){if("proficient"===e)return t.length>0?r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("img",{src:"/img/skills/proficient.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Proficient",title:"Proficient"}),Z(t))):"No proficient skills";if("budding"===e){if(t.length>0)return r.a.createElement("div",null,r.a.createElement("img",{src:"/img/skills/budding.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Budding",title:"Budding"}),Z(t))}else if(t.length>0)return r.a.createElement("div",null,r.a.createElement("img",{src:"/img/skills/weakness.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Weakness",title:"Weakness"}),Z(t))}(e,a))})))},De=["Sword","Lance","Axe","Bow","Brawl","Reason","Faith","Authority","Heavy Armor","Riding","Flying"],Be=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={availableStudents:[],selectedStudents:[],filters:[]},n}return Object(m.a)(a,[{key:"addStudent",value:function(e){var t=this.state.selectedStudents;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({selectedStudents:t})}},{key:"addStudents",value:function(){var e=this.state.selectedStudents;e.length>0&&this.props.addStudents(e)}},{key:"onFilterChange",value:function(e){var t=this.state.filters;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({filters:t})}},{key:"studentMeetsFilterReq",value:function(e){var t,a=this.state.filters,n=Object(G.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,l=r.name,s=r.proficient,c=r.budding;if(a.includes(l)&&(s||c))return!0}}catch(i){n.e(i)}finally{n.f()}return!1}},{key:"renderAvailableStudents",value:function(){var e,t=this,a=this.state.filters,n=this.state,l=n.availableStudents,s=n.selectedStudents,c=[],i=null,u=Object(G.a)(l);try{var o=function(){var n=e.value,l=n.name,u=n.gender,o=n.house,m=n.skills;i&&i===o||(i=o,c.push(r.a.createElement("h3",{className:"padding",key:o},o))),(a.length<1||t.studentMeetsFilterReq(m))&&c.push(r.a.createElement(N.a,{container:!0,className:"roster-row add-student-row".concat(s.includes(l)?" add-student-selected ".concat(o.replace(/\s+/g,"")):null),key:l,onClick:function(){return t.addStudent(l)}},r.a.createElement(N.a,{item:!0,xs:3},r.a.createElement(Q,{name:l,byleth_gender:u||"F",house:o})),r.a.createElement(N.a,{item:!0,xs:9},r.a.createElement("p",{className:"roster-name",style:{marginTop:0}},l),r.a.createElement(Le,{skills:m}))))};for(u.s();!(e=u.n()).done;)o()}catch(m){u.e(m)}finally{u.f()}return c}},{key:"componentDidMount",value:function(){var e=this;this.props.playthrough&&this.props.playthrough.students&&E()({method:"get",url:"/api/app/students"}).then((function(t){e.setState({availableStudents:t.data.filter((function(t){if(t.recruitable&&!g.a.find(e.props.playthrough.students,{name:t.name}))return t}))})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedStudents,n=t.filters;return this.props.playthrough&&this.props.playthrough.students?r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("h2",{className:"padding"},"Add Students"),r.a.createElement("div",{className:"padding skill-filters"},De.map((function(t){return r.a.createElement("img",{key:t,onClick:function(){return e.onFilterChange(t)},className:"skill-filter".concat(n.includes(t)?" filter-selected":""),src:"/img/skills/".concat(J(t),".png"),alt:t,title:t})})),n.length>0?r.a.createElement(be.a,{className:"hover remove-filters-btn",onClick:function(){e.setState({filters:[]})}}):null),r.a.createElement("ul",null,this.renderAvailableStudents()),r.a.createElement("div",{id:"sticky-footer",align:"right"},r.a.createElement(y.b,{to:"/"},r.a.createElement(le.a,{className:"add-student-btn".concat(this.state.selectedStudents.length<1?" deselected":""),fontSize:"large",onClick:function(){return e.addStudents(a)}})))):r.a.createElement(j,null)}}]),a}(n.Component),Ue=Object(b.f)((function(e){var t=function(t,a){return r.a.createElement(N.a,{item:!0,xs:6,className:"info-link",onClick:function(){return e.history.push(a)},id:J(t)},r.a.createElement("h4",null,t))};return r.a.createElement("div",{id:"info-links"},r.a.createElement("div",{className:"padding"},r.a.createElement(F,null),r.a.createElement("h2",null,"Info")),r.a.createElement(N.a,{className:"padding ",container:!0},t("Gifts","/gifts"),t("Lost Items","/lost_items"),t("Faculty Training","/faculty_training"),t("Tea Party Guide","/tea_party")))})),Ae=function(e){var t=e.playthrough,a=e.appStudents;if(!t||!a)return r.a.createElement(j,null);var n=t.students;function l(t){return r.a.createElement("div",null,t.map((function(t){var n=t.name;if("Byleth"!==n&&"Jeralt"!==n){var l=g.a.find(a,{name:n}),s=l.gifts;return r.a.createElement("div",{key:n,className:"roster-row"},r.a.createElement(N.a,{container:!0,spacing:3,alignItems:"top"},r.a.createElement(N.a,{item:!0,xs:3},r.a.createElement(Q,{name:n,byleth_gender:e.playthrough.byleth_gender,house:"Byleth"!==n?l.house:e.playthrough.house})),r.a.createElement(N.a,{item:!0,xs:9},r.a.createElement("p",{className:"roster-name",style:{marginTop:0}},n),r.a.createElement("ul",{className:"styled-list"},s.map((function(e){var t=e.name;return r.a.createElement("li",{key:t},t)}))))))}})))}return r.a.createElement("div",null,r.a.createElement("div",{className:"padding"},r.a.createElement(F,{url:"/info"}),r.a.createElement("h2",null,"Gifts")),r.a.createElement("div",{className:"padding"},r.a.createElement("h3",null,"Students in House")),l(n),r.a.createElement("div",{className:"padding"},r.a.createElement("h3",null,"Everyone")),l(a))},Pe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={months:{},userLostItems:[]},n}return Object(m.a)(a,[{key:"handleCheck",value:function(e,t,a){var n=this;E()({method:"post",url:"/api/user/toggle_lost_item",params:{name:t,type:a}}).then((function(e){"success"===e.data&&n.fetchUserLostItems()}))}},{key:"fetchUserLostItems",value:function(){var e=this;E()({method:"get",url:"/api/user/lost_items"}).then((function(t){e.setState({userLostItems:t.data})}))}},{key:"isChecked",value:function(e,t){var a=this.state.userLostItems,n=g.a.find(a,{name:e});return!!n&&!!n[t]}},{key:"componentDidMount",value:function(){var e=this;E()({method:"get",url:"/api/app/lost_items_by_month"}).then((function(t){e.setState({lostItems:t.data})})),this.fetchUserLostItems()}},{key:"render",value:function(){var e=this;if(!this.state.lostItems)return r.a.createElement(j,null);var t=g.a.filter(this.state.userLostItems,{found:!0,returned:!1});return r.a.createElement("div",{id:"lost-items",className:"padding"},r.a.createElement(F,{url:"/info"}),r.a.createElement("h2",null,"Lost Items"),r.a.createElement("h3",null,"Lost Items Acquired"),r.a.createElement("ul",{className:"lost-item-list"},t.length>0?t.map((function(t){var a=t.name,n=t.student;return r.a.createElement("li",null,a," (",n,")",r.a.createElement("br",null),r.a.createElement(ke.a,{control:r.a.createElement(Se.a,{checked:e.isChecked(a,"returned"),onChange:function(t){return e.handleCheck(t,a,"returned")},style:{color:$(e.props.playthrough.house)}}),label:"returned"}))})):"none"),r.a.createElement("h3",null,"Lost Items List"),this.state.lostItems.map((function(t){var a=t.name,n=t.lostItems;return r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("ul",{className:"lost-item-list"},n.map((function(t){var a=t.name,n=t.location,l=t.student;t.condition;return r.a.createElement("li",null,a," - ",n," (",l,")",r.a.createElement("br",null),r.a.createElement(ke.a,{control:r.a.createElement(Se.a,{checked:e.isChecked(a,"found"),onChange:function(t){return e.handleCheck(t,a,"found")},style:{color:$(e.props.playthrough.house)}}),label:"found"}),r.a.createElement(ke.a,{control:r.a.createElement(Se.a,{checked:e.isChecked(a,"returned"),onChange:function(t){return e.handleCheck(t,a,"returned")},style:{color:$(e.props.playthrough.house)}}),label:"returned"}))}))))})))}}]),a}(n.Component),Me=function(e){return r.a.createElement("div",{className:"padding"},r.a.createElement(F,{url:"/info"}),r.a.createElement("h2",null,"Faculty Training (TODO)"),"This page will show which skills faculty members can train Byleth in")},Fe=function(e){return r.a.createElement("div",{className:"padding"},r.a.createElement(F,{url:"/info"}),r.a.createElement("h2",null,"Tea Party Guide (TODO)"),"This page will have tea party guides for each character")},Re=[{desc:"Ability to sort roster page by class level (e.g. show those who haven't certified for Beginner, then Intermediate, then Advanced)"},{desc:"Add gifts for students not in house"},{desc:"Add motivation guide that combines info from gifts and lost items"},{desc:"Show tooltips description for class abilities"},{desc:"Reorder students by order in game when instructing (GD and BE done, need BL order)"}],Te=[{desc:"Some glitchy loading"}],Ge=[{desc:"Lost item guide"},{desc:"Faculty training guide"},{desc:"Show whether to critique/console for failure"},{desc:"Select non-class skill goals post master class (or along path)"},{desc:"Track support levels"},{desc:"Show group task options"},{desc:"Keep track of class mastery"},{desc:"Tea Party guides"}],qe=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement(F,null),r.a.createElement("h2",null,"Dev Notes"),r.a.createElement("h3",null,"Todos"),r.a.createElement("ul",{className:"styled-list"},Re.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))),r.a.createElement("h3",null,"Known bugs"),r.a.createElement("ul",{className:"styled-list"},Te.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))),r.a.createElement("h3",null,"Feature ideas"),r.a.createElement("ul",{className:"styled-list"},Ge.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))))},ze=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logOut=function(){E()({method:"get",url:"/api/account/logout"}).then((function(e){"success"===e.data.logout&&n.authenticateUser(!1)})).catch((function(e){console.log(e)}))},n.state={isLoadingAppData:!0,isLoadingUserData:!0,authenticated:!1,playthrough:null,appData:null},n.authenticateUser=n.authenticateUser.bind(Object(h.a)(n)),n.getPlaythrough=n.getPlaythrough.bind(Object(h.a)(n)),n.selectClassGoal=n.selectClassGoal.bind(Object(h.a)(n)),n.selectClass=n.selectClass.bind(Object(h.a)(n)),n.selectSkill=n.selectSkill.bind(Object(h.a)(n)),n.addStudents=n.addStudents.bind(Object(h.a)(n)),n.removeStudent=n.removeStudent.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"authenticateUser",value:function(e){this.setState({authenticated:e}),this.getPlaythrough()}},{key:"getPlaythrough",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E()({method:"get",url:"".concat(k,"/api/user/playthrough")}).then((function(e){t.setState({playthrough:e.data,isLoadingUserData:!1})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"selectClassGoal",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,E()({method:"post",url:"/api/user/update_student_class_goal",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectClass",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,E()({method:"post",url:"/api/user/update_student_class",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectSkill",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.skillName,r=t.level,e.next=3,E()({method:"post",url:"/api/user/update_student_skill",params:{studentName:a,skillName:n,level:r}}).then((function(e){"success"===e.data&&l.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"addStudents",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E()({method:"post",url:"/api/user/add_students",params:{names:t}}).then((function(e){"success"===e.data&&a.getPlaythrough()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeStudent",value:function(){this.getPlaythrough()}},{key:"getAppData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"".concat(k,"/api/app/classes")}).then((function(e){a=e.data}));case 2:return e.next=4,E()({method:"get",url:"".concat(k,"/api/app/students")}).then((function(e){t=e.data}));case 4:this.setState({appData:{students:t,classes:a},isLoadingAppData:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"/api/account/authenticated"}).then((function(e){var a=e.data.authenticated;t.setState({authenticated:a}),a?t.getPlaythrough():t.setState({isLoadingUserData:!1})})).catch((function(e){console.log(e)}));case 2:return e.next=4,this.getAppData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoadingAppData,n=t.isLoadingUserData,l=t.authenticated,s=t.playthrough,c=t.appData;if(a||n)return r.a.createElement(j,null);var i=S(T),u=S(fe),o=S(Ne),m=S(Ie),h=S(Be),d=S(Ue),p=S(Ae),f=S(Pe),g=S(Me),v=S(Fe);return r.a.createElement("div",{id:"App",className:s?J(s.house):""},r.a.createElement(y.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(u,{authenticated:l,authenticateUser:e.authenticateUser,playthrough:s,appStudents:c.students,logOut:e.logOut,isLoadingUserData:a})}}),r.a.createElement(b.a,{path:"/login",render:function(){return r.a.createElement(D,{playthrough:s,authenticateUser:e.authenticateUser})}}),r.a.createElement(b.a,{path:"/signup",render:function(){return r.a.createElement(A,{authenticateUser:e.authenticateUser})}}),r.a.createElement(b.a,{path:"/new_playthrough",render:function(){return r.a.createElement(i,{authenticated:l,getPlaythrough:e.getPlaythrough})}}),r.a.createElement(b.a,{path:"/student/:name",render:function(){return r.a.createElement(o,{authenticated:l,playthrough:s,selectClass:e.selectClass,selectSkill:e.selectSkill,removeStudent:e.removeStudent,appStudents:c.students})}}),r.a.createElement(b.a,{path:"/select_classes/:name",render:function(){return r.a.createElement(m,{authenticated:l,playthrough:s,selectClassGoal:e.selectClassGoal,appData:c})}}),r.a.createElement(b.a,{path:"/add_student",render:function(){return r.a.createElement(h,{authenticated:l,playthrough:s,addStudents:e.addStudents})}}),r.a.createElement(b.a,{path:"/info",render:function(){return r.a.createElement(d,{authenticated:l})}}),r.a.createElement(b.a,{path:"/gifts",render:function(){return r.a.createElement(p,{authenticated:l,playthrough:s,appStudents:c.students})}}),r.a.createElement(b.a,{path:"/lost_items",render:function(){return r.a.createElement(f,{authenticated:l,playthrough:s,appStudents:c.students})}}),r.a.createElement(b.a,{path:"/faculty_training",render:function(){return r.a.createElement(g,{authenticated:l,appData:c})}}),r.a.createElement(b.a,{path:"/tea_party",render:function(){return r.a.createElement(v,{authenticated:l,appData:c})}}),r.a.createElement(b.a,{path:"/dev_notes",component:qe}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.e5b6f2c8.chunk.js.map