(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/Inspector.js":
/*!*********************************!*\
  !*** ./components/Inspector.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var console_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! console-feed */ "./node_modules/console-feed/lib/index.js");
/* harmony import */ var console_feed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(console_feed__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/canerkaynar/Documents/Projects/test-automation-dojo/components/Inspector.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var InspectorStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Inspector__InspectorStyle",
  componentId: "u3lh8t-0"
})(["height:calc(100% - 30px);width:100%;color:#aaa;border:1px solid #585858;background-color:#373737;border-radius:2px;position:relative;.console-input{border:0;background-color:#373737;color:", ";margin-left:7px;width:90%;font-size:13px;height:30px;font-family:Menlo,monospace;}.console-input:focus{outline:none;}.console-input-wrapper{position:absolute;width:100%;border-top:1px solid #585858;background-color:#373737;bottom:0;}.console-feed{overflow:auto;width:100%;}.cursor{margin-left:12px;vertical-align:middle;color:", ";}.inner{background:#242424;position:relative;width:100%;overflow:scroll;height:calc(100% - 30px);}[data-method = log]{line-height:normal;margin:0;padding:6px 3px 4px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
var ConsoleTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Inspector__ConsoleTitle",
  componentId: "u3lh8t-1"
})(["color:", ";margin-left:2px;font-family:'roboto condensed bold';"], function (props) {
  return props.theme.lightgrey;
});
var ClearButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Inspector__ClearButton",
  componentId: "u3lh8t-2"
})(["float:right;height:23px;margin-right:2px;border-radius:6px;background-color:#373737;color:", ";border-color:#00c0d7;cursor:pointer;:focus{outline:none;}"], function (props) {
  return props.theme.lightgrey;
});

var Inspector =
/*#__PURE__*/
function (_Component) {
  _inherits(Inspector, _Component);

  function Inspector(props) {
    var _this;

    _classCallCheck(this, Inspector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inspector).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      _this.messagesEnd.scrollIntoView({
        behavior: "smooth"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState(_objectSpread({}, _this.state, {
        value: e.target.value
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearLogs", function () {
      _this.setState(_objectSpread({}, _this.state, {
        logs: []
      }), function () {
        return console.log("Console logs was cleared!");
      });
    });

    _this.state = {
      logs: [{
        method: 'result',
        data: ['Result']
      }, {
        method: 'command',
        data: ['Command']
      }],
      filter: ['log'],
      value: ''
    };
    return _this;
  }

  _createClass(Inspector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(console_feed__WEBPACK_IMPORTED_MODULE_2__["Hook"])(window.console, function (log) {
        _this2.setState({
          logs: _toConsumableArray(_this2.state.logs).concat([Object(console_feed__WEBPACK_IMPORTED_MODULE_2__["Decode"])(log)])
        });
      });
      this.scrollToBottom();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.logs.length !== prevState.logs.length) {
        this.scrollToBottom();
      }
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      if (e.keyCode === 13) {
        console.log(e.target.value);

        try {
          var val = (0, eval)(e.target.value);
          window.console.log(val !== undefined ? val : 'undefined');
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var logs = this.state.logs;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConsoleTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "CONSOLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearButton, {
        onClick: this.clearLogs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "CLEAR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "console-feed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(console_feed__WEBPACK_IMPORTED_MODULE_2__["Console"], {
        logs: logs,
        variant: "dark",
        filter: this.state.filter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          float: "left",
          clear: "both"
        },
        ref: function ref(el) {
          _this3.messagesEnd = el;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "console-input-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cursor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "console-input",
        type: "text",
        value: this.state.value,
        onKeyDown: this.keyPress,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }))));
    }
  }]);

  return Inspector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(reactPropsRegex.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/console-feed/lib/Component/Message.js":
/*!************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/Message.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var emotion_theming_1 = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/index.esm.js");
var elements_1 = __webpack_require__(/*! ./elements */ "./node_modules/console-feed/lib/Component/elements.js");
var Formatted_1 = __webpack_require__(/*! ./message-parsers/Formatted */ "./node_modules/console-feed/lib/Component/message-parsers/Formatted.js");
var Object_1 = __webpack_require__(/*! ./message-parsers/Object */ "./node_modules/console-feed/lib/Component/message-parsers/Object.js");
var Error_1 = __webpack_require__(/*! ./message-parsers/Error */ "./node_modules/console-feed/lib/Component/message-parsers/Error.js");
var ConsoleMessage = /** @class */ (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function (theme) { return (__assign({}, theme, { method: _this.props.log.method })); };
        return _this;
    }
    ConsoleMessage.prototype.render = function () {
        var log = this.props.log;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Message, { "data-method": log.method },
                React.createElement(elements_1.Icon, null),
                React.createElement(elements_1.Content, null, this.getNode()))));
    };
    ConsoleMessage.prototype.getNode = function () {
        var log = this.props.log;
        // Error handling
        var error = this.typeCheck(log);
        if (error)
            return error;
        // Chrome formatting
        if (log.data.length > 0 &&
            typeof log.data[0] === 'string' &&
            log.data[0].indexOf('%') > -1) {
            return React.createElement(Formatted_1["default"], { data: log.data });
        }
        // Error panel
        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
            log.method === 'error') {
            return React.createElement(Error_1["default"], { log: log });
        }
        // Normal inspector
        var quoted = typeof log.data[0] !== 'string';
        return React.createElement(Object_1["default"], { log: log, quoted: quoted });
    };
    ConsoleMessage.prototype.typeCheck = function (log) {
        if (!log) {
            return (React.createElement(Formatted_1["default"], { data: [
                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        else if (!(log.data instanceof Array)) {
            return (React.createElement(Formatted_1["default"], { data: [
                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        return false;
    };
    return ConsoleMessage;
}(React.PureComponent));
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQStDO0FBRS9DLHVDQUFtRDtBQUVuRCx5REFBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGlEQUFnRDtBQUVoRDtJQUE2QixrQ0FBc0M7SUFBbkU7UUFBQSxxRUF5RUM7UUF4RUMsV0FBSyxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsY0FDZCxLQUFLLElBQ1IsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFDN0IsRUFIaUIsQ0FHakIsQ0FBQTs7SUFxRUosQ0FBQztJQW5FQywrQkFBTSxHQUFOO1FBQ1UsSUFBQSxvQkFBRyxDQUFlO1FBQzFCLE9BQU8sQ0FDTCxvQkFBQywrQkFBYSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUM5QixvQkFBQyxrQkFBTyxtQkFBYyxHQUFHLENBQUMsTUFBTTtnQkFDOUIsb0JBQUMsZUFBSSxPQUFHO2dCQUNSLG9CQUFDLGtCQUFPLFFBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFXLENBQzNCLENBQ0ksQ0FDakIsQ0FBQTtJQUNILENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ1UsSUFBQSxvQkFBRyxDQUFlO1FBRTFCLGlCQUFpQjtRQUNqQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQUksS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRXZCLG9CQUFvQjtRQUNwQixJQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVE7WUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdCO1lBQ0EsT0FBTyxvQkFBQyxzQkFBUyxJQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFJLENBQUE7U0FDckM7UUFFRCxjQUFjO1FBQ2QsSUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsQ0FBQztZQUN4RCxHQUFHLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFDdEI7WUFDQSxPQUFPLG9CQUFDLGtCQUFVLElBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUFBO1NBQ2hDO1FBRUQsbUJBQW1CO1FBQ25CLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUE7UUFDOUMsT0FBTyxvQkFBQyxtQkFBVSxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBSSxDQUFBO0lBQ2pELENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsR0FBUTtRQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUNMLG9CQUFDLHNCQUFTLElBQ1IsSUFBSSxFQUFFO29CQUNKLGtFQUFnRSxPQUFPLEdBQUcseUNBQXNDO29CQUNoSCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZCxHQUNELENBQ0gsQ0FBQTtTQUNGO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQ0wsb0JBQUMsc0JBQVMsSUFDUixJQUFJLEVBQUU7b0JBQ0osMEVBQTBFO29CQUMxRSxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZCxHQUNELENBQ0gsQ0FBQTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBekVELENBQTZCLEtBQUssQ0FBQyxhQUFhLEdBeUUvQztBQUVELHFCQUFlLGNBQWMsQ0FBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/devtools-parser/format-message.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/devtools-parser/format-message.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var string_utils_1 = __webpack_require__(/*! ./string-utils */ "./node_modules/console-feed/lib/Component/devtools-parser/string-utils.js");
function createAppend(s) {
    var container = document.createDocumentFragment();
    container.appendChild(document.createTextNode(s));
    return container;
}
/**
 * @param {string} format
 * @param {!Array.<!SDK.RemoteObject>} parameters
 * @param {!Element} formattedResult
 */
function formatWithSubstitutionString(format, parameters, formattedResult) {
    var formatters = {};
    function stringFormatter(obj) {
        return obj;
    }
    function floatFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return obj;
    }
    function integerFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return Math.floor(obj);
    }
    function bypassFormatter(obj) {
        return obj instanceof Node ? obj : '';
    }
    var currentStyle = null;
    function styleFormatter(obj) {
        currentStyle = {};
        var buffer = document.createElement('span');
        buffer.setAttribute('style', obj);
        for (var i = 0; i < buffer.style.length; i++) {
            var property = buffer.style[i];
            if (isWhitelistedProperty(property))
                currentStyle[property] = buffer.style[property];
        }
    }
    function isWhitelistedProperty(property) {
        var prefixes = [
            'background',
            'border',
            'color',
            'font',
            'line',
            'margin',
            'padding',
            'text',
            '-webkit-background',
            '-webkit-border',
            '-webkit-font',
            '-webkit-margin',
            '-webkit-padding',
            '-webkit-text'
        ];
        for (var i = 0; i < prefixes.length; i++) {
            if (property.startsWith(prefixes[i]))
                return true;
        }
        return false;
    }
    formatters.s = stringFormatter;
    formatters.f = floatFormatter;
    // Firebug allows both %i and %d for formatting integers.
    formatters.i = integerFormatter;
    formatters.d = integerFormatter;
    // Firebug uses %c for styling the message.
    formatters.c = styleFormatter;
    formatters._ = bypassFormatter;
    function append(a, b) {
        if (b instanceof Node) {
            a.appendChild(b);
        }
        else if (typeof b !== 'undefined') {
            var toAppend = createAppend(String(b));
            if (currentStyle) {
                var wrapper = document.createElement('span');
                wrapper.appendChild(toAppend);
                applyCurrentStyle(wrapper);
                for (var i = 0; i < wrapper.children.length; ++i)
                    applyCurrentStyle(wrapper.children[i]);
                toAppend = wrapper;
            }
            a.appendChild(toAppend);
        }
        return a;
    }
    /**
     * @param {!Element} element
     */
    function applyCurrentStyle(element) {
        for (var key in currentStyle)
            element.style[key] = currentStyle[key];
    }
    // String.format does treat formattedResult like a Builder, result is an object.
    return string_utils_1.String.format(format, parameters, formatters, formattedResult, append);
}
exports["default"] = formatWithSubstitutionString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9mb3JtYXQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUV0RCxzQkFBc0IsQ0FBUztJQUM3QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtJQUNuRCxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVqRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILHNDQUNFLE1BQVcsRUFDWCxVQUFlLEVBQ2YsZUFBb0I7SUFFcEIsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFBO0lBRTFCLHlCQUF5QixHQUFRO1FBQy9CLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVELHdCQUF3QixHQUFRO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBQ3pDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVELDBCQUEwQixHQUFRO1FBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBRUQseUJBQXlCLEdBQVE7UUFDL0IsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsSUFBSSxZQUFZLEdBQVEsSUFBSSxDQUFBO0lBQzVCLHdCQUF3QixHQUFRO1FBQzlCLFlBQVksR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFN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

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/devtools-parser/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/devtools-parser/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Linkify = __webpack_require__(/*! linkifyjs/html */ "./node_modules/linkifyjs/html.js");
var format_message_1 = __webpack_require__(/*! ./format-message */ "./node_modules/console-feed/lib/Component/devtools-parser/format-message.js");
/**
 * Formats a console log message using the Devtools parser and returns HTML
 * @param args The arguments passed to the console method
 */
function formatMessage(args) {
    var formattedResult = document.createElement('span');
    format_message_1["default"](args[0], args.slice(1), formattedResult);
    return Linkify(formattedResult.outerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />'));
}
exports["default"] = formatMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF5QztBQUN6QyxtREFBa0Q7QUFFbEQ7OztHQUdHO0FBQ0gsdUJBQXVCLElBQVc7SUFDaEMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUV0RCwyQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUU1RCxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFFRCxxQkFBZSxhQUFhLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/devtools-parser/string-utils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/devtools-parser/string-utils.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Taken from the source of chrome devtools:
// https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/platform/utilities.js#L805-L1006
exports.__esModule = true;
// Copyright 2014 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
var String;
(function (String) {
    /**
     * @param {string} string
     * @param {number} index
     * @return {boolean}
     */
    function isDigitAt(string, index) {
        var c = string.charCodeAt(index);
        return 48 <= c && c <= 57;
    }
    /**
     * @param {string} format
     * @param {!Object.<string, function(string, ...):*>} formatters
     * @return {!Array.<!Object>}
     */
    function tokenizeFormatString(format, formatters) {
        var tokens = [];
        var substitutionIndex = 0;
        function addStringToken(str) {
            if (tokens.length && tokens[tokens.length - 1].type === 'string')
                tokens[tokens.length - 1].value += str;
            else
                tokens.push({ type: 'string', value: str });
        }
        function addSpecifierToken(specifier, precision, substitutionIndex) {
            tokens.push({
                type: 'specifier',
                specifier: specifier,
                precision: precision,
                substitutionIndex: substitutionIndex
            });
        }
        var index = 0;
        for (var precentIndex = format.indexOf('%', index); precentIndex !== -1; precentIndex = format.indexOf('%', index)) {
            if (format.length === index)
                // unescaped % sign at the end of the format string.
                break;
            addStringToken(format.substring(index, precentIndex));
            index = precentIndex + 1;
            if (format[index] === '%') {
                // %% escape sequence.
                addStringToken('%');
                ++index;
                continue;
            }
            if (isDigitAt(format, index)) {
                // The first character is a number, it might be a substitution index.
                var number = parseInt(format.substring(index), 10);
                while (isDigitAt(format, index))
                    ++index;
                // If the number is greater than zero and ends with a "$",
                // then this is a substitution index.
                if (number > 0 && format[index] === '$') {
                    substitutionIndex = number - 1;
                    ++index;
                }
            }
            var precision = -1;
            if (format[index] === '.') {
                // This is a precision specifier. If no digit follows the ".",
                // then the precision should be zero.
                ++index;
                precision = parseInt(format.substring(index), 10);
                if (isNaN(precision))
                    precision = 0;
                while (isDigitAt(format, index))
                    ++index;
            }
            if (!(format[index] in formatters)) {
                addStringToken(format.substring(precentIndex, index + 1));
                ++index;
                continue;
            }
            addSpecifierToken(format[index], precision, substitutionIndex);
            ++substitutionIndex;
            ++index;
        }
        addStringToken(format.substring(index));
        return tokens;
    }
    /**
     * @param {string} format
     * @param {?ArrayLike} substitutions
     * @param {!Object.<string, function(string, ...):Q>} formatters
     * @param {!T} initialValue
     * @param {function(T, Q): T|undefined} append
     * @param {!Array.<!Object>=} tokenizedFormat
     * @return {!{formattedResult: T, unusedSubstitutions: ?ArrayLike}};
     * @template T, Q
     */
    function format(format, substitutions, formatters, initialValue, append, tokenizedFormat) {
        if (!format || !substitutions || !substitutions.length)
            return {
                formattedResult: append(initialValue, format),
                unusedSubstitutions: substitutions
            };
        function prettyFunctionName() {
            return ('String.format("' +
                format +
                '", "' +
                Array.prototype.join.call(substitutions, '", "') +
                '")');
        }
        function warn(msg) {
            console.warn(prettyFunctionName() + ': ' + msg);
        }
        function error(msg) {
            console.error(prettyFunctionName() + ': ' + msg);
        }
        var result = initialValue;
        var tokens = tokenizedFormat || tokenizeFormatString(format, formatters);
        var usedSubstitutionIndexes = {};
        for (var i = 0; i < tokens.length; ++i) {
            var token = tokens[i];
            if (token.type === 'string') {
                result = append(result, token.value);
                continue;
            }
            if (token.type !== 'specifier') {
                error('Unknown token type "' + token.type + '" found.');
                continue;
            }
            if (token.substitutionIndex >= substitutions.length) {
                // If there are not enough substitutions for the current substitutionIndex
                // just output the format specifier literally and move on.
                error('not enough substitution arguments. Had ' +
                    substitutions.length +
                    ' but needed ' +
                    (token.substitutionIndex + 1) +
                    ', so substitution was skipped.');
                result = append(result, '%' + (token.precision > -1 ? token.precision : '') + token.specifier);
                continue;
            }
            usedSubstitutionIndexes[token.substitutionIndex] = true;
            if (!(token.specifier in formatters)) {
                // Encountered an unsupported format character, treat as a string.
                warn('unsupported format character \u201C' +
                    token.specifier +
                    '\u201D. Treating as a string.');
                result = append(result, substitutions[token.substitutionIndex]);
                continue;
            }
            result = append(result, formatters[token.specifier](substitutions[token.substitutionIndex], token));
        }
        var unusedSubstitutions = [];
        for (var i = 0; i < substitutions.length; ++i) {
            if (i in usedSubstitutionIndexes)
                continue;
            unusedSubstitutions.push(substitutions[i]);
        }
        return { formattedResult: result, unusedSubstitutions: unusedSubstitutions };
    }
    String.format = format;
})(String = exports.String || (exports.String = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9kZXZ0b29scy1wYXJzZXIvc3RyaW5nLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNkdBQTZHOztBQUU3Ryw0REFBNEQ7QUFDNUQsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSx5RUFBeUU7QUFDekUsT0FBTztBQUNQLEVBQUU7QUFDRixzRUFBc0U7QUFDdEUsZ0VBQWdFO0FBQ2hFLCtEQUErRDtBQUMvRCx5RUFBeUU7QUFDekUsZ0VBQWdFO0FBQ2hFLGdCQUFnQjtBQUNoQiw0REFBNEQ7QUFDNUQsdUVBQXVFO0FBQ3ZFLDJEQUEyRDtBQUMzRCxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSx3RUFBd0U7QUFDeEUsdUVBQXVFO0FBQ3ZFLHdFQUF3RTtBQUN4RSxtRUFBbUU7QUFDbkUsd0VBQXdFO0FBQ3hFLHdFQUF3RTtBQUN4RSxzRUFBc0U7QUFDdEUsd0VBQXdFO0FBQ3hFLHVFQUF1RTtBQUV2RSxJQUFpQixNQUFNLENBMk10QjtBQTNNRCxXQUFpQixNQUFNO0lBQ3JCOzs7O09BSUc7SUFDSCxtQkFBbUIsTUFBVyxFQUFFLEtBQVU7UUFDeEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUE4QixNQUFXLEVBQUUsVUFBZTtRQUN4RCxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUE7UUFDcEIsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUE7UUFFekIsd0JBQXdCLEdBQVE7WUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMs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

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/elements.js":
/*!*************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/elements.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var theme_1 = __webpack_require__(/*! ./theme */ "./node_modules/console-feed/lib/Component/theme/index.js");
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
        styles["LOG_" + style.toUpperCase()];
};
/**
 * console-feed
 */
exports.Root = theme_1["default"]('div')({
    wordBreak: 'break-word'
});
/**
 * console-message
 */
exports.Message = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        position: 'relative',
        display: 'flex',
        color: Themed('color', method, styles),
        backgroundColor: Themed('background', method, styles),
        borderTop: "1px solid " + Themed('border', method, styles),
        borderBottom: "1px solid " + Themed('border', method, styles),
        marginTop: -1,
        marginBottom: +/^warn|error$/.test(method),
        paddingLeft: 10,
        boxSizing: 'border-box',
        '& *': {
            verticalAlign: 'top',
            boxSizing: 'border-box',
            fontFamily: styles.BASE_FONT_FAMILY,
            whiteSpace: 'pre-wrap',
            fontSize: styles.BASE_FONT_SIZE
        },
        '& a': {
            color: 'rgb(177, 177, 177)'
        }
    });
});
/**
 * message-icon
 */
exports.Icon = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        width: styles.LOG_ICON_WIDTH,
        height: styles.LOG_ICON_HEIGHT,
        backgroundImage: Themed('icon', method, styles),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    });
});
/**
 * console-content
 */
