(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/backgroundColor.pcss":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/cssMixins/backgroundColor.pcss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-square-border-button--background-color-$selector {\\n  a&,\\n  button& {\\n    &, &:not(:hover) {\\n      @if $color != false {\\n        background-color: $color;\\n      }\\n    }\\n    &::before,\\n    &::after {\\n      background-color: $color;\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./squareBorderButton/cssMixins/backgroundColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/borderColor.pcss":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/cssMixins/borderColor.pcss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-square-border-button--border-color-$selector {\\n  a&,\\n  button& {\\n    &, &:not(:hover) {\\n      @if $color != false {\\n        border-color: $color;\\n        border-style: solid;\\n      }\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./squareBorderButton/cssMixins/borderColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/borderWidth.pcss":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/cssMixins/borderWidth.pcss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-square-border-button--border-width-$selector {\\n  a&,\\n  button& {\\n    &, &:not(:hover) {\\n      @if $width != false {\\n        border-width: $(width)px;\\n        border-style: solid;\\n      }\\n    }\\n    &::before {\\n      top: calc($(width)px * 2);\\n      left: -$(width)px;\\n      width: calc(100% + $(width)px * 2);\\n      height: calc(100% - $(width)px * 4);\\n    }\\n    &::after {\\n      top: -$(width)px;\\n      left: calc($(width)px * 2);\\n      width: calc(100% - $(width)px * 4);\\n      height: calc(100% + $(width)px * 2);\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./squareBorderButton/cssMixins/borderWidth.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/titleColor.pcss":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/cssMixins/titleColor.pcss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-square-border-button--title-color-$selector {\\n  a&,\\n  button& {\\n    &, &:not(:hover) {\\n      @if $color != false {\\n        color: $color;\\n      }\\n    }\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./squareBorderButton/cssMixins/titleColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/editor.css":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/editor.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-element-boilerplate {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./squareBorderButton/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./squareBorderButton/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./squareBorderButton/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-square-border-button--align-left {\\n  text-align: left;\\n}\\n.vce-square-border-button--align-right {\\n  text-align: right;\\n}\\n.vce-square-border-button--align-center {\\n  text-align: center;\\n}\\n\\n.vce-square-border-button {\\n  padding: 15px 43px;\\n  position: relative;\\n}\\n.vce-square-border-button span {\\n  z-index: 4;\\n  position: relative;\\n}\\n\\n.vce-square-border-button::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  transition: all 0.5s ease-in-out;\\n  transform: scaleY(1);\\n}\\n.vce-square-border-button:hover::before {\\n  transform: scaleY(0);\\n}\\n\\n.vce-square-border-button::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  transition: all 0.5s ease-in-out;\\n  transform: scaleX(1);\\n}\\n.vce-square-border-button:hover::after {\\n  transform: scaleX(0);\\n}\"\n\n//# sourceURL=webpack:///./squareBorderButton/styles.css?./node_modules/raw-loader");

/***/ }),

/***/ "./squareBorderButton/component.js":
/*!*****************************************!*\
  !*** ./squareBorderButton/component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SquareBorderButton; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar vcvAPI = Object(vc_cake__WEBPACK_IMPORTED_MODULE_7__[\"getService\"])('api');\n\nvar SquareBorderButton = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SquareBorderButton, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(SquareBorderButton);\n\n  function SquareBorderButton() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SquareBorderButton);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SquareBorderButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var buttonText = atts.buttonText,\n          buttonUrl = atts.buttonUrl,\n          alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId; // destructuring assignment for attributes from settings.json with access public\n\n      var containerClasses = 'vce-square-border-button-container';\n      var wrapperClasses = 'vce-square-border-button-wrapper vce';\n      var classes = 'vce-square-border-button';\n      var customProps = {};\n      var CustomTag = 'button';\n\n      if (buttonUrl && buttonUrl.url) {\n        CustomTag = 'a';\n        var url = buttonUrl.url,\n            title = buttonUrl.title,\n            targetBlank = buttonUrl.targetBlank,\n            relNofollow = buttonUrl.relNofollow;\n        customProps = {\n          href: url,\n          title: title,\n          target: targetBlank ? '_blank' : undefined,\n          rel: relNofollow ? 'nofollow' : undefined\n        };\n      }\n\n      var mixinData = this.getMixinData('titleColor');\n\n      if (mixinData) {\n        classes += \" vce-square-border-button--title-color-\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('backgroundColor');\n\n      if (mixinData) {\n        classes += \" vce-square-border-button--background-color-\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('borderColor');\n\n      if (mixinData) {\n        classes += \" vce-square-border-button--border-color-\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('borderWidth');\n\n      if (mixinData) {\n        classes += \" vce-square-border-button--border-width-\".concat(mixinData.selector);\n      }\n\n      if (alignment) {\n        containerClasses += \" vce-square-border-button--align-\".concat(alignment);\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        elementBoilerplateClasses = elementBoilerplateClasses.concat(' ' + customClass);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doMBB = this.applyDO('margin border background');\n      var doPA = this.applyDO('padding animation');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: containerClasses\n      }, editor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: wrapperClasses,\n        id: 'el-' + id\n      }, doMBB), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CustomTag, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: classes\n      }, customProps, doPA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"span\", null, buttonText))));\n    }\n  }]);\n\n  return SquareBorderButton;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./squareBorderButton/component.js?");

/***/ }),

/***/ "./squareBorderButton/index.js":
/*!*************************************!*\
  !*** ./squareBorderButton/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./squareBorderButton/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = Object(vc_cake__WEBPACK_IMPORTED_MODULE_0__[\"getService\"])('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./squareBorderButton/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./squareBorderButton/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./squareBorderButton/editor.css\"),\n  mixins: {\n    titleColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/titleColor.pcss */ \"./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/titleColor.pcss\")\n    },\n    backgroundColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/backgroundColor.pcss */ \"./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/backgroundColor.pcss\")\n    },\n    borderColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/borderColor.pcss */ \"./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/borderColor.pcss\")\n    },\n    borderWidth: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/borderWidth.pcss */ \"./node_modules/raw-loader/index.js!./squareBorderButton/cssMixins/borderWidth.pcss\")\n    }\n  }\n});\n\n//# sourceURL=webpack:///./squareBorderButton/index.js?");

