(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},124:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a.n(l),c=(a(104),a(14)),u=a.n(c),i=a(30),o=a(17),m=a(18),h=a(31),d=a(20),p=a(19),f=a(6),g=a.n(f),v=a(12),y=a.n(v),E=a(9),b=a(25),k="http://fethtracker.arielschnur.com",S=(a(124),function(e){var t=function(t){Object(d.a)(n,t);var a=Object(p.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.checkAndRedirect()}},{key:"componentDidUpdate",value:function(){this.checkAndRedirect()}},{key:"checkAndRedirect",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"get",url:"/api/account/authenticated"}).then((function(e){e.data.authenticated||t.props.history.push("/login")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.props.authenticated?r.a.createElement(e,this.props):null)}}]),n}(r.a.Component);return Object(b.f)(t)}),w=function(){return r.a.createElement("div",{id:"App"},"loading...")},N=a(45),O=a(165),C=a(175),j=a(170),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",errorMessage:null},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.username,r=a.password;y()({method:"post",url:"/api/account/login",params:{username:n,password:r}}).then((function(e){"success"===e.data.login&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}},{key:"useDemoAccount",value:function(e){this.setState({username:"testuser",password:"userpass12"}),this.onSubmit(e)}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(N.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=t.errorMessage;return r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Log In"),r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"password",value:n,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement("div",{className:"form-error"},l),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Log In"),r.a.createElement("br",null),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.useDemoAccount(t)}},"Demo Account"),r.a.createElement("div",null,"Don't have an account yet?"," ",r.a.createElement(E.b,{to:"/signup"},"Sign Up")))))}}]),a}(n.Component),B=Object(b.f)(x),_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:"",passwordMatch:"",errorMessage:null},n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.validateFields();if(a)this.setState({errorMessage:a});else{var n=this.state,r=n.username,l=n.password,s=n.passwordMatch,c=n.email;y()({method:"post",url:"/api/account/signup",params:{username:r,password:l,passwordMatch:s,email:c}}).then((function(e){"success"===e.data.signup&&(t.props.authenticateUser(!0),t.props.history.push("/"))})).catch((function(e){t.setState({errorMessage:e.response.data})}))}}},{key:"onInputChange",value:function(e,t){this.setState({errorMessage:null}),this.setState(Object(N.a)({},t,e.target.value))}},{key:"validateFields",value:function(){var e=this.state,t=e.username,a=e.password,n=e.passwordMatch,r=e.email;return t?r?a?n?t.length<8?"Please enter a longer username":a.length<10?"Please enter a password of at least 10 characters":n!==a?"Please enter a matching password":D?void 0:"Invalid email":"Please enter a matching password":"Please enter a password":"Please enter an email":"Please enter a username"}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,l=t.password,s=t.passwordMatch,c=t.errorMessage;return r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"username",value:a,onChange:function(t){return e.onInputChange(t,"username")}})),r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"text",label:"email",value:n,onChange:function(t){return e.onInputChange(t,"email")}})),r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"password",value:l,onChange:function(t){return e.onInputChange(t,"password")}})),r.a.createElement(O.a,{item:!0,className:"auth-input"},r.a.createElement(C.a,{type:"password",label:"passwordMatch",value:s,onChange:function(t){return e.onInputChange(t,"passwordMatch")}})),r.a.createElement("div",{className:"form-error"},c),r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",onClick:function(t){return e.onSubmit(t)}},"Sign Up"))),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(E.b,{to:"/login"},"Log In")))}}]),a}(n.Component);function D(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var U=Object(b.f)(_),A=a(84),I=a.n(A),L=function(e){return r.a.createElement("div",{id:"back-button"},r.a.createElement(E.b,{to:e.url?e.url:"/"},r.a.createElement(I.a,null)))},P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).startNewPlaythrough=function(){var e=n.state,t=e.house,a=e.byleth;y()({method:"post",url:"api/user/new_playthrough",params:{house:t,byleth:a}}).then((function(e){"success"===e.data&&(n.props.history.push("/"),n.props.getPlaythrough())})).catch((function(e){console.log(e)}))},n.state={house:null,byleth:null},n}return Object(m.a)(a,[{key:"selectHouse",value:function(e){this.setState({house:e})}},{key:"selectByleth",value:function(e){this.setState({byleth:e})}},{key:"houseButtonUI",value:function(e){var t=this,a="/img/banners/".concat(e.replace(/\s+/g,"_"),"_Banner.png"),n="banner-choice new-playthrough-choice";return this.state.house===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(O.a,{item:!0,xs:4,onClick:function(){return t.selectHouse(e)}},r.a.createElement("img",{src:a,className:n,alt:e,title:e}))}},{key:"bylethButtonUI",value:function(e){var t=this,a="/img/students/Byleth_".concat(e,".png"),n="byleth-choice new-playthrough-choice";return this.state.byleth===e&&(n+=" new-playthrough-choice-selected"),r.a.createElement(O.a,{item:!0,xs:4,onClick:function(){return t.selectByleth(e)}},r.a.createElement("img",{src:a,className:n,alt:"Byleth-".concat(e),title:"Byleth-".concat(e)}))}},{key:"submitButtonUI",value:function(){return this.state.house&&this.state.byleth?r.a.createElement(j.a,{className:"button ".concat(this.state.house.replace(/\s+/g,"")),variant:"contained",color:"primary",onClick:this.startNewPlaythrough},"Start!"):r.a.createElement(j.a,{className:"button",variant:"contained",color:"primary",disabled:!0},"Start")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{className:"padding center"},r.a.createElement("h2",null,"New Playthrough"),r.a.createElement("h3",null,"Select House"),r.a.createElement(O.a,{container:!0,spacing:2},this.houseButtonUI("Black Eagles"),this.houseButtonUI("Blue Lions"),this.houseButtonUI("Golden Deer")),r.a.createElement("h3",null,"Select Byleth"),r.a.createElement(O.a,{container:!0,justify:"center",spacing:2},this.bylethButtonUI("M"),this.bylethButtonUI("F")),this.submitButtonUI()))}}]),a}(n.Component),M=Object(b.f)(P),R=a(37);function F(e){if(!e||e&&e.length<1)return null;var t=e.filter((function(e){if(!e.certified)return e}));return t.length<1?null:q(t)[0]}function q(e){var t=["Beginner","Intermediate","Advanced","Master","DLC","Unique"];return e.sort((function(e,a){return g.a.indexOf(t,e.type)-g.a.indexOf(t,a.type)}))}function G(e){var t=e.studentSkillLevel,a=e.reqLevel,n=["D","D+","C","C+","B","B+","A","A+","S"];return!!t&&g.a.indexOf(n,t)>=g.a.indexOf(n,a)}function T(e){var t=e.skills,a=e.classSkills;return a.filter((function(e){var a=g.a.find(t,{name:e.name});if(a&&G({studentSkillLevel:a.level,reqLevel:e.level}))return e})).length===a.length}function H(e){return e.replace(/\s+/g,"")}function W(e){return e.map((function(e){var t=e.name,a=e.level;return r.a.createElement("span",{className:"skill-icon",key:t},r.a.createElement("img",{src:"/img/skills/".concat(H(t),".png"),alt:t,title:t}),a)}))}function z(e){if(e.length>0)return e.map((function(e){var t=e.name;return r.a.createElement("img",{src:"/img/skills/".concat(H(t),".png"),className:"skill-icon",alt:t,title:t})}))}function J(e){switch(e){case"Black Eagles":return"rgb(206, 54, 87)";case"Blue Lions":return"rgb(77, 95, 169)";default:return"rgb(223, 192, 74)"}}var K=function(e){var t=e.name,a=e.byleth_gender,n=e.house,l="/img/students/".concat(t,".png");return"Byleth"===t&&(l="/img/students/Byleth_".concat(a,".png")),r.a.createElement("img",{src:l,className:"roster-img ".concat(n.replace(/\s+/g,"")),alt:t,title:t})},Z=a(85),$=a.n(Z),Q=a(59),V=a.n(Q),X=function(e){var t=e.student,a=t.name,n=t.classes,l=t.skills,s=e.appStudents,c=e.byleth_gender,u=e.house,i=F(n),o=function(e){var t=e.classes,a=e.skills;if(!(t&&t.length>0))return[];var n,r=q(t),l=Object(R.a)(r);try{for(l.s();!(n=l.n()).done;){var s=n.value,c=s.certified,u=s.classSkills;if(!c&&!T({skills:a,classSkills:u}))return u}}catch(i){l.e(i)}finally{l.f()}}({classes:n,skills:l}),m=g.a.find(s,{name:a}),h=!1;return i&&(h=T({skills:l,classSkills:i.classSkills})),r.a.createElement("div",{key:a,className:"roster-row"},r.a.createElement(E.b,{to:"/student/".concat(a),className:"no-link-style"},r.a.createElement(O.a,{container:!0,spacing:3},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(K,{name:a,byleth_gender:c,house:"Byleth"!==a?m.house:u})),r.a.createElement(O.a,{item:!0,xs:8,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},a," ",h?r.a.createElement("span",null,r.a.createElement(V.a,{className:"ready-for-cert",style:{color:J(u)}})):null),r.a.createElement("p",null,n.length>0?r.a.createElement("span",null,h?"Ready for cert":"Next class",": ",function(e){var t=e.name,a=e.type;return r.a.createElement("span",null,t," (",a,")")}(i)):"No classes set"),r.a.createElement("p",null,o&&o.length>0?r.a.createElement("span",null,"Next goals:"," ",o?W(g.a.compact(o.map((function(e){var t=g.a.find(l,{name:e.name});if(!t||!G({studentSkillLevel:t.level,reqLevel:e.level}))return e})))):"none"):null)),r.a.createElement(O.a,{item:!0,xs:1},r.a.createElement($.a,{className:"right-arrow"})))))},Y=a(171),ee=a(172),te=a(86),ae=a.n(te),ne=a(87),re=a.n(ne),le=a(88),se=a.n(le),ce=a(89),ue=a.n(ce),ie=Object(b.f)((function(e){return r.a.createElement(Y.a,null,r.a.createElement(E.b,{to:"/new_playthrough"},r.a.createElement(ee.a,{label:"Recents",value:"recents",icon:r.a.createElement(ae.a,null)})),r.a.createElement(E.b,{to:"/gifts"},r.a.createElement(ee.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(re.a,null)}))," ",r.a.createElement(E.b,{to:"/dev_notes"},r.a.createElement(ee.a,{label:"Folder",value:"folder",icon:r.a.createElement(se.a,null)})),r.a.createElement(E.b,{to:"/",onClick:function(){window.confirm("Do you want to log out?")&&e.logOut()}},r.a.createElement(ee.a,{label:"Folder",value:"folder",icon:r.a.createElement(ue.a,null)})))})),oe=a(90),me=a.n(oe),he=function(e){if(e.isLoadingUserData)return r.a.createElement(w,null);if(!e.playthrough)return r.a.createElement("div",{className:"padding"},r.a.createElement("h2",null,"No playthrough found."),r.a.createElement(E.b,{to:"/new_playthrough"},r.a.createElement(j.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary"},"Start New Playthrough")));var t=e.playthrough,a=t.house,n=t.byleth_gender,l=t.students;return r.a.createElement("div",null,r.a.createElement("div",{className:"padding"},r.a.createElement("h2",null,a," Roster",r.a.createElement("span",{style:{float:"right"}},r.a.createElement(E.b,{to:"/add_student"},r.a.createElement(me.a,null))))),r.a.createElement("ul",null,l.map((function(t){return r.a.createElement(X,{key:t.name,student:t,byleth_gender:n,house:a,appStudents:e.appStudents})}))),r.a.createElement(ie,{logOut:e.logOut}))},de=a(169),pe=a(91),fe=a.n(pe),ge=a(60),ve=a.n(ge),ye=a(179),Ee=a(176),be=Object(b.f)((function(e){if(!e.playthrough)return r.a.createElement(w,null);var t=e.match.params.name,a=g.a.find(e.playthrough.students,{name:t}),n=a.classes,l=a.skills,s=g.a.find(e.appStudents,{name:t}),c=F(n),u=g.a.compact([c]),i=g.a.compact(g.a.filter(n,{certified:!0})),o=g.a.compact(n.filter((function(e){if(!e.certified&&e.name!==c.name)return e}))),m=function(a,n){return n.length<1?r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement(de.a,{className:"goal-row",elevation:1,key:t},"None","current"===a?r.a.createElement("span",null," ","-"," ",r.a.createElement(E.b,{to:"/select_classes/".concat(t)},"Set now")):null)):r.a.createElement("div",null,r.a.createElement("h3",null,a),n.length>0?n.map((function(t){var a=t.name,n=t.classSkills,s=t.certified,c=!1;return!s&&n.length>0&&(c=T({skills:l,classSkills:n})),r.a.createElement(de.a,{className:"goal-row",elevation:1,key:a},r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement("h4",null,"Class"),r.a.createElement(ye.a,{control:r.a.createElement(Ee.a,{checked:s,onChange:function(t){return function(t,a){e.selectClass({studentName:e.match.params.name,className:a})}(0,a)},style:{color:J(e.playthrough.house)}}),label:a}),c?r.a.createElement(V.a,{style:{color:J(e.playthrough.house)}}):null),r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement("h4",null,"Skills Required"),n.length>0?n.map((function(t){var a=function(e,t){var a=g.a.filter(e,{name:t});if(a.length<1)return null;if(1===a.length)return a[0].level;var n,r="E",l=Object(R.a)(a);try{for(l.s();!(n=l.n()).done;){var s=n.value.level;s<r&&(r=s)}}catch(c){l.e(c)}finally{l.f()}return r}(l,t.name);return r.a.createElement(ye.a,{control:r.a.createElement(Ee.a,{checked:G({studentSkillLevel:a,reqLevel:t.level}),onChange:function(a){return function(t,a){e.selectSkill({studentName:e.match.params.name,skillName:a.name,level:a.level})}(0,t)},style:{color:J(e.playthrough.house)}}),label:"".concat(t.name," ").concat(t.level)})})):"None")))})):r.a.createElement("div",null,"none"))};return r.a.createElement("div",{id:"student-overview",style:{width:"100%"},className:"padding"},r.a.createElement(L,null),r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(K,{name:t,byleth_gender:e.playthrough.byleth_gender,house:"Byleth"!==t?s.house:e.playthrough.house})),r.a.createElement(O.a,{item:!0,xs:9,className:"roster-row-student"},r.a.createElement("p",{className:"roster-name"},t," ",r.a.createElement(E.b,{to:"/select_classes/".concat(t)},r.a.createElement(fe.a,{fontSize:"small",style:{color:J(e.playthrough.house)}}))),r.a.createElement("p",{className:"roster-desc"},"Next class:"," ",c?"".concat(c.name," (").concat(c.type,"}"):"none"),r.a.createElement("p",{className:"roster-desc"},"Skills needed:"," ",c?W(c.classSkills):"n/a"," "))),m("current",u),o.length>0?m("upcoming",o):null,m("completed",i),r.a.createElement("div",{className:"footer center",style:{marginTop:"20px"},onClick:function(){return function(t){y()({method:"post",url:"/api/user/remove_student",params:{name:t}}).then((function(a){"success"===a.data&&(e.removeStudent(t),e.history.push("/"))}))}(t)}},r.a.createElement(ve.a,{style:{position:"relative",top:"7px"}}),r.a.createElement("span",null," Remove from Roster")))})),ke=a(177),Se=a(173),we=a(174),Ne=a(92),Oe=a.n(Ne),Ce=function(e){var t=e.studentClasses,a=e.type,n=e.filters,l=!1,s=g.a.compact(e.studentClasses.map((function(e){if(e.type===a)return e.name})));s.length>0&&(l=!0);return r.a.createElement("div",{style:{marginBottom:"4px"}},r.a.createElement(ke.a,null,r.a.createElement(Se.a,{expandIcon:r.a.createElement(Oe.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",className:l?"".concat(H(e.house),"-bg"):null},e.type,l?" (".concat(s.join(", "),")"):null),r.a.createElement(we.a,null,r.a.createElement("ul",{style:{width:"100%"}},e.classes.map((function(a){var l=a.name,s=a.skills,c=a.abilities,u=a.student,i=a.mastery_ability,o=a.mastery_combat_art,m=function(e){if(n.length<1)return!0;var t,a=Object(R.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(n.includes(r.name))return!0}}catch(l){a.e(l)}finally{a.f()}}(s);if(u&&u!==e.student&&(m=!1),!m)return null;var h=!1,d=!1,p=g.a.find(t,{name:l});p&&(h=!0,p.certified&&(d=!0));var f="set-class";return f+=d?" certified":h?" ".concat(H(e.house),"-bg"):" unset",r.a.createElement("li",{key:l,className:f,onClick:function(){return e.selectClassGoal({studentName:e.student,className:l})}},r.a.createElement("span",{className:"class-name"},l,d?" (Certified)":null),r.a.createElement("br",null),"Skills required:"," ",W(s),r.a.createElement("br",null),"Class abilities: ",c||"none",r.a.createElement("br",null),"Class mastery:"," ",i?r.a.createElement("span",null,"Ability ",i):null,i&&o?", ":null,o?r.a.createElement("span",null,"Combat Art ",o):null)}))))))},je=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={classes:{},filters:[]},n}return Object(m.a)(a,[{key:"onFilterChange",value:function(e){var t=this.state.filters;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({filters:t})}},{key:"componentDidMount",value:function(){this.props.appData&&this.setState({classes:this.props.appData.classes})}},{key:"render",value:function(){var e=this;if(!this.props.playthrough)return r.a.createElement(w,null);var t=this.props.match.params.name,a=g.a.find(this.props.appData.students,{name:t}).skills.filter((function(e){if(e.proficient||e.budding)return e})),n=this.props.playthrough,l=n.students,s=n.house;return r.a.createElement("div",{className:"padding"},r.a.createElement(L,{url:"/student/".concat(t)}),r.a.createElement("h2",null,"Select Classes for ",t),r.a.createElement("div",{className:"skill-filters"},a.map((function(t){var a=t.name;return r.a.createElement("img",{key:a,onClick:function(){return e.onFilterChange(a)},className:"skill-filter".concat(e.state.filters.includes(a)?" filter-selected":""),src:"/img/skills/".concat(H(a),".png"),alt:a,title:a})}))),["Beginner","Intermediate","Advanced","Master","Unique","DLC"].map((function(a){var n=g.a.find(l,{name:t});return r.a.createElement(Ce,{type:a,student:t,classes:g.a.filter(e.state.classes,{type:a}),studentClasses:n.classes,house:s,selectClassGoal:e.props.selectClassGoal,key:a,filters:e.state.filters})})))}}]),a}(n.Component),xe=function(e){var t=e.skills;return r.a.createElement("div",null,["proficient","budding","weakness"].map((function(e){var a=g.a.filter(t,Object(N.a)({},e,!0));if(a.length>0)return r.a.createElement("div",null,function(e,t){if("proficient"===e)return t.length>0?r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("img",{src:"/img/skills/proficient.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Proficient",title:"Proficient"}),z(t))):"No proficient skills";if("budding"===e){if(t.length>0)return r.a.createElement("div",null,r.a.createElement("img",{src:"/img/skills/budding.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Budding",title:"Budding"}),z(t))}else if(t.length>0)return r.a.createElement("div",null,r.a.createElement("img",{src:"/img/skills/weakness.png",className:"skill-icon",style:{marginRight:"12px"},alt:"Weakness",title:"Weakness"}),z(t))}(e,a))})))},Be=["Sword","Lance","Axe","Bow","Brawl","Reason","Faith","Authority","Heavy Armor","Riding","Flying"],_e=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={availableStudents:[],selectedStudents:[],filters:[]},n}return Object(m.a)(a,[{key:"addStudent",value:function(e){var t=this.state.selectedStudents;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({selectedStudents:t})}},{key:"onFilterChange",value:function(e){var t=this.state.filters;if(t.includes(e)){var a=g.a.indexOf(t,e);t.splice(a,1)}else t.push(e);this.setState({filters:t})}},{key:"studentMeetsFilterReq",value:function(e){var t,a=this.state.filters,n=Object(R.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,l=r.name,s=r.proficient,c=r.budding;if(a.includes(l)&&(s||c))return!0}}catch(u){n.e(u)}finally{n.f()}return!1}},{key:"renderAvailableStudents",value:function(){var e,t=this,a=this.state.filters,n=this.state,l=n.availableStudents,s=n.selectedStudents,c=[],u=null,i=Object(R.a)(l);try{var o=function(){var n=e.value,l=n.name,i=n.gender,o=n.house,m=n.skills;u&&u===o||(u=o,c.push(r.a.createElement("h3",{className:"padding",key:o},o))),(a.length<1||t.studentMeetsFilterReq(m))&&c.push(r.a.createElement(O.a,{container:!0,className:"roster-row add-student-row".concat(s.includes(l)?" add-student-selected ".concat(o.replace(/\s+/g,"")):null),key:l,onClick:function(){return t.addStudent(l)}},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(K,{name:l,byleth_gender:i||"F",house:o})),r.a.createElement(O.a,{item:!0,xs:9},r.a.createElement("p",{className:"roster-name",style:{marginTop:0}},l),r.a.createElement(xe,{skills:m}))))};for(i.s();!(e=i.n()).done;)o()}catch(m){i.e(m)}finally{i.f()}return c}},{key:"componentDidMount",value:function(){var e=this;this.props.playthrough&&this.props.playthrough.students&&y()({method:"get",url:"/api/app/students"}).then((function(t){e.setState({availableStudents:t.data.filter((function(t){if(t.recruitable&&!g.a.find(e.props.playthrough.students,{name:t.name}))return t}))})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedStudents,n=t.filters;return this.props.playthrough&&this.props.playthrough.students?r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("h2",{className:"padding"},"Add Students"),r.a.createElement("div",{className:"padding skill-filters"},Be.map((function(t){return r.a.createElement("img",{key:t,onClick:function(){return e.onFilterChange(t)},className:"skill-filter".concat(n.includes(t)?" filter-selected":""),src:"/img/skills/".concat(H(t),".png"),alt:t,title:t})})),n.length>0?r.a.createElement(ve.a,{className:"hover remove-filters-btn",onClick:function(){e.setState({filters:[]})}}):null),r.a.createElement("ul",null,this.renderAvailableStudents()),r.a.createElement("div",{className:"center footer"},r.a.createElement(E.b,{to:"/"},r.a.createElement(j.a,{className:"button",style:{width:"90%"},variant:"contained",color:"primary",onClick:function(){return e.props.addStudents(a)},disabled:a.length<1},"Add")))):r.a.createElement(w,null)}}]),a}(n.Component),De=function(e){var t=e.playthrough,a=e.appStudents;if(!t||!a)return r.a.createElement(w,null);var n=t.students;return r.a.createElement("div",null,r.a.createElement("div",{className:"padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Best Gifts")),n.map((function(t){var n=t.name;if("Byleth"!==n){var l=g.a.find(a,{name:n}),s=l.gifts;return r.a.createElement("div",{key:n,className:"roster-row"},r.a.createElement(O.a,{container:!0,spacing:3,alignItems:"top"},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(K,{name:n,byleth_gender:e.playthrough.byleth_gender,house:"Byleth"!==n?l.house:e.playthrough.house})),r.a.createElement(O.a,{item:!0,xs:9},r.a.createElement("p",{className:"roster-name",style:{marginTop:0}},n),r.a.createElement("ul",{className:"styled-list"},s.map((function(e){var t=e.name;return r.a.createElement("li",{key:t},t)}))))))}})))},Ue=[{desc:"Add character/class gender and prevent wrong gender from using class e.g. Gremory cannot be male"},{desc:"On class path selection page, show what % other users chose"},{desc:"Ability to sort roster page by class level (e.g. show those who haven't certified for Beginner, then Intermediate, then Advanced)"},{desc:"Reorder students by order in game when instructing"}],Ae=[{desc:"Stuck on loading sometimes when starting new session while unauthenticated"}],Ie=[{desc:"Show whether to critique/console for failure"},{desc:"Select non-class skill goals post master class (or along path)"},{desc:"Lost item guide"},{desc:"Track support levels"},{desc:"Show group task options"},{desc:"Keep track of class mastery"},{desc:"Tea Party guides"}],Le=function(){return r.a.createElement("div",{className:"padding"},r.a.createElement(L,null),r.a.createElement("h2",null,"Dev Notes"),r.a.createElement("h3",null,"Todos"),r.a.createElement("ul",{className:"styled-list"},Ue.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))),r.a.createElement("h3",null,"Known bugs"),r.a.createElement("ul",{className:"styled-list"},Ae.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))),r.a.createElement("h3",null,"Feature ideas"),r.a.createElement("ul",{className:"styled-list"},Ie.map((function(e){var t=e.desc;return r.a.createElement("li",null,t)}))))},Pe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logOut=function(){y()({method:"get",url:"/api/account/logout"}).then((function(e){"success"===e.data.logout&&(n.authenticateUser(!1),n.props.history.push("/"))})).catch((function(e){console.log(e)}))},n.state={isLoadingAppData:!0,isLoadingUserData:!0,authenticated:!1,playthrough:null,appData:null},n.authenticateUser=n.authenticateUser.bind(Object(h.a)(n)),n.getPlaythrough=n.getPlaythrough.bind(Object(h.a)(n)),n.selectClassGoal=n.selectClassGoal.bind(Object(h.a)(n)),n.selectClass=n.selectClass.bind(Object(h.a)(n)),n.selectSkill=n.selectSkill.bind(Object(h.a)(n)),n.addStudents=n.addStudents.bind(Object(h.a)(n)),n.removeStudent=n.removeStudent.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"authenticateUser",value:function(e){this.setState({authenticated:e}),this.getPlaythrough()}},{key:"getPlaythrough",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y()({method:"get",url:"".concat(k,"/api/user/playthrough")}).then((function(e){t.setState({playthrough:e.data,isLoadingUserData:!1})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"selectClassGoal",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,y()({method:"post",url:"/api/user/update_student_class_goal",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectClass",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.className,e.next=3,y()({method:"post",url:"/api/user/update_student_class",params:{studentName:a,className:n}}).then((function(e){"success"===e.data&&r.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectSkill",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,l=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.studentName,n=t.skillName,r=t.level,e.next=3,y()({method:"post",url:"/api/user/update_student_skill",params:{studentName:a,skillName:n,level:r}}).then((function(e){"success"===e.data&&l.getPlaythrough()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"addStudents",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y()({method:"post",url:"/api/user/add_students",params:{names:t}}).then((function(e){"success"===e.data&&a.getPlaythrough()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeStudent",value:function(){this.getPlaythrough()}},{key:"getAppData",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"get",url:"".concat(k,"/api/app/classes")}).then((function(e){a=e.data}));case 2:return e.next=4,y()({method:"get",url:"".concat(k,"/api/app/students")}).then((function(e){t=e.data}));case 4:this.setState({appData:{students:t,classes:a},isLoadingAppData:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"get",url:"/api/account/authenticated"}).then((function(e){var a=e.data.authenticated;t.setState({authenticated:a}),a?t.getPlaythrough():t.setState({isLoadingUserData:!1})})).catch((function(e){console.log(e)}));case 2:return e.next=4,this.getAppData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoadingAppData,n=t.isLoadingUserData,l=t.authenticated,s=t.playthrough,c=t.appData;if(a||n)return r.a.createElement(w,null);var u=S(M),i=S(he),o=S(be),m=S(je),h=S(_e),d=S(De);return r.a.createElement("div",{id:"App",className:s?H(s.house):""},r.a.createElement(E.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(i,{authenticated:l,authenticateUser:e.authenticateUser,playthrough:s,appStudents:c.students,logOut:e.logOut,isLoadingUserData:a})}}),r.a.createElement(b.a,{path:"/login",render:function(){return r.a.createElement(B,{playthrough:s,authenticateUser:e.authenticateUser})}}),r.a.createElement(b.a,{path:"/signup",render:function(){return r.a.createElement(U,{authenticateUser:e.authenticateUser})}}),r.a.createElement(b.a,{path:"/new_playthrough",render:function(){return r.a.createElement(u,{authenticated:l,getPlaythrough:e.getPlaythrough})}}),r.a.createElement(b.a,{path:"/student/:name",render:function(){return r.a.createElement(o,{authenticated:l,playthrough:s,selectClass:e.selectClass,selectSkill:e.selectSkill,removeStudent:e.removeStudent,appStudents:c.students})}}),r.a.createElement(b.a,{path:"/select_classes/:name",render:function(){return r.a.createElement(m,{authenticated:l,playthrough:s,selectClassGoal:e.selectClassGoal,appData:c})}}),r.a.createElement(b.a,{path:"/add_student",render:function(){return r.a.createElement(h,{authenticated:l,playthrough:s,addStudents:e.addStudents})}}),r.a.createElement(b.a,{path:"/gifts",render:function(){return r.a.createElement(d,{authenticated:l,playthrough:s,appStudents:c.students})}}),r.a.createElement(b.a,{path:"/dev_notes",component:Le}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(130)}},[[99,1,2]]]);
//# sourceMappingURL=main.8394dc1d.chunk.js.map