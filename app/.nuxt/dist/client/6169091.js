(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,e,n){"use strict";n(54),n(35),n(37),n(17),n(66),n(36),n(67);var o=n(6),r=n(23),c=(n(38),n(92));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{},data:function(){return{word:"",definition:"",showModal:!1,isLoading:!1}},methods:l(l({},Object(c.b)("AdminStore",["createNewCard"])),{},{openModal:function(){this.showModal=!0},createCard:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.createNewCard({word:t.word,definition:t.definition});case 3:if(console.log(t.$route.query.level),0!=t.$route.query.level){e.next=7;break}return location.reload(),e.abrupt("return",!1);case 7:t.$router.push({path:"/admin/bin",query:{level:0}}),t.showModal=!1,t.isLoading=!1,t.word="",t.definition="";case 12:case"end":return e.stop()}}),e)})))()}}),created:function(){}},h=n(75),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n                        Create New Flash Card\n                    ")]),t._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Word"}},[e("b-input",{attrs:{value:""},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1),t._v(" "),e("b-field",{attrs:{label:"Definition"}},[e("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.definition,callback:function(e){t.definition=e},expression:"definition"}})],1)],1),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[!1===t.$store.state.isLogged?e("div",{staticClass:"has-text-danger mr-4"},[t._v("Login to start creatings cards")]):t._e(),t._v(" "),e("div",[e("b-button",{attrs:{label:"Close"},on:{click:n.close}}),t._v(" "),e("b-button",{attrs:{disabled:!1===t.$store.state.isLogged,loading:t.isLoading,label:"Create card",type:"is-link"},on:{click:t.createCard}})],1)])])]}}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}})],1)}),[],!1,null,null,null);e.a=component.exports},382:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("19fd8258",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(382)},388:function(t,e,n){var o=n(76)((function(i){return i[1]}));o.push([t.i,"nav[data-v-3e6fdefe]{position:absolute;top:0;left:0px;right:0px;box-shadow:0 1px 6px #000000a3;background-color:#0079d8;z-index:10000;display:flex;height:50px;align-items:center;padding:0 20px;justify-content:center}section[data-v-3e6fdefe]{width:100%;min-height:100vh;position:relative;display:block;justify-content:center;align-items:center;display:flex}.bg-animation[data-v-3e6fdefe]{position:absolute;width:100%;height:100%;z-index:0}.bg-animation>div[data-v-3e6fdefe]{will-change:opacity;position:absolute;width:100%;height:100%;z-index:0}.bg-1[data-v-3e6fdefe]{background:linear-gradient(180deg, #f9dea1 60%, #9bdaff 100%)}.bg-2[data-v-3e6fdefe]{background:linear-gradient(300deg, #f9c3f5 60%, #9bdaff 100%);animation:bg-fade-1-3e6fdefe 10s linear infinite}.bg-3[data-v-3e6fdefe]{background:linear-gradient(10deg, #bab2fc 60%, #9bdaff 100%);animation:bg-fade-2-3e6fdefe 10s linear infinite}@keyframes bg-fade-1-3e6fdefe{0%{opacity:1}33%{opacity:1}66%{opacity:0}to{opacity:0}}@keyframes bg-fade-2-3e6fdefe{0%{opacity:1}33%{opacity:0}66%{opacity:0}to{opacity:1}}",""]),o.locals={},t.exports=o},391:function(t,e,n){"use strict";n.r(e);n(54),n(35),n(37),n(17),n(66),n(36),n(67);var o=n(6),r=n(23),c=(n(38),n(92)),d=n(379),l=(n(93),{components:{},data:function(){return{showModal:!1}},methods:{openModal:function(){this.showModal=!0},loginWithGoogle:function(){var t=window.location.href;window.location.href="https://".concat(window.location.hostname,"/api/web/auth/google?returnTo=").concat(t)},loginAsTempUser:function(){this.$store.dispatch("loginAsTempUserAction")}},created:function(){}}),f=n(75),h=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n                        Select Login Type\n                    ")]),t._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Anonymous login"}},[e("button",{staticClass:"is-large is-fullwidth button is-info is-light",on:{click:t.loginAsTempUser}},[t._v("Quick test login")])]),t._v(" "),e("b-field",{attrs:{label:"Google login"}},[e("button",{staticClass:"is-large is-fullwidth button is-warning is-light",on:{click:t.loginWithGoogle}},[t._v("Signin with Google")])])],1)])]}}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}})],1)}),[],!1,null,null,null).exports;function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{CreateCardModal:d.a,LoginModal:h},data:function(){return{showDefinition:!1,cardReady:!1}},computed:w({},Object(c.c)("HomeStore",["hasAlert","card"])),methods:w(w({},Object(c.b)("HomeStore",["drawCard","answerCard"])),{},{correct:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cardReady=!1,n.next=3,e.answerCard({card_id:e.card.card_id,bin_id:e.card.bin_id,word_wrong_count:e.card.word_wrong_count,correct:t});case 3:return n.next=5,e.drawCard();case 5:e.cardReady=!0,e.showDefinition=!1;case 7:case"end":return n.stop()}}),n)})))()}}),created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.drawCard();case 2:t.cardReady=!0;case 3:case"end":return e.stop()}}),e)})))()}},_=(n(387),Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("nav",[e("div",{staticClass:"is-flex"},[t.$store.state.isLogged?e("div",[e("font",{staticClass:"is-size-4 has-text-white"},[t._v("username: "+t._s(t.$store.state.user.username))]),t._v(" "),e("button",{staticClass:"mx-2 is-info is-light button",on:{click:function(e){return t.$store.dispatch("signout")}}},[t._v("Logout")]),t._v(" "),e("button",{staticClass:"mx-2 is-info is-light button",on:{click:function(e){return t.$router.push({path:"/admin/bin",query:{level:0}})}}},[t._v("View Cards")])],1):e("div",[e("button",{staticClass:"button is-info is-light mx-2",on:{click:function(e){return t.$refs.LoginModal.openModal()}}},[t._v("Login")]),t._v(" "),e("LoginModal",{ref:"LoginModal"})],1),t._v(" "),e("button",{staticClass:"mx-2 is-info is-light button",on:{click:function(e){return t.$refs.CreateCardModal.openModal()}}},[t._v("Add Card")]),t._v(" "),e("CreateCardModal",{ref:"CreateCardModal"})],1)]),t._v(" "),e("section",{staticClass:"main"},[t._m(0),t._v(" "),t.cardReady?t.hasAlert?e("div",{staticClass:"notification is-warning is-light"},[t._v("\r\n            "+t._s(t.card.message)+"\r\n        ")]):e("div",{staticClass:"container is-widescreen"},[e("div",{staticClass:"card"},[t.showDefinition?e("div",{staticClass:"card-content"},[e("p",{staticClass:"title has-text-centered"},[t._v("\r\n                        "+t._s(t.card.definition)+"                \r\n                    ")])]):e("div",{staticClass:"card-content"},[e("p",{staticClass:"title has-text-centered"},[t._v("\r\n                    "+t._s(t.card.word)+"\r\n                    ")])]),t._v(" "),t.showDefinition?e("footer",{staticClass:"card-footer"},[e("button",{staticClass:"button card-footer-item is-large is-success is-light",on:{click:function(e){return t.correct(!0)}}},[e("span",[t._v("\r\n                            I got it\r\n                        ")])]),t._v(" "),e("button",{staticClass:"button card-footer-item is-large is-danger is-light",on:{click:function(e){return t.correct(!1)}}},[e("span",[t._v("\r\n                            I did not get it\r\n                        ")])])]):e("footer",{staticClass:"card-footer",on:{click:function(e){t.showDefinition=!0}}},[t._m(1)])])]):e("button",{staticClass:"is-large button is-dark is-loading"})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-animation"},[e("div",{staticClass:"bg-1"}),t._v(" "),e("div",{staticClass:"bg-2"}),t._v(" "),e("div",{staticClass:"bg-3"})])},function(){var t=this._self._c;return t("button",{staticClass:"button card-footer-item is-fullwidth is-large is-warning is-light"},[t("span",[this._v("\r\n                            Show definition\r\n                        ")])])}],!1,null,"3e6fdefe",null));e.default=_.exports}}]);