exports.Content = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        clear: 'right',
        position: 'relative',
        padding: styles.PADDING,
        marginLeft: 15,
        minHeight: 18,
        flex: 'auto',
        width: 'calc(100% - 15px)'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QjtBQUc1Qjs7OztHQUlHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQU07SUFDbkQsT0FBQSxNQUFNLENBQUMsU0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQUksS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxTQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUksQ0FBQztBQURwQyxDQUNvQyxDQUFBO0FBTXRDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxTQUFTLEVBQUUsWUFBWTtDQUN4QixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLGtCQUFNLENBQWEsS0FBSyxDQUFDLENBQzlDLFVBQUMsRUFBb0M7UUFBbEMsYUFBeUIsRUFBaEIsa0JBQU0sRUFBRSxrQkFBTTtJQUFnQixPQUFBLENBQUM7UUFDekMsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3RDLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDckQsU0FBUyxFQUFFLGVBQWEsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFHO1FBQzFELFlBQVksRUFBRSxlQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRztRQUM3RCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUU7WUFDTCxhQUFhLEVBQUUsS0FBSztZQUNwQixTQUFTLEVBQUUsWUFBWTtZQUN2QixVQUFVLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtZQUNuQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLGNBQWM7U0FDaEM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsb0JBQW9CO1NBQzVCO0tBQ0YsQ0FBQztBQXJCd0MsQ0FxQnhDLENBQ0gsQ0FBQTtBQUVEOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBYSxLQUFLLENBQUMsQ0FDM0MsVUFBQyxFQUFvQztRQUFsQyxhQUF5QixFQUFoQixrQkFBTSxFQUFFLGtCQUFNO0lBQWdCLE9BQUEsQ0FBQztRQUN6QyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7UUFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxlQUFlO1FBQzlCLGVBQWUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDL0MsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO0tBQzlCLENBQUM7QUFOd0MsQ0FNeEMsQ0FDSCxDQUFBO0FBRUQ7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxrQkFBTSxDQUFhLEtBQUssQ0FBQyxDQUM5QyxVQUFDLEVBQW9DO1FBQWxDLGFBQXlCLEVBQWhCLGtCQUFNLEVBQUUsa0JBQU07SUFBZ0IsT0FBQSxDQUFDO1FBQ3pDLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxtQkFBbUI7S0FDM0IsQ0FBQztBQVJ3QyxDQVF4QyxDQUNILENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var emotion_theming_1 = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/index.esm.js");
