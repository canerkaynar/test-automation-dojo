module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"7":"5deb4df4b2aca143adfe"}[chunkId] + ".js");
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("re-resizable");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(7);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "re-resizable"
var external_re_resizable_ = __webpack_require__(8);
var external_re_resizable_default = /*#__PURE__*/__webpack_require__.n(external_re_resizable_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-52lqqu-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 2rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-family:'roboto condensed bold';font-size:1em;background:none;border:0;cursor:pointer;color:", ";margin:0 auto;@media (max-width:700px){font-size:10px;padding:0 10px;}}@media (max-width:1300px){width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.greyLight;
});
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/Nav.js




var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(styles_NavStyles, null, external_react_default.a.createElement(link_default.a, {
    href: "/signup"
  }, external_react_default.a.createElement("a", null, "Signup")), external_react_default.a.createElement(link_default.a, {
    href: "/me"
  }, external_react_default.a.createElement("a", null, "Account")));
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./components/Header.js




var Logo = external_styled_components_default.a.div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1x53421-0"
})(["text-align:center;a{padding:1rem 1rem;color:white;text-transform:uppercase;text-decoration:none;}img{vertical-align:middle;margin-left:-15px;}@media (max-width:1300px){margin:0;text-align:center;}"]);
var StyledHeader = external_styled_components_default.a.nav.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1x53421-1"
})(["width:290px;position:absolute;bottom:30px;top:0;overflow:auto;left:0;background-color:", ";padding:2rem;color:", ";border-right:1px solid black;.bar{margin:0 auto;}.search-container{position:relative;input{padding:7px;width:100%;color:#aaa;border:1px solid #585858;background-color:#373737;border-radius:2px;}}.title{text-align:center;line-height:4rem;}.example-list{list-style:none;padding:0 2px;margin-left:0;li{border-left:1px solid black;cursor:pointer;}li:hover{background-color:rgba(97,218,251,0.098);color:rgb(227,230,232);border-color:rgb(5,161,204);}a{color:", ";width:100%;display:block;padding-top:5px;padding-bottom:5px;padding-left:12px;}}}"], function (props) {
  return props.theme.blackLight;
}, function (props) {
  return props.theme.greyLight;
}, function (props) {
  return props.theme.greyLight;
});
var examples = [{
  title: 'Input',
  url: '/input'
}, {
  title: 'Checkbox',
  url: '/checkbox'
}, {
  title: 'Dropdown',
  url: '/dropdown'
}, {
  title: 'Hovers'
}, {
  title: 'Radio Button'
}, {
  title: 'Link'
}, {
  title: 'Redirect Link'
}, {
  title: 'Button'
}, {
  title: 'Datepicker'
}, {
  title: 'File Download'
}, {
  title: 'Img Source Control'
}, {
  title: 'List Items'
}];

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement(Logo, {
    className: "bar"
  }, external_react_default.a.createElement("a", {
    href: "/"
  }, external_react_default.a.createElement("img", {
    src: "/static/kloia-logo.png",
    srcSet: "/static/kloia-logo.png 1x, /static/kloia-logo-2x.png 2x",
    width: "130",
    height: "58"
  }))), external_react_default.a.createElement("h1", {
    className: "title"
  }, "TEST AUTOMATION", external_react_default.a.createElement("br", null), "DOJO"), external_react_default.a.createElement("div", {
    className: "search-container"
  }, external_react_default.a.createElement("input", {
    type: "text",
    placeholder: "search"
  })), external_react_default.a.createElement("ul", {
    className: "example-list"
  }, examples.map(function (item, index) {
    return external_react_default.a.createElement("li", {
      key: index
    }, external_react_default.a.createElement(link_default.a, {
      href: item.url ? item.url : '/'
    }, external_react_default.a.createElement("a", null, item.title)));
  })));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon_16x16.ico"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon_32x32.ico"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("title", null, "Test Automation Dojo"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Footer.js


var FooterStyle = external_styled_components_default.a.footer.withConfig({
  displayName: "Footer__FooterStyle",
  componentId: "sc-1q89t4n-0"
})(["padding-top:3px;line-height:35px;height:35px;position:fixed;width:100%;bottom:0;background-color:#1D3A6D;color:#ebf8ff;text-align:center;"]);

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(FooterStyle, null, "CLOUD, DEVOPS AND MICROSERVICES CONSULTING \xA9 2018");
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(10);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(6);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./components/Page.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'roboto condensed bold';\n    src: url('/static/roboto-condensed-bold.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'roboto condensed regular';\n    src: url('/static/roboto-condensed-regular.woff2') format('woff2');\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'roboto condensed regular';\n    //background: #f1f1f1;\n    background: url(https://kloia.co.uk/wp-content/uploads/sites/12/2018/03/kloia_background_v2.jpg) no-repeat;\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  button {  font-family: 'roboto condensed regular'; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var DynamicInspector = dynamic_default()({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 25));
  },
  loading: function loading() {
    return external_react_default.a.createElement(Loading, {
      id: "loader"
    }, external_react_default.a.createElement("div", {
      className: "spinner",
      role: "spinner"
    }, external_react_default.a.createElement("div", {
      className: "spinner-icon"
    })));
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(25)];
    },
    modules: ['./Inspector']
  }
});
var theme = {
  red: '#FF0000',
  black: '#393939',
  blackLight: '#23282A',
  grey: '#3A3A3A',
  greyLight: '#e0e0e0',
  white: '#FFFFFF',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1050px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var Loading = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Loading",
  componentId: "sc-1tdtpxy-0"
})(["background:#464749;height:100%;position:relative;.spinner{display:block;z-index:1031;top:50%;right:50%;position:absolute;transform:translate(-50%,-50%);}.spinner-icon{width:25px;height:25px;box-sizing:border-box;border:solid 2px transparent;border-top-color:", ";border-left-color:", ";border-radius:50%;-webkit-animation:loader-spinner 400ms linear infinite;animation:loader-spinner 400ms linear infinite;}.loader-custom-parent{overflow:hidden;position:relative;}.loader-custom-parent .spinner,.loader-custom-parent .bar{position:absolute;}@-webkit-keyframes loader-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@keyframes loader-spinner{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], function (props) {
  return props.theme.greyLight;
}, function (props) {
  return props.theme.greyLight;
});
var StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-1tdtpxy-1"
})(["color:", ";.resizer-stick{div{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20' height='20' viewBox='0 0 1200 1200' style='&%2310;'%3E%3Cg%3E%3Cg transform='translate(600 600) scale(0.69 0.69) rotate(0) translate(-600 -600)' style='fill:%23FFFFFF;'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23FFFFFF' xml:space='preserve' version='1.1' style='shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;' viewBox='0 0 676 276' x='0px' y='0px' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E .fil0 %7Bfill:%23D9D8D8%7D %3C/style%3E%3C/defs%3E%3Cg%3E%3Cpath class='fil0' d='M22 0l631 0c33,0 27,81 0,81l-631 0c-5,0 -10,-2 -14,-5 -10,-11 -13,-76 14,-76z'/%3E%3Cpath class='fil0' d='M22 195l631 0c32,0 28,81 0,81l-631 0c-31,0 -27,-81 0,-81z'/%3E%3C/g%3E%3C/svg%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center;top:0 !important;}}"], function (props) {
  return props.theme.black;
});
var Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-1tdtpxy-2"
})(["border-radius:6px;margin:0 auto;padding:2rem;left:290px;right:0;top:0;bottom:0;position:absolute;overflow:auto;margin-bottom:35px;.box{box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);background:white;padding:1rem;border-radius:6px;}"]);
Object(external_styled_components_["injectGlobal"])(_templateObject(), theme.black);
/*const MyButton = styled.button`
    background: red;
    font-size: ${props => (props.huge ? '40px' : '20px')};
    font-family: 'Roboto Condensed', sans-serif;
`;*/

var Page_Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));
    _this.state = {
      consoleHeight: 200
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StyledPage, null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Inner, null, this.props.children), external_react_default.a.createElement("span", {
        className: "resizer"
      }), external_react_default.a.createElement(external_re_resizable_default.a, {
        className: "resize-console",
        style: {
          position: "absolute",
          bottom: 35,
          right: 0,
          left: 290,
          background: "#464749",
          padding: 10
        },
        size: {
          height: this.state.consoleHeight
        },
        minHeight: 83,
        maxHeight: 500,
        handleWrapperClass: 'resizer-stick',
        enable: {
          top: true,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        },
        onResizeStop: function onResizeStop(e, direction, ref, d) {
          _this2.setState(_objectSpread({}, _this2.state, {
            consoleHeight: _this2.state.consoleHeight + d.height
          }));
        }
      }, external_react_default.a.createElement(DynamicInspector, null)), external_react_default.a.createElement(components_Footer, null)));
    }
  }]);

  return Page;
}(external_react_default.a.Component);

/* harmony default export */ var components_Page = (Page_Page);
// CONCATENATED MODULE: ./pages/_app.js


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }




var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, null)));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("console-feed");

/***/ })
/******/ ]);