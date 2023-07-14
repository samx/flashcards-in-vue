module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/admin","2":"pages/admin/bin","3":"pages/admin/index","4":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("destr");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("74334b42", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("015dda4d", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("620be336", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("abort-controller");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("web-streams-polyfill/ponyfill/es2018");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL, URLSearchParams) {/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_0__);

/*! MIT License © Sindre Sorhus */

const globals = {};
const getGlobal = property => {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self;
  }

  /* istanbul ignore next */
  if (typeof window !== 'undefined' && window && property in window) {
    return window;
  }
  if (typeof global !== 'undefined' && global && property in global) {
    return global;
  }

  /* istanbul ignore next */
  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis;
  }
};
const globalProperties = ['Headers', 'Request', 'Response', 'ReadableStream', 'fetch', 'AbortController', 'FormData'];
for (const property of globalProperties) {
  Object.defineProperty(globals, property, {
    get() {
      const globalObject = getGlobal(property);
      const value = globalObject && globalObject[property];
      return typeof value === 'function' ? value.bind(globalObject) : value;
    }
  });
}
const isObject = value => value !== null && typeof value === 'object';
const supportsAbortController = typeof globals.AbortController === 'function';
const supportsStreams = typeof globals.ReadableStream === 'function';
const supportsFormData = typeof globals.FormData === 'function';
const mergeHeaders = (source1, source2) => {
  const result = new globals.Headers(source1 || {});
  const isHeadersInstance = source2 instanceof globals.Headers;
  const source = new globals.Headers(source2 || {});
  for (const [key, value] of source) {
    if (isHeadersInstance && value === 'undefined' || value === undefined) {
      result.delete(key);
    } else {
      result.set(key, value);
    }
  }
  return result;
};
const deepMerge = (...sources) => {
  let returnValue = {};
  let headers = {};
  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }
      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }
        returnValue = {
          ...returnValue,
          [key]: value
        };
      }
      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
      }
    }
    returnValue.headers = headers;
  }
  return returnValue;
};
const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const stop = Symbol('stop');
class HTTPError extends Error {
  constructor(response) {
    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    super(response.statusText || String(response.status === 0 || response.status ? response.status : 'Unknown response error'));
    this.name = 'HTTPError';
    this.response = response;
  }
}
class TimeoutError extends Error {
  constructor(request) {
    super('Request timed out');
    this.name = 'TimeoutError';
    this.request = request;
  }
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// `Promise.race()` workaround (#91)
const timeout = (request, abortController, options) => new Promise((resolve, reject) => {
  const timeoutID = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }
    reject(new TimeoutError(request));
  }, options.timeout);

  /* eslint-disable promise/prefer-await-to-then */
  options.fetch(request).then(resolve).catch(reject).then(() => {
    clearTimeout(timeoutID);
  });
  /* eslint-enable promise/prefer-await-to-then */
});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;
const defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes
};
const normalizeRetryOptions = (retry = {}) => {
  if (typeof retry === 'number') {
    return {
      ...defaultRetryOptions,
      limit: retry
    };
  }
  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error('retry.methods must be an array');
  }
  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error('retry.statusCodes must be an array');
  }
  return {
    ...defaultRetryOptions,
    ...retry,
    afterStatusCodes: retryAfterStatusCodes
  };
};