var default_1 = __webpack_require__(/*! ./theme/default */ "./node_modules/console-feed/lib/Component/theme/default.js");
var elements_1 = __webpack_require__(/*! ./elements */ "./node_modules/console-feed/lib/Component/elements.js");
var Message_1 = __webpack_require__(/*! ./Message */ "./node_modules/console-feed/lib/Component/Message.js");
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function () { return ({
            variant: _this.props.variant || 'light',
            styles: __assign({}, default_1["default"](_this.props), _this.props.styles)
        }); };
        return _this;
    }
    Console.prototype.render = function () {
        var filter = this.props.filter || [];
        var logs = this.props.logs || [];
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Root, null, logs.map(function (log, i) {
                // If the filter is defined and doesn't include the method
                var filtered = filter.length !== 0 &&
                    log.method &&
                    filter.indexOf(log.method) === -1;
                return filtered ? null : React.createElement(Message_1["default"], { log: log, key: i });
            }))));
    };
    return Console;
}(React.PureComponent));
exports["default"] = Console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE4QjtBQUM5QixtREFBK0M7QUFFL0MsMkNBQW9DO0FBRXBDLHVDQUFpQztBQUNqQyxxQ0FBK0I7QUFFL0I7SUFBc0IsMkJBQStCO0lBQXJEO1FBQUEscUVBNkJDO1FBNUJDLFdBQUssR0FBRyxjQUFNLE9BQUEsQ0FBQztZQUNiLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPO1lBQ3RDLE1BQU0sZUFDRCxvQkFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3JCO1NBQ0YsQ0FBQyxFQU5ZLENBTVosQ0FBQTs7SUFzQkosQ0FBQztJQXBCQyx3QkFBTSxHQUFOO1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFBO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUVsQyxPQUFPLENBQ0wsb0JBQUMsK0JBQWEsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDOUIsb0JBQUMsZUFBSSxRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZiwwREFBMEQ7Z0JBQzFELElBQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDbkIsR0FBRyxDQUFDLE1BQU07b0JBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBRW5DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFDLG9CQUFPLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7WUFDeEQsQ0FBQyxDQUFDLENBQ0csQ0FDTyxDQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBN0JELENBQXNCLEtBQUssQ0FBQyxhQUFhLEdBNkJ4QztBQUVELHFCQUFlLE9BQU8sQ0FBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/message-parsers/Error.js":
/*!**************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/message-parsers/Error.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Linkify = __webpack_require__(/*! linkifyjs/react */ "./node_modules/linkifyjs/react.js");
function splitMessage(message) {
    var breakIndex = message.indexOf('\n');
    // consider that there can be line without a break
    if (breakIndex === -1) {
        return message;
    }
    return message.substr(0, breakIndex);
}
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorPanel.prototype.render = function () {
        var log = this.props.log;
        /* This checks for error logTypes and shortens the message in the console by wrapping
        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
        follow after that. This creates a nice collapsible error message */
        var otherErrorLines;
        var msgLine = log.data.join(' ');
        var firstLine = splitMessage(msgLine);
        var msgArray = msgLine.split('\n');
        if (msgArray.length > 1) {
            otherErrorLines = msgArray.slice(1);
        }
        if (!otherErrorLines) {
            return React.createElement(Linkify, null, log.data.join(' '));
        }
        return (React.createElement("details", null,
            React.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
            React.createElement(Linkify, null, otherErrorLines.join('\n\r'))));
    };
    return ErrorPanel;
}(React.PureComponent));
exports["default"] = ErrorPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQThCO0FBRTlCLHlDQUEwQztBQU0xQyxzQkFBc0IsT0FBZTtJQUNuQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLGtEQUFrRDtJQUNsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQTtLQUNmO0lBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRUQ7SUFBeUIsOEJBQStCO0lBQXhEOztJQTJCQSxDQUFDO0lBMUJDLDJCQUFNLEdBQU47UUFDVSxJQUFBLG9CQUFHLENBQWU7UUFDMUI7OzJFQUVtRTtRQUNuRSxJQUFJLGVBQWUsQ0FBQTtRQUNuQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQyxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixPQUFPLG9CQUFDLE9BQU8sUUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVyxDQUFBO1NBQy9DO1FBRUQsT0FBTyxDQUNMO1lBQ0UsaUNBQVMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQ25ELFNBQVMsQ0FDRjtZQUNWLG9CQUFDLE9BQU8sUUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFXLENBQ3pDLENBQ1gsQ0FBQTtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBeUIsS0FBSyxDQUFDLGFBQWEsR0EyQjNDO0FBRUQscUJBQWUsVUFBVSxDQUFBIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/message-parsers/Formatted.js":
/*!******************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/message-parsers/Formatted.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var elements_1 = __webpack_require__(/*! ../react-inspector/elements */ "./node_modules/console-feed/lib/Component/react-inspector/elements.js");
var devtools_parser_1 = __webpack_require__(/*! ../devtools-parser */ "./node_modules/console-feed/lib/Component/devtools-parser/index.js");
var Formatted = /** @class */ (function (_super) {
    __extends(Formatted, _super);
    function Formatted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Formatted.prototype.render = function () {
        return (React.createElement(elements_1.Root, { "data-type": "formatted", dangerouslySetInnerHTML: {
                __html: devtools_parser_1["default"](this.props.data || [])
            } }));
    };
    return Formatted;
}(React.PureComponent));
exports["default"] = Formatted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvRm9ybWF0dGVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFDOUIsd0RBQWtEO0FBRWxELHNEQUF1QztBQU12QztJQUF3Qiw2QkFBK0I7SUFBdkQ7O0lBV0EsQ0FBQztJQVZDLDBCQUFNLEdBQU47UUFDRSxPQUFPLENBQ0wsb0JBQUMsZUFBSSxpQkFDTyxXQUFXLEVBQ3JCLHVCQUF1QixFQUFFO2dCQUN2QixNQUFNLEVBQUUsNEJBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDdEMsR0FDRCxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBd0IsS0FBSyxDQUFDLGFBQWEsR0FXMUM7QUFFRCxxQkFBZSxTQUFTLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/message-parsers/Object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/message-parsers/Object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var emotion_theming_1 = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/index.esm.js");
var elements_1 = __webpack_require__(/*! ../react-inspector/elements */ "./node_modules/console-feed/lib/Component/react-inspector/elements.js");
var Linkify = __webpack_require__(/*! linkifyjs/react */ "./node_modules/linkifyjs/react.js");
var react_inspector_1 = __webpack_require__(/*! ../react-inspector */ "./node_modules/console-feed/lib/Component/react-inspector/index.js");
var ObjectTree = /** @class */ (function (_super) {
    __extends(ObjectTree, _super);
    function ObjectTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTree.prototype.render = function () {
        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
        return log.data.map(function (message, i) {
            if (typeof message === 'string') {
                var string = !quoted && message.length ? (message + " ") : (React.createElement("span", null,
                    React.createElement("span", null, "\""),
                    React.createElement("span", { style: {
                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
                        } }, message),
                    React.createElement("span", null, "\" ")));
                return (React.createElement(elements_1.Root, { "data-type": "string", key: i },
                    React.createElement(Linkify, null, string)));
            }
            return React.createElement(react_inspector_1["default"], { data: message, key: i });
        });
    };
    return ObjectTree;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(ObjectTree);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQTJDO0FBQzNDLHdEQUFrRDtBQUVsRCx5Q0FBMEM7QUFFMUMsc0RBQTBDO0FBUTFDO0lBQXlCLDhCQUErQjtJQUF4RDs7SUFnQ0EsQ0FBQztJQS9CQywyQkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUFtQyxFQUFqQyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsWUFBRyxDQUFlO1FBRXpDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFZLEVBQUUsQ0FBUztZQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBTSxNQUFNLEdBQ1YsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDdkIsT0FBTyxNQUFHLENBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FDRjtvQkFDRSx1Q0FBYztvQkFDZCw4QkFDRSxLQUFLLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCO3lCQUM5QyxJQUNBLE9BQU8sQ0FDSDtvQkFDUCx3Q0FBZSxDQUNWLENBQ1IsQ0FBQTtnQkFFSCxPQUFPLENBQ0wsb0JBQUMsZUFBSSxpQkFBVyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLG9CQUFDLE9BQU8sUUFBRSxNQUFNLENBQVcsQ0FDdEIsQ0FDUixDQUFBO2FBQ0Y7WUFFRCxPQUFPLG9CQUFDLDRCQUFTLElBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBaENELENBQXlCLEtBQUssQ0FBQyxhQUFhLEdBZ0MzQztBQUVELHFCQUFlLDJCQUFTLENBQUMsVUFBVSxDQUFDLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/react-inspector/elements.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/react-inspector/elements.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var theme_1 = __webpack_require__(/*! ../theme */ "./node_modules/console-feed/lib/Component/theme/index.js");
/**
 * Object root
 */
exports.Root = theme_1["default"]('div')({
    display: 'inline-block',
    wordBreak: 'break-all',
    '&::after': {
        content: "' '",
        display: 'inline-block'
    },
    '& > li': {
        backgroundColor: 'transparent !important',
        display: 'inline-block'
    },
    '& ol:empty': {
        paddingLeft: '0 !important'
    }
});
/**
 * Table
 */
exports.Table = theme_1["default"]('span')({
    '& > li': {
        display: 'inline-block',
        marginTop: 5
    }
});
/**
 * HTML
 */
exports.HTML = theme_1["default"]('span')({
    display: 'inline-block',
    '& div:hover': {
        backgroundColor: 'rgba(255, 220, 158, .05) !important',
        borderRadius: '2px'
    }
});
/**
 * Object constructor
 */
exports.Constructor = theme_1["default"]('span')({
    '& > span > span:nth-child(1)': {
        opacity: 0.6
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9lbGVtZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBNkI7QUFPN0I7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBRyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsd0JBQXdCO1FBQ3pDLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLGNBQWM7S0FDNUI7Q0FDRixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsS0FBSyxHQUFHLGtCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsU0FBUyxFQUFFLENBQUM7S0FDYjtDQUNGLENBQUMsQ0FBQTtBQUVGOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsY0FBYztJQUN2QixhQUFhLEVBQUU7UUFDYixlQUFlLEVBQUUscUNBQXFDO1FBQ3RELFlBQVksRUFBRSxLQUFLO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxrQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLDhCQUE4QixFQUFFO1FBQzlCLE9BQU8sRUFBRSxHQUFHO0tBQ2I7Q0FDRixDQUFDLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/react-inspector/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/react-inspector/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var emotion_theming_1 = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/index.esm.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_inspector_1 = __webpack_require__(/*! react-inspector */ "./node_modules/react-inspector/lib/index.js");
var ObjectPreview_1 = __webpack_require__(/*! react-inspector/lib/object-inspector/ObjectPreview */ "./node_modules/react-inspector/lib/object-inspector/ObjectPreview.js");
var elements_1 = __webpack_require__(/*! ./elements */ "./node_modules/console-feed/lib/Component/react-inspector/elements.js");
var CustomInspector = /** @class */ (function (_super) {
    __extends(CustomInspector, _super);
    function CustomInspector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInspector.prototype.render = function () {
        var _a = this.props, data = _a.data, theme = _a.theme;
        var styles = theme.styles, method = theme.method;
        var dom = data instanceof HTMLElement;
        var table = method === 'table';
        return (React.createElement(elements_1.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (React.createElement(elements_1.Table, null,
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, table: true })),
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles })))) : dom ? (React.createElement(elements_1.HTML, null,
            React.createElement(react_inspector_1.DOMInspector, __assign({}, this.props, { theme: styles })))) : (React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))));
    };
    CustomInspector.prototype.getCustomNode = function (data) {
        var styles = this.props.theme.styles;
        var constructor = data && data.constructor ? data.constructor.name : null;
        if (constructor === 'Function')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                React.createElement(ObjectPreview_1["default"], { data: data }), " {",
                React.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
        if (constructor === 'Promise')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                "Promise ", "{",
                React.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
        if (data instanceof HTMLElement)
            return (React.createElement(elements_1.HTML, null,
                React.createElement(react_inspector_1.DOMInspector, { data: data, theme: styles })));
        return null;
    };
    CustomInspector.prototype.nodeRenderer = function (props) {
        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
        // Root
        if (depth === 0) {
            var customNode_1 = this.getCustomNode(data);
            return customNode_1 || React.createElement(react_inspector_1.ObjectRootLabel, { name: name, data: data });
        }
        if (name === 'constructor')
            return (React.createElement(elements_1.Constructor, null,
                React.createElement(react_inspector_1.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
        var customNode = this.getCustomNode(data);
        return customNode ? (React.createElement(elements_1.Root, null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            customNode)) : (React.createElement(react_inspector_1.ObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
    };
    return CustomInspector;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(CustomInspector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBMkM7QUFDM0MsNkJBQThCO0FBQzlCLG1EQU13QjtBQUN4QixvRkFBOEU7QUFHOUUsdUNBQTJEO0FBTzNEO0lBQThCLG1DQUErQjtJQUE3RDs7SUE2RkEsQ0FBQztJQTVGQyxnQ0FBTSxHQUFOO1FBQ1EsSUFBQSxlQUE0QixFQUExQixjQUFJLEVBQUUsZ0JBQUssQ0FBZTtRQUMxQixJQUFBLHFCQUFNLEVBQUUscUJBQU0sQ0FBVTtRQUVoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLFlBQVksV0FBVyxDQUFBO1FBQ3ZDLElBQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxPQUFPLENBQUE7UUFFaEMsT0FBTyxDQUNMLG9CQUFDLGVBQUksaUJBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQ3ZELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDUCxvQkFBQyxnQkFBSztZQUNKLG9CQUFDLDJCQUFTLGVBQUssSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssVUFBRztZQUNsRCxvQkFBQywyQkFBUyxlQUFLLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUN0QyxDQUNULENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDUixvQkFBQyxlQUFJO1lBQ0gsb0JBQUMsOEJBQVksZUFBSyxJQUFJLENBQUMsS0FBSyxJQUFFLEtBQUssRUFBRSxNQUFNLElBQUksQ0FDMUMsQ0FDUixDQUFDLENBQUMsQ0FBQyxDQUNGLG9CQUFDLDJCQUFTLGVBQ0osSUFB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

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/theme/default.js":
/*!******************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/theme/default.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var react_inspector_1 = __webpack_require__(/*! react-inspector */ "./node_modules/react-inspector/lib/index.js");
var styles = function (props) {
    return (__assign({}, ((props.variant || 'light') === 'light' ? react_inspector_1.chromeLight : react_inspector_1.chromeDark), { 
        /**
         * General
         */
        PADDING: '3px 22px 2px 0', 
        /**
         * Default log styles
         */
        LOG_COLOR: 'rgba(255,255,255,0.9)', LOG_BACKGROUND: 'transparent', LOG_BORDER: 'rgba(255,255,255,0.03)', LOG_ICON_WIDTH: 10, LOG_ICON_HEIGHT: 18, LOG_ICON: 'none', 
        /**
         * Log types
         */
        LOG_WARN_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVChTbY7BCoJQFERn0Q/3BX1JuxQjsSCXiV8gtCgxhCIrKIRIqKDVzXl5w5cNHBjm6eGinXiAXu5inY2xYm/mbpIh+vcFhLA3sx0athNUhymEsP+10lAEEA17x8o/9wFuNGnYuVlWve0SQl7P0sBu3aq2R1Q/1JzSkYGd29eqNv2wjdnUuvNRciC/N+qe+7gidbA8zyHkOINsvA/sumcOkjcabcBmw2+mMgAAAABJRU5ErkJggg==)", LOG_WARN_BACKGROUND: '#332b00', LOG_WARN_COLOR: '#ffdc9e', LOG_WARN_BORDER: '#650', LOG_ERROR_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVChTY4CB7ZI8tmfU5E6e01b+DMIgNkgMKg0BR9Vkux6YWPx/bemIgkFiIDmwogOaqrYPzazAEm8DwuGKYGyQHEgNw0VT05Mwib9v3v7/kJEHxiA2TDFIDcNNU4vPMFPACj58/P/v40cwGyYOUsNwy8IZRSFIEUgxskKQGoZrzp4ErQapYbgYHG371M4dLACTQGaD5EBqwD6/FpzQ9dTBE64IhkFiIDmwIhi4mlJqey8o4eR9r8jPIAxig8QgsgwMAFZz1YtGPXgjAAAAAElFTkSuQmCC)", LOG_ERROR_BACKGROUND: '#290000', LOG_ERROR_BORDER: '#5b0000', LOG_ERROR_COLOR: '#ff8080', LOG_DEBUG_ICON: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 459 459'%3e%3cpath fill='%234D88FF' d='M433.5 127.5h-71.4a177.7 177.7 0 0 0-45.9-51L357 35.7 321.3 0l-56.1 56.1c-10.2-2.6-23-5.1-35.7-5.1s-25.5 2.5-35.7 5.1L137.7 0 102 35.7l40.8 40.8a177.7 177.7 0 0 0-45.9 51H25.5v51H79c-2.5 7.7-2.5 17.9-2.5 25.5v25.5h-51v51h51V306a88 88 0 0 0 2.5 25.5H25.5v51h71.4A152.2 152.2 0 0 0 229.5 459c56.1 0 107.1-30.6 132.6-76.5h71.4v-51H380c2.5-7.7 2.5-17.9 2.5-25.5v-25.5h51v-51h-51V204c0-7.7 0-17.9-2.5-25.5h53.5v-51zm-153 204h-102v-51h102v51zm0-102h-102v-51h102v51z'/%3e%3c/svg%3e\")", LOG_DEBUG_BACKGROUND: '', LOG_DEBUG_BORDER: '', LOG_DEBUG_COLOR: '#4D88FF', LOG_COMMAND_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABaSURBVChTY6AtmDx5cvnUqVP1oFzsoL+/XwCo8DEQv584caIVVBg7mDBhghxQ4Y2+vr6vU6ZM8YAKYwdA00SB+CxQ8S+g4jCoMCYgSiFRVpPkGaAiHMHDwAAA5Ko+F4/l6+MAAAAASUVORK5CYII=)", LOG_RESULT_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABpSURBVChTY6A92LNnj96uXbvKoVzsYMeOHVbbt29/D1T4eP/+/QJQYVSwe/duD6CCr0B8A8iWgwqjAqBk2NatW38B6bPbtm0TBYkBFbsA+c9ANFgRCBCtEASAAoSthgGiPAMD2IOHgQEA521bM7uG52wAAAAASUVORK5CYII=)", LOG_INFO_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVChTY4ABp/AztmZBZ07qe538rO114rOa8+GTskYHbKHSEOARd6nLIOTsf61gIA46U6kVePYQiK3uc/K/hPG+LrCi8IyrtkZh5yCKgk/80w46ba0RdGYGhH/2v6rXyf88qtttGVwSLp2ECQLxeiAu1wo6uwpJ7L+o2f6TDA6xZz8jCyqFnuHXCj4djywmZXHoM/EK0azGqhBsNYpngL6VCTnGqRF4xgKo+D5IDO4ZEEAKnjcQBafvqwWf/YoSPDCAP8AZGAC7mLM81zgOTQAAAABJRU5ErkJggg==)", 
        /**
         * Fonts
         */
        BASE_FONT_FAMILY: 'Consolas, Lucida Console, Courier New, monospace', BASE_FONT_SIZE: '12px', 
        /**
         * Other
         */
        ARROW_FONT_SIZE: 10, OBJECT_VALUE_STRING_COLOR: 'rgb(233,63,59)' }));
};
exports["default"] = styles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnQvdGhlbWUvZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQXlEO0FBSXpELElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBWTtJQUMxQixPQUFBLENBQUMsYUFDSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLDZCQUFXLENBQUMsQ0FBQyxDQUFDLDRCQUFVLENBQUM7UUFDdEU7O1dBRUc7UUFDSCxPQUFPLEVBQUUsZ0JBQWdCO1FBRXpCOztXQUVHO1FBQ0gsU0FBUyxFQUFFLHVCQUF1QixFQUNsQyxjQUFjLEVBQUUsYUFBYSxFQUM3QixVQUFVLEVBQUUsd0JBQXdCLEVBQ3BDLGNBQWMsRUFBRSxFQUFFLEVBQ2xCLGVBQWUsRUFBRSxFQUFFLEVBQ25CLFFBQVEsRUFBRSxNQUFNO1FBRWhCOztXQUVHO1FBQ0gsYUFBYSxFQUFFLHlZQUF5WSxFQUN4WixtQkFBbUIsRUFBRSxTQUFTLEVBQzlCLGNBQWMsRUFBRSxTQUFTLEVBQ3pCLGVBQWUsRUFBRSxNQUFNLEVBRXZCLGNBQWMsRUFBRSxpYkFBaWIsRUFDamMsb0JBQW9CLEVBQUUsU0FBUyxFQUMvQixnQkFBZ0IsRUFBRSxTQUFTLEVBQzNCLGVBQWUsRUFBRSxTQUFTLEVBRTFCLGNBQWMsRUFBRSxvbUJBQWttQixFQUNsbkIsb0JBQW9CLEVBQUUsRUFBRSxFQUN4QixnQkFBZ0IsRUFBRSxFQUFFLEVBQ3BCLGVBQWUsRUFBRSxTQUFTLEVBRTFCLGdCQUFnQixFQUFFLHFTQUFxUyxFQUN2VCxlQUFlLEVBQUUseVRBQXlULEVBQzFVLGFBQWEsRUFBRSx5YkFBeWI7UUFFeGM7O1dBRUc7UUFDSCxnQkFBZ0IsRUFBRSxrREFBa0QsRUFDcEUsY0FBYyxFQUFFLE1BQU07UUFFdEI7O1dBRUc7UUFDSCxlQUFlLEVBQUUsRUFBRSxFQUNuQix5QkFBeUIsRUFBRSxnQkFBZ0IsR0FDakMsQ0FBQTtBQWxEWixDQWtEWSxDQUFBO0FBRWQscUJBQWUsTUFBTSxDQUFBIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Component/theme/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/console-feed/lib/Component/theme/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var react_emotion_1 = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
exports["default"] = react_emotion_1["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3RoZW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQW1FO0FBR25FLHFCQUFlLDBCQUE0QyxDQUFBIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Methods_1 = __webpack_require__(/*! ../definitions/Methods */ "./node_modules/console-feed/lib/definitions/Methods.js");
var parse_1 = __webpack_require__(/*! ./parse */ "./node_modules/console-feed/lib/Hook/parse/index.js");
var Transform_1 = __webpack_require__(/*! ../Transform */ "./node_modules/console-feed/lib/Transform/index.js");
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback) {
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty99/console-feed'
        }
    };
    var _loop_1 = function (method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function () {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function () {
                var parsed = parse_1["default"](method, args);
                if (parsed) {
                    var encoded = Transform_1.Encode(parsed);
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for (var _i = 0, Methods_2 = Methods_1["default"]; _i < Methods_2.length; _i++) {
        var method = Methods_2[_i];
        _loop_1(method);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
exports["default"] = Hook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLGtEQUE0QztBQUU1QyxpQ0FBMkI7QUFFM0IsMENBQXFDO0FBQ3JDLHNDQUFzQztBQUV0Qzs7OztHQUlHO0FBQ0gsY0FBNkIsT0FBZ0IsRUFBRSxRQUFrQjtJQUMvRCxJQUFNLGFBQWEsR0FBRyxPQUF3QixDQUFBO0lBQzlDLElBQU0sT0FBTyxHQUFZO1FBQ3ZCLFFBQVEsRUFBRSxFQUNUO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxNQUFNLEVBQUUsNENBQTRDO1NBQ3JEO0tBQ0YsQ0FBQTs0QkFHUSxNQUFNO1FBQ2IsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTFDLFdBQVc7UUFDWCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUc7WUFDdEIsNkJBQTZCO1lBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBRW5DLHdDQUF3QztZQUN4QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUVyQyw0QkFBNEI7WUFDNUIsVUFBVSxDQUFDO2dCQUNULElBQU0sTUFBTSxHQUFHLGtCQUFLLENBQUMsTUFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBTSxPQUFPLEdBQUcsa0JBQU0sQ0FBQyxNQUFNLENBQVksQ0FBQTtvQkFDekMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtpQkFDMUI7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQUVELHVCQUF1QjtRQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVksQ0FBQTtJQUN6QyxDQUFDO0lBeEJELDJCQUEyQjtJQUMzQixLQUFtQixVQUFPLEVBQVAsWUFBQSxvQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFyQixJQUFJLE1BQU0sZ0JBQUE7Z0JBQU4sTUFBTTtLQXVCZDtJQUVELGFBQWEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO0lBRTVCLE9BQU8sYUFBYSxDQUFBO0FBQ3RCLENBQUM7QUF4Q0QsMEJBd0NDIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/parse/GUID.js":
/*!**********************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/parse/GUID.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        Date.now());
}
exports["default"] = guidGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3BhcnNlL0dVSUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLElBQUksRUFBRSxHQUFHO1FBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDLENBQUE7SUFDRCxPQUFPLENBQ0wsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1gsQ0FBQTtBQUNILENBQUM7QUFsQkQsbUNBa0JDIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/parse/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/parse/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var GUID_1 = __webpack_require__(/*! ./GUID */ "./node_modules/console-feed/lib/Hook/parse/GUID.js");
var Timing = __webpack_require__(/*! ./methods/timing */ "./node_modules/console-feed/lib/Hook/parse/methods/timing.js");
var Count = __webpack_require__(/*! ./methods/count */ "./node_modules/console-feed/lib/Hook/parse/methods/count.js");
var Assert = __webpack_require__(/*! ./methods/assert */ "./node_modules/console-feed/lib/Hook/parse/methods/assert.js");
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign({}, Count.increment(label), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign({}, Timing.stop(label), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, [data[0]].concat(data.slice(1)));
                if (assertion) {
                    return __assign({}, assertion, { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0JBQXlCO0FBRXpCLHlDQUEwQztBQUMxQyx1Q0FBd0M7QUFDeEMseUNBQTBDO0FBRTFDOzs7O0dBSUc7QUFDSCxlQUNFLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUE7SUFFN0Isb0JBQW9CO0lBQ3BCLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTthQUNILENBQUE7U0FDRjtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLG9CQUNLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQ3pCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDLENBQUM7WUFDZCxJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkIsT0FBTyxLQUFLLENBQUE7YUFDYjtZQUVELG9CQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQ3JCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7WUFFL0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLEdBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2Isb0JBQ0ssU0FBUyxJQUNaLEVBQUUsSUFBQSxJQUNIO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUMzQixJQUFJO29CQUNGLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7aUJBQzVCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sS0FBSyxDQUFBO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTtnQkFDRixJQUFJLE1BQUE7YUFDTCxDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxxQkFBZSxLQUFLLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/parse/methods/assert.js":
/*!********************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/parse/methods/assert.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function test(expression) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (expression)
        return false;
    // Default message
    if (messages.length === 0)
        messages.push('console.assert');
    return {
        method: 'error',
        data: ["Assertion failed:"].concat(messages)
    };
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxjQUFxQixVQUFlO0lBQUUsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBQ3RELElBQUksVUFBVTtRQUFFLE9BQU8sS0FBSyxDQUFBO0lBRTVCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUUxRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEdBQUcsbUJBQW1CLFNBQUssUUFBUSxDQUFDO0tBQ3pDLENBQUE7QUFDSCxDQUFDO0FBVkQsb0JBVUMifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/parse/methods/count.js":
/*!*******************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/parse/methods/count.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var state_1 = __webpack_require__(/*! ../../store/state */ "./node_modules/console-feed/lib/Hook/store/state.js");
var dispatch_1 = __webpack_require__(/*! ../../store/dispatch */ "./node_modules/console-feed/lib/Hook/store/dispatch.js");
var actions_1 = __webpack_require__(/*! ../../store/actions */ "./node_modules/console-feed/lib/Hook/store/actions.js");
function increment(label) {
    dispatch_1["default"](actions_1.count(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: [label + ": " + times]
    };
}
exports.increment = increment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9tZXRob2RzL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLGlEQUEyQztBQUMzQywrQ0FBMkM7QUFFM0MsbUJBQTBCLEtBQWE7SUFDckMscUJBQVEsQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN0QixJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhDLE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxDQUFJLEtBQUssVUFBSyxLQUFPLENBQUM7S0FDN0IsQ0FBQTtBQUNILENBQUM7QUFSRCw4QkFRQyJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/parse/methods/timing.js":
/*!********************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/parse/methods/timing.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var state_1 = __webpack_require__(/*! ../../store/state */ "./node_modules/console-feed/lib/Hook/store/state.js");
var dispatch_1 = __webpack_require__(/*! ../../store/dispatch */ "./node_modules/console-feed/lib/Hook/store/dispatch.js");
var actions_1 = __webpack_require__(/*! ../../store/actions */ "./node_modules/console-feed/lib/Hook/store/actions.js");
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [label + ": " + time + "ms"]
        };
    }
    return {
        method: 'warn',
        data: ["Timer '" + label + "' does not exist"]
    };
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsaURBQTJDO0FBQzNDLCtDQUF3RDtBQUV4RCxlQUFzQixLQUFhO0lBQ2pDLHFCQUFRLENBQUMsbUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxzQkFFQztBQUVELGNBQXFCLEtBQWE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDekIscUJBQVEsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDaEIsSUFBQSx3Q0FBSSxDQUF5QjtRQUVyQyxPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsQ0FBSSxLQUFLLFVBQUssSUFBSSxPQUFJLENBQUM7U0FDOUIsQ0FBQTtLQUNGO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLENBQUMsWUFBVSxLQUFLLHFCQUFrQixDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBZkQsb0JBZUMifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/store/actions.js":
/*!*************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/store/actions.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function count(name) {
    return {
        type: 'COUNT',
        name: name
    };
}
exports.count = count;
function timeStart(name) {
    return {
        type: 'TIME_START',
        name: name
    };
}
exports.timeStart = timeStart;
function timeEnd(name) {
    return {
        type: 'TIME_END',
        name: name
    };
}
exports.timeEnd = timeEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFzQixJQUFZO0lBQ2hDLE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksTUFBQTtLQUNMLENBQUE7QUFDSCxDQUFDO0FBTEQsc0JBS0M7QUFFRCxtQkFBMEIsSUFBWTtJQUNwQyxPQUFPO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxNQUFBO0tBQ0wsQ0FBQTtBQUNILENBQUM7QUFMRCw4QkFLQztBQUVELGlCQUF3QixJQUFZO0lBQ2xDLE9BQU87UUFDTCxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLE1BQUE7S0FDTCxDQUFBO0FBQ0gsQ0FBQztBQUxELDBCQUtDIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/store/dispatch.js":
/*!**************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/store/dispatch.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var reducer_1 = __webpack_require__(/*! ./reducer */ "./node_modules/console-feed/lib/Hook/store/reducer.js");
var state_1 = __webpack_require__(/*! ./state */ "./node_modules/console-feed/lib/Hook/store/state.js");
function dispatch(action) {
    state_1.update(reducer_1["default"](state_1.state, action));
}
exports["default"] = dispatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9kaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE4QjtBQUM5QixpQ0FBdUM7QUFFdkMsa0JBQWtCLE1BQWM7SUFDOUIsY0FBTSxDQUFDLG9CQUFNLENBQUMsYUFBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7QUFDL0IsQ0FBQztBQUVELHFCQUFlLFFBQVEsQ0FBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/store/reducer.js":
/*!*************************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/store/reducer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
exports.initialState = {
    timings: {},
    count: {}
};
exports["default"] = (function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign({}, state, { count: __assign({}, state.count, (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign({}, state, { timings: __assign({}, state.timings, (_b = {}, _b[action.name] = {
                    start: performance.now() || +new Date()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = performance.now() || +new Date();
            var start = timing.start;
            var time = end - start;
            return __assign({}, state, { timings: __assign({}, state.timings, (_c = {}, _c[action.name] = __assign({}, timing, { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
    var _a, _b, _c;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsc0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTNDLG9CQUNLLEtBQUssSUFDUixLQUFLLGVBQ0EsS0FBSyxDQUFDLEtBQUssZUFDYixNQUFNLENBQUMsSUFBSSxJQUFHLEtBQUssR0FBRyxDQUFDLFVBRTNCO1NBQ0Y7UUFFRCxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ2pCLG9CQUNLLEtBQUssSUFDUixPQUFPLGVBQ0YsS0FBSyxDQUFDLE9BQU8sZUFDZixNQUFNLENBQUMsSUFBSSxJQUFHO29CQUNiLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtpQkFDeEMsVUFFSjtTQUNGO1FBRUQsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNmLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXpDLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7WUFDcEMsSUFBQSxvQkFBSyxDQUFXO1lBRXhCLElBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUE7WUFFeEIsb0JBQ0ssS0FBSyxJQUNSLE9BQU8sZUFDRixLQUFLLENBQUMsT0FBTyxlQUNmLE1BQU0sQ0FBQyxJQUFJLGlCQUNQLE1BQU0sSUFDVCxHQUFHLEtBQUE7b0JBQ0gsSUFBSSxNQUFBLGFBR1Q7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsT0FBTyxLQUFLLENBQUE7U0FDYjtLQUNGOztBQUNILENBQUMsRUFBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Hook/store/state.js":
/*!***********************************************************!*\
  !*** ./node_modules/console-feed/lib/Hook/store/state.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function update(newState) {
    exports.state = newState;
}
exports.update = update;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGdCQUF1QixRQUFhO0lBQ2xDLGFBQUssR0FBRyxRQUFRLENBQUE7QUFDbEIsQ0FBQztBQUZELHdCQUVDIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Transform/Function.js":
/*!*************************************************************!*\
  !*** ./node_modules/console-feed/lib/Transform/Function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Serialize a function into JSON
 */
exports["default"] = {
    type: 'Function',
    shouldTransform: function (type, obj) {
        return typeof obj === 'function';
    },
    toSerializable: function (func) {
        var body = '';
        try {
            body = func
                .toString()
                .substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
        }
        catch (e) { }
        return {
            name: func.name,
            body: body,
            proto: Object.getPrototypeOf(func).constructor.name
        };
    },
    fromSerializable: function (data) {
        try {
            var tempFunc = function () { };
            if (typeof data.name === 'string') {
                Object.defineProperty(tempFunc, 'name', {
                    value: data.name,
                    writable: false
                });
            }
            if (typeof data.body === 'string') {
                Object.defineProperty(tempFunc, 'body', {
                    value: data.body,
                    writable: false
                });
            }
            if (typeof data.proto === 'string') {
                // @ts-ignore
                tempFunc.constructor = {
                    name: data.proto
                };
            }
            return tempFunc;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUE7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLGVBQWUsWUFBQyxJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsSUFBYztRQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFJO1lBQ0YsSUFBSSxHQUFHLElBQUk7aUJBQ1IsUUFBUSxFQUFFO2lCQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDM0Q7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBRWQsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsSUFBYTtRQUM1QixJQUFJO1lBQ0YsSUFBTSxRQUFRLEdBQUcsY0FBWSxDQUFDLENBQUE7WUFFOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUU7b0JBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQTthQUNIO1lBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUU7b0JBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQTthQUNIO1lBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUNsQyxhQUFhO2dCQUNiLFFBQVEsQ0FBQyxXQUFXLEdBQUc7b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDakIsQ0FBQTthQUNGO1lBRUQsT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0NBQ0YsQ0FBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Transform/HTML.js":
/*!*********************************************************!*\
  !*** ./node_modules/console-feed/lib/Transform/HTML.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// Sandbox HTML elements
const sandbox = document.implementation.createHTMLDocument('sandbox')
function objectifyAttributes(element) {
    var data = {};
    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function (type, obj) {
        return (obj &&
            obj.children &&
            typeof obj.innerHTML === 'string' &&
            typeof obj.tagName === 'string');
    },
    toSerializable: function (element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function (data) {
        try {
            var element = sandbox.createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (e) { }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBVXJFLDZCQUE2QixPQUFZO0lBQ3ZDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQXNCLFVBQWtCLEVBQWxCLEtBQUEsT0FBTyxDQUFDLFVBQVUsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0I7UUFBbkMsSUFBSSxTQUFTLFNBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxhQUFhO0lBQ25CLGVBQWUsWUFBQyxJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLENBQ0wsR0FBRztZQUNILEdBQUcsQ0FBQyxRQUFRO1lBQ1osT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FDaEMsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLFlBQUMsT0FBb0I7UUFDakMsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUN0QyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztTQUNsQixDQUFBO0lBQ2QsQ0FBQztJQUNELGdCQUFnQixZQUFDLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQTtZQUNsRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEI7Z0JBQTdDLElBQUksU0FBUyxTQUFBO2dCQUNoQixJQUFJO29CQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtpQkFDNUQ7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTthQUNmO1lBQ0QsT0FBTyxPQUFPLENBQUE7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUNILENBQUM7Q0FDRixDQUFBIn0=

/***/ }),

/***/ "./node_modules/console-feed/lib/Transform/arithmetic.js":
/*!***************************************************************!*\
  !*** ./node_modules/console-feed/lib/Transform/arithmetic.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
function isMinusZero(value) {
    return 1 / value === -Infinity;
}
exports["default"] = {
    type: 'Arithmetic',
    shouldTransform: function (type, value) {
        return (type === 'number' &&
            (value === Infinity || value === -Infinity || isMinusZero(value)));
    },
    toSerializable: function (value) {
        return value === Infinity
            ? Arithmetic.infinity
            : value === -Infinity
                ? Arithmetic.minusInfinity
                : Arithmetic.minusZero;
    },
    fromSerializable: function (data) {
        if (data === Arithmetic.infinity)
            return Infinity;
        if (data === Arithmetic.minusInfinity)
            return -Infinity;
        if (data === Arithmetic.minusZero)
            return -0;
        return data;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpdGhtZXRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vYXJpdGhtZXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLG1EQUFRLENBQUE7SUFDUiw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQscUJBQXFCLEtBQUs7SUFDeEIsT0FBTyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2hDLENBQUM7QUFFRCxxQkFBZTtJQUNiLElBQUksRUFBRSxZQUFZO0lBQ2xCLGVBQWUsWUFBQyxJQUFTLEVBQUUsS0FBVTtRQUNuQyxPQUFPLENBQ0wsSUFBSSxLQUFLLFFBQVE7WUFDakIsQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxLQUFLO1FBQ2xCLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ3JCLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRO2dCQUNuQixDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWE7Z0JBQzFCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO0lBQzVCLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxJQUFnQjtRQUMvQixJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsUUFBUTtZQUFFLE9BQU8sUUFBUSxDQUFBO1FBQ2pELElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxhQUFhO1lBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQTtRQUN2RCxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFFNUMsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0YsQ0FBQSJ9

/***/ }),

/***/ "./node_modules/console-feed/lib/Transform/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/console-feed/lib/Transform/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var arithmetic_1 = __webpack_require__(/*! ./arithmetic */ "./node_modules/console-feed/lib/Transform/arithmetic.js");
var Function_1 = __webpack_require__(/*! ./Function */ "./node_modules/console-feed/lib/Transform/Function.js");
var HTML_1 = __webpack_require__(/*! ./HTML */ "./node_modules/console-feed/lib/Transform/HTML.js");
var replicator_1 = __webpack_require__(/*! ./replicator */ "./node_modules/console-feed/lib/Transform/replicator/index.js");
var transforms = [HTML_1["default"], Function_1["default"], arithmetic_1["default"]];
var replicator = new replicator_1["default"]();
replicator.addTransforms(transforms);
function Encode(data) {
    return JSON.parse(replicator.encode(data));
}
exports.Encode = Encode;
function Decode(data) {
    return replicator.decode(JSON.stringify(data));
}
exports.Decode = Decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXFDO0FBQ3JDLHVDQUFpQztBQUNqQywrQkFBeUI7QUFDekIsMkNBQXFDO0FBRXJDLElBQU0sVUFBVSxHQUFHLENBQUMsaUJBQUksRUFBRSxxQkFBUSxFQUFFLHVCQUFVLENBQUMsQ0FBQTtBQUUvQyxJQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtBQUNuQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRXBDLGdCQUEwQixJQUFTO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDNUMsQ0FBQztBQUZELHdCQUVDO0FBRUQsZ0JBQXVCLElBQVM7SUFDOUIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNoRCxDQUFDO0FBRkQsd0JBRUMifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/Transform/replicator/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/console-feed/lib/Transform/replicator/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// Const
var TRANSFORMED_TYPE_KEY = '@t';
var CIRCULAR_REF_KEY = '@r';
var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
var GLOBAL = (function getGlobal() {
    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
    var savedEval = eval;
    return savedEval('this');
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
var MAP_SUPPORTED = typeof Map === 'function';
var SET_SUPPORTED = typeof Set === 'function';
var TYPED_ARRAY_CTORS = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array'
];
// Saved proto functions
var arrSlice = Array.prototype.slice;
// Default serializer
var JSONSerializer = {
    serialize: function (val) {
        return JSON.stringify(val);
    },
    deserialize: function (val) {
        return JSON.parse(val);
    }
};
// EncodingTransformer
var EncodingTransformer = /** @class */ (function () {
    function EncodingTransformer(val, transforms) {
        this.references = val;
        this.transforms = transforms;
        this.circularCandidates = [];
        this.circularCandidatesDescrs = [];
        this.circularRefCount = 0;
    }
    EncodingTransformer._createRefMark = function (idx) {
        var obj = Object.create(null);
        obj[CIRCULAR_REF_KEY] = idx;
        return obj;
    };
    EncodingTransformer.prototype._createCircularCandidate = function (val, parent, key) {
        this.circularCandidates.push(val);
        this.circularCandidatesDescrs.push({ parent: parent, key: key, refIdx: -1 });
    };
    EncodingTransformer.prototype._applyTransform = function (val, parent, key, transform) {
        var result = Object.create(null);
        var serializableVal = transform.toSerializable(val);
        if (typeof serializableVal === 'object')
            this._createCircularCandidate(val, parent, key);
        result[TRANSFORMED_TYPE_KEY] = transform.type;
        result.data = this._handleValue(serializableVal, parent, key);
        return result;
    };
    EncodingTransformer.prototype._handleArray = function (arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++)
            result[i] = this._handleValue(arr[i], result, i);
        return result;
    };
    EncodingTransformer.prototype._handlePlainObject = function (obj) {
        var result = Object.create(null);
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
                result[resultKey] = this._handleValue(obj[key], result, resultKey);
            }
        }
        var name = obj.__proto__.constructor.name;
        if (name !== 'Object') {
            result.constructor = { name: name };
        }
        return result;
    };
    EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
        this._createCircularCandidate(obj, parent, key);
        return Array.isArray(obj)
            ? this._handleArray(obj)
            : this._handlePlainObject(obj);
    };
    EncodingTransformer.prototype._ensureCircularReference = function (obj) {
        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
        if (circularCandidateIdx > -1) {
            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
            if (descr.refIdx === -1)
                descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
            return EncodingTransformer._createRefMark(descr.refIdx);
        }
        return null;
    };
    EncodingTransformer.prototype._handleValue = function (val, parent, key) {
        var type = typeof val;
        var isObject = type === 'object' && val !== null;
        if (isObject) {
            var refMark = this._ensureCircularReference(val);
            if (refMark)
                return refMark;
        }
        for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            if (transform.shouldTransform(type, val))
                return this._applyTransform(val, parent, key, transform);
        }
        if (isObject)
            return this._handleObject(val, parent, key);
        return val;
    };
    EncodingTransformer.prototype.transform = function () {
        var references = [this._handleValue(this.references, null, null)];
        for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
            var descr = _a[_i];
            if (descr.refIdx > 0) {
                references[descr.refIdx] = descr.parent[descr.key];
                descr.parent[descr.key] = EncodingTransformer._createRefMark(descr.refIdx);
            }
        }
        return references;
    };
    return EncodingTransformer;
}());
// DecodingTransform
var DecodingTransformer = /** @class */ (function () {
    function DecodingTransformer(references, transformsMap) {
        this.activeTransformsStack = [];
        this.visitedRefs = Object.create(null);
        this.references = references;
        this.transformMap = transformsMap;
    }
    DecodingTransformer.prototype._handlePlainObject = function (obj) {
        var unescaped = Object.create(null);
        if ('constructor' in obj) {
            if (!obj.constructor || typeof obj.constructor.name !== 'string') {
                obj.constructor = {
                    name: 'Object'
                };
            }
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                this._handleValue(obj[key], obj, key);
                if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
                    // NOTE: use intermediate object to avoid unescaped and escaped keys interference
                    // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
                    unescaped[key.substring(1)] = obj[key];
                    delete obj[key];
                }
            }
        }
        for (var unsecapedKey in unescaped)
            obj[unsecapedKey] = unescaped[unsecapedKey];
    };
    DecodingTransformer.prototype._handleTransformedObject = function (obj, parent, key) {
        var transformType = obj[TRANSFORMED_TYPE_KEY];
        var transform = this.transformMap[transformType];
        if (!transform)
            throw new Error("Can't find transform for \"" + transformType + "\" type.");
        this.activeTransformsStack.push(obj);
        this._handleValue(obj.data, obj, 'data');
        this.activeTransformsStack.pop();
        parent[key] = transform.fromSerializable(obj.data);
    };
    DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (refIdx, parent, key) {
        // NOTE: we've hit a hard case: object reference itself during transformation.
        // We can't dereference it since we don't have resulting object yet. And we'll
        // not be able to restore reference lately because we will need to traverse
        // transformed object again and reference might be unreachable or new object contain
        // new circular references. As a workaround we create getter, so once transformation
        // complete, dereferenced property will point to correct transformed object.
        var references = this.references;
        Object.defineProperty(parent, key, {
            // @ts-ignore
            val: void 0,
            configurable: true,
            enumerable: true,
            get: function () {
                if (this.val === void 0)
                    this.val = references[refIdx];
                return this.val;
            },
            set: function (value) {
                this.val = value;
            }
        });
    };
    DecodingTransformer.prototype._handleCircularRef = function (refIdx, parent, key) {
        if (this.activeTransformsStack.includes(this.references[refIdx]))
            this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
        else {
            if (!this.visitedRefs[refIdx]) {
                this.visitedRefs[refIdx] = true;
                this._handleValue(this.references[refIdx], this.references, refIdx);
            }
            parent[key] = this.references[refIdx];
        }
    };
    DecodingTransformer.prototype._handleValue = function (val, parent, key) {
        if (typeof val !== 'object' || val === null)
            return;
        var refIdx = val[CIRCULAR_REF_KEY];
        if (refIdx !== void 0)
            this._handleCircularRef(refIdx, parent, key);
        else if (val[TRANSFORMED_TYPE_KEY])
            this._handleTransformedObject(val, parent, key);
        else if (Array.isArray(val)) {
            for (var i = 0; i < val.length; i++)
                this._handleValue(val[i], val, i);
        }
        else
            this._handlePlainObject(val);
    };
    DecodingTransformer.prototype.transform = function () {
        this.visitedRefs[0] = true;
        this._handleValue(this.references[0], this.references, 0);
        return this.references[0];
    };
    return DecodingTransformer;
}());
// Transforms
var builtInTransforms = [
    {
        type: '[[NaN]]',
        shouldTransform: function (type, val) {
            return type === 'number' && isNaN(val);
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return NaN;
        }
    },
    {
        type: '[[undefined]]',
        shouldTransform: function (type) {
            return type === 'undefined';
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return void 0;
        }
    },
    {
        type: '[[Date]]',
        shouldTransform: function (type, val) {
            return val instanceof Date;
        },
        toSerializable: function (date) {
            return date.getTime();
        },
        fromSerializable: function (val) {
            var date = new Date();
            date.setTime(val);
            return date;
        }
    },
    {
        type: '[[RegExp]]',
        shouldTransform: function (type, val) {
            return val instanceof RegExp;
        },
        toSerializable: function (re) {
            var result = {
                src: re.source,
                flags: ''
            };
            if (re.global)
                result.flags += 'g';
            if (re.ignoreCase)
                result.flags += 'i';
            if (re.multiline)
                result.flags += 'm';
            return result;
        },
        fromSerializable: function (val) {
            return new RegExp(val.src, val.flags);
        }
    },
    {
        type: '[[Error]]',
        shouldTransform: function (type, val) {
            return val instanceof Error;
        },
        toSerializable: function (err) {
            return {
                name: err.name,
                message: err.message,
                stack: err.stack
            };
        },
        fromSerializable: function (val) {
            var Ctor = GLOBAL[val.name] || Error;
            var err = new Ctor(val.message);
            err.stack = val.stack;
            return err;
        }
    },
    {
        type: '[[ArrayBuffer]]',
        shouldTransform: function (type, val) {
            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
        },
        toSerializable: function (buffer) {
            var view = new Int8Array(buffer);
            return arrSlice.call(view);
        },
        fromSerializable: function (val) {
            if (ARRAY_BUFFER_SUPPORTED) {
                var buffer = new ArrayBuffer(val.length);
                var view = new Int8Array(buffer);
                view.set(val);
                return buffer;
            }
            return val;
        }
    },
    {
        type: '[[TypedArray]]',
        shouldTransform: function (type, val) {
            for (var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++) {
                var ctorName = TYPED_ARRAY_CTORS_1[_i];
                if (typeof GLOBAL[ctorName] === 'function' &&
                    val instanceof GLOBAL[ctorName])
                    return true;
            }
            return false;
        },
        toSerializable: function (arr) {
            return {
                ctorName: arr.constructor.name,
                arr: arrSlice.call(arr)
            };
        },
        fromSerializable: function (val) {
            return typeof GLOBAL[val.ctorName] === 'function'
                ? new GLOBAL[val.ctorName](val.arr)
                : val.arr;
        }
    },
    {
        type: '[[Map]]',
        shouldTransform: function (type, val) {
            return MAP_SUPPORTED && val instanceof Map;
        },
        toSerializable: function (map) {
            var flattenedKVArr = [];
            map.forEach(function (val, key) {
                flattenedKVArr.push(key);
                flattenedKVArr.push(val);
            });
            return flattenedKVArr;
        },
        fromSerializable: function (val) {
            if (MAP_SUPPORTED) {
                // NOTE: new Map(iterable) is not supported by all browsers
                var map = new Map();
                for (var i = 0; i < val.length; i += 2)
                    map.set(val[i], val[i + 1]);
                return map;
            }
            var kvArr = [];
            // @ts-ignore
            for (var j = 0; j < val.length; j += 2)
                kvArr.push([val[i], val[i + 1]]);
            return kvArr;
        }
    },
    {
        type: '[[Set]]',
        shouldTransform: function (type, val) {
            return SET_SUPPORTED && val instanceof Set;
        },
        toSerializable: function (set) {
            var arr = [];
            set.forEach(function (val) {
                arr.push(val);
            });
            return arr;
        },
        fromSerializable: function (val) {
            if (SET_SUPPORTED) {
                // NOTE: new Set(iterable) is not supported by all browsers
                var set = new Set();
                for (var i = 0; i < val.length; i++)
                    set.add(val[i]);
                return set;
            }
            return val;
        }
    }
];
// Replicator
var Replicator = /** @class */ (function () {
    function Replicator(serializer) {
        this.transforms = [];
        this.transformsMap = Object.create(null);
        this.serializer = serializer || JSONSerializer;
        this.addTransforms(builtInTransforms);
    }
    Replicator.prototype.addTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
            var transform = transforms_1[_i];
            if (this.transformsMap[transform.type])
                throw new Error("Transform with type \"" + transform.type + "\" was already added.");
            this.transforms.push(transform);
            this.transformsMap[transform.type] = transform;
        }
        return this;
    };
    Replicator.prototype.removeTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++) {
            var transform = transforms_2[_i];
            var idx = this.transforms.indexOf(transform);
            if (idx > -1)
                this.transforms.splice(idx, 1);
            delete this.transformsMap[transform.type];
        }
        return this;
    };
    Replicator.prototype.encode = function (val) {
        var transformer = new EncodingTransformer(val, this.transforms);
        var references = transformer.transform();
        return this.serializer.serialize(references);
    };
    Replicator.prototype.decode = function (val) {
        var references = this.serializer.deserialize(val);
        var transformer = new DecodingTransformer(references, this.transformsMap);
        return transformer.transform();
    };
    return Replicator;
}());
exports["default"] = Replicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVHJhbnNmb3JtL3JlcGxpY2F0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUE7QUFDakMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUE7QUFDN0IsSUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUE7QUFFNUMsSUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLDhGQUE4RjtJQUM5RixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFFdEIsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUVKLElBQU0sc0JBQXNCLEdBQUcsT0FBTyxXQUFXLEtBQUssVUFBVSxDQUFBO0FBQ2hFLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtBQUMvQyxJQUFNLGFBQWEsR0FBRyxPQUFPLEdBQUcsS0FBSyxVQUFVLENBQUE7QUFFL0MsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7Q0FDZixDQUFBO0FBRUQsd0JBQXdCO0FBQ3hCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO0FBRXRDLHFCQUFxQjtBQUNyQixJQUFNLGNBQWMsR0FBRztJQUNyQixTQUFTLFlBQUMsR0FBUTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELFdBQVcsWUFBQyxHQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQUVE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

