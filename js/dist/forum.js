module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/common/WidgetManager.ts":
/*!*************************************!*\
  !*** ./src/common/WidgetManager.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetManager; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


var WidgetManager = /*#__PURE__*/function () {
  function WidgetManager() {
    this.widgets = [];
    this.states = {};
    this.config = {};
  }

  var _proto = WidgetManager.prototype;

  _proto.add = function add(widget, extension) {
    widget.extension = extension;
    widget.id = extension + ":" + widget.key;
    this.widgets.push(widget);
    this.states[widget.id] = {};
  };

  _proto.getbyId = function getbyId(id) {
    return this.getWidgetInstances().find(function (w) {
      return w.id === id;
    }) || null;
  };

  _proto.getWidgetInstances = function getWidgetInstances() {
    var _this = this;

    var disabled = this.config.disabled || [];
    var widgets = (this.config.instances || []).map(function (widget) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.widgets.find(function (w) {
        return w.id === widget.id;
      }) || {}, widget);
    });
    this.widgets.forEach(function (widget) {
      var lookupWidget = widgets.find(function (w) {
        return w.id === widget.id;
      });

      if (!lookupWidget) {
        widgets.push(widget);
      }
    });
    return widgets.filter(function (widget) {
      return !disabled.includes(widget.id);
    });
  };

  _proto.get = function get(placement, withHidden) {
    var _this2 = this;

    if (withHidden === void 0) {
      withHidden = false;
    }

    var widgets = this.getWidgetInstances().filter(function (widget) {
      return widget.placement === placement;
    }).filter(function (widget) {
      return withHidden || (typeof widget.isDisabled === 'function' ? !widget.isDisabled() : !widget.isDisabled);
    }).map(function (widget) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, widget, {
        state: _this2.states[widget.id]
      });
    });
    return widgets;
  };

  _proto.setConfig = function setConfig(config) {
    this.config = config;
  };

  return WidgetManager;
}();



/***/ }),

/***/ "./src/common/compat.ts":
/*!******************************!*\
  !*** ./src/common/compat.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend/Widgets */ "./src/common/extend/Widgets.ts");
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Widget */ "./src/common/components/Widget.tsx");


/* harmony default export */ __webpack_exports__["default"] = ({
  'extensions/afrux-forum-widgets-core/common/extend/Widgets': _extend_Widgets__WEBPACK_IMPORTED_MODULE_0__["default"],
  'extensions/afrux-forum-widgets-core/common/components/Widget': _components_Widget__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/common/components/Widget.tsx":
/*!******************************************!*\
  !*** ./src/common/components/Widget.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);





var Widget = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Widget, _Component);

  function Widget() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Widget.prototype;

  _proto.view = function view() {
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()(['AfruxWidgets-Widget', this.className()])
    }, this.header(), m("div", {
      className: "AfruxWidgets-Widget-content"
    }, this.content()));
  };

  _proto.header = function header() {
    var iconName = this.icon();
    var title = this.title();
    return title ? m("div", {
      className: "AfruxWidgets-Widget-title"
    }, iconName ? m("span", {
      className: "AfruxWidgets-Widget-title-icon"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(iconName)) : null, m("span", {
      className: "AfruxWidgets-Widget-title-label"
    }, title), m("div", {
      className: "AfruxWidgets-Widget-title-desc"
    }, this.description())) : null;
  };

  _proto.className = function className() {
    return '';
  };

  _proto.title = function title() {
    return '';
  };

  _proto.description = function description() {
    return '';
  };

  _proto.icon = function icon() {
    return '';
  };

  _proto.content = function content() {
    return '';
  };

  return Widget;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/extend/Widgets.ts":
/*!**************************************!*\
  !*** ./src/common/extend/Widgets.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widgets; });
var Widgets = /*#__PURE__*/function () {
  function Widgets() {
    this.widgets = [];
  }

  var _proto = Widgets.prototype;

  _proto.add = function add(widget) {
    this.widgets.push(widget);
    return this;
  };

  _proto.extend = function extend(app, extension) {
    this.widgets.map(function (widget) {
      app.widgets.add(widget, extension);
    });
  };

  return Widgets;
}();



/***/ }),

/***/ "./src/common/utils/sortWidgets.ts":
/*!*****************************************!*\
  !*** ./src/common/utils/sortWidgets.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortWidgets; });
function sortWidgets(widgets) {
  return widgets.slice(0).sort(function (a, b) {
    var aPos = a.position;
    var bPos = b.position;
    return aPos > bPos ? 1 : aPos < bPos ? -1 : 0;
  });
}

/***/ }),

/***/ "./src/forum/compat.ts":
/*!*****************************!*\
  !*** ./src/forum/compat.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/compat */ "./src/common/compat.ts");
/* harmony import */ var _components_EndWidgetSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EndWidgetSection */ "./src/forum/components/EndWidgetSection.tsx");
/* harmony import */ var _components_StartTopWidgetSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/StartTopWidgetSection */ "./src/forum/components/StartTopWidgetSection.tsx");
/* harmony import */ var _components_StartBottomWidgetSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/StartBottomWidgetSection */ "./src/forum/components/StartBottomWidgetSection.tsx");
/* harmony import */ var _components_TopWidgetSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TopWidgetSection */ "./src/forum/components/TopWidgetSection.tsx");





