exports.ids = [4];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Shared/CreateCardModal.vue?vue&type=template&id=22e465e1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    attrs: {
      "has-modal-card": "",
      "trap-focus": "",
      "destroy-on-hide": false,
      "aria-role": "dialog",
      "aria-modal": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (props) {
        return [_c('div', {
          staticClass: "modal-card",
          staticStyle: {
            "width": "auto"
          }
        }, [_c('header', {
          staticClass: "modal-card-head"
        }, [_c('p', {
          staticClass: "modal-card-title"
        }, [_vm._v("\n                        Create New Flash Card\n                    ")]), _vm._v(" "), _c('button', {
          staticClass: "delete",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function ($event) {
              return _vm.$emit('close');
            }
          }
        })]), _vm._v(" "), _c('section', {
          staticClass: "modal-card-body"
        }, [_c('b-field', {
          attrs: {
            "label": "Word"
          }
        }, [_c('b-input', {
          attrs: {
            "value": ""
          },
          model: {
            value: _vm.word,
            callback: function ($$v) {
              _vm.word = $$v;
            },
            expression: "word"
          }
        })], 1), _vm._v(" "), _c('b-field', {
          attrs: {
            "label": "Definition"
          }
        }, [_c('b-input', {
          attrs: {
            "maxlength": "200",
            "type": "textarea"
          },
          model: {
            value: _vm.definition,
            callback: function ($$v) {
              _vm.definition = $$v;
            },
            expression: "definition"
          }
        })], 1)], 1), _vm._v(" "), _c('footer', {
          staticClass: "modal-card-foot"
        }, [_vm.$store.state.isLogged === false ? _c('div', {
          staticClass: "has-text-danger mr-4"
        }, [_vm._v("Login to start creatings cards")]) : _vm._e(), _vm._v(" "), _c('div', [_c('b-button', {
          attrs: {
            "label": "Close"
          },
          on: {
            "click": props.close
          }
        }), _vm._v(" "), _c('b-button', {
          attrs: {
            "disabled": _vm.$store.state.isLogged === false,
            "loading": _vm.isLoading,
            "label": "Create card",
            "type": "is-link"
          },
          on: {
            "click": _vm.createCard
          }
        })], 1)])])];
      }
    }]),
    model: {
      value: _vm.showModal,
      callback: function ($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Shared/CreateCardModal.vue?vue&type=template&id=22e465e1&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Shared/CreateCardModal.vue?vue&type=script&lang=js&

/* harmony default export */ var CreateCardModalvue_type_script_lang_js_ = ({
  components: {},
  data() {
    return {
      word: "",
      definition: "",
      showModal: false,
      isLoading: false
    };
  },
  methods: {
    ...Object(external_vuex_["mapActions"])("AdminStore", ["createNewCard"]),
    openModal() {
      this.showModal = true;
    },
    async createCard() {
      this.isLoading = true;
      await this.createNewCard({
        word: this.word,
        definition: this.definition
      });
      console.log(this.$route.query.level);
      if (this.$route.query.level == 0) {
        location.reload();
        return false;
      }
      this.$router.push({
        path: '/admin/bin',
        query: {
          level: 0
        }
      });
      this.showModal = false;
      this.isLoading = false;
      this.word = "";
      this.definition = "";
    }
  },
  created() {}
});
// CONCATENATED MODULE: ./components/Shared/CreateCardModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Shared_CreateCardModalvue_type_script_lang_js_ = (CreateCardModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Shared/CreateCardModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Shared_CreateCardModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "359de942"
  
)

/* harmony default export */ var CreateCardModal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("19fd8258", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6fdefe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6fdefe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6fdefe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6fdefe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3e6fdefe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "nav[data-v-3e6fdefe]{position:absolute;top:0;left:0px;right:0px;box-shadow:0 1px 6px #000000a3;background-color:#0079d8;z-index:10000;display:flex;height:50px;align-items:center;padding:0 20px;justify-content:center}section[data-v-3e6fdefe]{width:100%;min-height:100vh;position:relative;display:block;justify-content:center;align-items:center;display:flex}.bg-animation[data-v-3e6fdefe]{position:absolute;width:100%;height:100%;z-index:0}.bg-animation>div[data-v-3e6fdefe]{will-change:opacity;position:absolute;width:100%;height:100%;z-index:0}.bg-1[data-v-3e6fdefe]{background:linear-gradient(180deg, #f9dea1 60%, #9bdaff 100%)}.bg-2[data-v-3e6fdefe]{background:linear-gradient(300deg, #f9c3f5 60%, #9bdaff 100%);animation:bg-fade-1-3e6fdefe 10s linear infinite}.bg-3[data-v-3e6fdefe]{background:linear-gradient(10deg, #bab2fc 60%, #9bdaff 100%);animation:bg-fade-2-3e6fdefe 10s linear infinite}@keyframes bg-fade-1-3e6fdefe{0%{opacity:1}33%{opacity:1}66%{opacity:0}to{opacity:0}}@keyframes bg-fade-2-3e6fdefe{0%{opacity:1}33%{opacity:0}66%{opacity:0}to{opacity:1}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3e6fdefe&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<nav data-v-3e6fdefe>", "</nav>", [_vm._ssrNode("<div class=\"is-flex\" data-v-3e6fdefe>", "</div>", [_vm.$store.state.isLogged ? _vm._ssrNode("<div data-v-3e6fdefe>", "</div>", [_c('font', {
    staticClass: "is-size-4 has-text-white"
  }, [_vm._v("username: " + _vm._s(_vm.$store.state.user.username))]), _vm._ssrNode(" <button class=\"mx-2 is-info is-light button\" data-v-3e6fdefe>Logout</button> <button class=\"mx-2 is-info is-light button\" data-v-3e6fdefe>View Cards</button>")], 2) : _vm._ssrNode("<div data-v-3e6fdefe>", "</div>", [_vm._ssrNode("<button class=\"button is-info is-light mx-2\" data-v-3e6fdefe>Login</button> "), _c('LoginModal', {
    ref: "LoginModal"
  })], 2), _vm._ssrNode(" <button class=\"mx-2 is-info is-light button\" data-v-3e6fdefe>Add Card</button> "), _c('CreateCardModal', {
    ref: "CreateCardModal"
  })], 2)]), _vm._ssrNode(" <section class=\"main\" data-v-3e6fdefe><div class=\"bg-animation\" data-v-3e6fdefe><div class=\"bg-1\" data-v-3e6fdefe></div> <div class=\"bg-2\" data-v-3e6fdefe></div> <div class=\"bg-3\" data-v-3e6fdefe></div></div> " + (!_vm.cardReady ? "<button class=\"is-large button is-dark is-loading\" data-v-3e6fdefe></button>" : _vm.hasAlert ? "<div class=\"notification is-warning is-light\" data-v-3e6fdefe>" + _vm._ssrEscape("\r\n            " + _vm._s(_vm.card.message) + "\r\n        ") + "</div>" : "<div class=\"container is-widescreen\" data-v-3e6fdefe><div class=\"card\" data-v-3e6fdefe>" + (!_vm.showDefinition ? "<div class=\"card-content\" data-v-3e6fdefe><p class=\"title has-text-centered\" data-v-3e6fdefe>" + _vm._ssrEscape("\r\n                    " + _vm._s(_vm.card.word) + "\r\n                    ") + "</p></div>" : "<div class=\"card-content\" data-v-3e6fdefe><p class=\"title has-text-centered\" data-v-3e6fdefe>" + _vm._ssrEscape("\r\n                        " + _vm._s(_vm.card.definition) + "                \r\n                    ") + "</p></div>") + " " + (!_vm.showDefinition ? "<footer class=\"card-footer\" data-v-3e6fdefe><button class=\"button card-footer-item is-fullwidth is-large is-warning is-light\" data-v-3e6fdefe><span data-v-3e6fdefe>\r\n                            Show definition\r\n                        </span></button></footer>" : "<footer class=\"card-footer\" data-v-3e6fdefe><button class=\"button card-footer-item is-large is-success is-light\" data-v-3e6fdefe><span data-v-3e6fdefe>\r\n                            I got it\r\n                        </span></button> <button class=\"button card-footer-item is-large is-danger is-light\" data-v-3e6fdefe><span data-v-3e6fdefe>\r\n                            I did not get it\r\n                        </span></button></footer>") + "</div></div>") + "</section>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3e6fdefe&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Shared/CreateCardModal.vue + 4 modules
var CreateCardModal = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Shared/LoginModal.vue?vue&type=template&id=9cfd0b66&
var LoginModalvue_type_template_id_9cfd0b66_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    attrs: {
      "has-modal-card": "",
      "trap-focus": "",
      "destroy-on-hide": false,
      "aria-role": "dialog",
      "aria-modal": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (props) {
        return [_c('div', {
          staticClass: "modal-card",
          staticStyle: {
            "width": "auto"
          }
        }, [_c('header', {
          staticClass: "modal-card-head"
        }, [_c('p', {
          staticClass: "modal-card-title"
        }, [_vm._v("\n                        Select Login Type\n                    ")]), _vm._v(" "), _c('button', {
          staticClass: "delete",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function ($event) {
              return _vm.$emit('close');
            }
          }
        })]), _vm._v(" "), _c('section', {
          staticClass: "modal-card-body"
        }, [_c('b-field', {
          attrs: {
            "label": "Anonymous login"
          }
        }, [_c('button', {
          staticClass: "is-large is-fullwidth button is-info is-light",
          on: {
            "click": _vm.loginAsTempUser
          }
        }, [_vm._v("Quick test login")])]), _vm._v(" "), _c('b-field', {
          attrs: {
            "label": "Google login"
          }
        }, [_c('button', {
          staticClass: "is-large is-fullwidth button is-warning is-light",
          on: {
            "click": _vm.loginWithGoogle
          }
        }, [_vm._v("Signin with Google")])])], 1)])];
      }
    }]),
    model: {
      value: _vm.showModal,
      callback: function ($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  })], 1);
};
var LoginModalvue_type_template_id_9cfd0b66_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Shared/LoginModal.vue?vue&type=template&id=9cfd0b66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Shared/LoginModal.vue?vue&type=script&lang=js&
/* harmony default export */ var LoginModalvue_type_script_lang_js_ = ({
  components: {},
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    loginWithGoogle() {
      let currentWindow = window.location.href;
      window.location.href = `https://${window.location.hostname}/api/web/auth/google?returnTo=${currentWindow}`;
    },
    loginAsTempUser() {
      this.$store.dispatch("loginAsTempUserAction");
    }
  },
  created() {}
});
// CONCATENATED MODULE: ./components/Shared/LoginModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Shared_LoginModalvue_type_script_lang_js_ = (LoginModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Shared/LoginModal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Shared_LoginModalvue_type_script_lang_js_,
  LoginModalvue_type_template_id_9cfd0b66_render,
  LoginModalvue_type_template_id_9cfd0b66_staticRenderFns,
  false,
  null,
  null,
  "602f2073"
  
)

/* harmony default export */ var LoginModal = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    CreateCardModal: CreateCardModal["a" /* default */],
    LoginModal: LoginModal
  },
  data() {
    return {
      showDefinition: false,
      cardReady: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])("HomeStore", ["hasAlert", "card"])
  },
  methods: {
    ...Object(external_vuex_["mapActions"])("HomeStore", ["drawCard", "answerCard"]),
    async correct(value) {
      this.cardReady = false;
      await this.answerCard({
        card_id: this.card.card_id,
        bin_id: this.card.bin_id,
        word_wrong_count: this.card.word_wrong_count,
        correct: value
      });
      await this.drawCard();
      this.cardReady = true;
      this.showDefinition = false;
    }
  },
  async created() {
    await this.drawCard();
    this.cardReady = true;
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e6fdefe",
  "ef13c6e8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map