/***/ }),

/***/ "./node_modules/console-feed/lib/Unhook/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/console-feed/lib/Unhook/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Unhook a console constructor and restore back the Native methods
 * @argument console The Console constructor to Hook
 */
function Unhook(console) {
    if (console.feed) {
        for (var _i = 0, _a = Object.keys(console.feed.pointers); _i < _a.length; _i++) {
            var method = _a[_i];
            console[method] = console.feed.pointers[method];
        }
        return delete console.feed;
    }
    else {
        return false;
    }
}
exports["default"] = Unhook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVW5ob29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsZ0JBQWdCLE9BQXNCO0lBQ3BDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFxQixVQUFrQyxFQUFsQyxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBbEMsY0FBa0MsRUFBbEMsSUFBa0M7WUFBbEQsSUFBTSxNQUFNLFNBQUE7WUFDZixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDaEQ7UUFDRCxPQUFPLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQTtLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUE7S0FDYjtBQUNILENBQUM7QUFFRCxxQkFBZSxNQUFNLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/definitions/Methods.js":
/*!**************************************************************!*\
  !*** ./node_modules/console-feed/lib/definitions/Methods.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var methods = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'table',
    'clear',
    'time',
    'timeEnd',
    'count',
    'assert'
];
exports["default"] = methods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9ucy9NZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLEdBQUc7SUFDZCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtDQUNULENBQUE7QUFFRCxxQkFBZSxPQUFPLENBQUEifQ==

/***/ }),

