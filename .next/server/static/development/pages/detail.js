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
    as: "/Abc_News",
    href: "/Abc_News"
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

/***/ "./data/Abc_News.json":
/*!****************************!*\
  !*** ./data/Abc_News.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"abc-news","name":"ABC News"},"author":"The Associated Press","title":"Life is slowly settling down in Alaska after major quake","description":"Life is slowly settling down in Alaska following a powerful earthquake that rattled buildings, disrupted power and caused heavy damage to the only highway that goes north of Anchorage","url":"https://abcnews.go.com/Technology/wireStory/life-slowly-settling-alaska-major-quake-59553616","urlToImage":"https://s.abcnews.com/images/US/WireAP_387b1d62dd2a4f73aaddeb2162aa2e99_16x9_992.jpg","publishedAt":"2018-12-02T04:25:00Z","content":"Life is slowly settling down in Alaska following a powerful earthquake that rattled buildings, disrupted power and caused heavy damage to the only highway that goes north of Anchorage. Still, hundreds of aftershocks frayed nerves Saturday as people worried ab… [+3170 chars]"},{"source":{"id":"abc-news","name":"ABC News"},"author":"ABC News","title":"WATCH: Defense Secretary quotes Nike as saying that when the president asks you to serve 'Just Do It’","description":"Defense Secretary James Mattis said he accepted the job under President Trump because of his love for troops and the U.S. Constitution.","url":"https://abcnews.go.com/US/video/defense-secretary-quotes-nike-president-asks-serve-59550914","urlToImage":"https://s.abcnews.com/images/US/181201_abcnl_defense_secretary_hpMain_16x9_992.jpg","publishedAt":"2018-12-02T04:31:09Z","content":"Now Playing: Defense Secretary quotes Nike over president's request to serve Now Playing: Remembering the 41st president in Houston Now Playing: President Trump's comments on the passing of George H.W. Bush Now Playing: A look back at the Bush presidencies No… [+1134 chars]"},{"source":{"id":"abc-news","name":"ABC News"},"author":"The Associated Press","title":"Leftist leader takes reins in Mexico vowing to help poor","description":"Leftist politician Andres Manuel Lopez Obrador has assumed Mexico's presidency promising to profoundly transform Latin America's second-biggest economy and to lead a government free of corruption","url":"https://abcnews.go.com/International/wireStory/leftist-leader-takes-reins-mexico-vowing-poor-59554195","urlToImage":"https://s.abcnews.com/images/International/WireAP_34204fe4ae6a4897bf02a9dca5987d29_16x9_992.jpg","publishedAt":"2018-12-02T05:10:18Z","content":"Leftist politician Andres Manuel Lopez Obrador assumed Mexico 's presidency with a promise to profoundly transform Latin America's second-biggest economy and to lead a government free of corruption. Seemingly tireless at age 65, Lopez Obrador breezed through … [+5491 chars]"}];

/***/ }),