// The maximum value of a 32bit int (see issue #117)
const maxSafeTimeout = 2147483647;
class Ky {
  constructor(input, options = {}) {
    this._retryCount = 0;
    this._input = input;
    this._options = {
      // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      credentials: this._input.credentials || 'same-origin',
      ...options,
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method || this._input.method),
      prefixUrl: String(options.prefixUrl || ''),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
      fetch: options.fetch || globals.fetch
    };
    if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
      throw new TypeError('`input` must be a string, URL, or Request');
    }
    if (this._options.prefixUrl && typeof this._input === 'string') {
      if (this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }
      if (!this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }
      this._input = this._options.prefixUrl + this._input;
    }
    if (supportsAbortController) {
      this.abortController = new globals.AbortController();
      if (this._options.signal) {
        this._options.signal.addEventListener('abort', () => {
          this.abortController.abort();
        });
      }
      this._options.signal = this.abortController.signal;
    }
    this.request = new globals.Request(this._input, this._options);
    if (this._options.searchParams) {
      const searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
      const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);

      // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
      if ((supportsFormData && this._options.body instanceof globals.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
        this.request.headers.delete('content-type');
      }
      this.request = new globals.Request(new globals.Request(url, this.request), this._options);
    }
    if (this._options.json !== undefined) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set('content-type', 'application/json');
      this.request = new globals.Request(this.request, {
        body: this._options.body
      });
    }
    const fn = async () => {
      if (this._options.timeout > maxSafeTimeout) {
        throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
      }
      await delay(1);
      let response = await this._fetch();
      for (const hook of this._options.hooks.afterResponse) {
        // eslint-disable-next-line no-await-in-loop
        const modifiedResponse = await hook(this.request, this._options, this._decorateResponse(response.clone()));
        if (modifiedResponse instanceof globals.Response) {
          response = modifiedResponse;
        }
      }
      this._decorateResponse(response);
      if (!response.ok && this._options.throwHttpErrors) {
        throw new HTTPError(response);
      }

      // If `onDownloadProgress` is passed, it uses the stream API internally
      /* istanbul ignore next */
      if (this._options.onDownloadProgress) {
        if (typeof this._options.onDownloadProgress !== 'function') {
          throw new TypeError('The `onDownloadProgress` option must be a function');
        }
        if (!supportsStreams) {
          throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
        }
        return this._stream(response.clone(), this._options.onDownloadProgress);
      }
      return response;
    };
    const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());
    const result = isRetriableMethod ? this._retry(fn) : fn();
    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);
        const response = (await result).clone();
        if (type === 'json') {
          if (response.status === 204) {
            return '';
          }
          if (options.parseJson) {
            return options.parseJson(await response.text());
          }
        }
        return response[type]();
      };
    }
    return result;
  }
  _calculateRetryDelay(error) {
    this._retryCount++;
    if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!this._options.retry.statusCodes.includes(error.response.status)) {
          return 0;
        }
        const retryAfter = error.response.headers.get('Retry-After');
        if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
          let after = Number(retryAfter);
          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1000;
          }
          if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
            return 0;
          }
          return after;
        }
        if (error.response.status === 413) {
          return 0;
        }
      }
      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1000;
    }
    return 0;
  }
  _decorateResponse(response) {
    if (this._options.parseJson) {
      response.json = async () => {
        return this._options.parseJson(await response.text());
      };
    }
    return response;
  }
  async _retry(fn) {
    try {
      return await fn();
    } catch (error) {
      const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);
        for (const hook of this._options.hooks.beforeRetry) {
          // eslint-disable-next-line no-await-in-loop
          const hookResult = await hook({
            request: this.request,
            options: this._options,
            error,
            retryCount: this._retryCount
          });

          // If `stop` is returned from the hook, the retry process is stopped
          if (hookResult === stop) {
            return;
          }
        }
        return this._retry(fn);
      }
      if (this._options.throwHttpErrors) {
        throw error;
      }
    }
  }
  async _fetch() {
    for (const hook of this._options.hooks.beforeRequest) {
      // eslint-disable-next-line no-await-in-loop
      const result = await hook(this.request, this._options);
      if (result instanceof Request) {
        this.request = result;
        break;
      }
      if (result instanceof Response) {
        return result;
      }
    }
    if (this._options.timeout === false) {
      return this._options.fetch(this.request.clone());
    }
    return timeout(this.request.clone(), this.abortController, this._options);
  }

  /* istanbul ignore next */
  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get('content-length')) || 0;
    let transferredBytes = 0;
    return new globals.Response(new globals.ReadableStream({
      start(controller) {
        const reader = response.body.getReader();
        if (onDownloadProgress) {
          onDownloadProgress({
            percent: 0,
            transferredBytes: 0,
            totalBytes
          }, new Uint8Array());
        }
        async function read() {
          const {
            done,
            value
          } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({
              percent,
              transferredBytes,
              totalBytes
            }, value);
          }
          controller.enqueue(value);
          read();
        }
        read();
      }
    }));
  }
}
const validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }
  return deepMerge({}, ...sources);
};
const createInstance = defaults => {
  const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));
  for (const method of requestMethods) {
    ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {
      method
    }));
  }
  ky.HTTPError = HTTPError;
  ky.TimeoutError = TimeoutError;
  ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));
  ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));
  ky.stop = stop;
  return ky;
};
/* harmony default export */ __webpack_exports__["a"] = (createInstance());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)["URL"], __webpack_require__(17)["URLSearchParams"]))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function ({
  isServer,
  req
}) {
  if (isServer) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common.cookie = req.headers.cookie;
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_12bb8b81_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_12bb8b81_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_12bb8b81_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_12bb8b81_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_12bb8b81_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-12bb8b81]{min-height:100vh;display:flex;justify-content:center;align-items:center}.content[data-v-12bb8b81]{background-color:rgba(255,255,255,.527);max-width:700px;padding:20px;border-radius:20px;margin:0px auto 20px;font-family:\"Maniac-Logo\";justify-content:center;align-items:center;justify-content:center;align-items:center;display:block;height:-moz-fit-content;height:fit-content}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_30adff4e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_30adff4e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_30adff4e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_30adff4e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_30adff4e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #fff;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("556f43f6", content, true)

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! Buefy v0.9.23 | MIT License | github.com/buefy/buefy */\n@charset \"UTF-8\";\n.is-noscroll {\n  position: fixed;\n  overflow-y: hidden;\n  width: 100%;\n  bottom: 0;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n          animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n\n/**\n * Vue Transitions\n */\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n.zoom-in-enter-active,\n.zoom-in-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n.zoom-in-enter-active .animation-content,\n.zoom-in-enter-active .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n\n.zoom-in-enter,\n.zoom-in-leave-active {\n  opacity: 0;\n}\n.zoom-in-enter .animation-content,\n.zoom-in-enter .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n.zoom-out-enter-active,\n.zoom-out-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n.zoom-out-enter-active .animation-content,\n.zoom-out-enter-active .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n\n.zoom-out-enter,\n.zoom-out-leave-active {\n  opacity: 0;\n}\n.zoom-out-enter .animation-content,\n.zoom-out-enter .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\n.slide-next-enter-active,\n.slide-next-leave-active,\n.slide-prev-enter-active,\n.slide-prev-leave-active {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-prev-leave-to, .slide-next-enter {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-prev-enter, .slide-next-leave-to {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-down-enter-active,\n.slide-down-leave-active,\n.slide-up-enter-active,\n.slide-up-leave-active {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-up-leave-to, .slide-down-enter {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-up-enter, .slide-down-leave-to {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-enter-active {\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n}\n\n.slide-leave-active {\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n\n.slide-enter-to, .slide-leave {\n  max-height: 100px;\n  overflow: hidden;\n}\n\n.slide-enter, .slide-leave-to {\n  overflow: hidden;\n  max-height: 0;\n}\n\n/*! bulma.io v0.9.4 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .file-cta,\n.file-name, .select select, .taginput .taginput-container.is-focusable, .textarea, .input, .button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .file-cta:focus,\n.file-name:focus, .select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .is-focused.file-cta,\n.is-focused.file-name, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .file-cta:active,\n.file-name:active, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis, .is-active.file-cta,\n.is-active.file-name, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input, .is-active.button {\n  outline: none;\n}\n[disabled].pagination-previous,\n[disabled].pagination-next,\n[disabled].pagination-link,\n[disabled].pagination-ellipsis, [disabled].file-cta,\n[disabled].file-name, .select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,\nfieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {\n  cursor: not-allowed;\n}\n\n.switch, .b-radio.radio, .b-checkbox.checkbox, .carousel-list, .carousel, .is-unselectable, .tabs, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .breadcrumb, .file, .button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  width: 0.625em;\n}\n\n.tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .block:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .progress-wrapper.is-not-native:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.modal-close, .delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.modal-close::before, .delete::before, .modal-close::after, .delete::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n          transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.modal-close::before, .delete::before {\n  height: 2px;\n  width: 50%;\n}\n.modal-close::after, .delete::after {\n  height: 50%;\n  width: 2px;\n}\n.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close:active, .delete:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.modal-close, .is-small.delete {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n.is-medium.modal-close, .is-medium.delete {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n.is-large.modal-close, .is-large.delete {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder, .hero-video, .is-overlay, .modal-background, .modal, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #7957d5;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n  color: currentColor;\n}\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\ntable th {\n  color: #363636;\n}\n\n@-webkit-keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n  }\n}\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #7957d5;\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #7957d5;\n}\na.box:active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #7957d5;\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #7957d5;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n  color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.button:focus, .button.is-focused {\n  border-color: #7957d5;\n  color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.button.is-text[disabled], fieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #7957d5;\n  text-decoration: none;\n}\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #7957d5;\n  text-decoration: underline;\n}\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white[disabled], fieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black[disabled], fieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white;\n}\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light[disabled], fieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark[disabled], fieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-primary {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary[disabled], fieldset[disabled] .button.is-primary {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7957d5;\n}\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #eae4f8;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #e2daf6;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-link {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link[disabled], fieldset[disabled] .button.is-link {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7957d5;\n}\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7957d5;\n}\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #eae4f8;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #e2daf6;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-info {\n  background-color: #167df0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #0f77ea;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #0e71de;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info[disabled], fieldset[disabled] .button.is-info {\n  background-color: #167df0;\n  border-color: #167df0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #167df0;\n}\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #167df0;\n}\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #167df0;\n  color: #167df0;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #167df0;\n  border-color: #167df0;\n  color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #167df0 #167df0 !important;\n}\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #167df0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #167df0;\n}\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #167df0;\n}\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #167df0 #167df0 !important;\n}\n.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e0eefd;\n  border-color: transparent;\n  color: #0d68ce;\n}\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #d4e7fc;\n  border-color: transparent;\n  color: #0d68ce;\n}\n.button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success[disabled], fieldset[disabled] .button.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ef;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e9;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled], fieldset[disabled] .button.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff6de;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff3d1;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger[disabled], fieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n}\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-small {\n  font-size: 0.75rem;\n}\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n.button.is-normal {\n  font-size: 1rem;\n}\n.button.is-medium {\n  font-size: 1.25rem;\n}\n.button.is-large {\n  font-size: 1.5rem;\n}\n.button[disabled], fieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: 0.5;\n}\n.button.is-fullwidth {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em * 0.5));\n  top: calc(50% - (1em * 0.5));\n  position: absolute !important;\n}\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  pointer-events: none;\n}\n.button.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.buttons.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.buttons.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .button.is-responsive.is-small {\n    font-size: 0.5625rem;\n  }\n\n  .button.is-responsive,\n.button.is-responsive.is-normal {\n    font-size: 0.65625rem;\n  }\n\n  .button.is-responsive.is-medium {\n    font-size: 0.75rem;\n  }\n\n  .button.is-responsive.is-large {\n    font-size: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .button.is-responsive.is-small {\n    font-size: 0.65625rem;\n  }\n\n  .button.is-responsive,\n.button.is-responsive.is-normal {\n    font-size: 0.75rem;\n  }\n\n  .button.is-responsive.is-medium {\n    font-size: 1rem;\n  }\n\n  .button.is-responsive.is-large {\n    font-size: 1.25rem;\n  }\n}\n.container {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n.content ul ul ul {\n  list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n.content figure img {\n  display: inline-block;\n}\n.content figure figcaption {\n  font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.content table th {\n  color: #363636;\n}\n.content table th:not([align]) {\n  text-align: inherit;\n}\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.content .tabs li + li {\n  margin-top: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-normal {\n  font-size: 1rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  color: inherit;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n.icon-text .icon {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.image img.is-rounded {\n  border-radius: 9999px;\n}\n.image.is-fullwidth {\n  width: 100%;\n}\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n.image.is-5by4 {\n  padding-top: 80%;\n}\n.image.is-4by3 {\n  padding-top: 75%;\n}\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n.image.is-5by3 {\n  padding-top: 60%;\n}\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n.image.is-2by1 {\n  padding-top: 50%;\n}\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n.image.is-4by5 {\n  padding-top: 125%;\n}\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n.image.is-2by3 {\n  padding-top: 150%;\n}\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n.image.is-1by2 {\n  padding-top: 200%;\n}\n.image.is-1by3 {\n  padding-top: 300%;\n}\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.notification strong {\n  color: currentColor;\n}\n.notification code,\n.notification pre {\n  background: white;\n}\n.notification pre code {\n  background: transparent;\n}\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.notification.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.notification.is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.notification.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.notification.is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.notification.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.notification.is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.notification.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.notification.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.notification.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress, .progress-wrapper.is-not-native {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar, .progress-wrapper.is-not-native::-webkit-progress-bar {\n  background-color: #ededed;\n}\n.progress::-webkit-progress-value, .progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar, .progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n.progress::-ms-fill, .progress-wrapper.is-not-native::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n.progress.is-white::-webkit-progress-value, .is-white.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: white;\n}\n.progress.is-white::-moz-progress-bar, .is-white.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: white;\n}\n.progress.is-white::-ms-fill, .is-white.progress-wrapper.is-not-native::-ms-fill {\n  background-color: white;\n}\n.progress.is-white:indeterminate, .is-white.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, white), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n.progress.is-black::-webkit-progress-value, .is-black.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar, .is-black.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill, .is-black.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #0a0a0a;\n}\n.progress.is-black:indeterminate, .is-black.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #0a0a0a), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n.progress.is-light::-webkit-progress-value, .is-light.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar, .is-light.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill, .is-light.progress-wrapper.is-not-native::-ms-fill {\n  background-color: whitesmoke;\n}\n.progress.is-light:indeterminate, .is-light.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, whitesmoke), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n.progress.is-dark::-webkit-progress-value, .is-dark.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar, .is-dark.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #363636;\n}\n.progress.is-dark::-ms-fill, .is-dark.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #363636;\n}\n.progress.is-dark:indeterminate, .is-dark.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #363636), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n.progress.is-primary::-webkit-progress-value, .is-primary.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #7957d5;\n}\n.progress.is-primary::-moz-progress-bar, .is-primary.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #7957d5;\n}\n.progress.is-primary::-ms-fill, .is-primary.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #7957d5;\n}\n.progress.is-primary:indeterminate, .is-primary.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #7957d5), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);\n}\n.progress.is-link::-webkit-progress-value, .is-link.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #7957d5;\n}\n.progress.is-link::-moz-progress-bar, .is-link.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #7957d5;\n}\n.progress.is-link::-ms-fill, .is-link.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #7957d5;\n}\n.progress.is-link:indeterminate, .is-link.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #7957d5), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);\n}\n.progress.is-info::-webkit-progress-value, .is-info.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #167df0;\n}\n.progress.is-info::-moz-progress-bar, .is-info.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #167df0;\n}\n.progress.is-info::-ms-fill, .is-info.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #167df0;\n}\n.progress.is-info:indeterminate, .is-info.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #167df0), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #167df0 30%, #ededed 30%);\n}\n.progress.is-success::-webkit-progress-value, .is-success.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #48c78e;\n}\n.progress.is-success::-moz-progress-bar, .is-success.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #48c78e;\n}\n.progress.is-success::-ms-fill, .is-success.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #48c78e;\n}\n.progress.is-success:indeterminate, .is-success.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #48c78e), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%);\n}\n.progress.is-warning::-webkit-progress-value, .is-warning.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-moz-progress-bar, .is-warning.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-ms-fill, .is-warning.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #ffe08a;\n}\n.progress.is-warning:indeterminate, .is-warning.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #ffe08a), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%);\n}\n.progress.is-danger::-webkit-progress-value, .is-danger.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #f14668;\n}\n.progress.is-danger::-moz-progress-bar, .is-danger.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #f14668;\n}\n.progress.is-danger::-ms-fill, .is-danger.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #f14668;\n}\n.progress.is-danger:indeterminate, .is-danger.progress-wrapper.is-not-native:indeterminate {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #f14668), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n.progress:indeterminate, .progress-wrapper.is-not-native:indeterminate {\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n          animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(30%, #4a4a4a), color-stop(30%, #ededed));\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n.progress:indeterminate::-webkit-progress-bar, .progress-wrapper.is-not-native:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-moz-progress-bar, .progress-wrapper.is-not-native:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-ms-fill, .progress-wrapper.is-not-native:indeterminate::-ms-fill {\n  animation-name: none;\n}\n.progress.is-small, .is-small.progress-wrapper.is-not-native {\n  height: 0.75rem;\n}\n.progress.is-medium, .is-medium.progress-wrapper.is-not-native {\n  height: 1.25rem;\n}\n.progress.is-large, .is-large.progress-wrapper.is-not-native {\n  height: 1.5rem;\n}\n\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.table td.is-link,\n.table th.is-link {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.table td.is-info,\n.table th.is-info {\n  background-color: #167df0;\n  border-color: #167df0;\n  color: #fff;\n}\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n.table th {\n  color: #363636;\n}\n.table th:not([align]) {\n  text-align: left;\n}\n.table tr.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n.table thead {\n  background-color: transparent;\n}\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.table tfoot {\n  background-color: transparent;\n}\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.table tbody {\n  background-color: transparent;\n}\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n  width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n.tags.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tags.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.tag:not(body).is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.tag:not(body).is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.tag:not(body).is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.tag:not(body).is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.tag:not(body).is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.tag:not(body).is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.tag:not(body).is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.tag:not(body).is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.tag:not(body).is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n          transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n  border-radius: 9999px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n.title.is-1 {\n  font-size: 3rem;\n}\n.title.is-2 {\n  font-size: 2.5rem;\n}\n.title.is-3 {\n  font-size: 2rem;\n}\n.title.is-4 {\n  font-size: 1.5rem;\n}\n.title.is-5 {\n  font-size: 1.25rem;\n}\n.title.is-6 {\n  font-size: 1rem;\n}\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.number {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.select select, .taginput .taginput-container.is-focusable, .textarea, .input {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n.select select::-moz-placeholder, .taginput .taginput-container.is-focusable::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder, .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder, .taginput .taginput-container.is-focusable:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder, .taginput .taginput-container.is-focusable:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .taginput .taginput-container.is-focusable:hover, .textarea:hover, .input:hover, .select select.is-hovered, .taginput .is-hovered.taginput-container.is-focusable, .is-hovered.textarea, .is-hovered.input {\n  border-color: #b5b5b5;\n}\n.select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input {\n  border-color: #7957d5;\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder, .taginput [disabled].taginput-container.is-focusable::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder, .taginput [disabled].taginput-container.is-focusable::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder, .taginput [disabled].taginput-container.is-focusable:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder, .taginput [disabled].taginput-container.is-focusable:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.taginput .taginput-container.is-focusable, .textarea, .input {\n  -webkit-box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n          box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n.taginput [readonly].taginput-container.is-focusable, [readonly].textarea, [readonly].input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.taginput .is-white.taginput-container.is-focusable, .is-white.textarea, .is-white.input {\n  border-color: white;\n}\n.taginput .is-white.taginput-container.is-focusable:focus, .is-white.textarea:focus, .is-white.input:focus, .taginput .is-white.is-focused.taginput-container.is-focusable, .is-white.is-focused.textarea, .is-white.is-focused.input, .taginput .is-white.taginput-container.is-focusable:active, .is-white.textarea:active, .is-white.input:active, .taginput .is-white.is-active.taginput-container.is-focusable, .is-white.is-active.textarea, .is-white.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.taginput .is-black.taginput-container.is-focusable, .is-black.textarea, .is-black.input {\n  border-color: #0a0a0a;\n}\n.taginput .is-black.taginput-container.is-focusable:focus, .is-black.textarea:focus, .is-black.input:focus, .taginput .is-black.is-focused.taginput-container.is-focusable, .is-black.is-focused.textarea, .is-black.is-focused.input, .taginput .is-black.taginput-container.is-focusable:active, .is-black.textarea:active, .is-black.input:active, .taginput .is-black.is-active.taginput-container.is-focusable, .is-black.is-active.textarea, .is-black.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.taginput .is-light.taginput-container.is-focusable, .is-light.textarea, .is-light.input {\n  border-color: whitesmoke;\n}\n.taginput .is-light.taginput-container.is-focusable:focus, .is-light.textarea:focus, .is-light.input:focus, .taginput .is-light.is-focused.taginput-container.is-focusable, .is-light.is-focused.textarea, .is-light.is-focused.input, .taginput .is-light.taginput-container.is-focusable:active, .is-light.textarea:active, .is-light.input:active, .taginput .is-light.is-active.taginput-container.is-focusable, .is-light.is-active.textarea, .is-light.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.taginput .is-dark.taginput-container.is-focusable, .is-dark.textarea, .is-dark.input {\n  border-color: #363636;\n}\n.taginput .is-dark.taginput-container.is-focusable:focus, .is-dark.textarea:focus, .is-dark.input:focus, .taginput .is-dark.is-focused.taginput-container.is-focusable, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .taginput .is-dark.taginput-container.is-focusable:active, .is-dark.textarea:active, .is-dark.input:active, .taginput .is-dark.is-active.taginput-container.is-focusable, .is-dark.is-active.textarea, .is-dark.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.taginput .is-primary.taginput-container.is-focusable, .is-primary.textarea, .is-primary.input {\n  border-color: #7957d5;\n}\n.taginput .is-primary.taginput-container.is-focusable:focus, .is-primary.textarea:focus, .is-primary.input:focus, .taginput .is-primary.is-focused.taginput-container.is-focusable, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .taginput .is-primary.taginput-container.is-focusable:active, .is-primary.textarea:active, .is-primary.input:active, .taginput .is-primary.is-active.taginput-container.is-focusable, .is-primary.is-active.textarea, .is-primary.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.taginput .is-link.taginput-container.is-focusable, .is-link.textarea, .is-link.input {\n  border-color: #7957d5;\n}\n.taginput .is-link.taginput-container.is-focusable:focus, .is-link.textarea:focus, .is-link.input:focus, .taginput .is-link.is-focused.taginput-container.is-focusable, .is-link.is-focused.textarea, .is-link.is-focused.input, .taginput .is-link.taginput-container.is-focusable:active, .is-link.textarea:active, .is-link.input:active, .taginput .is-link.is-active.taginput-container.is-focusable, .is-link.is-active.textarea, .is-link.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.taginput .is-info.taginput-container.is-focusable, .is-info.textarea, .is-info.input {\n  border-color: #167df0;\n}\n.taginput .is-info.taginput-container.is-focusable:focus, .is-info.textarea:focus, .is-info.input:focus, .taginput .is-info.is-focused.taginput-container.is-focusable, .is-info.is-focused.textarea, .is-info.is-focused.input, .taginput .is-info.taginput-container.is-focusable:active, .is-info.textarea:active, .is-info.input:active, .taginput .is-info.is-active.taginput-container.is-focusable, .is-info.is-active.textarea, .is-info.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.taginput .is-success.taginput-container.is-focusable, .is-success.textarea, .is-success.input {\n  border-color: #48c78e;\n}\n.taginput .is-success.taginput-container.is-focusable:focus, .is-success.textarea:focus, .is-success.input:focus, .taginput .is-success.is-focused.taginput-container.is-focusable, .is-success.is-focused.textarea, .is-success.is-focused.input, .taginput .is-success.taginput-container.is-focusable:active, .is-success.textarea:active, .is-success.input:active, .taginput .is-success.is-active.taginput-container.is-focusable, .is-success.is-active.textarea, .is-success.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.taginput .is-warning.taginput-container.is-focusable, .is-warning.textarea, .is-warning.input {\n  border-color: #ffe08a;\n}\n.taginput .is-warning.taginput-container.is-focusable:focus, .is-warning.textarea:focus, .is-warning.input:focus, .taginput .is-warning.is-focused.taginput-container.is-focusable, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .taginput .is-warning.taginput-container.is-focusable:active, .is-warning.textarea:active, .is-warning.input:active, .taginput .is-warning.is-active.taginput-container.is-focusable, .is-warning.is-active.textarea, .is-warning.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.taginput .is-danger.taginput-container.is-focusable, .is-danger.textarea, .is-danger.input {\n  border-color: #f14668;\n}\n.taginput .is-danger.taginput-container.is-focusable:focus, .is-danger.textarea:focus, .is-danger.input:focus, .taginput .is-danger.is-focused.taginput-container.is-focusable, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .taginput .is-danger.taginput-container.is-focusable:active, .is-danger.textarea:active, .is-danger.input:active, .taginput .is-danger.is-active.taginput-container.is-focusable, .is-danger.is-active.textarea, .is-danger.is-active.input {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.taginput .is-small.taginput-container.is-focusable, .is-small.textarea, .is-small.input {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.taginput .is-medium.taginput-container.is-focusable, .is-medium.textarea, .is-medium.input {\n  font-size: 1.25rem;\n}\n.taginput .is-large.taginput-container.is-focusable, .is-large.textarea, .is-large.input {\n  font-size: 1.5rem;\n}\n.taginput .is-fullwidth.taginput-container.is-focusable, .is-fullwidth.textarea, .is-fullwidth.input {\n  display: block;\n  width: 100%;\n}\n.taginput .is-inline.taginput-container.is-focusable, .is-inline.textarea, .is-inline.input {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n.textarea[rows] {\n  height: initial;\n}\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.radio, .checkbox {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.radio input, .checkbox input {\n  cursor: pointer;\n}\n.radio:hover, .checkbox:hover {\n  color: #363636;\n}\n[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,\n.radio input[disabled],\n.checkbox input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #7957d5;\n  right: 1.125em;\n  z-index: 4;\n}\n.select.is-rounded select {\n  border-radius: 9999px;\n  padding-left: 1em;\n}\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select[disabled]:hover, fieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n.select.is-white select {\n  border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n.select.is-light select {\n  border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n.select.is-dark select {\n  border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n  border-color: #7957d5;\n}\n.select.is-primary select {\n  border-color: #7957d5;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #6943d0;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select.is-link:not(:hover)::after {\n  border-color: #7957d5;\n}\n.select.is-link select {\n  border-color: #7957d5;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #6943d0;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select.is-info:not(:hover)::after {\n  border-color: #167df0;\n}\n.select.is-info select {\n  border-color: #167df0;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #0e71de;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.select.is-success:not(:hover)::after {\n  border-color: #48c78e;\n}\n.select.is-success select {\n  border-color: #48c78e;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb81;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n  border-color: #ffe08a;\n}\n.select.is-warning select {\n  border-color: #ffe08a;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd970;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n.select.is-danger select {\n  border-color: #f14668;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.select.is-medium {\n  font-size: 1.25rem;\n}\n.select.is-large {\n  font-size: 1.5rem;\n}\n.select.is-disabled::after {\n  border-color: #7a7a7a !important;\n  opacity: 0.5;\n}\n.select.is-fullwidth {\n  width: 100%;\n}\n.select.is-fullwidth select {\n  width: 100%;\n}\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  -webkit-transform: none;\n          transform: none;\n}\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary .file-cta {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n  color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link .file-cta {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n  color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info .file-cta {\n  background-color: #167df0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #0f77ea;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.25);\n          box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.25);\n  color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #0e71de;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success .file-cta {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n          box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n  color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-warning .file-cta {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n          box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  -webkit-box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n          box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-small {\n  font-size: 0.75rem;\n}\n.file.is-normal {\n  font-size: 1rem;\n}\n.file.is-medium {\n  font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-large {\n  font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n.file.is-boxed .file-label {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.file.is-boxed .file-cta {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n.file.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n.file.is-fullwidth .file-name {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: none;\n}\n.file.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1;\n}\n\n.file-label {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n.label.is-small {\n  font-size: 0.75rem;\n}\n.label.is-medium {\n  font-size: 1.25rem;\n}\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n  color: white;\n}\n.help.is-black {\n  color: #0a0a0a;\n}\n.help.is-light {\n  color: whitesmoke;\n}\n.help.is-dark {\n  color: #363636;\n}\n.help.is-primary {\n  color: #7957d5;\n}\n.help.is-link {\n  color: #7957d5;\n}\n.help.is-info {\n  color: #167df0;\n}\n.help.is-success {\n  color: #48c78e;\n}\n.help.is-warning {\n  color: #ffe08a;\n}\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.field.has-addons.has-addons-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.field.has-addons.has-addons-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.field.is-grouped {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.field.is-grouped > .control {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .field-label {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 5;\n        -ms-flex-positive: 5;\n            flex-grow: 5;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #7957d5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n  color: #363636;\n}\n.breadcrumb li {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"/\";\n}\n.breadcrumb ul,\n.breadcrumb ol {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"→\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"•\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"·\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"≻\";\n}\n\n.card {\n  background-color: white;\n  border-radius: 0.25rem;\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-footer:first-child, .card-content:first-child, .card-header:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-footer:last-child, .card-content:last-child, .card-header:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n          box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card-header-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n.card-header-title.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.card-header-icon {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card-footer-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item, .dropdown .dropdown-menu .has-link a {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item, .dropdown .dropdown-menu .has-link a,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\na.dropdown-item:hover, .dropdown .dropdown-menu .has-link a:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\na.dropdown-item.is-active, .dropdown .dropdown-menu .has-link a.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #7957d5;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.level code {\n  border-radius: 4px;\n}\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n.level.is-mobile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n}\n\n.level-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n.level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.level-right {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.media {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: inherit;\n}\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.media .media .media {\n  padding-top: 0.5rem;\n}\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n  font-size: 0.75rem;\n}\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.menu-list a.is-active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n  color: currentColor;\n}\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.message.is-small {\n  font-size: 0.75rem;\n}\n.message.is-medium {\n  font-size: 1.25rem;\n}\n.message.is-large {\n  font-size: 1.5rem;\n}\n.message.is-white {\n  background-color: white;\n}\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.message.is-white .message-body {\n  border-color: white;\n}\n.message.is-black {\n  background-color: #fafafa;\n}\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n.message.is-light {\n  background-color: #fafafa;\n}\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n.message.is-dark {\n  background-color: #fafafa;\n}\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n.message.is-primary {\n  background-color: #f2effb;\n}\n.message.is-primary .message-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.message.is-primary .message-body {\n  border-color: #7957d5;\n  color: #552fbc;\n}\n.message.is-link {\n  background-color: #f2effb;\n}\n.message.is-link .message-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.message.is-link .message-body {\n  border-color: #7957d5;\n  color: #552fbc;\n}\n.message.is-info {\n  background-color: #ecf4fe;\n}\n.message.is-info .message-header {\n  background-color: #167df0;\n  color: #fff;\n}\n.message.is-info .message-body {\n  border-color: #167df0;\n  color: #0d68ce;\n}\n.message.is-success {\n  background-color: #effaf5;\n}\n.message.is-success .message-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n.message.is-success .message-body {\n  border-color: #48c78e;\n  color: #257953;\n}\n.message.is-warning {\n  background-color: #fffaeb;\n}\n.message.is-warning .message-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n  border-color: #ffe08a;\n  color: #946c00;\n}\n.message.is-danger {\n  background-color: #feecf0;\n}\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 700;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-left: 0.75em;\n}\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px) {\n  .modal-content,\n.modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n.navbar.is-white .navbar-start .navbar-link,\n.navbar.is-white .navbar-end > .navbar-item,\n.navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n.navbar.is-white .navbar-start .navbar-link:focus,\n.navbar.is-white .navbar-start .navbar-link:hover,\n.navbar.is-white .navbar-start .navbar-link.is-active,\n.navbar.is-white .navbar-end > a.navbar-item:focus,\n.navbar.is-white .navbar-end > a.navbar-item:hover,\n.navbar.is-white .navbar-end > a.navbar-item.is-active,\n.navbar.is-white .navbar-end .navbar-link:focus,\n.navbar.is-white .navbar-end .navbar-link:hover,\n.navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n.navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n.navbar.is-black .navbar-start .navbar-link,\n.navbar.is-black .navbar-end > .navbar-item,\n.navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n.navbar.is-black .navbar-start .navbar-link:focus,\n.navbar.is-black .navbar-start .navbar-link:hover,\n.navbar.is-black .navbar-start .navbar-link.is-active,\n.navbar.is-black .navbar-end > a.navbar-item:focus,\n.navbar.is-black .navbar-end > a.navbar-item:hover,\n.navbar.is-black .navbar-end > a.navbar-item.is-active,\n.navbar.is-black .navbar-end .navbar-link:focus,\n.navbar.is-black .navbar-end .navbar-link:hover,\n.navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n.navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n.navbar.is-light .navbar-start .navbar-link,\n.navbar.is-light .navbar-end > .navbar-item,\n.navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n.navbar.is-light .navbar-start .navbar-link:focus,\n.navbar.is-light .navbar-start .navbar-link:hover,\n.navbar.is-light .navbar-start .navbar-link.is-active,\n.navbar.is-light .navbar-end > a.navbar-item:focus,\n.navbar.is-light .navbar-end > a.navbar-item:hover,\n.navbar.is-light .navbar-end > a.navbar-item.is-active,\n.navbar.is-light .navbar-end .navbar-link:focus,\n.navbar.is-light .navbar-end .navbar-link:hover,\n.navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n.navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n.navbar.is-dark .navbar-start .navbar-link,\n.navbar.is-dark .navbar-end > .navbar-item,\n.navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n.navbar.is-dark .navbar-start .navbar-link:focus,\n.navbar.is-dark .navbar-start .navbar-link:hover,\n.navbar.is-dark .navbar-start .navbar-link.is-active,\n.navbar.is-dark .navbar-end > a.navbar-item:focus,\n.navbar.is-dark .navbar-end > a.navbar-item:hover,\n.navbar.is-dark .navbar-end > a.navbar-item.is-active,\n.navbar.is-dark .navbar-end .navbar-link:focus,\n.navbar.is-dark .navbar-end .navbar-link:hover,\n.navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n.navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n.navbar.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n.navbar.is-primary .navbar-start .navbar-link,\n.navbar.is-primary .navbar-end > .navbar-item,\n.navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n.navbar.is-primary .navbar-start .navbar-link:focus,\n.navbar.is-primary .navbar-start .navbar-link:hover,\n.navbar.is-primary .navbar-start .navbar-link.is-active,\n.navbar.is-primary .navbar-end > a.navbar-item:focus,\n.navbar.is-primary .navbar-end > a.navbar-item:hover,\n.navbar.is-primary .navbar-end > a.navbar-item.is-active,\n.navbar.is-primary .navbar-end .navbar-link:focus,\n.navbar.is-primary .navbar-end .navbar-link:hover,\n.navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n.navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #7957d5;\n    color: #fff;\n  }\n}\n.navbar.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n.navbar.is-link .navbar-start .navbar-link,\n.navbar.is-link .navbar-end > .navbar-item,\n.navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n.navbar.is-link .navbar-start .navbar-link:focus,\n.navbar.is-link .navbar-start .navbar-link:hover,\n.navbar.is-link .navbar-start .navbar-link.is-active,\n.navbar.is-link .navbar-end > a.navbar-item:focus,\n.navbar.is-link .navbar-end > a.navbar-item:hover,\n.navbar.is-link .navbar-end > a.navbar-item.is-active,\n.navbar.is-link .navbar-end .navbar-link:focus,\n.navbar.is-link .navbar-end .navbar-link:hover,\n.navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n.navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #7957d5;\n    color: #fff;\n  }\n}\n.navbar.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #0e71de;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n.navbar.is-info .navbar-start .navbar-link,\n.navbar.is-info .navbar-end > .navbar-item,\n.navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n.navbar.is-info .navbar-start .navbar-link:focus,\n.navbar.is-info .navbar-start .navbar-link:hover,\n.navbar.is-info .navbar-start .navbar-link.is-active,\n.navbar.is-info .navbar-end > a.navbar-item:focus,\n.navbar.is-info .navbar-end > a.navbar-item:hover,\n.navbar.is-info .navbar-end > a.navbar-item.is-active,\n.navbar.is-info .navbar-end .navbar-link:focus,\n.navbar.is-info .navbar-end .navbar-link:hover,\n.navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #0e71de;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n.navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #0e71de;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #167df0;\n    color: #fff;\n  }\n}\n.navbar.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n.navbar.is-success .navbar-start .navbar-link,\n.navbar.is-success .navbar-end > .navbar-item,\n.navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n.navbar.is-success .navbar-start .navbar-link:focus,\n.navbar.is-success .navbar-start .navbar-link:hover,\n.navbar.is-success .navbar-start .navbar-link.is-active,\n.navbar.is-success .navbar-end > a.navbar-item:focus,\n.navbar.is-success .navbar-end > a.navbar-item:hover,\n.navbar.is-success .navbar-end > a.navbar-item.is-active,\n.navbar.is-success .navbar-end .navbar-link:focus,\n.navbar.is-success .navbar-end .navbar-link:hover,\n.navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n.navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c78e;\n    color: #fff;\n  }\n}\n.navbar.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n.navbar.is-warning .navbar-start .navbar-link,\n.navbar.is-warning .navbar-end > .navbar-item,\n.navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n.navbar.is-warning .navbar-start .navbar-link:focus,\n.navbar.is-warning .navbar-start .navbar-link:hover,\n.navbar.is-warning .navbar-start .navbar-link.is-active,\n.navbar.is-warning .navbar-end > a.navbar-item:focus,\n.navbar.is-warning .navbar-end > a.navbar-item:hover,\n.navbar.is-warning .navbar-end > a.navbar-item.is-active,\n.navbar.is-warning .navbar-end .navbar-link:focus,\n.navbar.is-warning .navbar-end .navbar-link:hover,\n.navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n.navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffe08a;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n.navbar.is-danger .navbar-start .navbar-link,\n.navbar.is-danger .navbar-end > .navbar-item,\n.navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n.navbar.is-danger .navbar-start .navbar-link:focus,\n.navbar.is-danger .navbar-start .navbar-link:hover,\n.navbar.is-danger .navbar-start .navbar-link.is-active,\n.navbar.is-danger .navbar-end > a.navbar-item:focus,\n.navbar.is-danger .navbar-end > a.navbar-item:hover,\n.navbar.is-danger .navbar-end > a.navbar-item.is-active,\n.navbar.is-danger .navbar-end .navbar-link:focus,\n.navbar.is-danger .navbar-end .navbar-link:hover,\n.navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n.navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n.navbar > .container {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n.navbar.has-shadow {\n  -webkit-box-shadow: 0 2px 0 0 whitesmoke;\n          box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n  -webkit-box-shadow: 0 -2px 0 0 whitesmoke;\n          box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transition-duration: 86ms;\n          transition-duration: 86ms;\n  -webkit-transition-property: background-color, opacity, -webkit-transform;\n  transition-property: background-color, opacity, -webkit-transform;\n  transition-property: background-color, opacity, transform;\n  transition-property: background-color, opacity, transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n  -webkit-transform: translateY(5px) rotate(45deg);\n          transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n  -webkit-transform: translateY(-5px) rotate(-45deg);\n          transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #7957d5;\n}\n\n.navbar-item {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.navbar-item img {\n  max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n.navbar-item.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #7957d5;\n}\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #7957d5;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #7957d5;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #7957d5;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n\n  .navbar-brand .navbar-item,\n.navbar-tabs .navbar-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n  .navbar-link::after {\n    display: none;\n  }\n\n  .navbar-menu {\n    background-color: white;\n    -webkit-box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n\n  html.has-navbar-fixed-top-touch,\nbody.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\nbody.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .navbar,\n.navbar-menu,\n.navbar-start,\n.navbar-end {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n.navbar.is-spaced .navbar-end {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n.navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n.navbar.is-transparent .navbar-link:focus,\n.navbar.is-transparent .navbar-link:hover,\n.navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #7957d5;\n  }\n\n  .navbar-burger {\n    display: none;\n  }\n\n  .navbar-item,\n.navbar-link {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n  .navbar-item.has-dropdown {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    -webkit-transform: rotate(135deg) translate(0.25em, -0.25em);\n            transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    -webkit-box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n\n  .navbar-menu {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n\n  .navbar-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-right: auto;\n  }\n\n  .navbar-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-left: auto;\n  }\n\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #7957d5;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px);\n    -webkit-transition-duration: 86ms;\n            transition-duration: 86ms;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n\n  .navbar-divider {\n    display: block;\n  }\n\n  .navbar > .container .navbar-brand,\n.container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n.container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n\n  html.has-navbar-fixed-top-desktop,\nbody.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\nbody.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\nbody.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\nbody.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n\n  a.navbar-item.is-active,\n.navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n.navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 9999px;\n}\n.pagination.is-rounded .pagination-link {\n  border-radius: 9999px;\n}\n\n.pagination,\n.pagination-list {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #7957d5;\n}\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled], .pagination-previous.is-disabled,\n.pagination-next[disabled],\n.pagination-next.is-disabled,\n.pagination-link[disabled],\n.pagination-link.is-disabled {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .pagination-previous,\n.pagination-next {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n\n  .pagination-list li {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n\n  .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n\n  .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n\n  .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  .pagination {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n  .pagination.is-centered .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n}\n.panel {\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n.panel.is-primary .panel-heading {\n  background-color: #7957d5;\n  color: #fff;\n}\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #7957d5;\n}\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel.is-link .panel-heading {\n  background-color: #7957d5;\n  color: #fff;\n}\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #7957d5;\n}\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel.is-info .panel-heading {\n  background-color: #167df0;\n  color: #fff;\n}\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #167df0;\n}\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #167df0;\n}\n.panel.is-success .panel-heading {\n  background-color: #48c78e;\n  color: #fff;\n}\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c78e;\n}\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c78e;\n}\n.panel.is-warning .panel-heading {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffe08a;\n}\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffe08a;\n}\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.875em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n  color: #7957d5;\n}\n\n.panel-block {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=checkbox] {\n  margin-right: 0.75em;\n}\n.panel-block > .control {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  width: 100%;\n}\n.panel-block.is-wrapped {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.panel-block.is-active {\n  border-left-color: #7957d5;\n  color: #363636;\n}\n.panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n.tabs li {\n  display: block;\n}\n.tabs li.is-active a {\n  border-bottom-color: #7957d5;\n  color: #7957d5;\n}\n.tabs ul {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n.tabs ul.is-center {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.tabs ul.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tabs.is-right ul {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.tabs.is-toggle li.is-active a {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n  z-index: 1;\n}\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 9999px;\n  border-top-left-radius: 9999px;\n  padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 9999px;\n  border-top-right-radius: 9999px;\n  padding-right: 1.25em;\n}\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: unset;\n}\n.columns.is-mobile > .column.is-full {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n.columns.is-mobile > .column.is-0 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 0%;\n}\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n.columns.is-mobile > .column.is-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 8.33333337%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333337%;\n}\n.columns.is-mobile > .column.is-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 16.66666674%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66666674%;\n}\n.columns.is-mobile > .column.is-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 33.33333337%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333337%;\n}\n.columns.is-mobile > .column.is-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 41.66666674%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66666674%;\n}\n.columns.is-mobile > .column.is-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 58.33333337%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333337%;\n}\n.columns.is-mobile > .column.is-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 66.66666674%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66666674%;\n}\n.columns.is-mobile > .column.is-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 83.33333337%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333337%;\n}\n.columns.is-mobile > .column.is-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 91.66666674%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66666674%;\n}\n.columns.is-mobile > .column.is-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-mobile {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-touch {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-desktop {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-widescreen {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-fullhd {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n.columns.is-mobile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.columns.is-multiline {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.columns.is-vcentered {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.tile.is-child {\n  margin: 0 !important;\n}\n.tile.is-parent {\n  padding: 0.75rem;\n}\n.tile.is-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .tile.is-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333337%;\n  }\n  .tile.is-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666674%;\n  }\n  .tile.is-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333337%;\n  }\n  .tile.is-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666674%;\n  }\n  .tile.is-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333337%;\n  }\n  .tile.is-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666674%;\n  }\n  .tile.is-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333337%;\n  }\n  .tile.is-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666674%;\n  }\n  .tile.is-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #7957d5 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #5a32c7 !important;\n}\n\n.has-background-primary {\n  background-color: #7957d5 !important;\n}\n\n.has-text-primary-light {\n  color: #f2effb !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #d1c6f1 !important;\n}\n\n.has-background-primary-light {\n  background-color: #f2effb !important;\n}\n\n.has-text-primary-dark {\n  color: #552fbc !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #704bd2 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #552fbc !important;\n}\n\n.has-text-link {\n  color: #7957d5 !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #5a32c7 !important;\n}\n\n.has-background-link {\n  background-color: #7957d5 !important;\n}\n\n.has-text-link-light {\n  color: #f2effb !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #d1c6f1 !important;\n}\n\n.has-background-link-light {\n  background-color: #f2effb !important;\n}\n\n.has-text-link-dark {\n  color: #552fbc !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #704bd2 !important;\n}\n\n.has-background-link-dark {\n  background-color: #552fbc !important;\n}\n\n.has-text-info {\n  color: #167df0 !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0d64c6 !important;\n}\n\n.has-background-info {\n  background-color: #167df0 !important;\n}\n\n.has-text-info-light {\n  color: #ecf4fe !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #bcdafb !important;\n}\n\n.has-background-info-light {\n  background-color: #ecf4fe !important;\n}\n\n.has-text-info-dark {\n  color: #0d68ce !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #1e81f1 !important;\n}\n\n.has-background-info-dark {\n  background-color: #0d68ce !important;\n}\n\n.has-text-success {\n  color: #48c78e !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a873 !important;\n}\n\n.has-background-success {\n  background-color: #48c78e !important;\n}\n\n.has-text-success-light {\n  color: #effaf5 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eedd !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf5 !important;\n}\n\n.has-text-success-dark {\n  color: #257953 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a06e !important;\n}\n\n.has-background-success-dark {\n  background-color: #257953 !important;\n}\n\n.has-text-warning {\n  color: #ffe08a !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd257 !important;\n}\n\n.has-background-warning {\n  background-color: #ffe08a !important;\n}\n\n.has-text-warning-light {\n  color: #fffaeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #ffecb8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffaeb !important;\n}\n\n.has-text-warning-dark {\n  color: #946c00 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79200 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #946c00 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  -webkit-box-pack: space-evenly !important;\n      -ms-flex-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: start !important;\n}\n\n.is-justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: end !important;\n}\n\n.is-justify-content-left {\n  -webkit-box-pack: left !important;\n      -ms-flex-pack: left !important;\n          justify-content: left !important;\n}\n\n.is-justify-content-right {\n  -webkit-box-pack: right !important;\n      -ms-flex-pack: right !important;\n          justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n}\n\n.is-align-content-space-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  -ms-flex-line-pack: space-evenly !important;\n      align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important;\n}\n\n.is-align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: start !important;\n}\n\n.is-align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: end !important;\n}\n\n.is-align-content-baseline {\n  -ms-flex-line-pack: baseline !important;\n      align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n}\n\n.is-align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important;\n}\n\n.is-align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: start !important;\n}\n\n.is-align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: end !important;\n}\n\n.is-align-items-self-start {\n  -webkit-box-align: self-start !important;\n      -ms-flex-align: self-start !important;\n          align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  -webkit-box-align: self-end !important;\n      -ms-flex-align: self-end !important;\n          align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  -ms-flex-item-align: auto !important;\n      align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  -ms-flex-item-align: center !important;\n      align-self: center !important;\n}\n\n.is-align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  -webkit-box-flex: 2 !important;\n      -ms-flex-positive: 2 !important;\n          flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  -webkit-box-flex: 3 !important;\n      -ms-flex-positive: 3 !important;\n          flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  -webkit-box-flex: 4 !important;\n      -ms-flex-positive: 4 !important;\n          flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  -webkit-box-flex: 5 !important;\n      -ms-flex-positive: 5 !important;\n          flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n      flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n      flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  -ms-flex-negative: 2 !important;\n      flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  -ms-flex-negative: 3 !important;\n      flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  -ms-flex-negative: 4 !important;\n      flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  -ms-flex-negative: 5 !important;\n      flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.p-auto {\n  padding: auto !important;\n}\n\n.pt-auto {\n  padding-top: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.pb-auto {\n  padding-bottom: auto !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important;\n}\n\n.py-auto {\n  padding-top: auto !important;\n  padding-bottom: auto !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.is-underlined {\n  text-decoration: underline !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n.is-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n}\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n.is-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n/* Bulma Layout */\n.hero {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.hero .navbar {\n  background: none;\n}\n.hero .tabs ul {\n  border-bottom: none;\n}\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n  color: white !important;\n  opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n  }\n}\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n.hero.is-black .title {\n  color: white;\n}\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n  color: #0a0a0a !important;\n  opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n  color: whitesmoke !important;\n  opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n.hero.is-dark .title {\n  color: #fff;\n}\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n  color: #363636 !important;\n  opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n.hero.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n.hero.is-primary .title {\n  color: #fff;\n}\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #7957d5;\n  }\n}\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n  color: #7957d5 !important;\n  opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #7957d5;\n}\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n  }\n}\n.hero.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n.hero.is-link .title {\n  color: #fff;\n}\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #7957d5;\n  }\n}\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n  color: #7957d5 !important;\n  opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #7957d5;\n}\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n  }\n}\n.hero.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n.hero.is-info .title {\n  color: #fff;\n}\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #167df0;\n  }\n}\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #0e71de;\n  color: #fff;\n}\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n  color: #167df0 !important;\n  opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #167df0;\n}\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);\n  }\n}\n.hero.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n.hero.is-success .title {\n  color: #fff;\n}\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c78e;\n  }\n}\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n  color: #48c78e !important;\n  opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c78e;\n}\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n  }\n}\n.hero.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffe08a;\n  }\n}\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n  color: #ffe08a !important;\n  opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n  }\n}\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n.hero.is-danger .title {\n  color: #fff;\n}\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n  color: #f14668 !important;\n  opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 4.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 6rem;\n  }\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.hero-body {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero-body {\n    padding: 3rem 3rem;\n  }\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .section {\n    padding: 3rem 3rem;\n  }\n  .section.is-medium {\n    padding: 9rem 4.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 6rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n\n.is-noscroll {\n  position: fixed;\n  overflow-y: hidden;\n  width: 100%;\n  bottom: 0;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n          animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n\n/**\n * Vue Transitions\n */\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n.zoom-in-enter-active,\n.zoom-in-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n.zoom-in-enter-active .animation-content,\n.zoom-in-enter-active .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n\n.zoom-in-enter,\n.zoom-in-leave-active {\n  opacity: 0;\n}\n.zoom-in-enter .animation-content,\n.zoom-in-enter .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n.zoom-out-enter-active,\n.zoom-out-leave-active {\n  -webkit-transition: opacity 150ms ease-out;\n  transition: opacity 150ms ease-out;\n}\n.zoom-out-enter-active .animation-content,\n.zoom-out-enter-active .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n}\n\n.zoom-out-enter,\n.zoom-out-leave-active {\n  opacity: 0;\n}\n.zoom-out-enter .animation-content,\n.zoom-out-enter .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\n.slide-next-enter-active,\n.slide-next-leave-active,\n.slide-prev-enter-active,\n.slide-prev-leave-active {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-prev-leave-to, .slide-next-enter {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-prev-enter, .slide-next-leave-to {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-down-enter-active,\n.slide-down-leave-active,\n.slide-up-enter-active,\n.slide-up-leave-active {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-up-leave-to, .slide-down-enter {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-up-enter, .slide-down-leave-to {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-enter-active {\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n}\n\n.slide-leave-active {\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n          transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n\n.slide-enter-to, .slide-leave {\n  max-height: 100px;\n  overflow: hidden;\n}\n\n.slide-enter, .slide-leave-to {\n  overflow: hidden;\n  max-height: 0;\n}\n\n.autocomplete {\n  position: relative;\n}\n.autocomplete .dropdown-menu {\n  display: block;\n  width: 100%;\n}\n.autocomplete .dropdown-menu.is-opened-top {\n  top: auto;\n  bottom: 100%;\n}\n.autocomplete .dropdown-content {\n  overflow: auto;\n  max-height: 200px;\n}\n.autocomplete .dropdown-item, .autocomplete .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .autocomplete a {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.autocomplete .dropdown-item.is-hovered, .autocomplete .dropdown .dropdown-menu .has-link a.is-hovered, .dropdown .dropdown-menu .has-link .autocomplete a.is-hovered {\n  background: whitesmoke;\n  color: #0a0a0a;\n}\n.autocomplete .dropdown-item.is-disabled, .autocomplete .dropdown .dropdown-menu .has-link a.is-disabled, .dropdown .dropdown-menu .has-link .autocomplete a.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.autocomplete.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.autocomplete.is-medium {\n  font-size: 1.25rem;\n}\n.autocomplete.is-large {\n  font-size: 1.5rem;\n}\n\n.carousel {\n  min-height: 120px;\n  position: relative;\n}\n.carousel.is-overlay {\n  background-color: rgba(10, 10, 10, 0.86);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 100vh;\n  position: fixed;\n  z-index: 40;\n}\n.carousel.is-overlay .carousel-item img {\n  cursor: default;\n}\n.carousel.is-overlay .carousel-indicator.has-background {\n  background: transparent;\n}\n.carousel .progress, .carousel .progress-wrapper.is-not-native {\n  border-radius: 2px;\n  height: 0.25rem;\n  margin-bottom: 0;\n}\n.carousel .carousel-items {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .carousel .carousel-items:hover .carousel-arrow.is-hovered {\n    opacity: 1;\n  }\n}\n.carousel .carousel-items .carousel-item {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 100%;\n}\n.carousel .carousel-pause {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0.15rem;\n  z-index: 1;\n}\n.carousel .carousel-indicator {\n  width: 100%;\n  padding: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.carousel .carousel-indicator.has-background {\n  background: rgba(10, 10, 10, 0.5);\n}\n.carousel .carousel-indicator.has-custom {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-overflow-scrolling: touch;\n  overflow: hidden;\n  overflow-x: auto;\n}\n.carousel .carousel-indicator.has-custom.is-small .indicator-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 10%;\n          flex: 1 0 10%;\n}\n.carousel .carousel-indicator.has-custom.is-medium .indicator-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 16.66667%;\n          flex: 1 0 16.66667%;\n}\n.carousel .carousel-indicator.is-inside {\n  position: absolute;\n}\n.carousel .carousel-indicator.is-inside.is-bottom {\n  bottom: 0;\n}\n.carousel .carousel-indicator.is-inside.is-top {\n  top: 0;\n}\n.carousel .carousel-indicator .indicator-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.carousel .carousel-indicator .indicator-item.is-active .indicator-style,\n.carousel .carousel-indicator .indicator-item .indicator-style:hover {\n  background: #7957d5;\n  border: 1px solid white;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style {\n  display: block;\n  border: 1px solid #7957d5;\n  background: white;\n  outline: none;\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes {\n  height: 10px;\n  width: 10px;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-dots {\n  border-radius: 9999px;\n  height: 10px;\n  width: 10px;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-lines {\n  height: 5px;\n  width: 25px;\n}\n\n.carousel-list {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-list.has-shadow {\n  -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 769px), print {\n  .carousel-list:hover .carousel-arrow.is-hovered {\n    opacity: 1;\n  }\n}\n.carousel-list .carousel-slides {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n.carousel-list .carousel-slides:not(.is-dragging) {\n  -webkit-transition: all 250ms ease-out 0s;\n  transition: all 250ms ease-out 0s;\n}\n.carousel-list .carousel-slides.has-grayscale .carousel-slide img {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img {\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n.carousel-list .carousel-slides.has-opacity .carousel-slide img {\n  opacity: 0.25;\n}\n.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img {\n  opacity: 1;\n}\n.carousel-list .carousel-slides .carousel-slide {\n  border: 2px solid transparent;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.carousel-arrow {\n  -webkit-transition: 150ms ease-out;\n  transition: 150ms ease-out;\n}\n.carousel-arrow.is-hovered {\n  opacity: 0;\n}\n.carousel-arrow .icon {\n  background: white;\n  color: #7957d5;\n  cursor: pointer;\n  border: 1px solid white;\n  border-radius: 9999px;\n  outline: 0;\n}\n.carousel-arrow .icon:hover {\n  border: 1px solid #7957d5;\n  opacity: 1;\n}\n.carousel-arrow .icon.has-icons-left, .carousel-arrow .icon.has-icons-right {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 1;\n}\n.carousel-arrow .icon.has-icons-left {\n  left: 1.5rem;\n}\n.carousel-arrow .icon.has-icons-right {\n  right: 1.5rem;\n}\n\n.b-checkbox.checkbox {\n  outline: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.b-checkbox.checkbox:not(.button) {\n  margin-right: 0.5em;\n}\n.b-checkbox.checkbox:not(.button) + .checkbox:last-child {\n  margin-right: 0;\n}\n.b-checkbox.checkbox input[type=checkbox] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.b-checkbox.checkbox input[type=checkbox] + .check {\n  width: 1.25em;\n  height: 1.25em;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border-radius: 4px;\n  border: 2px solid #7a7a7a;\n  -webkit-transition: background 150ms ease-out;\n  transition: background 150ms ease-out;\n  background: transparent;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-white {\n  background: white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%230a0a0a' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: white;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-black {\n  background: #0a0a0a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:white' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-light {\n  background: whitesmoke url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-dark {\n  background: #363636 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #363636;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-primary {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-link {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-info {\n  background: #167df0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #167df0;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-success {\n  background: #48c78e url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-warning {\n  background: #ffe08a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-danger {\n  background: #f14668 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #f14668;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-white {\n  background: white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%230a0a0a' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: white;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-black {\n  background: #0a0a0a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:white' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-light {\n  background: whitesmoke url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-dark {\n  background: #363636 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #363636;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-primary {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-link {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-info {\n  background: #167df0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #167df0;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-success {\n  background: #48c78e url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-warning {\n  background: #ffe08a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-danger {\n  background: #f14668 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #f14668;\n}\n.b-checkbox.checkbox input[type=checkbox]:focus + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n          box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-white {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-black {\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-light {\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-dark {\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-primary {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-link {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-info {\n  -webkit-box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n          box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-success {\n  -webkit-box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n          box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-warning {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-danger {\n  -webkit-box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n          box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.b-checkbox.checkbox .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.b-checkbox.checkbox.button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.b-checkbox.checkbox[disabled] {\n  opacity: 0.5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-white {\n  border-color: white;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-dark {\n  border-color: #363636;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-link {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-info {\n  border-color: #167df0;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-success {\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-danger {\n  border-color: #f14668;\n}\n.b-checkbox.checkbox.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-checkbox.checkbox.is-medium {\n  font-size: 1.25rem;\n}\n.b-checkbox.checkbox.is-large {\n  font-size: 1.5rem;\n}\n\n.b-clockpicker .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-white .card-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.b-clockpicker.is-white .b-clockpicker-face:after {\n  background-color: white;\n}\n.b-clockpicker.is-white .b-clockpicker-face-hand {\n  background-color: white;\n  border-color: white;\n}\n.b-clockpicker.is-white .b-clockpicker-face-number.active {\n  background-color: white;\n  color: #0a0a0a;\n}\n.b-clockpicker.is-black .card-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.b-clockpicker.is-black .b-clockpicker-face:after {\n  background-color: #0a0a0a;\n}\n.b-clockpicker.is-black .b-clockpicker-face-hand {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n}\n.b-clockpicker.is-black .b-clockpicker-face-number.active {\n  background-color: #0a0a0a;\n  color: white;\n}\n.b-clockpicker.is-light .card-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-light .b-clockpicker-face:after {\n  background-color: whitesmoke;\n}\n.b-clockpicker.is-light .b-clockpicker-face-hand {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n}\n.b-clockpicker.is-light .b-clockpicker-face-number.active {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-dark .card-header {\n  background-color: #363636;\n  color: #fff;\n}\n.b-clockpicker.is-dark .b-clockpicker-face:after {\n  background-color: #363636;\n}\n.b-clockpicker.is-dark .b-clockpicker-face-hand {\n  background-color: #363636;\n  border-color: #363636;\n}\n.b-clockpicker.is-dark .b-clockpicker-face-number.active {\n  background-color: #363636;\n  color: #fff;\n}\n.b-clockpicker.is-primary .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-primary .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker.is-primary .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker.is-primary .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-link .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-link .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker.is-link .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker.is-link .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-info .card-header {\n  background-color: #167df0;\n  color: #fff;\n}\n.b-clockpicker.is-info .b-clockpicker-face:after {\n  background-color: #167df0;\n}\n.b-clockpicker.is-info .b-clockpicker-face-hand {\n  background-color: #167df0;\n  border-color: #167df0;\n}\n.b-clockpicker.is-info .b-clockpicker-face-number.active {\n  background-color: #167df0;\n  color: #fff;\n}\n.b-clockpicker.is-success .card-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n.b-clockpicker.is-success .b-clockpicker-face:after {\n  background-color: #48c78e;\n}\n.b-clockpicker.is-success .b-clockpicker-face-hand {\n  background-color: #48c78e;\n  border-color: #48c78e;\n}\n.b-clockpicker.is-success .b-clockpicker-face-number.active {\n  background-color: #48c78e;\n  color: #fff;\n}\n.b-clockpicker.is-warning .card-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-warning .b-clockpicker-face:after {\n  background-color: #ffe08a;\n}\n.b-clockpicker.is-warning .b-clockpicker-face-hand {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n}\n.b-clockpicker.is-warning .b-clockpicker-face-number.active {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-danger .card-header {\n  background-color: #f14668;\n  color: #fff;\n}\n.b-clockpicker.is-danger .b-clockpicker-face:after {\n  background-color: #f14668;\n}\n.b-clockpicker.is-danger .b-clockpicker-face-hand {\n  background-color: #f14668;\n  border-color: #f14668;\n}\n.b-clockpicker.is-danger .b-clockpicker-face-number.active {\n  background-color: #f14668;\n  color: #fff;\n}\n.b-clockpicker .dropdown-menu {\n  min-width: 0;\n}\n.b-clockpicker .dropdown,\n.b-clockpicker .dropdown-trigger {\n  width: 100%;\n}\n.b-clockpicker .dropdown .input[readonly],\n.b-clockpicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n          box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.b-clockpicker .dropdown .input[readonly]:focus, .b-clockpicker .dropdown .input[readonly].is-focused, .b-clockpicker .dropdown .input[readonly]:active, .b-clockpicker .dropdown .input[readonly].is-active,\n.b-clockpicker .dropdown-trigger .input[readonly]:focus,\n.b-clockpicker .dropdown-trigger .input[readonly].is-focused,\n.b-clockpicker .dropdown-trigger .input[readonly]:active,\n.b-clockpicker .dropdown-trigger .input[readonly].is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-clockpicker .dropdown-item, .b-clockpicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .b-clockpicker a {\n  font-size: inherit;\n  padding: 0;\n}\n.b-clockpicker .dropdown-content {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.b-clockpicker .card {\n  border-radius: 0.25rem;\n}\n.b-clockpicker .card-header {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.b-clockpicker .card-content {\n  padding: 12px;\n}\n.b-clockpicker-btn {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.b-clockpicker-btn:hover, .b-clockpicker-btn.active {\n  opacity: 1;\n}\n.b-clockpicker-period .b-clockpicker-btn {\n  font-size: 16px;\n}\n.b-clockpicker-time span {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.b-clockpicker-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 1;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  color: inherit;\n}\n.b-clockpicker-header .b-clockpicker-time {\n  white-space: nowrap;\n}\n.b-clockpicker-header .b-clockpicker-time span {\n  height: 60px;\n  font-size: 60px;\n}\n.b-clockpicker-header .b-clockpicker-period {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 8px 0 6px 8px;\n}\n.b-clockpicker-body {\n  -webkit-transition: 0.9s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transition: 0.9s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.b-clockpicker-body .b-clockpicker-btn {\n  padding: 0 8px;\n  border-radius: 9999px;\n  margin-bottom: 2px;\n}\n.b-clockpicker-body .b-clockpicker-btn:hover, .b-clockpicker-body .b-clockpicker-btn.active {\n  background-color: #7957d5;\n  color: white;\n}\n.b-clockpicker-body .b-clockpicker-period {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.b-clockpicker-body .b-clockpicker-time {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 16px;\n}\n.b-clockpicker-body .b-clockpicker-face {\n  border-radius: 50%;\n  position: relative;\n  background-color: #dbdbdb;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.b-clockpicker-body .b-clockpicker-face:after {\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.b-clockpicker-body .b-clockpicker-face-outer-ring {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: calc(100% - 50px);\n  width: calc(100% - 50px);\n  position: relative;\n  border-radius: 50%;\n}\n.b-clockpicker-body .b-clockpicker-face-number {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 18px;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: calc(50% - 40px * 0.5);\n  top: calc(50% - 40px * 0.5);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.b-clockpicker-body .b-clockpicker-face-number > span {\n  z-index: 1;\n}\n.b-clockpicker-body .b-clockpicker-face-number:before, .b-clockpicker-body .b-clockpicker-face-number:after {\n  content: \"\";\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.b-clockpicker-body .b-clockpicker-face-number.active {\n  cursor: default;\n  z-index: 2;\n}\n.b-clockpicker-body .b-clockpicker-face-number.disabled {\n  pointer-events: none;\n  opacity: 0.25;\n}\n.b-clockpicker-body .b-clockpicker-face-hand {\n  height: calc(50% - 6px);\n  width: 2px;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n  position: absolute;\n  will-change: transform;\n  z-index: 1;\n}\n.b-clockpicker-body .b-clockpicker-face-hand:before {\n  background: transparent;\n  border-width: 2px;\n  border-style: solid;\n  border-color: inherit;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.b-clockpicker-footer {\n  display: block;\n  padding: 12px;\n}\n.b-clockpicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-clockpicker.is-medium {\n  font-size: 1.25rem;\n}\n.b-clockpicker.is-large {\n  font-size: 1.5rem;\n}\n\n.collapse .collapse-trigger {\n  display: inline;\n  cursor: pointer;\n}\n.collapse .collapse-content {\n  display: inherit;\n}\n\n.colorpicker .color-name {\n  font-family: monospace;\n  text-transform: uppercase;\n}\n.colorpicker .colorpicker-footer {\n  margin-top: 0.875rem;\n  padding-top: 0.875rem;\n  border: 1px solid #dbdbdb;\n  border-width: 1px 0 0 0;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields {\n  margin-bottom: 0.875rem;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .field-label {\n  margin-right: 0.5rem;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input {\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n  appearance: textfield;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  width: 0;\n  min-width: 42px;\n  text-align: right;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-outer-spin-button, .colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.colorpicker .dropdown.is-expanded .dropdown-menu,\n.colorpicker .dropdown.is-expanded.is-mobile-modal .dropdown-menu {\n  width: unset;\n}\n.colorpicker .dropdown-horizontal-colorpicker {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.colorpicker .dropdown-horizontal-colorpicker .colorpicker-footer {\n  border-width: 0 0 0 1px;\n  margin-top: 0;\n  padding-top: 0;\n  margin-left: 0.875rem;\n  padding-left: 0.875rem;\n}\n\nsvg.b-colorpicker-triangle {\n  width: 200px;\n  height: 200px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n@media (max-width: 769px) {\n  svg.b-colorpicker-triangle {\n    width: 100%;\n    height: auto;\n  }\n}\nsvg.b-colorpicker-triangle .colorpicker-triangle-hue {\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);\n}\nsvg.b-colorpicker-triangle .colorpicker-triangle-slider-hue, svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue foreignObject, svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue g, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl foreignObject, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl g {\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb,\nsvg.b-colorpicker-triangle .sl-range-thumb {\n  background: transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: -webkit-grab;\n  cursor: grab;\n  height: calc(100%/1 - .25em/1);\n  width: calc(100%/1 - .25em/1);\n  margin: 0.125em;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:hover,\nsvg.b-colorpicker-triangle .sl-range-thumb:hover {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #b5b5b5;\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #b5b5b5;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:focus,\nsvg.b-colorpicker-triangle .sl-range-thumb:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:active,\nsvg.b-colorpicker-triangle .sl-range-thumb:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\ndiv.b-colorpicker-square {\n  position: relative;\n  aspect-ratio: 1/1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue {\n  background: conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);\n  border-radius: 4px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb {\n  border-radius: calc(4px / 1.75);\n  position: absolute;\n  aspect-ratio: 1/1;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:hover {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n          box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl {\n  background: #fff;\n  border-radius: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl::before {\n  content: \"\";\n  background: -webkit-gradient(linear, left bottom, left top, from(#000), to(#fff));\n  background: linear-gradient(0deg, #000, #fff);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  mix-blend-mode: hard-light;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb {\n  display: block;\n  border-radius: 4px;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:hover {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n          box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.b-colorpicker-alpha-slider {\n  height: 1em;\n  background-image: linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7), linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7);\n  background-size: 1em 1em;\n  background-position: 0.5em 0.5em, 0 0;\n  border-radius: 4px;\n  margin-top: 0.125em;\n  margin-bottom: 0.875rem;\n  position: relative;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb {\n  width: 0.4em;\n  height: 1.25em;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #dbdbdb, 0 0 0 1px #dbdbdb;\n          box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #dbdbdb, 0 0 0 1px #dbdbdb;\n  cursor: -webkit-grab;\n  cursor: grab;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:hover {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n          box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:focus {\n  -webkit-box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb > .b-tooltip, .b-colorpicker-alpha-slider .alpha-range-thumb > .b-tooltip > .tooltip-trigger {\n  position: absolute;\n  display: block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.datepicker {\n  font-size: 0.875rem;\n}\n.datepicker .dropdown,\n.datepicker .dropdown-trigger {\n  width: 100%;\n}\n.datepicker .dropdown .input[readonly],\n.datepicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n          box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.datepicker .dropdown .input[readonly]:focus, .datepicker .dropdown .input[readonly].is-focused, .datepicker .dropdown .input[readonly]:active, .datepicker .dropdown .input[readonly].is-active,\n.datepicker .dropdown-trigger .input[readonly]:focus,\n.datepicker .dropdown-trigger .input[readonly].is-focused,\n.datepicker .dropdown-trigger .input[readonly]:active,\n.datepicker .dropdown-trigger .input[readonly].is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.datepicker .dropdown.is-disabled {\n  opacity: 1;\n}\n.datepicker .dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n}\n.datepicker .dropdown-item, .datepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .datepicker a {\n  font-size: inherit;\n}\n.datepicker .datepicker-header {\n  padding-bottom: 0.875rem;\n  margin-bottom: 0.875rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.datepicker .datepicker-footer {\n  margin-top: 0.875rem;\n  padding-top: 0.875rem;\n  border-top: 1px solid #dbdbdb;\n}\n.datepicker .datepicker-table {\n  display: table;\n  margin: 0 auto 0 auto;\n}\n.datepicker .datepicker-table .datepicker-cell {\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  border-radius: 4px;\n  padding: 0.5rem 0.75rem;\n}\n.datepicker .datepicker-table .datepicker-header {\n  display: table-header-group;\n}\n.datepicker .datepicker-table .datepicker-header .datepicker-cell {\n  color: #7a7a7a;\n  font-weight: 600;\n}\n.datepicker .datepicker-table .datepicker-body {\n  display: table-row-group;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-row {\n  display: table-row;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-months {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 17rem;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 33.33%;\n  height: 2.5rem;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable {\n  color: #b5b5b5;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today {\n  border: solid 1px rgba(121, 87, 213, 0.5);\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable {\n  color: #4a4a4a;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected), .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected) {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n  cursor: pointer;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered {\n  background-color: #7a7a7a;\n  color: #dbdbdb;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n  border-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered {\n  background-color: #7a7a7a;\n  color: #dbdbdb;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected {\n  background-color: #7957d5;\n  color: #fff;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected {\n  background-color: rgba(121, 87, 213, 0.5);\n  border-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected {\n  background-color: #7957d5;\n  color: #fff;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected) {\n  color: #b5b5b5;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number {\n  cursor: default;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell {\n  padding: 0.3rem 0.75rem 0.75rem;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event {\n  position: relative;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events {\n  bottom: 0.425rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  left: 0;\n  padding: 0 0.35rem;\n  position: absolute;\n  width: 100%;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white {\n  background-color: white;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black {\n  background-color: #0a0a0a;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light {\n  background-color: whitesmoke;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark {\n  background-color: #363636;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary {\n  background-color: #7957d5;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link {\n  background-color: #7957d5;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info {\n  background-color: #167df0;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success {\n  background-color: #48c78e;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning {\n  background-color: #ffe08a;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger {\n  background-color: #f14668;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event {\n  border-radius: 50%;\n  height: 0.35em;\n  margin: 0 0.1em;\n  width: 0.35em;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event {\n  height: 0.25em;\n  width: 100%;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected {\n  overflow: hidden;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary {\n  background-color: #aa94e4;\n}\n.datepicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.datepicker.is-medium {\n  font-size: 1.25rem;\n}\n.datepicker.is-large {\n  font-size: 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .datepicker .footer-horizontal-timepicker {\n    border: none;\n    padding-left: 10px;\n    margin-left: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .datepicker .dropdown-horizontal-timepicker {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .datepicker .content-horizontal-timepicker {\n    border-right: 1px solid #dbdbdb;\n  }\n}\n\n.dialog .modal-card {\n  max-width: 460px;\n  width: auto;\n}\n.dialog .modal-card .modal-card-head {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.dialog .modal-card .modal-card-body .field {\n  margin-top: 16px;\n}\n.dialog .modal-card .modal-card-body.is-titleless {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.dialog .modal-card .modal-card-foot {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.dialog .modal-card .modal-card-foot .button {\n  display: inline;\n  min-width: 5em;\n  font-weight: 600;\n}\n@media screen and (min-width: 769px), print {\n  .dialog .modal-card {\n    min-width: 320px;\n  }\n}\n.dialog.is-small .modal-card,\n.dialog.is-small .input,\n.dialog.is-small .button {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.dialog.is-medium .modal-card,\n.dialog.is-medium .input,\n.dialog.is-medium .button {\n  font-size: 1.25rem;\n}\n.dialog.is-large .modal-card,\n.dialog.is-large .input,\n.dialog.is-large .button {\n  font-size: 1.5rem;\n}\n.dialog.has-custom-container {\n  position: absolute;\n}\n\n.dropdown + .dropdown {\n  margin-left: 0.5em;\n}\n.dropdown .background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  position: fixed;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 40;\n  cursor: pointer;\n}\n@media screen and (min-width: 1024px) {\n  .dropdown .background {\n    display: none;\n  }\n}\n.dropdown.dropdown-menu-animation .dropdown-menu {\n  display: block;\n}\n.dropdown .dropdown-menu .dropdown-item.is-disabled, .dropdown .dropdown-menu .has-link a.is-disabled {\n  cursor: not-allowed;\n}\n.dropdown .dropdown-menu .dropdown-item.is-disabled:hover, .dropdown .dropdown-menu .has-link a.is-disabled:hover {\n  background: inherit;\n  color: inherit;\n}\n.dropdown .dropdown-menu .has-link a {\n  padding-right: 3rem;\n  white-space: nowrap;\n}\n.dropdown.is-hoverable:not(.is-active) .dropdown-menu {\n  display: none;\n}\n.dropdown.is-hoverable:hover .dropdown-menu {\n  display: inherit;\n}\n.dropdown.is-expanded {\n  width: 100%;\n}\n.dropdown.is-expanded .dropdown-trigger {\n  width: 100%;\n}\n.dropdown.is-expanded .dropdown-menu {\n  width: 100%;\n}\n.dropdown.is-expanded.is-mobile-modal .dropdown-menu {\n  max-width: 100%;\n}\n.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled, .dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled {\n  opacity: 0.5;\n}\n.dropdown .navbar-item {\n  height: 100%;\n}\n.dropdown.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dropdown.is-disabled .dropdown-trigger {\n  pointer-events: none;\n}\n.dropdown.is-inline .dropdown-menu {\n  position: static;\n  display: inline-block;\n  padding: 0;\n}\n.dropdown.is-top-right .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n}\n.dropdown.is-top-left .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  right: 0;\n  left: auto;\n}\n.dropdown.is-bottom-left .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n@media screen and (max-width: 1023px) {\n  .dropdown.is-mobile-modal > .dropdown-menu {\n    position: fixed !important;\n    width: calc(100vw - 40px);\n    max-width: 460px;\n    max-height: calc(100vh - 120px);\n    top: 25% !important;\n    left: 50% !important;\n    bottom: auto !important;\n    right: auto !important;\n    -webkit-transform: translate3d(-50%, -25%, 0);\n            transform: translate3d(-50%, -25%, 0);\n    white-space: normal;\n    overflow-y: auto;\n    z-index: 50 !important;\n  }\n  .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .dropdown-item, .dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > a, .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .has-link a {\n    padding: 1rem 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  html.is-clipped-touch {\n    overflow: hidden !important;\n  }\n}\n\n.field.is-grouped .field {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.field.is-grouped .field:not(:last-child) {\n  margin-right: 0.75rem;\n}\n.field.is-grouped .field.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.field.has-addons .control:first-child .control .button,\n.field.has-addons .control:first-child .control .input,\n.field.has-addons .control:first-child .control .select select {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.field.has-addons .control:last-child .control .button,\n.field.has-addons .control:last-child .control .input,\n.field.has-addons .control:last-child .control .select select {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.field.has-addons .control .control .button,\n.field.has-addons .control .control .input,\n.field.has-addons .control .control .select select {\n  border-radius: 0;\n}\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons.b-numberinput .control {\n  margin-right: unset;\n}\n\n.field.is-floating-label, .field.is-floating-in-label {\n  position: relative;\n}\n.field.is-floating-label .label, .field.is-floating-in-label .label {\n  position: absolute;\n  left: 1em;\n  font-size: calc(1rem * 0.75);\n  background-color: transparent;\n  z-index: 5;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 2em);\n  overflow: hidden;\n}\n.field.is-floating-label .label.is-small, .field.is-floating-in-label .label.is-small {\n  font-size: calc(0.75rem * 0.75);\n}\n.field.is-floating-label .label.is-medium, .field.is-floating-in-label .label.is-medium {\n  font-size: calc(1.25rem * 0.75);\n}\n.field.is-floating-label .label.is-large, .field.is-floating-in-label .label.is-large {\n  font-size: calc(1.5rem * 0.75);\n}\n.field.is-floating-label .taginput .counter, .field.is-floating-in-label .taginput .counter {\n  float: none;\n  text-align: right;\n}\n.field.is-floating-label.has-addons > .label + .control .button,\n.field.is-floating-label.has-addons > .label + .control .input,\n.field.is-floating-label.has-addons > .label + .control .select select, .field.is-floating-in-label.has-addons > .label + .control .button,\n.field.is-floating-in-label.has-addons > .label + .control .input,\n.field.is-floating-in-label.has-addons > .label + .control .select select {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.field.is-floating-label .label {\n  top: -0.775em;\n  padding-left: 0.125em;\n  padding-right: 0.125em;\n}\n.field.is-floating-label .label:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0.775em;\n  left: 0;\n  right: 0;\n  height: 0.375em;\n  background-color: white;\n  z-index: -1;\n}\n.field.is-floating-label .input:focus,\n.field.is-floating-label .textarea:focus,\n.field.is-floating-label .select select:focus {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.field.is-floating-label .taginput .taginput-container {\n  padding-top: 0.475em;\n}\n.field.is-floating-label .taginput .taginput-container.is-focused {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.field.is-floating-in-label > .label {\n  top: 0.25em;\n}\n.field.is-floating-in-label > .label + .control.datepicker .input, .field.is-floating-in-label > .label + .control.timepicker .input {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .input,\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .textarea,\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) select {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple) {\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading::after {\n  margin-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple)::after {\n  margin-top: 1px;\n}\n.field.is-floating-in-label > .label + .control.taginput .taginput-container {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5 + (0.275em - 1px));\n}\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon,\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-right.icon {\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .control.is-loading::after {\n  margin-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control select, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control select {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n}\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control select,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .button, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control select,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .button {\n  height: 3.25em;\n}\n.field.is-floating-in-label.has-numberinput .b-numberinput .control .input,\n.field.is-floating-in-label.has-numberinput .b-numberinput .control .button {\n  height: 3.25em;\n}\n.field.is-floating-label.has-numberinput .label, .field.is-floating-in-label.has-numberinput .label {\n  margin-left: calc(1rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label {\n  margin-left: calc(0.75rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label {\n  margin-left: calc(1.25rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label {\n  margin-left: calc(1.5rem * 3);\n}\n.field.is-floating-label.has-numberinput-compact .label, .field.is-floating-in-label.has-numberinput-compact .label {\n  margin-left: calc(1rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label {\n  margin-left: calc(0.75rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label {\n  margin-left: calc(1.25rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label {\n  margin-left: calc(1.5rem * 2.25);\n}\n.field.is-grouped-right.is-floating-in-label .label, .field.has-addons-right.is-floating-in-label .label {\n  position: relative;\n  left: calc(3.25em + 2em);\n}\n.field.is-grouped-right.is-floating-label .label, .field.has-addons-right.is-floating-label .label {\n  position: relative;\n  left: calc(3.25em + 2em);\n}\n\n.control .help.counter {\n  float: right;\n  margin-left: 0.5em;\n}\n.control .icon.is-clickable {\n  pointer-events: auto;\n  cursor: pointer;\n}\n.control.is-loading::after {\n  top: calc(50% - (1em * 0.5));\n  right: calc((2.5em * 0.5) - .5em);\n}\n\n.icon {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: inherit;\n}\n.icon svg {\n  background-color: transparent;\n  fill: currentColor;\n  stroke-width: 0;\n  stroke: currentColor;\n  pointer-events: none;\n  width: auto;\n  height: auto;\n}\n\n.b-image-wrapper > img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder {\n  height: 100%;\n  width: 100%;\n}\n.b-image-wrapper > img.placeholder {\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n}\n\n.loading-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  z-index: 29;\n}\n.loading-overlay.is-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.loading-overlay.is-full-page {\n  position: fixed;\n  z-index: 999;\n}\n.loading-overlay.is-full-page .loading-icon:after {\n  top: calc(50% - 2.5em);\n  left: calc(50% - 2.5em);\n  width: 5em;\n  height: 5em;\n}\n.loading-overlay .loading-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #7f7f7f;\n  background: rgba(255, 255, 255, 0.5);\n}\n.loading-overlay .loading-icon {\n  position: relative;\n}\n.loading-overlay .loading-icon:after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n  position: absolute;\n  top: calc(50% - 1.5em);\n  left: calc(50% - 1.5em);\n  width: 3em;\n  height: 3em;\n  border-width: 0.25em;\n}\n\n.menu .menu-list li > a.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.message .media,\n.notification .media {\n  padding-top: 0;\n  border: 0;\n}\n.message .auto-close-progress progress,\n.notification .auto-close-progress progress {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  height: 10px !important;\n}\n\n.modal.is-full-screen > .animation-content,\n.modal.is-full-screen > .animation-content > .modal-card {\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  margin: 0;\n  background-color: whitesmoke;\n}\n.modal .animation-content {\n  margin: 0 20px;\n}\n.modal .animation-content .modal-card {\n  margin: 0;\n}\n@media screen and (max-width: 768px) {\n  .modal .animation-content {\n    width: 100%;\n  }\n}\n.modal .modal-content {\n  width: 100%;\n}\n\n.navbar.has-navbar-centered .navbar-start {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-left: auto;\n}\n.navbar.has-navbar-centered .navbar-end {\n  margin-left: 0;\n}\n.navbar .navbar-dropdown.is-boxed {\n  visibility: hidden;\n  -webkit-transition-property: opacity, visibility, -webkit-transform;\n  transition-property: opacity, visibility, -webkit-transform;\n  transition-property: opacity, visibility, transform;\n  transition-property: opacity, visibility, transform, -webkit-transform;\n}\n.navbar .navbar-item.has-dropdown.is-active .is-boxed,\n.navbar .navbar-item.has-dropdown.is-hoverable:hover .is-boxed {\n  visibility: visible;\n}\n\n.notices {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em;\n  overflow: hidden;\n  z-index: 1000;\n  pointer-events: none;\n}\n.notices .toast {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n  margin: 0.5em 0;\n  text-align: center;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n  border-radius: 2em;\n  padding: 0.75em 1.5em;\n  pointer-events: auto;\n  opacity: 0.92;\n}\n.notices .toast.is-white {\n  color: #0a0a0a;\n  background: white;\n}\n.notices .toast.is-black {\n  color: white;\n  background: #0a0a0a;\n}\n.notices .toast.is-light {\n  color: rgba(0, 0, 0, 0.7);\n  background: whitesmoke;\n}\n.notices .toast.is-dark {\n  color: #fff;\n  background: #363636;\n}\n.notices .toast.is-primary {\n  color: #fff;\n  background: #7957d5;\n}\n.notices .toast.is-link {\n  color: #fff;\n  background: #7957d5;\n}\n.notices .toast.is-info {\n  color: #fff;\n  background: #167df0;\n}\n.notices .toast.is-success {\n  color: #fff;\n  background: #48c78e;\n}\n.notices .toast.is-warning {\n  color: rgba(0, 0, 0, 0.7);\n  background: #ffe08a;\n}\n.notices .toast.is-danger {\n  color: #fff;\n  background: #f14668;\n}\n.notices .snackbar {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n  margin: 0.5em 0;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  pointer-events: auto;\n  background: #363636;\n  color: #fff;\n  min-height: 3em;\n}\n.notices .snackbar .text {\n  padding: 0.5em 1em;\n}\n.notices .snackbar .action {\n  margin-left: auto;\n  padding: 0.5em;\n  padding-left: 0;\n}\n.notices .snackbar .action .button {\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #363636;\n  border: transparent;\n}\n.notices .snackbar .action .button:hover {\n  background: #292929;\n}\n.notices .snackbar .action .button:active {\n  background: #292929;\n}\n.notices .snackbar .action.is-white .button {\n  color: white;\n}\n.notices .snackbar .action.is-black .button {\n  color: #0a0a0a;\n}\n.notices .snackbar .action.is-light .button {\n  color: whitesmoke;\n}\n.notices .snackbar .action.is-dark .button {\n  color: #363636;\n}\n.notices .snackbar .action.is-primary .button {\n  color: #7957d5;\n}\n.notices .snackbar .action.is-link .button {\n  color: #7957d5;\n}\n.notices .snackbar .action.is-info .button {\n  color: #167df0;\n}\n.notices .snackbar .action.is-success .button {\n  color: #48c78e;\n}\n.notices .snackbar .action.is-warning .button {\n  color: #ffe08a;\n}\n.notices .snackbar .action.is-danger .button {\n  color: #f14668;\n}\n.notices .snackbar .action.is-cancel {\n  padding-right: 0;\n}\n@media screen and (max-width: 768px) {\n  .notices .snackbar {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .notices .snackbar {\n    min-width: 350px;\n    max-width: 600px;\n    overflow: hidden;\n  }\n}\n.notices .notification {\n  pointer-events: auto;\n  max-width: 600px;\n}\n.notices .toast.is-top, .notices .toast.is-bottom,\n.notices .snackbar.is-top,\n.notices .snackbar.is-bottom,\n.notices .notification.is-top,\n.notices .notification.is-bottom {\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.notices .toast.is-top-right, .notices .toast.is-bottom-right,\n.notices .snackbar.is-top-right,\n.notices .snackbar.is-bottom-right,\n.notices .notification.is-top-right,\n.notices .notification.is-bottom-right {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.notices .toast.is-top-left, .notices .toast.is-bottom-left,\n.notices .snackbar.is-top-left,\n.notices .snackbar.is-bottom-left,\n.notices .notification.is-top-left,\n.notices .notification.is-bottom-left {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n.notices .toast.is-toast,\n.notices .snackbar.is-toast,\n.notices .notification.is-toast {\n  opacity: 0.92;\n}\n.notices.is-top {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.notices.is-bottom {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.notices.is-bottom .notification {\n  margin-bottom: 0;\n}\n.notices.is-bottom .notification:not(:first-child) {\n  margin-bottom: 1.5rem;\n}\n.notices.has-custom-container {\n  position: absolute;\n}\n@media screen and (max-width: 768px) {\n  .notices {\n    padding: 0;\n    position: fixed !important;\n  }\n}\n\n.notification .auto-close-progress.progress-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.b-numberinput.field {\n  margin-bottom: 0;\n}\n.b-numberinput.field.is-grouped div.control {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.b-numberinput.field.has-addons.is-expanded {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.b-numberinput input[type=number]::-webkit-inner-spin-button,\n.b-numberinput input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n.b-numberinput input[type=number] {\n  -moz-appearance: textfield;\n}\n.b-numberinput input[type=number] {\n  text-align: center;\n}\n.b-numberinput .button.is-rounded {\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.pagination .pagination-next,\n.pagination .pagination-previous {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.pagination .pagination-next.is-disabled,\n.pagination .pagination-previous.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.pagination.is-simple {\n  -webkit-box-pack: normal;\n      -ms-flex-pack: normal;\n          justify-content: normal;\n}\n.pagination.is-simple.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.pagination.is-simple.is-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.pagination .is-current {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n@media screen and (min-width: 769px), print {\n  .pagination.has-input .pagination-list {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input .pagination-input {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input .pagination-previous {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input .pagination-next {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-centered .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-centered .pagination-list {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-centered .pagination-input {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-centered .pagination-next {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-list {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-input {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-input {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-list {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-next {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-right .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-right .pagination-next {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-right .pagination-input {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-right .pagination-list {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-previous {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-next {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-list {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-input {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-input {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-list {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-input-right .pagination-list {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-input-right .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-input-right .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-input-right .pagination-input {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .pagination.has-input.is-input-left .pagination-input {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .pagination.has-input.is-input-left .pagination-list {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .pagination.has-input.is-input-left .pagination-previous {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .pagination.has-input.is-input-left .pagination-next {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n}\n.progress-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.progress-wrapper:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.progress-wrapper .progress-value {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-size: calc(1rem / 1.5);\n  line-height: 1rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  white-space: nowrap;\n}\n.progress-wrapper .progress, .progress-wrapper .progress-wrapper.is-not-native, .progress-wrapper .progress-bar {\n  margin-bottom: 0;\n}\n.progress-wrapper .progress.is-small + .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-small .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-small + .progress-value, .progress-wrapper .progress-bar.is-small .progress-value {\n  font-size: calc(0.75rem / 1.5);\n  line-height: 0.75rem;\n}\n.progress-wrapper .progress.is-medium + .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-medium .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-medium + .progress-value, .progress-wrapper .progress-bar.is-medium .progress-value {\n  font-size: calc(1.25rem / 1.5);\n  line-height: 1.25rem;\n}\n.progress-wrapper .progress.is-large + .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-large .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-large + .progress-value, .progress-wrapper .progress-bar.is-large .progress-value {\n  font-size: calc(1.5rem / 1.5);\n  line-height: 1.5rem;\n}\n.progress-wrapper .progress::-webkit-progress-value, .progress-wrapper .progress-wrapper.is-not-native::-webkit-progress-value, .progress-wrapper .progress-bar::-webkit-progress-value {\n  -webkit-transition: width 0.5s ease;\n  transition: width 0.5s ease;\n}\n.progress-wrapper .progress.is-more-than-half + .progress-value, .progress-wrapper .is-more-than-half.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-white + .progress-value, .progress-wrapper .is-more-than-half.is-white.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-white + .progress-value {\n  color: #0a0a0a;\n}\n.progress-wrapper .progress.is-more-than-half.is-black + .progress-value, .progress-wrapper .is-more-than-half.is-black.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-black + .progress-value {\n  color: white;\n}\n.progress-wrapper .progress.is-more-than-half.is-light + .progress-value, .progress-wrapper .is-more-than-half.is-light.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-light + .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper .progress.is-more-than-half.is-dark + .progress-value, .progress-wrapper .is-more-than-half.is-dark.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-dark + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-primary + .progress-value, .progress-wrapper .is-more-than-half.is-primary.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-primary + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-link + .progress-value, .progress-wrapper .is-more-than-half.is-link.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-link + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-info + .progress-value, .progress-wrapper .is-more-than-half.is-info.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-info + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-success + .progress-value, .progress-wrapper .is-more-than-half.is-success.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-success + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-warning + .progress-value, .progress-wrapper .is-more-than-half.is-warning.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-warning + .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper .progress.is-more-than-half.is-danger + .progress-value, .progress-wrapper .is-more-than-half.is-danger.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-danger + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-squared, .progress-wrapper .is-squared.progress-wrapper.is-not-native, .progress-wrapper .progress-bar.is-squared {\n  border-radius: 0;\n}\n.progress-wrapper.is-not-native {\n  white-space: nowrap;\n  background-color: #ededed;\n  border-radius: 9999px;\n}\n.progress-wrapper.is-not-native .progress-bar {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  background-color: #4a4a4a;\n}\n.progress-wrapper.is-not-native .progress-bar .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-white {\n  background-color: white;\n}\n.progress-wrapper.is-not-native .progress-bar.is-white .progress-value {\n  color: #0a0a0a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-black {\n  background-color: #0a0a0a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-black .progress-value {\n  color: white;\n}\n.progress-wrapper.is-not-native .progress-bar.is-light {\n  background-color: whitesmoke;\n}\n.progress-wrapper.is-not-native .progress-bar.is-light .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper.is-not-native .progress-bar.is-dark {\n  background-color: #363636;\n}\n.progress-wrapper.is-not-native .progress-bar.is-dark .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-primary {\n  background-color: #7957d5;\n}\n.progress-wrapper.is-not-native .progress-bar.is-primary .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-link {\n  background-color: #7957d5;\n}\n.progress-wrapper.is-not-native .progress-bar.is-link .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-info {\n  background-color: #167df0;\n}\n.progress-wrapper.is-not-native .progress-bar.is-info .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-success {\n  background-color: #48c78e;\n}\n.progress-wrapper.is-not-native .progress-bar.is-success .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-warning {\n  background-color: #ffe08a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-warning .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper.is-not-native .progress-bar.is-danger {\n  background-color: #f14668;\n}\n.progress-wrapper.is-not-native .progress-bar.is-danger .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-squared {\n  border-radius: 0;\n}\n\n.b-radio.radio {\n  outline: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.b-radio.radio:not(.button) {\n  margin-right: 0.5em;\n}\n.b-radio.radio:not(.button) + .radio:last-child {\n  margin-right: 0;\n}\n.b-radio.radio + .radio {\n  margin-left: 0;\n}\n.b-radio.radio input[type=radio] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.b-radio.radio input[type=radio] + .check {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n  cursor: pointer;\n  width: 1.25em;\n  height: 1.25em;\n  -webkit-transition: background 150ms ease-out;\n  transition: background 150ms ease-out;\n  border-radius: 50%;\n  border: 2px solid #7a7a7a;\n}\n.b-radio.radio input[type=radio] + .check:before {\n  content: \"\";\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  left: 50%;\n  margin-left: calc(-1.25em * 0.5);\n  bottom: 50%;\n  margin-bottom: calc(-1.25em * 0.5);\n  width: 1.25em;\n  height: 1.25em;\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  background-color: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-white:before {\n  background: white;\n}\n.b-radio.radio input[type=radio] + .check.is-black:before {\n  background: #0a0a0a;\n}\n.b-radio.radio input[type=radio] + .check.is-light:before {\n  background: whitesmoke;\n}\n.b-radio.radio input[type=radio] + .check.is-dark:before {\n  background: #363636;\n}\n.b-radio.radio input[type=radio] + .check.is-primary:before {\n  background: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-link:before {\n  background: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-info:before {\n  background: #167df0;\n}\n.b-radio.radio input[type=radio] + .check.is-success:before {\n  background: #48c78e;\n}\n.b-radio.radio input[type=radio] + .check.is-warning:before {\n  background: #ffe08a;\n}\n.b-radio.radio input[type=radio] + .check.is-danger:before {\n  background: #f14668;\n}\n.b-radio.radio input[type=radio]:checked + .check {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-white {\n  border-color: white;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-dark {\n  border-color: #363636;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-link {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-info {\n  border-color: #167df0;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-success {\n  border-color: #48c78e;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-danger {\n  border-color: #f14668;\n}\n.b-radio.radio input[type=radio]:checked + .check:before {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.b-radio.radio input[type=radio]:focus + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n          box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-white {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-black {\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-light {\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-dark {\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-primary {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-link {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-info {\n  -webkit-box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n          box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-success {\n  -webkit-box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n          box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-warning {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-danger {\n  -webkit-box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n          box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.b-radio.radio input[type=radio][disabled] + .check {\n  cursor: not-allowed;\n}\n.b-radio.radio .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.b-radio.radio.button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.b-radio.radio.button.is-selected {\n  z-index: 1;\n}\n.b-radio.radio[disabled] {\n  opacity: 0.5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-white {\n  border-color: white;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-dark {\n  border-color: #363636;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-link {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-info {\n  border-color: #167df0;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-success {\n  border-color: #48c78e;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-danger {\n  border-color: #f14668;\n}\n.b-radio.radio.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-radio.radio.is-medium {\n  font-size: 1.25rem;\n}\n.b-radio.radio.is-large {\n  font-size: 1.5rem;\n}\n\n.rate {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.rate:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.rate.is-spaced .rate-item:not(:last-child) {\n  margin-right: 0.25rem;\n}\n.rate.is-disabled .rate-item {\n  cursor: initial;\n}\n.rate.is-disabled .rate-item:hover {\n  -webkit-transform: none;\n          transform: none;\n}\n.rate.is-rtl .rate-item {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.rate.is-rtl .rate-text {\n  margin-left: 0;\n  margin-right: 0.35rem;\n}\n.rate .rate-item {\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.rate .rate-item:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.rate .rate-item.set-on .icon, .rate .rate-item.set-half .is-half {\n  color: #ffd970;\n}\n.rate .rate-item.set-half .is-half {\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n.rate .icon {\n  color: #dbdbdb;\n  line-height: 1;\n  pointer-events: none;\n  width: inherit;\n}\n.rate .is-half > i {\n  position: absolute;\n  left: 0;\n}\n.rate .rate-text {\n  font-size: calc(1rem / 1.25);\n  margin-left: 0.35rem;\n}\n.rate .rate-text.is-small {\n  font-size: calc(0.75rem / 1.25);\n}\n.rate .rate-text.is-medium {\n  font-size: calc(1.25rem / 1.25);\n}\n.rate .rate-text.is-large {\n  font-size: calc(1.5rem / 1.25);\n}\n\n.select select {\n  text-rendering: auto !important;\n  padding-right: 2.5em;\n}\n.select select option {\n  color: #4a4a4a;\n  padding: calc(0.5em - 1px) calc(0.75em - 1px);\n}\n.select select option:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.select select optgroup {\n  color: #b5b5b5;\n  font-weight: 400;\n  font-style: normal;\n  padding: 0.25em 0;\n}\n.select select[disabled] {\n  opacity: 1;\n}\n.select.is-empty select {\n  color: rgba(122, 122, 122, 0.7);\n}\n.select.is-loading::after {\n  top: calc(50% - (1em * 0.5));\n  right: calc((2.5em * 0.5) - .5em);\n}\n\n.b-skeleton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  vertical-align: middle;\n  width: 100%;\n}\n.b-skeleton > .b-skeleton-item {\n  background: -webkit-gradient(linear, left top, right top, color-stop(25%, #dbdbdb), color-stop(50%, rgba(219, 219, 219, 0.5)), color-stop(75%, #dbdbdb));\n  background: linear-gradient(90deg, #dbdbdb 25%, rgba(219, 219, 219, 0.5) 50%, #dbdbdb 75%);\n  background-size: 400% 100%;\n  width: 100%;\n}\n.b-skeleton > .b-skeleton-item.is-rounded {\n  border-radius: 4px;\n}\n.b-skeleton > .b-skeleton-item::after {\n  content: \" \";\n}\n.b-skeleton > .b-skeleton-item + .b-skeleton-item {\n  margin-top: 0.5rem;\n}\n.b-skeleton.is-animated > .b-skeleton-item {\n  -webkit-animation: skeleton-loading 1.5s infinite;\n          animation: skeleton-loading 1.5s infinite;\n}\n.b-skeleton.is-centered {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.b-skeleton.is-right {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.b-skeleton + .b-skeleton {\n  margin-top: 0.5rem;\n}\n.b-skeleton > .b-skeleton-item {\n  line-height: 1rem;\n}\n.b-skeleton.is-small > .b-skeleton-item {\n  line-height: 0.75rem;\n}\n.b-skeleton.is-medium > .b-skeleton-item {\n  line-height: 1.25rem;\n}\n.b-skeleton.is-large > .b-skeleton-item {\n  line-height: 1.5rem;\n}\n\n@-webkit-keyframes skeleton-loading {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.b-sidebar .sidebar-content {\n  background-color: whitesmoke;\n  -webkit-box-shadow: 5px 0px 13px 3px rgba(10, 10, 10, 0.1);\n          box-shadow: 5px 0px 13px 3px rgba(10, 10, 10, 0.1);\n  width: 260px;\n  z-index: 39;\n}\n.b-sidebar .sidebar-content.is-white {\n  background-color: white;\n}\n.b-sidebar .sidebar-content.is-black {\n  background-color: #0a0a0a;\n}\n.b-sidebar .sidebar-content.is-light {\n  background-color: whitesmoke;\n}\n.b-sidebar .sidebar-content.is-dark {\n  background-color: #363636;\n}\n.b-sidebar .sidebar-content.is-primary {\n  background-color: #7957d5;\n}\n.b-sidebar .sidebar-content.is-link {\n  background-color: #7957d5;\n}\n.b-sidebar .sidebar-content.is-info {\n  background-color: #167df0;\n}\n.b-sidebar .sidebar-content.is-success {\n  background-color: #48c78e;\n}\n.b-sidebar .sidebar-content.is-warning {\n  background-color: #ffe08a;\n}\n.b-sidebar .sidebar-content.is-danger {\n  background-color: #f14668;\n}\n.b-sidebar .sidebar-content.is-fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.b-sidebar .sidebar-content.is-fixed.is-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar .sidebar-content.is-absolute {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.b-sidebar .sidebar-content.is-absolute.is-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar .sidebar-content.is-mini {\n  width: 80px;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed) {\n  -webkit-transition: width 150ms ease-out;\n  transition: width 150ms ease-out;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth) {\n  width: 260px;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth).is-mini-expand-fixed {\n  position: fixed;\n}\n.b-sidebar .sidebar-content.is-static {\n  position: static;\n}\n.b-sidebar .sidebar-content.is-absolute, .b-sidebar .sidebar-content.is-static {\n  -webkit-transition: width 150ms ease-out;\n  transition: width 150ms ease-out;\n}\n.b-sidebar .sidebar-content.is-fullwidth {\n  width: 100%;\n  max-width: 100%;\n}\n.b-sidebar .sidebar-content.is-fullheight {\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n}\n@media screen and (max-width: 768px) {\n  .b-sidebar .sidebar-content.is-mini-mobile {\n    width: 80px;\n  }\n  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile) {\n    width: 260px;\n  }\n  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed {\n    position: fixed;\n  }\n  .b-sidebar .sidebar-content.is-hidden-mobile {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n  }\n  .b-sidebar .sidebar-content.is-fullwidth-mobile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.b-sidebar .sidebar-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: rgba(10, 10, 10, 0.86);\n  position: fixed;\n  z-index: 38;\n}\n\n.b-slider {\n  margin: 1em 0;\n  background: transparent;\n  width: 100%;\n}\n.b-slider .b-slider-track {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  cursor: pointer;\n  background: #dbdbdb;\n  border-radius: 4px;\n}\n.b-slider .b-slider-fill {\n  position: absolute;\n  height: 100%;\n  -webkit-box-shadow: 0px 0px 0px #7a7a7a;\n          box-shadow: 0px 0px 0px #7a7a7a;\n  background: #dbdbdb;\n  border-radius: 4px;\n  border: 0px solid #7a7a7a;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.b-slider .b-slider-thumb-wrapper {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.b-slider .b-slider-thumb-wrapper .b-slider-thumb {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 1px solid #b5b5b5;\n  border-radius: 4px;\n  background: white;\n}\n.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus {\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n}\n.b-slider .b-slider-thumb-wrapper.is-dragging {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb {\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n}\n.b-slider .b-slider-thumb-wrapper.has-indicator .b-slider-thumb {\n  padding: 16px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n}\n.b-slider.slider-focus {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-top: -20px;\n  margin-bottom: -20px;\n  cursor: pointer;\n}\n.b-slider.is-rounded .b-slider-thumb {\n  border-radius: 9999px;\n}\n.b-slider.is-disabled .b-slider-track {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.b-slider.is-disabled .b-slider-thumb-wrapper {\n  cursor: not-allowed;\n}\n.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.b-slider .b-slider-track {\n  height: 0.5rem;\n}\n.b-slider .b-slider-thumb {\n  height: 1rem;\n  width: 1rem;\n}\n.b-slider .b-slider-tick {\n  height: 0.25rem;\n}\n.b-slider .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.5rem * 0.5 + 2px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-slider.is-small .b-slider-track {\n  height: 0.375rem;\n}\n.b-slider.is-small .b-slider-thumb {\n  height: 0.75rem;\n  width: 0.75rem;\n}\n.b-slider.is-small .b-slider-tick {\n  height: 0.1875rem;\n}\n.b-slider.is-small .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.375rem * 0.5 + 2px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-slider.is-medium .b-slider-track {\n  height: 0.625rem;\n}\n.b-slider.is-medium .b-slider-thumb {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n.b-slider.is-medium .b-slider-tick {\n  height: 0.3125rem;\n}\n.b-slider.is-medium .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.625rem * 0.5 + 2px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-slider.is-large .b-slider-track {\n  height: 0.75rem;\n}\n.b-slider.is-large .b-slider-thumb {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.b-slider.is-large .b-slider-tick {\n  height: 0.375rem;\n}\n.b-slider.is-large .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.75rem * 0.5 + 2px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-slider.is-white .b-slider-fill {\n  background: white !important;\n}\n.b-slider.is-black .b-slider-fill {\n  background: #0a0a0a !important;\n}\n.b-slider.is-light .b-slider-fill {\n  background: whitesmoke !important;\n}\n.b-slider.is-dark .b-slider-fill {\n  background: #363636 !important;\n}\n.b-slider.is-primary .b-slider-fill {\n  background: #7957d5 !important;\n}\n.b-slider.is-link .b-slider-fill {\n  background: #7957d5 !important;\n}\n.b-slider.is-info .b-slider-fill {\n  background: #167df0 !important;\n}\n.b-slider.is-success .b-slider-fill {\n  background: #48c78e !important;\n}\n.b-slider.is-warning .b-slider-fill {\n  background: #ffe08a !important;\n}\n.b-slider.is-danger .b-slider-fill {\n  background: #f14668 !important;\n}\n.b-slider .b-slider-tick {\n  position: absolute;\n  width: 3px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  background: #b5b5b5;\n  border-radius: 4px;\n}\n.b-slider .b-slider-tick.is-tick-hidden {\n  background: transparent;\n}\n\n/*\nThis project is based on\n\"bulma-steps\" (https://github.com/Wikiki/bulma-steps) by\nWikiki (https://github.com/Wikiki) licensed under\nMIT (https://github.com/Wikiki/bulma-steps/blob/master/LICENSE)\n*/\n.b-steps .steps .step-items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.b-steps .steps .step-items .step-item {\n  margin-top: 0;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 1em;\n      flex-basis: 1em;\n}\n.b-steps .steps .step-items .step-item .step-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #4a4a4a;\n}\n.b-steps .steps .step-items .step-item .step-link:not(.is-clickable) {\n  cursor: not-allowed;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 4px;\n  font-weight: 700;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #b5b5b5;\n  color: white;\n  border: 0.2em solid #fff;\n  z-index: 1;\n  overflow: hidden;\n}\n.b-steps .steps .step-items .step-item.is-white::before, .b-steps .steps .step-items .step-item.is-white::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, white));\n  background: linear-gradient(to left, #dbdbdb 50%, white 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-white.is-active .step-marker {\n  background-color: white;\n  border-color: white;\n  color: white;\n}\n.b-steps .steps .step-items .step-item.is-white.is-active::before, .b-steps .steps .step-items .step-item.is-white.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker {\n  color: #0a0a0a;\n  background-color: white;\n}\n.b-steps .steps .step-items .step-item.is-white.is-previous::before, .b-steps .steps .step-items .step-item.is-white.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-black::before, .b-steps .steps .step-items .step-item.is-black::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #0a0a0a));\n  background: linear-gradient(to left, #dbdbdb 50%, #0a0a0a 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-black.is-active .step-marker {\n  background-color: white;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.b-steps .steps .step-items .step-item.is-black.is-active::before, .b-steps .steps .step-items .step-item.is-black.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker {\n  color: white;\n  background-color: #0a0a0a;\n}\n.b-steps .steps .step-items .step-item.is-black.is-previous::before, .b-steps .steps .step-items .step-item.is-black.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-light::before, .b-steps .steps .step-items .step-item.is-light::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, whitesmoke));\n  background: linear-gradient(to left, #dbdbdb 50%, whitesmoke 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-light.is-active .step-marker {\n  background-color: white;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.b-steps .steps .step-items .step-item.is-light.is-active::before, .b-steps .steps .step-items .step-item.is-light.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker {\n  color: rgba(0, 0, 0, 0.7);\n  background-color: whitesmoke;\n}\n.b-steps .steps .step-items .step-item.is-light.is-previous::before, .b-steps .steps .step-items .step-item.is-light.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark::before, .b-steps .steps .step-items .step-item.is-dark::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #363636));\n  background: linear-gradient(to left, #dbdbdb 50%, #363636 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker {\n  background-color: white;\n  border-color: #363636;\n  color: #363636;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-active::before, .b-steps .steps .step-items .step-item.is-dark.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker {\n  color: #fff;\n  background-color: #363636;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-previous::before, .b-steps .steps .step-items .step-item.is-dark.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary::before, .b-steps .steps .step-items .step-item.is-primary::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-active::before, .b-steps .steps .step-items .step-item.is-primary.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker {\n  color: #fff;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-previous::before, .b-steps .steps .step-items .step-item.is-primary.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-link::before, .b-steps .steps .step-items .step-item.is-link::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-link.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-link.is-active::before, .b-steps .steps .step-items .step-item.is-link.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker {\n  color: #fff;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-link.is-previous::before, .b-steps .steps .step-items .step-item.is-link.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-info::before, .b-steps .steps .step-items .step-item.is-info::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #167df0));\n  background: linear-gradient(to left, #dbdbdb 50%, #167df0 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-info.is-active .step-marker {\n  background-color: white;\n  border-color: #167df0;\n  color: #167df0;\n}\n.b-steps .steps .step-items .step-item.is-info.is-active::before, .b-steps .steps .step-items .step-item.is-info.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker {\n  color: #fff;\n  background-color: #167df0;\n}\n.b-steps .steps .step-items .step-item.is-info.is-previous::before, .b-steps .steps .step-items .step-item.is-info.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-success::before, .b-steps .steps .step-items .step-item.is-success::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #48c78e));\n  background: linear-gradient(to left, #dbdbdb 50%, #48c78e 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-success.is-active .step-marker {\n  background-color: white;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n.b-steps .steps .step-items .step-item.is-success.is-active::before, .b-steps .steps .step-items .step-item.is-success.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker {\n  color: #fff;\n  background-color: #48c78e;\n}\n.b-steps .steps .step-items .step-item.is-success.is-previous::before, .b-steps .steps .step-items .step-item.is-success.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning::before, .b-steps .steps .step-items .step-item.is-warning::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #ffe08a));\n  background: linear-gradient(to left, #dbdbdb 50%, #ffe08a 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker {\n  background-color: white;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-active::before, .b-steps .steps .step-items .step-item.is-warning.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker {\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #ffe08a;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-previous::before, .b-steps .steps .step-items .step-item.is-warning.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger::before, .b-steps .steps .step-items .step-item.is-danger::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #f14668));\n  background: linear-gradient(to left, #dbdbdb 50%, #f14668 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker {\n  background-color: white;\n  border-color: #f14668;\n  color: #f14668;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-active::before, .b-steps .steps .step-items .step-item.is-danger.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker {\n  color: #fff;\n  background-color: #f14668;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-previous::before, .b-steps .steps .step-items .step-item.is-danger.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  color: white;\n}\n.b-steps .steps .step-items .step-item .step-details {\n  text-align: center;\n  z-index: 1;\n}\n.b-steps .steps .step-items .step-item:not(:first-child), .b-steps .steps .step-items .step-item:only-child {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: -50%;\n}\n.b-steps .steps .step-items .step-item:only-child::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  height: 0.2em;\n  bottom: 0;\n}\n.b-steps .steps .step-items .step-item:only-child::before, .b-steps .steps .step-items .step-item:only-child::after {\n  width: 25%;\n  left: 50%;\n}\n.b-steps .steps .step-items .step-item:only-child::before {\n  right: 50%;\n  left: auto;\n}\n.b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after {\n  background: -webkit-gradient(linear, right top, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-active .step-link {\n  cursor: default;\n}\n.b-steps .steps .step-items .step-item.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-active::before, .b-steps .steps .step-items .step-item.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-previous .step-marker {\n  color: white;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-previous::before, .b-steps .steps .step-items .step-item.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps + .step-content {\n  position: relative;\n  overflow: visible;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1rem;\n}\n.b-steps .steps + .step-content .step-item {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.b-steps .steps + .step-content .step-item:focus {\n  outline: none;\n}\n.b-steps .steps + .step-content.is-transitioning {\n  overflow: hidden;\n}\n.b-steps .steps.is-rounded .step-item .step-marker {\n  border-radius: 9999px;\n}\n.b-steps .steps.is-animated .step-item:not(:first-child)::before, .b-steps .steps.is-animated .step-item:only-child::before {\n  -webkit-transition: background 150ms ease-out;\n  transition: background 150ms ease-out;\n}\n.b-steps .steps.has-label-right .step-items .step-item .step-link, .b-steps .steps.has-label-left .step-items .step-item .step-link {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.b-steps .steps.has-label-right .step-items .step-item .step-link > .step-details, .b-steps .steps.has-label-left .step-items .step-item .step-link > .step-details {\n  background-color: white;\n  padding: 0.2em;\n}\n.b-steps .steps.has-label-left .step-items .step-item .step-link {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.b-steps .steps {\n  font-size: 1rem;\n  min-height: 2rem;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  height: 2rem;\n  width: 2rem;\n}\n.b-steps .steps .step-items .step-item .step-marker .icon *, .b-steps .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1rem;\n}\n.b-steps .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  line-height: 1rem;\n}\n.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1rem;\n}\n.b-steps .steps .step-items .step-item:only-child::after {\n  top: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after, .b-steps .steps .step-items .step-item:not(:first-child)::before {\n    top: 1rem;\n  }\n}\n.b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1rem - 0.1em);\n}\n.b-steps.is-small .steps {\n  font-size: 0.75rem;\n  min-height: 1.5rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-marker {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-marker .icon *, .b-steps.is-small .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-details .step-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  line-height: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-small .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item:only-child::after {\n  top: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-small .steps .step-items .step-item::before, .b-steps.is-small .steps .step-items .step-item::after, .b-steps.is-small .steps .step-items .step-item:not(:first-child)::before {\n    top: 0.75rem;\n  }\n}\n.b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(0.75rem - 0.1em);\n}\n.b-steps.is-medium .steps {\n  font-size: 1.25rem;\n  min-height: 2.5rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-marker {\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *, .b-steps.is-medium .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-medium .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item:only-child::after {\n  top: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-medium .steps .step-items .step-item::before, .b-steps.is-medium .steps .step-items .step-item::after, .b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before {\n    top: 1.25rem;\n  }\n}\n.b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.25rem - 0.1em);\n}\n.b-steps.is-large .steps {\n  font-size: 1.5rem;\n  min-height: 3rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-marker {\n  height: 3rem;\n  width: 3rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-marker .icon *, .b-steps.is-large .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-large .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item:only-child::after {\n  top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-large .steps .step-items .step-item::before, .b-steps.is-large .steps .step-items .step-item::after, .b-steps.is-large .steps .step-items .step-item:not(:first-child)::before {\n    top: 1.5rem;\n  }\n}\n.b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.5rem - 0.1em);\n}\n.b-steps.is-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.b-steps.is-vertical > .steps .step-items {\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-bottom-color: transparent;\n}\n.b-steps.is-vertical > .steps .step-items .step-item {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 1em 0;\n}\n.b-steps.is-vertical > .steps .step-items .step-item::before, .b-steps.is-vertical > .steps .step-items .step-item::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-white::before, .b-steps.is-vertical > .steps .step-items .step-item.is-white::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, white));\n  background: linear-gradient(to top, #dbdbdb 50%, white 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-black::before, .b-steps.is-vertical > .steps .step-items .step-item.is-black::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #0a0a0a));\n  background: linear-gradient(to top, #dbdbdb 50%, #0a0a0a 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-light::before, .b-steps.is-vertical > .steps .step-items .step-item.is-light::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, whitesmoke));\n  background: linear-gradient(to top, #dbdbdb 50%, whitesmoke 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-dark::before, .b-steps.is-vertical > .steps .step-items .step-item.is-dark::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #363636));\n  background: linear-gradient(to top, #dbdbdb 50%, #363636 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-primary::before, .b-steps.is-vertical > .steps .step-items .step-item.is-primary::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-link::before, .b-steps.is-vertical > .steps .step-items .step-item.is-link::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #7957d5));\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-info::before, .b-steps.is-vertical > .steps .step-items .step-item.is-info::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #167df0));\n  background: linear-gradient(to top, #dbdbdb 50%, #167df0 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-success::before, .b-steps.is-vertical > .steps .step-items .step-item.is-success::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #48c78e));\n  background: linear-gradient(to top, #dbdbdb 50%, #48c78e 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-warning::before, .b-steps.is-vertical > .steps .step-items .step-item.is-warning::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #ffe08a));\n  background: linear-gradient(to top, #dbdbdb 50%, #ffe08a 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-danger::before, .b-steps.is-vertical > .steps .step-items .step-item.is-danger::after {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #dbdbdb), color-stop(50%, #f14668));\n  background: linear-gradient(to top, #dbdbdb 50%, #f14668 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::before {\n  height: 100%;\n  width: 0.2em;\n  top: -50%;\n  left: calc(50% - 0.1em);\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-active::before, .b-steps.is-vertical > .steps .step-items .step-item.is-active::after, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::before, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::after {\n  background-position: right top;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::before {\n  top: 50%;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::after {\n  width: 0.2em;\n  top: auto;\n  bottom: 50%;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::after {\n  height: 25%;\n}\n.b-steps.is-vertical > .steps.has-label-right .step-items .step-item {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.b-steps.is-vertical > .steps.has-label-left .step-items .step-item {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.b-steps.is-vertical > .steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link > .step-details {\n  background-color: white;\n}\n.b-steps.is-vertical > .step-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.b-steps.is-vertical > .step-navigation {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n}\n.b-steps.is-vertical.is-right {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n@media screen and (max-width: 768px) {\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active) {\n    display: none;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::after, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 0.2em;\n    width: 25%;\n    bottom: 0;\n    left: 50%;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {\n    right: 50%;\n    left: auto;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details {\n    display: none;\n  }\n}\n\n.switch {\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin-right: 0.5em;\n}\n.switch + .switch:last-child {\n  margin-right: 0;\n}\n.switch input[type=checkbox] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.switch input[type=checkbox] + .check {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 2.75em;\n  height: 1.575em;\n  padding: 0.2em;\n  background: #b5b5b5;\n  border-radius: 4px;\n  -webkit-transition: background 150ms ease-out, -webkit-box-shadow 150ms ease-out;\n  transition: background 150ms ease-out, -webkit-box-shadow 150ms ease-out;\n  transition: background 150ms ease-out, box-shadow 150ms ease-out;\n  transition: background 150ms ease-out, box-shadow 150ms ease-out, -webkit-box-shadow 150ms ease-out;\n}\n.switch input[type=checkbox] + .check.is-white-passive, .switch input[type=checkbox] + .check:hover {\n  background: white;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-black-passive, .switch input[type=checkbox] + .check:hover {\n  background: #0a0a0a;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-light-passive, .switch input[type=checkbox] + .check:hover {\n  background: whitesmoke;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-dark-passive, .switch input[type=checkbox] + .check:hover {\n  background: #363636;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-primary-passive, .switch input[type=checkbox] + .check:hover {\n  background: #7957d5;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-link-passive, .switch input[type=checkbox] + .check:hover {\n  background: #7957d5;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-info-passive, .switch input[type=checkbox] + .check:hover {\n  background: #167df0;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-success-passive, .switch input[type=checkbox] + .check:hover {\n  background: #48c78e;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-warning-passive, .switch input[type=checkbox] + .check:hover {\n  background: #ffe08a;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-danger-passive, .switch input[type=checkbox] + .check:hover {\n  background: #f14668;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check:before {\n  content: \"\";\n  display: block;\n  border-radius: 4px;\n  width: 1.175em;\n  height: 1.175em;\n  background: whitesmoke;\n  -webkit-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n          box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n  -webkit-transition: -webkit-transform 150ms ease-out;\n  transition: -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out;\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\n  will-change: transform;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n}\n.switch input[type=checkbox] + .check.is-elastic:before {\n  -webkit-transform: scaleX(1.5);\n          transform: scaleX(1.5);\n  border-radius: 4px;\n}\n.switch input[type=checkbox]:checked + .check {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-white {\n  background: white;\n}\n.switch input[type=checkbox]:checked + .check.is-black {\n  background: #0a0a0a;\n}\n.switch input[type=checkbox]:checked + .check.is-light {\n  background: whitesmoke;\n}\n.switch input[type=checkbox]:checked + .check.is-dark {\n  background: #363636;\n}\n.switch input[type=checkbox]:checked + .check.is-primary {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-link {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-info {\n  background: #167df0;\n}\n.switch input[type=checkbox]:checked + .check.is-success {\n  background: #48c78e;\n}\n.switch input[type=checkbox]:checked + .check.is-warning {\n  background: #ffe08a;\n}\n.switch input[type=checkbox]:checked + .check.is-danger {\n  background: #f14668;\n}\n.switch input[type=checkbox]:checked + .check:before {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.switch input[type=checkbox]:checked + .check.is-elastic:before {\n  -webkit-transform: translate3d(50%, 0, 0) scaleX(1.5);\n          transform: translate3d(50%, 0, 0) scaleX(1.5);\n}\n.switch input[type=checkbox]:focus, .switch input[type=checkbox]:active {\n  outline: none;\n}\n.switch input[type=checkbox]:focus + .check, .switch input[type=checkbox]:active + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);\n          box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);\n}\n.switch input[type=checkbox]:focus + .check.is-white-passive, .switch input[type=checkbox]:active + .check.is-white-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-black-passive, .switch input[type=checkbox]:active + .check.is-black-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-light-passive, .switch input[type=checkbox]:active + .check.is-light-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-dark-passive, .switch input[type=checkbox]:active + .check.is-dark-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-primary-passive, .switch input[type=checkbox]:active + .check.is-primary-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-link-passive, .switch input[type=checkbox]:active + .check.is-link-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-info-passive, .switch input[type=checkbox]:active + .check.is-info-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n          box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-success-passive, .switch input[type=checkbox]:active + .check.is-success-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n          box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-warning-passive, .switch input[type=checkbox]:active + .check.is-warning-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-danger-passive, .switch input[type=checkbox]:active + .check.is-danger-passive {\n  -webkit-box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n          box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check, .switch input[type=checkbox]:active:checked + .check {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-white, .switch input[type=checkbox]:active:checked + .check.is-white {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-black, .switch input[type=checkbox]:active:checked + .check.is-black {\n  -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n          box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-light, .switch input[type=checkbox]:active:checked + .check.is-light {\n  -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n          box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-dark, .switch input[type=checkbox]:active:checked + .check.is-dark {\n  -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n          box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-primary, .switch input[type=checkbox]:active:checked + .check.is-primary {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-link, .switch input[type=checkbox]:active:checked + .check.is-link {\n  -webkit-box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n          box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-info, .switch input[type=checkbox]:active:checked + .check.is-info {\n  -webkit-box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n          box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-success, .switch input[type=checkbox]:active:checked + .check.is-success {\n  -webkit-box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n          box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-warning, .switch input[type=checkbox]:active:checked + .check.is-warning {\n  -webkit-box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n          box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-danger, .switch input[type=checkbox]:active:checked + .check.is-danger {\n  -webkit-box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n          box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.switch.has-left-label {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.switch.has-left-label .control-label {\n  padding-right: calc(0.75em - 1px);\n}\n.switch:not(.has-left-label) .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.switch:hover input[type=checkbox] + .check {\n  background: rgba(181, 181, 181, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-white-passive {\n  background: rgba(255, 255, 255, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-black-passive {\n  background: rgba(10, 10, 10, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-light-passive {\n  background: rgba(245, 245, 245, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-dark-passive {\n  background: rgba(54, 54, 54, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-primary-passive {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-link-passive {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-info-passive {\n  background: rgba(22, 125, 240, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-success-passive {\n  background: rgba(72, 199, 142, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-warning-passive {\n  background: rgba(255, 224, 138, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-danger-passive {\n  background: rgba(241, 70, 104, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-white {\n  background: rgba(255, 255, 255, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-black {\n  background: rgba(10, 10, 10, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-light {\n  background: rgba(245, 245, 245, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-dark {\n  background: rgba(54, 54, 54, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-primary {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-link {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-info {\n  background: rgba(22, 125, 240, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-success {\n  background: rgba(72, 199, 142, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-warning {\n  background: rgba(255, 224, 138, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-danger {\n  background: rgba(241, 70, 104, 0.9);\n}\n.switch.is-rounded input[type=checkbox] + .check {\n  border-radius: 9999px;\n}\n.switch.is-rounded input[type=checkbox] + .check:before {\n  border-radius: 9999px;\n}\n.switch.is-rounded input[type=checkbox].is-elastic:before {\n  -webkit-transform: scaleX(1.5);\n          transform: scaleX(1.5);\n  border-radius: 9999px;\n}\n.switch.is-outlined input[type=checkbox] + .check {\n  background: transparent;\n  border: 0.1rem solid #b5b5b5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive {\n  border: 0.1rem solid rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive:before {\n  background: white;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive:hover {\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive {\n  border: 0.1rem solid rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive:before {\n  background: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive:hover {\n  border-color: rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive {\n  border: 0.1rem solid rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive:before {\n  background: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive:hover {\n  border-color: rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive {\n  border: 0.1rem solid rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:before {\n  background: #363636;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:hover {\n  border-color: rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive {\n  border: 0.1rem solid rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:hover {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive {\n  border: 0.1rem solid rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive:hover {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive {\n  border: 0.1rem solid rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive:before {\n  background: #167df0;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive:hover {\n  border-color: rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive {\n  border: 0.1rem solid rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive:before {\n  background: #48c78e;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive:hover {\n  border-color: rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive {\n  border: 0.1rem solid rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:before {\n  background: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:hover {\n  border-color: rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive {\n  border: 0.1rem solid rgba(241, 70, 104, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:before {\n  background: #f14668;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:hover {\n  border-color: rgba(241, 70, 104, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check:before {\n  background: #b5b5b5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check {\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-white {\n  background: transparent;\n  border-color: white;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-white:before {\n  background: white;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-black {\n  background: transparent;\n  border-color: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-black:before {\n  background: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-light {\n  background: transparent;\n  border-color: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-light:before {\n  background: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-dark {\n  background: transparent;\n  border-color: #363636;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-dark:before {\n  background: #363636;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-primary {\n  background: transparent;\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-primary:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-link {\n  background: transparent;\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-link:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-info {\n  background: transparent;\n  border-color: #167df0;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-info:before {\n  background: #167df0;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-success {\n  background: transparent;\n  border-color: #48c78e;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-success:before {\n  background: #48c78e;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-warning {\n  background: transparent;\n  border-color: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-warning:before {\n  background: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-danger {\n  background: transparent;\n  border-color: #f14668;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-danger:before {\n  background: #f14668;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check:before {\n  background: #7957d5;\n}\n.switch.is-outlined:hover input[type=checkbox] + .check {\n  background: transparent;\n  border-color: rgba(181, 181, 181, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check {\n  background: transparent;\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-white {\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-black {\n  border-color: rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-light {\n  border-color: rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-dark {\n  border-color: rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-primary {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-link {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-info {\n  border-color: rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-success {\n  border-color: rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-warning {\n  border-color: rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-danger {\n  border-color: rgba(241, 70, 104, 0.9);\n}\n.switch.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.switch.is-medium {\n  font-size: 1.25rem;\n}\n.switch.is-large {\n  font-size: 1.5rem;\n}\n.switch[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  color: #7a7a7a;\n}\n\n.table-wrapper .table {\n  margin-bottom: 0;\n}\n.table-wrapper:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n@media screen and (max-width: 1023px) {\n  .table-wrapper {\n    overflow-x: auto;\n  }\n}\n\n.b-table {\n  -webkit-transition: opacity 86ms ease-out;\n  transition: opacity 86ms ease-out;\n}\n@media screen and (min-width: 769px), print {\n  .b-table .table-mobile-sort {\n    display: none;\n  }\n}\n.b-table .icon {\n  -webkit-transition: opacity 86ms ease-out, -webkit-transform 150ms ease-out;\n  transition: opacity 86ms ease-out, -webkit-transform 150ms ease-out;\n  transition: transform 150ms ease-out, opacity 86ms ease-out;\n  transition: transform 150ms ease-out, opacity 86ms ease-out, -webkit-transform 150ms ease-out;\n}\n.b-table .icon.is-desc {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.b-table .icon.is-expanded {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.b-table .sort-icon.icon.is-desc {\n  -webkit-transform: rotate(180deg) translateY(-50%) !important;\n          transform: rotate(180deg) translateY(-50%) !important;\n}\n.b-table .table {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  border-collapse: separate;\n}\n.b-table .table th {\n  font-weight: 600;\n}\n.b-table .table th .th-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.b-table .table th .th-wrap .icon {\n  margin-left: 0.5rem;\n  margin-right: 0;\n  font-size: 1rem;\n}\n.b-table .table th .th-wrap.is-numeric {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  text-align: right;\n  width: 95%;\n}\n.b-table .table th .th-wrap.is-numeric .icon {\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n.b-table .table th .th-wrap.is-centered {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.b-table .table th.is-current-sort {\n  border-color: #7a7a7a;\n  font-weight: 700;\n}\n.b-table .table th.is-sortable:hover {\n  border-color: #7a7a7a;\n}\n.b-table .table th.is-sortable, .b-table .table th.is-sortable .th-wrap {\n  cursor: pointer;\n}\n.b-table .table th.is-sortable .is-relative, .b-table .table th.is-sortable .th-wrap .is-relative {\n  position: absolute;\n}\n.b-table .table th .sort-icon, .b-table .table th .multi-sort-cancel-icon {\n  position: absolute;\n  bottom: 50%;\n  left: 100%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.b-table .table th .multi-sort-cancel-icon {\n  margin-left: 10px;\n}\n.b-table .table th.is-sticky {\n  position: sticky;\n  left: 0;\n  z-index: 3 !important;\n  background: transparent;\n}\n.b-table .table tr.is-selected .checkbox input:checked + .check {\n  background: #fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%237957d5' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n}\n.b-table .table tr.is-selected .checkbox input + .check {\n  border-color: #fff;\n}\n.b-table .table tr.is-empty:hover {\n  background-color: transparent;\n}\n.b-table .table .chevron-cell {\n  vertical-align: middle;\n}\n.b-table .table .chevron-cell > a {\n  color: #7957d5 !important;\n}\n.b-table .table .checkbox-cell {\n  width: 40px;\n}\n.b-table .table .checkbox-cell .checkbox {\n  vertical-align: middle;\n}\n.b-table .table .checkbox-cell .checkbox .check {\n  -webkit-transition: none;\n  transition: none;\n}\n.b-table .table tr.detail {\n  -webkit-box-shadow: inset 0 1px 3px #dbdbdb;\n          box-shadow: inset 0 1px 3px #dbdbdb;\n  background: #fafafa;\n}\n.b-table .table tr.detail .detail-container {\n  padding: 1rem;\n}\n.b-table .table:focus {\n  border-color: #7957d5;\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-table .table.is-bordered th.is-current-sort,\n.b-table .table.is-bordered th.is-sortable:hover {\n  border-color: #dbdbdb;\n  background: whitesmoke;\n}\n.b-table .table td.is-sticky {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  background: white;\n}\n.b-table .table.is-striped tbody tr:not(.is-selected):nth-child(even) td.is-sticky {\n  background: #fafafa;\n}\n.b-table .level:not(.top) {\n  padding-bottom: 1.5rem;\n}\n.b-table .table-wrapper {\n  position: relative;\n}\n.b-table .table-wrapper.has-sticky-header {\n  height: 300px;\n  overflow-y: auto;\n}\n@media screen and (max-width: 768px) {\n  .b-table .table-wrapper.has-sticky-header.has-mobile-cards {\n    height: initial !important;\n    overflow-y: initial !important;\n  }\n}\n.b-table .table-wrapper.has-sticky-header tr:first-child th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: white;\n}\n@media screen and (max-width: 768px) {\n  .b-table .table-wrapper.has-mobile-cards .table {\n    background-color: transparent;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-width: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr th {\n    display: none;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr .checkbox-cell {\n    display: block;\n    width: 100%;\n    text-align: right;\n    margin-bottom: 1rem;\n    border: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards tfoot th {\n    border: 0;\n    display: inherit;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr {\n    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    max-width: 100%;\n    position: relative;\n    display: block;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr td {\n    border: 0;\n    display: inherit;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr td:last-child {\n    border-bottom: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]) {\n    background: white;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover {\n    background-color: white;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr.detail {\n    margin-top: -1rem;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    text-align: right;\n    border-bottom: 1px solid whitesmoke;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n    content: attr(data-label);\n    font-weight: 600;\n    padding-right: 0.5em;\n    text-align: left;\n  }\n}\n.b-table .table-wrapper.is-card-list .table {\n  background-color: transparent;\n}\n.b-table .table-wrapper.is-card-list thead tr {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-width: 0;\n}\n.b-table .table-wrapper.is-card-list thead tr th {\n  display: none;\n}\n.b-table .table-wrapper.is-card-list thead tr .checkbox-cell {\n  display: block;\n  width: 100%;\n  text-align: right;\n  margin-bottom: 1rem;\n  border: 0;\n}\n.b-table .table-wrapper.is-card-list tfoot th {\n  border: 0;\n  display: inherit;\n}\n.b-table .table-wrapper.is-card-list tr {\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n  display: block;\n}\n.b-table .table-wrapper.is-card-list tr td {\n  border: 0;\n  display: inherit;\n}\n.b-table .table-wrapper.is-card-list tr td:last-child {\n  border-bottom: 0;\n}\n.b-table .table-wrapper.is-card-list tr:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.b-table .table-wrapper.is-card-list tr:not([class*=is-]) {\n  background: white;\n}\n.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover {\n  background-color: white;\n}\n.b-table .table-wrapper.is-card-list tr.detail {\n  margin-top: -1rem;\n}\n.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  text-align: right;\n  border-bottom: 1px solid whitesmoke;\n}\n.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n  content: attr(data-label);\n  font-weight: 600;\n  padding-right: 0.5em;\n  text-align: left;\n}\n\n.b-tabs .tabs {\n  margin-bottom: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.b-tabs .tabs li a:focus {\n  outline: none;\n  border-bottom-color: #7957d5;\n}\n.b-tabs .tabs li:not(.is-active) a:focus {\n  border-bottom-color: #363636;\n}\n.b-tabs .tabs li.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.b-tabs .tabs.is-boxed li a:focus {\n  background-color: white;\n  border-bottom-color: transparent;\n}\n.b-tabs .tabs.is-boxed li:not(.is-active) a:focus {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.b-tabs .tabs.is-toggle li a:focus {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-tabs .tabs.is-toggle li:not(.is-active) a:focus {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n}\n.b-tabs .tab-content {\n  position: relative;\n  overflow: visible;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1rem;\n}\n.b-tabs .tab-content .tab-item {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.b-tabs .tab-content .tab-item:focus {\n  outline: none;\n}\n.b-tabs .tab-content.is-transitioning {\n  overflow: hidden;\n}\n.b-tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.b-tabs.is-fullwidth {\n  width: 100%;\n}\n.b-tabs.is-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.b-tabs.is-vertical > .tabs ul {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-bottom-color: transparent;\n}\n.b-tabs.is-vertical > .tabs ul li {\n  width: 100%;\n}\n.b-tabs.is-vertical > .tabs ul li a {\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n}\n.b-tabs.is-vertical > .tabs.is-boxed li a {\n  border-bottom-color: transparent !important;\n  border-right-color: #dbdbdb !important;\n  border-radius: 4px 0 0 4px;\n}\n.b-tabs.is-vertical > .tabs.is-boxed li.is-active a {\n  border-bottom-color: #dbdbdb !important;\n  border-right-color: transparent !important;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li + li {\n  margin-left: 0;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li:first-child a {\n  border-radius: 4px 4px 0 0;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li:last-child a {\n  border-radius: 0 0 4px 4px;\n}\n.b-tabs.is-vertical > .tabs.is-fullwidth li a {\n  height: 100%;\n}\n.b-tabs.is-vertical > .tab-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.b-tabs.is-vertical.is-right {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.b-tabs.is-vertical.is-right > .tabs ul a {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.b-tabs.is-vertical.is-right > .tabs ul a .icon:first-child {\n  margin-right: 0;\n  margin-left: 0.5em;\n}\n.b-tabs.is-vertical.is-right > .tabs.is-boxed li a {\n  border-bottom-color: transparent !important;\n  border-right-color: transparent !important;\n  border-left-color: #dbdbdb !important;\n  border-radius: 0 4px 4px 0;\n}\n.b-tabs.is-vertical.is-right > .tabs.is-boxed li.is-active a {\n  border-bottom-color: #dbdbdb !important;\n  border-right-color: #dbdbdb !important;\n  border-left-color: transparent !important;\n}\n.b-tabs.is-multiline > .tabs ul {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n\n.tag .has-ellipsis {\n  max-width: 10em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.tag .delete.is-white, .tag.is-delete.is-white, .tag.has-delete-icon.is-white {\n  background: white;\n}\n.tag .delete.is-white:hover, .tag.is-delete.is-white:hover, .tag.has-delete-icon.is-white:hover {\n  background-color: #e6e6e6;\n  text-decoration: none;\n}\n.tag .delete.is-black, .tag.is-delete.is-black, .tag.has-delete-icon.is-black {\n  background: #0a0a0a;\n}\n.tag .delete.is-black:hover, .tag.is-delete.is-black:hover, .tag.has-delete-icon.is-black:hover {\n  background-color: black;\n  text-decoration: none;\n}\n.tag .delete.is-light, .tag.is-delete.is-light, .tag.has-delete-icon.is-light {\n  background: whitesmoke;\n}\n.tag .delete.is-light:hover, .tag.is-delete.is-light:hover, .tag.has-delete-icon.is-light:hover {\n  background-color: #dbdbdb;\n  text-decoration: none;\n}\n.tag .delete.is-dark, .tag.is-delete.is-dark, .tag.has-delete-icon.is-dark {\n  background: #363636;\n}\n.tag .delete.is-dark:hover, .tag.is-delete.is-dark:hover, .tag.has-delete-icon.is-dark:hover {\n  background-color: #1c1c1c;\n  text-decoration: none;\n}\n.tag .delete.is-primary, .tag.is-delete.is-primary, .tag.has-delete-icon.is-primary {\n  background: #7957d5;\n}\n.tag .delete.is-primary:hover, .tag.is-delete.is-primary:hover, .tag.has-delete-icon.is-primary:hover {\n  background-color: #5a32c7;\n  text-decoration: none;\n}\n.tag .delete.is-link, .tag.is-delete.is-link, .tag.has-delete-icon.is-link {\n  background: #7957d5;\n}\n.tag .delete.is-link:hover, .tag.is-delete.is-link:hover, .tag.has-delete-icon.is-link:hover {\n  background-color: #5a32c7;\n  text-decoration: none;\n}\n.tag .delete.is-info, .tag.is-delete.is-info, .tag.has-delete-icon.is-info {\n  background: #167df0;\n}\n.tag .delete.is-info:hover, .tag.is-delete.is-info:hover, .tag.has-delete-icon.is-info:hover {\n  background-color: #0d64c6;\n  text-decoration: none;\n}\n.tag .delete.is-success, .tag.is-delete.is-success, .tag.has-delete-icon.is-success {\n  background: #48c78e;\n}\n.tag .delete.is-success:hover, .tag.is-delete.is-success:hover, .tag.has-delete-icon.is-success:hover {\n  background-color: #34a873;\n  text-decoration: none;\n}\n.tag .delete.is-warning, .tag.is-delete.is-warning, .tag.has-delete-icon.is-warning {\n  background: #ffe08a;\n}\n.tag .delete.is-warning:hover, .tag.is-delete.is-warning:hover, .tag.has-delete-icon.is-warning:hover {\n  background-color: #ffd257;\n  text-decoration: none;\n}\n.tag .delete.is-danger, .tag.is-delete.is-danger, .tag.has-delete-icon.is-danger {\n  background: #f14668;\n}\n.tag .delete.is-danger:hover, .tag.is-delete.is-danger:hover, .tag.has-delete-icon.is-danger:hover {\n  background-color: #ee1742;\n  text-decoration: none;\n}\n.tag.has-delete-icon {\n  padding: 0px;\n}\n.tag.has-delete-icon .icon:first-child:not(:last-child) {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.taginput .taginput-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.taginput .taginput-container.is-focusable {\n  padding-bottom: 0;\n  padding-top: calc(0.275em - 1px);\n  padding-left: 0;\n  padding-right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: auto;\n  cursor: text;\n}\n.taginput .taginput-container:not(.is-focusable) {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: auto;\n}\n.taginput .taginput-container:not(.is-focusable).is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.taginput .taginput-container:not(.is-focusable).is-medium {\n  font-size: 1.25rem;\n}\n.taginput .taginput-container:not(.is-focusable).is-large {\n  font-size: 1.5rem;\n}\n.taginput .taginput-container > .tag,\n.taginput .taginput-container > .tags {\n  margin-left: 0.275rem;\n  margin-bottom: calc(0.275em - 1px);\n  font-size: 0.9em;\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container > .tag .tag,\n.taginput .taginput-container > .tags .tag {\n  margin-bottom: 0;\n  font-size: 0.9em;\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container > .tag .tag.is-delete,\n.taginput .taginput-container > .tags .tag.is-delete {\n  width: calc(2em - 1px);\n}\n.taginput .taginput-container .autocomplete {\n  position: static;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.taginput .taginput-container .autocomplete input {\n  height: calc(2em - 1px);\n  margin-bottom: calc(0.275em - 1px);\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  min-width: 8em;\n}\n.taginput .taginput-container .autocomplete input:focus {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.taginput .taginput-container .autocomplete .icon {\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container .autocomplete > .control.is-loading::after {\n  top: 0.375em;\n}\n\n.timepicker .dropdown-menu {\n  min-width: 0;\n}\n.timepicker .dropdown,\n.timepicker .dropdown-trigger {\n  width: 100%;\n}\n.timepicker .dropdown .input[readonly],\n.timepicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n          box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.timepicker .dropdown .input[readonly]:focus, .timepicker .dropdown .input[readonly].is-focused, .timepicker .dropdown .input[readonly]:active, .timepicker .dropdown .input[readonly].is-active,\n.timepicker .dropdown-trigger .input[readonly]:focus,\n.timepicker .dropdown-trigger .input[readonly].is-focused,\n.timepicker .dropdown-trigger .input[readonly]:active,\n.timepicker .dropdown-trigger .input[readonly].is-active {\n  -webkit-box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n          box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.timepicker .dropdown.is-disabled {\n  opacity: 1;\n}\n.timepicker .dropdown-item, .timepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .timepicker a {\n  font-size: inherit;\n  padding: 0;\n}\n.timepicker .timepicker-footer {\n  padding: 0 0.5rem 0 0.5rem;\n}\n.timepicker .dropdown-content .control {\n  font-size: 1.25em;\n  margin-right: 0 !important;\n}\n.timepicker .dropdown-content .control .select {\n  margin: 0 0.125em;\n}\n.timepicker .dropdown-content .control .select select {\n  font-weight: 600;\n  padding-right: calc(0.75em - 1px);\n  border: 0;\n}\n.timepicker .dropdown-content .control .select select option:disabled {\n  color: rgba(122, 122, 122, 0.7);\n}\n.timepicker .dropdown-content .control .select:after {\n  display: none;\n}\n.timepicker .dropdown-content .control.is-colon {\n  font-size: 1.7em;\n  line-height: 1.7em;\n}\n.timepicker .dropdown-content .control.is-colon:last-child {\n  padding-right: calc(0.75em - 1px);\n}\n.timepicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.timepicker.is-medium {\n  font-size: 1.25rem;\n}\n.timepicker.is-large {\n  font-size: 1.5rem;\n}\n\n.b-tooltip {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.b-tooltip.is-top .tooltip-content {\n  top: auto;\n  right: auto;\n  bottom: calc(100% + 5px + 2px);\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-tooltip.is-top .tooltip-content::before {\n  top: 100%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-top: 5px solid #7957d5;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.b-tooltip.is-top.is-white .tooltip-content::before {\n  border-top-color: white;\n}\n.b-tooltip.is-top.is-black .tooltip-content::before {\n  border-top-color: #0a0a0a;\n}\n.b-tooltip.is-top.is-light .tooltip-content::before {\n  border-top-color: whitesmoke;\n}\n.b-tooltip.is-top.is-dark .tooltip-content::before {\n  border-top-color: #363636;\n}\n.b-tooltip.is-top.is-primary .tooltip-content::before {\n  border-top-color: #7957d5;\n}\n.b-tooltip.is-top.is-primary.is-light .tooltip-content::before {\n  border-top-color: #f2effb;\n}\n.b-tooltip.is-top.is-link .tooltip-content::before {\n  border-top-color: #7957d5;\n}\n.b-tooltip.is-top.is-link.is-light .tooltip-content::before {\n  border-top-color: #f2effb;\n}\n.b-tooltip.is-top.is-info .tooltip-content::before {\n  border-top-color: #167df0;\n}\n.b-tooltip.is-top.is-info.is-light .tooltip-content::before {\n  border-top-color: #ecf4fe;\n}\n.b-tooltip.is-top.is-success .tooltip-content::before {\n  border-top-color: #48c78e;\n}\n.b-tooltip.is-top.is-success.is-light .tooltip-content::before {\n  border-top-color: #effaf5;\n}\n.b-tooltip.is-top.is-warning .tooltip-content::before {\n  border-top-color: #ffe08a;\n}\n.b-tooltip.is-top.is-warning.is-light .tooltip-content::before {\n  border-top-color: #fffaeb;\n}\n.b-tooltip.is-top.is-danger .tooltip-content::before {\n  border-top-color: #f14668;\n}\n.b-tooltip.is-top.is-danger.is-light .tooltip-content::before {\n  border-top-color: #feecf0;\n}\n.b-tooltip.is-right .tooltip-content {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: calc(100% + 5px + 2px);\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.b-tooltip.is-right .tooltip-content::before {\n  top: 50%;\n  right: 100%;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border-top: 5px solid transparent;\n  border-right: 5px solid #7957d5;\n  border-bottom: 5px solid transparent;\n}\n.b-tooltip.is-right.is-white .tooltip-content::before {\n  border-right-color: white;\n}\n.b-tooltip.is-right.is-black .tooltip-content::before {\n  border-right-color: #0a0a0a;\n}\n.b-tooltip.is-right.is-light .tooltip-content::before {\n  border-right-color: whitesmoke;\n}\n.b-tooltip.is-right.is-dark .tooltip-content::before {\n  border-right-color: #363636;\n}\n.b-tooltip.is-right.is-primary .tooltip-content::before {\n  border-right-color: #7957d5;\n}\n.b-tooltip.is-right.is-primary.is-light .tooltip-content::before {\n  border-right-color: #f2effb;\n}\n.b-tooltip.is-right.is-link .tooltip-content::before {\n  border-right-color: #7957d5;\n}\n.b-tooltip.is-right.is-link.is-light .tooltip-content::before {\n  border-right-color: #f2effb;\n}\n.b-tooltip.is-right.is-info .tooltip-content::before {\n  border-right-color: #167df0;\n}\n.b-tooltip.is-right.is-info.is-light .tooltip-content::before {\n  border-right-color: #ecf4fe;\n}\n.b-tooltip.is-right.is-success .tooltip-content::before {\n  border-right-color: #48c78e;\n}\n.b-tooltip.is-right.is-success.is-light .tooltip-content::before {\n  border-right-color: #effaf5;\n}\n.b-tooltip.is-right.is-warning .tooltip-content::before {\n  border-right-color: #ffe08a;\n}\n.b-tooltip.is-right.is-warning.is-light .tooltip-content::before {\n  border-right-color: #fffaeb;\n}\n.b-tooltip.is-right.is-danger .tooltip-content::before {\n  border-right-color: #f14668;\n}\n.b-tooltip.is-right.is-danger.is-light .tooltip-content::before {\n  border-right-color: #feecf0;\n}\n.b-tooltip.is-bottom .tooltip-content {\n  top: calc(100% + 5px + 2px);\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.b-tooltip.is-bottom .tooltip-content::before {\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #7957d5;\n  border-left: 5px solid transparent;\n}\n.b-tooltip.is-bottom.is-white .tooltip-content::before {\n  border-bottom-color: white;\n}\n.b-tooltip.is-bottom.is-black .tooltip-content::before {\n  border-bottom-color: #0a0a0a;\n}\n.b-tooltip.is-bottom.is-light .tooltip-content::before {\n  border-bottom-color: whitesmoke;\n}\n.b-tooltip.is-bottom.is-dark .tooltip-content::before {\n  border-bottom-color: #363636;\n}\n.b-tooltip.is-bottom.is-primary .tooltip-content::before {\n  border-bottom-color: #7957d5;\n}\n.b-tooltip.is-bottom.is-primary.is-light .tooltip-content::before {\n  border-bottom-color: #f2effb;\n}\n.b-tooltip.is-bottom.is-link .tooltip-content::before {\n  border-bottom-color: #7957d5;\n}\n.b-tooltip.is-bottom.is-link.is-light .tooltip-content::before {\n  border-bottom-color: #f2effb;\n}\n.b-tooltip.is-bottom.is-info .tooltip-content::before {\n  border-bottom-color: #167df0;\n}\n.b-tooltip.is-bottom.is-info.is-light .tooltip-content::before {\n  border-bottom-color: #ecf4fe;\n}\n.b-tooltip.is-bottom.is-success .tooltip-content::before {\n  border-bottom-color: #48c78e;\n}\n.b-tooltip.is-bottom.is-success.is-light .tooltip-content::before {\n  border-bottom-color: #effaf5;\n}\n.b-tooltip.is-bottom.is-warning .tooltip-content::before {\n  border-bottom-color: #ffe08a;\n}\n.b-tooltip.is-bottom.is-warning.is-light .tooltip-content::before {\n  border-bottom-color: #fffaeb;\n}\n.b-tooltip.is-bottom.is-danger .tooltip-content::before {\n  border-bottom-color: #f14668;\n}\n.b-tooltip.is-bottom.is-danger.is-light .tooltip-content::before {\n  border-bottom-color: #feecf0;\n}\n.b-tooltip.is-left .tooltip-content {\n  top: 50%;\n  right: calc(100% + 5px + 2px);\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.b-tooltip.is-left .tooltip-content::before {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #7957d5;\n}\n.b-tooltip.is-left.is-white .tooltip-content::before {\n  border-left-color: white;\n}\n.b-tooltip.is-left.is-black .tooltip-content::before {\n  border-left-color: #0a0a0a;\n}\n.b-tooltip.is-left.is-light .tooltip-content::before {\n  border-left-color: whitesmoke;\n}\n.b-tooltip.is-left.is-dark .tooltip-content::before {\n  border-left-color: #363636;\n}\n.b-tooltip.is-left.is-primary .tooltip-content::before {\n  border-left-color: #7957d5;\n}\n.b-tooltip.is-left.is-primary.is-light .tooltip-content::before {\n  border-left-color: #f2effb;\n}\n.b-tooltip.is-left.is-link .tooltip-content::before {\n  border-left-color: #7957d5;\n}\n.b-tooltip.is-left.is-link.is-light .tooltip-content::before {\n  border-left-color: #f2effb;\n}\n.b-tooltip.is-left.is-info .tooltip-content::before {\n  border-left-color: #167df0;\n}\n.b-tooltip.is-left.is-info.is-light .tooltip-content::before {\n  border-left-color: #ecf4fe;\n}\n.b-tooltip.is-left.is-success .tooltip-content::before {\n  border-left-color: #48c78e;\n}\n.b-tooltip.is-left.is-success.is-light .tooltip-content::before {\n  border-left-color: #effaf5;\n}\n.b-tooltip.is-left.is-warning .tooltip-content::before {\n  border-left-color: #ffe08a;\n}\n.b-tooltip.is-left.is-warning.is-light .tooltip-content::before {\n  border-left-color: #fffaeb;\n}\n.b-tooltip.is-left.is-danger .tooltip-content::before {\n  border-left-color: #f14668;\n}\n.b-tooltip.is-left.is-danger.is-light .tooltip-content::before {\n  border-left-color: #feecf0;\n}\n.b-tooltip .tooltip-content {\n  width: auto;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 400;\n  -webkit-box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);\n          box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);\n  z-index: 38;\n  white-space: nowrap;\n  position: absolute;\n}\n.b-tooltip .tooltip-content::before {\n  position: absolute;\n  content: \"\";\n  pointer-events: none;\n  z-index: 38;\n}\n.b-tooltip .tooltip-trigger {\n  width: 100%;\n}\n.b-tooltip.is-white .tooltip-content {\n  background: white;\n  color: #0a0a0a;\n}\n.b-tooltip.is-black .tooltip-content {\n  background: #0a0a0a;\n  color: white;\n}\n.b-tooltip.is-light .tooltip-content {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-tooltip.is-dark .tooltip-content {\n  background: #363636;\n  color: #fff;\n}\n.b-tooltip.is-primary .tooltip-content {\n  background: #7957d5;\n  color: #fff;\n}\n.b-tooltip.is-primary.is-light .tooltip-content {\n  background: #f2effb;\n  color: #552fbc;\n}\n.b-tooltip.is-link .tooltip-content {\n  background: #7957d5;\n  color: #fff;\n}\n.b-tooltip.is-link.is-light .tooltip-content {\n  background: #f2effb;\n  color: #552fbc;\n}\n.b-tooltip.is-info .tooltip-content {\n  background: #167df0;\n  color: #fff;\n}\n.b-tooltip.is-info.is-light .tooltip-content {\n  background: #ecf4fe;\n  color: #0d68ce;\n}\n.b-tooltip.is-success .tooltip-content {\n  background: #48c78e;\n  color: #fff;\n}\n.b-tooltip.is-success.is-light .tooltip-content {\n  background: #effaf5;\n  color: #257953;\n}\n.b-tooltip.is-warning .tooltip-content {\n  background: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-tooltip.is-warning.is-light .tooltip-content {\n  background: #fffaeb;\n  color: #946c00;\n}\n.b-tooltip.is-danger .tooltip-content {\n  background: #f14668;\n  color: #fff;\n}\n.b-tooltip.is-danger.is-light .tooltip-content {\n  background: #feecf0;\n  color: #cc0f35;\n}\n.b-tooltip.is-always .tooltip-content::before,\n.b-tooltip.is-always .tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.b-tooltip.is-multiline .tooltip-content {\n  display: flex-block;\n  text-align: center;\n  white-space: normal;\n}\n.b-tooltip.is-multiline.is-small .tooltip-content {\n  width: 180px;\n}\n.b-tooltip.is-multiline.is-medium .tooltip-content {\n  width: 240px;\n}\n.b-tooltip.is-multiline.is-large .tooltip-content {\n  width: 300px;\n}\n.b-tooltip.is-dashed .tooltip-trigger {\n  border-bottom: 1px dashed #b5b5b5;\n  cursor: default;\n}\n.b-tooltip.is-square .tooltip-content {\n  border-radius: 0;\n}\n\n.upload {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.upload input[type=file] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  outline: none;\n  cursor: pointer;\n  z-index: -1;\n}\n.upload .upload-draggable {\n  cursor: pointer;\n  padding: 0.25em;\n  border: 1px dashed #b5b5b5;\n  border-radius: 6px;\n}\n.upload .upload-draggable.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.upload .upload-draggable.is-loading {\n  position: relative;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.upload .upload-draggable.is-loading:after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n  top: 0;\n  left: calc(50% - 1.5em);\n  width: 3em;\n  height: 3em;\n  border-width: 0.25em;\n}\n.upload .upload-draggable:hover.is-white, .upload .upload-draggable.is-hovered.is-white {\n  border-color: white;\n  background: rgba(255, 255, 255, 0.05);\n}\n.upload .upload-draggable:hover.is-black, .upload .upload-draggable.is-hovered.is-black {\n  border-color: #0a0a0a;\n  background: rgba(10, 10, 10, 0.05);\n}\n.upload .upload-draggable:hover.is-light, .upload .upload-draggable.is-hovered.is-light {\n  border-color: whitesmoke;\n  background: rgba(245, 245, 245, 0.05);\n}\n.upload .upload-draggable:hover.is-dark, .upload .upload-draggable.is-hovered.is-dark {\n  border-color: #363636;\n  background: rgba(54, 54, 54, 0.05);\n}\n.upload .upload-draggable:hover.is-primary, .upload .upload-draggable.is-hovered.is-primary {\n  border-color: #7957d5;\n  background: rgba(121, 87, 213, 0.05);\n}\n.upload .upload-draggable:hover.is-link, .upload .upload-draggable.is-hovered.is-link {\n  border-color: #7957d5;\n  background: rgba(121, 87, 213, 0.05);\n}\n.upload .upload-draggable:hover.is-info, .upload .upload-draggable.is-hovered.is-info {\n  border-color: #167df0;\n  background: rgba(22, 125, 240, 0.05);\n}\n.upload .upload-draggable:hover.is-success, .upload .upload-draggable.is-hovered.is-success {\n  border-color: #48c78e;\n  background: rgba(72, 199, 142, 0.05);\n}\n.upload .upload-draggable:hover.is-warning, .upload .upload-draggable.is-hovered.is-warning {\n  border-color: #ffe08a;\n  background: rgba(255, 224, 138, 0.05);\n}\n.upload .upload-draggable:hover.is-danger, .upload .upload-draggable.is-hovered.is-danger {\n  border-color: #f14668;\n  background: rgba(241, 70, 104, 0.05);\n}\n.upload .upload-draggable.is-expanded {\n  width: 100%;\n}\n.upload.is-expanded {\n  width: 100%;\n}\n.upload.is-rounded {\n  border-radius: 9999px;\n}\n.upload.is-rounded .file-name {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .upload input[type=file] {\n    z-index: auto;\n  }\n  .upload .upload-draggable + input[type=file] {\n    z-index: -1;\n  }\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("00122704", content, true)

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  animation: fa-spin 1s infinite steps(8); }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black; }\n\n.fad.fa-inverse {\n  color: #fff; }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("758cc9b5", content, true)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{scroll-behavior:smooth;overflow-y:auto}html::-webkit-scrollbar-thumb{opacity:1;background-color:#7d2700;border-radius:10px}html::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0)}html::-webkit-scrollbar{width:12px;background-color:#000}html::-webkit-scrollbar-thumb{opacity:0;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0)}body{scroll-behavior:smooth}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_47dacd38_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_47dacd38_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_47dacd38_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_47dacd38_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_47dacd38_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a{color:#deb887}#NuxtApp{min-height:100vh}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  user: {},
  isLogged: false
});
const mutations = {
  SET_USER_LOGGED_IN(state, isLogged) {
    state.isLogged = isLogged;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};
const getters = {};
const actions = {
  async nuxtServerInit({
    commit,
    dispatch
  }, {
    req
  }) {
    if (req) {
      if (req.session && req.session.passport && req.session.passport.user) {
        let {
          data
        } = await dispatch('getUser');
        commit("SET_USER", data);
        commit("SET_USER_LOGGED_IN", true);
      } else {
        commit("SET_USER", {});
        commit("SET_USER_LOGGED_IN", false);
      }
    }
  },
  getUser() {
    return this.$axios.get("/api/web/user");
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.set.js");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(18);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./app/.nuxt/middleware.js
const middleware = {};
middleware['ssr-cookie'] = __webpack_require__(26);
middleware['ssr-cookie'] = middleware['ssr-cookie'].default || middleware['ssr-cookie'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./app/.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./app/.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  if (this.$ssrContext.nuxt.fetch[this._fetchKey] !== undefined) {
    console.warn(`Duplicate fetch key detected (${this._fetchKey}). This may lead to unexpected results.`);
  }
  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(19);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./app/.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./app/.nuxt/router.js





const _70814986 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin */ 1).then(__webpack_require__.bind(null, 54)));
const _774b2f88 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/index */ 3).then(__webpack_require__.bind(null, 57)));
const _65dce671 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/bin */ 2).then(__webpack_require__.bind(null, 55)));
const _3f11f589 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 56)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/admin",
    component: _70814986,
    children: [{
      path: "",
      component: _774b2f88,
      name: "admin"
    }, {
      path: "bin",
      component: _65dce671,
      name: "admin-bin"
    }]
  }, {
    path: "/",
    component: _3f11f589,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./app/.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=12bb8b81&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"content\" data-v-12bb8b81>" + (_vm.error.statusCode === 404 || _vm.error.statusCode === 403 ? "<h1 class=\"is-size-3\" data-v-12bb8b81>" + _vm._ssrEscape("\n      " + _vm._s(_vm.error.message) + "\n    ") + "</h1>" : "<h1 class=\"is-size-3\" data-v-12bb8b81>An error occurred</h1>") + " <a" + _vm._ssrAttr("href", _vm.linkHome) + " data-v-12bb8b81>Home page</a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=12bb8b81&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ["error"],
  data() {
    return {
      linkHome: '/'
    };
  },
  layout: "error",
  // you can set a custom layout for the error page,
  computed: {},
  head() {
    return {
      // Set Meta Tags for this Page
      title: `Page Error - ${this.error.statusCode}`
    };
  },
  mounted() {}
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12bb8b81",
  "6a249cc7"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./app/.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./app/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./app/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./app/.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "3344a6a4"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(33);

// EXTERNAL MODULE: ./assets/css/main.scss
var main = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=47dacd38&
var defaultvue_type_template_id_47dacd38_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "NuxtApp"
    }
  }, [_c('nuxt')], 1);
};
var defaultvue_type_template_id_47dacd38_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=47dacd38&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_47dacd38_render,
  defaultvue_type_template_id_47dacd38_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "44e32280"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./app/.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error.options || layouts_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.');
      }
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./app/.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(39), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(42), 'AdminStore.js');
  resolveStoreModules(__webpack_require__(43), 'HomeStore.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(20);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./app/.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
  "async": true
});
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(7);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "abort-controller"
var external_abort_controller_ = __webpack_require__(21);