/***/ "./node_modules/console-feed/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/console-feed/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Component_1 = __webpack_require__(/*! ./Component */ "./node_modules/console-feed/lib/Component/index.js");
exports.Console = Component_1["default"];
var Hook_1 = __webpack_require__(/*! ./Hook */ "./node_modules/console-feed/lib/Hook/index.js");
exports.Hook = Hook_1["default"];
var Unhook_1 = __webpack_require__(/*! ./Unhook */ "./node_modules/console-feed/lib/Unhook/index.js");
exports.Unhook = Unhook_1["default"];
var Transform_1 = __webpack_require__(/*! ./Transform */ "./node_modules/console-feed/lib/Transform/index.js");
exports.Decode = Transform_1.Decode;
var Transform_2 = __webpack_require__(/*! ./Transform */ "./node_modules/console-feed/lib/Transform/index.js");
exports.Encode = Transform_2.Encode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBZ0Q7QUFBdkMsOEJBQUEsU0FBTyxFQUFXO0FBQzNCLCtCQUF3QztBQUEvQixzQkFBQSxTQUFPLEVBQVE7QUFDeEIsbUNBQTRDO0FBQW5DLDBCQUFBLFNBQU8sRUFBVTtBQUUxQix5Q0FBb0M7QUFBM0IsNkJBQUEsTUFBTSxDQUFBO0FBQ2YseUNBQW9DO0FBQTNCLDZCQUFBLE1BQU0sQ0FBQSJ9

/***/ }),

/***/ "./node_modules/create-emotion-styled/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/create-emotion-styled/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"];
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

var warnedAboutExtractStatic = false;

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (true) {
      if (tag === undefined) {
        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
      }
    }

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      } else if ("development" !== 'production' && !warnedAboutExtractStatic) {
        console.warn('extractStatic is deprecated and will be removed in emotion@10. We recommend disabling extractStatic or using other libraries like linaria or css-literal-loader');
        warnedAboutExtractStatic = true;
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;

        _proto.componentWillMount = function componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe);
          }
        };

        _proto.render = function render() {
          var props = this.props,
              state = this.state;
          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
            theme: state !== null && state.theme || props.theme || {}
          });
          var className = '';
          var classInterpolations = [];

          if (props.className) {
            if (staticClassName === undefined) {
              className += emotion.getRegisteredStyles(classInterpolations, props.className);
            } else {
              className += props.className + " ";
            }
          }

          if (staticClassName === undefined) {
            className += emotion.css.apply(this, styles.concat(classInterpolations));
          } else {
            className += staticClassName;
          }

          if (stableClassName !== undefined) {
            className += " " + stableClassName;
          }

          return view.createElement(baseTag, // $FlowFixMe
          pickAssign(shouldForwardProp, {}, props, {
            className: className,
            ref: props.innerRef
          }));
        };

        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if ("development" !== 'production' && stableClassName === undefined) {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe


          return "." + stableClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if ("development" !== 'production' && typeof Proxy !== 'undefined') {
    _createStyled = new Proxy(_createStyled, {
      get: function get(target, property) {
        switch (property) {
          // react-hot-loader tries to access this stuff
          case '__proto__':
          case 'name':
          case 'prototype':
          case 'displayName':
            {
              return target[property];
            }

          default:
            {
              throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
            }
        }
      }
    });
  }

  return _createStyled;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotionStyled);


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion-theming/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/emotion-theming/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: ThemeProvider, withTheme, channel, contextTypes, createBroadcast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextTypes", function() { return contextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBroadcast", function() { return createBroadcast; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);




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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js
var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    for (var key in listeners) {
      // $FlowFixMe
      var listener = listeners[key];

      if (listener === undefined) {
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return {
    publish: publish,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
};

var channel = '__EMOTION_THEMING__';

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, _contextTypes);

var isPlainObject = function isPlainObject(test) {
  return Object.prototype.toString.call(test) === '[object Object]';
};

// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
function getTheme(theme, outerTheme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (!isPlainObject(mergedTheme)) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if (!isPlainObject(theme)) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  if (outerTheme === undefined) {
    return theme;
  }

  return _extends({}, outerTheme, theme);
}

var ThemeProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ThemeProvider, _Component);

  function ThemeProvider() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    if (this.context[channel] !== undefined) {
      this.unsubscribeToOuterId = this.context[channel].subscribe(function (theme) {
        _this.outerTheme = theme;

        if (_this.broadcast !== undefined) {
          _this.publish(_this.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(getTheme(this.props.theme, this.outerTheme));
  };

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[channel] = {
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _ref;
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var themeContext = this.context[channel];

    if (themeContext !== undefined) {
      themeContext.unsubscribe(this.unsubscribeToOuterId);
    }
  };

  _proto.publish = function publish(theme) {
    this.broadcast.publish(getTheme(theme, this.outerTheme));
  };

  _proto.render = function render() {
    if (!this.props.children) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
  };

  ThemeProvider.childContextTypes = contextTypes;
  ThemeProvider.contextTypes = contextTypes;
  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var withTheme = function withTheme(Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var WithTheme =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(WithTheme, _React$Component);

    function WithTheme(props) {
      return _React$Component.call(this, props) || this;
    }

    var _proto = WithTheme.prototype;

    _proto.componentWillMount = function componentWillMount() {
      var _this = this;

      var themeContext = this.context[channel];

      if (themeContext === undefined) {
        // eslint-disable-next-line no-console
        console.error('[withTheme] Please use ThemeProvider to be able to use withTheme');
        return;
      }

      this.unsubscribeId = themeContext.subscribe(function (theme) {
        _this.setState({
          theme: theme
        });
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[channel].unsubscribe(this.unsubscribeId);
      }
    };

    _proto.render = function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component$$1, _extends({
        theme: this.state.theme
      }, this.props));
    };

    return WithTheme;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  WithTheme.displayName = "WithTheme(" + componentName + ")";
  WithTheme.contextTypes = contextTypes;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithTheme, Component$$1);
};




/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/is-dom/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-dom/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isNode

function isNode (val) {
  return (!val || typeof val !== 'object')
    ? false
    : (typeof window === 'object' && typeof window.Node === 'object')
      ? (val instanceof window.Node)
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}


/***/ }),

/***/ "./node_modules/linkifyjs/html.js":
/*!****************************************!*\
  !*** ./node_modules/linkifyjs/html.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-html */ "./node_modules/linkifyjs/lib/linkify-html.js").default;


/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-html.js":
/*!****************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-html.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = linkifyHtml;

var _simpleHtmlTokenizer = __webpack_require__(/*! ./simple-html-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer.js");

var _simpleHtmlTokenizer2 = _interopRequireDefault(_simpleHtmlTokenizer);

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = linkify.options;
var Options = options.Options;


var StartTag = 'StartTag';
var EndTag = 'EndTag';
var Chars = 'Chars';
var Comment = 'Comment';

/**
	`tokens` and `token` in this section refer to tokens generated by the HTML
	parser.
*/
function linkifyHtml(str) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
	var linkifiedTokens = [];
	var linkified = [];
	var i;

	opts = new Options(opts);

	// Linkify the tokens given by the parser
	for (i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === StartTag) {
			linkifiedTokens.push(token);

			// Ignore all the contents of ignored tags
			var tagName = token.tagName.toUpperCase();
			var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
			if (!isIgnored) {
				continue;
			}

			var preskipLen = linkifiedTokens.length;
			skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
			i += linkifiedTokens.length - preskipLen - 1;
			continue;
		} else if (token.type !== Chars) {
			// Skip this token, it's not important
			linkifiedTokens.push(token);
			continue;
		}

		// Valid text token, linkify it!
		var linkifedChars = linkifyChars(token.chars, opts);
		linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
	}

	// Convert the tokens back into a string
	for (i = 0; i < linkifiedTokens.length; i++) {
		var _token = linkifiedTokens[i];
		switch (_token.type) {
			case StartTag:
				{
					var link = '<' + _token.tagName;
					if (_token.attributes.length > 0) {
						var attrs = attrsToStrings(_token.attributes);
						link += ' ' + attrs.join(' ');
					}
					link += '>';
					linkified.push(link);
					break;
				}
			case EndTag:
				linkified.push('</' + _token.tagName + '>');
				break;
			case Chars:
				linkified.push(escapeText(_token.chars));
				break;
			case Comment:
				linkified.push('<!--' + escapeText(_token.chars) + '-->');
				break;
		}
	}

	return linkified.join('');
}

/**
	`tokens` and `token` in this section referes to tokens returned by
	`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
*/
function linkifyChars(str, opts) {
	var tokens = linkify.tokenize(str);
	var result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			result.push({
				type: StartTag,
				tagName: 'br',
				attributes: [],
				selfClosing: true
			});
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push({ type: Chars, chars: token.toString() });
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		// Build up attributes


		var attributeArray = [['href', formattedHref]];

		if (className) {
			attributeArray.push(['class', className]);
		}

		if (target) {
			attributeArray.push(['target', target]);
		}

		for (var attr in attributes) {
			attributeArray.push([attr, attributes[attr]]);
		}

		// Add the required tokens
		result.push({
			type: StartTag,
			tagName: tagName,
			attributes: attributeArray,
			selfClosing: false
		});
		result.push({ type: Chars, chars: formatted });
		result.push({ type: EndTag, tagName: tagName });
	}

	return result;
}

/**
	Returns a list of tokens skipped until the closing tag of tagName.

	* `tagName` is the closing tag which will prompt us to stop skipping
	* `tokens` is the array of tokens generated by HTML5Tokenizer which
	* `i` is the index immediately after the opening tag to skip
	* `skippedTokens` is an array which skipped tokens are being pushed into

	Caveats

	* Assumes that i is the first token after the given opening tagName
	* The closing tag will be skipped, but nothing after it
	* Will track whether there is a nested tag of the same type
*/
function skipTagTokens(tagName, tokens, i, skippedTokens) {

	// number of tokens of this type on the [fictional] stack
	var stackCount = 1;

	while (i < tokens.length && stackCount > 0) {
		var token = tokens[i];

		if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
			// Nested tag of the same type, "add to stack"
			stackCount++;
		} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
			// Closing tag
			stackCount--;
		}

		skippedTokens.push(token);
		i++;
	}

	// Note that if stackCount > 0 here, the HTML is probably invalid
	return skippedTokens;
}

function escapeText(text) {
	// Not required, HTML tokenizer ensures this occurs properly
	return text;
}

function escapeAttr(attr) {
	return attr.replace(/"/g, '&quot;');
}

function attrsToStrings(attrs) {
	var attrStrs = [];
	for (var i = 0; i < attrs.length; i++) {
		var _attrs$i = attrs[i],
		    name = _attrs$i[0],
		    value = _attrs$i[1];

		attrStrs.push(name + '="' + escapeAttr(value) + '"');
	}
	return attrStrs;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-react.js":
/*!*****************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-react.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = linkify.options;
var Options = options.Options;

// Given a string, converts to an array of valid React components
// (which may include strings)

function stringToElements(str, opts) {

	var tokens = linkify.tokenize(str);
	var elements = [];
	var linkId = 0;

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			elements.push(_react2.default.createElement('br', { key: 'linkified-' + ++linkId }));
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			// Regular text
			elements.push(token.toString());
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		var props = {
			key: 'linkified-' + ++linkId,
			href: formattedHref
		};

		if (className) {
			props.className = className;
		}

		if (target) {
			props.target = target;
		}

		// Build up additional attributes
		// Support for events via attributes hash
		if (attributes) {
			for (var attr in attributes) {
				props[attr] = attributes[attr];
			}
		}

		elements.push(_react2.default.createElement(tagName, props, formatted));
	}

	return elements;
}

// Recursively linkify the contents of the given React Element instance
function linkifyReactElement(element, opts) {
	var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	if (_react2.default.Children.count(element.props.children) === 0) {
		// No need to clone if the element had no children
		return element;
	}

	var children = [];

	_react2.default.Children.forEach(element.props.children, function (child) {
		if (typeof child === 'string') {
			// ensure that we always generate unique element IDs for keys
			elementId = elementId + 1;
			children.push.apply(children, stringToElements(child, opts));
		} else if (_react2.default.isValidElement(child)) {
			if (typeof child.type === 'string' && options.contains(opts.ignoreTags, child.type.toUpperCase())) {
				// Don't linkify this element
				children.push(child);
			} else {
				children.push(linkifyReactElement(child, opts, ++elementId));
			}
		} else {
			// Unknown element type, just push
			children.push(child);
		}
	});

	// Set a default unique key, copy over remaining props
	var newProps = { key: 'linkified-element-' + elementId };
	for (var prop in element.props) {
		newProps[prop] = element.props[prop];
	}

	return _react2.default.cloneElement(element, newProps, children);
}

var Linkify = function (_React$Component) {
	_inherits(Linkify, _React$Component);

	function Linkify() {
		_classCallCheck(this, Linkify);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Linkify.prototype.render = function render() {
		// Copy over all non-linkify-specific props
		var newProps = { key: 'linkified-element-0' };
		for (var prop in this.props) {
			if (prop !== 'options' && prop !== 'tagName') {
				newProps[prop] = this.props[prop];
			}
		}

		var opts = new Options(this.props.options);
		var tagName = this.props.tagName || 'span';
		var element = _react2.default.createElement(tagName, newProps);

		return linkifyReactElement(element, opts, 0);
	};

	return Linkify;
}(_react2.default.Component);

exports.default = Linkify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify.js":
/*!***********************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(/*! ./linkify/utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _options = __webpack_require__(/*! ./linkify/utils/options */ "./node_modules/linkifyjs/lib/linkify/utils/options.js");

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(/*! ./linkify/core/scanner */ "./node_modules/linkifyjs/lib/linkify/core/scanner.js");

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(/*! ./linkify/core/parser */ "./node_modules/linkifyjs/lib/linkify/core/parser.js");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _multi = __webpack_require__(/*! ./tokens/multi */ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js");

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/scanner.js":
/*!************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/scanner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/state.js":
/*!**********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(/*! ../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js":
/*!*****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _text = __webpack_require__(/*! ./text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/options.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _html5NamedCharRefs = __webpack_require__(/*! ./simple-html-tokenizer/html5-named-char-refs */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js");

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

var _entityParser = __webpack_require__(/*! ./simple-html-tokenizer/entity-parser */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js");

var _entityParser2 = _interopRequireDefault(_entityParser);

var _eventedTokenizer = __webpack_require__(/*! ./simple-html-tokenizer/evented-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js");

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

var _tokenizer = __webpack_require__(/*! ./simple-html-tokenizer/tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js");

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _tokenize = __webpack_require__(/*! ./simple-html-tokenizer/tokenize */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js");

var _tokenize2 = _interopRequireDefault(_tokenize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5Tokenizer = {
	HTML5NamedCharRefs: _html5NamedCharRefs2.default,
	EntityParser: _entityParser2.default,
	EventedTokenizer: _eventedTokenizer2.default,
	Tokenizer: _tokenizer2.default,
	tokenize: _tokenize2.default
};

exports.default = HTML5Tokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function EntityParser(named) {
  this.named = named;
}

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE = /^#([0-9]+)$/;
var NAMED = /^([A-Za-z0-9]+)$/;

EntityParser.prototype.parse = function (entity) {
  if (!entity) {
    return;
  }
  var matches = entity.match(HEXCHARCODE);
  if (matches) {
    return "&#x" + matches[1] + ";";
  }
  matches = entity.match(CHARCODE);
  if (matches) {
    return "&#" + matches[1] + ";";
  }
  matches = entity.match(NAMED);
  if (matches) {
    return this.named[matches[1]] || "&" + matches[1] + ";";
  }
};

exports.default = EntityParser;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js");

function EventedTokenizer(delegate, entityParser) {
  this.delegate = delegate;
  this.entityParser = entityParser;

  this.state = null;
  this.input = null;

  this.index = -1;
  this.line = -1;
  this.column = -1;
  this.tagLine = -1;
  this.tagColumn = -1;

  this.reset();
}

EventedTokenizer.prototype = {
  reset: function reset() {
    this.state = 'beforeData';
    this.input = '';

    this.index = 0;
    this.line = 1;
    this.column = 0;

    this.tagLine = -1;
    this.tagColumn = -1;

    this.delegate.reset();
  },

  tokenize: function tokenize(input) {
    this.reset();
    this.tokenizePart(input);
    this.tokenizeEOF();
  },

  tokenizePart: function tokenizePart(input) {
    this.input += (0, _utils.preprocessInput)(input);

    while (this.index < this.input.length) {
      this.states[this.state].call(this);
    }
  },

  tokenizeEOF: function tokenizeEOF() {
    this.flushData();
  },

  flushData: function flushData() {
    if (this.state === 'data') {
      this.delegate.finishData();
      this.state = 'beforeData';
    }
  },

  peek: function peek() {
    return this.input.charAt(this.index);
  },

  consume: function consume() {
    var char = this.peek();

    this.index++;

    if (char === "\n") {
      this.line++;
      this.column = 0;
    } else {
      this.column++;
    }

    return char;
  },

  consumeCharRef: function consumeCharRef() {
    var endIndex = this.input.indexOf(';', this.index);
    if (endIndex === -1) {
      return;
    }
    var entity = this.input.slice(this.index, endIndex);
    var chars = this.entityParser.parse(entity);
    if (chars) {
      var count = entity.length;
      // consume the entity chars
      while (count) {
        this.consume();
        count--;
      }
      // consume the `;`
      this.consume();

      return chars;
    }
  },

  markTagStart: function markTagStart() {
    // these properties to be removed in next major bump
    this.tagLine = this.line;
    this.tagColumn = this.column;

    if (this.delegate.tagOpen) {
      this.delegate.tagOpen();
    }
  },

  states: {
    beforeData: function beforeData() {
      var char = this.peek();

      if (char === "<") {
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else {
        this.state = 'data';
        this.delegate.beginData();
      }
    },

    data: function data() {
      var char = this.peek();

      if (char === "<") {
        this.delegate.finishData();
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToData(this.consumeCharRef() || "&");
      } else {
        this.consume();
        this.delegate.appendToData(char);
      }
    },

    tagOpen: function tagOpen() {
      var char = this.consume();

      if (char === "!") {
        this.state = 'markupDeclaration';
      } else if (char === "/") {
        this.state = 'endTagOpen';
      } else if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginStartTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    },

    markupDeclaration: function markupDeclaration() {
      var char = this.consume();

      if (char === "-" && this.input.charAt(this.index) === "-") {
        this.consume();
        this.state = 'commentStart';
        this.delegate.beginComment();
      }
    },

    commentStart: function commentStart() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentStartDash';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData(char);
        this.state = 'comment';
      }
    },

    commentStartDash: function commentStartDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("-");
        this.state = 'comment';
      }
    },

    comment: function comment() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEndDash';
      } else {
        this.delegate.appendToCommentData(char);
      }
    },

    commentEndDash: function commentEndDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else {
        this.delegate.appendToCommentData("-" + char);
        this.state = 'comment';
      }
    },

    commentEnd: function commentEnd() {
      var char = this.consume();

      if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("--" + char);
        this.state = 'comment';
      }
    },

    tagName: function tagName() {
      var char = this.consume();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToTagName(char);
      }
    },

    beforeAttributeName: function beforeAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
        this.consume();
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    attributeName: function attributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'afterAttributeName';
        this.consume();
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.state = 'beforeAttributeValue';
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    afterAttributeName: function afterAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.consume();
        this.state = 'beforeAttributeValue';
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.delegate.appendToAttributeName(char);
      }
    },

    beforeAttributeValue: function beforeAttributeValue() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
      } else if (char === '"') {
        this.state = 'attributeValueDoubleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === "'") {
        this.state = 'attributeValueSingleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeValueUnquoted';
        this.delegate.beginAttributeValue(false);
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
      var char = this.consume();

      if (char === '"') {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
      var char = this.consume();

      if (char === "'") {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueUnquoted: function attributeValueUnquoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
      } else if (char === ">") {
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    selfClosingStartTag: function selfClosingStartTag() {
      var char = this.peek();

      if (char === ">") {
        this.consume();
        this.delegate.markTagAsSelfClosing();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    endTagOpen: function endTagOpen() {
      var char = this.consume();

      if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginEndTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    }
  }
};

exports.default = EventedTokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var HTML5NamedCharRefs = {
    // We don't need the complete named character reference because linkifyHtml
    // does not modify the escape sequences. We do need &nbsp; so that
    // whitespace is parsed properly. Other types of whitespace should already
    // be accounted for
    nbsp: "\xA0"
};
exports.default = HTML5NamedCharRefs;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;

var _tokenizer = __webpack_require__(/*! ./tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js");

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _entityParser = __webpack_require__(/*! ./entity-parser */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js");

var _entityParser2 = _interopRequireDefault(_entityParser);

var _html5NamedCharRefs = __webpack_require__(/*! ./html5-named-char-refs */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js");

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenize(input, options) {
  var tokenizer = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
  return tokenizer.tokenize(input);
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventedTokenizer = __webpack_require__(/*! ./evented-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js");

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tokenizer(entityParser, options) {
  this.token = null;
  this.startLine = 1;
  this.startColumn = 0;
  this.options = options || {};
  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
}

Tokenizer.prototype = {
  tokenize: function tokenize(input) {
    this.tokens = [];
    this.tokenizer.tokenize(input);
    return this.tokens;
  },

  tokenizePart: function tokenizePart(input) {
    this.tokens = [];
    this.tokenizer.tokenizePart(input);
    return this.tokens;
  },

  tokenizeEOF: function tokenizeEOF() {
    this.tokens = [];
    this.tokenizer.tokenizeEOF();
    return this.tokens[0];
  },

  reset: function reset() {
    this.token = null;
    this.startLine = 1;
    this.startColumn = 0;
  },

  addLocInfo: function addLocInfo() {
    if (this.options.loc) {
      this.token.loc = {
        start: {
          line: this.startLine,
          column: this.startColumn
        },
        end: {
          line: this.tokenizer.line,
          column: this.tokenizer.column
        }
      };
    }
    this.startLine = this.tokenizer.line;
    this.startColumn = this.tokenizer.column;
  },

  // Data

  beginData: function beginData() {
    this.token = {
      type: 'Chars',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToData: function appendToData(char) {
    this.token.chars += char;
  },

  finishData: function finishData() {
    this.addLocInfo();
  },

  // Comment

  beginComment: function beginComment() {
    this.token = {
      type: 'Comment',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToCommentData: function appendToCommentData(char) {
    this.token.chars += char;
  },

  finishComment: function finishComment() {
    this.addLocInfo();
  },

  // Tags - basic

  beginStartTag: function beginStartTag() {
    this.token = {
      type: 'StartTag',
      tagName: '',
      attributes: [],
      selfClosing: false
    };
    this.tokens.push(this.token);
  },

  beginEndTag: function beginEndTag() {
    this.token = {
      type: 'EndTag',
      tagName: ''
    };
    this.tokens.push(this.token);
  },

  finishTag: function finishTag() {
    this.addLocInfo();
  },

  markTagAsSelfClosing: function markTagAsSelfClosing() {
    this.token.selfClosing = true;
  },

  // Tags - name

  appendToTagName: function appendToTagName(char) {
    this.token.tagName += char;
  },

  // Tags - attributes

  beginAttribute: function beginAttribute() {
    this._currentAttribute = ["", "", null];
    this.token.attributes.push(this._currentAttribute);
  },

  appendToAttributeName: function appendToAttributeName(char) {
    this._currentAttribute[0] += char;
  },

  beginAttributeValue: function beginAttributeValue(isQuoted) {
    this._currentAttribute[2] = isQuoted;
  },

  appendToAttributeValue: function appendToAttributeValue(char) {
    this._currentAttribute[1] = this._currentAttribute[1] || "";
    this._currentAttribute[1] += char;
  },

  finishAttributeValue: function finishAttributeValue() {}
};

exports.default = Tokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isSpace = isSpace;
exports.isAlpha = isAlpha;
exports.preprocessInput = preprocessInput;
var WSP = /[\t\n\f ]/;
var ALPHA = /[A-Za-z]/;
var CRLF = /\r\n?/g;

function isSpace(char) {
  return WSP.test(char);
}

function isAlpha(char) {
  return ALPHA.test(char);
}

function preprocessInput(input) {
  return input.replace(CRLF, "\n");
}

/***/ }),

/***/ "./node_modules/linkifyjs/react.js":
/*!*****************************************!*\
  !*** ./node_modules/linkifyjs/react.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-react */ "./node_modules/linkifyjs/lib/linkify-react.js").default;


/***/ }),

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-emotion/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: default, flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["cx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["getRegisteredStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["sheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["caches"]; });

/* harmony import */ var create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-emotion-styled */ "./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(emotion__WEBPACK_IMPORTED_MODULE_1__, react__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-inspector/lib/dom-inspector/DOMInspector.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/dom-inspector/DOMInspector.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DOMNodePreview = __webpack_require__(/*! ./DOMNodePreview */ "./node_modules/react-inspector/lib/dom-inspector/DOMNodePreview.js");

var _DOMNodePreview2 = _interopRequireDefault(_DOMNodePreview);

var _TreeView = __webpack_require__(/*! ../tree-view/TreeView */ "./node_modules/react-inspector/lib/tree-view/TreeView.js");

var _TreeView2 = _interopRequireDefault(_TreeView);

var _shouldInline = __webpack_require__(/*! ./shouldInline */ "./node_modules/react-inspector/lib/dom-inspector/shouldInline.js");

var _shouldInline2 = _interopRequireDefault(_shouldInline);

var _ThemeProvider = __webpack_require__(/*! ../styles/ThemeProvider */ "./node_modules/react-inspector/lib/styles/ThemeProvider.js");

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domIterator = /*#__PURE__*/_regenerator2.default.mark(function domIterator(data) {
  var textInlined, i, node;
  return _regenerator2.default.wrap(function domIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(data && data.childNodes)) {
            _context.next = 17;
            break;
          }

          textInlined = (0, _shouldInline2.default)(data);

          if (!textInlined) {
            _context.next = 4;
            break;
          }

          return _context.abrupt('return');

        case 4:
          i = 0;

        case 5:
          if (!(i < data.childNodes.length)) {
            _context.next = 14;
            break;
          }

          node = data.childNodes[i];

          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt('continue', 11);

        case 9:
          _context.next = 11;
          return {
            name: node.tagName + '[' + i + ']',
            data: node
          };

        case 11:
          i++;
          _context.next = 5;
          break;

        case 14:
          if (!data.tagName) {
            _context.next = 17;
            break;
          }

          _context.next = 17;
          return {
            name: 'CLOSE_TAG',
            data: {
              tagName: data.tagName
            },
            isCloseTag: true
          };

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, domIterator, this);
});

var DOMInspector = function (_Component) {
  (0, _inherits3.default)(DOMInspector, _Component);

  function DOMInspector() {
    (0, _classCallCheck3.default)(this, DOMInspector);
    return (0, _possibleConstructorReturn3.default)(this, (DOMInspector.__proto__ || Object.getPrototypeOf(DOMInspector)).apply(this, arguments));
  }

  (0, _createClass3.default)(DOMInspector, [{
    key: 'render',
    value: function render() {
      var nodeRenderer = _DOMNodePreview2.default;

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: nodeRenderer, dataIterator: domIterator }, this.props))
      );
    }
  }]);
  return DOMInspector;
}(_react.Component);

