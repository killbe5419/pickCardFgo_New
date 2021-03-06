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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title {\n    color: white;\n}\n\nbody {\n    padding: 50px;\n    font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n    background-color: black;\n}\n\nh1 {\n    color: azure;\n    font-size: 40px;\n    font-weight: 900;\n}\n\n#react-dom button {\n    display: inline-block;\n    padding: .3em .8em;\n    border: 1px solid #446d88;\n    background: #58a linear-gradient(#77a0bb,#58a);\n    border-radius: .2em;\n    box-shadow: 0 .05em .25em gray;\n    color: white;\n    text-shadow: 0 -.05em .05em #335166;\n    font-size: 125%;\n    line-height: 1.5;\n    margin-right: .5em;\n}\n\n#showStone {\n    display: inline-block;\n}\n\n#showStone * {\n    display: inline-block;\n}\n\n#showStone p {\n    font-size: 15px;\n    font-weight: 900;\n    color: azure;\n}\n\n.case {\n    display: inline-block;\n    margin: 10px;\n}\n\n.case p {\n    font-size: 15px;\n    font-weight: 900;\n}\n\n.calcResult {\n    font-size: 15px;\n    font-weight: 900;\n    color: azure;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scripts/checkLength.js":
/*!************************************!*\
  !*** ./src/scripts/checkLength.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkLength; });
function checkLength(str){
    const change = (str,key,limit) => {
        let out = [];
        out.push(str);
        const a = str.split(key);
        for(let i=0;i<a.length -1; i++) {
            let arr = out[i].toString().split(key);
            arr.pop();
            out.push(arr.join(key));
        }
        let select;
        for(let i=0;i<out.length;i++) {
            const tmp = out[i];
            if(tmp.length < limit) {
                select = tmp;
                break;
            }
        }
        return select;
    }
    let out;
    if(str.indexOf("・") > -1 && str.indexOf("〔") > -1) {
        const tmp = change(str,"〔",10);
        out = change(tmp, "・", 10);
    }
    else if(str.indexOf("・") > -1 && str.indexOf("〔") === -1) {
        out = change(str,"・",10);
    }
    else if (str.indexOf("・") === -1 && str.indexOf("〔") > -1) {
        out = change(str,"〔",10);
    } else {
        out = str.split(str[10])[0];
    }
    return out;
}

/***/ }),

/***/ "./src/scripts/checkRare.js":
/*!**********************************!*\
  !*** ./src/scripts/checkRare.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkRare; });
function checkRare(num) {
    let output;
    if(num === 5) {
        output = { color: "orange" };
    }
    else if(num === 4) {
        output = { color: "purple" };
    } else {
        output = { color: "blue" };
    }
    return output;
}

/***/ }),

/***/ "./src/scripts/index.jsx":
/*!*******************************!*\
  !*** ./src/scripts/index.jsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/styles.css */ "./src/stylesheets/styles.css");
/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkRare_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkRare.js */ "./src/scripts/checkRare.js");
/* harmony import */ var _checkLength_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkLength.js */ "./src/scripts/checkLength.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PickOne_Case extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "case",
      style: this.props.input.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", Object(_checkLength_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.input.data.name), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.input.data.img,
      alt: this.props.input.alt
    }));
  }

}

class PickTen_Case extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const list = this.props.input.data.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "case",
      key: item.id,
      style: Object(_checkRare_js__WEBPACK_IMPORTED_MODULE_4__["default"])(item.rare)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_checkLength_js__WEBPACK_IMPORTED_MODULE_5__["default"])(item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.img,
      alt: item.name
    })));
    list.splice(5, 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      key: "br"
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pickTenCase"
    }, list);
  }

}

class Calculate_Case extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "calcResult"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Nobel: ", this.props.input.nobel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Numbers of picks: ", this.props.input.data.pickNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Money: ", this.props.input.data.moneyType, " ", this.props.input.data.money), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Percentage: ", (this.props.input.data.p * 100).toFixed(3), "% "));
  }

}

