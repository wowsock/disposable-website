(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Header_wrapper__3HH44",logo:"Header_logo__1nVIY",button:"Header_button__1ByP2",dark:"Header_dark__3RO8g",active:"Header_active__PEw8W",menuBtn:"Header_menuBtn__1Sfa-",light:"Header_light__1xXwE",expanded:"Header_expanded__t_8zV"}},13:function(e,t,n){e.exports={wrapper:"Mission_wrapper__1TUzS",content:"Mission_content__3cUr2",points:"Mission_points__1eSe-",point:"Mission_point__Bhi2m",icon:"Mission_icon__Yuu5M",bg:"Mission_bg__PJLBU",flow:"Mission_flow__19Y94",number:"Mission_number__3-XCa",rotate:"Mission_rotate__3bqG6",flash:"Mission_flash__25vL_"}},17:function(e,t,n){e.exports={wrapper:"Footer_wrapper__3BfQd",text:"Footer_text__1H3J0",message:"Footer_message__CwGVP",active:"Footer_active__146H2"}},20:function(e,t,n){e.exports={countdown:"Countdown_countdown__1mmKB",text:"Countdown_text__1VMBR",tiles:"Countdown_tiles__1hoDo"}},21:function(e,t,n){e.exports={wrapper:"About_wrapper__2-_XK",bg:"About_bg__1LLzD",content:"About_content__3Z1ia"}},22:function(e,t,n){e.exports={sideNav:"SideNav_sideNav__1Na1d",dot:"SideNav_dot__1ljGw",inner:"SideNav_inner__1QaOk",active:"SideNav_active__38TTK",dark:"SideNav_dark__StdvN"}},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(12),c=n.n(i),r=(n(35),n(6)),s=n(2),o=n(3),l=n(10),d=n.n(l),u=n(11),b=n.n(u),j=n(0);var m=function(){var e,t=[{name:"intro",label:"Introduction",ref:Object(a.useRef)()},{name:"about",label:"About",ref:Object(a.useRef)()},{name:"mission",label:"Mission",ref:Object(a.useRef)()},{name:"members",label:"Members",ref:Object(a.useRef)()},{name:"footer",label:"Contact",ref:Object(a.useRef)()}],n=Object(o.c)((function(e){return e})),i=n.section,c=(n.subsection,n.direction,n.queue,Object(a.useState)({left:"250px",width:"100px"})),l=Object(s.a)(c,2),u=l[0],m=l[1],p=Object(a.useState)(!1),x=Object(s.a)(p,2),h=x[0],O=x[1];Object(a.useEffect)((function(){if(console.log("section to switch to",i),i){var e=t.find((function(e){return e.name===i})).ref.current,n=e.getBoundingClientRect();console.log(e.getBoundingClientRect()),m({left:n.x,width:n.width-5})}}),[i]);var g=["mission"].indexOf(i)>-1?"light":"dark",f=t.map((function(e){return Object(j.jsx)("div",{className:e.name===i?b.a.active:void 0,onClick:function(){return function(e){var t=document.querySelector('.tracker[name="'+e+'"]').getBoundingClientRect().top+window.scrollY;window.scrollTo(0,t,{behavior:"smooth"}),O(!1)}(e.name)},ref:e.ref,children:e.label},e.label)}));return Object(j.jsx)("div",{className:b.a.wrapper,children:Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:b.a.logo,children:Object(j.jsx)("img",{src:"logo-".concat("light"===g?"dark":"light",".png"),alt:"federated learning consortium logo"})}),Object(j.jsx)("div",{className:d()(b.a.button,Object(r.a)({},b.a.dark,"light"===g)),style:{left:u.left,width:u.width+"px"}}),Object(j.jsxs)("div",{className:d()(b.a.menuBtn,(e={},Object(r.a)(e,b.a.light,"light"===g),Object(r.a)(e,b.a.expanded,h),e)),onClick:function(){O(!h)},children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),Object(j.jsx)("nav",{className:d()(g,Object(r.a)({},b.a.expanded,h)),children:f})]})})},p=n(44),x=n(28);function h(e){var t=Object(x.a)(),n=t.ref,i=t.inView,c=Object(o.b)(),r=e.name.split("-"),l=Object(s.a)(r,2),d=l[0],u=l[1];return Object(a.useEffect)((function(){i&&c({type:"QUEUE_SECTION",section:d,subsection:u})}),[i]),Object(j.jsx)("div",{className:"tracker",ref:n,name:d})}function O(e){var t=Object(o.c)((function(e){return e})),n=t.section,a=t.direction,i=t.speed,c=!1!==e.mount;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{className:"fixedHeight",children:Object(j.jsx)(h,{name:e.name})}),Object(j.jsx)(p.a,{in:n===e.name,timeout:"fast"===i?500:2e3,className:"page ".concat(a," ").concat(i),mountOnEnter:c,unmountOnExit:c,children:Object(j.jsx)("div",{children:e.children})})]})}var g=n.p+"static/media/intro-v4.097700d4.mp4",f=n.p+"static/media/en.9f1c2a1a.srt",_=n.p+"static/media/7951630039213_.54190ead.jpg",v=n(8),A=n.n(v),w=n(45);n(20),new Date("11/1/2021").getTime(),(new Date).getTime();var E,Q,R={en:[],zh:[]};function C(e){var t=e.split(":"),n=60*parseInt(t[1],10)+parseInt(t[2],10);return console.log(t,n),n}fetch(f).then((function(e){return e.text()})).then((function(e){var t=e.split(/[\r\n]+/g);t=t.filter((function(e){if(!(e<200))return e}));var n={text:""};t.forEach((function(e){if(0===e.indexOf("00:")){n.start>=0&&(R.en.push(n),n={text:""});var t=e.split(" --\x3e "),a=Object(s.a)(t,2),i=a[0],c=a[1];n.start=C(i),n.end=C(c)}else n.text+=" "+e})),console.log(R)}));var M=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),l=o[0],u=o[1],b=Object(a.useState)({}),m=Object(s.a)(b,2),x=m[0],h=m[1],f=Object(a.useRef)();function v(){Q===f.current.currentTime&&(u(!1),clearInterval(E)),Q=f.current.currentTime;var e=R.en.filter((function(e){if(e.start<=Q&&e.end>Q)return e}));e.length<1?h({}):(console.log(e),e[0]!==x&&h(e[0]))}return Object(a.useRef)(),Object(a.useRef)(),Object(j.jsx)(O,{name:"intro",mount:!1,children:Object(j.jsx)("div",{className:A.a.wrapper,children:Object(j.jsxs)("div",{className:A.a.introVideo,onClick:function(){console.log("play status",l),l?(f.current.pause(),clearInterval(E)):(n||i(!0),f.current.play(),E=setInterval(v,1e3)),u(!l)},children:[Object(j.jsx)("video",{autoPlay:l,playsInline:!0,ref:f,controls:!1,children:Object(j.jsx)("source",{src:g})}),Object(j.jsx)("div",{className:d()(A.a.shade,Object(r.a)({},A.a.active,!l)),children:Object(j.jsx)("img",{src:_})}),Object(j.jsxs)("div",{className:d()(A.a.toggle,Object(r.a)({},A.a.active,l)),children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACGCAYAAAArbi/dAAAACXBIWXMAABSBAAAUgQGVr8uiAAADPklEQVR4nO3d7XXTQBCF4RWHAigBOkg6SCt0AhVAR9BB3EHoZDgCG64TyZa0X3d27ttAfHby5I+zs8nMns3sISmO7H9fNBKC7Dpp6Z0tJy29WhmISUunbgzkkrS0bMNApKVlGwciLa3aORBpqd2BgUhLzTIGIi01yhyItJSu0EBMWgpVcCCXpCWnCgMxacmo0kAuScveKg9k7sXMnnydSr/eNfjJH1NKP8zsm5l9YD0Ilqb5V7jhZ/mVUvo8TdNP7mPpVwshmLTcqbUQTFoWai0Ek5aFegrBpOVcTyGYtJxjEYKF1sIiBAuthVEIFk4LoxAsnBZ2IVgILexCsBBaPAnBhtXiSQg2rBavQrDTWcuJ5yMdz6sQbP6q+HmUbydHEIK51zKCEMy9ltGEYC61jCYEc6llZCGYGy0jC8HcaIkiBKPWEkUIRq0lohCMTktEIRidluhCMAot0YVgFFokZLluWiRkuW5aJOR+TbVIyP2aapGQfVXXIiH7qq5FQo5XRYuEHK+KFgkpUzEtElKmYlokpHxZWiSkfFlaJKRuu7VISN12a5GQdm3SIiHt2qRFQvq0qkVC+rSqRUL6d6VFQvp3pUVCuDppIDz9uciqP1kcfU8pPc63it9HP4nOvbneLSH9+qcCP4GEtO/m0gMJaduiCkxC2rR5FYiE1O+uCkxC6nVoQY6E1GmXCkxCypa9NkpCynVYBSYh+RVdpiYheX2dpulTyc12EnKsatcSJGR/s4rHWndEJGR7Ta62Sci2qqrAJOR2za9HS8h6zVRgEvK2ris2JOS6LiowCfkbzZomCSFQgUUWQrnqL6oQKhVYNCH062IjCaFVgUUQ4mrl+OhCXKjARhXi9tmKEYW4U4GNJGSIh8JGEVLkPz4Y8i5kuOfzPAsZRgXmUcjQT7B6EzKkCsyLkDDPeHsQMrwKjFlIuMftE7GQUCowNiEhVWBMQsKqwBiEhFeB9RYiFa/qJUQqVuohRCpu1FKIVGyolRCp2JrV7cXMnnycBEkVx+HqYXmaKgxi3rD5EP1cD1d4GFKRW6FBSEWpCgxDKkomFWRJBVlSQZZUkCUVZEkFWVJBllSQJRVkSQVZUkFUSuk3IItlLsyCN/8AAAAASUVORK5CYII="}),Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACMCAYAAACK9Qy7AAAACXBIWXMAABibAAAYmwFJdYOUAAABZklEQVR4nO3RMRGAQBAEwT+c4RxnR4oAgg6mFezWzO7usd0z8/y1UP97ARvyURBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQTAFwRQEUxBMQSTnnBcIMwoUHcLjywAAAABJRU5ErkJggg=="}),!n&&Object(j.jsx)("div",{className:A.a.text,children:"Discover Federated Learning - Play Intro"})]}),Object(j.jsx)("div",{className:d()(A.a.subtitles,Object(r.a)({},A.a.active,l)),children:Object(j.jsx)(w.a,{children:Object(j.jsx)(p.a,{className:A.a.text,timeout:1e3,children:Object(j.jsx)("div",{children:x.text})},x.start)})})]})})})},B=n(21),F=n.n(B);function T(){return Object(j.jsx)(O,{name:"about",children:Object(j.jsxs)("div",{className:F.a.wrapper,children:[Object(j.jsx)("div",{className:F.a.bg}),Object(j.jsxs)("div",{className:F.a.content,children:[Object(j.jsx)("h2",{children:"Creating Synergies for the Acceleration and Advancement of Federated Learning"}),"Federated Learning is bound to change the way AI is used and implemented \u2013 FLC aims to accelerate technology best practices, vertical application knowhow, and cooperative ecosystem for federated learning."]})]})})}var U=n(13),I=n.n(U),N=[Object(j.jsxs)(j.Fragment,{children:["Explore ",Object(j.jsx)("strong",{children:"technical implementation best practices"})," of federated learning technology, optimizing learning effectiveness, performance, security, and process management."]}),Object(j.jsxs)(j.Fragment,{children:["Further the understanding of federated learning use cases across a multitude of industries via ",Object(j.jsx)("strong",{children:"experimental pilots and completed case studies."})]}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("strong",{children:"Discover and create synergies"})," across the federated learning ecosystem: technology providers, system integrators, enterprises, and academic researchers."]}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("strong",{children:"Contribute to the growth and adoption of federated learning"})," globally, along with related privacy-preserving technologies such as multi-party computation (MPC)"]})];var y=function(){var e=N.map((function(e,t){return Object(j.jsxs)("div",{className:I.a.point,children:[Object(j.jsx)("div",{className:I.a.icon,children:Object(j.jsx)("div",{className:I.a.bg})}),e]})}));return Object(j.jsx)(O,{name:"mission",children:Object(j.jsx)("div",{className:I.a.wrapper,children:Object(j.jsxs)("div",{className:I.a.content,children:[Object(j.jsx)("h2",{children:"Mission"}),Object(j.jsx)("div",{className:I.a.points,children:e})]})})})},S=n.p+"static/media/internet-technology-fiber-optic-background-P6VM82H.7c072429.jpg",k=n.p+"static/media/blade-server-in-san-at-datacenter-F6AWKD3.f431dbc5.jpg",V=n.p+"static/media/big-business-office-with-loft-rooms-for-conference-M5RC5H8.c5112509.jpg",q=n.p+"static/media/startup-working-online-technology-research-concept-P4VMTKS.69017215.jpg",H=n.p+"static/media/pexels-kindel-media-8566629.b3268600.jpg",K=n(7),P=n.n(K),W=[{name:"technology",label:"Technology Providers",description:"Solution providers that enable federated learning capabilities as a part of a vertical-focused or use case-based technology solution. These capabilities may be ready-to-use, SaaS-based, or require implementation.",cover:S},{name:"system",label:"System Integrators",description:"Implementation service providers that work with technology vendors to best serve enterprises\u2019 needs and offer federated learning-capabilities as a part of a larger solution (including services components).",cover:k},{name:"enterprises",label:"Enterprises",description:"Enterprises looking to leverage federated learning to tackle particular business or technical problems. Can be in planning or pilot stage, or already running FL in production.",cover:V},{name:"academics",label:"Academics & Experts",description:"Individual membership for academics, researchers, and experts who are involved in federated learning or related technologies\u2019 endeavors. Experts can include both pure academics as well as corporate research roles.",cover:q},{name:"related",label:"Related Technologies",description:"Technology companies in related technologies such as MPC, AI, blockchain, and edge computing who have an interest or intent in using or combining existing solutions with federated learning.",cover:H}];var L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),n=t.section,a=t.subsection,i=t.direction,c=t.speed,r=W.map((function(t){return Object(j.jsx)("div",{className:a===t.name?P.a.active:"",onClick:function(){return e({type:"SET_SECTION",section:"members",subsection:t.name})},children:t.label})})),s=W.map((function(e){return Object(j.jsx)(O,{name:"members-".concat(e.name)})})),l=W.map((function(e){return Object(j.jsx)(p.a,{in:e.name===a,timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:P.a.info,children:[Object(j.jsx)("div",{className:P.a.cover,children:Object(j.jsx)("img",{src:e.cover})}),Object(j.jsx)("div",{className:P.a.textWrapper,children:Object(j.jsxs)("div",{className:P.a.text,children:[Object(j.jsx)("h3",{children:e.label}),e.description]})})]})},e.name)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(p.a,{in:"members"===n,timeout:"fast"===c?500:2e3,className:"page ".concat(i," ").concat(c," ").concat(P.a.wrapper),mountOnEnter:!0,unmountOnExit:!0,children:Object(j.jsxs)("div",{className:P.a.wrapper,children:[Object(j.jsx)("div",{className:P.a.main,children:Object(j.jsxs)("div",{className:P.a.inner,children:[Object(j.jsx)("h2",{children:"Members"}),Object(j.jsx)("div",{children:"Federated Learning Consortium does not charge membership fees, but has a criteria framework for members across five categories."}),Object(j.jsx)("div",{className:P.a.menu,children:r})]})}),Object(j.jsx)("div",{className:P.a.infoWrapper,children:l})]})}),s]})},Y=n(17),G=n.n(Y);var J=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c={};return Object(j.jsx)(O,{name:"footer",children:Object(j.jsx)("footer",{className:G.a.wrapper,children:Object(j.jsxs)("div",{className:G.a.text,children:[Object(j.jsxs)("div",{children:["Federated Learning Consortium (FLC)",Object(j.jsx)("br",{}),"is a research organization registered in Hong Kong. Contact us at info@flc.ai or by submitting an inquiry below"]}),Object(j.jsxs)("form",{action:"",method:"POST",onSubmit:function(e){e.preventDefault();var t=c.name.value,n=c.email.value,a=c.message.value;console.log(t,n,a),fetch("https://formsubmit.co/ajax/jimmy.hu@chinapex.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t,email:n,message:a})}).then((function(e){return e.json()})).then((function(e){console.log(e),"true"===e.success&&i(!0)}))},children:[Object(j.jsx)("div",{className:d()(G.a.message,Object(r.a)({},G.a.active,n)),children:"Inquiry received!"}),Object(j.jsx)("input",{type:"text",disabled:n,ref:function(e){return c.name=e},placeholder:"name"}),Object(j.jsx)("input",{type:"email",disabled:n,ref:function(e){return c.email=e},placeholder:"email"}),Object(j.jsx)("textarea",{disabled:n,ref:function(e){return c.message=e},placeholder:"message"}),Object(j.jsx)("input",{disabled:n,type:"submit",name:"submit"})]})]})})})};n(22);var X=function(){var e=Object(o.c)((function(e){return e})),t=(e.section,e.queue),n=Object(a.useState)(!1),i=Object(s.a)(n,2),c=i[0],r=i[1],l=Object(o.b)();return Object(a.useEffect)((function(){t.length>0&&!c&&(!0,function(){r(!0);t[0];l({type:"NEXT_SECTION"}),window.setTimeout((function(){r(!1)}),500)}())}),[t,c]),null};var D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(X,{}),Object(j.jsx)(m,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(M,{}),Object(j.jsx)(T,{}),Object(j.jsx)(y,{}),Object(j.jsx)(L,{}),Object(j.jsx)(J,{})]})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},Z=n(29),$=n(25),ee=n(9),te=["intro","about","mission","members","footer"];var ne={section:null,subsection:null,direction:"down",speed:"normal",queue:[]};var ae=Object(Z.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SECTION":return Object(ee.a)(Object(ee.a)({},e),{},{section:t.section,subsection:t.subsection});case"SET_DIRECTION":return Object(ee.a)(Object(ee.a)({},e),{},{direction:t.direction});case"QUEUE_SECTION":return Object(ee.a)(Object(ee.a)({},e),{},{queue:[].concat(Object($.a)(e.queue),[{section:t.section,subsection:t.subsection}])});case"NEXT_SECTION":var n=e.queue.shift(),a="down";te.indexOf(e.section)>=te.indexOf(n.section)&&(a="up"),console.log(n,e.queue);var i="fast";return Object(ee.a)(Object(ee.a)({},e),{},{section:n.section,subsection:n.subsection,queue:e.queue,direction:a,speed:i});case"REMOVE_SECTION":var c=Object($.a)(e.queue);return c.shift(),Object(ee.a)(Object(ee.a)({},e),{},{queue:c});default:return e}}));c.a.render(Object(j.jsx)(o.a,{store:ae,children:Object(j.jsx)(D,{})}),document.getElementById("root")),z()},7:function(e,t,n){e.exports={wrapper:"Members_wrapper__CdDms",main:"Members_main__18JTw",inner:"Members_inner__8Urcd",menu:"Members_menu__2E2VL",active:"Members_active__2DEI8",infoWrapper:"Members_infoWrapper__3Bv7C",info:"Members_info__PC-Lv",cover:"Members_cover__1MrNQ",textWrapper:"Members_textWrapper__1_UeI",text:"Members_text__16pn9"}},8:function(e,t,n){e.exports={wrapper:"Intro_wrapper__1RlCw",introVideo:"Intro_introVideo__2fSuc",shade:"Intro_shade__3puE8",active:"Intro_active__1cuUf",toggle:"Intro_toggle__1IvrA",text:"Intro_text__1IQWT",subtitles:"Intro_subtitles__2lPWY",controls:"Intro_controls__2afqK",button:"Intro_button__OWQ7g",bar:"Intro_bar__3dnYC",dot:"Intro_dot__12wKI"}}},[[42,1,2]]]);
//# sourceMappingURL=main.ea3b890d.chunk.js.map