DOMInspector.propTypes = {
  /** The DOM Node to inspect */
  data: _propTypes2.default.object.isRequired
};
DOMInspector.defaultProps = {
  theme: 'chromeLight'
};
exports.default = DOMInspector;

/***/ }),

/***/ "./node_modules/react-inspector/lib/dom-inspector/DOMNodePreview.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/dom-inspector/DOMNodePreview.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

var _shouldInline = __webpack_require__(/*! ./shouldInline */ "./node_modules/react-inspector/lib/dom-inspector/shouldInline.js");

var _shouldInline2 = _interopRequireDefault(_shouldInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OpenTag = function OpenTag(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      styles = _ref.styles;

  return _react2.default.createElement(
    'span',
    { style: styles.base },
    '<',
    _react2.default.createElement(
      'span',
      { style: styles.tagName },
      tagName
    ),
    function () {
      if (attributes) {
        var attributeNodes = [];
        for (var i = 0; i < attributes.length; i++) {
          var attribute = attributes[i];
          attributeNodes.push(_react2.default.createElement(
            'span',
            { key: i },
            ' ',
            _react2.default.createElement(
              'span',
              { style: styles.htmlAttributeName },
              attribute.name
            ),
            '="',
            _react2.default.createElement(
              'span',
              { style: styles.htmlAttributeValue },
              attribute.value
            ),
            '"'
          ));
        }
        return attributeNodes;
      }
    }(),
    '>'
  );
};

// isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}
var CloseTag = function CloseTag(_ref2) {
  var tagName = _ref2.tagName,
      _ref2$isChildNode = _ref2.isChildNode,
      isChildNode = _ref2$isChildNode === undefined ? false : _ref2$isChildNode,
      styles = _ref2.styles;
  return _react2.default.createElement(
    'span',
    { style: Object.assign({}, styles.base, isChildNode && styles.offsetLeft) },
    '</',
    _react2.default.createElement(
      'span',
      { style: styles.tagName },
      tagName
    ),
    '>'
  );
};

var nameByNodeType = {
  1: 'ELEMENT_NODE',
  3: 'TEXT_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE', // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
  11: 'DOCUMENT_FRAGMENT_NODE'
};

var DOMNodePreview = function DOMNodePreview(_ref3, _ref4) {
  var isCloseTag = _ref3.isCloseTag,
      data = _ref3.data,
      expanded = _ref3.expanded;
  var theme = _ref4.theme;

  var styles = (0, _createStyles2.default)('DOMNodePreview', theme);

  if (isCloseTag) {
    return _react2.default.createElement(CloseTag, { styles: styles.htmlCloseTag, isChildNode: true, tagName: data.tagName });
  }

  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(OpenTag, {
          tagName: data.tagName,
          attributes: data.attributes,
          styles: styles.htmlOpenTag
        }),
        (0, _shouldInline2.default)(data) ? data.textContent : !expanded && '…',
        !expanded && _react2.default.createElement(CloseTag, { tagName: data.tagName, styles: styles.htmlCloseTag })
      );
    case Node.TEXT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.textContent
      );
    case Node.CDATA_SECTION_NODE:
      return _react2.default.createElement(
        'span',
        null,
        '<![CDATA[' + data.textContent + ']]>'
      );
    case Node.COMMENT_NODE:
      return _react2.default.createElement(
        'span',
        { style: styles.htmlComment },
        '<!--',
        data.textContent,
        '-->'
      );
    case Node.PROCESSING_INSTRUCTION_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    case Node.DOCUMENT_TYPE_NODE:
      return _react2.default.createElement(
        'span',
        { style: styles.htmlDoctype },
        '<!DOCTYPE ',
        data.name,
        data.publicId ? ' PUBLIC "' + data.publicId + '"' : '',
        !data.publicId && data.systemId ? ' SYSTEM' : '',
        data.systemId ? ' "' + data.systemId + '"' : '',
        '>'
      );
    case Node.DOCUMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    case Node.DOCUMENT_FRAGMENT_NODE:
      return _react2.default.createElement(
        'span',
        null,
        data.nodeName
      );
    default:
      return _react2.default.createElement(
        'span',
        null,
        nameByNodeType[data.nodeType]
      );
  }
};

DOMNodePreview.propTypes = {
  /** If true, just render a close tag */
  isCloseTag: _propTypes2.default.bool,
  /**  */
  name: _propTypes2.default.string,
  /** The DOM Node */
  data: _propTypes2.default.object.isRequired,
  /** Whether the DOM node has been expanded. */
  expanded: _propTypes2.default.bool.isRequired
};

DOMNodePreview.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = DOMNodePreview;

/***/ }),

/***/ "./node_modules/react-inspector/lib/dom-inspector/shouldInline.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/dom-inspector/shouldInline.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TEXT_NODE_MAX_INLINE_CHARS = 80;

var shouldInline = function shouldInline(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
};

exports.default = shouldInline;

/***/ }),

/***/ "./node_modules/react-inspector/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-inspector/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inspector = exports.ObjectName = exports.ObjectValue = exports.ObjectRootLabel = exports.ObjectLabel = exports.DOMInspector = exports.TableInspector = exports.ObjectInspector = exports.chromeDark = exports.chromeLight = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _themes = __webpack_require__(/*! ./styles/themes */ "./node_modules/react-inspector/lib/styles/themes/index.js");

Object.defineProperty(exports, 'chromeLight', {
  enumerable: true,
  get: function get() {
    return _themes.chromeLight;
  }
});
Object.defineProperty(exports, 'chromeDark', {
  enumerable: true,
  get: function get() {
    return _themes.chromeDark;
  }
});

var _ObjectInspector2 = __webpack_require__(/*! ./object-inspector/ObjectInspector */ "./node_modules/react-inspector/lib/object-inspector/ObjectInspector.js");

var _ObjectInspector3 = _interopRequireDefault(_ObjectInspector2);

var _TableInspector2 = __webpack_require__(/*! ./table-inspector/TableInspector */ "./node_modules/react-inspector/lib/table-inspector/TableInspector.js");

var _TableInspector3 = _interopRequireDefault(_TableInspector2);

var _DOMInspector2 = __webpack_require__(/*! ./dom-inspector/DOMInspector */ "./node_modules/react-inspector/lib/dom-inspector/DOMInspector.js");

var _DOMInspector3 = _interopRequireDefault(_DOMInspector2);

var _ObjectLabel2 = __webpack_require__(/*! ./object-inspector/ObjectLabel */ "./node_modules/react-inspector/lib/object-inspector/ObjectLabel.js");

var _ObjectLabel3 = _interopRequireDefault(_ObjectLabel2);

var _ObjectRootLabel2 = __webpack_require__(/*! ./object-inspector/ObjectRootLabel */ "./node_modules/react-inspector/lib/object-inspector/ObjectRootLabel.js");

var _ObjectRootLabel3 = _interopRequireDefault(_ObjectRootLabel2);

var _ObjectValue2 = __webpack_require__(/*! ./object/ObjectValue */ "./node_modules/react-inspector/lib/object/ObjectValue.js");

var _ObjectValue3 = _interopRequireDefault(_ObjectValue2);

var _ObjectName2 = __webpack_require__(/*! ./object/ObjectName */ "./node_modules/react-inspector/lib/object/ObjectName.js");

var _ObjectName3 = _interopRequireDefault(_ObjectName2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isDom = __webpack_require__(/*! is-dom */ "./node_modules/is-dom/index.js");

var _isDom2 = _interopRequireDefault(_isDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ObjectInspector = _ObjectInspector3.default;
exports.TableInspector = _TableInspector3.default;
exports.DOMInspector = _DOMInspector3.default;
exports.ObjectLabel = _ObjectLabel3.default;
exports.ObjectRootLabel = _ObjectRootLabel3.default;
exports.ObjectValue = _ObjectValue3.default;
exports.ObjectName = _ObjectName3.default;

// Wrapping the inspectors

var Inspector = function Inspector(_ref) {
  var _ref$table = _ref.table,
      table = _ref$table === undefined ? false : _ref$table,
      data = _ref.data,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['table', 'data']);

  if (table) {
    return _react2.default.createElement(_TableInspector3.default, (0, _extends3.default)({ data: data }, rest));
  }

  if ((0, _isDom2.default)(data)) return _react2.default.createElement(_DOMInspector3.default, (0, _extends3.default)({ data: data }, rest));

  return _react2.default.createElement(_ObjectInspector3.default, (0, _extends3.default)({ data: data }, rest));
};

Inspector.propTypes = {
  data: _propTypes2.default.any,
  name: _propTypes2.default.string,
  table: _propTypes2.default.bool
};

exports.Inspector = Inspector;
exports.default = Inspector;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object-inspector/ObjectInspector.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object-inspector/ObjectInspector.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeView = __webpack_require__(/*! ../tree-view/TreeView */ "./node_modules/react-inspector/lib/tree-view/TreeView.js");

var _TreeView2 = _interopRequireDefault(_TreeView);

var _ObjectRootLabel = __webpack_require__(/*! ./ObjectRootLabel */ "./node_modules/react-inspector/lib/object-inspector/ObjectRootLabel.js");

var _ObjectRootLabel2 = _interopRequireDefault(_ObjectRootLabel);

var _ObjectLabel = __webpack_require__(/*! ./ObjectLabel */ "./node_modules/react-inspector/lib/object-inspector/ObjectLabel.js");

var _ObjectLabel2 = _interopRequireDefault(_ObjectLabel);

var _ThemeProvider = __webpack_require__(/*! ../styles/ThemeProvider */ "./node_modules/react-inspector/lib/styles/ThemeProvider.js");

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
  var objectIterator = /*#__PURE__*/_regenerator2.default.mark(function objectIterator(data) {
    var shouldIterate, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

    return _regenerator2.default.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && data !== null || typeof data === 'function';

            if (shouldIterate) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return');

          case 3:
            if (!(!Array.isArray(data) && data[Symbol.iterator])) {
              _context.next = 40;
              break;
            }

            i = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;
            _iterator = data[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 24;
              break;
            }

            entry = _step.value;

            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 18;
              break;
            }

            _entry = (0, _slicedToArray3.default)(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 16;
            return {
              name: k,
              data: v
            };

          case 16:
            _context.next = 20;
            break;

          case 18:
            _context.next = 20;
            return {
              name: i.toString(),
              data: entry
            };

          case 20:
            i++;

          case 21:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context['catch'](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(30);

          case 38:
            _context.next = 81;
            break;

          case 40:
            keys = Object.getOwnPropertyNames(data);

            if (sortObjectKeys === true) {
              keys.sort();
            } else if (typeof sortObjectKeys === 'function') {
              keys.sort(sortObjectKeys);
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 45;
            _iterator2 = keys[Symbol.iterator]();

          case 47:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 64;
              break;
            }

            propertyName = _step2.value;

            if (!data.propertyIsEnumerable(propertyName)) {
              _context.next = 55;
              break;
            }

            propertyValue = data[propertyName];
            _context.next = 53;
            return {
              name: propertyName || '""',
              data: propertyValue
            };

          case 53:
            _context.next = 61;
            break;

          case 55:
            if (!showNonenumerable) {
              _context.next = 61;
              break;
            }

            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
            _propertyValue = void 0;

            try {
              _propertyValue = data[propertyName];
            } catch (e) {
              // console.warn(e)
            }

            if (!(_propertyValue !== undefined)) {
              _context.next = 61;
              break;
            }

            _context.next = 61;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };

          case 61:
            _iteratorNormalCompletion2 = true;
            _context.next = 47;
            break;

          case 64:
            _context.next = 70;
            break;

          case 66:
            _context.prev = 66;
            _context.t1 = _context['catch'](45);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 70:
            _context.prev = 70;
            _context.prev = 71;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 73:
            _context.prev = 73;

            if (!_didIteratorError2) {
              _context.next = 76;
              break;
            }

            throw _iteratorError2;

          case 76:
            return _context.finish(73);

          case 77:
            return _context.finish(70);

          case 78:
            if (!(showNonenumerable && data !== Object.prototype /* already added */)) {
              _context.next = 81;
              break;
            }

            _context.next = 81;
            return {
              name: '__proto__',
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };

          case 81:
          case 'end':
            return _context.stop();
        }
      }
    }, objectIterator, this, [[8, 26, 30, 38], [31,, 33, 37], [45, 66, 70, 78], [71,, 73, 77]]);
  });

  return objectIterator;
};

var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? _react2.default.createElement(_ObjectRootLabel2.default, { name: name, data: data }) : _react2.default.createElement(_ObjectLabel2.default, { name: name, data: data, isNonenumerable: isNonenumerable });
};

/**
 * Tree-view for objects
 */

