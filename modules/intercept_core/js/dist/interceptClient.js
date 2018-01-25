/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrays__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__arrays__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assert__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__assert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deprecate__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eq__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__eq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__objects__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strings__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__strings__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__strings__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__uuid__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__uuid__["a"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exception__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__exception__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key_map__ = __webpack_require__(43);
/* unused harmony reexport KeyMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operation__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__operation__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__operation__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query_builder__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__query_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query_term__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__query__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__query__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__record__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_7__record__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_7__record__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_7__record__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schema__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__schema__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__source__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transform__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transform_builder__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__transform_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__source_interfaces_pullable__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_12__source_interfaces_pullable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_12__source_interfaces_pullable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__source_interfaces_pushable__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_13__source_interfaces_pushable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_13__source_interfaces_pushable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__source_interfaces_queryable__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_14__source_interfaces_queryable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_14__source_interfaces_queryable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__source_interfaces_syncable__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_15__source_interfaces_syncable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_15__source_interfaces_syncable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__source_interfaces_updatable__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_16__source_interfaces_updatable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_16__source_interfaces_updatable__["b"]; });


















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_queue__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__task_queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_processor__ = __webpack_require__(14);
/* unused harmony reexport TaskProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bucket__ = __webpack_require__(41);
/* unused harmony reexport Bucket */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__evented__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__evented__["a"]; });
/* unused harmony reexport isEvented */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__evented__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__evented__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exception__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__exception__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifier__ = __webpack_require__(15);
/* unused harmony reexport Notifier */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__log__["a"]; });









/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_core__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__orbit_core__["d"]; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
//
// Source: https://github.com/jashkenas/underscore/blob/master/underscore.js#L11-L17
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2017 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var globals = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global || this || {};
var Orbit = {
    globals: globals,
    Promise: globals.Promise,
    uuid: __WEBPACK_IMPORTED_MODULE_0__orbit_utils__["o" /* uuid */]
};
/* harmony default export */ __webpack_exports__["a"] = (Orbit);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(32)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Source; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query_builder__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform_builder__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 Base class for sources.

 @class Source
 @namespace Orbit
 @param {Object} [settings] - settings for source
 @param {String} [settings.name] - Name for source
 @param {Schema} [settings.schema] - Schema for source
 @constructor
 */
var Source = function () {
    function Source() {
        var _this = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Source);

        this._schema = settings.schema;
        this._keyMap = settings.keyMap;
        var name = this._name = settings.name;
        var bucket = this._bucket = settings.bucket;
        this._queryBuilder = settings.queryBuilder;
        this._transformBuilder = settings.transformBuilder;
        if (bucket) {
            Object(__WEBPACK_IMPORTED_MODULE_4__orbit_utils__["a" /* assert */])('TransformLog requires a name if it has a bucket', !!name);
        }
        this._transformLog = new __WEBPACK_IMPORTED_MODULE_1__orbit_core__["b" /* Log */]({ name: name ? name + "-log" : undefined, bucket: bucket });
        this._requestQueue = new __WEBPACK_IMPORTED_MODULE_1__orbit_core__["c" /* TaskQueue */](this, { name: name ? name + "-requests" : undefined, bucket: bucket });
        this._syncQueue = new __WEBPACK_IMPORTED_MODULE_1__orbit_core__["c" /* TaskQueue */](this, { name: name ? name + "-sync" : undefined, bucket: bucket });
        if (this._schema && (settings.autoUpgrade === undefined || settings.autoUpgrade)) {
            this._schema.on('upgrade', function () {
                return _this.upgrade();
            });
        }
    }

    _createClass(Source, [{
        key: "perform",

        // Performer interface
        value: function perform(task) {
            var method = "__" + task.type + "__";
            return this[method].call(this, task.data);
        }
    }, {
        key: "upgrade",

        /**
         * Upgrade source as part of a schema upgrade.
         *
         * @returns {Promise<void>}
         * @memberof Source
         */
        value: function upgrade() {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
        }
        /////////////////////////////////////////////////////////////////////////////
        // Private methods
        /////////////////////////////////////////////////////////////////////////////
        /**
         Notifies listeners that this source has been transformed by emitting the
         `transform` event.
            Resolves when any promises returned to event listeners are resolved.
            Also, adds an entry to the Source's `transformLog` for each transform.
            @private
         @method _transformed
         @param {Array} transforms - Transforms that have occurred.
         @returns {Promise} Promise that resolves to transforms.
        */

    }, {
        key: "_transformed",
        value: function _transformed(transforms) {
            var _this2 = this;

            return transforms.reduce(function (chain, transform) {
                return chain.then(function () {
                    if (_this2._transformLog.contains(transform.id)) {
                        return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
                    }
                    return _this2._transformLog.append(transform.id).then(function () {
                        return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["g" /* settleInSeries */])(_this2, 'transform', transform);
                    });
                });
            }, __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve()).then(function () {
                return transforms;
            });
        }
    }, {
        key: "_enqueueRequest",
        value: function _enqueueRequest(type, data) {
            return this._requestQueue.push({ type: type, data: data });
        }
    }, {
        key: "_enqueueSync",
        value: function _enqueueSync(type, data) {
            return this._syncQueue.push({ type: type, data: data });
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }, {
        key: "schema",
        get: function get() {
            return this._schema;
        }
    }, {
        key: "keyMap",
        get: function get() {
            return this._keyMap;
        }
    }, {
        key: "bucket",
        get: function get() {
            return this._bucket;
        }
    }, {
        key: "transformLog",
        get: function get() {
            return this._transformLog;
        }
    }, {
        key: "requestQueue",
        get: function get() {
            return this._requestQueue;
        }
    }, {
        key: "syncQueue",
        get: function get() {
            return this._syncQueue;
        }
    }, {
        key: "queryBuilder",
        get: function get() {
            var qb = this._queryBuilder;
            if (qb === undefined) {
                qb = this._queryBuilder = new __WEBPACK_IMPORTED_MODULE_2__query_builder__["a" /* default */]();
            }
            return qb;
        }
    }, {
        key: "transformBuilder",
        get: function get() {
            var tb = this._transformBuilder;
            if (tb === undefined) {
                tb = this._transformBuilder = new __WEBPACK_IMPORTED_MODULE_3__transform_builder__["a" /* default */]({
                    recordInitializer: this._schema
                });
            }
            return tb;
        }
    }]);

    return Source;
}();
Source = __decorate([__WEBPACK_IMPORTED_MODULE_1__orbit_core__["e" /* evented */]], Source);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EVENTED */
/* unused harmony export isEvented */
/* harmony export (immutable) */ __webpack_exports__["a"] = evented;
/* harmony export (immutable) */ __webpack_exports__["c"] = settleInSeries;
/* harmony export (immutable) */ __webpack_exports__["b"] = fulfillInSeries;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifier__ = __webpack_require__(15);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }



var EVENTED = '__evented__';
/**
 * Has a class been decorated as `@evented`?
 *
 * @export
 * @param {object} obj
 * @returns {boolean}
 */
function isEvented(obj) {
    return !!obj[EVENTED];
}
/**
 * Marks a class as evented.
 *
 * An evented class should also implement the `Evented` interface.
 *
 * ```ts
 * import { evented, Evented } from '@orbit/core';
 *
 * @evented
 * class Source implements Evented {
 *   ...
 * }
 * ```
 *
 * Listeners can then register themselves for particular events with `on`:
 *
 * ```ts
 * let source = new Source();
 *
 * function listener1(message: string) {
 *   console.log('listener1 heard ' + message);
 * };
 * function listener2(message: string) {
 *   console.log('listener2 heard ' + message);
 * };
 *
 * source.on('greeting', listener1);
 * source.on('greeting', listener2);
 *
 * evented.emit('greeting', 'hello'); // logs "listener1 heard hello" and
 *                                    //      "listener2 heard hello"
 * ```
 *
 * Listeners can be unregistered from events at any time with `off`:
 *
 * ```ts
 * source.off('greeting', listener2);
 * ```
 *
 * @decorator
 * @export
 * @param {*} Klass
 */
function evented(Klass) {
    var proto = Klass.prototype;
    if (isEvented(proto)) {
        return;
    }
    proto[EVENTED] = true;
    proto.on = function (eventName, callback, _binding) {
        var binding = _binding || this;
        notifierForEvent(this, eventName, true).addListener(callback, binding);
    };
    proto.off = function (eventName, callback, _binding) {
        var binding = _binding || this;
        var notifier = notifierForEvent(this, eventName);
        if (notifier) {
            if (callback) {
                notifier.removeListener(callback, binding);
            } else {
                removeNotifierForEvent(this, eventName);
            }
        }
    };
    proto.one = function (eventName, callback, _binding) {
        var _callOnce = void 0;
        var notifier = void 0;
        var binding = _binding || this;
        notifier = notifierForEvent(this, eventName, true);
        _callOnce = function callOnce() {
            callback.apply(binding, arguments);
            notifier.removeListener(_callOnce, binding);
        };
        notifier.addListener(_callOnce, binding);
    };
    proto.emit = function (eventName) {
        var notifier = notifierForEvent(this, eventName);
        if (notifier) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            notifier.emit.apply(notifier, args);
        }
    };
    proto.listeners = function (eventName) {
        var notifier = notifierForEvent(this, eventName);
        return notifier ? notifier.listeners : [];
    };
}
/**
 * Settle any promises returned by event listeners in series.
 *
 * If any errors are encountered during processing, they will be ignored.
 *
 * @export
 * @param {Evented} obj
 * @param {any} eventName
 * @param {any} args
 * @returns {Promise<void>}
 */
function settleInSeries(obj, eventName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    var listeners = obj.listeners(eventName);
    return listeners.reduce(function (chain, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            callback = _ref2[0],
            binding = _ref2[1];

        return chain.then(function () {
            return callback.apply(binding, args);
        }).catch(function (e) {});
    }, __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve());
}
/**
 * Fulfill any promises returned by event listeners in series.
 *
 * Processing will stop if an error is encountered and the returned promise will
 * be rejected.
 *
 * @export
 * @param {Evented} obj
 * @param {any} eventName
 * @param {any} args
 * @returns {Promise<void>}
 */
function fulfillInSeries(obj, eventName) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
    }

    var listeners = obj.listeners(eventName);
    return new __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise(function (resolve, reject) {
        fulfillEach(listeners, args, resolve, reject);
    });
}
function notifierForEvent(object, eventName) {
    var createIfUndefined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (object._eventedNotifiers === undefined) {
        object._eventedNotifiers = {};
    }
    var notifier = object._eventedNotifiers[eventName];
    if (!notifier && createIfUndefined) {
        notifier = object._eventedNotifiers[eventName] = new __WEBPACK_IMPORTED_MODULE_1__notifier__["a" /* default */]();
    }
    return notifier;
}
function removeNotifierForEvent(object, eventName) {
    if (object._eventedNotifiers && object._eventedNotifiers[eventName]) {
        delete object._eventedNotifiers[eventName];
    }
}
function fulfillEach(listeners, args, resolve, reject) {
    if (listeners.length === 0) {
        resolve();
    } else {
        var listener = void 0;
        var _listeners = listeners;

        var _listeners2 = _toArray(_listeners);

        listener = _listeners2[0];
        listeners = _listeners2.slice(1);

        var _listener = listener,
            _listener2 = _slicedToArray(_listener, 2),
            callback = _listener2[0],
            binding = _listener2[1];

        var response = callback.apply(binding, args);
        if (response) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve(response).then(function () {
                return fulfillEach(listeners, args, resolve, reject);
            }).catch(function (error) {
                return reject(error);
            });
        } else {
            fulfillEach(listeners, args, resolve, reject);
        }
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationProcessor; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Operation processors are used to identify operations that should be performed
 * together to ensure that a `Cache` or other container of data remains
 * consistent and correct.
 *
 * `OperationProcessor` is an abstract base class to be extended by specific
 * operation processors.
 *
 * @export
 * @abstract
 * @class OperationProcessor
 */
var OperationProcessor = function () {
  _createClass(OperationProcessor, [{
    key: "cache",

    /**
     * The `Cache` that is monitored.
     *
     * @readonly
     * @memberof OperationProcessor
     */
    get: function get() {
      return this._cache;
    }
    /**
     * Creates an instance of OperationProcessor.
     *
     * @param {Cache} cache
     * @memberof OperationProcessor
     */

  }]);

  function OperationProcessor(cache) {
    _classCallCheck(this, OperationProcessor);

    this._cache = cache;
  }
  /**
   * Called when all the data in a cache has been reset.
   *
   * If `base` is included, the cache is being reset to match a base cache.
   *
   * @param {Cache} [base]
   * @memberof OperationProcessor
   */


  _createClass(OperationProcessor, [{
    key: "reset",
    value: function reset(base) {}
    /**
     * Allow the processor to perform an upgrade as part of a cache upgrade.
     *
     * @memberof OperationProcessor
     */

  }, {
    key: "upgrade",
    value: function upgrade() {}
    /**
     * Validates an operation before processing it.
     *
     * @param {RecordOperation} operation
     * @memberof OperationProcessor
     */

  }, {
    key: "validate",
    value: function validate(operation) {}
    /**
     * Called before an `operation` has been applied.
     *
     * Returns an array of operations to be applied **BEFORE** the `operation`
     * itself is applied.
     *
     * @param {RecordOperation} operation
     * @returns {RecordOperation[]}
     * @memberof OperationProcessor
     */

  }, {
    key: "before",
    value: function before(operation) {
      return [];
    }
    /**
     * Called before an `operation` has been applied.
     *
     * Returns an array of operations to be applied **AFTER** the `operation`
     * has been applied successfully.
     *
     * @param {RecordOperation} operation
     * @returns {RecordOperation[]}
     * @memberof OperationProcessor
     */

  }, {
    key: "after",
    value: function after(operation) {
      return [];
    }
    /**
     * Called immediately after an `operation` has been applied and before the
     * `patch` event has been emitted (i.e. before any listeners have been
     * notified that the operation was applied).
     *
     * No operations may be returned.
     *
     * @param {RecordOperation} operation
     * @memberof OperationProcessor
     */

  }, {
    key: "immediate",
    value: function immediate(operation) {}
    /**
     * Called after an `operation` _and_ any related operations have been applied.
     *
     * Returns an array of operations to be applied **AFTER** the `operation`
     * itself and any operations returned from the `after` hook have been applied.
     *
     * @param {RecordOperation} operation
     * @returns {RecordOperation[]}
     * @memberof OperationProcessor
     */

  }, {
    key: "finally",
    value: function _finally(operation) {
      return [];
    }
  }]);

  return OperationProcessor;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Strategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Strategy = function () {
    function Strategy() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Strategy);

        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Strategy requires a name', !!options.name);
        this._name = options.name;
        this._sourceNames = options.sources;
        this._logPrefix = options.logPrefix || '[' + this._name + ']';
        this._logLevel = this._customLogLevel = options.logLevel;
    }

    _createClass(Strategy, [{
        key: 'activate',
        value: function activate(coordinator) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._coordinator = coordinator;
            if (this._customLogLevel === undefined) {
                this._logLevel = options.logLevel;
            }
            if (this._sourceNames) {
                this._sources = this._sourceNames.map(function (name) {
                    return coordinator.getSource(name);
                });
            } else {
                this._sources = coordinator.sources;
            }
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this._coordinator = null;
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'coordinator',
        get: function get() {
            return this._coordinator;
        }
    }, {
        key: 'sources',
        get: function get() {
            return this._sources;
        }
    }, {
        key: 'logPrefix',
        get: function get() {
            return this._logPrefix;
        }
    }, {
        key: 'logLevel',
        get: function get() {
            return this._logLevel;
        }
    }]);

    return Strategy;
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QueryTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindRecordTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FindRelatedRecordTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FindRelatedRecordsTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FindRecordsTerm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Query terms are used by query builders to allow for the construction of
 * query expressions in composable patterns.
 *
 * @export
 * @class QueryTerm
 */
var QueryTerm = function () {
    function QueryTerm(expression) {
        _classCallCheck(this, QueryTerm);

        this.expression = expression;
    }

    _createClass(QueryTerm, [{
        key: 'toQueryExpression',
        value: function toQueryExpression() {
            return this.expression;
        }
    }]);

    return QueryTerm;
}();
/**
 * A query term representing a single record.
 *
 * @export
 * @class FindRecordTerm
 * @extends {QueryTerm}
 */
var FindRecordTerm = function (_QueryTerm) {
    _inherits(FindRecordTerm, _QueryTerm);

    function FindRecordTerm(record) {
        _classCallCheck(this, FindRecordTerm);

        var expression = {
            op: 'findRecord',
            record: record
        };
        return _possibleConstructorReturn(this, (FindRecordTerm.__proto__ || Object.getPrototypeOf(FindRecordTerm)).call(this, expression));
    }

    return FindRecordTerm;
}(QueryTerm);
var FindRelatedRecordTerm = function (_QueryTerm2) {
    _inherits(FindRelatedRecordTerm, _QueryTerm2);

    function FindRelatedRecordTerm(record, relationship) {
        _classCallCheck(this, FindRelatedRecordTerm);

        var expression = {
            op: 'findRelatedRecord',
            record: record,
            relationship: relationship
        };
        return _possibleConstructorReturn(this, (FindRelatedRecordTerm.__proto__ || Object.getPrototypeOf(FindRelatedRecordTerm)).call(this, expression));
    }

    return FindRelatedRecordTerm;
}(QueryTerm);
var FindRelatedRecordsTerm = function (_QueryTerm3) {
    _inherits(FindRelatedRecordsTerm, _QueryTerm3);

    function FindRelatedRecordsTerm(record, relationship) {
        _classCallCheck(this, FindRelatedRecordsTerm);

        var expression = {
            op: 'findRelatedRecords',
            record: record,
            relationship: relationship
        };
        return _possibleConstructorReturn(this, (FindRelatedRecordsTerm.__proto__ || Object.getPrototypeOf(FindRelatedRecordsTerm)).call(this, expression));
    }

    return FindRelatedRecordsTerm;
}(QueryTerm);
var FindRecordsTerm = function (_QueryTerm4) {
    _inherits(FindRecordsTerm, _QueryTerm4);

    function FindRecordsTerm(type) {
        _classCallCheck(this, FindRecordsTerm);

        var expression = {
            op: 'findRecords',
            type: type
        };
        return _possibleConstructorReturn(this, (FindRecordsTerm.__proto__ || Object.getPrototypeOf(FindRecordsTerm)).call(this, expression));
    }
    /**
     * Applies sorting to a collection query.
     *
     * Sort specifiers can be expressed in object form, like:
     *
     * ```ts
     * { attribute: 'name', order: 'descending' }
     * { attribute: 'name', order: 'ascending' }
     * ```
     *
     * Or in string form, like:
     *
     * ```ts
     * '-name' // descending order
     * 'name'  // ascending order
     * ```
     *
     * @param {SortSpecifier[] | string[]} sortSpecifiers
     * @returns {RecordsTerm}
     *
     * @memberOf RecordsTerm
     */


    _createClass(FindRecordsTerm, [{
        key: 'sort',
        value: function sort() {
            for (var _len = arguments.length, sortSpecifiers = Array(_len), _key = 0; _key < _len; _key++) {
                sortSpecifiers[_key] = arguments[_key];
            }

            var specifiers = sortSpecifiers.map(parseSortSpecifier);
            this.expression.sort = (this.expression.sort || []).concat(specifiers);
            return this;
        }
        /**
         * Applies pagination to a collection query.
         *
         * Note: Options are currently an opaque pass-through to remote sources.
         *
         * @param {object} options
         * @returns {RecordsTerm}
         *
         * @memberOf RecordsTerm
         */

    }, {
        key: 'page',
        value: function page(options) {
            this.expression.page = options;
            return this;
        }
        /**
         * Apply an advanced filter expression based on a `RecordCursor`.
         *
         * For example:
         *
         * ```ts
         * oqb
         *   .records('planet')
         *   .filter(record =>
         *     oqb.or(
         *       record.attribute('name').equal('Jupiter'),
         *       record.attribute('name').equal('Pluto')
         *     )
         *   )
         * ```
         *
         * @param {(RecordCursor) => void} predicateExpression
         * @returns {RecordsTerm}
         *
         * @memberOf RecordsTerm
         */

    }, {
        key: 'filter',
        value: function filter() {
            for (var _len2 = arguments.length, filterSpecifiers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                filterSpecifiers[_key2] = arguments[_key2];
            }

            var expressions = filterSpecifiers.map(parseFilterSpecifier);
            this.expression.filter = (this.expression.filter || []).concat(filterSpecifiers);
            return this;
        }
    }]);

    return FindRecordsTerm;
}(QueryTerm);
function parseFilterSpecifier(filterSpecifier) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["k" /* isObject */])(filterSpecifier)) {
        var s = filterSpecifier;
        s.kind = s.kind || 'attribute';
        s.op = s.op || 'equal';
        return s;
    }
}
function parseSortSpecifier(sortSpecifier) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["k" /* isObject */])(sortSpecifier)) {
        var s = sortSpecifier;
        s.kind = s.kind || 'attribute';
        s.order = s.order || 'ascending';
        return s;
    } else if (typeof sortSpecifier === 'string') {
        return parseSortSpecifierString(sortSpecifier);
    }
    throw new Error('Sort expression must be either an object or a string.');
}
function parseSortSpecifierString(sortSpecifier) {
    var attribute = void 0;
    var order = void 0;
    if (sortSpecifier[0] === '-') {
        attribute = sortSpecifier.slice(1);
        order = 'descending';
    } else {
        attribute = sortSpecifier;
        order = 'ascending';
    }
    return {
        kind: 'attribute',
        attribute: attribute,
        order: order
    };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_term__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_utils__ = __webpack_require__(0);



/**
 * A builder function for creating a Query from its constituent parts.
 *
 * If a `Query` is passed in with an `id` and `expression`, and no replacement
 * `id` or `options` are also passed in, then the `Query` will be returned
 * unchanged.
 *
 * For all other cases, a new `Query` object will be created and returned.
 *
 * Queries will be assigned the specified `queryId` as `id`. If none is
 * specified, a UUID will be generated.
 *
 * @export
 * @param {QueryOrExpression} queryOrExpression
 * @param {object} [queryOptions]
 * @param {string} [queryId]
 * @param {QueryBuilder} [queryBuilder]
 * @returns {Query}
 */
function buildQuery(queryOrExpression, queryOptions, queryId, queryBuilder) {
    if (typeof queryOrExpression === 'function') {
        return buildQuery(queryOrExpression(queryBuilder), queryOptions, queryId);
    } else {
        var query = queryOrExpression;
        var expression = void 0;
        var options = void 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_utils__["k" /* isObject */])(query) && query.expression) {
            if (query.id && !queryOptions && !queryId) {
                return query;
            }
            expression = query.expression;
            options = queryOptions || query.options;
        } else {
            if (queryOrExpression instanceof __WEBPACK_IMPORTED_MODULE_1__query_term__["e" /* QueryTerm */]) {
                expression = queryOrExpression.toQueryExpression();
            } else {
                expression = queryOrExpression;
            }
            options = queryOptions;
        }
        var id = queryId || __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].uuid();
        return { expression: expression, options: options, id: id };
    }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildTransform;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* eslint-disable valid-jsdoc */


/**
 * A builder function for creating a Transform from its constituent parts.
 *
 * If a `Transform` is passed in with an `id` and `operations`, and no
 * replacement `id` or `options` are also passed in, then the `Transform`
 * will be returned unchanged.
 *
 * For all other cases, a new `Transform` object will be created and returned.
 *
 * Transforms will be assigned the specified `transformId` as `id`. If none
 * is specified, a UUID will be generated.
 *
 * @export
 * @param {TransformOrOperations} transformOrOperations
 * @param {object} [transformOptions]
 * @param {string} [transformId] Unique id for this transform (otherwise a UUID will be assigned)
 * @param {TransformBuilder} [transformBuilder]
 * @returns {Transform}
 */
function buildTransform(transformOrOperations, transformOptions, transformId, transformBuilder) {
    if (typeof transformOrOperations === 'function') {
        return buildTransform(transformOrOperations(transformBuilder), transformOptions, transformId);
    } else {
        var transform = transformOrOperations;
        var operations = void 0;
        var options = void 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["k" /* isObject */])(transform) && transform.operations) {
            if (transform.id && !transformOptions && !transformId) {
                return transform;
            }
            operations = transform.operations;
            options = transformOptions || transform.options;
        } else {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["i" /* isArray */])(transformOrOperations)) {
                operations = transformOrOperations;
            } else {
                operations = [transformOrOperations];
            }
            options = transformOptions;
        }
        var id = transformId || __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].uuid();
        return { operations: operations, options: options, id: id };
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__immutable_map__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__immutable_map__["a"]; });


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__strategy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ConnectionStrategy = function (_Strategy) {
    _inherits(ConnectionStrategy, _Strategy);

    function ConnectionStrategy(options) {
        _classCallCheck(this, ConnectionStrategy);

        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A `source` must be specified for a ConnectionStrategy', !!options.source);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`source` should be a Source name specified as a string', typeof options.source === 'string');
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`on` should be specified as the name of the event a ConnectionStrategy listens for', typeof options.on === 'string');
        options.sources = [options.source];
        var defaultName = options.source + ':' + options.on;
        delete options.source;
        if (options.target) {
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`target` should be a Source name specified as a string', typeof options.target === 'string');
            options.sources.push(options.target);
            defaultName += ' -> ' + options.target;
            if (typeof options.action === 'string') {
                defaultName += ':' + options.action;
            }
            delete options.target;
        }
        options.name = options.name || defaultName;

        var _this = _possibleConstructorReturn(this, (ConnectionStrategy.__proto__ || Object.getPrototypeOf(ConnectionStrategy)).call(this, options));

        _this._event = options.on;
        _this._action = options.action;
        _this._catch = options.catch;
        _this._filter = options.filter;
        _this._blocking = !!options.blocking;
        return _this;
    }

    _createClass(ConnectionStrategy, [{
        key: 'activate',
        value: function activate(coordinator) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _get(ConnectionStrategy.prototype.__proto__ || Object.getPrototypeOf(ConnectionStrategy.prototype), 'activate', this).call(this, coordinator, options).then(function () {
                _this2._listener = _this2._generateListener();
                _this2.source.on(_this2._event, _this2._listener, _this2);
            });
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var _this3 = this;

            return _get(ConnectionStrategy.prototype.__proto__ || Object.getPrototypeOf(ConnectionStrategy.prototype), 'deactivate', this).call(this).then(function () {
                _this3.source.off(_this3._event, _this3._listener, _this3);
                _this3._listener = null;
            });
        }
    }, {
        key: '_generateListener',
        value: function _generateListener() {
            var _this4 = this;

            var target = this.target;
            return function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var result = void 0;
                if (_this4._filter) {
                    if (!_this4._filter.apply(_this4, args)) {
                        return;
                    }
                }
                if (typeof _this4._action === 'string') {
                    var _target;

                    result = (_target = _this4.target)[_this4._action].apply(_target, args);
                } else {
                    result = _this4._action.apply(_this4, args);
                }
                if (_this4._catch && result && result.catch) {
                    result = result.catch(function (e) {
                        args.unshift(e);
                        return _this4._catch.apply(_this4, args);
                    });
                }
                if (_this4._blocking) {
                    return result;
                }
            };
        }
    }, {
        key: 'source',
        get: function get() {
            return this._sources[0];
        }
    }, {
        key: 'target',
        get: function get() {
            return this._sources[1];
        }
    }, {
        key: 'blocking',
        get: function get() {
            return this._blocking;
        }
    }]);

    return ConnectionStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__strategy__["a" /* Strategy */]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * A `TaskProcessor` performs a `Task` by calling `perform()` on its target.
 * This is triggered by calling `process()` on the processor.
 *
 * A processor maintains a promise that represents the eventual state (resolved
 * or rejected) of the task. This promise is created upon construction, and
 * will be returned by calling `settle()`.
 *
 * A task can be re-tried by first calling `reset()` on the processor. This
 * will clear the processor's state and allow `process()` to be invoked again.
 *
 * @export
 * @class TaskProcessor
 */

var TaskProcessor = function () {
    /**
     * Creates an instance of TaskProcessor.
     *
     * @param {Taskable} target Target that performs tasks
     * @param {Task} task Task to be performed
     *
     * @memberOf TaskProcessor
     */
    function TaskProcessor(target, task) {
        _classCallCheck(this, TaskProcessor);

        this.target = target;
        this.task = task;
        this.reset();
    }
    /**
     * Clears the processor state, allowing for a fresh call to `process()`.
     *
     * @memberOf TaskProcessor
     */


    _createClass(TaskProcessor, [{
        key: 'reset',
        value: function reset() {
            var _this = this;

            this._started = false;
            this._settled = false;
            this._settlement = new __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise(function (resolve, reject) {
                _this._success = function (r) {
                    _this._settled = true;
                    resolve(r);
                };
                _this._fail = function (e) {
                    _this._settled = true;
                    reject(e);
                };
            });
        }
        /**
         * Has `process` been invoked?
         *
         * @readonly
         * @type {boolean}
         * @memberOf TaskProcessor
         */

    }, {
        key: 'settle',

        /**
         * The eventual result of processing.
         *
         * @returns {Promise<any>}
         *
         * @memberOf TaskProcessor
         */
        value: function settle() {
            return this._settlement;
        }
        /**
         * Invokes `perform` on the target.
         *
         * @returns {Promise<any>} The result of processing
         *
         * @memberOf TaskProcessor
         */

    }, {
        key: 'process',
        value: function process() {
            if (!this._started) {
                this._started = true;
                this.target.perform(this.task).then(this._success, this._fail);
            }
            return this.settle();
        }
    }, {
        key: 'started',
        get: function get() {
            return this._started;
        }
        /**
         * Has `process` been invoked and settled?
         *
         * @readonly
         * @type {boolean}
         * @memberOf TaskProcessor
         */

    }, {
        key: 'settled',
        get: function get() {
            return this._settled;
        }
    }]);

    return TaskProcessor;
}();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifier; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  The `Notifier` class can emit messages to an array of subscribed listeners.
 * Here's a simple example:
 *
 * ```ts
 * import { Notifier } from '@orbit/core';
 *
 * let notifier = new Notifier();
 * notifier.addListener((message: string) => {
 *   console.log("I heard " + message);
 * });
 * notifier.addListener((message: string) => {
 *   console.log("I also heard " + message);
 * });
 *
 * notifier.emit('hello'); // logs "I heard hello" and "I also heard hello"
 * ```
 *
 * Calls to `emit` will send along all of their arguments.
 *
 * @export
 * @class Notifier
 */
