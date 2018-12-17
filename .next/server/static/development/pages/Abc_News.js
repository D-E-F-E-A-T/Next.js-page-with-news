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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var linkStyle = {
  marginRight: 1
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1736451700" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/21/21601.svg",
    width: "60",
    height: "60",
    alt: "",
    className: "jsx-1736451700"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Abc_News"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "ABC News"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Bbc_News"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "BBC News"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Cbc_News"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "CBC News"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1736451700" + " " + "navBar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Money_News"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "Money"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Sport"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "Sport"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/NBC_News"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "NBC News"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Newsweek"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "Newsweek"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/Policy"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "Policy"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1736451700"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/UsaToday"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1736451700"
  }, "USA Today"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1736451700",
    css: ".container.jsx-1736451700{font-family:'Fira Sans',Arial,sans-serif;}nav.jsx-1736451700{background-color:#f8f9fa;}nav.jsx-1736451700,nav.jsx-1736451700 ul.jsx-1736451700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-1736451700 ul.jsx-1736451700{width:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}nav.jsx-1736451700 ul.jsx-1736451700 li.jsx-1736451700{list-style-type:none;padding-right:10px;}nav.jsx-1736451700 ul.jsx-1736451700 li.jsx-1736451700 a.jsx-1736451700{-webkit-text-decoration:none;text-decoration:none;color:black;}.navBar.jsx-1736451700{background:#000000;}.navBar.jsx-1736451700 ul.jsx-1736451700{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navBar.jsx-1736451700 ul.jsx-1736451700 li.jsx-1736451700{list-style-type:none;padding:15px;-webkit-letter:spacing:0.5px;-moz-letter:spacing:0.5px;-ms-letter:spacing:0.5px;letter:spacing:0.5px;}.navBar.jsx-1736451700 ul.jsx-1736451700 li.jsx-1736451700 a.jsx-1736451700{-webkit-text-decoration:none;text-decoration:none;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdF9TRU9cXEFQSS1ORVdTLU5FWFRKUy10ZXN0MlxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFZ0IsQUFJa0QsQUFHaEIsQUFJWixBQUlGLEFBS1UsQUFLQSxBQUtGLEFBSVIsQUFLVSxBQU1BLFdBN0JJLEFBbUJaLFFBSmYsRUFWcUIsQUFtQk4sSUFoQ2YsU0FpQ3VCLE1BbkJ2QixDQWpCQSxTQXFCYyxBQW9CRCxXQUNiLENBcEJBLFlBZkEsV0F3QkEsdUJBbkJBLDJCQXlCQSIsImZpbGUiOiJDOlxcUmVhY3RfU0VPXFxBUEktTkVXUy1ORVhUSlMtdGVzdDJcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICA8bmF2PlxyXG4gICAgPExpbmsgYXM9e2AvYH0gaHJlZj17YC9gfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMjEvMjE2MDEuc3ZnYH0gd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL0FiY19OZXdzYH0+PGE+QUJDIE5ld3M8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBhcz17YC9CYmNfTmV3c2B9PjxhPkJCQyBOZXdzPC9hPjwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGFzPXtgL0NiY19OZXdzYH0+PGE+Q0JDIE5ld3M8L2E+PC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL2B9PlxyXG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgYXM9XCIvTW9uZXlfTmV3c1wiPlxyXG4gICAgICAgICAgICA8YT5Nb25leTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGFzPVwiL1Nwb3J0XCI+XHJcbiAgICAgICAgICAgIDxhPlNwb3J0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgYXM9XCIvTkJDX05ld3NcIj5cclxuICAgICAgICAgICAgPGE+TkJDIE5ld3M8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBhcz1cIi9OZXdzd2Vla1wiPlxyXG4gICAgICAgICAgICA8YSA+TmV3c3dlZWs8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBhcz1cIi9Qb2xpY3lcIj5cclxuICAgICAgICAgICAgPGE+UG9saWN5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgYXM9XCIvVXNhVG9kYXlcIj5cclxuICAgICAgICAgICAgPGEgPlVTQSBUb2RheTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBuYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdiwgbmF2IHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuYXYgdWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdiB1bCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2QmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2QmFyIHVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2QmFyIHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBsZXR0ZXI6c3BhY2luZzogMC41cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZCYXIgdWwgbGkgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcblxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\React_SEO\\API-NEWS-NEXTJS-test2\\components\\Header.js */"
  }));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: layoutStyle,
    className: "jsx-4171249124"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4171249124" + " " + "container-fluid"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4171249124",
    css: ".container-fluid.jsx-4171249124{background-color:#fdfdfd;font-family:'Fira Sans',Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdF9TRU9cXEFQSS1ORVdTLU5FWFRKUy10ZXN0MlxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR2tDLHlCQUNnQix5Q0FDM0MiLCJmaWxlIjoiQzpcXFJlYWN0X1NFT1xcQVBJLU5FV1MtTkVYVEpTLXRlc3QyXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46IDIwLFxyXG4gIHBhZGRpbmc6IDIwLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\React_SEO\\API-NEWS-NEXTJS-test2\\components\\MyLayout.js */"
  }));
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

