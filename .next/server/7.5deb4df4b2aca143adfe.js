exports.ids = [7];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var console_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var console_feed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(console_feed__WEBPACK_IMPORTED_MODULE_2__);
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




var InspectorStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Inspector__InspectorStyle",
  componentId: "u3lh8t-0"
})(["height:calc(100% - 30px);width:100%;color:#aaa;border:1px solid #585858;background-color:#373737;border-radius:2px;position:relative;.console-input{border:0;background-color:#373737;color:", ";margin-left:7px;width:90%;font-size:13px;height:30px;font-family:Menlo,monospace;}.console-input:focus{outline:none;}.console-input-wrapper{position:absolute;width:100%;border-top:1px solid #585858;background-color:#373737;bottom:0;}.console-feed{overflow:auto;width:100%;}.cursor{margin-left:12px;vertical-align:middle;color:", ";}.inner{background:#242424;position:relative;width:100%;overflow:scroll;height:calc(100% - 30px);}[data-method = log]{line-height:normal;margin:0;padding:6px 3px 4px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
var ConsoleTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Inspector__ConsoleTitle",
  componentId: "u3lh8t-1"
})(["color:", ";margin-left:2px;font-family:'roboto condensed bold';"], function (props) {
  return props.theme.lightgrey;
});
var ClearButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConsoleTitle, null, "CONSOLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearButton, {
        onClick: this.clearLogs
      }, "CLEAR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorStyle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "console-feed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(console_feed__WEBPACK_IMPORTED_MODULE_2__["Console"], {
        logs: logs,
        variant: "dark",
        filter: this.state.filter
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          float: "left",
          clear: "both"
        },
        ref: function ref(el) {
          _this3.messagesEnd = el;
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "console-input-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cursor"
      }, ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "console-input",
        type: "text",
        value: this.state.value,
        onKeyDown: this.keyPress,
        onChange: this.handleChange
      }))));
    }
  }]);

  return Inspector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ })

};;