var Notifier = function () {
    function Notifier() {
        _classCallCheck(this, Notifier);

        this.listeners = [];
    }
    /**
     * Add a callback as a listener, which will be triggered when sending
     * notifications.
     *
     * @param {Function} callback Function to call as a notification
     * @param {object} binding Context in which to call `callback`
     *
     * @memberOf Notifier
     */


    _createClass(Notifier, [{
        key: "addListener",
        value: function addListener(callback, binding) {
            binding = binding || this;
            this.listeners.push([callback, binding]);
        }
        /**
         * Remove a listener so that it will no longer receive notifications.
         *
         * @param {Function} callback Function registered as a callback
         * @param {object} binding Context in which `callback` was registered
         * @returns
         *
         * @memberOf Notifier
         */

    }, {
        key: "removeListener",
        value: function removeListener(callback, binding) {
            var listeners = this.listeners;
            var listener = void 0;
            binding = binding || this;
            for (var i = 0, len = listeners.length; i < len; i++) {
                listener = listeners[i];
                if (listener && listener[0] === callback && listener[1] === binding) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        }
        /**
         * Notify registered listeners.
         *
         * @param {any} args Params to be sent to listeners
         *
         * @memberOf Notifier
         */

    }, {
        key: "emit",
        value: function emit() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.listeners.slice(0).forEach(function (listener) {
                listener[0].apply(listener[1], args);
            });
        }
    }]);

    return Notifier;
}();



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotLoggedException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OutOfRangeException; });
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base exception class.
 *
 * @export
 * @class Exception
 */
var Exception =
/**
 * Creates an instance of Exception.
 *
 * @param {string} message
 *
 * @memberOf Exception
 */
function Exception(message) {
    _classCallCheck(this, Exception);

    this.message = message;
    this.error = new Error(this.message);
    this.stack = this.error.stack;
};
/**
 * Exception raised when an item does not exist in a log.
 *
 * @export
 * @class NotLoggedException
 * @extends {Exception}
 */
var NotLoggedException = function (_Exception) {
    _inherits(NotLoggedException, _Exception);

    function NotLoggedException(id) {
        _classCallCheck(this, NotLoggedException);

        var _this = _possibleConstructorReturn(this, (NotLoggedException.__proto__ || Object.getPrototypeOf(NotLoggedException)).call(this, "Action not logged: " + id));

        _this.id = id;
        return _this;
    }

    return NotLoggedException;
}(Exception);
/**
 * Exception raised when a value is outside an allowed range.
 *
 * @export
 * @class OutOfRangeException
 * @extends {Exception}
 */
var OutOfRangeException = function (_Exception2) {
    _inherits(OutOfRangeException, _Exception2);

    function OutOfRangeException(value) {
        _classCallCheck(this, OutOfRangeException);

        var _this2 = _possibleConstructorReturn(this, (OutOfRangeException.__proto__ || Object.getPrototypeOf(OutOfRangeException)).call(this, "Out of range: " + value));

        _this2.value = value;
        return _this2;
    }

    return OutOfRangeException;
}(Exception);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ServerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QueryExpressionParseError; });
/* unused harmony export QueryNotAllowed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TransformNotAllowed; });
/* unused harmony export SchemaError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModelNotFound; });
/* unused harmony export RecordException */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RecordNotFoundException; });
/* unused harmony export RelationshipNotFoundException */
/* unused harmony export RecordAlreadyExistsException */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_core__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/**
 * An client-side error occurred while communicating with a remote server.
 *
 * @export
 * @class ClientError
 * @extends {Exception}
 */
var ClientError = function (_Exception) {
    _inherits(ClientError, _Exception);

    function ClientError(description) {
        _classCallCheck(this, ClientError);

        var _this = _possibleConstructorReturn(this, (ClientError.__proto__ || Object.getPrototypeOf(ClientError)).call(this, 'Client error: ' + description));

        _this.description = description;
        return _this;
    }

    return ClientError;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A server-side error occurred while communicating with a remote server.
 *
 * @export
 * @class ServerError
 * @extends {Exception}
 */
var ServerError = function (_Exception2) {
    _inherits(ServerError, _Exception2);

    function ServerError(description) {
        _classCallCheck(this, ServerError);

        var _this2 = _possibleConstructorReturn(this, (ServerError.__proto__ || Object.getPrototypeOf(ServerError)).call(this, 'Server error: ' + description));

        _this2.description = description;
        return _this2;
    }

    return ServerError;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A networking error occurred while attempting to communicate with a remote
 * server.
 *
 * @export
 * @class NetworkError
 * @extends {Exception}
 */
var NetworkError = function (_Exception3) {
    _inherits(NetworkError, _Exception3);

    function NetworkError(description) {
        _classCallCheck(this, NetworkError);

        var _this3 = _possibleConstructorReturn(this, (NetworkError.__proto__ || Object.getPrototypeOf(NetworkError)).call(this, 'Network error: ' + description));

        _this3.description = description;
        return _this3;
    }

    return NetworkError;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A query expression could not be parsed.
 *
 * @export
 * @class QueryExpressionParseError
 * @extends {Exception}
 */
var QueryExpressionParseError = function (_Exception4) {
    _inherits(QueryExpressionParseError, _Exception4);

    function QueryExpressionParseError(description, expression) {
        _classCallCheck(this, QueryExpressionParseError);

        var _this4 = _possibleConstructorReturn(this, (QueryExpressionParseError.__proto__ || Object.getPrototypeOf(QueryExpressionParseError)).call(this, 'Query expression parse error: ' + description));

        _this4.description = description;
        _this4.expression = expression;
        return _this4;
    }

    return QueryExpressionParseError;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A query is invalid for a particular source.
 *
 * @export
 * @class QueryNotAllowed
 * @extends {Exception}
 */
var QueryNotAllowed = function (_Exception5) {
    _inherits(QueryNotAllowed, _Exception5);

    function QueryNotAllowed(description, query) {
        _classCallCheck(this, QueryNotAllowed);

        var _this5 = _possibleConstructorReturn(this, (QueryNotAllowed.__proto__ || Object.getPrototypeOf(QueryNotAllowed)).call(this, 'Query not allowed: ' + description));

        _this5.description = description;
        _this5.query = query;
        return _this5;
    }

    return QueryNotAllowed;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A transform is invalid for a particular source.
 *
 * @export
 * @class TransformNotAllowed
 * @extends {Exception}
 */
var TransformNotAllowed = function (_Exception6) {
    _inherits(TransformNotAllowed, _Exception6);

    function TransformNotAllowed(description, transform) {
        _classCallCheck(this, TransformNotAllowed);

        var _this6 = _possibleConstructorReturn(this, (TransformNotAllowed.__proto__ || Object.getPrototypeOf(TransformNotAllowed)).call(this, 'Transform not allowed: ' + description));

        _this6.description = description;
        _this6.transform = transform;
        return _this6;
    }

    return TransformNotAllowed;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * An error occured related to the schema.
 *
 * @export
 * @class SchemaError
 */
var SchemaError = function (_Exception7) {
    _inherits(SchemaError, _Exception7);

    function SchemaError(description) {
        _classCallCheck(this, SchemaError);

        var _this7 = _possibleConstructorReturn(this, (SchemaError.__proto__ || Object.getPrototypeOf(SchemaError)).call(this, 'Schema error: ' + description));

        _this7.description = description;
        return _this7;
    }

    return SchemaError;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A model could not be found in the schema.
 *
 * @export
 * @class ModelNotFound
 */
var ModelNotFound = function (_SchemaError) {
    _inherits(ModelNotFound, _SchemaError);

    function ModelNotFound(type) {
        _classCallCheck(this, ModelNotFound);

        return _possibleConstructorReturn(this, (ModelNotFound.__proto__ || Object.getPrototypeOf(ModelNotFound)).call(this, 'Model definition for ' + type + ' not found'));
    }

    return ModelNotFound;
}(SchemaError);
/**
 * An error occurred related to a particular record.
 *
 * @export
 * @abstract
 * @class RecordException
 * @extends {Exception}
 */
var RecordException = function (_Exception8) {
    _inherits(RecordException, _Exception8);

    function RecordException(description, type, id, relationship) {
        _classCallCheck(this, RecordException);

        var message = description + ': ' + type + ':' + id;
        if (relationship) {
            message += '/' + relationship;
        }

        var _this9 = _possibleConstructorReturn(this, (RecordException.__proto__ || Object.getPrototypeOf(RecordException)).call(this, message));

        _this9.description = description;
        _this9.type = type;
        _this9.id = id;
        _this9.relationship = relationship;
        return _this9;
    }

    return RecordException;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);
/**
 * A record could not be found.
 *
 * @export
 * @class RecordNotFoundException
 * @extends {RecordException}
 */
var RecordNotFoundException = function (_RecordException) {
    _inherits(RecordNotFoundException, _RecordException);

    function RecordNotFoundException(type, id) {
        _classCallCheck(this, RecordNotFoundException);

        return _possibleConstructorReturn(this, (RecordNotFoundException.__proto__ || Object.getPrototypeOf(RecordNotFoundException)).call(this, 'Record not found', type, id));
    }

    return RecordNotFoundException;
}(RecordException);
/**
 * A relationship could not be found.
 *
 * @export
 * @class RelationshipNotFoundException
 * @extends {RecordException}
 */
var RelationshipNotFoundException = function (_RecordException2) {
    _inherits(RelationshipNotFoundException, _RecordException2);

    function RelationshipNotFoundException(type, id, relationship) {
        _classCallCheck(this, RelationshipNotFoundException);

        return _possibleConstructorReturn(this, (RelationshipNotFoundException.__proto__ || Object.getPrototypeOf(RelationshipNotFoundException)).call(this, 'Relationship not found', type, id, relationship));
    }

    return RelationshipNotFoundException;
}(RecordException);
/**
 * The record already exists.
 *
 * @export
 * @class RecordAlreadyExistsException
 * @extends {RecordException}
 */
var RecordAlreadyExistsException = function (_RecordException3) {
    _inherits(RecordAlreadyExistsException, _RecordException3);

    function RecordAlreadyExistsException(type, id) {
        _classCallCheck(this, RecordAlreadyExistsException);

        return _possibleConstructorReturn(this, (RecordAlreadyExistsException.__proto__ || Object.getPrototypeOf(RecordAlreadyExistsException)).call(this, 'Record already exists', type, id));
    }

    return RecordAlreadyExistsException;
}(RecordException);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneRecordIdentity;
/* harmony export (immutable) */ __webpack_exports__["b"] = equalRecordIdentities;
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeRecords;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);

function cloneRecordIdentity(identity) {
    var type = identity.type,
        id = identity.id;

    return { type: type, id: id };
}
function equalRecordIdentities(record1, record2) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(record1) && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(record2) || Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["k" /* isObject */])(record1) && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["k" /* isObject */])(record2) && record1.type === record2.type && record1.id === record2.id;
}
function mergeRecords(current, updates) {
    if (current) {
        var record = cloneRecordIdentity(current);
        ['attributes', 'keys', 'relationships'].forEach(function (grouping) {
            if (current[grouping] && updates[grouping]) {
                record[grouping] = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["l" /* merge */])({}, current[grouping], updates[grouping]);
            } else if (current[grouping]) {
                record[grouping] = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["l" /* merge */])({}, current[grouping]);
            } else if (updates[grouping]) {
                record[grouping] = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["l" /* merge */])({}, updates[grouping]);
            }
        });
        return record;
    } else {
        return updates;
    }
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_term__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var QueryBuilder = function () {
    function QueryBuilder() {
        _classCallCheck(this, QueryBuilder);
    }

    _createClass(QueryBuilder, [{
        key: 'findRecord',

        /**
         * Find a record by its identity.
         *
         * @param {RecordIdentity} recordIdentity
         * @returns {FindRecordTerm}
         */
        value: function findRecord(record) {
            return new __WEBPACK_IMPORTED_MODULE_0__query_term__["a" /* FindRecordTerm */](record);
        }
        /**
         * Find all records of a specific type.
         *
         * If `type` is unspecified, find all records unfiltered by type.
         *
         * @param {string} [type]
         * @returns {FindRecordsTerm}
         */

    }, {
        key: 'findRecords',
        value: function findRecords(type) {
            return new __WEBPACK_IMPORTED_MODULE_0__query_term__["b" /* FindRecordsTerm */](type);
        }
        /**
         * Find a record in a to-one relationship.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @returns {FindRelatedRecordTerm}
         */

    }, {
        key: 'findRelatedRecord',
        value: function findRelatedRecord(record, relationship) {
            return new __WEBPACK_IMPORTED_MODULE_0__query_term__["c" /* FindRelatedRecordTerm */](record, relationship);
        }
        /**
         * Find records in a to-many relationship.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @returns {FindRelatedRecordsTerm}
         */

    }, {
        key: 'findRelatedRecords',
        value: function findRelatedRecords(record, relationship) {
            return new __WEBPACK_IMPORTED_MODULE_0__query_term__["d" /* FindRelatedRecordsTerm */](record, relationship);
        }
    }]);

    return QueryBuilder;
}();



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformBuilder; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransformBuilder = function () {
    function TransformBuilder() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TransformBuilder);

        this._recordInitializer = settings.recordInitializer;
    }

    _createClass(TransformBuilder, [{
        key: 'addRecord',

        /**
         * Instantiate a new `addRecord` operation.
         *
         * @param {Record} record
         * @returns {AddRecordOperation}
         */
        value: function addRecord(record) {
            if (this._recordInitializer) {
                this._recordInitializer.initializeRecord(record);
            }
            return { op: 'addRecord', record: record };
        }
        /**
         * Instantiate a new `replaceRecord` operation.
         *
         * @param {Record} record
         * @returns {ReplaceRecordOperation}
         */

    }, {
        key: 'replaceRecord',
        value: function replaceRecord(record) {
            return { op: 'replaceRecord', record: record };
        }
        /**
         * Instantiate a new `removeRecord` operation.
         *
         * @param {RecordIdentity} record
         * @returns {RemoveRecordOperation}
         */

    }, {
        key: 'removeRecord',
        value: function removeRecord(record) {
            return { op: 'removeRecord', record: record };
        }
        /**
         * Instantiate a new `replaceKey` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} key
         * @param {string} value
         * @returns {ReplaceKeyOperation}
         */

    }, {
        key: 'replaceKey',
        value: function replaceKey(record, key, value) {
            return { op: 'replaceKey', record: record, key: key, value: value };
        }
        /**
         * Instantiate a new `replaceAttribute` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} attribute
         * @param {*} value
         * @returns {ReplaceAttributeOperation}
         */

    }, {
        key: 'replaceAttribute',
        value: function replaceAttribute(record, attribute, value) {
            return { op: 'replaceAttribute', record: record, attribute: attribute, value: value };
        }
        /**
         * Instantiate a new `addToRelatedRecords` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @param {RecordIdentity} relatedRecord
         * @returns {AddToRelatedRecordsOperation}
         */

    }, {
        key: 'addToRelatedRecords',
        value: function addToRelatedRecords(record, relationship, relatedRecord) {
            return { op: 'addToRelatedRecords', record: record, relationship: relationship, relatedRecord: relatedRecord };
        }
        /**
         * Instantiate a new `removeFromRelatedRecords` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @param {RecordIdentity} relatedRecord
         * @returns {RemoveFromRelatedRecordsOperation}
         */

    }, {
        key: 'removeFromRelatedRecords',
        value: function removeFromRelatedRecords(record, relationship, relatedRecord) {
            return { op: 'removeFromRelatedRecords', record: record, relationship: relationship, relatedRecord: relatedRecord };
        }
        /**
         * Instantiate a new `replaceRelatedRecords` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @param {RecordIdentity[]} relatedRecords
         * @returns {ReplaceRelatedRecordsOperation}
         */

    }, {
        key: 'replaceRelatedRecords',
        value: function replaceRelatedRecords(record, relationship, relatedRecords) {
            return { op: 'replaceRelatedRecords', record: record, relationship: relationship, relatedRecords: relatedRecords };
        }
        /**
         * Instantiate a new `replaceRelatedRecord` operation.
         *
         * @param {RecordIdentity} record
         * @param {string} relationship
         * @param {RecordIdentity} relatedRecord
         * @returns {ReplaceRelatedRecordOperation}
         */

    }, {
        key: 'replaceRelatedRecord',
        value: function replaceRelatedRecord(record, relationship, relatedRecord) {
            return { op: 'replaceRelatedRecord', record: record, relationship: relationship, relatedRecord: relatedRecord };
        }
    }, {
        key: 'recordInitializer',
        get: function get() {
            return this._recordInitializer;
        }
    }]);

    return TransformBuilder;
}();



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_operation_processors_cache_integrity_processor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_operation_processors_schema_consistency_processor__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cache_operation_processors_schema_validation_processor__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cache_query_operators__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cache_patch_transforms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cache_inverse_transforms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orbit_immutable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cache_relationship_accessor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cache_inverse_relationship_accessor__ = __webpack_require__(59);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable valid-jsdoc */












/**
 * A `Cache` is an in-memory data store that can be accessed synchronously.
 *
 * Caches use operation processors to maintain internal consistency.
 *
 * Because data is stored in immutable maps, caches can be forked efficiently.
 *
 * @export
 * @class Cache
 * @implements {Evented}
 */
var Cache = function () {
    function Cache() {
        var _this = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Cache);

        this._schema = settings.schema;
        this._keyMap = settings.keyMap;
        this._queryBuilder = settings.queryBuilder || new __WEBPACK_IMPORTED_MODULE_2__orbit_data__["c" /* QueryBuilder */]();
        this._transformBuilder = settings.transformBuilder || new __WEBPACK_IMPORTED_MODULE_2__orbit_data__["i" /* TransformBuilder */]({
            recordInitializer: this._schema
        });
        var processors = settings.processors ? settings.processors : [__WEBPACK_IMPORTED_MODULE_5__cache_operation_processors_schema_validation_processor__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__cache_operation_processors_schema_consistency_processor__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__cache_operation_processors_cache_integrity_processor__["a" /* default */]];
        this._processors = processors.map(function (Processor) {
            return new Processor(_this);
        });
        this.reset(settings.base);
    }

    _createClass(Cache, [{
        key: "records",
        value: function records(type) {
            return this._records[type];
        }
    }, {
        key: "query",

        /**
         Allows a client to run queries against the cache.
            @example
         ``` javascript
         // using a query builder callback
         cache.query(qb.record('planet', 'idabc123')).then(results => {});
         ```
            @example
         ``` javascript
         // using an expression
         cache.query(oqe('record', 'planet', 'idabc123')).then(results => {});
         ```
            @method query
         @param {Expression} query
         @return {Object} result of query (type depends on query)
         */
        value: function query(queryOrExpression, options, id) {
            var query = Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["k" /* buildQuery */])(queryOrExpression, options, id, this._queryBuilder);
            return this._query(query.expression);
        }
        /**
         * Resets the cache's state to be either empty or to match the state of
         * another cache.
         *
         * @example
         * ``` javascript
         * cache.reset(); // empties cache
         * cache.reset(cache2); // clones the state of cache2
         * ```
         *
         * @param {Cache} [base]
         * @memberof Cache
         */

    }, {
        key: "reset",
        value: function reset(base) {
            var _this2 = this;

            this._records = {};
            Object.keys(this._schema.models).forEach(function (type) {
                var baseRecords = base && base.records(type);
                _this2._records[type] = new __WEBPACK_IMPORTED_MODULE_9__orbit_immutable__["a" /* ImmutableMap */](baseRecords);
            });
            this._relationships = new __WEBPACK_IMPORTED_MODULE_10__cache_relationship_accessor__["a" /* default */](this, base && base.relationships);
            this._inverseRelationships = new __WEBPACK_IMPORTED_MODULE_11__cache_inverse_relationship_accessor__["a" /* default */](this, base && base.inverseRelationships);
            this._processors.forEach(function (processor) {
                return processor.reset(base);
            });
            this.emit('reset');
        }
        /**
         * Upgrade the cache based on the current state of the schema.
         *
         * @memberof Cache
         */

    }, {
        key: "upgrade",
        value: function upgrade() {
            var _this3 = this;

            Object.keys(this._schema.models).forEach(function (type) {
                if (!_this3._records[type]) {
                    _this3._records[type] = new __WEBPACK_IMPORTED_MODULE_9__orbit_immutable__["a" /* ImmutableMap */]();
                }
            });
            this._relationships.upgrade();
            this._inverseRelationships.upgrade();
            this._processors.forEach(function (processor) {
                return processor.upgrade();
            });
        }
        /**
         * Patches the document with an operation.
         *
         * @param {(Operation | Operation[] | TransformBuilderFunc)} operationOrOperations
         * @returns {Operation[]}
         * @memberof Cache
         */

    }, {
        key: "patch",
        value: function patch(operationOrOperations) {
            if (typeof operationOrOperations === 'function') {
                operationOrOperations = operationOrOperations(this._transformBuilder);
            }
            var result = {
                inverse: [],
                data: []
            };
            if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(operationOrOperations)) {
                this._applyOperations(operationOrOperations, result, true);
            } else {
                this._applyOperation(operationOrOperations, result, true);
            }
            return result;
        }
        /////////////////////////////////////////////////////////////////////////////
        // Protected methods
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_applyOperations",
        value: function _applyOperations(ops, result) {
            var _this4 = this;

            var primary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            ops.forEach(function (op) {
                return _this4._applyOperation(op, result, primary);
            });
        }
    }, {
        key: "_applyOperation",
        value: function _applyOperation(operation, result) {
            var _this5 = this;

            var primary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this._processors.forEach(function (processor) {
                return processor.validate(operation);
            });
            var inverseTransform = __WEBPACK_IMPORTED_MODULE_8__cache_inverse_transforms__["a" /* default */][operation.op];
            var inverseOp = inverseTransform(this, operation);
            if (inverseOp) {
                result.inverse.unshift(inverseOp);
                // Query and perform related `before` operations
                this._processors.map(function (processor) {
                    return processor.before(operation);
                }).forEach(function (ops) {
                    return _this5._applyOperations(ops, result);
                });
                // Query related `after` operations before performing
                // the requested operation. These will be applied on success.
                var preparedOps = this._processors.map(function (processor) {
                    return processor.after(operation);
                });
                // Perform the requested operation
                var patchTransform = __WEBPACK_IMPORTED_MODULE_7__cache_patch_transforms__["a" /* default */][operation.op];
                var data = patchTransform(this, operation);
                if (primary) {
                    result.data.push(data);
                }
                // Query and perform related `immediate` operations
                this._processors.forEach(function (processor) {
                    return processor.immediate(operation);
                });
                // Emit event
                this.emit('patch', operation, data);
                // Perform prepared operations after performing the requested operation
                preparedOps.forEach(function (ops) {
                    return _this5._applyOperations(ops, result);
                });
                // Query and perform related `finally` operations
                this._processors.map(function (processor) {
                    return processor.finally(operation);
                }).forEach(function (ops) {
                    return _this5._applyOperations(ops, result);
                });
            } else if (primary) {
                result.data.push(null);
            }
        }
    }, {
        key: "_query",
        value: function _query(expression) {
            var operator = __WEBPACK_IMPORTED_MODULE_6__cache_query_operators__["a" /* QueryOperators */][expression.op];
            if (!operator) {
                throw new Error('Unable to find operator: ' + expression.op);
            }
            return operator(this, expression);
        }
    }, {
        key: "keyMap",
        get: function get() {
            return this._keyMap;
        }
    }, {
        key: "schema",
        get: function get() {
            return this._schema;
        }
    }, {
        key: "queryBuilder",
        get: function get() {
            return this._queryBuilder;
        }
    }, {
        key: "transformBuilder",
        get: function get() {
            return this._transformBuilder;
        }
    }, {
        key: "relationships",
        get: function get() {
            return this._relationships;
        }
    }, {
        key: "inverseRelationships",
        get: function get() {
            return this._inverseRelationships;
        }
    }]);

    return Cache;
}();
Cache = __decorate([__WEBPACK_IMPORTED_MODULE_1__orbit_core__["e" /* evented */]], Cache);
/* harmony default export */ __webpack_exports__["a"] = (Cache);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheIntegrityProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operation_processor__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * An operation processor that ensures that a cache's data is consistent and
 * doesn't contain any dead references.
 *
 * This is achieved by maintaining a mapping of reverse relationships for each
 * record. When a record is removed, any references to it can also be identified
 * and removed.
 *
 * @export
 * @class CacheIntegrityProcessor
 * @extends {OperationProcessor}
 */

var CacheIntegrityProcessor = function (_OperationProcessor) {
    _inherits(CacheIntegrityProcessor, _OperationProcessor);

    function CacheIntegrityProcessor() {
        _classCallCheck(this, CacheIntegrityProcessor);

        return _possibleConstructorReturn(this, (CacheIntegrityProcessor.__proto__ || Object.getPrototypeOf(CacheIntegrityProcessor)).apply(this, arguments));
    }

    _createClass(CacheIntegrityProcessor, [{
        key: 'after',
        value: function after(operation) {
            switch (operation.op) {
                case 'replaceRelatedRecord':
                    this.cache.inverseRelationships.relatedRecordRemoved(operation.record, operation.relationship);
                    return [];
                case 'replaceRelatedRecords':
                    this.cache.inverseRelationships.relatedRecordsRemoved(operation.record, operation.relationship);
                    return [];
                case 'removeFromRelatedRecords':
                    this.cache.inverseRelationships.relatedRecordRemoved(operation.record, operation.relationship, operation.relatedRecord);
                    return [];
                case 'removeRecord':
                    var ops = this.clearInverseRelationshipOps(operation.record);
                    this.cache.inverseRelationships.recordRemoved(operation.record);
                    return ops;
                case 'replaceRecord':
                    this.cache.inverseRelationships.recordRemoved(operation.record);
                    return [];
                default:
                    return [];
            }
        }
    }, {
        key: 'immediate',
        value: function immediate(operation) {
            switch (operation.op) {
                case 'replaceRelatedRecord':
                    this.cache.relationships.replaceRelatedRecord(operation.record, operation.relationship, operation.relatedRecord);
                    return;
                case 'replaceRelatedRecords':
                    this.cache.relationships.replaceRelatedRecords(operation.record, operation.relationship, operation.relatedRecords);
                    return;
                case 'addToRelatedRecords':
                    this.cache.relationships.addToRelatedRecords(operation.record, operation.relationship, operation.relatedRecord);
                    return;
                case 'removeFromRelatedRecords':
                    this.cache.relationships.removeFromRelatedRecords(operation.record, operation.relationship, operation.relatedRecord);
                    return;
                case 'addRecord':
                    this.cache.relationships.addRecord(operation.record);
                    return;
                case 'replaceRecord':
                    this.cache.relationships.replaceRecord(operation.record);
                    return;
                case 'removeRecord':
                    this.cache.relationships.clearRecord(operation.record);
                    return;
            }
        }
    }, {
        key: 'finally',
        value: function _finally(operation) {
            switch (operation.op) {
                case 'replaceRelatedRecord':
                    this.cache.inverseRelationships.relatedRecordAdded(operation.record, operation.relationship, operation.relatedRecord);
                    return [];
                case 'replaceRelatedRecords':
                    this.cache.inverseRelationships.relatedRecordsAdded(operation.record, operation.relationship, operation.relatedRecords);
                    return [];
                case 'addToRelatedRecords':
                    this.cache.inverseRelationships.relatedRecordAdded(operation.record, operation.relationship, operation.relatedRecord);
                    return [];
                case 'addRecord':
                    this.cache.inverseRelationships.recordAdded(operation.record);
                    return [];
                case 'replaceRecord':
                    this.cache.inverseRelationships.recordAdded(operation.record);
                    return [];
                default:
                    return [];
            }
        }
    }, {
        key: 'clearInverseRelationshipOps',
        value: function clearInverseRelationshipOps(record) {
            var _this2 = this;

            var ops = [];
            var inverseRels = this.cache.inverseRelationships.all(record);
            if (inverseRels.length > 0) {
                var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(record);
                inverseRels.forEach(function (rel) {
                    var relationshipDef = _this2.cache.schema.getModel(rel.record.type).relationships[rel.relationship];
                    if (relationshipDef.type === 'hasMany') {
                        ops.push({
                            op: 'removeFromRelatedRecords',
                            record: rel.record,
                            relationship: rel.relationship,
                            relatedRecord: recordIdentity
                        });
                    } else {
                        ops.push({
                            op: 'replaceRelatedRecord',
                            record: rel.record,
                            relationship: rel.relationship,
                            relatedRecord: null
                        });
                    }
                });
            }
            return ops;
        }
    }]);

    return CacheIntegrityProcessor;
}(__WEBPACK_IMPORTED_MODULE_1__operation_processor__["a" /* OperationProcessor */]);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaConsistencyProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation_processor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_identity_map__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * An operation processor that ensures that a cache's data is consistent with
 * its associated schema.
 *
 * This includes maintenance of inverse and dependent relationships.
 *
 * @export
 * @class SchemaConsistencyProcessor
 * @extends {OperationProcessor}
 */