/***/ "./data/time.json":
/*!************************!*\
  !*** ./data/time.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"time","name":"Time"},"author":"JONATHAN LEMIRE / AP","title":"'Over My Dead Body.' Rudy Giuliani Says Robert Mueller Will Never Interview President Trump","description":"Rudy Giuliani, President Donald Trump's attorney, is ruling out the possibility of an interview with special counsel Robert Mueller.","url":"http://time.com/5480972/rudy-giuliani-mueller-trump-interview/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/rudy-giuliani-trump-mueller-interview.jpg?quality=85","publishedAt":"2018-12-16T15:39:15Z","content":"(WASHINGTON) — With a number of probes moving closer to the Oval Office, President Donald Trump and his attorney unleased a fresh series of attacks Sunday on the investigators, questioning their integrity while categorically ruling out the possibility of a pr… [+6534 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Colin Kroll, Co-Founder of Vine and HQ Trivia, Found Dead","description":"Colin Kroll, the 35-year-old co-founder of Vine and HQ Trivia, has been found dead in his Manhattan apartment of an apparent overdose.","url":"http://time.com/5481002/colin-kroll-vine-hq-trivia-found-dead/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/colin-kroll-found-dead-hq-vine.jpg?quality=85","publishedAt":"2018-12-16T17:21:21Z","content":"Colin Kroll, the 35-year-old co-founder of Vine and HQ Trivia, has been found dead in his Manhattan apartment of an apparent overdose. Police told TIME Kroll was pronounced dead at 12:18 a.m Sunday morning. A police spokesperson did not know what kind of drug… [+1660 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"President Trump Says He Will Review Former Green Beret's Murder Case","description":"President Donald Trump said Sunday's that he will be \"reviewing\" the case of a former U.S. Army commando being charged with murder.","url":"http://time.com/5481044/trump-army-commando-murder-case/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/trump-army-commando-golsteyn.jpg?quality=85","publishedAt":"2018-12-16T19:19:31Z","content":"(WASHINGTON) — President Donald Trump said Sunday’s that he will be “reviewing” the case of a former U.S. Army commando being charged with murder, raising questions about the possibility he could jeopardize the ongoing military legal proceedings. Trump tweete… [+1421 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"},{"source":{"id":"time","name":"Time"},"author":"Patricia Hurtado & Shahien Nasiripour / Bloomberg","title":"President Trump Is Said to Have Been in the Room During Hush-Money Meeting","description":"An individual said Donald Trump was present when Michael Cohen and David Pecker agreed to to kill unflattering news stories","url":"http://time.com/5479678/donald-trump-hush-money-national-enquirer/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1071818210.jpg?quality=85","publishedAt":"2018-12-14T04:16:24Z","content":"Federal prosecutors said this week that at least one unidentified member of Donald Trump’s campaign joined his lawyer Michael Cohen and the publisher of the tabloid National Enquirer, David Pecker, in a 2015 scheme to kill unflattering news stories about the … [+2704 chars]"},{"source":{"id":"time","name":"Time"},"author":"ERIC TUCKER / AP","title":"Mueller Filings: FBI Not to Blame For False Statements Made by Michael Flynn","description":"The special counsel's office says the FBI is not to be blamed for former national security adviser Michael Flynn's false statements.","url":"http://time.com/5480452/fbi-not-blame-michael-flynn-false-statements/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/michael-flynn-fbi-false-statements.jpg?quality=85","publishedAt":"2018-12-14T20:58:56Z","content":"(WASHINGTON) — The special counsel’s office is pushing back at the suggestion that the FBI acted improperly in its interview of former national security adviser Michael Flynn. Flynn’s lawyers said in a sentencing memorandum this week that Flynn was not warned… [+421 chars]"},{"source":{"id":"time","name":"Time"},"author":"RICARDO ALONSO-ZALDIVAR / AP","title":"Federal Judge Rules Obama's Affordable Care Act Is Unconstitutional","description":"A conservative federal judge in Texas has ruled the Affordable Care Act \"invalid\" on the eve of the sign-up deadline for next year.","url":"http://time.com/5480743/judge-texas-obamacare-unconstitutional/","urlToImage":"https://timedotcom.files.wordpress.com/2018/10/181101-open-enrollment-healthcare-affordable-care-act-obamacare.jpg?quality=85","publishedAt":"2018-12-15T14:01:11Z","content":"WASHINGTON — A conservative federal judge in Texas has ruled the Affordable Care Act “invalid” on the eve of the sign-up deadline for next year. But with appeals certain, even the Trump White House said the law will remain in place for now. In a 55-page opini… [+5353 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Justice Ginsburg Hails Immigrants as the 'Vanguard' to Fight Discrimination in Speech to New Citizens","description":"“We are a nation made strong by people like you,\" Ginsburg said","url":"http://time.com/5480773/justice-ginsburg-hails-immigrants-vanguard/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ginsburg-archives.jpg?quality=85","publishedAt":"2018-12-15T16:03:48Z","content":"Supreme Court Justice Ruth Bader Ginsburg used her first public address since breaking three ribs last month to praise immigrants, saying that they play a “vital part” in cleansing the “stains” of discrimination from the country. Ginsburg spoke at a naturaliz… [+1845 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"All California Wildfire Evacuation Orders Have Been Lifted","description":"All evacuation orders have been lifted more than a month after a devastating wildfire that wiped out the Northern California town Paradise.","url":"http://time.com/5480842/evacuation-orders-lifted-wildfires-california/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/paradise-wildfire-evacuation-lifted.jpg?quality=85","publishedAt":"2018-12-15T19:02:01Z","content":"(PARADISE, Calif.) — All evacuation orders have been lifted in Paradise more than a month after a devastating wildfire that wiped out the Northern California town. The fire that broke out Nov. 8 killed at least 86 people and destroyed 14,000 homes in Paradise… [+536 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Here Are All the Controversies That Led to Interior Secretary Ryan Zinke's Resignation","description":"Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected.","url":"http://time.com/5480865/controversies-interior-secretary-ryan-zinke-resignation/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ryan-zinke-resign.jpg?quality=85","publishedAt":"2018-12-15T21:45:21Z","content":"President Donald Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected. Even though controversy has plagued many current and former members of the Trump administration, Zinke stand… [+5276 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senates Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"}];

/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_time_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/time.json */ "./data/time.json");
var _data_time_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/time.json */ "./data/time.json", 1);
/* harmony import */ var _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Abc_News.json */ "./data/Abc_News.json");
var _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/Abc_News.json */ "./data/Abc_News.json", 1);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Post =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Post, _React$Component);

  _createClass(Post, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var _context$query, title, source, datas, single;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context$query = context.query, title = _context$query.title, source = _context$query.source;
                console.log(source);
                if (source == 'Abc_News') datas = _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5__;
                single = _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5__.filter(function (item) {
                  return item.title == title;
                });
                return _context.abrupt("return", {});

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props));
    console.log(props.url.query, 'props');
    var _props$url$query = props.url.query,
        title = _props$url$query.title,
        source = _props$url$query.source;
    var datas;
    if (source == 'Abc_News') datas = _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5__;
    _this.state = {
      single: datas
    };
    console.log('from constructor', _this.state.single);
    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.url.query, 'props');
      var _this$props$url$query = this.props.url.query,
          title = _this$props$url$query.title,
          source = _this$props$url$query.source;
      var datas;
      if (source == 'Abc_News') datas = _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_5__;
      this.setState({
        single: datas
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, this.state.single[0].title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, this.state.single[0].description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        key: this.state.single[0].source.id
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "card-title"
      }, this.state.single[0].title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "card-text"
      }, this.state.single[0].description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "card-content"
      }, this.state.single[0].content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "".concat(this.state.single[0].url),
        target: "_blank"
      }, "link to the article"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "card-author"
      }, "Author: ", this.state.single[0].author)))));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/detail.js */"./pages/detail.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=detail.js.map