var ObjectInspector = function (_Component) {
  (0, _inherits3.default)(ObjectInspector, _Component);

  function ObjectInspector() {
    (0, _classCallCheck3.default)(this, ObjectInspector);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectInspector.__proto__ || Object.getPrototypeOf(ObjectInspector)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectInspector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showNonenumerable = _props.showNonenumerable,
          sortObjectKeys = _props.sortObjectKeys,
          nodeRenderer = _props.nodeRenderer,
          rest = (0, _objectWithoutProperties3.default)(_props, ['showNonenumerable', 'sortObjectKeys', 'nodeRenderer']);

      var dataIterator = createIterator(showNonenumerable, sortObjectKeys);

      var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({ nodeRenderer: renderer, dataIterator: dataIterator }, rest))
      );
    }
  }]);
  return ObjectInspector;
}(_react.Component);

ObjectInspector.defaultProps = {
  showNonenumerable: false,

  theme: 'chromeLight'
};
ObjectInspector.propTypes = {
  /** An integer specifying to which level the tree should be initially expanded. */
  expandLevel: _propTypes2.default.number,
  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
  expandPaths: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),

  name: _propTypes2.default.string,
  /** Not required prop because we also allow undefined value */
  data: _propTypes2.default.any,

  /** A known theme or theme object */
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

  /** Show non-enumerable properties */
  showNonenumerable: _propTypes2.default.bool,
  /** Sort object keys with optional compare function. */
  sortObjectKeys: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),

  /** Provide a custom nodeRenderer */
  nodeRenderer: _propTypes2.default.func
};
exports.default = ObjectInspector;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object-inspector/ObjectLabel.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object-inspector/ObjectLabel.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectName = __webpack_require__(/*! ../object/ObjectName */ "./node_modules/react-inspector/lib/object/ObjectName.js");

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _ObjectValue = __webpack_require__(/*! ../object/ObjectValue */ "./node_modules/react-inspector/lib/object/ObjectValue.js");

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * if isNonenumerable is specified, render the name dimmed
 */
var ObjectLabel = function ObjectLabel(_ref) {
  var name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;

  var object = data;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_ObjectName2.default, { name: name, dimmed: isNonenumerable }),
    _react2.default.createElement(
      'span',
      null,
      ': '
    ),
    _react2.default.createElement(_ObjectValue2.default, { object: object })
  );
};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: _propTypes2.default.bool
};

ObjectLabel.defaultProps = {
  isNonenumerable: false
};

exports.default = ObjectLabel;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object-inspector/ObjectPreview.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object-inspector/ObjectPreview.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectValue = __webpack_require__(/*! ../object/ObjectValue */ "./node_modules/react-inspector/lib/object/ObjectValue.js");

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

var _ObjectName = __webpack_require__(/*! ../object/ObjectName */ "./node_modules/react-inspector/lib/object/ObjectName.js");

var _ObjectName2 = _interopRequireDefault(_ObjectName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* NOTE: Chrome console.log is italic */
var styles = {
  preview: {
    fontStyle: 'italic'
  }
};

/* intersperse arr with separator */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function (xs, x) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object
 */
var ObjectPreview = function ObjectPreview(_ref) {
  var data = _ref.data,
      maxProperties = _ref.maxProperties;

  var object = data;

  if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    return _react2.default.createElement(_ObjectValue2.default, { object: object });
  }

  if (Array.isArray(object)) {
    return _react2.default.createElement(
      'span',
      { style: styles.preview },
      '[',
      intersperse(object.map(function (element, index) {
        return _react2.default.createElement(_ObjectValue2.default, { key: index, object: element });
      }), ', '),
      ']'
    );
  } else {
    var propertyNodes = [];
    for (var propertyName in object) {
      var propertyValue = object[propertyName];
      if (object.hasOwnProperty(propertyName)) {
        var ellipsis = void 0;
        if (propertyNodes.length === maxProperties - 1 && Object.keys(object).length > maxProperties) {
          ellipsis = _react2.default.createElement(
            'span',
            { key: 'ellipsis' },
            '\u2026'
          );
        }
        propertyNodes.push(_react2.default.createElement(
          'span',
          { key: propertyName },
          _react2.default.createElement(_ObjectName2.default, { name: propertyName || '""' }),
          ':\xA0',
          _react2.default.createElement(_ObjectValue2.default, { object: propertyValue }),
          ellipsis
        ));
        if (ellipsis) break;
      }
    }

    return _react2.default.createElement(
      'span',
      { style: styles.preview },
      object.constructor.name + ' {',
      intersperse(propertyNodes, ', '),
      '}'
    );
  }
};

ObjectPreview.propTypes = {
  /**
   * max number of properties shown in the property view
   */
  maxProperties: _propTypes2.default.number
};
ObjectPreview.defaultProps = {
  maxProperties: 5
};

exports.default = ObjectPreview;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object-inspector/ObjectRootLabel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object-inspector/ObjectRootLabel.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ObjectName = __webpack_require__(/*! ../object/ObjectName */ "./node_modules/react-inspector/lib/object/ObjectName.js");

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _ObjectPreview = __webpack_require__(/*! ./ObjectPreview */ "./node_modules/react-inspector/lib/object-inspector/ObjectPreview.js");

var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectRootLabel = function ObjectRootLabel(_ref) {
  var name = _ref.name,
      data = _ref.data;

  if (typeof name === 'string') {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_ObjectName2.default, { name: name }),
      _react2.default.createElement(
        'span',
        null,
        ': '
      ),
      _react2.default.createElement(_ObjectPreview2.default, { data: data })
    );
  } else {
    return _react2.default.createElement(_ObjectPreview2.default, { data: data });
  }
};

exports.default = ObjectRootLabel;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object/ObjectName.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object/ObjectName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
var ObjectName = function ObjectName(_ref, _ref2) {
  var name = _ref.name,
      dimmed = _ref.dimmed,
      styles = _ref.styles;
  var theme = _ref2.theme;

  var themeStyles = (0, _createStyles2.default)('ObjectName', theme);
  var appliedStyles = (0, _extends3.default)({}, themeStyles.base, dimmed ? themeStyles['dimmed'] : {}, styles);

  return _react2.default.createElement(
    'span',
    { style: appliedStyles },
    name
  );
};

ObjectName.propTypes = {
  /** Property name */
  name: _propTypes2.default.string,
  /** Should property name be dimmed */
  dimmed: _propTypes2.default.bool
};

ObjectName.defaultProps = {
  dimmed: false
};

ObjectName.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ObjectName;

/***/ }),

/***/ "./node_modules/react-inspector/lib/object/ObjectValue.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/object/ObjectValue.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
var ObjectValue = function ObjectValue(_ref, _ref2) {
  var object = _ref.object,
      styles = _ref.styles;
  var theme = _ref2.theme;

  var themeStyles = (0, _createStyles2.default)('ObjectValue', theme);

  var mkStyle = function mkStyle(key) {
    return (0, _extends3.default)({}, themeStyles[key], styles);
  };

  switch (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) {
    case 'number':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueNumber') },
        String(object)
      );
    case 'string':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueString') },
        '"',
        object,
        '"'
      );
    case 'boolean':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueBoolean') },
        String(object)
      );
    case 'undefined':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueUndefined') },
        'undefined'
      );
    case 'object':
      if (object === null) {
        return _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueNull') },
          'null'
        );
      }
      if (object instanceof Date) {
        return _react2.default.createElement(
          'span',
          null,
          object.toString()
        );
      }
      if (object instanceof RegExp) {
        return _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueRegExp') },
          object.toString()
        );
      }
      if (Array.isArray(object)) {
        return _react2.default.createElement(
          'span',
          null,
          'Array[' + object.length + ']'
        );
      }

      if (!object.constructor) {
        return _react2.default.createElement(
          'span',
          null,
          'Object'
        );
      }

      return _react2.default.createElement(
        'span',
        null,
        object.constructor.name
      );
    case 'function':
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueFunctionKeyword') },
          'function'
        ),
        _react2.default.createElement(
          'span',
          { style: mkStyle('objectValueFunctionName') },
          '\xA0',
          object.name,
          '()'
        )
      );
    case 'symbol':
      return _react2.default.createElement(
        'span',
        { style: mkStyle('objectValueSymbol') },
        object.toString()
      );
    default:
      return _react2.default.createElement('span', null);
  }
};

ObjectValue.propTypes = {
  /** the object to describe */
  object: _propTypes2.default.any
};

ObjectValue.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ObjectValue;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/ThemeProvider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/ThemeProvider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function (_Component) {
  (0, _inherits3.default)(ThemeProvider, _Component);

  function ThemeProvider() {
    (0, _classCallCheck3.default)(this, ThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var theme = this.props.theme;

      return {
        // createStyles: createStyles
        theme: theme
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ThemeProvider;
}(_react.Component);

ThemeProvider.childContextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

exports.default = ThemeProvider;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/base.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/base.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _unselectable = __webpack_require__(/*! ./unselectable */ "./node_modules/react-inspector/lib/styles/unselectable.js");

var _unselectable2 = _interopRequireDefault(_unselectable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    DOMNodePreview: {
      htmlOpenTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        },
        htmlAttributeName: {
          color: theme.HTML_ATTRIBUTE_NAME_COLOR
        },
        htmlAttributeValue: {
          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
        }
      },
      htmlCloseTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        offsetLeft: {
          /* hack: offset placeholder */
          marginLeft: -theme.TREENODE_PADDING_LEFT
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        }
      },
      htmlComment: {
        color: theme.HTML_COMMENT_COLOR
      },
      htmlDoctype: {
        color: theme.HTML_DOCTYPE_COLOR
      }
    },

    ObjectName: {
      base: {
        color: theme.OBJECT_NAME_COLOR
      },
      dimmed: {
        opacity: 0.6
      }
    },

    ObjectValue: {
      objectValueNull: {
        color: theme.OBJECT_VALUE_NULL_COLOR
      },
      objectValueUndefined: {
        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
      },
      objectValueRegExp: {
        color: theme.OBJECT_VALUE_REGEXP_COLOR
      },
      objectValueString: {
        color: theme.OBJECT_VALUE_STRING_COLOR
      },
      objectValueSymbol: {
        color: theme.OBJECT_VALUE_SYMBOL_COLOR
      },
      objectValueNumber: {
        color: theme.OBJECT_VALUE_NUMBER_COLOR
      },
      objectValueBoolean: {
        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
      },
      objectValueFunctionKeyword: {
        color: theme.OBJECT_VALUE_FUNCTION_KEYWORD_COLOR,
        fontStyle: 'italic'
      },
      objectValueFunctionName: {
        fontStyle: 'italic'
      }
    },

    TreeNode: {
      treeNodeBase: {
        color: theme.BASE_COLOR,
        backgroundColor: theme.BASE_BACKGROUND_COLOR,

        lineHeight: theme.TREENODE_LINE_HEIGHT,
        cursor: 'default',

        boxSizing: 'border-box',
        listStyle: 'none',

        fontFamily: theme.TREENODE_FONT_FAMILY,
        fontSize: theme.TREENODE_FONT_SIZE
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: (0, _extends3.default)({
        whiteSpace: 'pre',

        fontSize: theme.ARROW_FONT_SIZE,
        marginRight: theme.ARROW_MARGIN_RIGHT
      }, _unselectable2.default),
      treeNodeArrow: {
        base: (0, _extends3.default)({
          color: theme.ARROW_COLOR,
          display: 'inline-block',
          // lineHeight: '14px',
          fontSize: theme.ARROW_FONT_SIZE,
          marginRight: theme.ARROW_MARGIN_RIGHT
        }, _unselectable2.default),
        expanded: {
          WebkitTransform: 'rotateZ(90deg)',
          MozTransform: 'rotateZ(90deg)',
          transform: 'rotateZ(90deg)'
        },
        collapsed: {
          WebkitTransform: 'rotateZ(0deg)',
          MozTransform: 'rotateZ(0deg)',
          transform: 'rotateZ(0deg)'
        }
      },
      treeNodeChildNodesContainer: {
        margin: 0, // reset user-agent style
        paddingLeft: theme.TREENODE_PADDING_LEFT
      }
    },

    TableInspector: {
      base: {
        color: theme.BASE_COLOR,

        position: 'relative',
        border: '1px solid ' + theme.TABLE_BORDER_COLOR,
        fontFamily: theme.BASE_FONT_FAMILY,
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%',
        boxSizing: 'border-box',
        cursor: 'default'
      }
    },

    TableInspectorHeaderContainer: {
      base: {
        top: 0,
        height: '17px',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        tableLayout: 'fixed',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: '100%',
        width: '100%',
        margin: 0
      }
    },

    TableInspectorDataContainer: {
      tr: {
        display: 'table-row'
      },
      td: {
        boxSizing: 'border-box',
        border: 'none', // prevent overrides
        height: '16px', // /* 0.5 * table.background-size height */
        verticalAlign: 'top',
        padding: '1px 4px',
        WebkitUserSelect: 'text',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px'
      },
      div: {
        position: 'static',
        top: '17px',
        bottom: 0,
        overflowY: 'overlay',
        transform: 'translateZ(0)',

        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        positon: 'static',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: '0 none transparent',
        margin: 0, // prevent user agent stylesheet overrides

        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: 'fixed',

        // table
        borderSpacing: 0,
        borderCollapse: 'separate',
        // height: '100%',
        width: '100%',

        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },

    TableInspectorTH: {
      base: {
        position: 'relative', // anchor for sort icon container
        height: 'auto',
        textAlign: 'left',
        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: '1px solid ' + theme.TABLE_BORDER_COLOR,
        fontWeight: 'normal',
        verticalAlign: 'middle',
        padding: '0 4px',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px',

        ':hover': {
          backgroundColor: theme.TABLE_TH_HOVER_COLOR
        }
      },
      div: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',

        // prevent user agent stylesheet overrides
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },

    TableInspectorLeftBorder: {
      none: {
        borderLeft: 'none'
      },
      solid: {
        borderLeft: '1px solid ' + theme.TABLE_BORDER_COLOR
      }
    },

    TableInspectorSortIcon: (0, _extends3.default)({
      display: 'block',
      marginRight: 3, // 4,
      width: 8,
      height: 7,

      marginTop: -7,
      color: theme.TABLE_SORT_ICON_COLOR,
      fontSize: 12
    }, _unselectable2.default)
  };
};

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/createStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/createStyles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _themes = __webpack_require__(/*! ./themes */ "./node_modules/react-inspector/lib/styles/themes/index.js");

var themes = _interopRequireWildcard(_themes);

var _base = __webpack_require__(/*! ./base */ "./node_modules/react-inspector/lib/styles/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = Object.keys(themes).reduce(function (styles, themeName) {
  styles[themeName] = (0, _base2.default)(themes[themeName]);
  return styles;
}, {});

var createStyles = function createStyles(key, theme) {
  // console.debug(styles, theme, styles[theme])
  if (typeof theme === 'string') {
    return styles[theme][key];
  } else if ((typeof theme === 'undefined' ? 'undefined' : (0, _typeof3.default)(theme)) === 'object') {
    return (0, _base2.default)(theme)[key];
  }
  // Default styles
  return styles['chromeLight'][key];
};

exports.default = createStyles;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/themes/chromeDark.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/themes/chromeDark.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: '14px',

  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
  BASE_COLOR: 'rgb(213, 213, 213)',

  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',

  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,

  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: '14px',
  TREENODE_PADDING_LEFT: 12,

  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black', //'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

exports.default = theme;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/themes/chromeLight.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/themes/chromeLight.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: '14px',

  BASE_BACKGROUND_COLOR: 'white',
  BASE_COLOR: 'black',

  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(170, 13, 145)',

  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

  ARROW_COLOR: '#6e6e6e',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,

  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: '14px',
  TREENODE_PADDING_LEFT: 12,

  TABLE_BORDER_COLOR: '#aaa',
  TABLE_TH_BACKGROUND_COLOR: '#eee',
  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
  TABLE_SORT_ICON_COLOR: '#6e6e6e',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

exports.default = theme;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/themes/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/themes/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chromeLight = exports.chromeDark = undefined;

var _chromeDark2 = __webpack_require__(/*! ./chromeDark */ "./node_modules/react-inspector/lib/styles/themes/chromeDark.js");

var _chromeDark3 = _interopRequireDefault(_chromeDark2);

var _chromeLight2 = __webpack_require__(/*! ./chromeLight */ "./node_modules/react-inspector/lib/styles/themes/chromeLight.js");

var _chromeLight3 = _interopRequireDefault(_chromeLight2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.chromeDark = _chromeDark3.default;
exports.chromeLight = _chromeLight3.default;

/***/ }),

/***/ "./node_modules/react-inspector/lib/styles/unselectable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/styles/unselectable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none'
};

/***/ }),

/***/ "./node_modules/react-inspector/lib/table-inspector/DataContainer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/table-inspector/DataContainer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

var _ObjectValue = __webpack_require__(/*! ../object/ObjectValue */ "./node_modules/react-inspector/lib/object/ObjectValue.js");

var _ObjectValue2 = _interopRequireDefault(_ObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataContainer = function DataContainer(_ref, _ref2) {
  var rows = _ref.rows,
      columns = _ref.columns,
      rowsData = _ref.rowsData;
  var theme = _ref2.theme;

  var styles = (0, _createStyles2.default)('TableInspectorDataContainer', theme);
  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);

  return _react2.default.createElement(
    'div',
    { style: styles.div },
    _react2.default.createElement(
      'table',
      { style: styles.table },
      _react2.default.createElement('colgroup', null),
      _react2.default.createElement(
        'tbody',
        null,
        rows.map(function (row, i) {
          return _react2.default.createElement(
            'tr',
            { key: row, style: styles.tr },
            _react2.default.createElement(
              'td',
              { style: (0, _extends3.default)({}, styles.td, borderStyles.none) },
              row
            ),
            columns.map(function (column) {
              var rowData = rowsData[i];
              // rowData could be
              //  object -> index by key
              //    array -> index by array index
              //    null -> pass
              //  boolean -> pass
              //  string -> pass (hasOwnProperty returns true for [0..len-1])
              //  number -> pass
              //  function -> pass
              //  symbol
              //  undefined -> pass
              if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null && rowData.hasOwnProperty(column)) {
                return _react2.default.createElement(
                  'td',
                  { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) },
                  _react2.default.createElement(_ObjectValue2.default, { object: rowData[column] })
                );
              } else {
                return _react2.default.createElement('td', { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) });
              }
            })
          );
        })
      )
    )
  );
};

DataContainer.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = DataContainer;

/***/ }),

/***/ "./node_modules/react-inspector/lib/table-inspector/HeaderContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/table-inspector/HeaderContainer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

var _TH = __webpack_require__(/*! ./TH */ "./node_modules/react-inspector/lib/table-inspector/TH.js");

var _TH2 = _interopRequireDefault(_TH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderContainer = function HeaderContainer(_ref, _ref2) {
  var indexColumnText = _ref.indexColumnText,
      columns = _ref.columns,
      sorted = _ref.sorted,
      sortIndexColumn = _ref.sortIndexColumn,
      sortColumn = _ref.sortColumn,
      sortAscending = _ref.sortAscending,
      onTHClick = _ref.onTHClick,
      onIndexTHClick = _ref.onIndexTHClick;
  var theme = _ref2.theme;

  var styles = (0, _createStyles2.default)('TableInspectorHeaderContainer', theme);
  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);
  return _react2.default.createElement(
    'div',
    { style: styles.base },
    _react2.default.createElement(
      'table',
      { style: styles.table },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            _TH2.default,
            {
              borderStyle: borderStyles.none,
              sorted: sorted && sortIndexColumn,
              sortAscending: sortAscending,
              onClick: onIndexTHClick
            },
            indexColumnText
          ),
          columns.map(function (column) {
            return _react2.default.createElement(
              _TH2.default,
              {
                borderStyle: borderStyles.solid,
                key: column,
                sorted: sorted && sortColumn === column,
                sortAscending: sortAscending,
                onClick: onTHClick.bind(undefined, column)
              },
              column
            );
          })
        )
      )
    )
  );
};

