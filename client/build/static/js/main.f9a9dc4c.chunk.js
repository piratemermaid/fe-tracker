(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},120:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),l=a.n(s),c=(a(100),a(35)),u=a(14),i=a.n(u),o=a(29),h=a(17),m=a(18),d=a(26),p=a(20),f=a(19),g=a(6),v=a.n(g),y=a(12),E=a.n(y),b=a(10),k=a(24),S="http://fethtracker.arielschnur.com",w=(a(120),function(e){var t=function(t){Object(p.a)(n,t);var a=Object(f.a)(n);function n(){return Object(h.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.checkAndRedirect()}},{key:"componentDidUpdate",value:function(){this.checkAndRedirect()}},{key:"checkAndRedirect",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"/api/account/authenticated"}).then((function(e){e.data.authenticated||t.props.history.push("/login")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.props.authenticated?r.a.createElement(e,this.props):null)}}]),n}(r.a.Component);return Object(k.f)(t)}),O=a(46),N=a(158),C=a(166),j=a(163),x=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",errorMessage:null},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.username,r=a.password;E()({method:"post",url:"/api/account/login",params:{username:n,password:r}}).then((function(e){"success"===e.data.login&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}},{key:"useDemoAccount",value:function(e){this.setState({username:"testuser",password:"userpass12"}),this.onSubmit(e)}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(O.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,s=t.errorMessage;return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Log In"),r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"password",value:n,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement("div",{className:"form-error"},s),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Log In"),r.a.createElement("br",null),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.useDemoAccount(t)}},"Demo Account"),r.a.createElement("div",null,"Don't have an account yet?"," ",r.a.createElement(b.b,{to:"/signup"},"Sign Up")))))}}]),a}(n.Component),B=Object(k.f)(x),_=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",passwordMatch:"",errorMessage:null},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.validateFields();if(a)this.setState({errorMessage:a});else{var n=this.state,r=n.username,s=n.password,l=n.passwordMatch,c=n.email;E()({method:"post",url:"/api/account/signup",params:{username:r,password:s,passwordMatch:l,email:c}}).then((function(e){"success"===e.data.signup&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(O.a)({},t,e.target.value))}},{key:"validateFields",value:function(){var e=this.state,t=e.username,a=e.password,n=e.passwordMatch,r=e.email;return t?r?a?n?t.length<8?"Please enter a longer username":a.length<10?"Please enter a password of at least 10 characters":n!==a?"Please enter a matching password":I?void 0:"Invalid email":"Please enter a matching password":"Please enter a password":"Please enter an email":"Please enter a username"}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,s=t.password,l=t.passwordMatch,c=t.errorMessage;return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"email",value:n,onChange:function(t){return e.onInputChange(t,"email")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"password",value:s,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement(N.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"passwordMatch",value:l,onChange:function(t){return e.onInputChange(t,"passwordMatch")}})),r.a.createElement("div",{className:"form-error"},c),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Sign Up"))),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(b.b,{to:"/login"},"Log In")))}}]),a}(n.Component);function I(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var U=Object(k.f)(_),D=a(34),P=a.n(D),M=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).startNewPlaythrough=function(){var e=n.state,t=e.house,a=e.byleth;E()({method:"post",url:"api/user/new_playthrough",params:{house:t,byleth:a}}).then((function(e){"success"===e.data&&(n.props.history.push("/"),n.props.getStudentOrder(),n.props.getPlaythrough())})).catch((function(e){console.log(e)}))},n.state={house:null,byleth:null},n}return Object(m.a)(a,[{key:"selectHouse",value:function(e){this.setState({house:e})}},{key:"selectByleth",value:function(e){this.setState({byleth:e})}},{key:"houseButtonUI",value:function(e){var t=this,a="/img/banners/".concat(e.replace(/\s+/g,"_"),"_Banner.png"),n="banner-choice new-playthrough-choice";return this.state.house===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(N.a,{item:!0,xs:4,onClick:function(){return t.selectHouse(e)}},r.a.createElement("img",{src:a,className:n,alt:e,title:e}))}},{key:"bylethButtonUI",value:function(e){var t=this,a="/img/students/Byleth_".concat(e,".png"),n="byleth-choice new-playthrough-choice";return this.state.byleth===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(N.a,{item:!0,xs:4,onClick:function(){return t.selectByleth(e)}},r.a.createElement("img",{src:a,className:n,alt:"Byleth-".concat(e),title:"Byleth-".concat(e)}))}},{key:"submitButtonUI",value:function(){return this.state.house&&this.state.byleth?r.a.createElement(j.a,{className:"button ".concat(this.state.house.replace(/\s+/g,"")),variant:"contained",color:"primary",onClick:this.startNewPlaythrough},"Start!"):r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",disabled:!0},"Start")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.b,{to:"/"},r.a.createElement(P.a,null)),r.a.createElement("div",{className:"padding center"},r.a.createElement("h1",null,"New Playthrough"),r.a.createElement("h2",null,"Select House"),r.a.createElement(N.a,{container:!0,spacing:2},this.houseButtonUI("Black Eagles"),this.houseButtonUI("Blue Lions"),this.houseButtonUI("Golden Deer")),r.a.createElement("h2",null,"Select Byleth"),r.a.createElement(N.a,{container:!0,justify:"center",spacing:2},this.bylethButtonUI("M"),this.bylethButtonUI("F")),this.submitButtonUI()))}}]),a}(n.Component),A=Object(k.f)(M);function G(e){if(e.length<1)return null;var t=e.filter((function(e){if(!e.certified)return e}));return t.length<1?null:function(e){var t=["Beginner","Intermediate","Advanced","Master","DLC","Unique"];return e.sort((function(e,a){return v.a.indexOf(t,e.type)-v.a.indexOf(t,a.type)}))}(t)[0]}function L(e,t){var a=["D","D+","C","C+","B","B+","A","A+","S"];return!!e&&v.a.indexOf(a,e)>=v.a.indexOf(a,t)}function R(e){return e.replace(/\s+/g,"")}function F(e){var t=[];for(var a in e){var n=e[a],s=n.name,l=n.level;t.push(r.a.createElement("span",{key:s},s," ",l)),a<e.length-1&&t.push(", ")}return t}function q(e){switch(e){case"Black Eagles":return"rgb(206, 54, 87)";case"Blue Lions":return"rgb(77, 95, 169)";default:return"rgb(223, 192, 74)"}}var z=function(e){var t=e.name,a=e.byleth_gender,n=e.house,s="/img/students/".concat(t,".png");return"Byleth"===t&&(s="/img/students/Byleth_".concat(a,".png")),r.a.createElement("img",{src:s,className:"roster-img ".concat(n.replace(/\s+/g,"")),alt:t,title:t})},H=a(83),W=a.n(H),J=function(e){var t=e.student,a=t.name,n=t.classes,s=(t.skills,e.appStudents),l=e.byleth_gender,c=e.house,u=G(n),i=v.a.find(s,{name:a});return r.a.createElement("div",{key:a,className:"roster-row"},r.a.createElement(b.b,{to:"/student/".concat(a),className:"no-link-style"},r.a.createElement(N.a,{container:!0,spacing:3,alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:3},r.a.createElement(z,{name:a,byleth_gender:l,house:"Byleth"!==a?i.house:c})),r.a.createElement(N.a,{item:!0,xs:8,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},a),r.a.createElement("p",null,n.length>0?r.a.createElement("span",null,"Next class: ",function(e){var t=e.name,a=e.type;return r.a.createElement("span",null,t," (",a,")")}(u)):"No classes set"),r.a.createElement("p",null,u?r.a.createElement("span",null,"Skills needed:"," ",F(u.classSkills)):null)),r.a.createElement(N.a,{item:!0,xs:1},r.a.createElement(W.a,null)))))},T=a(84),Z=a.n(T),$=function(e){if(!e.playthrough||!e.studentOrder)return r.a.createElement("div",{className:"padding"},r.a.createElement("h1",null,"No playthrough found."),r.a.createElement(b.b,{to:"/new_playthrough"},r.a.createElement(j.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary"},"Start New Playthrough")));var t=e.studentOrder,a=e.playthrough,n=a.house,s=a.byleth_gender,l=a.students.sort((function(e,a){return v.a.findIndex(t,{name:e.name})-v.a.findIndex(t,{name:a.name})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"padding"},r.a.createElement("h1",null,n," Roster",r.a.createElement("span",{style:{float:"right"}},r.a.createElement(b.b,{to:"/add_student"},r.a.createElement(Z.a,null))))),r.a.createElement("ul",null,l.map((function(t){return r.a.createElement(J,{key:t.name,student:t,byleth_gender:s,house:n,appStudents:e.appStudents})}))),r.a.createElement("div",{className:"center footer"},r.a.createElement(b.b,{to:"/new_playthrough"},r.a.createElement(j.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary"},"Start New Playthrough"))))},K=a(162),Q=a(86),V=a.n(Q),X=a(87),Y=a.n(X),ee=a(170),te=a(167),ae=a(85),ne=a.n(ae),re=Object(k.f)((function(e){if(!e.playthrough)return"loading...";var t=e.match.params.name,a=v.a.find(e.playthrough.students,{name:t}),n=a.classes,s=a.skills,l=v.a.find(e.appStudents,{name:t}),u=G(n),i=v.a.compact([u]),o=v.a.compact(v.a.filter(n,{certified:!0})),h=v.a.compact(n.filter((function(e){if(!e.certified&&e.name!==u.name)return e}))),m=function(a,n){return n.length<1?r.a.createElement("div",null,r.a.createElement("h2",null,a),"None","current"===a?r.a.createElement("span",null," ","-"," ",r.a.createElement(b.b,{to:"/select_classes/".concat(t)},"Set now")):null):r.a.createElement("div",null,r.a.createElement("h2",null,a),n.length>0?n.map((function(t){var a=t.name,n=t.classSkills,l=t.certified,u=!1;!l&&n.length>0&&(n.filter((function(e){var t=v.a.find(s,{name:e.name});if(t&&L(t.level,e.level))return e})).length===n.length&&(u=!0));return r.a.createElement(K.a,{className:"goal-row",elevation:1,key:a},r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("h3",null,"Class"),r.a.createElement(ee.a,{control:r.a.createElement(te.a,{checked:l,onChange:function(t){return function(t,a){e.selectClass({studentName:e.match.params.name,className:a})}(0,a)},style:{color:q(e.playthrough.house)}}),label:a}),u?r.a.createElement(ne.a,{style:{color:q(e.playthrough.house)}}):null),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("h3",null,"Skills Required"),n.map((function(t){var a=function(e,t){var a=v.a.filter(e,{name:t});if(a.length<1)return null;if(1===a.length)return a[0].level;var n,r="E",s=Object(c.a)(a);try{for(s.s();!(n=s.n()).done;){var l=n.value.level;l<r&&(r=l)}}catch(u){s.e(u)}finally{s.f()}return r}(s,t.name);return r.a.createElement(ee.a,{control:r.a.createElement(te.a,{checked:L(a,t.level),onChange:function(a){return function(t,a){e.selectSkill({studentName:e.match.params.name,skillName:a.name,level:a.level})}(0,t)},style:{color:q(e.playthrough.house)}}),label:"".concat(t.name," ").concat(t.level)})})))))})):r.a.createElement("div",null,"none"))};return r.a.createElement("div",{style:{width:"100%"},className:"padding"},r.a.createElement(b.b,{to:"/"},r.a.createElement(P.a,null)),r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:5},r.a.createElement(z,{name:t,byleth_gender:e.playthrough.byleth_gender,house:"Byleth"!==t?l.house:e.playthrough.house})),r.a.createElement(N.a,{item:!0,xs:7,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},t," ",r.a.createElement(b.b,{to:"/select_classes/".concat(t)},r.a.createElement(V.a,{fontSize:"small",style:{color:q(e.playthrough.house)}}))),r.a.createElement("p",null,"Next class:"," ",u?"".concat(u.name," (").concat(u.type,"}"):"none"),r.a.createElement("p",null,"Skills needed:"," ",u?F(u.classSkills):"n/a"," "))),m("current",i),h.length>0?m("upcoming",h):null,m("completed",o),r.a.createElement("div",{className:"footer center",style:{marginTop:"20px"},onClick:function(){return function(t){E()({method:"post",url:"/api/user/remove_student",params:{name:t}}).then((function(a){"success"===a.data&&(e.removeStudent(t),e.history.push("/"))}))}(t)}},r.a.createElement(Y.a,{style:{position:"relative",top:"7px"}}),r.a.createElement("span",null," Remove from Roster")))})),se=a(168),le=a(164),ce=a(165),ue=a(88),ie=a.n(ue),oe=function(e){var t=e.studentClasses,a=e.type,n=e.filters,s=!1,l=v.a.compact(e.studentClasses.map((function(e){if(e.type===a)return e.name})));l.length>0&&(s=!0);return r.a.createElement("div",{style:{marginBottom:"4px"}},r.a.createElement(se.a,null,r.a.createElement(le.a,{expandIcon:r.a.createElement(ie.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",className:s?"".concat(R(e.house),"-bg"):null},e.type,s?" (".concat(l.join(", "),")"):null),r.a.createElement(ce.a,null,r.a.createElement("ul",{style:{width:"100%"}},e.classes.map((function(a){var s=a.name,l=a.skills,u=a.abilities,i=a.mastery_ability,o=a.mastery_combat_art;if(!function(e){if(n.length<1)return!0;var t,a=Object(c.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(n.includes(r.name))return!0}}catch(s){a.e(s)}finally{a.f()}}(l))return null;var h=!1,m=!1,d=v.a.find(t,{name:s});d&&(h=!0,d.certified&&(m=!0));var p="set-class";return p+=m?" certified":h?" ".concat(R(e.house),"-bg"):" unset",r.a.createElement("li",{key:s,className:p,onClick:function(){return e.selectClassGoal({studentName:e.student,className:s})}},r.a.createElement("span",{className:"class-name"},s,m?" (Certified)":null),r.a.createElement("br",null),"Skills required:"," ",F(l),r.a.createElement("br",null),"Class abilities: ",u||"none",r.a.createElement("br",null),"Class mastery:"," ",i?r.a.createElement("span",null,"Ability ",i):null,i&&o?", ":null,o?r.a.createElement("span",null,"Combat Art ",o):null)}))))))},he=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={classes:{},filters:[]},n}return Object(m.a)(a,[{key:"onFilterChange",value:function(e){var t=this.state.filters;if(t.includes(e)){var a=v.a.findIndex(t,{name:e});t.splice(a,1)}else t.push(e);this.setState({filters:t})}},{key:"componentDidMount",value:function(){this.props.appData&&this.setState({classes:this.props.appData.classes})}},{key:"render",value:function(){var e=this;if(!this.props.playthrough)return"loading...";var t=this.props.match.params.name,a=v.a.find(this.props.appData.students,{name:t}).skills.filter((function(e){if(e.proficient||e.budding)return e})),n=this.props.playthrough,s=n.students,l=n.house;return r.a.createElement("div",{className:"padding"},r.a.createElement(P.a,{onClick:function(){e.props.history.push("/student/".concat(t))}}),r.a.createElement("h1",null,"Select Classes for ",t),r.a.createElement("div",{className:"skill-filters"},a.map((function(t){var a=t.name;return r.a.createElement("img",{key:a,onClick:function(){return e.onFilterChange(a)},className:"skill-filter".concat(e.state.filters.includes(a)?" filter-selected":""),src:"/img/skills/".concat(R(a),".png"),alt:a,title:a})}))),["Beginner","Intermediate","Advanced","Master","Unique","DLC"].map((function(a){var n=v.a.find(s,{name:t});return r.a.createElement(oe,{type:a,student:t,classes:v.a.filter(e.state.classes,{type:a}),studentClasses:n.classes,house:l,selectClassGoal:e.props.selectClassGoal,key:a,filters:e.state.filters})})))}}]),a}(n.Component),me=function(e){var t=e.skills;return r.a.createElement("div",null,["proficient","budding","weakness"].map((function(e){var a=v.a.filter(t,Object(O.a)({},e,!0));if(a.length>0)return r.a.createElement("div",null,function(e,t){if("proficient"===e)return t?"Proficient in: ":"No proficient skills";if("budding"===e){if(t)return"Budding talent: "}else if(t)return"Weaknesses: "}(e,!0),function(e){var t=[];for(var a in e){var n=e[a].name;t.push(r.a.createElement("span",{key:n},n)),a<e.length-1&&t.push(", ")}return t}(a))})))},de=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={availableStudents:[],selectedStudents:[]},n}return Object(m.a)(a,[{key:"addStudent",value:function(e){var t=this.state.selectedStudents;if(t.includes(e)){var a=v.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({selectedStudents:t})}},{key:"renderAvailableStudents",value:function(){var e,t=this,a=this.state,n=a.availableStudents,s=a.selectedStudents,l=[],u=null,i=Object(c.a)(n);try{var o=function(){var a=e.value,n=a.name,c=a.gender,i=a.house,o=a.skills;u&&u===i||(u=i,l.push(r.a.createElement("h2",{className:"padding",key:i},i))),l.push(r.a.createElement(N.a,{container:!0,className:"roster-row add-student-row".concat(s.includes(n)?" add-student-selected ".concat(i.replace(/\s+/g,"")):null),key:n,onClick:function(){return t.addStudent(n)}},r.a.createElement(N.a,{item:!0,xs:4},r.a.createElement(z,{name:n,byleth_gender:c||"F",house:i})),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement("p",{className:"roster-name",style:{marginTop:0}},n),r.a.createElement(me,{skills:o}))))};for(i.s();!(e=i.n()).done;)o()}catch(h){i.e(h)}finally{i.f()}return l}},{key:"componentDidMount",value:function(){var e=this;this.props.playthrough&&this.props.playthrough.students&&E()({method:"get",url:"/api/app/students"}).then((function(t){e.setState({availableStudents:t.data.filter((function(t){if(t.recruitable&&!v.a.find(e.props.playthrough.students,{name:t.name}))return t}))})}))}},{key:"render",value:function(){var e=this,t=this.state.selectedStudents;return this.props.playthrough&&this.props.playthrough.students?r.a.createElement("div",null,r.a.createElement(b.b,{to:"/"},r.a.createElement(P.a,null)),r.a.createElement("h1",{className:"padding"},"Add Students"),r.a.createElement("ul",null,this.renderAvailableStudents()),r.a.createElement("div",{className:"center footer"},r.a.createElement(b.b,{to:"/"},r.a.createElement(j.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary",onClick:function(){return e.props.addStudents(t)},disabled:t.length<1},"Add")))):"loading..."}}]),a}(n.Component),pe=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).logOut=function(){E()({method:"get",url:"/api/account/logout"}).then((function(e){"success"===e.data.logout&&(n.authenticateUser(!1),n.props.history.push("/"))})).catch((function(e){console.log(e)}))},n.state={authenticated:!1,playthrough:null,appData:null},n.authenticateUser=n.authenticateUser.bind(Object(d.a)(n)),n.getPlaythrough=n.getPlaythrough.bind(Object(d.a)(n)),n.selectClassGoal=n.selectClassGoal.bind(Object(d.a)(n)),n.selectClass=n.selectClass.bind(Object(d.a)(n)),n.selectSkill=n.selectSkill.bind(Object(d.a)(n)),n.addStudents=n.addStudents.bind(Object(d.a)(n)),n.removeStudent=n.removeStudent.bind(Object(d.a)(n)),n.getStudentOrder=n.getStudentOrder.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"authenticateUser",value:function(e){this.setState({authenticated:e})}},{key:"getPlaythrough",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"".concat(S,"/api/user/playthrough")}).then((function(e){t.setState({playthrough:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"selectClassGoal",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,E()({method:"post",url:"/api/user/update_student_class_goal",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectClass",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,E()({method:"post",url:"/api/user/update_student_class",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectSkill",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.skillName,r=t.level,e.next=3,E()({method:"post",url:"/api/user/update_student_skill",params:{studentName:a,skillName:n,level:r}}).then((function(e){"success"===e.data&&s.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"addStudents",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E()({method:"post",url:"/api/user/add_students",params:{names:t}}).then((function(e){"success"===e.data&&(a.getPlaythrough(),a.getStudentOrder())}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeStudent",value:function(){this.getPlaythrough()}},{key:"getAppData",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"".concat(S,"/api/app/classes")}).then((function(e){a=e.data}));case 2:return e.next=4,E()({method:"get",url:"".concat(S,"/api/app/students")}).then((function(e){t=e.data}));case 4:this.setState({appData:{students:t,classes:a}});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStudentOrder",value:function(){var e=this.state,t=e.playthrough,a=e.appData,n=[];if(t&&a){var r=t.house,s=a.students;(n=s.filter((function(e){if(e.house===r)return e}))).unshift({name:"Byleth"});var l,u=Object(c.a)(s);try{for(u.s();!(l=u.n()).done;){var i=l.value;v.a.find(n,{name:i.name})||n.push(i)}}catch(o){u.e(o)}finally{u.f()}this.setState({studentOrder:n})}}},{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({method:"get",url:"/api/account/authenticated"}).then((function(e){var a=e.data.authenticated;t.setState({authenticated:a}),a&&t.getPlaythrough()})).catch((function(e){console.log(e)}));case 2:return e.next=4,this.getAppData();case 4:this.getStudentOrder();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.authenticated,n=t.playthrough,s=t.appData,l=t.studentOrder;if(!s)return"loading...";var c=w(A),u=w($),i=w(re),o=w(he),h=w(de);return r.a.createElement("div",{id:"App"},r.a.createElement(b.a,null,r.a.createElement("header",null,a?r.a.createElement("nav",{className:"right"},r.a.createElement(b.b,{to:"/login",onClick:this.logOut},"Log Out")):null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement(u,{authenticated:a,authenticateUser:e.authenticateUser,playthrough:n,appStudents:s.students,studentOrder:l})}}),r.a.createElement(k.a,{path:"/login",render:function(){return r.a.createElement(B,{playthrough:n,authenticateUser:e.authenticateUser})}}),r.a.createElement(k.a,{path:"/signup",render:function(){return r.a.createElement(U,{authenticateUser:e.authenticateUser})}}),r.a.createElement(k.a,{path:"/new_playthrough",render:function(){return r.a.createElement(c,{authenticated:a,getPlaythrough:e.getPlaythrough,getStudentOrder:e.getStudentOrder})}}),r.a.createElement(k.a,{path:"/student/:name",render:function(){return r.a.createElement(i,{authenticated:a,playthrough:n,selectClass:e.selectClass,selectSkill:e.selectSkill,removeStudent:e.removeStudent,appStudents:s.students})}}),r.a.createElement(k.a,{path:"/select_classes/:name",render:function(){return r.a.createElement(o,{authenticated:a,playthrough:n,selectClassGoal:e.selectClassGoal,appData:s})}}),r.a.createElement(k.a,{path:"/add_student",render:function(){return r.a.createElement(h,{authenticated:a,playthrough:n,addStudents:e.addStudents})}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(126)}},[[95,1,2]]]);
//# sourceMappingURL=main.f9a9dc4c.chunk.js.map