/***/ }),

/***/ "./squareBorderButton/settings.json":
/*!******************************************!*\
  !*** ./squareBorderButton/settings.json ***!
  \******************************************/
/*! exports provided: buttonText, buttonUrl, titleColor, backgroundColor, borderColor, borderWidth, alignment, editFormTab1, metaEditFormTabs, relatedTo, customClass, metaCustomId, tag, designOptions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"buttonText\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"READ MORE\\\",\\\"options\\\":{\\\"label\\\":\\\"Button text\\\",\\\"dynamicField\\\":true}},\\\"buttonUrl\\\":{\\\"type\\\":\\\"url\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":{\\\"url\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"targetBlank\\\":false,\\\"relNofollow\\\":false},\\\"options\\\":{\\\"label\\\":\\\"Link selection\\\",\\\"dynamicField\\\":true}},\\\"titleColor\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"#383A3E\\\",\\\"options\\\":{\\\"label\\\":\\\"Title color\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"titleColor\\\",\\\"property\\\":\\\"color\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"backgroundColor\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"#FFFFFF\\\",\\\"options\\\":{\\\"label\\\":\\\"Background color\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"backgroundColor\\\",\\\"property\\\":\\\"color\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"borderColor\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"#383A3E\\\",\\\"options\\\":{\\\"label\\\":\\\"Border color\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"borderColor\\\",\\\"property\\\":\\\"color\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"borderWidth\\\":{\\\"type\\\":\\\"number\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"2\\\",\\\"options\\\":{\\\"label\\\":\\\"Border width\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"borderWidth\\\",\\\"property\\\":\\\"width\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"alignment\\\":{\\\"type\\\":\\\"buttonGroup\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"left\\\",\\\"options\\\":{\\\"label\\\":\\\"Alignment\\\",\\\"values\\\":[{\\\"label\\\":\\\"Left\\\",\\\"value\\\":\\\"left\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-left\\\"},{\\\"label\\\":\\\"Center\\\",\\\"value\\\":\\\"center\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-center\\\"},{\\\"label\\\":\\\"Right\\\",\\\"value\\\":\\\"right\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-right\\\"}]}},\\\"editFormTab1\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"buttonText\\\",\\\"buttonUrl\\\",\\\"titleColor\\\",\\\"backgroundColor\\\",\\\"borderColor\\\",\\\"borderWidth\\\",\\\"alignment\\\",\\\"metaCustomId\\\",\\\"customClass\\\"],\\\"options\\\":{\\\"label\\\":\\\"General\\\"}},\\\"metaEditFormTabs\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"editFormTab1\\\",\\\"designOptions\\\"]},\\\"relatedTo\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"General\\\"]},\\\"customClass\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Extra class name\\\",\\\"description\\\":\\\"Add an extra class name to the element and refer to it from Custom CSS option.\\\"}},\\\"metaCustomId\\\":{\\\"type\\\":\\\"customId\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Element ID\\\",\\\"description\\\":\\\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\\\"}},\\\"tag\\\":{\\\"access\\\":\\\"protected\\\",\\\"type\\\":\\\"string\\\",\\\"value\\\":\\\"squareBorderButton\\\"},\\\"designOptions\\\":{\\\"type\\\":\\\"designOptions\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":{},\\\"options\\\":{\\\"label\\\":\\\"Design Options\\\"}}}\");\n\n//# sourceURL=webpack:///./squareBorderButton/settings.json?");

/***/ })

},[['./squareBorderButton/index.js']]]);