HeaderContainer.defaultProps = {
  indexColumnText: '(index)',
  columns: []
};

HeaderContainer.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = HeaderContainer;

/***/ }),

/***/ "./node_modules/react-inspector/lib/table-inspector/TH.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/table-inspector/TH.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortIconContainer = function SortIconContainer(props) {
  return _react2.default.createElement(
    'div',
    {
      style: {
        position: 'absolute',
        top: 1,
        right: 0,
        bottom: 1,
        display: 'flex',
        alignItems: 'center'
      }
    },
    props.children
  );
};

var SortIcon = function SortIcon(_ref, _ref2) {
  var sortAscending = _ref.sortAscending;
  var theme = _ref2.theme;

  var glyph = sortAscending ? '▲' : '▼';
  var styles = (0, _createStyles2.default)('TableInspectorSortIcon', theme);
  return _react2.default.createElement(
    'div',
    { style: styles },
    glyph
  );
};

SortIcon.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

var TH = function (_Component) {
  (0, _inherits3.default)(TH, _Component);

  function TH() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TH);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = TH.__proto__ || Object.getPrototypeOf(TH)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { hovered: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TH, [{
    key: 'toggleHovered',
    value: function toggleHovered(hovered) {
      this.setState({ hovered: hovered });
    }
  }, {
    key: 'render',
    value: function render() {
      // either not sorted, sort ascending or sort descending
      var _props = this.props,
          borderStyle = _props.borderStyle,
          children = _props.children,
          onClick = _props.onClick,
          sortAscending = _props.sortAscending,
          sorted = _props.sorted,
          props = (0, _objectWithoutProperties3.default)(_props, ['borderStyle', 'children', 'onClick', 'sortAscending', 'sorted']);
      var theme = this.context.theme;

      var styles = (0, _createStyles2.default)('TableInspectorTH', theme);

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({}, props, {
          style: (0, _extends3.default)({}, styles.base, borderStyle, this.state.hovered ? styles.base[':hover'] : {}),
          onMouseEnter: this.toggleHovered.bind(this, true),
          onMouseLeave: this.toggleHovered.bind(this, false),
          onClick: onClick
        }),
        _react2.default.createElement(
          'div',
          { style: styles.div },
          children
        ),
        sorted && _react2.default.createElement(
          SortIconContainer,
          null,
          _react2.default.createElement(SortIcon, { sortAscending: sortAscending })
        )
      );
    }
  }]);
  return TH;
}(_react.Component);

TH.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

TH.defaultProps = {
  sortAscending: false,
  sorted: false,
  onClick: undefined
};

exports.default = TH;

/***/ }),

/***/ "./node_modules/react-inspector/lib/table-inspector/TableInspector.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/table-inspector/TableInspector.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemeProvider = __webpack_require__(/*! ../styles/ThemeProvider */ "./node_modules/react-inspector/lib/styles/ThemeProvider.js");

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

var _getHeaders2 = __webpack_require__(/*! ./getHeaders */ "./node_modules/react-inspector/lib/table-inspector/getHeaders.js");

var _getHeaders3 = _interopRequireDefault(_getHeaders2);

var _DataContainer = __webpack_require__(/*! ./DataContainer */ "./node_modules/react-inspector/lib/table-inspector/DataContainer.js");

var _DataContainer2 = _interopRequireDefault(_DataContainer);

var _HeaderContainer = __webpack_require__(/*! ./HeaderContainer */ "./node_modules/react-inspector/lib/table-inspector/HeaderContainer.js");

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableInspector = function (_Component) {
  (0, _inherits3.default)(TableInspector, _Component);

  function TableInspector(props) {
    (0, _classCallCheck3.default)(this, TableInspector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TableInspector.__proto__ || Object.getPrototypeOf(TableInspector)).call(this, props));

    _this.state = {
      sorted: false, // has user ever clicked the <th> tag to sort?
      sortIndexColumn: false, // is index column sorted?
      sortColumn: undefined, // which column is sorted?
      sortAscending: false // is sorting ascending or descending?
    };
    return _this;
  }

  (0, _createClass3.default)(TableInspector, [{
    key: 'handleIndexTHClick',
    value: function handleIndexTHClick() {
      this.setState(function (_ref) {
        var sortIndexColumn = _ref.sortIndexColumn,
            sortAscending = _ref.sortAscending;
        return {
          sorted: true,
          sortIndexColumn: true,
          sortColumn: undefined,
          // when changed to a new column, default to asending
          sortAscending: sortIndexColumn ? !sortAscending : true
        };
      });
    }
  }, {
    key: 'handleTHClick',
    value: function handleTHClick(col) {
      this.setState(function (_ref2) {
        var sortColumn = _ref2.sortColumn,
            sortAscending = _ref2.sortAscending;
        return {
          sorted: true,
          sortIndexColumn: false,
          // update sort column
          sortColumn: col,
          // when changed to a new column, default to asending
          sortAscending: col === sortColumn ? !sortAscending : true
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var columns = this.props.columns;

      var theme = this.props.theme;

      var styles = (0, _createStyles2.default)('TableInspector', theme);

      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' || data === null) {
        return _react2.default.createElement('div', null);
      }

      var _getHeaders = (0, _getHeaders3.default)(data),
          rowHeaders = _getHeaders.rowHeaders,
          colHeaders = _getHeaders.colHeaders;

      // columns to be displayed are specified
      // NOTE: there's some space for optimization here


      if (columns !== undefined) {
        colHeaders = columns;
      }

      var rowsData = rowHeaders.map(function (rowHeader) {
        return data[rowHeader];
      });

      var sortIndexColumn = this.state.sortIndexColumn,
          sortColumn = this.state.sortColumn,
          sortAscending = this.state.sortAscending;

      var columnDataWithRowIndexes = void 0; /* row indexes are [0..nRows-1] */
      // TODO: refactor
      if (sortColumn !== undefined) {
        // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
        columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
          // normalize rowData
          if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/
          ) {
              var columnData = rowData[sortColumn];
              return [columnData, index];
            }
          return [undefined, index];
        });
      } else {
        if (sortIndexColumn) {
          columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
            var columnData = rowHeaders[index];
            return [columnData, index];
          });
        }
      }
      if (columnDataWithRowIndexes !== undefined) {
        // apply a mapper before sorting (because we need to access inside a container)
        var comparator = function comparator(mapper, ascending) {
          return function (a, b) {
            var v1 = mapper(a); // the datum
            var v2 = mapper(b);
            var type1 = typeof v1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v1);
            var type2 = typeof v2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v2);
            // use '<' operator to compare same type of values or compare type precedence order #
            var lt = function lt(v1, v2) {
              if (v1 < v2) {
                return -1;
              } else if (v1 > v2) {
                return 1;
              } else {
                return 0;
              }
            };
            var result = void 0;
            if (type1 === type2) {
              result = lt(v1, v2);
            } else {
              // order of different types
              var order = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6
              };
              result = lt(order[type1], order[type2]);
            }
            // reverse result if descending
            if (!ascending) result = -result;
            return result;
          };
        };
        var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
          return item[0];
        }, sortAscending)).map(function (item) {
          return item[1];
        }); // sorted row indexes
        rowHeaders = sortedRowIndexes.map(function (i) {
          return rowHeaders[i];
        });
        rowsData = sortedRowIndexes.map(function (i) {
          return rowsData[i];
        });
      }

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(
          'div',
          { style: styles.base },
          _react2.default.createElement(_HeaderContainer2.default, {
            columns: colHeaders
            /* for sorting */
            , sorted: this.state.sorted,
            sortIndexColumn: this.state.sortIndexColumn,
            sortColumn: this.state.sortColumn,
            sortAscending: this.state.sortAscending,
            onTHClick: this.handleTHClick.bind(this),
            onIndexTHClick: this.handleIndexTHClick.bind(this)
          }),
          _react2.default.createElement(_DataContainer2.default, { rows: rowHeaders, columns: colHeaders, rowsData: rowsData })
        )
      );
    }
  }]);
  return TableInspector;
}(_react.Component); /**
                      * Specs:
                      * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
                      * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
                      */

exports.default = TableInspector;


TableInspector.propTypes = {
  /**
   * the Javascript object you would like to inspect, either an array or an object
   */
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  /**
   * An array of the names of the columns you'd like to display in the table
   */
  columns: _propTypes2.default.array
};

TableInspector.defaultProps = {
  data: undefined,
  columns: undefined,
  theme: 'chromeLight'
};

/***/ }),

/***/ "./node_modules/react-inspector/lib/table-inspector/getHeaders.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-inspector/lib/table-inspector/getHeaders.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = getHeaders;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Polyfill for running tests
 * `includes` is an ES2016 feature
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

function getHeaders(data) {
  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
    var rowHeaders = void 0;
    // is an array
    if (Array.isArray(data)) {
      var nRows = data.length;
      rowHeaders = [].concat((0, _toConsumableArray3.default)(Array(nRows).keys()));
    } else if (data !== null) {
      // is an object
      // keys are row indexes
      rowHeaders = Object.keys(data);
    }

    // Time: O(nRows * nCols)
    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
      var row = data[rowHeader];
      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object' && row !== null) {
        /* O(nCols) Could optimize `includes` here */
        var cols = Object.keys(row);
        cols.reduce(function (xs, x) {
          if (!xs.includes(x)) {
            /* xs is the colHeaders to be filled by searching the row's indexes */
            xs.push(x);
          }
          return xs;
        }, colHeaders);
      }
      return colHeaders;
    }, []);
    return {
      rowHeaders: rowHeaders,
      colHeaders: colHeaders
    };
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/react-inspector/lib/tree-view/TreeNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/tree-view/TreeNode.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyles = __webpack_require__(/*! ../styles/createStyles */ "./node_modules/react-inspector/lib/styles/createStyles.js");

var _createStyles2 = _interopRequireDefault(_createStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
  var expanded = _ref.expanded,
      styles = _ref.styles;
  return _react2.default.createElement(
    'span',
    { style: (0, _extends3.default)({}, styles.base, expanded ? styles.expanded : styles.collapsed) },
    '\u25B6'
  );
};

var TreeNode = function (_Component) {
  (0, _inherits3.default)(TreeNode, _Component);

  function TreeNode() {
    (0, _classCallCheck3.default)(this, TreeNode);
    return (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(TreeNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          expanded = _props.expanded,
          onClick = _props.onClick,
          children = _props.children,
          nodeRenderer = _props.nodeRenderer,
          title = _props.title,
          shouldShowArrow = _props.shouldShowArrow,
          shouldShowPlaceholder = _props.shouldShowPlaceholder;
      var theme = this.context.theme;

      var styles = (0, _createStyles2.default)('TreeNode', theme);

      var renderedNode = (0, _react.createElement)(nodeRenderer, this.props);
      var childNodes = expanded ? children : undefined;

      return _react2.default.createElement(
        'li',
        { 'aria-expanded': expanded, role: 'treeitem', style: styles.treeNodeBase, title: title },
        _react2.default.createElement(
          'div',
          { style: styles.treeNodePreviewContainer, onClick: onClick },
          shouldShowArrow || _react.Children.count(children) > 0 ? _react2.default.createElement(Arrow, { expanded: expanded, styles: styles.treeNodeArrow }) : shouldShowPlaceholder && _react2.default.createElement(
            'span',
            { style: styles.treeNodePlaceholder },
            '\xA0'
          ),
          renderedNode
        ),
        _react2.default.createElement(
          'ol',
          { role: 'group', style: styles.treeNodeChildNodesContainer },
          childNodes
        )
      );
    }
  }]);
  return TreeNode;
}(_react.Component);

TreeNode.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,

  expanded: _propTypes2.default.bool,
  shouldShowArrow: _propTypes2.default.bool,
  shouldShowPlaceholder: _propTypes2.default.bool,

  nodeRenderer: _propTypes2.default.func,

  onClick: _propTypes2.default.func
};

TreeNode.defaultProps = {
  name: undefined,
  data: undefined,
  expanded: true,

  nodeRenderer: function nodeRenderer(_ref2) {
    var name = _ref2.name;
    return _react2.default.createElement(
      'span',
      null,
      name
    );
  },

  onClick: function onClick() {},

  shouldShowArrow: false,
  shouldShowPlaceholder: true
};

TreeNode.contextTypes = {
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
};

exports.default = TreeNode;

/***/ }),

/***/ "./node_modules/react-inspector/lib/tree-view/TreeView.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/tree-view/TreeView.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TreeNode = __webpack_require__(/*! ./TreeNode */ "./node_modules/react-inspector/lib/tree-view/TreeNode.js");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _pathUtils = __webpack_require__(/*! ./pathUtils */ "./node_modules/react-inspector/lib/tree-view/pathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_EXPAND':
      {
        var path = action.path;
        var expandedPaths = state.expandedPaths;
        var expanded = !!expandedPaths[path];

        return Object.assign({}, state, {
          expandedPaths: Object.assign({}, state.expandedPaths, (0, _defineProperty3.default)({}, path, !expanded))
        });
      }
    default:
      return state;
  }
};

var ConnectedTreeNode = function (_Component) {
  (0, _inherits3.default)(ConnectedTreeNode, _Component);

  function ConnectedTreeNode(props, context) {
    (0, _classCallCheck3.default)(this, ConnectedTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConnectedTreeNode.__proto__ || Object.getPrototypeOf(ConnectedTreeNode)).call(this, props));

    _this.state = context.store.storeState;
    return _this;
  }

  (0, _createClass3.default)(ConnectedTreeNode, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !!nextState.expandedPaths[nextProps.path] !== !!this.state.expandedPaths[this.props.path] || nextProps.data !== this.props.data || nextProps.name !== this.props.name;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(path) {
      this.context.store.storeState = reducer(this.context.store.storeState, {
        type: 'TOGGLE_EXPAND',
        path: path
      });
      this.setState(this.context.store.storeState);
    }
  }, {
    key: 'renderChildNodes',
    value: function renderChildNodes(parentData, parentPath) {
      var dataIterator = this.props.dataIterator;
      var depth = this.props.depth;
      var nodeRenderer = this.props.nodeRenderer;


      var childNodes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dataIterator(parentData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref2 = _step.value;
          var name = _ref2.name,
              data = _ref2.data,
              props = (0, _objectWithoutProperties3.default)(_ref2, ['name', 'data']);

          var key = name;
          var path = parentPath + '.' + key;
          childNodes.push(_react2.default.createElement(ConnectedTreeNode, (0, _extends3.default)({
            name: name,
            data: data,
            depth: depth + 1,
            path: path,
            key: key,
            dataIterator: dataIterator,
            nodeRenderer: nodeRenderer
          }, props)) // props for nodeRenderer
          );
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return childNodes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          dataIterator = _props.dataIterator,
          path = _props.path,
          depth = _props.depth;


      var nodeHasChildNodes = (0, _pathUtils.hasChildNodes)(data, dataIterator);
      var expandedPaths = this.state.expandedPaths;

      var expanded = !!expandedPaths[path];

      var nodeRenderer = this.props.nodeRenderer;


      return _react2.default.createElement(
        _TreeNode2.default,
        (0, _extends3.default)({
          expanded: expanded,
          onClick: nodeHasChildNodes ? this.handleClick.bind(this, path) : function () {}
          // show arrow anyway even if not expanded and not rendering children
          , shouldShowArrow: nodeHasChildNodes
          // show placeholder only for non root nodes
          , shouldShowPlaceholder: depth > 0
          // Render a node from name and data (or possibly other props like isNonenumerable)
          , nodeRenderer: nodeRenderer
        }, this.props),
        // only render if the node is expanded
        expanded ? this.renderChildNodes(data, path) : undefined
      );
    }
  }]);
  return ConnectedTreeNode;
}(_react.Component);

ConnectedTreeNode.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,
  dataIterator: _propTypes2.default.func,

  depth: _propTypes2.default.number,
  expanded: _propTypes2.default.bool,

  nodeRenderer: _propTypes2.default.func
};

ConnectedTreeNode.contextTypes = {
  store: _propTypes2.default.any
};

var TreeView = function (_Component2) {
  (0, _inherits3.default)(TreeView, _Component2);

  function TreeView(props) {
    (0, _classCallCheck3.default)(this, TreeView);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || Object.getPrototypeOf(TreeView)).call(this, props));

    _this2.store = {
      storeState: {
        expandedPaths: (0, _pathUtils.getExpandedPaths)(props.data, props.dataIterator, props.expandPaths, props.expandLevel)
      }
    };
    return _this2;
  }

  (0, _createClass3.default)(TreeView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.store = {
        storeState: {
          expandedPaths: (0, _pathUtils.getExpandedPaths)(nextProps.data, nextProps.dataIterator, nextProps.expandPaths, nextProps.expandLevel, this.store.storeState.expandedPaths)
        }
      };
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        store: this.store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          data = _props2.data,
          dataIterator = _props2.dataIterator;
      var nodeRenderer = this.props.nodeRenderer;


      var rootPath = _pathUtils.DEFAULT_ROOT_PATH;

      return _react2.default.createElement(ConnectedTreeNode, {
        name: name,
        data: data,
        dataIterator: dataIterator,
        depth: 0,
        path: rootPath,
        nodeRenderer: nodeRenderer
      });
    }
  }]);
  return TreeView;
}(_react.Component);

TreeView.defaultProps = {
  expandLevel: 0,
  expandPaths: []
};
TreeView.childContextTypes = {
  store: _propTypes2.default.any
};


TreeView.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.any,
  dataIterator: _propTypes2.default.func,

  nodeRenderer: _propTypes2.default.func
};

TreeView.defaultProps = {
  name: undefined
};

exports.default = TreeView;

/***/ }),

/***/ "./node_modules/react-inspector/lib/tree-view/pathUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-inspector/lib/tree-view/pathUtils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasChildNodes = hasChildNodes;
var DEFAULT_ROOT_PATH = exports.DEFAULT_ROOT_PATH = '$';

var WILDCARD = '*';

function hasChildNodes(data, dataIterator) {
  return !dataIterator(data).next().done;
}

var wildcardPathsFromLevel = exports.wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
  // i is depth
  return Array.from({ length: level }, function (_, i) {
    return [DEFAULT_ROOT_PATH].concat(Array.from({ length: i }, function () {
      return '*';
    })).join('.');
  });
};

var getExpandedPaths = exports.getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel) {
  var initialState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
    return typeof path === 'string';
  }); // could be undefined

  var expandedPaths = [];
  wildcardPaths.forEach(function (wildcardPath) {
    var keyPaths = wildcardPath.split('.');
    var populatePaths = function populatePaths(curData, curPath, depth) {
      if (depth === keyPaths.length) {
        expandedPaths.push(curPath);
        return;
      }
      var key = keyPaths[depth];
      if (depth === 0) {
        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
        }
      } else {
        if (key === WILDCARD) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref2 = _step.value;
              var name = _ref2.name,
                  _data = _ref2.data;

              if (hasChildNodes(_data, dataIterator)) {
                populatePaths(_data, curPath + '.' + name, depth + 1);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          var value = curData[key];
          if (hasChildNodes(value, dataIterator)) {
            populatePaths(value, curPath + '.' + key, depth + 1);
          }
        }
      }
    };

    populatePaths(data, '', 0);
  });

  return expandedPaths.reduce(function (obj, path) {
    obj[path] = true;
    return obj;
  }, initialState);
};

/***/ })

}]);
//# sourceMappingURL=1.js.map