var SchemaConsistencyProcessor = function (_OperationProcessor) {
    _inherits(SchemaConsistencyProcessor, _OperationProcessor);

    function SchemaConsistencyProcessor() {
        _classCallCheck(this, SchemaConsistencyProcessor);

        return _possibleConstructorReturn(this, (SchemaConsistencyProcessor.__proto__ || Object.getPrototypeOf(SchemaConsistencyProcessor)).apply(this, arguments));
    }

    _createClass(SchemaConsistencyProcessor, [{
        key: 'after',
        value: function after(operation) {
            switch (operation.op) {
                case 'addRecord':
                    return this._recordAdded(operation.record);
                case 'addToRelatedRecords':
                    return this._relatedRecordAdded(operation.record, operation.relationship, operation.relatedRecord);
                case 'replaceRelatedRecord':
                    return this._relatedRecordReplaced(operation.record, operation.relationship, operation.relatedRecord);
                case 'replaceRelatedRecords':
                    return this._relatedRecordsReplaced(operation.record, operation.relationship, operation.relatedRecords);
                case 'removeFromRelatedRecords':
                    return this._relatedRecordRemoved(operation.record, operation.relationship, operation.relatedRecord);
                case 'removeRecord':
                    return this._recordRemoved(operation.record);
                case 'replaceRecord':
                    return this._recordReplaced(operation.record);
                default:
                    return [];
            }
        }
    }, {
        key: '_relatedRecordAdded',
        value: function _relatedRecordAdded(record, relationship, relatedRecord) {
            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var inverseRelationship = relationshipDef.inverse;
            if (inverseRelationship && relatedRecord) {
                ops.push(this._addRelationshipOp(relatedRecord, inverseRelationship, record));
            }
            return ops;
        }
    }, {
        key: '_relatedRecordsAdded',
        value: function _relatedRecordsAdded(record, relationship, relatedRecords) {
            var _this2 = this;

            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var inverseRelationship = relationshipDef.inverse;
            if (inverseRelationship && relatedRecords && relatedRecords.length > 0) {
                relatedRecords.forEach(function (relatedRecord) {
                    ops.push(_this2._addRelationshipOp(relatedRecord, inverseRelationship, record));
                });
            }
            return ops;
        }
    }, {
        key: '_relatedRecordRemoved',
        value: function _relatedRecordRemoved(record, relationship, relatedRecord) {
            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var inverseRelationship = relationshipDef.inverse;
            if (inverseRelationship) {
                if (relatedRecord === undefined) {
                    var currentRecord = this.cache.records(record.type).get(record.id);
                    relatedRecord = currentRecord && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(currentRecord, ['relationships', relationship, 'data']);
                }
                if (relatedRecord) {
                    ops.push(this._removeRelationshipOp(relatedRecord, inverseRelationship, record));
                }
            }
            return ops;
        }
    }, {
        key: '_relatedRecordReplaced',
        value: function _relatedRecordReplaced(record, relationship, relatedRecord) {
            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var inverseRelationship = relationshipDef.inverse;
            if (inverseRelationship) {
                var currentRelatedRecord = this.cache.relationships.relatedRecord(record, relationship);
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["p" /* equalRecordIdentities */])(relatedRecord, currentRelatedRecord)) {
                    if (currentRelatedRecord) {
                        ops.push(this._removeRelationshipOp(currentRelatedRecord, inverseRelationship, record));
                    }
                    if (relatedRecord) {
                        ops.push(this._addRelationshipOp(relatedRecord, inverseRelationship, record));
                    }
                }
            }
            return ops;
        }
    }, {
        key: '_relatedRecordsRemoved',
        value: function _relatedRecordsRemoved(record, relationship, relatedRecords) {
            var _this3 = this;

            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var inverseRelationship = relationshipDef.inverse;
            if (inverseRelationship) {
                if (relatedRecords === undefined) {
                    relatedRecords = this.cache.relationships.relatedRecords(record, relationship);
                }
                if (relatedRecords) {
                    relatedRecords.forEach(function (relatedRecord) {
                        return ops.push(_this3._removeRelationshipOp(relatedRecord, inverseRelationship, record));
                    });
                }
            }
            return ops;
        }
    }, {
        key: '_relatedRecordsReplaced',
        value: function _relatedRecordsReplaced(record, relationship, relatedRecords) {
            var ops = [];
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var currentRelatedRecordsMap = this.cache.relationships.relatedRecordsMap(record, relationship);
            var addedRecords = void 0;
            if (currentRelatedRecordsMap) {
                var relatedRecordsMap = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]();
                relatedRecords.forEach(function (r) {
                    return relatedRecordsMap.add(r);
                });
                var removedRecords = currentRelatedRecordsMap.exclusiveOf(relatedRecordsMap);
                Array.prototype.push.apply(ops, this._removeRelatedRecordsOps(record, relationshipDef, removedRecords));
                addedRecords = relatedRecordsMap.exclusiveOf(currentRelatedRecordsMap);
            } else {
                addedRecords = relatedRecords;
            }
            Array.prototype.push.apply(ops, this._addRelatedRecordsOps(record, relationshipDef, addedRecords));
            return ops;
        }
    }, {
        key: '_recordAdded',
        value: function _recordAdded(record) {
            var _this4 = this;

            var ops = [];
            var relationships = record.relationships;
            if (relationships) {
                var modelDef = this.cache.schema.getModel(record.type);
                var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
                Object.keys(relationships).forEach(function (relationship) {
                    var relationshipDef = modelDef.relationships[relationship];
                    var relationshipData = relationships[relationship] && relationships[relationship].data;
                    var relatedRecords = recordArrayFromData(relationshipData);
                    Array.prototype.push.apply(ops, _this4._addRelatedRecordsOps(recordIdentity, relationshipDef, relatedRecords));
                });
            }
            return ops;
        }
    }, {
        key: '_recordRemoved',
        value: function _recordRemoved(record) {
            var _this5 = this;

            var ops = [];
            var currentRecord = this.cache.records(record.type).get(record.id);
            var relationships = currentRecord && currentRecord.relationships;
            if (relationships) {
                var modelDef = this.cache.schema.getModel(record.type);
                var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
                Object.keys(relationships).forEach(function (relationship) {
                    var relationshipDef = modelDef.relationships[relationship];
                    var relationshipData = relationships[relationship] && relationships[relationship].data;
                    var relatedRecords = recordArrayFromData(relationshipData);
                    Array.prototype.push.apply(ops, _this5._removeRelatedRecordsOps(recordIdentity, relationshipDef, relatedRecords));
                });
            }
            return ops;
        }
    }, {
        key: '_recordReplaced',
        value: function _recordReplaced(record) {
            var ops = [];
            if (record.relationships) {
                var modelDef = this.cache.schema.getModel(record.type);
                var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
                for (var relationship in record.relationships) {
                    var relationshipDef = modelDef.relationships[relationship];
                    var relationshipData = record && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(record, ['relationships', relationship, 'data']);
                    if (relationshipDef.type === 'hasMany') {
                        Array.prototype.push.apply(ops, this._relatedRecordsReplaced(recordIdentity, relationship, relationshipData));
                    } else {
                        Array.prototype.push.apply(ops, this._relatedRecordReplaced(recordIdentity, relationship, relationshipData));
                    }
                }
            }
            return ops;
        }
    }, {
        key: '_addRelatedRecordsOps',
        value: function _addRelatedRecordsOps(record, relationshipDef, relatedRecords) {
            var _this6 = this;

            if (relatedRecords.length > 0 && relationshipDef.inverse) {
                return relatedRecords.map(function (relatedRecord) {
                    return _this6._addRelationshipOp(relatedRecord, relationshipDef.inverse, record);
                });
            }
            return [];
        }
    }, {
        key: '_removeRelatedRecordsOps',
        value: function _removeRelatedRecordsOps(record, relationshipDef, relatedRecords) {
            var _this7 = this;

            if (relatedRecords.length > 0) {
                if (relationshipDef.dependent === 'remove') {
                    return this._removeDependentRecords(relatedRecords);
                } else if (relationshipDef.inverse) {
                    return relatedRecords.map(function (relatedRecord) {
                        return _this7._removeRelationshipOp(relatedRecord, relationshipDef.inverse, record);
                    });
                }
            }
            return [];
        }
    }, {
        key: '_addRelationshipOp',
        value: function _addRelationshipOp(record, relationship, relatedRecord) {
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var isHasMany = relationshipDef.type === 'hasMany';
            return {
                op: isHasMany ? 'addToRelatedRecords' : 'replaceRelatedRecord',
                record: record,
                relationship: relationship,
                relatedRecord: relatedRecord
            };
        }
    }, {
        key: '_removeRelationshipOp',
        value: function _removeRelationshipOp(record, relationship, relatedRecord) {
            var relationshipDef = this.cache.schema.getModel(record.type).relationships[relationship];
            var isHasMany = relationshipDef.type === 'hasMany';
            return {
                op: isHasMany ? 'removeFromRelatedRecords' : 'replaceRelatedRecord',
                record: record,
                relationship: relationship,
                relatedRecord: isHasMany ? relatedRecord : null
            };
        }
    }, {
        key: '_removeDependentRecords',
        value: function _removeDependentRecords(relatedRecords) {
            return relatedRecords.map(function (record) {
                return {
                    op: 'removeRecord',
                    record: record
                };
            });
        }
    }]);

    return SchemaConsistencyProcessor;
}(__WEBPACK_IMPORTED_MODULE_2__operation_processor__["a" /* OperationProcessor */]);



function recordArrayFromData(data) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(data)) {
        return data;
    } else if (data) {
        return [data];
    } else {
        return [];
    }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordIdentityMap; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function serializeRecordIdentity(record) {
    return record.type + ':' + record.id;
}
function deserializeRecordIdentity(identity) {
    var _identity$split = identity.split(':'),
        _identity$split2 = _slicedToArray(_identity$split, 2),
        type = _identity$split2[0],
        id = _identity$split2[1];

    return { type: type, id: id };
}

var RecordIdentityMap = function () {
    function RecordIdentityMap(base) {
        _classCallCheck(this, RecordIdentityMap);

        var identities = this.identities = {};
        if (base) {
            Object.keys(base.identities).forEach(function (k) {
                identities[k] = true;
            });
        }
    }

    _createClass(RecordIdentityMap, [{
        key: 'add',
        value: function add(record) {
            this.identities[serializeRecordIdentity(record)] = true;
        }
    }, {
        key: 'remove',
        value: function remove(record) {
            delete this.identities[serializeRecordIdentity(record)];
        }
    }, {
        key: 'has',
        value: function has(record) {
            if (record) {
                return !!this.identities[serializeRecordIdentity(record)];
            } else {
                return false;
            }
        }
    }, {
        key: 'exclusiveOf',
        value: function exclusiveOf(other) {
            return Object.keys(this.identities).filter(function (id) {
                return !other.identities[id];
            }).map(function (id) {
                return deserializeRecordIdentity(id);
            });
        }
    }, {
        key: 'equals',
        value: function equals(other) {
            return this.exclusiveOf(other).length === 0 && other.exclusiveOf(this).length === 0;
        }
    }, {
        key: 'values',
        get: function get() {
            return Object.keys(this.identities).map(function (id) {
                return deserializeRecordIdentity(id);
            });
        }
    }]);

    return RecordIdentityMap;
}();



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaValidationProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operation_processor__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/**
 * An operation processor that ensures that an operation is compatible with
 * its associated schema.
 *
 * @export
 * @class SchemaValidationProcessor
 * @extends {OperationProcessor}
 */

var SchemaValidationProcessor = function (_OperationProcessor) {
    _inherits(SchemaValidationProcessor, _OperationProcessor);

    function SchemaValidationProcessor() {
        _classCallCheck(this, SchemaValidationProcessor);

        return _possibleConstructorReturn(this, (SchemaValidationProcessor.__proto__ || Object.getPrototypeOf(SchemaValidationProcessor)).apply(this, arguments));
    }

    _createClass(SchemaValidationProcessor, [{
        key: 'validate',
        value: function validate(operation) {
            switch (operation.op) {
                case 'addRecord':
                    return this._recordAdded(operation.record);
                case 'replaceRecord':
                    return this._recordReplaced(operation.record);
                case 'removeRecord':
                    return this._recordRemoved(operation.record);
                case 'replaceKey':
                    return this._keyReplaced(operation.record);
                case 'replaceAttribute':
                    return this._attributeReplaced(operation.record);
                case 'addToRelatedRecords':
                    return this._relatedRecordAdded(operation.record, operation.relationship, operation.relatedRecord);
                case 'removeFromRelatedRecords':
                    return this._relatedRecordRemoved(operation.record, operation.relationship, operation.relatedRecord);
                case 'replaceRelatedRecords':
                    return this._relatedRecordsReplaced(operation.record, operation.relationship, operation.relatedRecords);
                case 'replaceRelatedRecord':
                    return this._relatedRecordReplaced(operation.record, operation.relationship, operation.relatedRecord);
                default:
                    return;
            }
        }
    }, {
        key: '_recordAdded',
        value: function _recordAdded(record) {
            this._validateRecord(record);
        }
    }, {
        key: '_recordReplaced',
        value: function _recordReplaced(record) {
            this._validateRecord(record);
        }
    }, {
        key: '_recordRemoved',
        value: function _recordRemoved(record) {
            this._validateRecordIdentity(record);
        }
    }, {
        key: '_keyReplaced',
        value: function _keyReplaced(record) {
            this._validateRecordIdentity(record);
        }
    }, {
        key: '_attributeReplaced',
        value: function _attributeReplaced(record) {
            this._validateRecordIdentity(record);
        }
    }, {
        key: '_relatedRecordAdded',
        value: function _relatedRecordAdded(record, relationship, relatedRecord) {
            this._validateRecordIdentity(record);
            this._validateRecordIdentity(relatedRecord);
        }
    }, {
        key: '_relatedRecordRemoved',
        value: function _relatedRecordRemoved(record, relationship, relatedRecord) {
            this._validateRecordIdentity(record);
            this._validateRecordIdentity(relatedRecord);
        }
    }, {
        key: '_relatedRecordsReplaced',
        value: function _relatedRecordsReplaced(record, relationship, relatedRecords) {
            var _this2 = this;

            this._validateRecordIdentity(record);
            relatedRecords.forEach(function (record) {
                _this2._validateRecordIdentity(record);
            });
        }
    }, {
        key: '_relatedRecordReplaced',
        value: function _relatedRecordReplaced(record, relationship, relatedRecord) {
            this._validateRecordIdentity(record);
            if (relatedRecord) {
                this._validateRecordIdentity(relatedRecord);
            }
        }
    }, {
        key: '_validateRecord',
        value: function _validateRecord(record) {
            this._validateRecordIdentity(record);
        }
    }, {
        key: '_validateRecordIdentity',
        value: function _validateRecordIdentity(record) {
            this.cache.schema.getModel(record.type);
        }
    }]);

    return SchemaValidationProcessor;
}(__WEBPACK_IMPORTED_MODULE_0__operation_processor__["a" /* OperationProcessor */]);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coordinator__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__coordinator__["b"]; });
/* unused harmony reexport LogLevel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strategy__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strategies_log_truncation_strategy__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__strategies_event_logging_strategy__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__strategies_event_logging_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategies_connection_strategy__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strategies_request_strategy__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__strategies_request_strategy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__strategies_sync_strategy__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__strategies_sync_strategy__["a"]; });








/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Coordinator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Errors"] = 1] = "Errors";
    LogLevel[LogLevel["Warnings"] = 2] = "Warnings";
    LogLevel[LogLevel["Info"] = 3] = "Info";
})(LogLevel || (LogLevel = {}));
/**
 * The Coordinator class manages a set of sources to which it applies a set of
 * coordination strategies.
 *
 * @export
 * @class Coordinator
 */

var Coordinator = function () {
    function Coordinator() {
        var _this = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Coordinator);

        this._sources = {};
        this._strategies = {};
        if (options.sources) {
            options.sources.forEach(function (source) {
                return _this.addSource(source);
            });
        }
        if (options.strategies) {
            options.strategies.forEach(function (strategy) {
                return _this.addStrategy(strategy);
            });
        }
        this._defaultActivationOptions = options.defaultActivationOptions || {};
        if (this._defaultActivationOptions.logLevel === undefined) {
            this._defaultActivationOptions.logLevel = LogLevel.Info;
        }
    }

    _createClass(Coordinator, [{
        key: 'addSource',
        value: function addSource(source) {
            var name = source.name;
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Sources require a \'name\' to be added to a coordinator.', !!name);
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A source named \'' + name + '\' has already been added to this coordinator.', !this._sources[name]);
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A coordinator\'s sources can not be changed while it is active.', !this._activated);
            this._sources[name] = source;
        }
    }, {
        key: 'removeSource',
        value: function removeSource(name) {
            var source = this._sources[name];
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Source \'' + name + '\' has not been added to this coordinator.', !!source);
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A coordinator\'s sources can not be changed while it is active.', !this._activated);
            delete this._sources[name];
        }
    }, {
        key: 'getSource',
        value: function getSource(name) {
            return this._sources[name];
        }
    }, {
        key: 'addStrategy',
        value: function addStrategy(strategy) {
            var name = strategy.name;
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A strategy named \'' + name + '\' has already been added to this coordinator.', !this._strategies[name]);
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A coordinator\'s strategies can not be changed while it is active.', !this._activated);
            this._strategies[name] = strategy;
        }
    }, {
        key: 'removeStrategy',
        value: function removeStrategy(name) {
            var strategy = this._strategies[name];
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Strategy \'' + name + '\' has not been added to this coordinator.', !!strategy);
            Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A coordinator\'s strategies can not be changed while it is active.', !this._activated);
            delete this._strategies[name];
        }
    }, {
        key: 'getStrategy',
        value: function getStrategy(name) {
            return this._strategies[name];
        }
    }, {
        key: 'activate',
        value: function activate() {
            var _this2 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this._activated) {
                if (options.logLevel === undefined) {
                    options.logLevel = this._defaultActivationOptions.logLevel;
                }
                this._currentActivationOptions = options;
                this._activated = this.strategies.reduce(function (chain, strategy) {
                    return chain.then(function () {
                        return strategy.activate(_this2, options);
                    });
                }, __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve());
            }
            return this._activated;
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var _this3 = this;

            if (this._activated) {
                return this._activated.then(function () {
                    return _this3.strategies.reverse().reduce(function (chain, strategy) {
                        return chain.then(function () {
                            return strategy.deactivate();
                        });
                    }, __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve());
                }).then(function () {
                    _this3._activated = null;
                });
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
            }
        }
    }, {
        key: 'sources',
        get: function get() {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["m" /* objectValues */])(this._sources);
        }
    }, {
        key: 'sourceNames',
        get: function get() {
            return Object.keys(this._sources);
        }
    }, {
        key: 'strategies',
        get: function get() {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["m" /* objectValues */])(this._strategies);
        }
    }, {
        key: 'strategyNames',
        get: function get() {
            return Object.keys(this._strategies);
        }
    }, {
        key: 'activated',
        get: function get() {
            return this._activated;
        }
    }]);

    return Coordinator;
}();



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONAPISerializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var JSONAPISerializer = function () {
    function JSONAPISerializer(settings) {
        _classCallCheck(this, JSONAPISerializer);

        this._schema = settings.schema;
        this._keyMap = settings.keyMap;
    }

    _createClass(JSONAPISerializer, [{
        key: 'resourceKey',
        value: function resourceKey(type) {
            return 'id';
        }
    }, {
        key: 'resourceType',
        value: function resourceType(type) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["d" /* dasherize */])(this.schema.pluralize(type));
        }
    }, {
        key: 'resourceRelationship',
        value: function resourceRelationship(type, relationship) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["d" /* dasherize */])(relationship);
        }
    }, {
        key: 'resourceAttribute',
        value: function resourceAttribute(type, attr) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["d" /* dasherize */])(attr);
        }
    }, {
        key: 'resourceIdentity',
        value: function resourceIdentity(identity) {
            return {
                type: this.resourceType(identity.type),
                id: this.resourceId(identity.type, identity.id)
            };
        }
    }, {
        key: 'resourceIds',
        value: function resourceIds(type, ids) {
            var _this = this;

            return ids.map(function (id) {
                return _this.resourceId(type, id);
            });
        }
    }, {
        key: 'resourceId',
        value: function resourceId(type, id) {
            var resourceKey = this.resourceKey(type);
            if (resourceKey === 'id') {
                return id;
            } else {
                return this.keyMap.idToKey(type, resourceKey, id);
            }
        }
    }, {
        key: 'recordId',
        value: function recordId(type, resourceId) {
            var resourceKey = this.resourceKey(type);
            if (resourceKey === 'id') {
                return resourceId;
            }
            var existingId = this.keyMap.keyToId(type, resourceKey, resourceId);
            if (existingId) {
                return existingId;
            }
            return this._generateNewId(type, resourceKey, resourceId);
        }
    }, {
        key: 'recordType',
        value: function recordType(resourceType) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["b" /* camelize */])(this.schema.singularize(resourceType));
        }
    }, {
        key: 'recordIdentity',
        value: function recordIdentity(resourceIdentity) {
            var type = this.recordType(resourceIdentity.type);
            var id = this.recordId(type, resourceIdentity.id);
            return { type: type, id: id };
        }
    }, {
        key: 'recordAttribute',
        value: function recordAttribute(type, resourceAttribute) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["b" /* camelize */])(resourceAttribute);
        }
    }, {
        key: 'recordRelationship',
        value: function recordRelationship(type, resourceRelationship) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["b" /* camelize */])(resourceRelationship);
        }
    }, {
        key: 'serializeDocument',
        value: function serializeDocument(data) {
            return {
                data: Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(data) ? this.serializeRecords(data) : this.serializeRecord(data)
            };
        }
    }, {
        key: 'serializeRecords',
        value: function serializeRecords(records) {
            var _this2 = this;

            return records.map(function (record) {
                return _this2.serializeRecord(record);
            });
        }
    }, {
        key: 'serializeRecord',
        value: function serializeRecord(record) {
            var resource = {
                type: this.resourceType(record.type)
            };
            this.serializeId(resource, record);
            this.serializeAttributes(resource, record);
            this.serializeRelationships(resource, record);
            return resource;
        }
    }, {
        key: 'serializeId',
        value: function serializeId(resource, record) {
            var value = this.resourceId(record.type, record.id);
            if (value !== undefined) {
                resource.id = value;
            }
        }
    }, {
        key: 'serializeAttributes',
        value: function serializeAttributes(resource, record) {
            var _this3 = this;

            if (record.attributes) {
                Object.keys(record.attributes).forEach(function (attr) {
                    _this3.serializeAttribute(resource, record, attr);
                });
            }
        }
    }, {
        key: 'serializeAttribute',
        value: function serializeAttribute(resource, record, attr) {
            var value = record.attributes[attr];
            if (value !== undefined) {
                Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(resource, ['attributes', this.resourceAttribute(record.type, attr)], value);
            }
        }
    }, {
        key: 'serializeRelationships',
        value: function serializeRelationships(resource, record) {
            var _this4 = this;

            if (record.relationships) {
                Object.keys(record.relationships).forEach(function (relationship) {
                    _this4.serializeRelationship(resource, record, relationship);
                });
            }
        }
    }, {
        key: 'serializeRelationship',
        value: function serializeRelationship(resource, record, relationship) {
            var _this5 = this;

            var value = record.relationships[relationship].data;
            if (value !== undefined) {
                var data = void 0;
                if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(value)) {
                    data = value.map(function (id) {
                        return _this5.resourceIdentity(id);
                    });
                } else if (value !== null) {
                    data = this.resourceIdentity(value);
                } else {
                    data = null;
                }
                var resourceRelationship = this.resourceRelationship(record.type, relationship);
                Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(resource, ['relationships', resourceRelationship, 'data'], data);
            }
        }
    }, {
        key: 'deserializeDocument',
        value: function deserializeDocument(document) {
            var result = void 0;
            var data = document.data;
            if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(data)) {
                result = {
                    data: data.map(this.deserializeResource, this)
                };
            } else {
                result = {
                    data: this.deserializeResource(data)
                };
            }
            if (document.included) {
                result.included = document.included.map(this.deserializeResource, this);
            }
            return result;
        }
    }, {
        key: 'deserializeResource',
        value: function deserializeResource(resource) {
            var record = void 0;
            var type = this.recordType(resource.type);
            var resourceKey = this.resourceKey(type);
            if (resourceKey === 'id') {
                record = { type: type, id: resource.id };
            } else {
                var id = void 0;
                var keys = void 0;
                if (resource.id) {
                    keys = _defineProperty({}, resourceKey, resource.id);
                    id = this.keyMap.idFromKeys(type, keys) || this.schema.generateId(type);
                } else {
                    id = this.schema.generateId(type);
                }
                record = { type: type, id: id };
                if (keys) {
                    record.keys = keys;
                }
            }
            this.deserializeAttributes(record, resource);
            this.deserializeRelationships(record, resource);
            if (this.keyMap) {
                this.keyMap.pushRecord(record);
            }
            return record;
        }
    }, {
        key: 'deserializeAttributes',
        value: function deserializeAttributes(record, resource) {
            var _this6 = this;

            if (resource.attributes) {
                Object.keys(resource.attributes).forEach(function (resourceAttribute) {
                    var attribute = _this6.recordAttribute(record.type, resourceAttribute);
                    if (_this6.schema.hasAttribute(record.type, attribute)) {
                        var value = resource.attributes[resourceAttribute];
                        _this6.deserializeAttribute(record, attribute, value);
                    }
                });
            }
        }
    }, {
        key: 'deserializeAttribute',
        value: function deserializeAttribute(record, attr, value) {
            record.attributes = record.attributes || {};
            record.attributes[attr] = value;
        }
    }, {
        key: 'deserializeRelationships',
        value: function deserializeRelationships(record, resource) {
            var _this7 = this;

            if (resource.relationships) {
                Object.keys(resource.relationships).forEach(function (resourceRel) {
                    var relationship = _this7.recordRelationship(record.type, resourceRel);
                    if (_this7.schema.hasRelationship(record.type, relationship)) {
                        var value = resource.relationships[resourceRel];
                        _this7.deserializeRelationship(record, relationship, value);
                    }
                });
            }
        }
    }, {
        key: 'deserializeRelationship',
        value: function deserializeRelationship(record, relationship, value) {
            var _this8 = this;

            var resourceData = value.data;
            if (resourceData !== undefined) {
                var data = void 0;
                if (resourceData === null) {
                    data = null;
                } else if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(resourceData)) {
                    data = resourceData.map(function (resourceIdentity) {
                        return _this8.recordIdentity(resourceIdentity);
                    });
                } else {
                    data = this.recordIdentity(resourceData);
                }
                record.relationships = record.relationships || {};
                record.relationships[relationship] = { data: data };
            }
        }
    }, {
        key: '_generateNewId',
        value: function _generateNewId(type, keyName, keyValue) {
            var id = this.schema.generateId(type);
            this.keyMap.pushRecord({
                type: type,
                id: id,
                keys: _defineProperty({}, keyName, keyValue)
            });
            return id;
        }
    }, {
        key: 'schema',
        get: function get() {
            return this._schema;
        }
    }, {
        key: 'keyMap',
        get: function get() {
            return this._keyMap;
        }
    }]);

    return JSONAPISerializer;
}();



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildFetchSettings;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);

function buildFetchSettings(options) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _arr = ['filter', 'include', 'page', 'sort'];

    for (var _i = 0; _i < _arr.length; _i++) {
        var param = _arr[_i];
        if (options[param]) {
            Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(settings, ['params', param], options[param]);
        }
    }
    if (options.timeout) {
        settings.timeout = options.timeout;
    }
    return settings;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_intercept_client__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_coordinator__ = __webpack_require__(26);


var interceptClient = new __WEBPACK_IMPORTED_MODULE_0_intercept_client__["a" /* default */]({
  host: ''
});

interceptClient.coordinator.addStrategy(new __WEBPACK_IMPORTED_MODULE_1__orbit_coordinator__["a" /* EventLoggingStrategy */]());
interceptClient.coordinator.activate();
window.interceptClient = interceptClient;

/* harmony default export */ __webpack_exports__["default"] = (interceptClient);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrbitClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_store__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_coordinator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_orbit_drupal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schema__ = __webpack_require__(73);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}





// eslint-disable-next-line no-unused-vars



__WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch = window.fetch.bind(window);

var OrbitClient = function OrbitClient(settings) {
  _classCallCheck(this, OrbitClient);

  this.schema = settings.schema;
  this.strategies = settings.strategies || [];

  // Setup in-memory source.
  var store = new __WEBPACK_IMPORTED_MODULE_1__orbit_store__["a" /* default */]({ schema: __WEBPACK_IMPORTED_MODULE_5__schema__["a" /* default */] });
  this.store = store;

  var sources = settings.sources || [store];

  var coordinator = new __WEBPACK_IMPORTED_MODULE_2__orbit_coordinator__["d" /* default */]({
    sources: sources
  });

  this.strategies.forEach(function (strategy) {
    coordinator.addStrategy(strategy);
  });

  this.coordinator = coordinator;
};

var InterceptClient = function (_OrbitClient) {
  _inherits(InterceptClient, _OrbitClient);

  function InterceptClient(settings) {
    _classCallCheck(this, InterceptClient);

    var _settings = Object.assign({
      schema: __WEBPACK_IMPORTED_MODULE_5__schema__["a" /* default */],
      namespace: 'jsonapi'
    }, settings);

    // Setup remote source
    var _this = _possibleConstructorReturn(this, (InterceptClient.__proto__ || Object.getPrototypeOf(InterceptClient)).call(this, _settings));

    var remote = new __WEBPACK_IMPORTED_MODULE_3_orbit_drupal__["a" /* default */]({
      schema: _settings.schema,
      name: 'remote',
      namespace: _settings.namespace,
      host: _settings.host
    });
    _this.coordinator.addSource(remote);

    // Query the remote server whenever the store is queried
    _this.coordinator.addStrategy(new __WEBPACK_IMPORTED_MODULE_2__orbit_coordinator__["b" /* RequestStrategy */]({
      source: 'store',
      on: 'beforeQuery',
      target: 'remote',
      action: 'pull',
      blocking: true
    }));
    // Update the remote server whenever the store is updated
    _this.coordinator.addStrategy(new __WEBPACK_IMPORTED_MODULE_2__orbit_coordinator__["b" /* RequestStrategy */]({
      source: 'store',
      on: 'beforeUpdate',
      target: 'remote',
      action: 'push',
      blocking: false
    }));
    // Sync all changes received from the remote server to the store
    _this.coordinator.addStrategy(new __WEBPACK_IMPORTED_MODULE_2__orbit_coordinator__["c" /* SyncStrategy */]({
      source: 'remote',
      target: 'store',
      blocking: true
    }));
    return _this;
  }

  return InterceptClient;
}(OrbitClient);

// const store = new Store({ schema });

// Setup remote source
// const remote = new DrupalJSONAPISource({
//   schema,
//   name: 'remote',
//   namespace: 'jsonapi',
//   host: 'http://intercept.test'
// });

// // Setup offline source
// const backup = new IndexedDBSource({
//   schema,
//   name: 'backup',
//   namespace: 'intercept_client'
// });

// const coordinator = new Coordinator({
//   // sources: [store, backup]
//   // sources: [store, backup, remote]
//   sources: [store, remote]
// });

// const backupStoreSync = new SyncStrategy({
//   source: 'store',
//   target: 'backup',
//   blocking: true
// });

// coordinator.addStrategy(backupStoreSync);
// coordinator.addStrategy(new EventLoggingStrategy());

// // // Query the remote server whenever the store is queried
// coordinator.addStrategy(new RequestStrategy({
//   source: 'store',
//   on: 'beforeQuery',
//   target: 'remote',
//   action: 'pull',
//   blocking: true
// }));
// // Update the remote server whenever the store is updated
// coordinator.addStrategy(new RequestStrategy({
//   source: 'store',
//   on: 'beforeUpdate',
//   target: 'remote',
//   action: 'push',
//   blocking: false
// }));
// // Sync all changes received from the remote server to the store
// coordinator.addStrategy(new SyncStrategy({
//   source: 'remote',
//   target: 'store',
//   blocking: true
// }));

// coordinator.activate().then(() => {
//   store.query(q => q.findRecords('node--location')).then((result => console.log(result)));
//   // console.log('Coordinator is active');
// });
// // returns a promise that resolves when all strategies
// // have been activated

// export default store;


