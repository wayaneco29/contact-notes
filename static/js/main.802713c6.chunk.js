(this["webpackJsonpproject-contact"]=this["webpackJsonpproject-contact"]||[]).push([[0],{26:function(e,t,n){e.exports=n(53)},35:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),o=n.n(c),s=n(6),i=n(10),u=n(24),l=n(7);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={user:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CURRENT_USER":return f({},e,{user:t.payload});default:return e}};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={contacts:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return v({},e,{contacts:t.payload});default:return e}},h=Object(i.c)({user:d,contact:y}),E=[u.a],g=Object(i.d)(h,i.a.apply(void 0,E)),j=(n(35),n(3)),w=n.n(j),N=n(5),x=n(9),P=n.n(x),C={apiKey:"AIzaSyDdiWcFzvhiQ_SB34Srd_ABfWK7o0Bl-k4",authDomain:"contact-b70a1.firebaseapp.com",databaseURL:"https://contact-b70a1.firebaseio.com",projectId:"contact-b70a1",storageBucket:"contact-b70a1.appspot.com",messagingSenderId:"995257068640",appId:"1:995257068640:web:5b1e13ff71bceeb9932705",measurementId:"G-PC5NRYCD1D"};n(46),n(47);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}P.a.initializeApp(C);var D=function(){var e=new P.a.auth.GoogleAuthProvider;P.a.auth().signInWithPopup(e).then((function(e){I(e)})).catch((function(e){return console.log(e)}))},I=function(){var e=Object(N.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P.a.firestore().doc("users/".concat(t.user.uid));case 4:return n=e.sent,e.next=7,n.orderBy("createdAt","desc").get();case 7:if(e.sent.exists){e.next=12;break}return r={name:t.user.displayName,email:t.user.email},e.next=12,n.set(r);case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(N.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.firestore().collection("users/".concat(t,"/contacts/"));case 3:return r=e.sent,e.next=6,r.get();case 6:return e.sent,a=k({createdAt:new Date},n),e.next=10,r.add(a);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(w.a.mark((function e(t){var n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.firestore().collection("users/".concat(t,"/contacts"));case 2:return n=e.sent,e.next=5,n.get();case 5:return r=e.sent,a=[],r.docs.map(function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=k({id:t.id},t.data()),a.push(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10,a;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=P.a,U=n(13),_=function(e){return{type:"GET_CONTACTS",payload:e}},B=(n(48),function(e){var t=e.size;return a.a.createElement("div",{className:"spinner",style:{width:t?"".concat(t,"px"):"20px",height:t?"".concat(t,"px"):"20px"}})}),G=(n(49),Object(s.b)((function(e){return{user:e.user.user}}),(function(e){return{getContacts:function(t){return e(_(t))}}}))((function(e){var t=e.user,n=e.getContacts,r=a.a.useState(!1),c=Object(U.a)(r,2),o=c[0],s=c[1],i=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,R.auth().signOut();case 3:n(null),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("nav",{id:"nav"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"nav-inner"},a.a.createElement("div",{className:"nav-logo"},"Save Contact App"),t?a.a.createElement("button",{className:"btn",style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:i},o?a.a.createElement(B,null):null," SIGN OUT"):a.a.createElement("button",{className:"btn",onClick:D},"SIGN IN"))))})));n(50);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var F=Object(s.b)((function(e){return{user:e.user.user}}),(function(e){return{getContacts:function(t){return e(_(t))}}}))((function(e){var t=e.user,n=e.getContacts,r=a.a.useState({email:"",name:"",contact:""}),c=Object(U.a)(r,2),o=c[0],s=c[1],i=a.a.useState(!1),u=Object(U.a)(i,2),p=u[0],f=u[1],m=function(e){var t=e.target,n=t.name,r=t.value;s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(l.a)({},n,r)))},d=function(){var e=Object(N.a)(w.a.mark((function e(r){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c=o.email,!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(c).toLowerCase())){e.next=5;break}console.log("Email Validated"),e.next=7;break;case 5:return console.log("Invalid Email !"),e.abrupt("return");case 7:if(""!==o.name&&""!==o.contact){e.next=9;break}return e.abrupt("return",console.log("EMPTY FIELDS"));case 9:return f(!0),e.next=12,A(t.uid,o);case 12:return e.next=14,T(t.uid);case 14:a=e.sent,n(a),s({values:o,name:"",email:"",contact:""}),f(!1);case 18:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{id:"add-contact"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("form",{onSubmit:d},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"#email"},"Email:"),a.a.createElement("input",{type:"text",onChange:m,name:"email",id:"email",className:"input-field",placeholder:"Enter Email ...",value:o.email,disabled:!t})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"#name"},"Name:"),a.a.createElement("input",{type:"text",onChange:m,name:"name",id:"name",className:"input-field",placeholder:"Enter Name ...",value:o.name,disabled:!t})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"#phone"},"Contact:"),a.a.createElement("input",{type:"text",onChange:m,name:"contact",id:"contact",className:"input-field",placeholder:"Enter Contact ....",value:o.contact,disabled:!t})),p?a.a.createElement("button",{className:"btn-contact",style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(B,null)," ADDING"):a.a.createElement("button",{className:"btn-contact",style:{display:"flex",justifyContent:"center",alignItems:"center"},type:"submit",disabled:!t}," ADD CONTACT"))))})),L=(n(51),Object(s.b)((function(e){return{user:e.user.user,contacts:e.contact.contacts}}),(function(e){return{getContacts:function(t){return e(_(t))}}}))((function(e){var t=e.user,n=e.contacts,c=e.getContacts,o=function(){var e=Object(N.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,T(t.uid);case 3:return n=e.sent,c(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[t]),a.a.createElement("div",{id:"contact-list"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"contact-inner"},a.a.createElement("div",{className:"contact-headers"},a.a.createElement("p",{className:"headers headers-email"},"Email"),a.a.createElement("p",{className:"headers headers-name"},"Name"),a.a.createElement("p",{className:"headers headers-contact"},"Contact")),n&&n.length>0?n.map((function(e,t){return a.a.createElement("div",{className:"contact-content",key:t},a.a.createElement("p",{className:"content content-email"},e.email),a.a.createElement("p",{className:"content content-name"},e.name),a.a.createElement("p",{className:"content content-contact"},e.contact))})):a.a.createElement("div",{className:"contact-content"},a.a.createElement("p",{className:"content",style:{width:"100%"}},"NO CONTACTS ..")))))}))),W=(n(52),{appInner:{display:"flex",padding:"40px 0px"},side1:{flex:1},side2:{flex:2}}),J=Object(s.b)((function(e){return{user:e.user.user}}),(function(e){return{currentUser:function(t){return e({type:"SELECT_CURRENT_USER",payload:t})}}}))((function(e){var t=e.currentUser;return Object(r.useEffect)((function(){R.auth().onAuthStateChanged(function(){var e=Object(N.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n||t(null),t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),a.a.createElement("div",{className:"App"},a.a.createElement(G,null),a.a.createElement("div",{className:"container"},a.a.createElement("div",{style:W.appInner,className:"app-inner"},a.a.createElement("div",{style:W.side1,className:"app-side-1"},a.a.createElement(F,null)),a.a.createElement("div",{style:W.side2,className:"app-side-2"},a.a.createElement(L,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(s.a,{store:g},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.802713c6.chunk.js.map