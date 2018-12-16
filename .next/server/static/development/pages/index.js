module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 1
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "containerr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-light bg-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navbar-brand",
    as: "/",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/21/21601.svg",
    width: "60",
    height: "60",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-black-list nav-link disabled hover-main-links",
    as: "/news/naw",
    href: "/AbcNews/naw"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "ABC News"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-black-list nav-link disabled hover-main-links",
    to: "/BBC_News"
  }, "BBC News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-black-list nav-link disabled hover-main-links",
    to: "/CBC_News"
  }, "CBC News")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav justify-content-center bg-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list home-button",
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/Money_News"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "Money")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/Sport"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "Sport")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/NBC_News"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "NBC News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/Neewsweek"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "Newsweek")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/Policy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "nav-link disabled nav-white-list",
    to: "/UsaToday"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, "USA Today")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data/time.json":
/*!************************!*\
  !*** ./data/time.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"},{"source":{"id":"time","name":"Time"},"author":"Patricia Hurtado & Shahien Nasiripour / Bloomberg","title":"President Trump Is Said to Have Been in the Room During Hush-Money Meeting","description":"An individual said Donald Trump was present when Michael Cohen and David Pecker agreed to to kill unflattering news stories","url":"http://time.com/5479678/donald-trump-hush-money-national-enquirer/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1071818210.jpg?quality=85","publishedAt":"2018-12-14T04:16:24Z","content":"Federal prosecutors said this week that at least one unidentified member of Donald Trump’s campaign joined his lawyer Michael Cohen and the publisher of the tabloid National Enquirer, David Pecker, in a 2015 scheme to kill unflattering news stories about the … [+2704 chars]"},{"source":{"id":"time","name":"Time"},"author":"ERIC TUCKER / AP","title":"Mueller Filings: FBI Not to Blame For False Statements Made by Michael Flynn","description":"The special counsel's office says the FBI is not to be blamed for former national security adviser Michael Flynn's false statements.","url":"http://time.com/5480452/fbi-not-blame-michael-flynn-false-statements/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/michael-flynn-fbi-false-statements.jpg?quality=85","publishedAt":"2018-12-14T20:58:56Z","content":"(WASHINGTON) — The special counsel’s office is pushing back at the suggestion that the FBI acted improperly in its interview of former national security adviser Michael Flynn. Flynn’s lawyers said in a sentencing memorandum this week that Flynn was not warned… [+421 chars]"},{"source":{"id":"time","name":"Time"},"author":"RICARDO ALONSO-ZALDIVAR / AP","title":"Federal Judge Rules Obama's Affordable Care Act Is Unconstitutional","description":"A conservative federal judge in Texas has ruled the Affordable Care Act \"invalid\" on the eve of the sign-up deadline for next year.","url":"http://time.com/5480743/judge-texas-obamacare-unconstitutional/","urlToImage":"https://timedotcom.files.wordpress.com/2018/10/181101-open-enrollment-healthcare-affordable-care-act-obamacare.jpg?quality=85","publishedAt":"2018-12-15T14:01:11Z","content":"WASHINGTON — A conservative federal judge in Texas has ruled the Affordable Care Act “invalid” on the eve of the sign-up deadline for next year. But with appeals certain, even the Trump White House said the law will remain in place for now. In a 55-page opini… [+5353 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Justice Ginsburg Hails Immigrants as the 'Vanguard' to Fight Discrimination in Speech to New Citizens","description":"“We are a nation made strong by people like you,\" Ginsburg said","url":"http://time.com/5480773/justice-ginsburg-hails-immigrants-vanguard/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ginsburg-archives.jpg?quality=85","publishedAt":"2018-12-15T16:03:48Z","content":"Supreme Court Justice Ruth Bader Ginsburg used her first public address since breaking three ribs last month to praise immigrants, saying that they play a “vital part” in cleansing the “stains” of discrimination from the country. Ginsburg spoke at a naturaliz… [+1845 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"All California Wildfire Evacuation Orders Have Been Lifted","description":"All evacuation orders have been lifted more than a month after a devastating wildfire that wiped out the Northern California town Paradise.","url":"http://time.com/5480842/evacuation-orders-lifted-wildfires-california/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/paradise-wildfire-evacuation-lifted.jpg?quality=85","publishedAt":"2018-12-15T19:02:01Z","content":"(PARADISE, Calif.) — All evacuation orders have been lifted in Paradise more than a month after a devastating wildfire that wiped out the Northern California town. The fire that broke out Nov. 8 killed at least 86 people and destroyed 14,000 homes in Paradise… [+536 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Here Are All the Controversies That Led to Interior Secretary Ryan Zinke's Resignation","description":"Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected.","url":"http://time.com/5480865/controversies-interior-secretary-ryan-zinke-resignation/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ryan-zinke-resign.jpg?quality=85","publishedAt":"2018-12-15T21:45:21Z","content":"President Donald Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected. Even though controversy has plagued many current and former members of the Trump administration, Zinke stand… [+5276 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senates Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_time_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/time.json */ "./data/time.json");
var _data_time_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/time.json */ "./data/time.json", 1);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "News Api"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, _data_time_json__WEBPACK_IMPORTED_MODULE_4__.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: index,
          as: "/news/".concat(item.title),
          href: "/detail?title=".concat(item.title)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, item.title)));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map