/* harmony default export */ __webpack_exports__["a"] = (InterceptClient);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export every */
/* unused harmony export some */
/* harmony export (immutable) */ __webpack_exports__["a"] = firstResult;
/**
 * Like the Lodash _.every function, this function takes an array and a
 * predicate function and returns true or false depending on whether the
 * predicate is true for every item in the array.
 *
 * @export
 * @param {any[]} array
 * @param {(member: any, index: number) => boolean} predicate
 * @returns {boolean}
 */
function every(array, predicate) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        if (!predicate(array[index], index)) {
            return false;
        }
    }
    return true;
}
/**
 * Like the Lodash _.some function, this function takes an array and a predicate
 * function and returns true or false depending on whether the predicate is true
 * for any of the items in the array.
 *
 * @export
 * @param {any[]} array
 * @param {(member: any, index: number) => boolean} predicate
 * @returns {boolean}
 */
function some(array, predicate) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        if (predicate(array[index], index)) {
            return true;
        }
    }
    return false;
}
/**
 * This function is similar to Array.prototype.find, but it returns the result
 * of calling the value function rather than an item of the array.
 *
 * @export
 * @param {any[]} array
 * @param {(member: any, index: number) => any} valueFn
 * @returns {*} the first result of `valueFn` that returned true or undefined
 */
function firstResult(array, valueFn) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        var result = valueFn(array[index], index);
        if (result) {
            return result;
        }
    }
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
/**
 * Throw an exception if `test` is not truthy.
 *
 * @export
 * @param {string} description Description of the error thrown
 * @param {boolean} test Value that should be truthy for assertion to pass
 */
function assert(description, test) {
    if (!test) {
        throw new Error('Assertion failed: ' + description);
    }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deprecate */
/**
 * Display a deprecation warning with the provided message.
 *
 * @export
 * @param {string} message Description of the deprecation
 * @param {(() => boolean | boolean)} test An optional boolean or function that evaluates to a boolean.
 * @returns
 */
function deprecate(message, test) {
    if (typeof test === 'function') {
        if (test()) {
            return;
        }
    } else {
        if (test) {
            return;
        }
    }
    console.warn(message);
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eq;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable eqeqeq, no-eq-null, valid-jsdoc */
/**
 * `eq` checks the equality of two objects.
 *
 * The properties belonging to objects (but not their prototypes) will be
 * traversed deeply and compared.
 *
 * Includes special handling for strings, numbers, dates, booleans, regexes, and
 * arrays
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @returns {boolean} are `a` and `b` equal?
 */
function eq(a, b) {
    // Some elements of this function come from underscore
    // (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //
    // https://github.com/jashkenas/underscore/blob/master/underscore.js
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
        return a !== 0 || 1 / a == 1 / b;
    }
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) {
        return a === b;
    }
    var type = Object.prototype.toString.call(a);
    if (type !== Object.prototype.toString.call(b)) {
        return false;
    }
    switch (type) {
        case '[object String]':
            return a == String(b);
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
            // other numeric values.
            return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a == +b;
        // RegExps are compared by their source patterns and flags.
        case '[object RegExp]':
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') {
        return false;
    }
    if (type === '[object Array]') {
        if (a.length !== b.length) {
            return false;
        }
    }
    var i;
    for (i in b) {
        if (b.hasOwnProperty(i)) {
            if (!eq(a[i], b[i])) {
                return false;
            }
        }
    }
    for (i in a) {
        if (a.hasOwnProperty(i)) {
            if (!eq(a[i], b[i])) {
                return false;
            }
        }
    }
    return true;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* unused harmony export expose */
/* unused harmony export extend */
/* harmony export (immutable) */ __webpack_exports__["d"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["i"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNone;
/* harmony export (immutable) */ __webpack_exports__["g"] = merge;
/* harmony export (immutable) */ __webpack_exports__["b"] = deepGet;
/* harmony export (immutable) */ __webpack_exports__["c"] = deepSet;
/* harmony export (immutable) */ __webpack_exports__["h"] = objectValues;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable valid-jsdoc */
/**
 * Clones a value. If the value is an object, a deeply nested clone will be
 * created.
 *
 * Traverses all object properties (but not prototype properties).
 *
 * @export
 * @param {*} obj
 * @returns {*} Clone of the input `obj`
 */
function clone(obj) {
    if (obj === undefined || obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return obj;
    }
    var dup = void 0;
    var type = Object.prototype.toString.call(obj);
    if (type === '[object Date]') {
        dup = new Date();
        dup.setTime(obj.getTime());
    } else if (type === '[object RegExp]') {
        dup = obj.constructor(obj);
    } else if (type === '[object Array]') {
        dup = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            if (obj.hasOwnProperty(i)) {
                dup.push(clone(obj[i]));
            }
        }
    } else {
        var val = void 0;
        dup = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                val = obj[key];
                if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
                    val = clone(val);
                }
                dup[key] = val;
            }
        }
    }
    return dup;
}
/**
 * Expose properties and methods from one object on another.
 *
 * Methods will be called on `source` and will maintain `source` as the context.
 *
 * @export
 * @param {*} destination
 * @param {*} source
 */
function expose(destination, source) {
    var properties = void 0;
    if (arguments.length > 2) {
        properties = Array.prototype.slice.call(arguments, 2);
    } else {
        properties = Object.keys(source);
    }
    properties.forEach(function (p) {
        if (typeof source[p] === 'function') {
            destination[p] = function () {
                return source[p].apply(source, arguments);
            };
        } else {
            destination[p] = source[p];
        }
    });
}
/**
 * Extend an object with the properties of one or more other objects.
 *
 * @export
 * @param {*} destination
 * @param {...any[]} sources
 * @returns {any}
 */
function extend(destination) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (source) {
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                destination[p] = source[p];
            }
        }
    });
    return destination;
}
/**
 * Checks whether an object is an instance of an `Array`
 *
 * @export
 * @param {*} obj
 * @returns {boolean}
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
/**
 * Converts an object to an `Array` if it's not already.
 *
 * @export
 * @param {*} obj
 * @returns {any[]}
 */
function toArray(obj) {
    if (isNone(obj)) {
        return [];
    } else {
        return isArray(obj) ? obj : [obj];
    }
}
/**
 * Checks whether a value is a non-null object
 *
 * @export
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}
/**
 * Checks whether an object is null or undefined
 *
 * @export
 * @param {*} obj
 * @returns {boolean}
 */
function isNone(obj) {
    return obj === undefined || obj === null;
}
/**
 * Merges properties from other objects into a base object. Properties that
 * resolve to `undefined` will not overwrite properties on the base object
 * that already exist.
 *
 * @export
 * @param {*} base
 * @param {...any[]} sources
 * @returns {*}
 */
function merge(object) {
    for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
    }

    sources.forEach(function (source) {
        Object.keys(source).forEach(function (field) {
            if (source.hasOwnProperty(field)) {
                var value = source[field];
                if (!(value === undefined && object[field] !== undefined)) {
                    object[field] = value;
                }
            }
        });
    });
    return object;
}
/**
 * Retrieves a value from a nested path on an object.
 *
 * Returns any falsy value encountered while traversing the path.
 *
 * @export
 * @param {*} obj
 * @param {string[]} path
 * @returns {*}
 */
function deepGet(obj, path) {
    var index = -1;
    var result = obj;
    while (++index < path.length) {
        result = result[path[index]];
        if (!result) {
            return result;
        }
    }
    return result;
}
/**
 * Sets a value on an object at a nested path.
 *
 * This function will create objects along the path if necessary to allow
 * setting a deeply nested value.
 *
 * Returns `false` only if the current value is already strictly equal to the
 * requested `value` argument. Otherwise returns `true`.
 *
 * @export
 * @param {*} obj
 * @param {string[]} path
 * @param {*} value
 * @returns {boolean} was the value was actually changed?
 */
function deepSet(obj, path, value) {
    var ptr = obj;
    var prop = path.pop();
    var segment = void 0;
    for (var i = 0, l = path.length; i < l; i++) {
        segment = path[i];
        if (ptr[segment] === undefined) {
            ptr[segment] = typeof segment === 'number' ? [] : {};
        }
        ptr = ptr[segment];
    }
    if (ptr[prop] === value) {
        return false;
    } else {
        ptr[prop] = value;
        return true;
    }
}
/**
 * Find an array of values that correspond to the keys of an object.
 *
 * This is a ponyfill for `Object.values`, which is still experimental.
 *
 * @export
 * @param {*} obj
 * @returns {any[]}
 */
function objectValues(obj) {
    if (Object.values) {
        return Object.values(obj);
    } else {
        return Object.keys(obj).map(function (k) {
            return obj[k];
        });
    }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export capitalize */
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
/* unused harmony export decamelize */
/* harmony export (immutable) */ __webpack_exports__["b"] = dasherize;
/* unused harmony export underscore */
/**
 * Uppercase the first letter of a string, but don't change the remainder.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Convert underscored, dasherized, or space-delimited words into
 * lowerCamelCase.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    return str.replace(/(\-|\_|\.|\s)+(.)?/g, function (match, separator, chr) {
        return chr ? chr.toUpperCase() : '';
    }).replace(/(^|\/)([A-Z])/g, function (match) {
        return match.toLowerCase();
    });
}
/**
 * Converts a camelized string into all lowercase separated by underscores.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
function decamelize(str) {
    return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
}
/**
 * Dasherize words that are underscored, space-delimited, or camelCased.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
function dasherize(str) {
    return decamelize(str).replace(/[ _]/g, '-');
}
/**
 * Underscore words that are dasherized, space-delimited, or camelCased.
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
function underscore(str) {
    return str.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/\-|\s+/g, '_').toLowerCase();
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var lut = [];
for (var i = 0; i < 256; i++) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
/**
 * `uuid` generates a Version 4 UUID using Jeff Ward's high performance
 * generator.
 *
 * @export
 * @returns {string}
 */
function uuid() {
  var d0 = Math.random() * 0xffffffff | 0;
  var d1 = Math.random() * 0xffffffff | 0;
  var d2 = Math.random() * 0xffffffff | 0;
  var d3 = Math.random() * 0xffffffff | 0;
  return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_processor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * `TaskQueue` is a FIFO queue of asynchronous tasks that should be
 * performed sequentially.
 *
 * Tasks are added to the queue with `push`. Each task will be processed by
 * calling its `process` method.
 *
 * By default, task queues will be processed automatically, as soon as tasks
 * are pushed to them. This can be overridden by setting the `autoProcess`
 * setting to `false` and calling `process` when you'd like to start
 * processing.
 *
 * @export
 * @class TaskQueue
 * @implements {Evented}
 */
var TaskQueue = function () {
    /**
     * Creates an instance of `TaskQueue`.
     *
     * @param {Performer} target
     * @param {TaskQueueOptions} [options={}]
     *
     * @memberOf TaskQueue
     */
    function TaskQueue(target) {
        var _this = this;

        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, TaskQueue);

        Object(__WEBPACK_IMPORTED_MODULE_3__orbit_utils__["a" /* assert */])('TaskQueue requires Orbit.Promise to be defined', __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise);
        this._performer = target;
        this._name = settings.name;
        this._bucket = settings.bucket;
        this.autoProcess = settings.autoProcess === undefined ? true : settings.autoProcess;
        if (this._bucket) {
            Object(__WEBPACK_IMPORTED_MODULE_3__orbit_utils__["a" /* assert */])('TaskQueue requires a name if it has a bucket', !!this._name);
        }
        this._reify().then(function () {
            if (_this.length > 0 && _this.autoProcess) {
                _this.process();
            }
        });
    }
    /**
     * Name used for tracking / debugging this queue.
     *
     * @readonly
     * @type {string}
     * @memberOf TaskQueue
     */


    _createClass(TaskQueue, [{
        key: "push",

        /**
         * Push a new task onto the end of the queue.
         *
         * If `autoProcess` is enabled, this will automatically trigger processing of
         * the queue.
         *
         * Returns a promise that resolves when the pushed task has been processed.
         *
         * @param {Task} task
         * @returns {Promise<void>}
         *
         * @memberOf TaskQueue
         */
        value: function push(task) {
            var _this2 = this;

            var processor = new __WEBPACK_IMPORTED_MODULE_1__task_processor__["a" /* default */](this._performer, task);
            return this._reified.then(function () {
                _this2._tasks.push(task);
                _this2._processors.push(processor);
                return _this2._persist();
            }).then(function () {
                if (_this2.autoProcess) {
                    return _this2.process().then(function () {
                        return processor.settle();
                    });
                } else {
                    return processor.settle();
                }
            });
        }
        /**
         * Cancels and re-tries processing the current task.
         *
         * @returns {Promise<void>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "retry",
        value: function retry() {
            var _this3 = this;

            return this._reified.then(function () {
                _this3._cancel();
                _this3.currentProcessor.reset();
                return _this3._persist();
            }).then(function () {
                return _this3.process();
            });
        }
        /**
         * Cancels and discards the current task and proceeds to process the next
         * task.
         *
         * @returns {Promise<void>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "skip",
        value: function skip() {
            var _this4 = this;

            return this._reified.then(function () {
                _this4._cancel();
                _this4._tasks.shift();
                _this4._processors.shift();
                return _this4._persist();
            }).then(function () {
                return _this4.process();
            });
        }
        /**
         * Cancels the current task and completely clears the queue.
         *
         * @returns {Promise<void>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "clear",
        value: function clear() {
            var _this5 = this;

            return this._reified.then(function () {
                _this5._cancel();
                _this5._tasks = [];
                _this5._processors = [];
                return _this5._persist();
            }).then(function () {
                return _this5.process();
            });
        }
        /**
         * Cancels the current task and removes it, but does not continue processing.
         *
         * @returns {Promise<Task>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "shift",
        value: function shift() {
            var _this6 = this;

            var task = void 0;
            return this._reified.then(function () {
                _this6._cancel();
                task = _this6._tasks.shift();
                _this6._processors.shift();
                return _this6._persist();
            }).then(function () {
                return task;
            });
        }
        /**
         * Cancels processing the current task and inserts a new task at the beginning
         * of the queue. This new task will be processed next.
         *
         * @param {Task} task
         * @returns {Promise<void>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "unshift",
        value: function unshift(task) {
            var _this7 = this;

            return this._reified.then(function () {
                _this7._cancel();
                _this7._tasks.unshift(task);
                _this7._processors.unshift(new __WEBPACK_IMPORTED_MODULE_1__task_processor__["a" /* default */](_this7._performer, task));
                return _this7._persist();
            });
        }
        /**
         * Processes all the tasks in the queue. Resolves when the queue is empty.
         *
         * @returns {Promise<any>}
         *
         * @memberOf TaskQueue
         */

    }, {
        key: "process",
        value: function process() {
            var _this8 = this;

            return this._reified.then(function () {
                var resolution = _this8._resolution;
                if (!resolution) {
                    if (_this8._tasks.length === 0) {
                        resolution = __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
                        _this8._complete();
                    } else {
                        _this8._error = null;
                        _this8._resolution = resolution = new __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise(function (resolve, reject) {
                            _this8._resolve = resolve;
                            _this8._reject = reject;
                        });
                        _this8._settleEach(resolution);
                    }
                }
                return resolution;
            });
        }
    }, {
        key: "_complete",
        value: function _complete() {
            if (this._resolve) {
                this._resolve();
            }
            this._resolve = null;
            this._reject = null;
            this._error = null;
            this._resolution = null;
            this.emit('complete');
        }
    }, {
        key: "_fail",
        value: function _fail(task, e) {
            if (this._reject) {
                this._reject(e);
            }
            this._resolve = null;
            this._reject = null;
            this._error = e;
            this._resolution = null;
            this.emit('fail', task, e);
        }
    }, {
        key: "_cancel",
        value: function _cancel() {
            this._error = null;
            this._resolution = null;
        }
    }, {
        key: "_settleEach",
        value: function _settleEach(resolution) {
            var _this9 = this;

            if (this._tasks.length === 0) {
                this._complete();
            } else {
                var task = this._tasks[0];
                var processor = this._processors[0];
                this.emit('beforeTask', task);
                processor.process().then(function (result) {
                    if (resolution === _this9._resolution) {
                        _this9._tasks.shift();
                        _this9._processors.shift();
                        _this9._persist().then(function () {
                            _this9.emit('task', task);
                            _this9._settleEach(resolution);
                        });
                    }
                }).catch(function (e) {
                    if (resolution === _this9._resolution) {
                        _this9._fail(task, e);
                    }
                });
            }
        }
    }, {
        key: "_reify",
        value: function _reify() {
            var _this10 = this;

            this._tasks = [];
            this._processors = [];
            if (this._bucket) {
                this._reified = this._bucket.getItem(this._name).then(function (tasks) {
                    if (tasks) {
                        _this10._tasks = tasks;
                        _this10._processors = tasks.map(function (task) {
                            return new __WEBPACK_IMPORTED_MODULE_1__task_processor__["a" /* default */](_this10._performer, task);
                        });
                    }
                });
            } else {
                this._reified = __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
            }
            return this._reified;
        }
    }, {
        key: "_persist",
        value: function _persist() {
            this.emit('change');
            if (this._bucket) {
                return this._bucket.setItem(this._name, this._tasks);
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
            }
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
        /**
         * The object which will `perform` the tasks in this queue.
         *
         * @readonly
         * @type {Performer}
         * @memberOf TaskQueue
         */

    }, {
        key: "performer",
        get: function get() {
            return this._performer;
        }
        /**
         * A bucket used to persist the state of this queue.
         *
         * @readonly
         * @type {Bucket}
         * @memberOf TaskQueue
         */

    }, {
        key: "bucket",
        get: function get() {
            return this._bucket;
        }
        /**
         * The number of tasks in the queue.
         *
         * @readonly
         * @type {number}
         * @memberOf TaskQueue
         */

    }, {
        key: "length",
        get: function get() {
            return this._tasks ? this._tasks.length : 0;
        }
        /**
         * The tasks in the queue.
         *
         * @readonly
         * @type {Task[]}
         * @memberOf TaskQueue
         */

    }, {
        key: "entries",
        get: function get() {
            return this._tasks;
        }
        /**
         * The current task being processed (if actively processing), or the next
         * task to be processed (if not actively processing).
         *
         * @readonly
         * @type {Task}
         * @memberOf TaskQueue
         */

    }, {
        key: "current",
        get: function get() {
            return this._tasks && this._tasks[0];
        }
        /**
         * The processor wrapper that is processing the current task (or next task,
         * if none are being processed).
         *
         * @readonly
         * @type {TaskProcessor}
         * @memberOf TaskQueue
         */

    }, {
        key: "currentProcessor",
        get: function get() {
            return this._processors && this._processors[0];
        }
        /**
         * If an error occurs while processing a task, processing will be halted, the
         * `fail` event will be emitted, and this property will reflect the error
         * encountered.
         *
         * @readonly
         * @type {Error}
         * @memberOf TaskQueue
         */

    }, {
        key: "error",
        get: function get() {
            return this._error;
        }
        /**
         * Is the queue empty?
         *
         * @readonly
         * @type {boolean}
         * @memberOf TaskQueue
         */

    }, {
        key: "empty",
        get: function get() {
            return this.length === 0;
        }
        /**
         * Is the queue actively processing a task?
         *
         * @readonly
         * @type {boolean}
         * @memberOf TaskQueue
         */

    }, {
        key: "processing",
        get: function get() {
            var processor = this.currentProcessor;
            return processor !== undefined && processor.started && !processor.settled;
        }
        /**
         * Resolves when the queue has been fully reified from its associated bucket,
         * if applicable.
         *
         * @readonly
         * @type {Promise<void>}
         * @memberOf TaskQueue
         */

    }, {
        key: "reified",
        get: function get() {
            return this._reified;
        }
    }]);

    return TaskQueue;
}();
TaskQueue = __decorate([__WEBPACK_IMPORTED_MODULE_2__evented__["a" /* default */]], TaskQueue);
/* harmony default export */ __webpack_exports__["a"] = (TaskQueue);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Bucket */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evented__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Buckets can persist state. The base `Bucket` class is abstract and should be
 * extended to created buckets with different persistence strategies.
 *
 * Buckets have a simple map-like interface with methods like `getItem`,
 * `setItem`, and `removeItem`. All methods return promises to enable usage with
 * asynchronous stores like IndexedDB.
 *
 * Buckets can be assigned a unique `namespace` in order to avoid collisions.
 *
 * Buckets can be assigned a version, and can be "upgraded" to a new version.
 * The upgrade process allows buckets to migrate their data between versions.
 *
 * @export
 * @abstract
 * @class Bucket
 * @implements {Evented}
 */
var Bucket = function () {
    /**
     * Creates an instance of `Bucket`.
     *
     * @param {BucketSettings} [settings={}]
     *
     * @memberOf Bucket
     */
    function Bucket() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Bucket);

        if (settings.version === undefined) {
            settings.version = 1;
        }
        settings.namespace = settings.namespace || 'orbit-bucket';
        this._applySettings(settings);
    }
    /**
     * Name used for tracking and debugging a bucket instance.
     *
     * @readonly
     * @type {string}
     * @memberOf Bucket
     */


    _createClass(Bucket, [{
        key: "upgrade",

        /**
         * Upgrades Bucket to a new version with new settings.
         *
         * Settings, beyond `version`, are bucket-specific.
         *
         * @param {BucketSettings} settings
         * @returns {Promise<void>}
         * @memberOf Bucket
          */
        value: function upgrade() {
            var _this = this;

            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (settings.version === undefined) {
                settings.version = this._version + 1;
            }
            return this._applySettings(settings).then(function () {
                return _this.emit('upgrade', _this._version);
            });
        }
        /**
         * Applies settings passed from a `constructor` or `upgrade`.
         *
         * @param {BucketSettings} settings
         * @returns {Promise<void>}
         * @memberOf Bucket
         */

    }, {
        key: "_applySettings",
        value: function _applySettings(settings) {
            if (settings.name) {
                this._name = settings.name;
            }
            if (settings.namespace) {
                this._namespace = settings.namespace;
            }
            this._version = settings.version;
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
        /**
         * The namespace used by the bucket when accessing any items.
         *
         * This is used to distinguish one bucket's contents from another.
         *
         * @readonly
         * @type {string}
         * @memberOf Bucket
         */

    }, {
        key: "namespace",
        get: function get() {
            return this._namespace;
        }
        /**
         * The current version of the bucket.
         *
         * To change versions, `upgrade` should be invoked.
         *
         * @readonly
         * @type {number}
         * @memberOf Bucket
         */

    }, {
        key: "version",
        get: function get() {
            return this._version;
        }
    }]);

    return Bucket;
}();
Bucket = __decorate([__WEBPACK_IMPORTED_MODULE_1__evented__["a" /* default */]], Bucket);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exception__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Logs track a series of unique events that have occurred. Each event is
 * tracked based on its unique id. The log only tracks the ids but currently
 * does not track any details.
 *
 * Logs can automatically be persisted by assigning them a bucket.
 *
 * @export
 * @class Log
 * @implements {Evented}
 */
var Log = function () {
    function Log() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Log);

        this._name = options.name;
        this._bucket = options.bucket;
        if (this._bucket) {
            Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["a" /* assert */])('Log requires a name if it has a bucket', !!this._name);
        }
        this._reify(options.data);
    }

    _createClass(Log, [{
        key: "append",
        value: function append() {
            var _this = this;

            for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
                ids[_key] = arguments[_key];
            }

            return this.reified.then(function () {
                Array.prototype.push.apply(_this._data, ids);
                return _this._persist();
            }).then(function () {
                _this.emit('append', ids);
            });
        }
    }, {
        key: "before",
        value: function before(id) {
            var relativePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var index = this._data.indexOf(id);
            if (index === -1) {
                throw new __WEBPACK_IMPORTED_MODULE_3__exception__["b" /* NotLoggedException */](id);
            }
            var position = index + relativePosition;
            if (position < 0 || position >= this._data.length) {
                throw new __WEBPACK_IMPORTED_MODULE_3__exception__["c" /* OutOfRangeException */](position);
            }
            return this._data.slice(0, position);
        }
    }, {
        key: "after",
        value: function after(id) {
            var relativePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var index = this._data.indexOf(id);
            if (index === -1) {
                throw new __WEBPACK_IMPORTED_MODULE_3__exception__["b" /* NotLoggedException */](id);
            }
            var position = index + 1 + relativePosition;
            if (position < 0 || position > this._data.length) {
                throw new __WEBPACK_IMPORTED_MODULE_3__exception__["c" /* OutOfRangeException */](position);
            }
            return this._data.slice(position);
        }
    }, {
        key: "truncate",
        value: function truncate(id) {
            var _this2 = this;

            var relativePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var removed = void 0;
            return this.reified.then(function () {
                var index = _this2._data.indexOf(id);
                if (index === -1) {
                    throw new __WEBPACK_IMPORTED_MODULE_3__exception__["b" /* NotLoggedException */](id);
                }
                var position = index + relativePosition;
                if (position < 0 || position > _this2._data.length) {
                    throw new __WEBPACK_IMPORTED_MODULE_3__exception__["c" /* OutOfRangeException */](position);
                }
                if (position === _this2._data.length) {
                    removed = _this2._data;
                    _this2._data = [];
                } else {
                    removed = _this2._data.slice(0, position);
                    _this2._data = _this2._data.slice(position);
                }
                return _this2._persist();
            }).then(function () {
                _this2.emit('truncate', id, relativePosition, removed);
            });
        }
    }, {
        key: "rollback",
        value: function rollback(id) {
            var _this3 = this;

            var relativePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var removed = void 0;
            return this.reified.then(function () {
                var index = _this3._data.indexOf(id);
                if (index === -1) {
                    throw new __WEBPACK_IMPORTED_MODULE_3__exception__["b" /* NotLoggedException */](id);
                }
                var position = index + 1 + relativePosition;
                if (position < 0 || position > _this3._data.length) {
                    throw new __WEBPACK_IMPORTED_MODULE_3__exception__["c" /* OutOfRangeException */](position);
                }
                removed = _this3._data.slice(position);
                _this3._data = _this3._data.slice(0, position);
                return _this3._persist();
            }).then(function () {
                _this3.emit('rollback', id, relativePosition, removed);
            });
        }
    }, {
        key: "clear",
        value: function clear() {
            var _this4 = this;

            var clearedData = void 0;
            return this.reified.then(function () {
                clearedData = _this4._data;
                _this4._data = [];
                return _this4._persist();
            }).then(function () {
                return _this4.emit('clear', clearedData);
            });
        }
    }, {
        key: "contains",
        value: function contains(id) {
            return this._data.indexOf(id) > -1;
        }
    }, {
        key: "_persist",
        value: function _persist() {
            this.emit('change');
            if (this.bucket) {
                return this._bucket.setItem(this.name, this._data);
            } else {
                return __WEBPACK_IMPORTED_MODULE_1__main__["a" /* default */].Promise.resolve();
            }
        }
    }, {
        key: "_reify",
        value: function _reify(data) {
            var _this5 = this;

            if (!data && this._bucket) {
                this.reified = this._bucket.getItem(this._name).then(function (bucketData) {
                    return _this5._initData(bucketData);
                });
            } else {
                this._initData(data);
                this.reified = __WEBPACK_IMPORTED_MODULE_1__main__["a" /* default */].Promise.resolve();
            }
        }
    }, {
        key: "_initData",
        value: function _initData(data) {
            if (data) {
                this._data = data;
            } else {
                this._data = [];
            }
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }, {
        key: "bucket",
        get: function get() {
            return this._bucket;
        }
    }, {
        key: "head",
        get: function get() {
            return this._data[this._data.length - 1];
        }
    }, {
        key: "entries",
        get: function get() {
            return this._data;
        }
    }, {
        key: "length",
        get: function get() {
            return this._data.length;
        }
    }]);

    return Log;
}();
Log = __decorate([__WEBPACK_IMPORTED_MODULE_2__evented__["a" /* default */]], Log);
/* harmony default export */ __webpack_exports__["a"] = (Log);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Maintains a map between records' ids and keys.
 *
 * @export
 * @class KeyMap
 */

var KeyMap = function () {
    function KeyMap() {
        _classCallCheck(this, KeyMap);

        this.reset();
    }
    /**
     * Resets the contents of the key map.
     *
     * @memberof KeyMap
     */


    _createClass(KeyMap, [{
        key: 'reset',
        value: function reset() {
            this._idsToKeys = {};
            this._keysToIds = {};
        }
        /**
         * Return a key value given a model type, key name, and id.
         *
         * @param {string} type
         * @param {string} keyName
         * @param {string} idValue
         * @returns {string}
         *
         * @memberOf KeyMap
         */

    }, {
        key: 'idToKey',
        value: function idToKey(type, keyName, idValue) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(this._idsToKeys, [type, keyName, idValue]);
        }
        /**
         * Return an id value given a model type, key name, and key value.
         *
         * @param {string} type
         * @param {string} keyName
         * @param {string} keyValue
         * @returns {string}
         *
         * @memberOf KeyMap
         */

    }, {
        key: 'keyToId',
        value: function keyToId(type, keyName, keyValue) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(this._keysToIds, [type, keyName, keyValue]);
        }
        /**
         * Store the id and key values of a record in this key map.
         *
         * @param {Record} record
         * @returns {void}
         *
         * @memberOf KeyMap
         */

    }, {
        key: 'pushRecord',
        value: function pushRecord(record) {
            var _this = this;

            var type = record.type,
                id = record.id,
                keys = record.keys;

            if (!keys || !id) {
                return;
            }
            Object.keys(keys).forEach(function (keyName) {
                var keyValue = keys[keyName];
                if (keyValue) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(_this._idsToKeys, [type, keyName, id], keyValue);
                    Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(_this._keysToIds, [type, keyName, keyValue], id);
                }
            });
        }
        /**
         * Given a record, find the cached id if it exists.
         *
         * @param {string} type
         * @param {Dict<string>} keys
         * @returns {string}
         *
         * @memberOf KeyMap
         */

    }, {
        key: 'idFromKeys',
        value: function idFromKeys(type, keys) {
            var _this2 = this;

            var keyNames = Object.keys(keys);
            return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["h" /* firstResult */])(keyNames, function (keyName) {
                var keyValue = keys[keyName];
                if (keyValue) {
                    return _this2.keyToId(type, keyName, keyValue);
                }
            });
        }
    }]);

    return KeyMap;
}();



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = coalesceRecordOperations;
/* harmony export (immutable) */ __webpack_exports__["b"] = recordDiffs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__record__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);