// EXTERNAL MODULE: external "web-streams-polyfill/ponyfill/es2018"
var es2018_ = __webpack_require__(22);

// CONCATENATED MODULE: ./app/.nuxt/http.server.js



const TEN_MEGABYTES = 1000 * 1000 * 10;
if (!global.fetch) {
  global.fetch = (url, options) => external_node_fetch_default()(url, {
    highWaterMark: TEN_MEGABYTES,
    ...options
  });
}
if (!global.Headers) {
  global.Headers = external_node_fetch_default.a.Headers;
}
if (!global.Request) {
  global.Request = external_node_fetch_default.a.Request;
}
if (!global.Response) {
  global.Response = external_node_fetch_default.a.Response;
}
if (!global.AbortController) {
  global.AbortController = external_abort_controller_["AbortController"];
}
if (!global.ReadableStream) {
  try {
    global.ReadableStream = es2018_["ReadableStream"];
  } catch (_) {}
}
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(8);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// EXTERNAL MODULE: external "destr"
var external_destr_ = __webpack_require__(13);
var external_destr_default = /*#__PURE__*/__webpack_require__.n(external_destr_);

// EXTERNAL MODULE: ./node_modules/ky/index.js
var node_modules_ky = __webpack_require__(23);

// CONCATENATED MODULE: ./app/.nuxt/http.js



