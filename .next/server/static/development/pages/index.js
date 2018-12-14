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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Suspect in Strasbourg Christmas Market Attack Killed in Police Shootout, Authorities Confirm","description":"Three people were killed in a shooting near a popular Christmas market in Strasbourg, France, according to multiple reports.","url":"http://time.com/5477187/shooting-strasbourg-france/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/strasbourg-christmas-market.jpg?quality=85","publishedAt":"2018-12-11T21:02:56Z","content":"A man killed during a shootout in connection with Tuesday’s deadly Strasbourg Christmas market attack has been identified by Paris officials as the main suspect, according to the Associated Press. Charif Chekatt, 29, was shot by police after a gunman opened f… [+3283 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Former Trump Lawyer Michael Cohen Sentenced to 3 Years in Prison","description":"Michael Cohen, the former longtime personal lawyer of President Donald Trump, was sentenced to three years in prison on Wednesday.","url":"http://time.com/5477719/michael-cohen-sentenced-prison/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/michael-cohen-sentencing.jpg?quality=85","publishedAt":"2018-12-12T17:21:01Z","content":"Michael Cohen, the former longtime personal lawyer of President Donald Trump, was sentenced to three years in federal prison on Wednesday, taking a parting shot at the President after implicating him in hush money payments to two women over alleged affairs wi… [+3343 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Mahita Gajanan","title":"Teen Dead After Shootout With Police at Indiana Middle School","description":"A teenage suspect has died after a shooting at Dennis Intermediate School in Richmond, Ind., police said","url":"http://time.com/5478690/dennis-intermediate-school-shooting-indiana/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T15:02:05Z","content":"A teenager exchanged gunfire with officers then killed himself after they intercepted him as he tried to enter an Indiana middle school, police said Thursday. Law enforcement and school officials were warned that an armed individual was approaching Dennis Int… [+964 chars]"},{"source":{"id":"time","name":"Time"},"author":"Polly Mosendz, Greg Farrell, Andrew Harris and Erik Larson / Bloomberg","title":"Maria Butina Admits She Worked as Russian Secret Agent to Infiltrate NRA","description":"Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors.","url":"http://time.com/5478974/russian-maria-butina-pleads-guilty/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/maria-butina-guilty-plea.jpg?quality=85","publishedAt":"2018-12-13T17:37:37Z","content":"(Bloomberg) — Maria Butina pleaded guilty to acting as an undeclared Russian agent in the U.S. and agreed to cooperate with prosecutors. Butina operated as a Kremlin agent as she befriended National Rifle Association leaders and influential conservatives, she… [+3973 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Votes for U.S. to Stop Supporting Yemen War and Blame Saudi Crown Prince for Khashoggi Death","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-vote-stop-supporting-saudi-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — Senators voted Thursday to recommend that the U.S. end its assistance to Saudi Arabia for the war in Yemen and put the blame for the death of journalist Jamal Khashoggi squarely on Saudi Crown Prince Mohammed bin Salman, in a direct challenge t… [+4992 chars]"},{"source":{"id":"time","name":"Time"},"author":"Katie Reilly","title":"Police Are Investigating Bomb Threats Sent to More Than a Dozen Cities Across U.S.","description":"\"We are aware of recent bomb threats made in cities around the country & remain in touch w/ our law enforcement partners,\" the ATF said.","url":"http://time.com/5479255/multiple-bomb-threats-reported/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-926719206-1.jpg?quality=85","publishedAt":"2018-12-13T20:45:03Z","content":"Authorities are investigating bomb threats sent electronically to businesses, universities and government buildings in more than a dozen cities around the country on Thursday. “We are aware of recent bomb threats made in cities around the country &amp; remain… [+1423 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jamie Ducharme","title":"Officials Pinpoint 1 Source of Contaminated Romaine, But Investigation Remains 'Active'","description":"Officials have traced part of the E. coli outbreak involving romaine lettuce back to Adam Brothers Farming in California.","url":"http://time.com/5479316/romaine-e-coli-source/","urlToImage":"https://timedotcom.files.wordpress.com/2018/04/romaine-lettuce.jpg?quality=85","publishedAt":"2018-12-13T22:02:40Z","content":"Investigators with the Food and Drug Administration and Centers for Disease Control and Prevention have found one probable source of the E. coli outbreak involving romaine lettuce, and said romaine from more growing regions is now considered safe to eat. A se… [+2092 chars]"},{"source":{"id":"time","name":"Time"},"author":"Suyin Haynes","title":"Transcript Reveals Jamal Khashoggi's Last Words at Saudi Consulate, Report Says","description":"The prominent journalist was murdered in Istanbul in October","url":"http://time.com/5475109/jamal-khashoggi-saudi-arabia-audio-last-words/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-1059672322.jpg?quality=85","publishedAt":"2018-12-10T04:56:07Z","content":"The final words of journalist Jamal Khashoggi were “I can’t breathe,” according to a translated transcript of an audio recording of his murder inside the Saudi Arabian embassy in Istanbul in October. A source familiar with the recording revealed the new detai… [+1645 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"About 150 Countries Unite on U.N. Migration Accord Despite Walkouts by U.S. and Others","description":"Top U.N. officials and government leaders from about 150 countries are uniting around an agreement on migration at a conference in Marrakech","url":"http://time.com/5475173/united-nations-migration-accord/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-1070877730.jpg?quality=85","publishedAt":"2018-12-10T08:01:12Z","content":"(MARRAKECH, Morocco) — Top U.N. officials and government leaders from about 150 countries are uniting around an agreement on migration, while finding themselves on the defensive about the non-binding deal amid criticism and a walkout from the United States an… [+625 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"The Jury That Convicted a White Nationalist for a Deadly Vehicle Attack Will Recommend His Sentence","description":"The jury that convicted a man of murder for driving his car into counterprotesters at a white nationalist rally will decide his punishment","url":"http://time.com/5475196/james-alex-fields-jury-punishment/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-832750990.jpg?quality=85","publishedAt":"2018-12-10T09:24:30Z","content":"(CHARLOTTESVILLE, Va.) — The same jury that convicted a man of first-degree murder for driving his car into counterprotesters at a 2017 white nationalist rally will now decide his punishment. The jury in the trial of James Alex Fields Jr. will reconvene Monda… [+555 chars]"},{"source":{"id":"time","name":"Time"},"author":"Alex Fitzpatrick","title":"A NASA Probe Launched in 1977 Just Entered Interstellar Space","description":"NASA's Voyager 2 probe has left our cosmic neighborhood and entered interstellar space, the agency said Monday.","url":"http://time.com/5475269/voyager-2-interstellar-space/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/voyager-2-interstellar-space.png","publishedAt":"2018-12-10T14:06:33Z","content":"NASA’s Voyager 2 probe has become the second-ever manmade spacecraft to enter interstellar space, the agency said Monday. The probe, launched in 1977 to study the planets farthest from Earth, crossed the outermost edge of what’s called the heliosphere — a pro… [+1571 chars]"},{"source":{"id":"time","name":"Time"},"author":"George Steer","title":"Expecting Huge Defeat, Theresa May Has Delayed A Crucial Brexit Vote","description":"MP's had been set to vote on a withdrawal agreement agreed last month between Theresa May and EU leaders","url":"http://time.com/5475235/may-brexit-vote-delayed/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/gettyimages-1071103756-594x594.jpg?quality=85","publishedAt":"2018-12-10T15:46:34Z","content":"British Prime Minister Theresa May has confirmed that a crucial parliamentary vote on Brexit scheduled on Dec. 11 will be delayed, throwing the timeline of Britain’s withdrawal from the E.U. into question. As it became clear the vote would be “rejected by a s… [+2903 chars]"},{"source":{"id":"time","name":"Time"},"author":"Gina Martinez","title":"Bill Clinton Remembers His Unlikely Friendship With George H.W. Bush in an Emotional Op-Ed","description":"\"I cherished every opportunity I had to learn and laugh with him. I just loved him.\"","url":"http://time.com/5468658/bill-clinton-friendship-george-h-w-bush-op-ed/","urlToImage":"https://timedotcom.files.wordpress.com/2018/06/ap18177021429504.jpg?quality=85","publishedAt":"2018-12-01T17:53:39Z","content":"Former President Bill Clinton honored the life of George H.W. Bush, who died Nov. 30 in his Houston Home, with a touching editorial about an unlikely friendship between two, who were once political adversaries. In an op-ed for the Washington Post, published D… [+2287 chars]"},{"source":{"id":"time","name":"Time"},"author":"CHRISTOPHER SHERMAN and MARIA VERZA / AP","title":"Mexico's First Leftist President in Over 70 Years Is Sworn Into Office","description":"Andres Manuel Lopez Obrador is sworn into office as Mexico's first leftist president in over 70 years.","url":"http://time.com/5468699/andres-manuel-lopez-obrador-mexico-president/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/new-mexican-president.jpg?quality=85","publishedAt":"2018-12-01T18:09:34Z","content":"(MEXICO CITY) — Andres Manuel Lopez Obrador took the oath of office Saturday as Mexico’s first leftist president in over 70 years, marking a turning point in one of the world’s most radical experiments in opening markets and privatization. Lopez Obrador pledg… [+4965 chars]"},{"source":{"id":"time","name":"Time"},"author":"SYLVIE CORBET / AP","title":"French President Macron Surveys Damage After the Worst Paris Riot in a Generation","description":"French President Emmanuel Macron visited the graffiti-damaged Arc de Triomphe after Paris was hit by France's worst riot in a generation.","url":"http://time.com/5468846/macron-arc-de-triomphe-paris-france-riot/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/macron-arc-de-triomphe-paris-riots.jpg?quality=85","publishedAt":"2018-12-02T14:54:55Z","content":"(PARIS) — French President Emmanuel Macron visited the graffiti-damaged Arc de Triomphe monument and held an emergency meeting on security Sunday, a day after central Paris was hit by France’s worst riot in a generation. Macron, who was meeting with his prime… [+3245 chars]"},{"source":{"id":"time","name":"Time"},"author":"Alejandro de la Garza","title":"NYPD Helps Out After a Times Square Marriage Proposal Ended in the Worst Possible Way","description":"Police have found the couple that dropped their engagement ring in a grate in Times Square, and the cops are getting the ring back to them.","url":"http://time.com/5468947/nypd-couple-engagement-ring-times-square/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/times-square-couple.jpg?quality=85","publishedAt":"2018-12-02T20:05:59Z","content":"If you get engaged in Times Square, try not to stand too close to a grate. A would-be fiancé asked his girlfriend to marry him late Friday night in New York City’s Times Square, then dropped the engagement ring down a sidewalk grate before she could put it on… [+874 chars]"},{"source":{"id":"time","name":"Time"},"author":"Justin Worland","title":"Watch Vladimir Putin and Crown Prince Mohammed bin Salman Embrace at the G-20","description":"President Vladimir Putin and Saudi Crown Prince Mohammed Bin Salman seem to be enjoying each other's company at the G-20","url":"http://time.com/5467935/putin-bin-salman-g20/","urlToImage":"https://timedotcom.files.wordpress.com/2018/11/putin-bin-salman-g20-handshake.jpg?quality=85","publishedAt":"2018-11-30T16:34:16Z","content":"Russian President Vladimir Putin and Saudi Crown Prince Mohammed bin Salman have found themselves isolated in recent months as many Western countries take a hardline stance against their authoritarian tendencies. But the two seemed to be enjoying each other’s… [+755 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Former Dallas Cop Indicted for Killing Unarmed Black Neighbor in His Own Apartment","description":"A grand jury indicted a white former Dallas police officer, Amber Guyger, in the killing of her unarmed black neighbor in his own apartment.","url":"http://time.com/5468375/former-dallas-cop-indicted-killing-unarmed-black-neighbor/","urlToImage":"https://timedotcom.files.wordpress.com/2018/11/amber-guyger-indicted-dallas-cop.jpg?quality=85","publishedAt":"2018-11-30T21:04:07Z","content":"(DALLAS) — A grand jury on Friday indicted a white former Dallas police officer for murder in the killing of her unarmed black neighbor when she says she mistakenly went to his apartment rather than her own and shot him. Dallas County court records showed the… [+2339 chars]"},{"source":{"id":"time","name":"Time"},"author":"Abby Vesoulis","title":"President Trump Reportedly Wants to Make Asylum Seekers Wait in Mexico. It's Not That Simple","description":"Trump wants asylum-seekers to wait in Mexico during their immigration court hearings, but experts say that might not be legally possible.","url":"http://time.com/5464757/donald-trump-asylum-border-migrant-caravan/","urlToImage":"https://timedotcom.files.wordpress.com/2018/08/immigration-pro-bono-attorneys.jpg?quality=85","publishedAt":"2018-11-30T21:53:31Z","content":"With many fleeing life-threatening conditions including gang violence and domestic abuse, the thousands of migrants who make up what has become known as the “migrant caravan” hoped the United States would be a place of refuge after their long journeys. Instea… [+8956 chars]"},{"source":{"id":"time","name":"Time"},"author":"KEN RITTER / AP","title":"Government Promises Almost $17 Million to Those Affected by Las Vegas Mass Shooting","description":"The U.S. government is allocating nearly $17 million to help people affected by the Las Vegas Strip mass shooting on Oct. 1, 2017.","url":"http://time.com/5468457/government-las-vegas-mass-shooting/","urlToImage":"https://timedotcom.files.wordpress.com/2018/11/matthew-whitaker-las-vegas.jpg?quality=85","publishedAt":"2018-11-30T22:32:49Z","content":"LAS VEGAS (AP) — The U.S. government is allocating nearly $17 million to help people affected by the Las Vegas Strip mass shooting that became the deadliest in the nation’s modern history, Acting Attorney General Matthew Whitaker said Friday. The money from t… [+1897 chars]"},{"source":{"id":"time","name":"Time"},"author":"David Von Drehle","title":"George Herbert Walker Bush, the 41st President of the United States and the Father of the 43rd, Dies at 94","description":"George Bush senior, who passed away Nov. 30, 2018, was a natural born leader. Despite losing after his only term, he was beloved in retirement.","url":"http://time.com/longform/president-george-hw-bush-dead/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/george-bush-sr-diana-walker-prague.jpg?quality=85","publishedAt":"2018-12-01T05:18:02Z","content":"George H.W. Bush, the careful and pragmatic manager of the Cold War’s final dramas, had nearly every tool a great president needs. He had fire and drive, which are indispensable to a great statesman. From his glamorous youth through his momentous single term … [+65747 chars]"},{"source":{"id":"time","name":"Time"},"author":"JAKE COYLE / AP","title":"Crazy Rich Asians Flops in China While Wreck-It Ralph Sequel Again Dominates Domestic Box Office","description":"On a typically sleepy post-Thanksgiving weekend in movie theaters, Disney's \"Ralph Breaks the Internet\" repeated as No. 1.","url":"http://time.com/5468948/weekend-box-office-crazy-rich-asians-wreck-it-ralph/","urlToImage":"https://timedotcom.files.wordpress.com/2018/08/crazy-rich-asians-film-still-constance-wu-golding.jpg?quality=85","publishedAt":"2018-12-02T19:01:00Z","content":"(NEW YORK) — On a typically sleepy post-Thanksgiving weekend in movie theaters, leftovers led the box office with Disney’s “Ralph Breaks the Internet” repeating as No. 1 with $25.8 million in ticket sales, according to studio estimates Sunday. The “Wreck-It R… [+3523 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"North Carolina Board of Elections Chairman Resigns Over Comments He Made Against President Trump","description":"Andy Penry, chairman of North Carolina's elections board, resigned from complaints about comments made online criticizing President Trump.","url":"http://time.com/5468880/north-carolina-elections-chairman-resigns/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/andy-penry-resigns-north-carolina-board-of-elections.jpg?quality=85","publishedAt":"2018-12-02T16:44:02Z","content":"(RALEIGH, N.C.) — The chairman of North Carolina’s elections board has resigned following complaints about comments he’s made online criticizing President Donald Trump. Andy Penry resigned Saturday from the State Board of Elections and Ethics Enforcement. The… [+685 chars]"},{"source":{"id":"time","name":"Time"},"author":"Jennifer Epstein, Josh Wingrove and Eric Martin / Bloomberg","title":"President Trump Says He Will Soon Terminate NAFTA","description":"President Donald Trump said he would soon tell Congress of plans to terminate the existing North American Free Trade Agreement.","url":"http://time.com/5468902/president-trump-nafta-deal/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/trump-nafta-g20-summit.jpg?quality=85","publishedAt":"2018-12-02T17:07:05Z","content":"(Bloomberg) — President Donald Trump said he would soon tell Congress of plans to terminate the existing North American Free Trade Agreement, a move that would give lawmakers a six-month window to ratify a new regional trade pact signed on Friday between the … [+3859 chars]"},{"source":{"id":"time","name":"Time"},"author":"MICHAEL BALSAMO / AP","title":"Rep. Adam Schiff Suggests Former Trump Adviser Roger Stone Lied to Congress","description":"Rep. Adam Schiff said Sunday that emails between Roger Stone and Jerome Corsi are \"inconsistent\" with testimony before Congress.","url":"http://time.com/5468908/adam-schiff-roger-stone-congress/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/adam-schiff-congress-roger-stone.jpg?quality=85","publishedAt":"2018-12-02T17:20:09Z","content":"(WASHINGTON) — The top Democrat on the House intelligence committee says former Trump adviser Roger Stone’s testimony should be provided to special counsel Robert Mueller “for consideration of whether perjury charges are warranted.” Rep. Adam Schiff said Sund… [+731 chars]"},{"source":{"id":"time","name":"Time"},"author":"ERIC TUCKER and MICHAEL BALSAMO / AP","title":"Former FBI Director James Comey Reaches Deal to Testify Before House Judiciary Committee","description":"Former FBI Director James Comey has reached a deal to testify privately to the House Judiciary Committee.","url":"http://time.com/5468930/fbi-director-james-comey-will-testify-congress/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/james-comey-fbi-congress.jpg?quality=85","publishedAt":"2018-12-02T18:15:48Z","content":"(WASHINGTON) — Former FBI Director James Comey has reached a deal to testify privately to the House Judiciary Committee, backing off his legal fight for an open hearing, his attorney said Sunday. Comey, whose lawyers went to court to challenge a congressional… [+1411 chars]"}];

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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);


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

/***/ 4:
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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map