function markOperationToDelete(operation) {
    var o = operation;
    o._deleted = true;
}
function isOperationMarkedToDelete(operation) {
    var o = operation;
    return o._deleted === true;
}
function mergeOperations(superceded, superceding, consecutiveOps) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__record__["b" /* equalRecordIdentities */])(superceded.record, superceding.record)) {
        if (superceding.op === 'removeRecord') {
            markOperationToDelete(superceded);
            if (superceded.op === 'addRecord') {
                markOperationToDelete(superceding);
            }
        } else if (!isOperationMarkedToDelete(superceding) && (consecutiveOps || superceding.op === 'replaceAttribute')) {
            if (isReplaceFieldOp(superceded.op) && isReplaceFieldOp(superceding.op)) {
                if (superceded.op === 'replaceAttribute' && superceding.op === 'replaceAttribute' && superceded.attribute === superceding.attribute) {
                    markOperationToDelete(superceded);
                } else if (superceded.op === 'replaceRelatedRecord' && superceding.op === 'replaceRelatedRecord' && superceded.relationship === superceding.relationship) {
                    markOperationToDelete(superceded);
                } else if (superceded.op === 'replaceRelatedRecords' && superceding.op === 'replaceRelatedRecords' && superceded.relationship === superceding.relationship) {
                    markOperationToDelete(superceded);
                } else {
                    if (superceded.op === 'replaceAttribute') {
                        updateRecordReplaceAttribute(superceded.record, superceded.attribute, superceded.value);
                        delete superceded.attribute;
                        delete superceded.value;
                    } else if (superceded.op === 'replaceRelatedRecord') {
                        updateRecordReplaceHasOne(superceded.record, superceded.relationship, superceded.relatedRecord);
                        delete superceded.relationship;
                        delete superceded.relatedRecord;
                    } else if (superceded.op === 'replaceRelatedRecords') {
                        updateRecordReplaceHasMany(superceded.record, superceded.relationship, superceded.relatedRecords);
                        delete superceded.relationship;
                        delete superceded.relatedRecords;
                    }
                    if (superceding.op === 'replaceAttribute') {
                        updateRecordReplaceAttribute(superceded.record, superceding.attribute, superceding.value);
                    } else if (superceding.op === 'replaceRelatedRecord') {
                        updateRecordReplaceHasOne(superceded.record, superceding.relationship, superceding.relatedRecord);
                    } else if (superceding.op === 'replaceRelatedRecords') {
                        updateRecordReplaceHasMany(superceded.record, superceding.relationship, superceding.relatedRecords);
                    }
                    superceded.op = 'replaceRecord';
                    markOperationToDelete(superceding);
                }
            } else if ((superceded.op === 'addRecord' || superceded.op === 'replaceRecord') && isReplaceFieldOp(superceding.op)) {
                if (superceding.op === 'replaceAttribute') {
                    updateRecordReplaceAttribute(superceded.record, superceding.attribute, superceding.value);
                } else if (superceding.op === 'replaceRelatedRecord') {
                    updateRecordReplaceHasOne(superceded.record, superceding.relationship, superceding.relatedRecord);
                } else if (superceding.op === 'replaceRelatedRecords') {
                    updateRecordReplaceHasMany(superceded.record, superceding.relationship, superceding.relatedRecords);
                }
                markOperationToDelete(superceding);
            } else if (superceding.op === 'addToRelatedRecords') {
                if (superceded.op === 'addRecord') {
                    updateRecordAddToHasMany(superceded.record, superceding.relationship, superceding.relatedRecord);
                    markOperationToDelete(superceding);
                } else if (superceded.op === 'replaceRecord') {
                    if (superceded.record.relationships && superceded.record.relationships[superceding.relationship] && superceded.record.relationships[superceding.relationship].data) {
                        updateRecordAddToHasMany(superceded.record, superceding.relationship, superceding.relatedRecord);
                        markOperationToDelete(superceding);
                    }
                }
            } else if (superceding.op === 'removeFromRelatedRecords') {
                if (superceded.op === 'addToRelatedRecords' && superceded.relationship === superceding.relationship && Object(__WEBPACK_IMPORTED_MODULE_0__record__["b" /* equalRecordIdentities */])(superceded.relatedRecord, superceding.relatedRecord)) {
                    markOperationToDelete(superceded);
                    markOperationToDelete(superceding);
                } else if (superceded.op === 'addRecord' || superceded.op === 'replaceRecord') {
                    if (superceded.record.relationships && superceded.record.relationships[superceding.relationship] && superceded.record.relationships[superceding.relationship].data) {
                        updateRecordRemoveFromHasMany(superceded.record, superceding.relationship, superceding.relatedRecord);
                        markOperationToDelete(superceding);
                    }
                }
            }
        }
    }
}
function isReplaceFieldOp(op) {
    return op === 'replaceAttribute' || op === 'replaceRelatedRecord' || op === 'replaceRelatedRecords';
}
function updateRecordReplaceAttribute(record, attribute, value) {
    record.attributes = record.attributes || {};
    record.attributes[attribute] = value;
}
function updateRecordReplaceHasOne(record, relationship, relatedRecord) {
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', relationship, 'data'], Object(__WEBPACK_IMPORTED_MODULE_0__record__["a" /* cloneRecordIdentity */])(relatedRecord));
}
function updateRecordReplaceHasMany(record, relationship, relatedRecords) {
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', relationship, 'data'], relatedRecords.map(__WEBPACK_IMPORTED_MODULE_0__record__["a" /* cloneRecordIdentity */]));
}
function updateRecordAddToHasMany(record, relationship, relatedRecord) {
    var data = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["e" /* deepGet */])(record, ['relationships', relationship, 'data']) || [];
    data.push(Object(__WEBPACK_IMPORTED_MODULE_0__record__["a" /* cloneRecordIdentity */])(relatedRecord));
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', relationship, 'data'], data);
}
function updateRecordRemoveFromHasMany(record, relationship, relatedRecord) {
    var data = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["e" /* deepGet */])(record, ['relationships', relationship, 'data']);
    if (data) {
        for (var i = 0, l = data.length; i < l; i++) {
            var r = data[i];
            if (Object(__WEBPACK_IMPORTED_MODULE_0__record__["b" /* equalRecordIdentities */])(r, relatedRecord)) {
                data.splice(i, 1);
                break;
            }
        }
    }
}
/**
 * Coalesces operations into a minimal set of equivalent operations.
 *
 * This method respects the order of the operations array and does not allow
 * reordering of operations that affect relationships.
 *
 * @export
 * @param {RecordOperation[]} operations
 * @returns {RecordOperation[]}
 */
function coalesceRecordOperations(operations) {
    for (var i = 0, l = operations.length; i < l; i++) {
        var currentOp = operations[i];
        var consecutiveOps = true;
        for (var j = i + 1; j < l; j++) {
            var nextOp = operations[j];
            mergeOperations(currentOp, nextOp, consecutiveOps);
            if (isOperationMarkedToDelete(currentOp)) {
                break;
            } else if (!isOperationMarkedToDelete(nextOp)) {
                consecutiveOps = false;
            }
        }
    }
    return operations.filter(function (o) {
        return !isOperationMarkedToDelete(o);
    });
}
/**
 * Determine the differences between a record and its updated version in terms
 * of a set of operations.
 *
 * @export
 * @param {Record} record
 * @param {Record} updatedRecord
 * @returns {RecordOperation[]}
 */
function recordDiffs(record, updatedRecord) {
    var diffs = [];
    if (record && updatedRecord) {
        var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_0__record__["a" /* cloneRecordIdentity */])(record);
        if (updatedRecord.attributes) {
            Object.keys(updatedRecord.attributes).forEach(function (attribute) {
                var value = updatedRecord.attributes[attribute];
                if (record.attributes === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["g" /* eq */])(record.attributes[attribute], value)) {
                    var op = {
                        op: 'replaceAttribute',
                        record: recordIdentity,
                        attribute: attribute,
                        value: value
                    };
                    diffs.push(op);
                }
            });
        }
        if (updatedRecord.keys) {
            Object.keys(updatedRecord.keys).forEach(function (key) {
                var value = updatedRecord.keys[key];
                if (record.keys === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["g" /* eq */])(record.keys[key], value)) {
                    var op = {
                        op: 'replaceKey',
                        record: recordIdentity,
                        key: key,
                        value: value
                    };
                    diffs.push(op);
                }
            });
        }
        // TODO - handle relationships
    }
    return diffs;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exception__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_core__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable valid-jsdoc */



/**
 * A `Schema` defines the models allowed in a source, including their keys,
 * attributes, and relationships. A single schema may be shared across multiple
 * sources.
 *
 * @export
 * @class Schema
 * @implements {Evented}
 */
var Schema = function () {
    /**
     * Create a new Schema.
     *
     * @constructor
     * @param {SchemaSettings} [settings={}] Optional. Configuration settings.
     * @param {Integer}        [settings.version]       Optional. Schema version. Defaults to 1.
     * @param {Object}   [settings.models]        Optional. Schemas for individual models supported by this schema.
     * @param {Function} [settings.generateId]    Optional. Function used to generate IDs.
     * @param {Function} [settings.pluralize]     Optional. Function used to pluralize names.
     * @param {Function} [settings.singularize]   Optional. Function used to singularize names.
     */
    function Schema() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Schema);

        if (settings.version === undefined) {
            settings.version = 1;
        }
        if (settings.models === undefined) {
            settings.models = {};
        }
        this._applySettings(settings);
    }
    /**
     * Version
     * @return {Integer} Version of schema.
     */


    _createClass(Schema, [{
        key: "upgrade",

        /**
         * Upgrades Schema to a new version with new settings.
         *
         * Emits the `upgrade` event to cue sources to upgrade their data.
         *
         * @param {SchemaSettings} [settings={}]          Settings.
         * @param {Integer}        [settings.version]     Optional. Schema version. Defaults to the current version + 1.
         * @param {Object}         [settings.models]      Schemas for individual models supported by this schema.
         * @param {Function}       [settings.pluralize]   Optional. Function used to pluralize names.
         * @param {Function}       [settings.singularize] Optional. Function used to singularize names.
         */
        value: function upgrade() {
            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (settings.version === undefined) {
                settings.version = this._version + 1;
            }
            this._applySettings(settings);
            this.emit('upgrade', this._version);
        }
        /**
         * Registers a complete set of settings
         *
         * @private
         * @param {Object} settings Settings passed into `constructor` or `upgrade`.
         */

    }, {
        key: "_applySettings",
        value: function _applySettings(settings) {
            // Version
            this._version = settings.version;
            // Allow overrides
            if (settings.generateId) {
                this.generateId = settings.generateId;
            }
            if (settings.pluralize) {
                this.pluralize = settings.pluralize;
            }
            if (settings.singularize) {
                this.singularize = settings.singularize;
            }
            // Register model schemas
            if (settings.models) {
                this._models = settings.models;
            }
        }
        /**
         * Generate an id for a given model type.
         *
         * @param {String} type Optional. Type of the model for which the ID is being generated.
         * @return {String} Generated model ID
         */

    }, {
        key: "generateId",
        value: function generateId(type) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].uuid();
        }
        /**
         * A naive pluralization method.
         *
         * Override with a more robust general purpose inflector or provide an
         * inflector tailored to the vocabularly of your application.
         *
         * @param  {String} word
         * @return {String} plural form of `word`
         */

    }, {
        key: "pluralize",
        value: function pluralize(word) {
            return word + 's';
        }
        /**
         * A naive singularization method.
         *
         * Override with a more robust general purpose inflector or provide an
         * inflector tailored to the vocabularly of your application.
         *
         * @param  {String} word
         * @return {String} singular form of `word`
         */

    }, {
        key: "singularize",
        value: function singularize(word) {
            if (word.lastIndexOf('s') === word.length - 1) {
                return word.substr(0, word.length - 1);
            } else {
                return word;
            }
        }
    }, {
        key: "initializeRecord",
        value: function initializeRecord(record) {
            if (record.id === undefined) {
                record.id = this.generateId(record.type);
            }
        }
    }, {
        key: "getModel",
        value: function getModel(type) {
            var model = this.models[type];
            if (model) {
                return model;
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_1__exception__["b" /* ModelNotFound */](type);
            }
        }
    }, {
        key: "hasAttribute",
        value: function hasAttribute(type, attribute) {
            var model = this.getModel(type);
            if (model.attributes && model.attributes[attribute]) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "hasRelationship",
        value: function hasRelationship(type, relationship) {
            var model = this.getModel(type);
            if (model.relationships && model.relationships[relationship]) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "version",
        get: function get() {
            return this._version;
        }
    }, {
        key: "models",
        get: function get() {
            return this._models;
        }
    }]);

    return Schema;
}();
Schema = __decorate([__WEBPACK_IMPORTED_MODULE_2__orbit_core__["e" /* evented */]], Schema);
/* harmony default export */ __webpack_exports__["a"] = (Schema);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PULLABLE */
/* harmony export (immutable) */ __webpack_exports__["b"] = isPullable;
/* harmony export (immutable) */ __webpack_exports__["a"] = pullable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__query__ = __webpack_require__(10);




var PULLABLE = '__pullable__';
/**
 * Has a source been decorated as `@pullable`?
 *
 * @export
 * @param {Source} source
 * @returns
 */
function isPullable(source) {
    return !!source[PULLABLE];
}
/**
 * Marks a source as "pullable" and adds an implementation of the `Pullable`
 * interface.
 *
 * The `pull` method is part of the "request flow" in Orbit. Requests trigger
 * events before and after processing of each request. Observers can delay the
 * resolution of a request by returning a promise in an event listener.
 *
 * A pullable source emits the following events:
 *
 * - `beforePull` - emitted prior to the processing of `pull`, this event
 * includes the requested `Query` as an argument.
 *
 * - `pull` - emitted after a `pull` has successfully been requested, this
 * event's arguments include both the requested `Query` and an array of the
 * resulting `Transform` instances.
 *
 * - `pullFail` - emitted when an error has occurred processing a `pull`, this
 * event's arguments include both the requested `Query` and the error.
 *
 * A pullable source must implement a private method `_pull`, which performs
 * the processing required for `pull` and returns a promise that resolves to an
 * array of `Transform` instances.
 *
 * @export
 * @decorator
 * @param {SourceClass} Klass
 * @returns {void}
 */
function pullable(Klass) {
    var proto = Klass.prototype;
    if (isPullable(proto)) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["a" /* assert */])('Pullable interface can only be applied to a Source', proto instanceof __WEBPACK_IMPORTED_MODULE_2__source__["a" /* Source */]);
    proto[PULLABLE] = true;
    proto.pull = function (queryOrExpression, options, id) {
        var query = Object(__WEBPACK_IMPORTED_MODULE_3__query__["a" /* buildQuery */])(queryOrExpression, options, id, this.queryBuilder);
        return this._enqueueRequest('pull', query);
    };
    proto.__pull__ = function (query) {
        var _this = this;

        return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["f" /* fulfillInSeries */])(this, 'beforePull', query).then(function () {
            return _this._pull(query);
        }).then(function (result) {
            return _this._transformed(result);
        }).then(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["g" /* settleInSeries */])(_this, 'pull', query, result).then(function () {
                return result;
            });
        }).catch(function (error) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["g" /* settleInSeries */])(_this, 'pullFail', query, error).then(function () {
                throw error;
            });
        });
    };
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PUSHABLE */
/* harmony export (immutable) */ __webpack_exports__["b"] = isPushable;
/* harmony export (immutable) */ __webpack_exports__["a"] = pushable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transform__ = __webpack_require__(11);





var PUSHABLE = '__pushable__';
/**
 * Has a source been decorated as `@pushable`?
 *
 * @export
 * @param {Source} source
 * @returns
 */
function isPushable(source) {
    return !!source[PUSHABLE];
}
/**
 * Marks a source as "pushable" and adds an implementation of the `Pushable`
 * interface.
 *
 * The `push` method is part of the "request flow" in Orbit. Requests trigger
 * events before and after processing of each request. Observers can delay the
 * resolution of a request by returning a promise in an event listener.
 *
 * A pushable source emits the following events:
 *
 * - `beforePush` - emitted prior to the processing of `push`, this event
 * includes the requested `Transform` as an argument.
 *
 * - `push` - emitted after a `push` has successfully been applied, this event's
 * arguments include both the requested `Transform` and an array of the actual
 * applied `Transform` instances.
 *
 * - `pushFail` - emitted when an error has occurred pushing a transform, this
 * event's arguments include both the requested `Transform` and the error.
 *
 * A pushable source must implement a private method `_push`, which performs
 * the processing required for `push` and returns a promise that resolves to an
 * array of `Transform` instances.
 *
 * @export
 * @decorator
 * @param {SourceClass} Klass
 * @returns {void}
 */
function pushable(Klass) {
    var proto = Klass.prototype;
    if (isPushable(proto)) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Pushable interface can only be applied to a Source', proto instanceof __WEBPACK_IMPORTED_MODULE_3__source__["a" /* Source */]);
    proto[PUSHABLE] = true;
    proto.push = function (transformOrOperations, options, id) {
        var transform = Object(__WEBPACK_IMPORTED_MODULE_4__transform__["a" /* buildTransform */])(transformOrOperations, options, id, this.transformBuilder);
        if (this.transformLog.contains(transform.id)) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve([]);
        }
        return this._enqueueRequest('push', transform);
    };
    proto.__push__ = function (transform) {
        var _this = this;

        if (this.transformLog.contains(transform.id)) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve([]);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["f" /* fulfillInSeries */])(this, 'beforePush', transform).then(function () {
            if (_this.transformLog.contains(transform.id)) {
                return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve([]);
            } else {
                return _this._push(transform).then(function (result) {
                    return _this._transformed(result).then(function () {
                        return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this, 'push', transform, result);
                    }).then(function () {
                        return result;
                    });
                });
            }
        }).catch(function (error) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this, 'pushFail', transform, error).then(function () {
                throw error;
            });
        });
    };
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QUERYABLE */
/* harmony export (immutable) */ __webpack_exports__["b"] = isQueryable;
/* harmony export (immutable) */ __webpack_exports__["a"] = queryable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source__ = __webpack_require__(5);




var QUERYABLE = '__queryable__';
/**
 * Has a source been decorated as `@queryable`?
 *
 * @export
 * @param {object} obj
 * @returns
 */
function isQueryable(source) {
    return !!source[QUERYABLE];
}
/**
 * Marks a source as "queryable" and adds an implementation of the `Queryable`
 * interface.
 *
 * The `query` method is part of the "request flow" in Orbit. Requests trigger
 * events before and after processing of each request. Observers can delay the
 * resolution of a request by returning a promise in an event listener.
 *
 * The `Queryable` interface introduces the following events:
 *
 * - `beforeQuery` - emitted prior to the processing of `query`, this event
 * includes the requested `Query` as an argument.
 *
 * - `query` - emitted after a `query` has successfully returned, this event's
 * arguments include both the requested `Query` and the results.
 *
 * - `queryFail` - emitted when an error has occurred processing a query, this
 * event's arguments include both the requested `Query` and the error.
 *
 * A queryable source must implement a private method `_query`, which performs
 * the processing required for `query` and returns a promise that resolves to a
 * set of results.
 *
 * @export
 * @decorator
 * @param {SourceClass} Klass
 * @returns {void}
 */
function queryable(Klass) {
    var proto = Klass.prototype;
    if (isQueryable(proto)) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["a" /* assert */])('Queryable interface can only be applied to a Source', proto instanceof __WEBPACK_IMPORTED_MODULE_3__source__["a" /* Source */]);
    proto[QUERYABLE] = true;
    proto.query = function (queryOrExpression, options, id) {
        var query = Object(__WEBPACK_IMPORTED_MODULE_2__query__["a" /* buildQuery */])(queryOrExpression, options, id, this.queryBuilder);
        return this._enqueueRequest('query', query);
    };
    proto.__query__ = function (query) {
        var _this = this;

        return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["f" /* fulfillInSeries */])(this, 'beforeQuery', query).then(function () {
            return _this._query(query);
        }).then(function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["g" /* settleInSeries */])(_this, 'query', query, result).then(function () {
                return result;
            });
        }).catch(function (error) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_core__["g" /* settleInSeries */])(_this, 'queryFail', query, error).then(function () {
                throw error;
            });
        });
    };
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SYNCABLE */
/* harmony export (immutable) */ __webpack_exports__["b"] = isSyncable;
/* harmony export (immutable) */ __webpack_exports__["a"] = syncable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source__ = __webpack_require__(5);




var SYNCABLE = '__syncable__';
/**
 * Has a source been decorated as `@syncable`?
 *
 * @export
 * @param {SourceClass} source
 * @returns
 */
function isSyncable(source) {
    return !!source[SYNCABLE];
}
/**
 * Marks a source as "syncable" and adds an implementation of the `Syncable`
 * interface.
 *
 * The `sync` method is part of the "sync flow" in Orbit. This flow is used to
 * synchronize the contents of sources.
 *
 * Other sources can participate in the resolution of a `sync` by observing the
 * `transform` event, which is emitted whenever a new `Transform` is applied to
 * a source.
 *
 * @export
 * @decorator
 * @param {SourceClass} Klass
 * @returns {void}
 */
function syncable(Klass) {
    var proto = Klass.prototype;
    if (isSyncable(proto)) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Syncable interface can only be applied to a Source', proto instanceof __WEBPACK_IMPORTED_MODULE_3__source__["a" /* Source */]);
    proto[SYNCABLE] = true;
    proto.sync = function (transformOrTransforms) {
        var _this = this;

        if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["i" /* isArray */])(transformOrTransforms)) {
            var transforms = transformOrTransforms;
            return transforms.reduce(function (chain, transform) {
                return chain.then(function () {
                    return _this.sync(transform);
                });
            }, __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve());
        } else {
            var transform = transformOrTransforms;
            if (this.transformLog.contains(transform.id)) {
                return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
            }
            return this._enqueueSync('sync', transform);
        }
    };
    proto.__sync__ = function (transform) {
        var _this2 = this;

        if (this.transformLog.contains(transform.id)) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["f" /* fulfillInSeries */])(this, 'beforeSync', transform).then(function () {
            if (_this2.transformLog.contains(transform.id)) {
                return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
            } else {
                return _this2._sync(transform).then(function () {
                    return _this2._transformed([transform]);
                }).then(function () {
                    return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this2, 'sync', transform);
                });
            }
        }).catch(function (error) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this2, 'syncFail', transform, error).then(function () {
                throw error;
            });
        });
    };
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UPDATABLE */
/* harmony export (immutable) */ __webpack_exports__["b"] = isUpdatable;
/* harmony export (immutable) */ __webpack_exports__["a"] = updatable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transform__ = __webpack_require__(11);





var UPDATABLE = '__updatable__';
/**
 * Has a source been decorated as `@updatable`?
 *
 * @export
 * @param {*} obj
 * @returns
 */
function isUpdatable(source) {
    return !!source[UPDATABLE];
}
/**
 * Marks a source as "updatable" and adds an implementation of the `Updatable`
 * interface.
 *
 * The `update` method is part of the "request flow" in Orbit. Requests trigger
 * events before and after processing of each request. Observers can delay the
 * resolution of a request by returning a promise in an event listener.
 *
 * An updatable source emits the following events:
 *
 * - `beforeUpdate` - emitted prior to the processing of `update`, this event
 * includes the requested `Transform` as an argument.
 *
 * - `update` - emitted after an `update` has successfully been applied, this
 * event includes the requested `Transform` as an argument.
 *
 * - `updateFail` - emitted when an error has occurred applying an update, this
 * event's arguments include both the requested `Transform` and the error.
 *
 * An updatable source must implement a private method `_update`, which performs
 * the processing required for `update` and returns a promise that resolves when
 * complete.
 *
 * @export
 * @decorator
 * @param {SourceClass} Klass
 * @returns {void}
 */
function updatable(Klass) {
    var proto = Klass.prototype;
    if (isUpdatable(proto)) {
        return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Updatable interface can only be applied to a Source', proto instanceof __WEBPACK_IMPORTED_MODULE_3__source__["a" /* Source */]);
    proto[UPDATABLE] = true;
    proto.update = function (transformOrOperations, options, id) {
        var transform = Object(__WEBPACK_IMPORTED_MODULE_4__transform__["a" /* buildTransform */])(transformOrOperations, options, id, this.transformBuilder);
        if (this.transformLog.contains(transform.id)) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
        }
        return this._enqueueRequest('update', transform);
    };
    proto.__update__ = function (transform) {
        var _this = this;

        if (this.transformLog.contains(transform.id)) {
            return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["f" /* fulfillInSeries */])(this, 'beforeUpdate', transform).then(function () {
            if (_this.transformLog.contains(transform.id)) {
                return __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */].Promise.resolve();
            } else {
                return _this._update(transform).then(function (result) {
                    return _this._transformed([transform]).then(function () {
                        return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this, 'update', transform, result);
                    }).then(function () {
                        return result;
                    });
                });
            }
        }).catch(function (error) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__orbit_core__["g" /* settleInSeries */])(_this, 'updateFail', transform, error).then(function () {
                throw error;
            });
        });
    };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache__ = __webpack_require__(21);
/* unused harmony reexport Cache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_operation_processors_operation_processor__ = __webpack_require__(7);
/* unused harmony reexport OperationProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_operation_processors_cache_integrity_processor__ = __webpack_require__(22);
/* unused harmony reexport CacheIntegrityProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_operation_processors_schema_consistency_processor__ = __webpack_require__(23);
/* unused harmony reexport SchemaConsistencyProcessor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cache_operation_processors_schema_validation_processor__ = __webpack_require__(25);
/* unused harmony reexport SchemaValidationProcessor */







/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache__ = __webpack_require__(21);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Store = Store_1 = function (_Source) {
    _inherits(Store, _Source);

    function Store() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Store);

        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('Store\'s `schema` must be specified in `settings.schema` constructor argument', !!settings.schema);
        var keyMap = settings.keyMap;
        var schema = settings.schema;
        settings.name = settings.name || 'store';

        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, settings));

        _this._transforms = {};
        _this._transformInverses = {};
        _this.transformLog.on('clear', _this._logCleared, _this);
        _this.transformLog.on('truncate', _this._logTruncated, _this);
        _this.transformLog.on('rollback', _this._logRolledback, _this);
        var cacheSettings = settings.cacheSettings || {};
        cacheSettings.schema = schema;
        cacheSettings.keyMap = keyMap;
        cacheSettings.queryBuilder = cacheSettings.queryBuilder || _this.queryBuilder;
        cacheSettings.transformBuilder = cacheSettings.transformBuilder || _this.transformBuilder;
        if (settings.base) {
            _this._base = settings.base;
            _this._forkPoint = _this._base.transformLog.head;
            cacheSettings.base = _this._base.cache;
        }
        _this._cache = new __WEBPACK_IMPORTED_MODULE_2__cache__["a" /* default */](cacheSettings);
        return _this;
    }

    _createClass(Store, [{
        key: "upgrade",
        value: function upgrade() {
            this._cache.upgrade();
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
        }
        /////////////////////////////////////////////////////////////////////////////
        // Syncable interface implementation
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_sync",
        value: function _sync(transform) {
            this._applyTransform(transform);
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
        }
        /////////////////////////////////////////////////////////////////////////////
        // Updatable interface implementation
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_update",
        value: function _update(transform) {
            var results = this._applyTransform(transform);
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve(results.length === 1 ? results[0] : results);
        }
        /////////////////////////////////////////////////////////////////////////////
        // Queryable interface implementation
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_query",
        value: function _query(query) {
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve(this._cache.query(query));
        }
        /////////////////////////////////////////////////////////////////////////////
        // Public methods
        /////////////////////////////////////////////////////////////////////////////
        /**
         Create a clone, or "fork", from a "base" store.
            The forked store will have the same `schema` and `keyMap` as its base store.
         The forked store's cache will start with the same immutable document as
         the base store. Its contents and log will evolve independently.
            @method fork
         @returns {Store} The forked store.
        */

    }, {
        key: "fork",
        value: function fork() {
            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            settings.schema = this._schema;
            settings.cacheSettings = settings.cacheSettings || {};
            settings.keyMap = this._keyMap;
            settings.queryBuilder = this.queryBuilder;
            settings.transformBuilder = this.transformBuilder;
            settings.base = this;
            return new Store_1(settings);
        }
        /**
         Merge transforms from a forked store back into a base store.
            By default, all of the operations from all of the transforms in the forked
         store's history will be reduced into a single transform. A subset of
         operations can be selected by specifying the `sinceTransformId` option.
            The `coalesce` option controls whether operations are coalesced into a
         minimal equivalent set before being reduced into a transform.
            @method merge
         @param {Store} forkedStore - The store to merge.
         @param {Object}  [options] settings
         @param {Boolean} [options.coalesce = true] Should operations be coalesced into a minimal equivalent set?
         @param {String}  [options.sinceTransformId = null] Select only transforms since the specified ID.
         @returns {Promise} The result of calling `update()` with the forked transforms.
        */

    }, {
        key: "merge",
        value: function merge(forkedStore) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var transforms = void 0;
            if (options.sinceTransformId) {
                transforms = forkedStore.transformsSince(options.sinceTransformId);
            } else {
                transforms = forkedStore.allTransforms();
            }
            var reducedTransform = void 0;
            var ops = [];
            transforms.forEach(function (t) {
                Array.prototype.push.apply(ops, t.operations);
            });
            if (options.coalesce !== false) {
                ops = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["n" /* coalesceRecordOperations */])(ops);
            }
            reducedTransform = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["l" /* buildTransform */])(ops, options.transformOptions);
            return this.update(reducedTransform);
        }
        /**
         Rolls back the Store to a particular transformId
            @method rollback
         @param {string} transformId - The ID of the transform to roll back to
         @param {number} relativePosition - A positive or negative integer to specify a position relative to `transformId`
         @returns {undefined}
        */

    }, {
        key: "rollback",
        value: function rollback(transformId) {
            var relativePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return this.transformLog.rollback(transformId, relativePosition);
        }
        /**
         Returns all transforms since a particular `transformId`.
            @method transformsSince
         @param {string} transformId - The ID of the transform to start with.
         @returns {Array} Array of transforms.
        */

    }, {
        key: "transformsSince",
        value: function transformsSince(transformId) {
            var _this2 = this;

            return this.transformLog.after(transformId).map(function (id) {
                return _this2._transforms[id];
            });
        }
        /**
         Returns all tracked transforms.
            @method allTransforms
         @returns {Array} Array of transforms.
        */

    }, {
        key: "allTransforms",
        value: function allTransforms() {
            var _this3 = this;

            return this.transformLog.entries.map(function (id) {
                return _this3._transforms[id];
            });
        }
    }, {
        key: "getTransform",
        value: function getTransform(transformId) {
            return this._transforms[transformId];
        }
    }, {
        key: "getInverseOperations",
        value: function getInverseOperations(transformId) {
            return this._transformInverses[transformId];
        }
        /////////////////////////////////////////////////////////////////////////////
        // Protected methods
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_applyTransform",
        value: function _applyTransform(transform) {
            var result = this.cache.patch(transform.operations);
            this._transforms[transform.id] = transform;
            this._transformInverses[transform.id] = result.inverse;
            return result.data;
        }
    }, {
        key: "_clearTransformFromHistory",
        value: function _clearTransformFromHistory(transformId) {
            delete this._transforms[transformId];
            delete this._transformInverses[transformId];
        }
    }, {
        key: "_logCleared",
        value: function _logCleared() {
            this._transforms = {};
            this._transformInverses = {};
        }
    }, {
        key: "_logTruncated",
        value: function _logTruncated(transformId, relativePosition, removed) {
            var _this4 = this;

            removed.forEach(function (id) {
                return _this4._clearTransformFromHistory(id);
            });
        }
    }, {
        key: "_logRolledback",
        value: function _logRolledback(transformId, relativePosition, removed) {
            var _this5 = this;

            removed.reverse().forEach(function (id) {
                var inverseOperations = _this5._transformInverses[id];
                if (inverseOperations) {
                    _this5.cache.patch(inverseOperations);
                }
                _this5._clearTransformFromHistory(id);
            });
        }
    }, {
        key: "cache",
        get: function get() {
            return this._cache;
        }
    }, {
        key: "base",
        get: function get() {
            return this._base;
        }
    }, {
        key: "forkPoint",
        get: function get() {
            return this._forkPoint;
        }
    }]);

    return Store;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["h" /* Source */]);