/***/ "./pages/Abc_News.js":
/*!***************************!*\
  !*** ./pages/Abc_News.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/Abc_News.json */ "./data/Abc_News.json");
var _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/Abc_News.json */ "./data/Abc_News.json", 1);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var Abc = function Abc(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2959285834"
  }, "ABC template"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2959285834"
  }, props.data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-2959285834"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/Abc_News/".concat(item.title.replace(/ /g, "_")),
      href: "/detail?title=".concat(item.title)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-2959285834"
    }, item.title)));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2959285834",
    css: "h1.jsx-2959285834{text-align:center;margin-top:50px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}ul.jsx-2959285834 li.jsx-2959285834 a.jsx-2959285834{line-height:2;-webkit-text-decoration:none;text-decoration:none;font-size:21px;font-weight:500;color:black;padding-left:15px;}ul.jsx-2959285834 li.jsx-2959285834:hover{background:#f7f7f7;padding:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdF9TRU9cXEFQSS1ORVdTLU5FWFRKUy10ZXN0MlxccGFnZXNcXEFiY19OZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHMkIsQUFNSixBQVFLLGNBUEUsSUFOTCxDQWNKLFlBQ2QsR0FkcUIsOEJBTUosZUFDQyxnQkFDSixZQUNNLGtCQUNwQixFQVRrQixnQkFDbEIiLCJmaWxlIjoiQzpcXFJlYWN0X1NFT1xcQVBJLU5FV1MtTkVYVEpTLXRlc3QyXFxwYWdlc1xcQWJjX05ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9BYmNfTmV3cy5qc29uJ1xyXG5cclxuY29uc3QgQWJjID0gKHByb3BzKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMT5BQkMgdGVtcGxhdGU8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7cHJvcHMuZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBhcz17YC9BYmNfTmV3cy8ke2l0ZW0udGl0bGUucmVwbGFjZSgvIC9nLCBcIl9cIil9YH0gaHJlZj17YC9kZXRhaWw/dGl0bGU9JHtpdGVtLnRpdGxlfWB9PlxyXG4gICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgfVxyXG4gICAgICB1bCBsaSBhIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICB1bCBsaTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKVxyXG5cclxuQWJjLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYmNcclxuIl19 */\n/*@ sourceURL=C:\\React_SEO\\API-NEWS-NEXTJS-test2\\pages\\Abc_News.js */"
  }));
};

Abc.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            data: _data_Abc_News_json__WEBPACK_IMPORTED_MODULE_6__
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Abc);

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/Abc_News.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Abc_News.js */"./pages/Abc_News.js");


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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=Abc_News.js.map