class http_HTTP {
  constructor(defaults, ky = node_modules_ky["a" /* default */]) {
    this._defaults = {
      hooks: {},
      ...defaults
    };
    this._ky = ky;
  }
  getBaseURL() {
    return this._defaults.prefixUrl;
  }
  setBaseURL(baseURL) {
    this._defaults.prefixUrl = baseURL;
  }
  setHeader(name, value) {
    if (!value) {
      delete this._defaults.headers[name];
    } else {
      this._defaults.headers[name] = value;
    }
  }
  setToken(token, type) {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value);
  }
  _hook(name, fn) {
    if (!this._defaults.hooks[name]) {
      this._defaults.hooks[name] = [];
    }
    this._defaults.hooks[name].push(fn);
  }
  onRequest(fn) {
    this._hook('beforeRequest', fn);
  }
  onRetry(fn) {
    this._hook('beforeRetry', fn);
  }
  onResponse(fn) {
    this._hook('afterResponse', fn);
  }
  onError(fn) {
    this._hook('onError', fn);
  }
  create(options) {
    const {
      retry,
      timeout,
      prefixUrl,
      headers
    } = this._defaults;
    return createHttpInstance(external_defu_default()(options, {
      retry,
      timeout,
      prefixUrl,
      headers
    }));
  }
}
for (let method of ['get', 'head', 'delete', 'post', 'put', 'patch']) {
  const hasBody = ['post', 'put', 'patch'].includes(method);
  http_HTTP.prototype[method] = async function (url, arg1, arg2) {
    let options;
    if (!hasBody) {
      options = arg1;
    } else {
      options = arg2 || {};
      if (arg1 !== undefined) {
        if (arg1.constructor === Object || Array.isArray(arg1)) {
          options.json = arg1;
        } else {
          options.body = arg1;
        }
      }
    }
    const _options = {
      ...this._defaults,
      ...options
    };
    if (/^https?/.test(url)) {
      delete _options.prefixUrl;
    } else if (_options.prefixUrl && typeof url === 'string' && url.startsWith('/')) {
      // Prevents `ky` from throwing "`input` must not begin with a slash when using `prefixUrl`"
      url = url.substr(1);
    }
    try {
      const response = await this._ky[method](url, _options);
      return response;
    } catch (error) {
      // Try to fill error with useful data
      if (error.response) {
        error.statusCode = error.response.status;
        try {
          const text = await error.response.text();
          error.response.text = () => Promise.resolve(text);
          const json = external_destr_default()(text);
          error.response.json = () => Promise.resolve(json);
          error.response.data = json;
        } catch (_) {}
      }

      // Call onError hook
      if (_options.hooks.onError) {
        for (const fn of _options.hooks.onError) {
          const res = fn(error);
          if (res !== undefined) {
            return res;
          }
        }
      }

      // Throw error
      throw error;
    }
  };
  http_HTTP.prototype['$' + method] = function (url, arg1, arg2) {
    return this[method](url, arg1, arg2).then(response => response && response.text ? response.text() : response).then(body => external_destr_default()(body));
  };
}
const createHttpInstance = options => {
  // Create new HTTP instance
  const http = new http_HTTP(options);

  // Setup interceptors

  return http;
};
/* harmony default export */ var http = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.http || {};

  // prefixUrl
  const prefixUrl =  false ? undefined : runtimeConfig.baseURL || process.env._HTTP_BASE_URL_ || 'http://localhost:3000/';
  const headers = {};

  // Defaults
  const defaults = {
    retry: 0,
    timeout:  true ? false : undefined,
    prefixUrl,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }
    defaults.headers = {
      ...reqHeaders,
      ...defaults.headers
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    defaults.headers['accept-encoding'] = 'gzip, deflate';
  }
  const http = createHttpInstance(defaults);

  // Inject http to the context as $http
  ctx.$http = http;
  inject('http', http);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./app/.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupCredentialsInterceptor(axios);
  setupProgress(axios);
  return axios;
};
const setupCredentialsInterceptor = axios => {
  // Send credentials only to relative and API Backend requests
  axios.onRequest(config => {
    if (config.withCredentials === undefined) {
      if (!/^https?:\/\//i.test(config.url) || config.url.indexOf(config.baseURL) === 0) {
        config.withCredentials = true;
      }
    }
  });
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(24);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(10);

// CONCATENATED MODULE: ./app/.nuxt/fontawesome.js



fontawesome_svg_core_["config"].autoAddCss = false;
external_vue_default.a.component('fa', vue_fontawesome_["FontAwesomeIcon"]);
external_vue_default.a.component('faLayers', vue_fontawesome_["FontAwesomeLayers"]);
external_vue_default.a.component('faLayersText', vue_fontawesome_["FontAwesomeLayersText"]);
// CONCATENATED MODULE: ./plugins/filters.js

external_vue_default.a.filter("timeLeft", seconds => {
  if (seconds < 0) {
    return "now";
  } else if (seconds < 60) {
    return seconds + ` second${seconds !== 0 ? 's' : ''}`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes + ` minute${minutes !== 1 ? 's' : ''}, ` + remainingSeconds + ` second${remainingSeconds !== 1 ? 's' : ''}`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return hours + ` hour${hours !== 1 ? 's' : ''}, ` + remainingMinutes + ` minute${remainingMinutes !== 1 ? 's' : ''}`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    const remainingHours = Math.floor(seconds % 86400 / 3600);
    const remainingMinutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return days + ` day${days !== 1 ? 's' : ''}, ` + remainingHours + ` hour${remainingHours !== 1 ? 's' : ''}`;
  } else {
    const months = Math.floor(seconds / 2592000);
    const remainingDays = Math.floor(seconds % 2592000 / 86400);
    const remainingHours = Math.floor(seconds % 86400 / 3600);
    const remainingMinutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return months + ` month${months !== 1 ? 's' : ''}, ` + remainingDays + ` day${remainingDays !== 1 ? 's' : ''}`;
  }
});
// CONCATENATED MODULE: ./app/.nuxt/index.js













/* Plugins */

 // Source: .\\buefy.js (mode: 'all')
 // Source: .\\http.server.js (mode: 'server')
 // Source: .\\http.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: .\\fontawesome.js (mode: 'all')
 // Source: ..\\..\\plugins\\filters.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "flashy-cards",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "User table\r | column      | type              | description                                                                        |\r |-------------|-------------------|------------------------------------------------------------------------------------|\r | user_id     | serial\u002FprimaryKey |                                                                                    |\r | username    | text              | The unique id name for each user. It is randomly generated on new account creation |\r | provider    | text              | Name of the third party login system used by a user                                |\r | provider_id | text              | Identifier of the user logging in with 3rd party sign in                           |"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@5.8.55\u002Fcss\u002Fmaterialdesignicons.min.css",
        "rel": "preload",
        "as": "style",
        "onload": "this.rel='stylesheet'"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./app/.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./app/.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if ( true && typeof /* Cannot get final name for export "default" in "./app/.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./app/.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof http === 'function') {
    await http(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./app/.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./app/.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./app/.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./app/.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };
  const s = Date.now();

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = ["ssr-cookie"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));
  if (process.env.DEBUG && asyncDatas.length) console.debug('Data fetching ' + ssrContext.url + ': ' + (Date.now() - s) + 'ms');

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "strict", function() { return /* binding */ strict; });
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./storeAPI/AdminAPI.js