Store = Store_1 = __decorate([__WEBPACK_IMPORTED_MODULE_0__orbit_data__["A" /* syncable */], __WEBPACK_IMPORTED_MODULE_0__orbit_data__["y" /* queryable */], __WEBPACK_IMPORTED_MODULE_0__orbit_data__["B" /* updatable */]], Store);
/* harmony default export */ __webpack_exports__["a"] = (Store);
var Store_1;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryOperators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);


var EMPTY = function EMPTY() {};
var QueryOperators = {
    findRecord: function findRecord(cache, expression) {
        var _expression$record = expression.record,
            type = _expression$record.type,
            id = _expression$record.id;

        var record = cache.records(type).get(id);
        if (!record) {
            throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["e" /* RecordNotFoundException */](type, id);
        }
        return record;
    },
    findRecords: function findRecords(cache, expression) {
        var results = Array.from(cache.records(expression.type).values());
        if (expression.filter) {
            results = filterRecords(results, expression.filter);
        }
        if (expression.sort) {
            results = sortRecords(results, expression.sort);
        }
        if (expression.page) {
            results = paginateRecords(results, expression.page);
        }
        return results;
    },
    findRelatedRecords: function findRelatedRecords(cache, expression) {
        var record = expression.record,
            relationship = expression.relationship;
        var type = record.type,
            id = record.id;

        var currentRecord = cache.records(type).get(id);
        var data = currentRecord && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(currentRecord, ['relationships', relationship, 'data']);
        if (!data) {
            return [];
        }
        return data.map(function (r) {
            return cache.records(r.type).get(r.id);
        });
    },
    findRelatedRecord: function findRelatedRecord(cache, expression) {
        var record = expression.record,
            relationship = expression.relationship;
        var type = record.type,
            id = record.id;

        var currentRecord = cache.records(type).get(id);
        var data = currentRecord && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(currentRecord, ['relationships', relationship, 'data']);
        if (!data) {
            return null;
        }
        var r = data;
        return cache.records(r.type).get(r.id);
    }
};
function filterRecords(records, filters) {
    return records.filter(function (record) {
        for (var i = 0, l = filters.length; i < l; i++) {
            if (!applyFilter(record, filters[i])) {
                return false;
            }
        }
        return true;
    });
}
function applyFilter(record, filter) {
    if (filter.kind === 'attribute') {
        var actual = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(record, ['attributes', filter.attribute]);
        var expected = filter.value;
        switch (filter.op) {
            case 'equal':
                return actual === expected;
            case 'gt':
                return actual > expected;
            case 'gte':
                return actual >= expected;
            case 'lt':
                return actual < expected;
            case 'lte':
                return actual <= expected;
            default:
                throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["d" /* QueryExpressionParseError */]('Filter operation ${filter.op} not recognized for Store.', filter);
        }
    }
    return false;
}
function sortRecords(records, sortSpecifiers) {
    var comparisonValues = new Map();
    records.forEach(function (record) {
        comparisonValues.set(record, sortSpecifiers.map(function (sortSpecifier) {
            if (sortSpecifier.kind === 'attribute') {
                return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(record, ['attributes', sortSpecifier.attribute]);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["d" /* QueryExpressionParseError */]('Sort specifier ${sortSpecifier.kind} not recognized for Store.', sortSpecifier);
            }
        }));
    });
    var comparisonOrders = sortSpecifiers.map(function (sortExpression) {
        return sortExpression.order === 'descending' ? -1 : 1;
    });
    return records.sort(function (record1, record2) {
        var values1 = comparisonValues.get(record1);
        var values2 = comparisonValues.get(record2);
        for (var i = 0; i < sortSpecifiers.length; i++) {
            if (values1[i] < values2[i]) {
                return -comparisonOrders[i];
            } else if (values1[i] > values2[i]) {
                return comparisonOrders[i];
            } else if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(values1[i]) && !Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(values2[i])) {
                return comparisonOrders[i];
            } else if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(values2[i]) && !Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["j" /* isNone */])(values1[i])) {
                return -comparisonOrders[i];
            }
        }
        return 0;
    });
}
function paginateRecords(records, paginationOptions) {
    if (paginationOptions.limit !== undefined) {
        var offset = paginationOptions.offset === undefined ? 0 : paginationOptions.offset;
        var limit = paginationOptions.limit;
        return records.slice(offset, offset + limit);
    } else {
        throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["d" /* QueryExpressionParseError */]('Pagination options not recognized for Store. Please specify `offset` and `limit`.', paginationOptions);
    }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
    addRecord: function addRecord(cache, op) {
        var record = op.record;
        var records = cache.records(record.type);
        records.set(record.id, record);
        if (cache.keyMap) {
            cache.keyMap.pushRecord(record);
        }
        return record;
    },
    replaceRecord: function replaceRecord(cache, op) {
        var updates = op.record;
        var records = cache.records(updates.type);
        var current = records.get(updates.id);
        var record = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["v" /* mergeRecords */])(current, updates);
        records.set(record.id, record);
        if (cache.keyMap) {
            cache.keyMap.pushRecord(record);
        }
        return record;
    },
    removeRecord: function removeRecord(cache, op) {
        var _op$record = op.record,
            type = _op$record.type,
            id = _op$record.id;

        var records = cache.records(type);
        var result = records.get(id);
        if (result) {
            records.remove(id);
            return result;
        } else {
            return null;
        }
    },
    replaceKey: function replaceKey(cache, op) {
        var _op$record2 = op.record,
            type = _op$record2.type,
            id = _op$record2.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
        } else {
            record = { type: type, id: id };
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['keys', op.key], op.value);
        records.set(id, record);
        if (cache.keyMap) {
            cache.keyMap.pushRecord(record);
        }
        return record;
    },
    replaceAttribute: function replaceAttribute(cache, op) {
        var _op$record3 = op.record,
            type = _op$record3.type,
            id = _op$record3.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
        } else {
            record = { type: type, id: id };
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['attributes', op.attribute], op.value);
        records.set(id, record);
        return record;
    },
    addToRelatedRecords: function addToRelatedRecords(cache, op) {
        var _op$record4 = op.record,
            type = _op$record4.type,
            id = _op$record4.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
        } else {
            record = { type: type, id: id };
        }
        var relatedRecords = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["e" /* deepGet */])(record, ['relationships', op.relationship, 'data']) || [];
        relatedRecords.push(op.relatedRecord);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', op.relationship, 'data'], relatedRecords);
        records.set(id, record);
        return record;
    },
    removeFromRelatedRecords: function removeFromRelatedRecords(cache, op) {
        var _op$record5 = op.record,
            type = _op$record5.type,
            id = _op$record5.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
            var relatedRecords = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["e" /* deepGet */])(record, ['relationships', op.relationship, 'data']);
            if (relatedRecords) {
                relatedRecords = relatedRecords.filter(function (r) {
                    return !Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["p" /* equalRecordIdentities */])(r, op.relatedRecord);
                });
                if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', op.relationship, 'data'], relatedRecords)) {
                    records.set(id, record);
                }
            }
            return record;
        }
        return null;
    },
    replaceRelatedRecords: function replaceRelatedRecords(cache, op) {
        var _op$record6 = op.record,
            type = _op$record6.type,
            id = _op$record6.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
        } else {
            record = { type: type, id: id };
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', op.relationship, 'data'], op.relatedRecords)) {
            records.set(id, record);
        }
        return record;
    },
    replaceRelatedRecord: function replaceRelatedRecord(cache, op) {
        var _op$record7 = op.record,
            type = _op$record7.type,
            id = _op$record7.id;

        var records = cache.records(type);
        var record = records.get(id);
        if (record) {
            record = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(record);
        } else {
            record = { type: type, id: id };
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', op.relationship, 'data'], op.relatedRecord)) {
            records.set(id, record);
        }
        return record;
    }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);

var InverseTransforms = {
    addRecord: function addRecord(cache, op) {
        var _op$record = op.record,
            type = _op$record.type,
            id = _op$record.id;

        var current = cache.records(type).get(id);
        if (current === undefined) {
            return {
                op: 'removeRecord',
                record: { type: type, id: id }
            };
        } else if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["g" /* eq */])(current, op.record)) {
            return;
        } else {
            return {
                op: 'replaceRecord',
                record: current
            };
        }
    },
    replaceRecord: function replaceRecord(cache, op) {
        var replacement = op.record;
        var type = replacement.type,
            id = replacement.id;

        var current = cache.records(type).get(id);
        if (current === undefined) {
            return {
                op: 'removeRecord',
                record: { type: type, id: id }
            };
        } else {
            var result = { type: type, id: id };
            var changed = false;
            ['attributes', 'keys'].forEach(function (grouping) {
                if (replacement[grouping]) {
                    Object.keys(replacement[grouping]).forEach(function (field) {
                        var value = replacement[grouping][field];
                        var currentValue = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(current, [grouping, field]);
                        if (!Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["g" /* eq */])(value, currentValue)) {
                            changed = true;
                            Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(result, [grouping, field], currentValue === undefined ? null : currentValue);
                        }
                    });
                }
            });
            if (replacement.relationships) {
                Object.keys(replacement.relationships).forEach(function (field) {
                    var currentValue = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(current, ['relationships', field]);
                    var value = replacement.relationships[field];
                    var data = value && value.data;
                    var relationshipMatch = void 0;
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(data)) {
                        relationshipMatch = cache.relationships.relatedRecordsMatch(op.record, field, data);
                    } else {
                        relationshipMatch = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["g" /* eq */])(value, currentValue);
                    }
                    if (!relationshipMatch) {
                        changed = true;
                        Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["f" /* deepSet */])(result, ['relationships', field], currentValue === undefined ? null : currentValue);
                    }
                });
            }
            if (changed) {
                return {
                    op: 'replaceRecord',
                    record: result
                };
            }
        }
    },
    removeRecord: function removeRecord(cache, op) {
        var _op$record2 = op.record,
            type = _op$record2.type,
            id = _op$record2.id;

        var current = cache.records(type).get(id);
        if (current !== undefined) {
            return {
                op: 'replaceRecord',
                record: current
            };
        }
    },
    replaceKey: function replaceKey(cache, op) {
        var _op$record3 = op.record,
            type = _op$record3.type,
            id = _op$record3.id;

        var record = cache.records(type).get(id);
        var current = record && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(record, ['keys', op.key]);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["g" /* eq */])(current, op.value)) {
            return {
                op: 'replaceKey',
                record: { type: type, id: id },
                key: op.key,
                value: current
            };
        }
    },
    replaceAttribute: function replaceAttribute(cache, op) {
        var _op$record4 = op.record,
            type = _op$record4.type,
            id = _op$record4.id;
        var attribute = op.attribute;

        var record = cache.records(type).get(id);
        var current = record && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(record, ['attributes', attribute]);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["g" /* eq */])(current, op.value)) {
            return {
                op: 'replaceAttribute',
                record: { type: type, id: id },
                attribute: attribute,
                value: current
            };
        }
    },
    addToRelatedRecords: function addToRelatedRecords(cache, op) {
        var record = op.record,
            relationship = op.relationship,
            relatedRecord = op.relatedRecord;

        if (!cache.relationships.relationshipExists(record, relationship, relatedRecord)) {
            return {
                op: 'removeFromRelatedRecords',
                record: record,
                relationship: relationship,
                relatedRecord: relatedRecord
            };
        }
    },
    removeFromRelatedRecords: function removeFromRelatedRecords(cache, op) {
        var record = op.record,
            relationship = op.relationship,
            relatedRecord = op.relatedRecord;

        if (cache.relationships.relationshipExists(record, relationship, relatedRecord)) {
            return {
                op: 'addToRelatedRecords',
                record: record,
                relationship: relationship,
                relatedRecord: relatedRecord
            };
        }
    },
    replaceRelatedRecords: function replaceRelatedRecords(cache, op) {
        var record = op.record,
            relationship = op.relationship,
            relatedRecords = op.relatedRecords;

        if (!cache.relationships.relatedRecordsMatch(record, relationship, relatedRecords)) {
            return {
                op: 'replaceRelatedRecords',
                record: record,
                relationship: relationship,
                relatedRecords: cache.relationships.relatedRecords(record, relationship)
            };
        }
    },
    replaceRelatedRecord: function replaceRelatedRecord(cache, op) {
        var record = op.record,
            relationship = op.relationship,
            relatedRecord = op.relatedRecord;

        if (!cache.relationships.relationshipExists(record, relationship, relatedRecord)) {
            return {
                op: 'replaceRelatedRecord',
                record: record,
                relationship: relationship,
                relatedRecord: cache.relationships.relatedRecord(record, relationship) || null
            };
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (InverseTransforms);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmutableMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_hamt__ = __webpack_require__(57);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ImmutableMap = function () {
    function ImmutableMap(base) {
        _classCallCheck(this, ImmutableMap);

        if (base) {
            this._data = base.data;
        } else {
            this._data = new __WEBPACK_IMPORTED_MODULE_0__utils_hamt__["a" /* default */]();
        }
    }

    _createClass(ImmutableMap, [{
        key: 'get',
        value: function get(key) {
            return this._data.get(key);
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            this._data = this._data.set(key, value);
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            this._data = this._data.remove(key);
        }
    }, {
        key: 'has',
        value: function has(key) {
            return this.get(key) !== undefined;
        }
    }, {
        key: 'keys',
        value: function keys() {
            return this._data.keys();
        }
    }, {
        key: 'values',
        value: function values() {
            return this._data.values();
        }
    }, {
        key: 'size',
        get: function get() {
            return this._data.size;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }]);

    return ImmutableMap;
}();



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HAMTMapIterator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HAMTMap; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Code based on: https://github.com/mattbierner/hamt
 * Author: Matt Bierner
 * MIT license
 *
 * Which is based on: https://github.com/exclipy/pdata
 */
/* eslint-disable */
function _typeof(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
}
/* Configuration
 ******************************************************************************/
var SIZE = 5;
var BUCKET_SIZE = Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
/*
 ******************************************************************************/
var nothing = {};
function constant(x) {
    return function () {
        return x;
    };
}
/**
  Get 32 bit hash of string.

  Based on:
  http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
*/
function hash(str) {
    var type = typeof str === 'undefined' ? 'undefined' : _typeof(str);
    if (type === 'number') return str;
    if (type !== 'string') str += '';
    var h = 0;
    for (var i = 0, len = str.length; i < len; ++i) {
        var c = str.charCodeAt(i);
        h = (h << 5) - h + c | 0;
    }
    return h;
}
/* Bit Ops
 ******************************************************************************/
/**
  Hamming weight.

  Taken from: http://jsperf.com/hamming-weight
*/
function popcount(x) {
    x -= x >> 1 & 0x55555555;
    x = (x & 0x33333333) + (x >> 2 & 0x33333333);
    x = x + (x >> 4) & 0x0f0f0f0f;
    x += x >> 8;
    x += x >> 16;
    return x & 0x7f;
}
function hashFragment(shift, h) {
    return h >>> shift & MASK;
}
function toBitmap(x) {
    return 1 << x;
}
function fromBitmap(bitmap, bit) {
    return popcount(bitmap & bit - 1);
}
/* Array Ops
 ******************************************************************************/
/**
  Set a value in an array.

  @param mutate Should the input array be mutated?
  @param at Index to change.
  @param v New value
  @param arr Array.
*/
function arrayUpdate(mutate, at, v, arr) {
    var out = arr;
    if (!mutate) {
        var len = arr.length;
        out = new Array(len);
        for (var i = 0; i < len; ++i) {
            out[i] = arr[i];
        }
    }
    out[at] = v;
    return out;
}
/**
  Remove a value from an array.

  @param mutate Should the input array be mutated?
  @param at Index to remove.
  @param arr Array.
*/
function arraySpliceOut(mutate, at, arr) {
    var len = arr.length;
    var i = 0,
        g = 0;
    var out = arr;
    if (mutate) {
        i = g = at;
    } else {
        out = new Array(len - 1);
        while (i < at) {
            out[g++] = arr[i++];
        }
        ++i;
    }
    while (i < len) {
        out[g++] = arr[i++];
    }
    return out;
}
/**
  Insert a value into an array.

  @param mutate Should the input array be mutated?
  @param at Index to insert at.
  @param v Value to insert,
  @param arr Array.
*/
function arraySpliceIn(mutate, at, v, arr) {
    var len = arr.length;
    if (mutate) {
        var _i = len;
        while (_i >= at) {
            arr[_i--] = arr[_i];
        }
        arr[at] = v;
        return arr;
    }
    var i = 0,
        g = 0;
    var out = new Array(len + 1);
    while (i < at) {
        out[g++] = arr[i++];
    }
    out[at] = v;
    while (i < len) {
        out[++g] = arr[i++];
    }
    return out;
}
/* Node Structures
 ******************************************************************************/
var LEAF = 1;
var COLLISION = 2;
var INDEX = 3;
var ARRAY = 4;
/**
  Empty node.
*/
var empty = {
    __hamt_isEmpty: true,
    _modify: function _modify(edit, keyEq, shift, f, h, k, size) {
        var v = f();
        if (v === nothing) return empty;
        ++size.value;
        return Leaf(edit, h, k, v);
    }
};
function isEmptyNode(x) {
    return x === empty || x && x.__hamt_isEmpty;
}
/**
  Leaf holding a value.

  @member edit Edit of the node.
  @member hash Hash of key.
  @member key Key.
  @member value Value stored.
*/
function Leaf(edit, hash, key, value) {
    return {
        type: LEAF,
        edit: edit,
        hash: hash,
        key: key,
        value: value,
        _modify: Leaf__modify
    };
}
/**
  Leaf holding multiple values with the same hash but different keys.

  @member edit Edit of the node.
  @member hash Hash of key.
  @member children Array of collision children node.
*/
function Collision(edit, hash, children) {
    return {
        type: COLLISION,
        edit: edit,
        hash: hash,
        children: children,
        _modify: Collision__modify
    };
}
/**
  Internal node with a sparse set of children.

  Uses a bitmap and array to pack children.

  @member edit Edit of the node.
  @member mask Bitmap that encode the positions of children in the array.
  @member children Array of child nodes.
*/
function IndexedNode(edit, mask, children) {
    return {
        type: INDEX,
        edit: edit,
        mask: mask,
        children: children,
        _modify: IndexedNode__modify
    };
}
/**
  Internal node with many children.

  @member edit Edit of the node.
  @member size Number of children.
  @member children Array of child nodes.
*/
function ArrayNode(edit, size, children) {
    return {
        type: ARRAY,
        edit: edit,
        size: size,
        children: children,
        _modify: ArrayNode__modify
    };
}
/**
    Is `node` a leaf node?
*/
function isLeaf(node) {
    return node === empty || node.type === LEAF || node.type === COLLISION;
}
/* Internal node operations.
 ******************************************************************************/
/**
  Expand an indexed node into an array node.

  @param edit Current edit.
  @param frag Index of added child.
  @param child Added child.
  @param mask Index node mask before child added.
  @param subNodes Index node children before child added.
*/
function expand(edit, frag, child, bitmap, subNodes) {
    var arr = [];
    var bit = bitmap;
    var count = 0;
    for (var i = 0; bit; ++i) {
        if (bit & 1) arr[i] = subNodes[count++];
        bit >>>= 1;
    }
    arr[frag] = child;
    return ArrayNode(edit, count + 1, arr);
}
/**
  Collapse an array node into a indexed node.

  @param edit Current edit.
  @param count Number of elements in new array.
  @param removed Index of removed element.
  @param elements Array node children before remove.
*/
function pack(edit, count, removed, elements) {
    var children = new Array(count - 1);
    var g = 0;
    var bitmap = 0;
    for (var i = 0, len = elements.length; i < len; ++i) {
        if (i !== removed) {
            var elem = elements[i];
            if (elem && !isEmptyNode(elem)) {
                children[g++] = elem;
                bitmap |= 1 << i;
            }
        }
    }
    return IndexedNode(edit, bitmap, children);
}
/**
  Merge two leaf nodes.

  @param shift Current shift.
  @param h1 Node 1 hash.
  @param n1 Node 1.
  @param h2 Node 2 hash.
  @param n2 Node 2.
*/
function mergeLeaves(edit, shift, h1, n1, h2, n2) {
    if (h1 === h2) return Collision(edit, h1, [n2, n1]);
    var subH1 = hashFragment(shift, h1);
    var subH2 = hashFragment(shift, h2);
    return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
}
/**
  Update an entry in a collision list.

  @param mutate Should mutation be used?
  @param edit Current edit.
  @param keyEq Key compare function.
  @param hash Hash of collision.
  @param list Collision list.
  @param f Update function.
  @param k Key to update.
  @param size Size ref.
*/
function updateCollisionList(mutate, edit, keyEq, h, list, f, k, size) {
    var len = list.length;
    for (var i = 0; i < len; ++i) {
        var child = list[i];
        if (keyEq(k, child.key)) {
            var value = child.value;
            var _newValue = f(value);
            if (_newValue === value) return list;
            if (_newValue === nothing) {
                --size.value;
                return arraySpliceOut(mutate, i, list);
            }
            return arrayUpdate(mutate, i, Leaf(edit, h, k, _newValue), list);
        }
    }
    var newValue = f();
    if (newValue === nothing) return list;
    ++size.value;
    return arrayUpdate(mutate, len, Leaf(edit, h, k, newValue), list);
}
function canEditNode(edit, node) {
    return edit === node.edit;
}
/* Editing
 ******************************************************************************/
function Leaf__modify(edit, keyEq, shift, f, h, k, size) {
    if (keyEq(k, this.key)) {
        var _v = f(this.value);
        if (_v === this.value) return this;else if (_v === nothing) {
            --size.value;
            return empty;
        }
        if (canEditNode(edit, this)) {
            this.value = _v;
            return this;
        }
        return Leaf(edit, h, k, _v);
    }
    var v = f();
    if (v === nothing) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
}
function Collision__modify(edit, keyEq, shift, f, h, k, size) {
    if (h === this.hash) {
        var canEdit = canEditNode(edit, this);
        var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f, k, size);
        if (list === this.children) return this;
        return list.length > 1 ? Collision(edit, this.hash, list) : list[0]; // collapse single element collision list
    }
    var v = f();
    if (v === nothing) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
}
function IndexedNode__modify(edit, keyEq, shift, f, h, k, size) {
    var mask = this.mask;
    var children = this.children;
    var frag = hashFragment(shift, h);
    var bit = toBitmap(frag);
    var indx = fromBitmap(mask, bit);
    var exists = mask & bit;
    var current = exists ? children[indx] : empty;
    var child = current._modify(edit, keyEq, shift + SIZE, f, h, k, size);
    if (current === child) return this;
    var canEdit = canEditNode(edit, this);
    var bitmap = mask;
    var newChildren = undefined;
    if (exists && isEmptyNode(child)) {
        // remove
        bitmap &= ~bit;
        if (!bitmap) return empty;
        if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1]; // collapse
        newChildren = arraySpliceOut(canEdit, indx, children);
    } else if (!exists && !isEmptyNode(child)) {
        // add
        if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child, mask, children);
        bitmap |= bit;
        newChildren = arraySpliceIn(canEdit, indx, child, children);
    } else {
        // modify
        newChildren = arrayUpdate(canEdit, indx, child, children);
    }
    if (canEdit) {
        this.mask = bitmap;
        this.children = newChildren;
        return this;
    }
    return IndexedNode(edit, bitmap, newChildren);
}
function ArrayNode__modify(edit, keyEq, shift, f, h, k, size) {
    var count = this.size;
    var children = this.children;
    var frag = hashFragment(shift, h);
    var child = children[frag];
    var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f, h, k, size);
    if (child === newChild) return this;
    var canEdit = canEditNode(edit, this);
    var newChildren = undefined;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
        // add
        ++count;
        newChildren = arrayUpdate(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
        // remove
        --count;
        if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
        newChildren = arrayUpdate(canEdit, frag, empty, children);
    } else {
        // modify
        newChildren = arrayUpdate(canEdit, frag, newChild, children);
    }
    if (canEdit) {
        this.size = count;
        this.children = newChildren;
        return this;
    }
    return ArrayNode(edit, count, newChildren);
}
;
/* Queries
 ******************************************************************************/
/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/
function _tryGetHash(alt, hash, key, map) {
    var node = map._root;
    var shift = 0;
    var keyEq = map._config.keyEq;
    while (true) {
        switch (node.type) {
            case LEAF:
                {
                    return keyEq(key, node.key) ? node.value : alt;
                }
            case COLLISION:
                {
                    if (hash === node.hash) {
                        var children = node.children;
                        for (var i = 0, len = children.length; i < len; ++i) {
                            var child = children[i];
                            if (keyEq(key, child.key)) return child.value;
                        }
                    }
                    return alt;
                }
            case INDEX:
                {
                    var frag = hashFragment(shift, hash);
                    var bit = toBitmap(frag);
                    if (node.mask & bit) {
                        node = node.children[fromBitmap(node.mask, bit)];
                        shift += SIZE;
                        break;
                    }
                    return alt;
                }
            case ARRAY:
                {
                    node = node.children[hashFragment(shift, hash)];
                    if (node) {
                        shift += SIZE;
                        break;
                    }
                    return alt;
                }
            default:
                return alt;
        }
    }
}
/**
  Lookup the value for `key` in `map` using internal hash function.

  @see `tryGetHash`
*/
function _tryGet(alt, key, map) {
    return _tryGetHash(alt, map._config.hash(key), key, map);
}
/**
  Lookup the value for `key` in `map` using a custom `hash`.

  Returns the value or `undefined` if none.
*/
function _getHash(hash, key, map) {
    return _tryGetHash(undefined, hash, key, map);
}
/**
  Lookup the value for `key` in `map` using internal hash function.

  @see `get`
*/
function get(key, map) {
    return _tryGetHash(undefined, map._config.hash(key), key, map);
}
/**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/
function _hasHash(hash, key, map) {
    return _tryGetHash(nothing, hash, key, map) !== nothing;
}
/**
  Does an entry exist for `key` in `map`? Uses internal hash function.
*/
function _has(key, map) {
    return _hasHash(map._config.hash(key), key, map);
}
function defKeyCompare(x, y) {
    return x === y;
}
/**
  Does `map` contain any elements?
*/
function isEmpty(map) {
    return map && !!isEmptyNode(map._root);
}
/* Updates
 ******************************************************************************/
/**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/
function _modifyHash(f, hash, key, map) {
    var size = { value: map._size };
    var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f, hash, key, size);
    return map.setTree(newRoot, size.value);
}
/**
  Alter the value stored for `key` in `map` using function `f` using
  internal hash function.

  @see `modifyHash`
*/
function _modify2(f, key, map) {
    return _modifyHash(f, map._config.hash(key), key, map);
}
/**
  Store `value` for `key` in `map` using custom `hash`.

  Returns a map with the modified value. Does not alter `map`.
*/
function _setHash(hash, key, value, map) {
    return _modifyHash(constant(value), hash, key, map);
}
/**
  Store `value` for `key` in `map` using internal hash function.

  @see `setHash`
*/
function _set(key, value, map) {
    return _setHash(map._config.hash(key), key, value, map);
}
/**
  Remove the entry for `key` in `map`.

  Returns a map with the value removed. Does not alter `map`.
*/
var del = constant(nothing);
function _removeHash(hash, key, map) {
    return _modifyHash(del, hash, key, map);
}
/**
  Remove the entry for `key` in `map` using internal hash function.

  @see `removeHash`
*/
function _remove(key, map) {
    return _removeHash(map._config.hash(key), key, map);
}
/* Mutation
 ******************************************************************************/
/**
  Mark `map` as mutable.
 */