/* harmony default export */ __webpack_exports__["default"] = (Object.assign(_common_compat__WEBPACK_IMPORTED_MODULE_0__["default"], {
  'extensions/afrux-forum-widgets-core/forum/components/EndWidgetSection': _components_EndWidgetSection__WEBPACK_IMPORTED_MODULE_1__["default"],
  'extensions/afrux-forum-widgets-core/forum/components/StartTopWidgetSection': _components_StartTopWidgetSection__WEBPACK_IMPORTED_MODULE_2__["default"],
  'extensions/afrux-forum-widgets-core/forum/components/StartBottomWidgetSection': _components_StartBottomWidgetSection__WEBPACK_IMPORTED_MODULE_3__["default"],
  'extensions/afrux-forum-widgets-core/forum/components/TopWidgetSection': _components_TopWidgetSection__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/forum/components/BottomWidgetSection.tsx":
/*!******************************************************!*\
  !*** ./src/forum/components/BottomWidgetSection.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomWidgetSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/sortWidgets */ "./src/common/utils/sortWidgets.ts");




var BottomWidgetSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BottomWidgetSection, _Component);

  function BottomWidgetSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BottomWidgetSection.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "AfruxWidgets-bottomWidgetSection AfruxWidgets-WidgetSection"
    }, Object(_common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__["default"])(app.widgets.get('bottom')).map(function (widget) {
      return widget.component.component({
        state: widget.state
      });
    }));
  };

  return BottomWidgetSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/EndWidgetSection.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/EndWidgetSection.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EndWidgetSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/sortWidgets */ "./src/common/utils/sortWidgets.ts");




var EndWidgetSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EndWidgetSection, _Component);

  function EndWidgetSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EndWidgetSection.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "AfruxWidgets-sideNavAlt AfruxWidgets-WidgetSection"
    }, Object(_common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__["default"])(app.widgets.get('end')).map(function (widget) {
      return widget.component.component({
        state: widget.state
      });
    }));
  };

  return EndWidgetSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/StartBottomWidgetSection.tsx":
/*!***********************************************************!*\
  !*** ./src/forum/components/StartBottomWidgetSection.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartBottomWidgetSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/sortWidgets */ "./src/common/utils/sortWidgets.ts");




var StartBottomWidgetSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StartBottomWidgetSection, _Component);

  function StartBottomWidgetSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = StartBottomWidgetSection.prototype;

  _proto.view = function view() {
    if (app.current.data.routeName !== 'index') {
      return null;
    }

    return m("div", {
      className: "AfruxWidgets-startBottom AfruxWidgets-WidgetSection"
    }, Object(_common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__["default"])(app.widgets.get('start_bottom')).map(function (widget) {
      return widget.component.component({
        state: widget.state
      });
    }));
  };

  return StartBottomWidgetSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/StartTopWidgetSection.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/StartTopWidgetSection.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartTopWidgetSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/sortWidgets */ "./src/common/utils/sortWidgets.ts");




var StartTopWidgetSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StartTopWidgetSection, _Component);

  function StartTopWidgetSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = StartTopWidgetSection.prototype;

  _proto.view = function view() {
    if (app.current.data.routeName !== 'index') {
      return null;
    }

    return m("div", {
      className: "AfruxWidgets-startTop AfruxWidgets-WidgetSection"
    }, Object(_common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__["default"])(app.widgets.get('start_top')).map(function (widget) {
      return widget.component.component({
        state: widget.state
      });
    }));
  };

  return StartTopWidgetSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TopWidgetSection.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/TopWidgetSection.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopWidgetSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/sortWidgets */ "./src/common/utils/sortWidgets.ts");




var TopWidgetSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TopWidgetSection, _Component);

  function TopWidgetSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TopWidgetSection.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "AfruxWidgets-topWidgetSection AfruxWidgets-WidgetSection"
    }, Object(_common_utils_sortWidgets__WEBPACK_IMPORTED_MODULE_2__["default"])(app.widgets.get('top')).map(function (widget) {
      return widget.component.component({
        state: widget.state
      });
    }));
  };

  return TopWidgetSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_WidgetManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/WidgetManager */ "./src/common/WidgetManager.ts");
/* harmony import */ var _components_EndWidgetSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EndWidgetSection */ "./src/forum/components/EndWidgetSection.tsx");
/* harmony import */ var _components_StartTopWidgetSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StartTopWidgetSection */ "./src/forum/components/StartTopWidgetSection.tsx");
/* harmony import */ var _components_StartBottomWidgetSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StartBottomWidgetSection */ "./src/forum/components/StartBottomWidgetSection.tsx");
/* harmony import */ var _components_TopWidgetSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TopWidgetSection */ "./src/forum/components/TopWidgetSection.tsx");
/* harmony import */ var _components_BottomWidgetSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BottomWidgetSection */ "./src/forum/components/BottomWidgetSection.tsx");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.ts");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__);








app.widgets = new _common_WidgetManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
app.initializers.add('afrux/forum-widgets-core', function () {
  app.widgets.setConfig(app.data.resources[0].attributes['afrux-forum-widgets-core.config']);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (vnode) {
    vnode.children[1].children[0].children.push(m(_components_EndWidgetSection__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    vnode.children[1].children = [m(_components_TopWidgetSection__WEBPACK_IMPORTED_MODULE_6__["default"], null)].concat(vnode.children[1].children, [m(_components_BottomWidgetSection__WEBPACK_IMPORTED_MODULE_7__["default"], null)]);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    items.add('startTopWidgetSection', m(_components_StartTopWidgetSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), 100);
    items.add('startBottomWidgetSection', m(_components_StartBottomWidgetSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), -100);
  });
}); // Expose compat API

 // @ts-ignore


Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_9__["compat"], _compat__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map