class Case extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.method === "pickOne") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickOne_Case, {
        input: this.props.input
      });
    }

    if (this.props.method === "pickTen") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickTen_Case, {
        input: this.props.input
      });
    }

    if (this.props.method === "calculate") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Calculate_Case, {
        input: this.props.input
      });
    } else {
      return null;
    }
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleUseStone", () => {
      if (!this.state.stoneUse) {
        this.setState({
          stoneUse: true,
          stoneUrl: "../images/holystone.jpg"
        });
      } else {
        this.setState({
          stoneUse: false,
          stoneUrl: "../images/holystoneNo.jpg"
        });
      }
    });

    _defineProperty(this, "checkStone", (num, method) => {
      if (method === "pickOne") {
        if (num - 3 < 0) {
          const answer = window.confirm("You don't have enough holystone for picking, " + "Do you want to spend ￥9800 charging 167 holystones?");

          if (answer) {
            alert("processing...");
            const data = {
              params: {
                method: "charge",
                fromClient: true,
                money: 9800,
                moneyType: "JPY",
                holystone: 167
              }
            };
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/charge", data).then(res => {
              if (res.data.correct) {
                console.log(res.data);
                let tmp = this.state.stone;
                tmp += 167;
                this.setState({
                  stone: tmp
                });
                alert("Thank you for charging! Now you have " + this.state.stone + " holystones for picking");
              } else {
                alert("something error happened while charging, please try again");
              }
            });
            return false;
          } else {
            alert("Sorry, You can't pick cards because of the lack of holystone");
            return false;
          }
        } else {
          return true;
        }
      }

      if (method === "pickTen") {
        if (num - 30 < 0) {
          const answer = window.confirm("You don't have enough holystone for picking, " + "Do you want to spend ￥9800 charging 167 holystones?");

          if (answer) {
            alert("processing...");
            const data = {
              params: {
                method: "charge",
                fromClient: true,
                money: 9800,
                moneyType: "JPY",
                holystone: 167
              }
            };
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/charge", data).then(res => {
              if (res.data.correct) {
                let tmp = this.state.stone;
                tmp += 167;
                this.setState({
                  stone: tmp
                });
                alert("Thank you for charging! Now you have " + this.state.stone + " holystones for picking");
              } else {
                alert("something error happened while charging, please try again");
              }
            });
            return false;
          } else {
            alert("Sorry, You can't pick cards because of the lack of holystone");
            return false;
          }
        } else {
          return true;
        }
      }
    });

    _defineProperty(this, "handlePickOne", () => {
      if (this.state.stoneUse) {
        const haveStone = this.checkStone(this.state.stone, "pickOne");
        if (!haveStone) return;
      }

      const data = {
        params: {
          method: "pickOne",
          fromClient: true
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/pickOne", data).then(res => {
        if (res.data.rare === 5 && res.data.type === "servant") {
          alert("Congratulations! You got a SSR servant => " + res.data.name);
        }

        const rare = Object(_checkRare_js__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data.rare);
        this.setState({
          input: {
            method: "pickOne",
            style: rare,
            data: res.data
          }
        });

        if (this.state.stoneUse) {
          let tmp = this.state.stone;
          tmp -= 3;
          this.setState({
            stone: tmp
          });
        }
      }).catch(err => {
        console.error(err);
      });
    });

    _defineProperty(this, "handlePickTen", () => {
      if (this.state.stoneUse) {
        const haveStone = this.checkStone(this.state.stone, "pickTen");
        if (!haveStone) return;
      }

      const data = {
        params: {
          method: "pickTen",
          fromClient: true
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/pickTen", data).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].type === "servant" && res.data[i].rare === 5) {
            alert("Congratulations! You got a SSR servant => " + res.data[i].name);
          }
        }

        this.setState({
          input: {
            method: "pickTen",
            data: res.data
          }
        });

        if (this.state.stoneUse) {
          let tmp = this.state.stone;
          tmp -= 30;
          this.setState({
            stone: tmp
          });
        }
      }).catch(err => {
        console.error(err);
      });
    });

    _defineProperty(this, "handleCalc", () => {
      const input = prompt("Nobel:?");
      const reg = /^([0]|[1-9][0-9]*)$/;

      if (!reg.test(input)) {
        alert("illegal input");
        return;
      }

      const nobel = Number(input);
      const data = {
        params: {
          method: "calculate",
          nobel: nobel,
          fromClient: true
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/calculate", data).then(res => {
        console.log(res.data);
        this.setState({
          input: {
            method: "calculate",
            nobel: nobel,
            data: res.data
          }
        });
      }).catch(err => console.error(err));
    });

    this.state = {
      stone: 167,
      stoneUse: false,
      stoneUrl: "../images/holystoneNo.jpg",
      stoneAlt: "a stone icon",
      input: {
        style: {
          display: "none"
        },
        alt: "waiting for image",
        method: "",
        data: {
          name: "",
          img: ""
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "title"
    }, "FGO Pick-card Simulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handlePickOne
    }, "Pick 1 card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handlePickTen
    }, "Pick 10 cards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleCalc
    }, "Calculate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "showStone"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.stoneUrl,
      alt: this.state.stoneAlt,
      onClick: this.handleUseStone
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", this.state.stone, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Case, {
      method: this.state.input.method,
      input: this.state.input
    }));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("react-dom"));

/***/ }),

/***/ "./src/stylesheets/styles.css":
/*!************************************!*\
  !*** ./src/stylesheets/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=react.bundle.js.map