function _beginMutation(map) {
    return new HAMTMap(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
}
/**
  Mark `map` as immutable.
 */
function _endMutation(map) {
    map._editable = map._editable && map._editable - 1;
    return map;
}
/**
  Mutate `map` within the context of `f`.
  @param f
  @param map HAMT
*/
function _mutate(f, map) {
    var transient = _beginMutation(map);
    f(transient);
    return _endMutation(transient);
}
;
/* Traversal
 ******************************************************************************/
/**
  Apply a continuation.
*/
function appk(k) {
    return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
}
/**
  Recursively visit all values stored in an array of nodes lazily.
*/
function lazyVisitChildren(len, children, i, f, k) {
    while (i < len) {
        var child = children[i++];
        if (child && !isEmptyNode(child)) return lazyVisit(child, f, [len, children, i, f, k]);
    }
    return appk(k);
}
/**
  Recursively visit all values stored in `node` lazily.
*/
function lazyVisit(node, f, k) {
    switch (node.type) {
        case LEAF:
            return {
                value: f(node),
                rest: k
            };
        case COLLISION:
        case ARRAY:
        case INDEX:
            var children = node.children;
            return lazyVisitChildren(children.length, children, 0, f, k);
        default:
            return appk(k);
    }
}
var DONE = {
    done: true
};
/**
  Lazily visit each value in map with function `f`.
*/
function visit(map, f) {
    return new HAMTMapIterator(lazyVisit(map._root, f));
}
/**
  Get a Javascsript iterator of `map`.

  Iterates over `[key, value]` arrays.
*/
function buildPairs(x) {
    return [x.key, x.value];
}
function _entries(map) {
    return visit(map, buildPairs);
}
;
/**
  Get array of all keys in `map`.

  Order is not guaranteed.
*/
function buildKeys(x) {
    return x.key;
}
function _keys(map) {
    return visit(map, buildKeys);
}
/**
  Get array of all values in `map`.

  Order is not guaranteed, duplicates are preserved.
*/
function buildValues(x) {
    return x.value;
}
function _values(map) {
    return visit(map, buildValues);
}
/* Fold
 ******************************************************************************/
/**
  Visit every entry in the map, aggregating data.

  Order of nodes is not guaranteed.

  @param f Function mapping accumulated value, value, and key to new value.
  @param z Starting value.
  @param m HAMT
*/
function _fold(f, z, m) {
    var root = m._root;
    if (root.type === LEAF) return f(z, root.value, root.key);
    var toVisit = [root.children];
    var children = undefined;
    while (children = toVisit.pop()) {
        for (var i = 0, len = children.length; i < len;) {
            var child = children[i++];
            if (child && child.type) {
                if (child.type === LEAF) z = f(z, child.value, child.key);else toVisit.push(child.children);
            }
        }
    }
    return z;
}
/**
  Visit every entry in the map, aggregating data.

  Order of nodes is not guaranteed.

  @param f Function invoked with value and key
  @param map HAMT
*/
function _forEach(f, map) {
    return _fold(function (_, value, key) {
        return f(value, key, map);
    }, null, map);
}
/* Export
 ******************************************************************************/
var HAMTMapIterator = function () {
    function HAMTMapIterator(v) {
        _classCallCheck(this, HAMTMapIterator);

        this[Symbol.iterator] = function () {
            return this;
        };
        this.v = v;
    }

    _createClass(HAMTMapIterator, [{
        key: "next",
        value: function next() {
            if (!this.v) return DONE;
            var v0 = this.v;
            this.v = appk(v0.rest);
            return v0;
        }
    }]);

    return HAMTMapIterator;
}();

var HAMTMap = function () {
    function HAMTMap() {
        var editable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : empty;
        var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, HAMTMap);

        this.isEmpty = function () {
            return isEmpty(this);
        };
        this[Symbol.iterator] = function () {
            return _entries(this);
        };
        this._editable = editable;
        this._edit = edit;
        this._config = {
            keyEq: config && config.keyEq || defKeyCompare,
            hash: config && config.hash || hash
        };
        this._root = root;
        this._size = size;
    }

    _createClass(HAMTMap, [{
        key: "setTree",
        value: function setTree(newRoot, newSize) {
            if (this._editable) {
                this._root = newRoot;
                this._size = newSize;
                return this;
            }
            return newRoot === this._root ? this : new HAMTMap(this._editable, this._edit, this._config, newRoot, newSize);
        }
    }, {
        key: "tryGetHash",
        value: function tryGetHash(alt, hash, key) {
            return _tryGetHash(alt, hash, key, this);
        }
    }, {
        key: "tryGet",
        value: function tryGet(alt, key) {
            return _tryGet(alt, key, this);
        }
    }, {
        key: "getHash",
        value: function getHash(hash, key) {
            return _getHash(hash, key, this);
        }
    }, {
        key: "get",
        value: function get(key, alt) {
            return _tryGet(alt, key, this);
        }
    }, {
        key: "hasHash",
        value: function hasHash(hash, key) {
            return _hasHash(hash, key, this);
        }
    }, {
        key: "has",
        value: function has(key) {
            return _has(key, this);
        }
    }, {
        key: "modifyHash",
        value: function modifyHash(hash, key, f) {
            return _modifyHash(f, hash, key, this);
        }
    }, {
        key: "modify",
        value: function modify(key, f) {
            return _modify2(f, key, this);
        }
    }, {
        key: "setHash",
        value: function setHash(hash, key, value) {
            return _setHash(hash, key, value, this);
        }
    }, {
        key: "set",
        value: function set(key, value) {
            return _set(key, value, this);
        }
    }, {
        key: "deleteHash",
        value: function deleteHash(hash, key) {
            return _removeHash(hash, key, this);
        }
    }, {
        key: "removeHash",
        value: function removeHash(hash, key) {
            return _removeHash(hash, key, this);
        }
    }, {
        key: "remove",
        value: function remove(key) {
            return _remove(key, this);
        }
    }, {
        key: "beginMutation",
        value: function beginMutation() {
            return _beginMutation(this);
        }
    }, {
        key: "endMutation",
        value: function endMutation() {
            return _endMutation(this);
        }
    }, {
        key: "mutate",
        value: function mutate(f) {
            return _mutate(f, this);
        }
    }, {
        key: "entries",
        value: function entries() {
            return _entries(this);
        }
    }, {
        key: "keys",
        value: function keys() {
            return _keys(this);
        }
    }, {
        key: "values",
        value: function values() {
            return _values(this);
        }
    }, {
        key: "fold",
        value: function fold(f, z) {
            return _fold(f, z, this);
        }
    }, {
        key: "forEach",
        value: function forEach(f) {
            return _forEach(f, this);
        }
    }, {
        key: "size",
        get: function get() {
            return this._size;
        }
    }]);

    return HAMTMap;
}();



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_identity_map__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var RelationshipAccessor = function () {
    function RelationshipAccessor(cache, base) {
        _classCallCheck(this, RelationshipAccessor);

        this._cache = cache;
        this.reset(base);
    }

    _createClass(RelationshipAccessor, [{
        key: 'reset',
        value: function reset(base) {
            var relationships = {};
            Object.keys(this._cache.schema.models).forEach(function (type) {
                var baseRelationships = base && base._relationships[type];
                relationships[type] = new __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__["a" /* ImmutableMap */](baseRelationships);
            });
            this._relationships = relationships;
        }
    }, {
        key: 'upgrade',
        value: function upgrade() {
            var _this = this;

            Object.keys(this._cache.schema.models).forEach(function (type) {
                if (!_this._relationships[type]) {
                    _this._relationships[type] = new __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__["a" /* ImmutableMap */]();
                }
            });
        }
    }, {
        key: 'relationshipExists',
        value: function relationshipExists(record, relationship, relatedRecord) {
            var rels = this._relationships[record.type].get(record.id);
            if (rels) {
                var rel = rels[relationship];
                if (rel) {
                    if (rel instanceof __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]) {
                        return rel.has(relatedRecord);
                    } else {
                        return Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["p" /* equalRecordIdentities */])(relatedRecord, rel);
                    }
                }
            }
            return !relatedRecord;
        }
    }, {
        key: 'relatedRecord',
        value: function relatedRecord(record, relationship) {
            var rels = this._relationships[record.type].get(record.id);
            if (rels) {
                return rels[relationship];
            }
        }
    }, {
        key: 'relatedRecords',
        value: function relatedRecords(record, relationship) {
            var rels = this._relationships[record.type].get(record.id);
            var map = rels && rels[relationship];
            if (map) {
                return Array.from(map.values);
            }
        }
    }, {
        key: 'relatedRecordsMap',
        value: function relatedRecordsMap(record, relationship) {
            var rels = this._relationships[record.type].get(record.id);
            if (rels) {
                return rels[relationship];
            }
        }
    }, {
        key: 'relatedRecordsMatch',
        value: function relatedRecordsMatch(record, relationship, relatedRecords) {
            var map = this.relatedRecordsMap(record, relationship);
            if (map) {
                var otherMap = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]();
                relatedRecords.forEach(function (id) {
                    return otherMap.add(id);
                });
                return map.equals(otherMap);
            } else {
                return relatedRecords.length === 0;
            }
        }
    }, {
        key: 'addRecord',
        value: function addRecord(record) {
            if (record.relationships) {
                var rels = {};
                Object.keys(record.relationships).forEach(function (name) {
                    var rel = record.relationships[name];
                    if (rel.data !== undefined) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(rel.data)) {
                            var relMap = rels[name] = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]();
                            rel.data.forEach(function (r) {
                                return relMap.add(r);
                            });
                        } else {
                            rels[name] = rel.data;
                        }
                    }
                });
                this._relationships[record.type].set(record.id, rels);
            }
        }
    }, {
        key: 'replaceRecord',
        value: function replaceRecord(record) {
            this.addRecord(record);
        }
    }, {
        key: 'clearRecord',
        value: function clearRecord(record) {
            this._relationships[record.type].remove(record.id);
        }
    }, {
        key: 'addToRelatedRecords',
        value: function addToRelatedRecords(record, relationship, relatedRecord) {
            var currentRels = this._relationships[record.type].get(record.id);
            var rels = currentRels ? cloneRelationships(currentRels) : {};
            var rel = rels[relationship];
            if (!rel) {
                rel = rels[relationship] = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]();
            }
            rel.add(relatedRecord);
            this._relationships[record.type].set(record.id, rels);
        }
    }, {
        key: 'removeFromRelatedRecords',
        value: function removeFromRelatedRecords(record, relationship, relatedRecord) {
            var currentRels = this._relationships[record.type].get(record.id);
            if (currentRels && currentRels[relationship]) {
                var rels = cloneRelationships(currentRels);
                var rel = rels[relationship];
                rel.remove(relatedRecord);
                this._relationships[record.type].set(record.id, rels);
            }
        }
    }, {
        key: 'replaceRelatedRecords',
        value: function replaceRelatedRecords(record, relationship, relatedRecords) {
            var currentRels = this._relationships[record.type].get(record.id);
            var rels = currentRels ? cloneRelationships(currentRels) : {};
            var rel = rels[relationship];
            if (!rel) {
                rel = rels[relationship] = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]();
            }
            relatedRecords.forEach(function (relatedRecord) {
                return rel.add(relatedRecord);
            });
            this._relationships[record.type].set(record.id, rels);
        }
    }, {
        key: 'replaceRelatedRecord',
        value: function replaceRelatedRecord(record, relationship, relatedRecord) {
            var currentRels = this._relationships[record.type].get(record.id);
            if (currentRels && currentRels[relationship] || relatedRecord) {
                var rels = currentRels ? cloneRelationships(currentRels) : {};
                rels[relationship] = relatedRecord;
                this._relationships[record.type].set(record.id, rels);
            }
        }
    }]);

    return RelationshipAccessor;
}();



function cloneRelationships(rels) {
    var clonedRels = {};
    if (rels) {
        Object.keys(rels).forEach(function (name) {
            var value = rels[name];
            if (value instanceof __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */]) {
                clonedRels[name] = new __WEBPACK_IMPORTED_MODULE_3__record_identity_map__["a" /* default */](value);
            } else {
                clonedRels[name] = value;
            }
        });
    }
    return clonedRels;
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InverseRelationshipAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var InverseRelationshipAccessor = function () {
    function InverseRelationshipAccessor(cache, base) {
        _classCallCheck(this, InverseRelationshipAccessor);

        this._cache = cache;
        this.reset(base);
    }

    _createClass(InverseRelationshipAccessor, [{
        key: 'reset',
        value: function reset(base) {
            var relationships = {};
            Object.keys(this._cache.schema.models).forEach(function (type) {
                var baseRelationships = base && base._relationships[type];
                relationships[type] = new __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__["a" /* ImmutableMap */](baseRelationships);
            });
            this._relationships = relationships;
        }
    }, {
        key: 'upgrade',
        value: function upgrade() {
            var _this = this;

            Object.keys(this._cache.schema.models).forEach(function (type) {
                if (!_this._relationships[type]) {
                    _this._relationships[type] = new __WEBPACK_IMPORTED_MODULE_2__orbit_immutable__["a" /* ImmutableMap */]();
                }
            });
        }
    }, {
        key: 'all',
        value: function all(record) {
            return this._relationships[record.type].get(record.id) || [];
        }
    }, {
        key: 'recordAdded',
        value: function recordAdded(record) {
            var _this2 = this;

            var relationships = record.relationships;
            var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
            if (relationships) {
                Object.keys(relationships).forEach(function (relationship) {
                    var relationshipData = relationships[relationship] && relationships[relationship].data;
                    if (relationshipData) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(relationshipData)) {
                            var relatedRecords = relationshipData;
                            relatedRecords.forEach(function (relatedRecord) {
                                _this2.add(relatedRecord, { record: recordIdentity, relationship: relationship });
                            });
                        } else {
                            var relatedRecord = relationshipData;
                            _this2.add(relatedRecord, { record: recordIdentity, relationship: relationship });
                        }
                    }
                });
            }
        }
    }, {
        key: 'recordRemoved',
        value: function recordRemoved(record) {
            var _this3 = this;

            var recordInCache = this._cache.records(record.type).get(record.id);
            var relationships = recordInCache && recordInCache.relationships;
            if (relationships) {
                Object.keys(relationships).forEach(function (relationship) {
                    var relationshipData = relationships[relationship] && relationships[relationship].data;
                    if (relationshipData) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["i" /* isArray */])(relationshipData)) {
                            var relatedRecords = relationshipData;
                            relatedRecords.forEach(function (relatedRecord) {
                                _this3.remove(relatedRecord, { record: record, relationship: relationship });
                            });
                        } else {
                            var relatedRecord = relationshipData;
                            _this3.remove(relatedRecord, { record: record, relationship: relationship });
                        }
                    }
                });
            }
            this._relationships[record.type].remove(record.id);
        }
    }, {
        key: 'relatedRecordAdded',
        value: function relatedRecordAdded(record, relationship, relatedRecord) {
            if (relatedRecord) {
                var relationshipDef = this._cache.schema.getModel(record.type).relationships[relationship];
                if (relationshipDef.inverse) {
                    var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
                    this.add(relatedRecord, { record: recordIdentity, relationship: relationship });
                }
            }
        }
    }, {
        key: 'relatedRecordsAdded',
        value: function relatedRecordsAdded(record, relationship, relatedRecords) {
            var _this4 = this;

            if (relatedRecords && relatedRecords.length > 0) {
                var relationshipDef = this._cache.schema.getModel(record.type).relationships[relationship];
                if (relationshipDef.inverse) {
                    var recordIdentity = Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["m" /* cloneRecordIdentity */])(record);
                    relatedRecords.forEach(function (relatedRecord) {
                        _this4.add(relatedRecord, { record: recordIdentity, relationship: relationship });
                    });
                }
            }
        }
    }, {
        key: 'relatedRecordRemoved',
        value: function relatedRecordRemoved(record, relationship, relatedRecord) {
            var relationshipDef = this._cache.schema.getModel(record.type).relationships[relationship];
            if (relationshipDef.inverse) {
                if (relatedRecord === undefined) {
                    var currentRecord = this._cache.records(record.type).get(record.id);
                    relatedRecord = currentRecord && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(currentRecord, ['relationships', relationship, 'data']);
                }
                if (relatedRecord) {
                    this.remove(relatedRecord, { record: record, relationship: relationship });
                }
            }
        }
    }, {
        key: 'relatedRecordsRemoved',
        value: function relatedRecordsRemoved(record, relationship, relatedRecords) {
            var _this5 = this;

            var relationshipDef = this._cache.schema.getModel(record.type).relationships[relationship];
            if (relationshipDef.inverse) {
                if (relatedRecords === undefined) {
                    var currentRecord = this._cache.records(record.type).get(record.id);
                    relatedRecords = currentRecord && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(currentRecord, ['relationships', relationship, 'data']);
                }
                if (relatedRecords) {
                    relatedRecords.forEach(function (relatedRecord) {
                        return _this5.remove(relatedRecord, { record: record, relationship: relationship });
                    });
                }
            }
        }
    }, {
        key: 'add',
        value: function add(record, inverseRelationship) {
            var rels = this._relationships[record.type].get(record.id);
            rels = rels ? Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["c" /* clone */])(rels) : [];
            rels.push(inverseRelationship);
            this._relationships[record.type].set(record.id, rels);
        }
    }, {
        key: 'remove',
        value: function remove(record, inverseRelationship) {
            var rels = this._relationships[record.type].get(record.id);
            if (rels) {
                var newRels = rels.filter(function (r) {
                    return !(r.record.type === inverseRelationship.record.type && r.record.id === inverseRelationship.record.id && r.relationship === inverseRelationship.relationship);
                });
                this._relationships[record.type].set(record.id, newRels);
            }
        }
    }]);

    return InverseRelationshipAccessor;
}();



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogTruncationStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__strategy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LogTruncationStrategy = function (_Strategy) {
    _inherits(LogTruncationStrategy, _Strategy);

    function LogTruncationStrategy() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, LogTruncationStrategy);

        options.name = options.name || 'log-truncation';
        return _possibleConstructorReturn(this, (LogTruncationStrategy.__proto__ || Object.getPrototypeOf(LogTruncationStrategy)).call(this, options));
    }

    _createClass(LogTruncationStrategy, [{
        key: 'activate',
        value: function activate(coordinator) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _get(LogTruncationStrategy.prototype.__proto__ || Object.getPrototypeOf(LogTruncationStrategy.prototype), 'activate', this).call(this, coordinator, options).then(function () {
                return _this2._reifySources();
            }).then(function () {
                _this2._transformListeners = {};
                _this2._sources.forEach(function (source) {
                    return _this2._activateSource(source);
                });
            });
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var _this3 = this;

            return _get(LogTruncationStrategy.prototype.__proto__ || Object.getPrototypeOf(LogTruncationStrategy.prototype), 'deactivate', this).call(this).then(function () {
                _this3._sources.forEach(function (source) {
                    return _this3._deactivateSource(source);
                });
                _this3._transformListeners = null;
            });
        }
    }, {
        key: '_reifySources',
        value: function _reifySources() {
            return this._sources.reduce(function (chain, source) {
                return chain.then(function () {
                    return source.transformLog.reified;
                });
            }, __WEBPACK_IMPORTED_MODULE_1__orbit_data__["o" /* default */].Promise.resolve());
        }
    }, {
        key: '_review',
        value: function _review(source, transformId) {
            var sources = this._sources;
            var match = true;
            if (sources.length > 1) {
                for (var i = 0; i < sources.length; i++) {
                    var s = sources[i];
                    if (s !== source) {
                        if (!s.transformLog.contains(transformId)) {
                            match = false;
                            break;
                        }
                    }
                }
            }
            if (match) {
                return this._truncateSources(transformId, 0);
            } else {
                return __WEBPACK_IMPORTED_MODULE_1__orbit_data__["o" /* default */].Promise.resolve();
            }
        }
    }, {
        key: '_truncateSources',
        value: function _truncateSources(transformId, relativePosition) {
            return this._sources.reduce(function (chain, source) {
                return chain.then(function () {
                    return source.transformLog.truncate(transformId, relativePosition);
                });
            }, __WEBPACK_IMPORTED_MODULE_1__orbit_data__["o" /* default */].Promise.resolve());
        }
    }, {
        key: '_activateSource',
        value: function _activateSource(source) {
            var _this4 = this;

            var listener = this._transformListeners[source.name] = function (transform) {
                return _this4._review(source, transform.id);
            };
            source.on('transform', listener);
        }
    }, {
        key: '_deactivateSource',
        value: function _deactivateSource(source) {
            var listener = this._transformListeners[source.name];
            source.off('transform', listener);
            delete this._transformListeners[source.name];
        }
    }]);

    return LogTruncationStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__strategy__["a" /* Strategy */]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLoggingStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coordinator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__strategy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orbit_utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EventLoggingStrategy = function (_Strategy) {
    _inherits(EventLoggingStrategy, _Strategy);

    function EventLoggingStrategy() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, EventLoggingStrategy);

        options.name = options.name || 'event-logging';

        var _this = _possibleConstructorReturn(this, (EventLoggingStrategy.__proto__ || Object.getPrototypeOf(EventLoggingStrategy)).call(this, options));

        _this._events = options.events;
        _this._interfaces = options.interfaces;
        _this._logPrefix = options.logPrefix || '[source-event]';
        return _this;
    }

    _createClass(EventLoggingStrategy, [{
        key: 'activate',
        value: function activate(coordinator) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return _get(EventLoggingStrategy.prototype.__proto__ || Object.getPrototypeOf(EventLoggingStrategy.prototype), 'activate', this).call(this, coordinator, options).then(function () {
                _this2._eventListeners = {};
                _this2._sources.forEach(function (source) {
                    return _this2._activateSource(source);
                });
            });
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var _this3 = this;

            return _get(EventLoggingStrategy.prototype.__proto__ || Object.getPrototypeOf(EventLoggingStrategy.prototype), 'deactivate', this).call(this).then(function () {
                _this3._sources.forEach(function (source) {
                    return _this3._deactivateSource(source);
                });
                _this3._eventListeners = null;
            });
        }
    }, {
        key: '_activateSource',
        value: function _activateSource(source) {
            var _this4 = this;

            this._sourceEvents(source).forEach(function (event) {
                _this4._addListener(source, event);
            });
        }
    }, {
        key: '_deactivateSource',
        value: function _deactivateSource(source) {
            var _this5 = this;

            this._sourceEvents(source).forEach(function (event) {
                _this5._removeListener(source, event);
            });
        }
    }, {
        key: '_sourceEvents',
        value: function _sourceEvents(source) {
            var _this6 = this;

            if (this._events) {
                return this._events;
            } else {
                var events = [];
                var interfaces = this._interfaces || this._sourceInterfaces(source);
                interfaces.forEach(function (i) {
                    Array.prototype.push.apply(events, _this6._interfaceEvents(i));
                });
                return events;
            }
        }
    }, {
        key: '_sourceInterfaces',
        value: function _sourceInterfaces(source) {
            var interfaces = ['transformable'];
            if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["q" /* isPullable */])(source)) {
                interfaces.push('pullable');
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["r" /* isPushable */])(source)) {
                interfaces.push('pushable');
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["s" /* isQueryable */])(source)) {
                interfaces.push('queryable');
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["t" /* isSyncable */])(source)) {
                interfaces.push('syncable');
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__orbit_data__["u" /* isUpdatable */])(source)) {
                interfaces.push('updatable');
            }
            return interfaces;
        }
    }, {
        key: '_interfaceEvents',
        value: function _interfaceEvents(interfaceName) {
            if (this._logLevel === __WEBPACK_IMPORTED_MODULE_0__coordinator__["a" /* LogLevel */].Info) {
                switch (interfaceName) {
                    case 'pullable':
                        return ['beforePull', 'pull', 'pullFail'];
                    case 'pushable':
                        return ['beforePush', 'push', 'pushFail'];
                    case 'queryable':
                        return ['beforeQuery', 'query', 'queryFail'];
                    case 'updatable':
                        return ['beforeUpdate', 'update', 'updateFail'];
                    case 'syncable':
                        return ['beforeSync', 'sync', 'syncFail'];
                    case 'transformable':
                        return ['transform'];
                }
            } else if (this._logLevel > __WEBPACK_IMPORTED_MODULE_0__coordinator__["a" /* LogLevel */].None) {
                switch (interfaceName) {
                    case 'pullable':
                        return ['pullFail'];
                    case 'pushable':
                        return ['pushFail'];
                    case 'queryable':
                        return ['queryFail'];
                    case 'syncable':
                        return ['syncFail'];
                    case 'updatable':
                        return ['updateFail'];
                }
            }
        }
    }, {
        key: '_addListener',
        value: function _addListener(source, event) {
            var listener = this._generateListener(source, event);
            Object(__WEBPACK_IMPORTED_MODULE_3__orbit_utils__["f" /* deepSet */])(this._eventListeners, [source.name, event], listener);
            source.on(event, listener, this);
        }
    }, {
        key: '_removeListener',
        value: function _removeListener(source, event) {
            var listener = Object(__WEBPACK_IMPORTED_MODULE_3__orbit_utils__["e" /* deepGet */])(this._eventListeners, [source.name, event]);
            source.off(event, listener, this);
            this._eventListeners[source.name][event] = null;
        }
    }, {
        key: '_generateListener',
        value: function _generateListener(source, event) {
            var _this7 = this;

            return function () {
                var _console;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                (_console = console).log.apply(_console, [_this7._logPrefix, source.name, event].concat(args));
            };
        }
    }]);

    return EventLoggingStrategy;
}(__WEBPACK_IMPORTED_MODULE_1__strategy__["a" /* Strategy */]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connection_strategy__ = __webpack_require__(13);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var RequestStrategy = function (_ConnectionStrategy) {
    _inherits(RequestStrategy, _ConnectionStrategy);

    function RequestStrategy(options) {
        _classCallCheck(this, RequestStrategy);

        return _possibleConstructorReturn(this, (RequestStrategy.__proto__ || Object.getPrototypeOf(RequestStrategy)).call(this, options));
    }

    return RequestStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__connection_strategy__["a" /* ConnectionStrategy */]);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connection_strategy__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SyncStrategy = function (_ConnectionStrategy) {
    _inherits(SyncStrategy, _ConnectionStrategy);

    function SyncStrategy(options) {
        _classCallCheck(this, SyncStrategy);

        var opts = options;
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A `source` must be specified for a SyncStrategy', !!opts.source);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('A `target` must be specified for a SyncStrategy', !!opts.target);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`source` should be a Source name specified as a string', typeof opts.source === 'string');
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`target` should be a Source name specified as a string', typeof opts.target === 'string');
        opts.on = opts.on || 'transform';
        opts.action = opts.action || 'sync';
        return _possibleConstructorReturn(this, (SyncStrategy.__proto__ || Object.getPrototypeOf(SyncStrategy)).call(this, opts));
    }

    return SyncStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__connection_strategy__["a" /* ConnectionStrategy */]);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DrupalSerializerClass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_jsonapi__ = __webpack_require__(65);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



var DrupalSerializerClass = function (_JSONAPISerializer) {
  _inherits(DrupalSerializerClass, _JSONAPISerializer);

  function DrupalSerializerClass() {
    _classCallCheck(this, DrupalSerializerClass);

    return _possibleConstructorReturn(this, (DrupalSerializerClass.__proto__ || Object.getPrototypeOf(DrupalSerializerClass)).apply(this, arguments));
  }

  _createClass(DrupalSerializerClass, [{
    key: 'resourceRelationship',

    // eslint-disable-next-line class-methods-use-this
    value: function resourceRelationship(type, relationship) {
      return relationship;
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'resourceAttribute',
    value: function resourceAttribute(type, attr) {
      return attr;
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'recordType',
    value: function recordType(resourceType) {
      return resourceType;
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'recordAttribute',
    value: function recordAttribute(type, resourceAttribute) {
      return resourceAttribute;
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'recordRelationship',
    value: function recordRelationship(type, resourceRelationship) {
      return resourceRelationship;
    }
  }]);

  return DrupalSerializerClass;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_jsonapi__["a" /* JSONAPISerializer */]);

var DrupalJSONAPISource = function (_JSONAPISource) {
  _inherits(DrupalJSONAPISource, _JSONAPISource);

  function DrupalJSONAPISource(settings) {
    _classCallCheck(this, DrupalJSONAPISource);

    return _possibleConstructorReturn(this, (DrupalJSONAPISource.__proto__ || Object.getPrototypeOf(DrupalJSONAPISource)).call(this, Object.assign({}, settings, {
      SerializerClass: DrupalSerializerClass
    })));
  }

  _createClass(DrupalJSONAPISource, [{
    key: 'resourcePath',
    value: function resourcePath(type, id) {
      var path = type.split('--');
      if (id) {
        var resourceId = this.serializer.resourceId(type, id);
        if (resourceId) {
          path.push(resourceId);
        }
      }
      return path.join('/');
    }
  }]);

  return DrupalJSONAPISource;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_jsonapi__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (DrupalJSONAPISource);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonapi_source__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__jsonapi_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonapi_serializer__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__jsonapi_serializer__["a"]; });



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonapi_serializer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_query_params__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_pull_operators__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_transform_requests__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_exceptions__ = __webpack_require__(70);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable valid-jsdoc */







if (typeof __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].globals.fetch !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch === undefined) {
    __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch = __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].globals.fetch;
}
/**
 Source for accessing a JSON API compliant RESTful API with a network fetch
 request.

 If a single transform or query requires more than one fetch request,
 requests will be performed sequentially and resolved together. From the
 perspective of Orbit, these operations will all succeed or fail together. The
 `maxRequestsPerTransform` and `maxRequestsPerQuery` settings allow limits to be
 set on this behavior. These settings should be set to `1` if your client/server
 configuration is unable to resolve partially successful transforms / queries.

 @class JSONAPISource
 @extends Source
 */
var JSONAPISource = function (_Source) {
    _inherits(JSONAPISource, _Source);

    function JSONAPISource() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, JSONAPISource);

        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('JSONAPISource\'s `schema` must be specified in `settings.schema` constructor argument', !!settings.schema);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('JSONAPISource requires Orbit.Promise be defined', __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('JSONAPISource requires Orbit.fetch be defined', __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch);
        settings.name = settings.name || 'jsonapi';

        var _this = _possibleConstructorReturn(this, (JSONAPISource.__proto__ || Object.getPrototypeOf(JSONAPISource)).call(this, settings));

        _this.namespace = settings.namespace;
        _this.host = settings.host;
        _this.defaultFetchHeaders = settings.defaultFetchHeaders || { Accept: 'application/vnd.api+json' };
        _this.defaultFetchTimeout = settings.defaultFetchTimeout || 5000;
        _this.maxRequestsPerTransform = settings.maxRequestsPerTransform;
        var SerializerClass = settings.SerializerClass || __WEBPACK_IMPORTED_MODULE_2__jsonapi_serializer__["a" /* default */];
        _this.serializer = new SerializerClass({ schema: settings.schema, keyMap: settings.keyMap });
        return _this;
    }
    /////////////////////////////////////////////////////////////////////////////
    // Pushable interface implementation
    /////////////////////////////////////////////////////////////////////////////


    _createClass(JSONAPISource, [{
        key: "_push",
        value: function _push(transform) {
            var _this2 = this;

            var requests = Object(__WEBPACK_IMPORTED_MODULE_5__lib_transform_requests__["b" /* getTransformRequests */])(this, transform);
            if (this.maxRequestsPerTransform && requests.length > this.maxRequestsPerTransform) {
                return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve().then(function () {
                    throw new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["j" /* TransformNotAllowed */]("This transform requires " + requests.length + " requests, which exceeds the specified limit of " + _this2.maxRequestsPerTransform + " requests per transform.", transform);
                });
            }
            return this._processRequests(requests, __WEBPACK_IMPORTED_MODULE_5__lib_transform_requests__["a" /* TransformRequestProcessors */]).then(function (transforms) {
                transforms.unshift(transform);
                return transforms;
            });
        }
        /////////////////////////////////////////////////////////////////////////////
        // Pullable interface implementation
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_pull",
        value: function _pull(query) {
            var operator = __WEBPACK_IMPORTED_MODULE_4__lib_pull_operators__["a" /* PullOperators */][query.expression.op];
            if (!operator) {
                throw new Error('JSONAPISource does not support the `${query.expression.op}` operator for queries.');
            }
            return operator(this, query);
        }
        /////////////////////////////////////////////////////////////////////////////
        // Publicly accessible methods particular to JSONAPISource
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "fetch",
        value: function fetch(url) {
            var _this3 = this;

            var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            settings.headers = settings.headers || this.defaultFetchHeaders;
            var headers = settings.headers;
            var method = settings.method || 'GET';
            // console.log('fetch', url, settings, 'polyfill', fetch.polyfill);
            var timeout = settings.timeout || this.defaultFetchTimeout;
            if (settings.timeout) {
                delete settings.timeout;
            }
            if (settings.json) {
                Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["a" /* assert */])('`json` and `body` can\'t both be set for fetch requests.', !settings.body);
                settings.body = JSON.stringify(settings.json);
                delete settings.json;
            }
            if (settings.body && method !== 'GET') {
                headers['Content-Type'] = headers['Content-Type'] || 'application/vnd.api+json; charset=utf-8';
            }
            if (settings.params) {
                if (url.indexOf('?') === -1) {
                    url += '?';
                } else {
                    url += '&';
                }
                url += Object(__WEBPACK_IMPORTED_MODULE_3__lib_query_params__["a" /* encodeQueryParams */])(settings.params);
                delete settings.params;
            }
            if (timeout) {
                return new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise(function (resolve, reject) {
                    var timedOut = void 0;
                    var timer = __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].globals.setTimeout(function () {
                        timedOut = true;
                        reject(new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["b" /* NetworkError */]("No fetch response within " + timeout + "ms."));
                    }, timeout);
                    __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch(url, settings).catch(function (e) {
                        __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].globals.clearTimeout(timer);
                        if (!timedOut) {
                            return _this3.handleFetchError(e);
                        }
                    }).then(function (response) {
                        __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].globals.clearTimeout(timer);
                        if (!timedOut) {
                            return _this3.handleFetchResponse(response);
                        }
                    }).then(resolve, reject);
                });
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].fetch(url, settings).catch(function (e) {
                    return _this3.handleFetchError(e);
                }).then(function (response) {
                    return _this3.handleFetchResponse(response);
                });
            }
        }
    }, {
        key: "handleFetchResponse",
        value: function handleFetchResponse(response) {
            var _this4 = this;

            if (response.status === 201) {
                if (this.responseHasContent(response)) {
                    return response.json();
                } else {
                    throw new __WEBPACK_IMPORTED_MODULE_6__lib_exceptions__["a" /* InvalidServerResponse */]("Server responses with a " + response.status + " status should return content with a Content-Type that includes 'application/vnd.api+json'.");
                }
            } else if (response.status >= 200 && response.status < 300) {
                if (this.responseHasContent(response)) {
                    return response.json();
                }
            } else {
                if (this.responseHasContent(response)) {
                    return response.json().then(function (data) {
                        return _this4.handleFetchResponseError(response, data);
                    });
                } else {
                    return this.handleFetchResponseError(response);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
        }
    }, {
        key: "handleFetchResponseError",
        value: function handleFetchResponseError(response, data) {
            var error = void 0;
            if (response.status >= 400 && response.status < 500) {
                error = new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["a" /* ClientError */](response.statusText);
            } else {
                error = new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["g" /* ServerError */](response.statusText);
            }
            error.response = response;
            error.data = data;
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.reject(error);
        }
    }, {
        key: "handleFetchError",
        value: function handleFetchError(e) {
            var error = new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["b" /* NetworkError */](e);
            return __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.reject(error);
        }
    }, {
        key: "responseHasContent",
        value: function responseHasContent(response) {
            var contentType = response.headers.get('Content-Type');
            return contentType && contentType.indexOf('application/vnd.api+json') > -1;
        }
    }, {
        key: "resourceNamespace",
        value: function resourceNamespace(type) {
            return this.namespace;
        }
    }, {
        key: "resourceHost",
        value: function resourceHost(type) {
            return this.host;
        }
    }, {
        key: "resourcePath",
        value: function resourcePath(type, id) {
            var path = [this.serializer.resourceType(type)];
            if (id) {
                var resourceId = this.serializer.resourceId(type, id);
                if (resourceId) {
                    path.push(resourceId);
                }
            }
            return path.join('/');
        }
    }, {
        key: "resourceURL",
        value: function resourceURL(type, id) {
            var host = this.resourceHost(type);
            var namespace = this.resourceNamespace(type);
            var url = [];
            if (host) {
                url.push(host);
            }
            if (namespace) {
                url.push(namespace);
            }
            url.push(this.resourcePath(type, id));
            if (!host) {
                url.unshift('');
            }
            return url.join('/');
        }
    }, {
        key: "resourceRelationshipURL",
        value: function resourceRelationshipURL(type, id, relationship) {
            return this.resourceURL(type, id) + '/relationships/' + this.serializer.resourceRelationship(type, relationship);
        }
    }, {
        key: "relatedResourceURL",
        value: function relatedResourceURL(type, id, relationship) {
            return this.resourceURL(type, id) + '/' + this.serializer.resourceRelationship(type, relationship);
        }
        /////////////////////////////////////////////////////////////////////////////
        // Private methods
        /////////////////////////////////////////////////////////////////////////////

    }, {
        key: "_processRequests",
        value: function _processRequests(requests, processors) {
            var _this5 = this;

            var transforms = [];
            var result = __WEBPACK_IMPORTED_MODULE_0__orbit_data__["o" /* default */].Promise.resolve();
            requests.forEach(function (request) {
                var processor = processors[request.op];
                result = result.then(function () {
                    return processor(_this5, request).then(function (additionalTransforms) {
                        if (additionalTransforms) {
                            Array.prototype.push.apply(transforms, additionalTransforms);
                        }
                    });
                });
            });
            return result.then(function () {
                return transforms;
            });
        }
    }]);

    return JSONAPISource;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["h" /* Source */]);
