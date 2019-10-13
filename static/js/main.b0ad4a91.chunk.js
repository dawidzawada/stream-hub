(this["webpackJsonpstream-hub"]=this["webpackJsonpstream-hub"]||[]).push([[0],{25:function(e,t,a){e.exports={Field:"Field_Field__Qf9eL",Icon:"Field_Icon__1iO1u",Invalid:"Field_Invalid__34o3g"}},27:function(e,t,a){e.exports={Box:"Box_Box__34jMz",ThumbBox:"Box_ThumbBox__3NEYP"}},29:function(e,t,a){e.exports={Form:"Form_Form__269Am",List:"Form_List__2db6X",Buttons:"Form_Buttons__gtV6I"}},32:function(e,t,a){e.exports={ChooseLayout:"ChooseLayout_ChooseLayout__2wMLp",MiniLayouts:"ChooseLayout_MiniLayouts__1J6MZ"}},37:function(e,t,a){e.exports={App:"App_App__XUGPY"}},44:function(e,t,a){e.exports=a(61)},49:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(49),a(37)),i=a.n(o),s=a(40),u=a(8),d=a(38),m=a(14),h=a(26),f=a(20),v=a(21),y=a(24),p=a(22),E=a(23),b=a(29),_=a.n(b),w=a(25),g=a.n(w),O=a(30),F=a(16),T=a.n(F),C=function(e){var t=null;switch(e.service){case"twitch":t=r.a.createElement(T.a,null,r.a.createElement(O.a,{icon:["fab","twitch"],color:"#65469c"}));break;case"youtube":t=r.a.createElement(T.a,null,r.a.createElement(O.a,{icon:["fab","youtube"],color:"#cd201f"}));break;default:t=null}return r.a.createElement("div",{className:g.a.Field},r.a.createElement("div",{className:g.a.Icon},t),r.a.createElement("input",{type:"text",className:!e.valid&&e.value.length>0?g.a.Invalid:null,placeholder:"YouTube/Twitch.tv link",value:e.value,onChange:function(t){return e.change(t,e.id)},service:e.service}))},k=/(?:.+?)?(?:\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/|watch\%3Fv\%3D)([a-zA-Z0-9_-]{11})+/,S=/^(?:https?:\/\/)?(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,j=function(e){return k.test(e)||S.test(e)},L=function(e){return k.test(e)?"youtube":S.test(e)?"twitch":null},x=function(e){return k.test(e)?k.exec(e)[1]:S.test(e)?S.exec(e)[1]:null},N=a(11),A=a(63),B=a(64),I=(a(59),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={allValid:!1,fields:[{id:0,value:"",service:null,valid:!1},{id:1,value:"",service:null,valid:!1}]},a.handleChangeField=function(e,t){var n=Object(h.a)(a.state.fields),r=n.findIndex((function(e){return e.id===t}));n[r].value=e.target.value,n[r].valid=j(e.target.value),n[r].service=L(e.target.value),a.setState({fields:n}),a.checkIfAllValid(n)},a.checkIfAllValid=function(e){var t=!0,n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){c.value.valid||(t=!1)}}catch(i){r=!0,l=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}a.setState({allValid:t})},a.handleFields=function(e){var t=Object(h.a)(a.state.fields);if(t.length<4&&"add"===e)t.push({id:t.length,value:"",service:null,valid:!1}),a.setState({fields:t}),a.checkIfAllValid(t);else if(t.length>2&&"sub"===e){var n=Object(h.a)(a.state.fields);n.pop(),a.setState({fields:n}),a.checkIfAllValid(n)}},a.handleWatchButton=function(){a.props.onSetSources(a.state.fields),a.props.history.replace("/choose-layout")},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.onResetStore()}},{key:"render",value:function(){var e=this,t=this.state.fields.map((function(t){return r.a.createElement(A.a,{key:t.id,timeout:500,classNames:"move"},r.a.createElement(C,{key:t.id,id:t.id,value:t.value,service:t.service,valid:t.valid,change:e.handleChangeField}))}));return r.a.createElement("div",{className:_.a.Form},r.a.createElement("h1",null,"StreamHUB"),r.a.createElement(B.a,{className:"List"},t),r.a.createElement("div",{className:_.a.Buttons},r.a.createElement("button",{disabled:4===this.state.fields.length,onClick:function(){return e.handleFields("add")}},"+"),r.a.createElement("button",{disabled:2===this.state.fields.length,onClick:function(){return e.handleFields("sub")}},"-")),r.a.createElement("button",{disabled:!this.state.allValid,onClick:this.handleWatchButton},"Watch!"))}}]),t}(n.Component)),R=Object(N.b)(null,(function(e){return{onSetSources:function(t){return e({type:"SET_SOURCES",sources:t})},onResetStore:function(){return e({type:"RESET_STORE"})}}}))(I),P=a(32),U=a.n(P),D=a(27),V=a.n(D),M=a(9),W=a.n(M),Y=function(e){return r.a.createElement("div",{className:V.a.ThumbBox,style:e.style},"S")},z=function(e){return r.a.createElement("div",{className:V.a.ThumbBox,style:e.style},"C")},J=function(e){return r.a.createElement("div",{className:W.a.TwoFieldsOneChat,onClick:function(){return e("two_fields_one_chat")}},r.a.createElement(Y,{style:{"grid-area":"streamA"}}),r.a.createElement(z,{style:{"grid-area":"chat"}}),r.a.createElement(Y,{style:{"grid-area":"streamB"}}))},X=function(e){return r.a.createElement("div",{className:W.a.TwoFieldsTwoChat,onClick:function(){return e("two_fields_two_chats")}},r.a.createElement(Y,null),r.a.createElement(z,null),r.a.createElement(Y,null),r.a.createElement(z,null))},q=function(e){return r.a.createElement("div",{className:W.a.ThreeFiels,onClick:function(){return e("three_fields")}},r.a.createElement(Y,{style:{"grid-area":"streamA"}}),r.a.createElement(Y,{style:{"grid-area":"streamB"}}),r.a.createElement(Y,{style:{"grid-area":"streamC"}}))},K=function(e){return r.a.createElement("div",{className:W.a.ThreeFielsOneChat,onClick:function(){return e("three_fields_one_chat")}},r.a.createElement(Y,{style:{"grid-area":"streamA"}}),r.a.createElement(Y,{style:{"grid-area":"streamB"}}),r.a.createElement(Y,{style:{"grid-area":"streamC"}}),r.a.createElement(z,{style:{"grid-area":"chat"}}))},Q=function(e){return r.a.createElement("div",{className:W.a.FourFiels,onClick:function(){return e("four_fields")}},r.a.createElement(Y,{id:1,type:"twitch",src:"notrealmurder"}),r.a.createElement(Y,{id:2,type:"twitch",src:"notrealmurder"}),r.a.createElement(Y,{id:3,type:"twitch",src:"notrealmurder"}),r.a.createElement(Y,{id:3,type:"twitch",src:"notrealmurder"}))},Z=function(e){return r.a.createElement("div",{className:W.a.FourFielsOneChat,onClick:function(){return e("four_fields_one_chat")}},r.a.createElement(Y,{style:{"grid-area":"streamA"}}),r.a.createElement(Y,{style:{"grid-area":"streamB"}}),r.a.createElement(Y,{style:{"grid-area":"streamC"}}),r.a.createElement(Y,{style:{"grid-area":"streamD"}}),r.a.createElement(z,{style:{"grid-area":"chat"}}))},$=Object(N.b)((function(e){return{sources:e.sources}}),(function(e){return{onSetLayout:function(t){return e({type:"SET_LAYOUT",layout:t})},onResetLayout:function(){return e({type:"RESET_LAYOUT"})}}}))((function(e){e.onResetLayout();var t,a=function(t){switch(e.onSetLayout(t),e.sources.length){case 2:e.history.push("/double");break;case 3:e.history.push("/triple");break;case 4:e.history.push("/quad");break;default:e.history.replace("/")}};if(e.sources){var n=[];switch(e.sources.length){case 2:n=[(t=a,r.a.createElement("div",{className:W.a.TwoFields,onClick:function(){return t("two_fields")}},r.a.createElement(Y,null),r.a.createElement(Y,null))),J(a),X(a)];break;case 3:n=[q(a),K(a)];break;case 4:n=[Q(a),Z(a)];break;default:n=[],e.history.replace("/")}var l=n.map((function(e){return r.a.createElement("div",{className:U.a.MiniLayouts},e)}));return r.a.createElement(T.a,null,r.a.createElement("div",{className:U.a.ChooseLayout},l))}return e.history.replace("/"),null})),G=function(e){return function(t){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(y.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={component:null},t}return Object(E.a)(a,t),Object(v.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),a}(n.Component)};var H=function(){m.b.add(d.a);var e=G((function(){return a.e(3).then(a.bind(null,70))})),t=G((function(){return a.e(5).then(a.bind(null,71))})),n=G((function(){return a.e(4).then(a.bind(null,72))}));return r.a.createElement("div",{className:i.a.App},r.a.createElement(s.a,{basename:"/stream-hub"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:R}),r.a.createElement(u.b,{path:"/choose-layout",exact:!0,component:$}),r.a.createElement(u.b,{path:"/double",exact:!0,component:e}),r.a.createElement(u.b,{path:"/triple",exact:!0,component:t}),r.a.createElement(u.b,{path:"/quad",exact:!0,component:n}),r.a.createElement(u.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(18),te=a(42);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach((function(t){Object(te.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re={sources:null,layout:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_STORE":return{sources:null,layout:null};case"RESET_LAYOUT":return ne({},e,{layout:null});case"SET_SOURCES":var a=t.sources.map((function(e){return{src:x(e.value),service:e.service}}));return ne({},e,{sources:a});case"SET_LAYOUT":return ne({},e,{layout:t.layout});default:return e}},ce=ee.b,oe=Object(ee.c)(le,ce());c.a.render(r.a.createElement(N.a,{store:oe},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports={TwoFields:"Layouts_TwoFields__3KI1F",TwoFieldsOneChat:"Layouts_TwoFieldsOneChat__28gWU",TwoFieldsTwoChat:"Layouts_TwoFieldsTwoChat__3sjXg",ThreeFiels:"Layouts_ThreeFiels__2icDQ",ThreeFielsOneChat:"Layouts_ThreeFielsOneChat__V2KU6",FourFiels:"Layouts_FourFiels__3oWfk",FourFielsOneChat:"Layouts_FourFielsOneChat__sN9iT"}}},[[44,1,2]]]);
//# sourceMappingURL=main.b0ad4a91.chunk.js.map