external_axios_default.a.defaults.baseURL = process.env.APP_WEB_DOMAIN;
function getBinsAPI() {
  return external_axios_default()({
    method: 'get',
    url: `/api/web/bins`
  });
}
function getBinCardsAPI({
  level
}) {
  return external_axios_default()({
    method: 'get',
    url: `/api/web/bin/${Number(level) + 1}`
  });
}
function createCardAPI(payload) {
  return external_axios_default()({
    method: 'post',
    url: `/api/web/card`,
    data: payload
  });
}

// CONCATENATED MODULE: ./store/AdminStore.js

const strict = false;
const state = () => ({
  bins: [],
  binCards: []
});
const mutations = {
  LOAD_BINS(state, bins) {
    state.bins = bins;
  },
  LOAD_BIN_CARDS(state, cards) {
    state.binCards = cards;
  }
};
const getters = {};
const actions = {
  async getBins({
    commit,
    dispatch
  }) {
    const {
      data
    } = await getBinsAPI();
    commit('LOAD_BINS', data);
  },
  async getBinCards({
    commit,
    dispatch
  }, level) {
    const {
      data
    } = await getBinCardsAPI({
      level
    });
    commit('LOAD_BIN_CARDS', data);
  },
  async createNewCard({
    commit,
    dispatch
  }, payload) {
    await createCardAPI(payload);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "strict", function() { return /* binding */ strict; });
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./storeAPI/HomeAPI.js

external_axios_default.a.defaults.baseURL = process.env.APP_WEB_DOMAIN;
function drawCardAPI() {
  return external_axios_default()({
    method: 'get',
    url: `/api/web/card`
  });
}
function answerCardAPI(payload) {
  return external_axios_default()({
    method: 'post',
    url: `/api/web/card/${payload.card_id}/answer`,
    data: payload
  });
}
function loginAsTempUserAPI() {
  return external_axios_default()({
    method: 'get',
    url: `/api/web/user/temp`
  });
}
function signoutAPI() {
  return external_axios_default()({
    method: 'get',
    url: `/api/web/logout?redirect=false`
  });
}

// CONCATENATED MODULE: ./store/HomeStore.js

const strict = false;
const state = () => ({
  card: [],
  hasAlert: false
});
const mutations = {
  LOAD_DRAWN_CARD(state, drawnCard) {
    state.card = drawnCard;
  },
  HAS_ALERT(state, hasAlert) {
    state.hasAlert = hasAlert;
  }
};
const getters = {};
const actions = {
  async drawCard({
    commit,
    dispatch
  }) {
    const {
      data
    } = await drawCardAPI();
    if (data.status && data.status === "alert") {
      commit('HAS_ALERT', true);
    } else {
      commit('HAS_ALERT', false);
    }
    commit('LOAD_DRAWN_CARD', data);
  },
  async answerCard({
    commit,
    dispatch
  }, payload) {
    const {
      data
    } = await answerCardAPI(payload);
  },
  async loginAsTempUserAction({
    commit,
    dispatch
  }) {
    await loginAsTempUserAPI();
    //window.location.reload()    
  },

  async signoutAction({
    commit,
    dispatch
  }) {
    await signoutAPI();
    //window.location.reload()
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map