JSONAPISource = __decorate([__WEBPACK_IMPORTED_MODULE_0__orbit_data__["w" /* pullable */], __WEBPACK_IMPORTED_MODULE_0__orbit_data__["x" /* pushable */]], JSONAPISource);
/* harmony default export */ __webpack_exports__["a"] = (JSONAPISource);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = encodeQueryParams;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function flattenObjectToParams(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var params = [];
    Object.keys(obj).forEach(function (key) {
        if (!obj.hasOwnProperty(key)) {
            return;
        }
        var newPath = path.slice();
        newPath.push(key);
        if (_typeof(obj[key]) === 'object') {
            Array.prototype.push.apply(params, flattenObjectToParams(obj[key], newPath));
        } else {
            params.push({
                path: newPath,
                val: obj[key]
            });
        }
    });
    return params;
}
function encodeQueryParams(obj) {
    return flattenObjectToParams(obj).map(function (param) {
        if (param.path.length === 1) {
            param.path = param.path[0];
        } else {
            var firstSegment = param.path[0];
            var remainingSegments = param.path.slice(1);
            param.path = firstSegment + '[' + remainingSegments.join('][') + ']';
        }
        return param;
    }).map(function (param) {
        return encodeURIComponent(param.path) + '=' + encodeURIComponent(param.val);
    }).join('&');
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PullOperators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_settings__ = __webpack_require__(29);



function deserialize(source, document) {
    var deserialized = source.serializer.deserializeDocument(document);
    var records = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["n" /* toArray */])(deserialized.data);
    if (deserialized.included) {
        Array.prototype.push.apply(records, deserialized.included);
    }
    var operations = records.map(function (record) {
        return {
            op: 'replaceRecord',
            record: record
        };
    });
    return [Object(__WEBPACK_IMPORTED_MODULE_1__orbit_data__["l" /* buildTransform */])(operations)];
}
var PullOperators = {
    findRecord: function findRecord(source, query) {
        var expression = query.expression;
        var record = expression.record;

        var requestOptions = customRequestOptions(source, query);
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(requestOptions);
        return source.fetch(source.resourceURL(record.type, record.id), settings).then(function (data) {
            return deserialize(source, data);
        });
    },
    findRecords: function findRecords(source, query) {
        var expression = query.expression;
        var type = expression.type;

        var requestOptions = {};
        if (expression.filter) {
            requestOptions.filter = buildFilterParam(source, expression.filter);
        }
        if (expression.sort) {
            requestOptions.sort = buildSortParam(source, expression.sort);
        }
        if (expression.page) {
            requestOptions.page = expression.page;
        }
        requestOptions = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["l" /* merge */])(requestOptions, customRequestOptions(source, query));
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(requestOptions);
        return source.fetch(source.resourceURL(type), settings).then(function (data) {
            return deserialize(source, data);
        });
    },
    findRelatedRecord: function findRelatedRecord(source, query) {
        var expression = query.expression;
        var record = expression.record,
            relationship = expression.relationship;

        var requestOptions = customRequestOptions(source, query);
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(requestOptions);
        return source.fetch(source.relatedResourceURL(record.type, record.id, relationship), settings).then(function (data) {
            return deserialize(source, data);
        });
    },
    findRelatedRecords: function findRelatedRecords(source, query) {
        var expression = query.expression;
        var record = expression.record,
            relationship = expression.relationship;

        var requestOptions = customRequestOptions(source, query);
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(requestOptions);
        return source.fetch(source.relatedResourceURL(record.type, record.id, relationship), settings).then(function (data) {
            return deserialize(source, data);
        });
    }
};
function customRequestOptions(source, query) {
    var requestOptions = {};
    var queryOptions = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_utils__["e" /* deepGet */])(query, ['options', 'sources', source.name]) || {};
    if (queryOptions.include) {
        requestOptions.include = queryOptions.include.join(',');
    }
    if (queryOptions.timeout) {
        requestOptions.timeout = queryOptions.timeout;
    }
    return requestOptions;
}
function buildFilterParam(source, filterSpecifiers) {
    var filters = {};
    filterSpecifiers.forEach(function (filterSpecifier) {
        if (filterSpecifier.kind === 'attribute' && filterSpecifier.op === 'equal') {
            var attributeFilter = filterSpecifier;
            // Note: We don't know the `type` of the attribute here, so passing `null`
            var resourceAttribute = source.serializer.resourceAttribute(null, attributeFilter.attribute);
            filters[resourceAttribute] = attributeFilter.value;
        } else {
            throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["d" /* QueryExpressionParseError */]('Filter operation ${specifier.op} not recognized for JSONAPISource.', filterSpecifier);
        }
    });
    return filters;
}
function buildSortParam(source, sortSpecifiers) {
    return sortSpecifiers.map(function (sortSpecifier) {
        if (sortSpecifier.kind === 'attribute') {
            var attributeSort = sortSpecifier;
            // Note: We don't know the `type` of the attribute here, so passing `null`
            var resourceAttribute = source.serializer.resourceAttribute(null, attributeSort.attribute);
            return (sortSpecifier.order === 'descending' ? '-' : '') + resourceAttribute;
        }
        throw new __WEBPACK_IMPORTED_MODULE_1__orbit_data__["d" /* QueryExpressionParseError */]('Sort specifier ${sortSpecifier.kind} not recognized for JSONAPISource.', sortSpecifier);
    }).join(',');
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformRequestProcessors; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getTransformRequests;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_settings__ = __webpack_require__(29);



var TransformRequestProcessors = {
    addRecord: function addRecord(source, request) {
        var serializer = source.serializer;

        var record = request.record;
        var requestDoc = serializer.serializeDocument(record);
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'POST', json: requestDoc });
        return source.fetch(source.resourceURL(record.type), settings).then(function (raw) {
            var responseDoc = serializer.deserializeDocument(raw);
            var updatedRecord = responseDoc.data;
            var updateOps = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["z" /* recordDiffs */])(record, updatedRecord);
            if (updateOps.length > 0) {
                return [Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["l" /* buildTransform */])(updateOps)];
            }
        });
    },
    removeRecord: function removeRecord(source, request) {
        var _request$record = request.record,
            type = _request$record.type,
            id = _request$record.id;

        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'DELETE' });
        return source.fetch(source.resourceURL(type, id), settings).then(function () {
            return [];
        });
    },
    replaceRecord: function replaceRecord(source, request) {
        var record = request.record;
        var type = record.type,
            id = record.id;

        var requestDoc = source.serializer.serializeDocument(record);
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'PATCH', json: requestDoc });
        return source.fetch(source.resourceURL(type, id), settings).then(function () {
            return [];
        });
    },
    addToRelatedRecords: function addToRelatedRecords(source, request) {
        var _request$record2 = request.record,
            type = _request$record2.type,
            id = _request$record2.id;
        var relationship = request.relationship;

        var json = {
            data: request.relatedRecords.map(function (r) {
                return source.serializer.resourceIdentity(r);
            })
        };
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'POST', json: json });
        return source.fetch(source.resourceRelationshipURL(type, id, relationship), settings).then(function () {
            return [];
        });
    },
    removeFromRelatedRecords: function removeFromRelatedRecords(source, request) {
        var _request$record3 = request.record,
            type = _request$record3.type,
            id = _request$record3.id;
        var relationship = request.relationship;

        var json = {
            data: request.relatedRecords.map(function (r) {
                return source.serializer.resourceIdentity(r);
            })
        };
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'DELETE', json: json });
        return source.fetch(source.resourceRelationshipURL(type, id, relationship), settings).then(function () {
            return [];
        });
    },
    replaceRelatedRecord: function replaceRelatedRecord(source, request) {
        var _request$record4 = request.record,
            type = _request$record4.type,
            id = _request$record4.id;
        var relationship = request.relationship,
            relatedRecord = request.relatedRecord;

        var json = {
            data: relatedRecord ? source.serializer.resourceIdentity(relatedRecord) : null
        };
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'PATCH', json: json });
        return source.fetch(source.resourceRelationshipURL(type, id, relationship), settings).then(function () {
            return [];
        });
    },
    replaceRelatedRecords: function replaceRelatedRecords(source, request) {
        var _request$record5 = request.record,
            type = _request$record5.type,
            id = _request$record5.id;
        var relationship = request.relationship,
            relatedRecords = request.relatedRecords;

        var json = {
            data: relatedRecords.map(function (r) {
                return source.serializer.resourceIdentity(r);
            })
        };
        var settings = Object(__WEBPACK_IMPORTED_MODULE_2__request_settings__["a" /* buildFetchSettings */])(request, { method: 'PATCH', json: json });
        return source.fetch(source.resourceRelationshipURL(type, id, relationship), settings).then(function () {
            return [];
        });
    }
};
function getTransformRequests(source, transform) {
    var operations = transform.operations;
    var requests = [];
    var prevRequest = void 0;
    var options = transform.options && transform.options.sources && transform.options.sources[source.name] || {};
    transform.operations.forEach(function (operation) {
        var request = void 0;
        var newRequestNeeded = true;
        if (prevRequest && Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["p" /* equalRecordIdentities */])(prevRequest.record, operation.record)) {
            if (operation.op === 'removeRecord') {
                newRequestNeeded = false;
                if (prevRequest.op !== 'removeRecord') {
                    prevRequest = null;
                    requests.pop();
                }
            } else if (prevRequest.op === 'addRecord' || prevRequest.op === 'replaceRecord') {
                if (operation.op === 'replaceAttribute') {
                    newRequestNeeded = false;
                    replaceRecordAttribute(prevRequest.record, operation.attribute, operation.value);
                } else if (operation.op === 'replaceRelatedRecord') {
                    newRequestNeeded = false;
                    replaceRecordHasOne(prevRequest.record, operation.relationship, operation.relatedRecord);
                } else if (operation.op === 'replaceRelatedRecords') {
                    newRequestNeeded = false;
                    replaceRecordHasMany(prevRequest.record, operation.relationship, operation.relatedRecords);
                }
            } else if (prevRequest.op === 'addToRelatedRecords' && operation.op === 'addToRelatedRecords' && prevRequest.relationship === operation.relationship) {
                newRequestNeeded = false;
                prevRequest.relatedRecords.push(Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.relatedRecord));
            }
        }
        if (newRequestNeeded) {
            request = OperationToRequestMap[operation.op](operation);
        }
        if (request) {
            if (options.include) {
                request.include = options.include.join(',');
            }
            if (options.timeout) {
                request.timeout = options.timeout;
            }
            requests.push(request);
            prevRequest = request;
        }
    });
    return requests;
}
var OperationToRequestMap = {
    addRecord: function addRecord(operation) {
        return {
            op: 'addRecord',
            record: Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(operation.record)
        };
    },
    removeRecord: function removeRecord(operation) {
        return {
            op: 'removeRecord',
            record: Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.record)
        };
    },
    replaceAttribute: function replaceAttribute(operation) {
        var record = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.record);
        replaceRecordAttribute(record, operation.attribute, operation.value);
        return {
            op: 'replaceRecord',
            record: record
        };
    },
    replaceRecord: function replaceRecord(operation) {
        return {
            op: 'replaceRecord',
            record: Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["c" /* clone */])(operation.record)
        };
    },
    addToRelatedRecords: function addToRelatedRecords(operation) {
        return {
            op: 'addToRelatedRecords',
            record: Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.record),
            relationship: operation.relationship,
            relatedRecords: [Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.relatedRecord)]
        };
    },
    removeFromRelatedRecords: function removeFromRelatedRecords(operation) {
        return {
            op: 'removeFromRelatedRecords',
            record: Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.record),
            relationship: operation.relationship,
            relatedRecords: [Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.relatedRecord)]
        };
    },
    replaceRelatedRecord: function replaceRelatedRecord(operation) {
        var record = {
            type: operation.record.type,
            id: operation.record.id
        };
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', operation.relationship, 'data'], operation.relatedRecord);
        return {
            op: 'replaceRecord',
            record: record
        };
    },
    replaceRelatedRecords: function replaceRelatedRecords(operation) {
        var record = Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(operation.record);
        Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', operation.relationship, 'data'], operation.relatedRecords);
        return {
            op: 'replaceRecord',
            record: record
        };
    }
};
function replaceRecordAttribute(record, attribute, value) {
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['attributes', attribute], value);
}
function replaceRecordHasOne(record, relationship, relatedRecord) {
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', relationship, 'data'], relatedRecord ? Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(relatedRecord) : null);
}
function replaceRecordHasMany(record, relationship, relatedRecords) {
    Object(__WEBPACK_IMPORTED_MODULE_1__orbit_utils__["f" /* deepSet */])(record, ['relationships', relationship, 'data'], relatedRecords.map(function (r) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__orbit_data__["m" /* cloneRecordIdentity */])(r);
    }));
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidServerResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_core__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var InvalidServerResponse = function (_Exception) {
    _inherits(InvalidServerResponse, _Exception);

    function InvalidServerResponse(response) {
        _classCallCheck(this, InvalidServerResponse);

        var _this = _possibleConstructorReturn(this, (InvalidServerResponse.__proto__ || Object.getPrototypeOf(InvalidServerResponse)).call(this, 'Invalid server response: ' + response));

        _this.response = response;
        return _this;
    }

    return InvalidServerResponse;
}(__WEBPACK_IMPORTED_MODULE_0__orbit_core__["a" /* Exception */]);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(72);
module.exports = self.fetch.bind(self);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orbit_data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_json__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__schema_json__);



var schema = new __WEBPACK_IMPORTED_MODULE_0__orbit_data__["f" /* Schema */](__WEBPACK_IMPORTED_MODULE_1__schema_json___default.a);
/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {"models":{"block_content--basic":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"revision_id":{"type":"integer"},"langcode":{"type":"object"},"info":{"type":"string"},"revision_log":{"type":"string"},"changed":{"type":"number"},"revision_created":{"type":"number"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"body":{"type":"object"}},"relationships":{"type":{"type":"hasOne","model":"block_content_type--block_content_type"},"revision_user":{"type":"hasOne","model":"user--user"}}},"consumer--consumer":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"label":{"type":"string"},"description":{"type":"string"},"third_party":{"type":"boolean"},"secret":{"type":"object"},"confidential":{"type":"boolean"}},"relationships":{"owner_id":{"type":"hasOne","model":"user--user"},"image":{"type":"hasOne","model":"file--file"},"roles":{"type":"hasMany","model":"user_role--user_role"}}},"contact_message--feedback":{"attributes":{"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"mail":{"type":"string"},"subject":{"type":"string"},"message":{"type":"string"},"copy":{"type":"boolean"}},"relationships":{"contact_form":{"type":"hasOne","model":"contact_form--contact_form"},"recipient":{"type":"hasOne","model":"user--user"}}},"contact_message--personal":{"attributes":{"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"mail":{"type":"string"},"subject":{"type":"string"},"message":{"type":"string"},"copy":{"type":"boolean"}},"relationships":{"contact_form":{"type":"hasOne","model":"contact_form--contact_form"},"recipient":{"type":"hasOne","model":"user--user"}}},"evaluation_criteria--evaluation_criteria":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"text":{"type":"string"},"evaluation":{"type":"integer"},"status":{"type":"boolean"},"created":{"type":"number"},"changed":{"type":"number"},"revision_translation_affected":{"type":"boolean"},"default_langcode":{"type":"boolean"}},"relationships":{"revision_user":{"type":"hasOne","model":"user--user"},"user_id":{"type":"hasOne","model":"user--user"}}},"file--file":{"attributes":{"fid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"filename":{"type":"string"},"uri":{"type":"uri"},"filemime":{"type":"string"},"filesize":{"type":"integer"},"status":{"type":"boolean"},"created":{"type":"number"},"changed":{"type":"number"},"url":{"type":"string"}},"relationships":{"uid":{"type":"hasOne","model":"user--user"}}},"event_recurrence--event_recurrence":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"}},"relationships":{"revision_user":{"type":"hasOne","model":"user--user"},"user_id":{"type":"hasOne","model":"user--user"}}},"media--file":{"attributes":{"mid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"status":{"type":"boolean"},"name":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"bundle":{"type":"hasOne","model":"media_type--media_type"},"revision_user":{"type":"hasOne","model":"user--user"},"thumbnail":{"type":"hasOne","model":"file--file"},"uid":{"type":"hasOne","model":"user--user"},"field_media_file":{"type":"hasOne","model":"file--file"}}},"media--image":{"attributes":{"mid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"status":{"type":"boolean"},"name":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_media_caption":{"type":"object"},"field_media_credit":{"type":"object"}},"relationships":{"bundle":{"type":"hasOne","model":"media_type--media_type"},"revision_user":{"type":"hasOne","model":"user--user"},"thumbnail":{"type":"hasOne","model":"file--file"},"uid":{"type":"hasOne","model":"user--user"},"field_media_image":{"type":"hasOne","model":"file--file"}}},"media--slideshow":{"attributes":{"mid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"status":{"type":"boolean"},"name":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"bundle":{"type":"hasOne","model":"media_type--media_type"},"revision_user":{"type":"hasOne","model":"user--user"},"thumbnail":{"type":"hasOne","model":"file--file"},"uid":{"type":"hasOne","model":"user--user"},"field_media_slideshow":{"type":"hasMany","model":"media--image"}}},"media--web_video":{"attributes":{"mid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_created":{"type":"number"},"revision_log_message":{"type":"string"},"status":{"type":"boolean"},"name":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_media_caption":{"type":"object"},"field_media_video_embed_field":{"type":"string"}},"relationships":{"bundle":{"type":"hasOne","model":"media_type--media_type"},"revision_user":{"type":"hasOne","model":"user--user"},"thumbnail":{"type":"hasOne","model":"file--file"},"uid":{"type":"hasOne","model":"user--user"}}},"node--equipment":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_duration_min":{"type":"string"},"field_text_content":{"type":"object"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"},"field_equipment_type":{"type":"hasOne","model":"taxonomy_term--equipment_type"},"field_image_primary":{"type":"hasOne","model":"media--image"}}},"node--event":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_capacity_max":{"type":"integer"},"field_date_time":{"type":"object"},"field_event_is_template":{"type":"boolean"},"field_has_waitlist":{"type":"boolean"},"field_must_register":{"type":"boolean"},"field_text_content":{"type":"object"},"field_text_intro":{"type":"object"},"field_text_teaser":{"type":"string"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"},"field_event_recurrence":{"type":"hasOne","model":"event_recurrence--event_recurrence"},"field_event_series":{"type":"hasOne","model":"node--event_series"},"field_event_subject_heading":{"type":"hasMany","model":"taxonomy_term--lc_subject"},"field_event_tags":{"type":"hasMany","model":"taxonomy_term--tag"},"field_event_type":{"type":"hasMany","model":"taxonomy_term--event_type"},"field_image_primary":{"type":"hasOne","model":"media--image"},"field_room":{"type":"hasOne","model":"node--room"}}},"node--event_series":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"}}},"node--location":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_address":{"type":"object"},"field_contact_number":{"type":"string"},"field_location_hours":{"type":"array"},"field_map_link":{"type":"object"},"field_text_content":{"type":"object"},"field_text_intro":{"type":"object"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"},"field_image_primary":{"type":"hasOne","model":"media--image"}}},"node--page":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"body":{"type":"object"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"}}},"node--room":{"attributes":{"nid":{"type":"integer"},"uuid":{"type":"string"},"vid":{"type":"integer"},"langcode":{"type":"object"},"revision_timestamp":{"type":"number"},"revision_log":{"type":"string"},"status":{"type":"boolean"},"title":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"promote":{"type":"boolean"},"sticky":{"type":"boolean"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"path":{"type":"object"},"field_capacity_max":{"type":"integer"},"field_capacity_min":{"type":"integer"},"field_room_equipment":{"type":"object"},"field_room_fees":{"type":"object"},"field_staff_use_only":{"type":"boolean"},"field_text_content":{"type":"object"},"field_text_intro":{"type":"object"},"field_text_teaser":{"type":"string"}},"relationships":{"type":{"type":"hasOne","model":"node_type--node_type"},"revision_uid":{"type":"hasOne","model":"user--user"},"uid":{"type":"hasOne","model":"user--user"},"field_image_primary":{"type":"hasOne","model":"media--image"},"field_location":{"type":"hasOne","model":"node--location"},"field_room_type":{"type":"hasOne","model":"taxonomy_term--room_type"}}},"shortcut--default":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"title":{"type":"string"},"weight":{"type":"integer"},"link":{"type":"object"},"default_langcode":{"type":"boolean"}},"relationships":{"shortcut_set":{"type":"hasOne","model":"shortcut_set--shortcut_set"}}},"oauth2_token--access_token":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"value":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"expire":{"type":"number"},"status":{"type":"boolean"}},"relationships":{"bundle":{"type":"hasOne","model":"oauth2_token_type--oauth2_token_type"},"auth_user_id":{"type":"hasOne","model":"user--user"},"client":{"type":"hasOne","model":"consumer--consumer"},"scopes":{"type":"hasMany","model":"user_role--user_role"}}},"oauth2_token--auth_code":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"value":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"expire":{"type":"number"},"status":{"type":"boolean"}},"relationships":{"bundle":{"type":"hasOne","model":"oauth2_token_type--oauth2_token_type"},"auth_user_id":{"type":"hasOne","model":"user--user"},"client":{"type":"hasOne","model":"consumer--consumer"},"scopes":{"type":"hasMany","model":"user_role--user_role"}}},"oauth2_token--refresh_token":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"value":{"type":"string"},"created":{"type":"number"},"changed":{"type":"number"},"expire":{"type":"number"},"status":{"type":"boolean"}},"relationships":{"bundle":{"type":"hasOne","model":"oauth2_token_type--oauth2_token_type"},"auth_user_id":{"type":"hasOne","model":"user--user"},"client":{"type":"hasOne","model":"consumer--consumer"},"scopes":{"type":"hasMany","model":"user_role--user_role"}}},"taxonomy_term--audience":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--equipment_type":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--evaluation_criteria":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"},"field_evaluation":{"type":"integer"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--event_type":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"},"field_examples":{"type":"string"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--lc_subject":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--meeting_purpose":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--population_segment":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--room_type":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"taxonomy_term--tag":{"attributes":{"tid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"name":{"type":"string"},"description":{"type":"object"},"weight":{"type":"integer"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"},"path":{"type":"object"}},"relationships":{"vid":{"type":"hasOne","model":"taxonomy_vocabulary--taxonomy_vocabulary"},"parent":{"type":"hasMany","model":"taxonomy_term--taxonomy_term"}}},"user--user":{"attributes":{"uid":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"preferred_langcode":{"type":"object"},"preferred_admin_langcode":{"type":"object"},"name":{"type":"string"},"pass":{"type":"object"},"mail":{"type":"string"},"timezone":{"type":"string"},"status":{"type":"boolean"},"created":{"type":"number"},"changed":{"type":"number"},"access":{"type":"number"},"login":{"type":"number"},"init":{"type":"string"},"default_langcode":{"type":"boolean"}},"relationships":{"roles":{"type":"hasMany","model":"user_role--user_role"}}},"menu_link_content--menu_link_content":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"langcode":{"type":"object"},"bundle":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"menu_name":{"type":"string"},"link":{"type":"object"},"external":{"type":"boolean"},"rediscover":{"type":"boolean"},"weight":{"type":"integer"},"expanded":{"type":"boolean"},"enabled":{"type":"boolean"},"parent":{"type":"string"},"changed":{"type":"number"},"default_langcode":{"type":"boolean"}}},"paragraph--stories_image":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"revision_id":{"type":"integer"},"langcode":{"type":"object"},"status":{"type":"boolean"},"created":{"type":"number"},"parent_id":{"type":"string"},"parent_type":{"type":"string"},"parent_field_name":{"type":"string"},"behavior_settings":{"type":"string"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"field_stories_alignment":{"type":"string"}},"relationships":{"type":{"type":"hasOne","model":"paragraphs_type--paragraphs_type"},"uid":{"type":"hasOne","model":"user--user"},"revision_uid":{"type":"hasOne","model":"user--user"},"field_stories_image":{"type":"hasOne","model":"media--image"}}},"paragraph--stories_slideshow":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"revision_id":{"type":"integer"},"langcode":{"type":"object"},"status":{"type":"boolean"},"created":{"type":"number"},"parent_id":{"type":"string"},"parent_type":{"type":"string"},"parent_field_name":{"type":"string"},"behavior_settings":{"type":"string"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"field_stories_alignment":{"type":"string"}},"relationships":{"type":{"type":"hasOne","model":"paragraphs_type--paragraphs_type"},"uid":{"type":"hasOne","model":"user--user"},"revision_uid":{"type":"hasOne","model":"user--user"},"field_stories_slideshow":{"type":"hasOne","model":"media--slideshow"}}},"paragraph--stories_web_video":{"attributes":{"id":{"type":"integer"},"uuid":{"type":"string"},"revision_id":{"type":"integer"},"langcode":{"type":"object"},"status":{"type":"boolean"},"created":{"type":"number"},"parent_id":{"type":"string"},"parent_type":{"type":"string"},"parent_field_name":{"type":"string"},"behavior_settings":{"type":"string"},"default_langcode":{"type":"boolean"},"revision_translation_affected":{"type":"boolean"},"field_stories_alignment":{"type":"string"}},"relationships":{"type":{"type":"hasOne","model":"paragraphs_type--paragraphs_type"},"uid":{"type":"hasOne","model":"user--user"},"revision_uid":{"type":"hasOne","model":"user--user"},"field_stories_web_video":{"type":"hasOne","model":"media--web_video"}}}}}

/***/ })
/******/ ]);