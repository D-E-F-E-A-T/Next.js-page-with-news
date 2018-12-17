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

/***/ "./data/time.json":
/*!************************!*\
  !*** ./data/time.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"time","name":"Time"},"author":"Suyin Haynes","title":"A Suspected Gas Explosion Has Injured More Than 40 People at a Busy Restaurant in Japan","description":"The explosion happened Sunday night in Sapporo, on Japan's northern island","url":"http://time.com/5481243/sapporo-japan-explosion-restaurant/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1074117522.jpg?quality=85","publishedAt":"2018-12-17T09:41:09Z","content":"Forty-two people have been injured in a suspected gas explosion at a restaurant in Japan, according to police and local media. The explosion happened Sunday night in Sapporo, the capital city of Japan’s northern island of Hokkaido, the Associated Press report… [+772 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Saudi Arabia Rejects U.S. Senate's 'Interference' After Resolution on Khashoggi Killing","description":"Saudi Arabia says it rejects a U.S. Senate resolution that blames Saudi Crown Prince Mohammed bin Salman for the killing of Jamal Khashoggi","url":"http://time.com/5481204/saudi-arabia-senate-interference-khashoggi-mbs/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1052028486.jpg?quality=85","publishedAt":"2018-12-17T06:49:52Z","content":"(RIYADH, Saudi Arabia) — Saudi Arabia issued an unusually strong rebuke of the U.S. Senate on Monday, rejecting a bipartisan resolution that put the blame for the killing of Saudi journalist Jamal Khashoggi squarely on the Saudi crown prince and describing it… [+2829 chars]"},{"source":{"id":"time","name":"Time"},"author":"ROB GILLIES / AP","title":"Canada Gets Access to Detainee in China, 6 Days After Arrest","description":"Canada's ambassador to China was given access Sunday to detained Canadian entrepreneur Michael Spavor six days after he was arrested.","url":"http://time.com/5481052/canada-china-entrepreneur-michael-spavor-arrest/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/china-canada-arrest-spavor.jpg?quality=85","publishedAt":"2018-12-16T19:52:16Z","content":"(TORONTO) — Canada’s ambassador to China was given access Sunday to detained Canadian entrepreneur Michael Spavor six days after he was arrested, the country’s Global Affairs department said. Ambassador John McCallum also met with ex-diplomat Michael Kovrig o… [+1549 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Catriona Gray From the Philippines Has Been Crowned Miss Universe 2018","description":"Catriona Gray of the Philippines won the Miss Universe 2018 competition in Bangkok, besting contestants from 93 other countries","url":"http://time.com/5481162/miss-universe-philippines-catriona-gray/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1074303964.jpg?quality=85","publishedAt":"2018-12-17T03:47:15Z","content":"(BANGKOK) — Catriona Gray of the Philippines was named winner of the Miss Universe 2018 competition in the Thai capital Bangkok, besting contestants from 93 other countries to claim the prize. The 24-year-old Gray edged out first runner-up Tamaryn Green of So… [+329 chars]"},{"source":{"id":"time","name":"Time"},"author":"JONATHAN LEMIRE / AP","title":"'Over My Dead Body.' Rudy Giuliani Says Robert Mueller Will Never Interview President Trump","description":"Rudy Giuliani, President Donald Trump's attorney, is ruling out the possibility of an interview with special counsel Robert Mueller.","url":"http://time.com/5480972/rudy-giuliani-mueller-trump-interview/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/rudy-giuliani-trump-mueller-interview.jpg?quality=85","publishedAt":"2018-12-16T15:39:15Z","content":"(WASHINGTON) — With a number of probes moving closer to the Oval Office, President Donald Trump and his attorney unleased a fresh series of attacks Sunday on the investigators, questioning their integrity while categorically ruling out the possibility of a pr… [+6534 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Colin Kroll, Co-Founder of Vine and HQ Trivia, Found Dead","description":"Colin Kroll, the 35-year-old co-founder of Vine and HQ Trivia, has been found dead in his Manhattan apartment of an apparent overdose.","url":"http://time.com/5481002/colin-kroll-vine-hq-trivia-found-dead/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/colin-kroll-found-dead-hq-vine.jpg?quality=85","publishedAt":"2018-12-16T17:21:21Z","content":"Colin Kroll, the 35-year-old co-founder of Vine and HQ Trivia, has been found dead in his Manhattan apartment of an apparent overdose. Police told TIME Kroll was pronounced dead at 12:18 a.m Sunday morning. A police spokesperson did not know what kind of drug… [+1660 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"President Trump Says He Will Review Former Green Beret's Murder Case","description":"President Donald Trump said Sunday's that he will be \"reviewing\" the case of a former U.S. Army commando being charged with murder.","url":"http://time.com/5481044/trump-army-commando-murder-case/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/trump-army-commando-golsteyn.jpg?quality=85","publishedAt":"2018-12-16T19:19:31Z","content":"(WASHINGTON) — President Donald Trump said Sunday’s that he will be “reviewing” the case of a former U.S. Army commando being charged with murder, raising questions about the possibility he could jeopardize the ongoing military legal proceedings. Trump tweete… [+1421 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senate Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"},{"source":{"id":"time","name":"Time"},"author":"Patricia Hurtado & Shahien Nasiripour / Bloomberg","title":"President Trump Is Said to Have Been in the Room During Hush-Money Meeting","description":"An individual said Donald Trump was present when Michael Cohen and David Pecker agreed to to kill unflattering news stories","url":"http://time.com/5479678/donald-trump-hush-money-national-enquirer/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/GettyImages-1071818210.jpg?quality=85","publishedAt":"2018-12-14T04:16:24Z","content":"Federal prosecutors said this week that at least one unidentified member of Donald Trump’s campaign joined his lawyer Michael Cohen and the publisher of the tabloid National Enquirer, David Pecker, in a 2015 scheme to kill unflattering news stories about the … [+2704 chars]"},{"source":{"id":"time","name":"Time"},"author":"ERIC TUCKER / AP","title":"Mueller Filings: FBI Not to Blame For False Statements Made by Michael Flynn","description":"The special counsel's office says the FBI is not to be blamed for former national security adviser Michael Flynn's false statements.","url":"http://time.com/5480452/fbi-not-blame-michael-flynn-false-statements/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/michael-flynn-fbi-false-statements.jpg?quality=85","publishedAt":"2018-12-14T20:58:56Z","content":"(WASHINGTON) — The special counsel’s office is pushing back at the suggestion that the FBI acted improperly in its interview of former national security adviser Michael Flynn. Flynn’s lawyers said in a sentencing memorandum this week that Flynn was not warned… [+421 chars]"},{"source":{"id":"time","name":"Time"},"author":"RICARDO ALONSO-ZALDIVAR / AP","title":"Federal Judge Rules Obama's Affordable Care Act Is Unconstitutional","description":"A conservative federal judge in Texas has ruled the Affordable Care Act \"invalid\" on the eve of the sign-up deadline for next year.","url":"http://time.com/5480743/judge-texas-obamacare-unconstitutional/","urlToImage":"https://timedotcom.files.wordpress.com/2018/10/181101-open-enrollment-healthcare-affordable-care-act-obamacare.jpg?quality=85","publishedAt":"2018-12-15T14:01:11Z","content":"WASHINGTON — A conservative federal judge in Texas has ruled the Affordable Care Act “invalid” on the eve of the sign-up deadline for next year. But with appeals certain, even the Trump White House said the law will remain in place for now. In a 55-page opini… [+5353 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Justice Ginsburg Hails Immigrants as the 'Vanguard' to Fight Discrimination in Speech to New Citizens","description":"“We are a nation made strong by people like you,\" Ginsburg said","url":"http://time.com/5480773/justice-ginsburg-hails-immigrants-vanguard/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ginsburg-archives.jpg?quality=85","publishedAt":"2018-12-15T16:03:48Z","content":"Supreme Court Justice Ruth Bader Ginsburg used her first public address since breaking three ribs last month to praise immigrants, saying that they play a “vital part” in cleansing the “stains” of discrimination from the country. Ginsburg spoke at a naturaliz… [+1845 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"All California Wildfire Evacuation Orders Have Been Lifted","description":"All evacuation orders have been lifted more than a month after a devastating wildfire that wiped out the Northern California town Paradise.","url":"http://time.com/5480842/evacuation-orders-lifted-wildfires-california/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/paradise-wildfire-evacuation-lifted.jpg?quality=85","publishedAt":"2018-12-15T19:02:01Z","content":"(PARADISE, Calif.) — All evacuation orders have been lifted in Paradise more than a month after a devastating wildfire that wiped out the Northern California town. The fire that broke out Nov. 8 killed at least 86 people and destroyed 14,000 homes in Paradise… [+536 chars]"},{"source":{"id":"time","name":"Time"},"author":"Tara Law","title":"Here Are All the Controversies That Led to Interior Secretary Ryan Zinke's Resignation","description":"Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected.","url":"http://time.com/5480865/controversies-interior-secretary-ryan-zinke-resignation/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/ryan-zinke-resign.jpg?quality=85","publishedAt":"2018-12-15T21:45:21Z","content":"President Donald Trump’s Saturday morning announcement that Interior Secretary Ryan Zinke will step down by the end of the year was hardly unexpected. Even though controversy has plagued many current and former members of the Trump administration, Zinke stand… [+5276 chars]"},{"source":{"id":"time","name":"Time"},"author":"Associated Press","title":"Senates Rebukes Trump Response to Khashoggi Death and U.S. Support of Yemen War","description":"Senators voted to recommend the U.S. end supporting the Saud-led Yemen war and to blame Saudi Crown Prince for the death of Jamal Khashoggi.","url":"http://time.com/5479319/senate-rebukes-trump-response-khashoggi-death-yemen-war/","urlToImage":"https://timedotcom.files.wordpress.com/2018/12/senate-vote-yemen-saudi-arabia.jpg?quality=85","publishedAt":"2018-12-13T20:44:51Z","content":"(WASHINGTON) — In back-to-back votes against Saudi Arabia, the Senate delivered an unusual rebuke of President Donald Trump’s response to the death of journalist Jamal Khashoggi and signaled new skepticism from Capitol Hill toward the longtime Middle East all… [+6447 chars]"}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_time_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/time.json */ "./data/time.json");
var _data_time_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/time.json */ "./data/time.json", 1);



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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2398784779"
      }, "From World"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2398784779" + " " + "test"
      }, _data_time_json__WEBPACK_IMPORTED_MODULE_5__.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-2398784779"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: index,
          as: "/time/".concat(item.title.replace(/ /g, "_")),
          href: "/detail?title=".concat(item.title)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-2398784779"
        }, item.title)));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2398784779",
        css: "h1.jsx-2398784779{text-align:center;margin-top:50px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-weight:800;}ul.jsx-2398784779 li.jsx-2398784779 a.jsx-2398784779{line-height:2;-webkit-text-decoration:none;text-decoration:none;font-size:21px;font-weight:500;color:black;padding-left:15px;}ul.jsx-2398784779 li.jsx-2398784779:hover{background:#f7f7f7;padding:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdF9TRU9cXEFQSS1ORVdTLU5FWFRKUy10ZXN0MlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHK0IsQUFNSixBQVFLLGNBUEUsSUFOTCxDQWNKLFlBQ2QsR0FkcUIsOEJBTUosZUFDQyxnQkFDSixZQUNNLGtCQUNwQixFQVRrQixnQkFDbEIiLCJmaWxlIjoiQzpcXFJlYWN0X1NFT1xcQVBJLU5FV1MtTkVYVEpTLXRlc3QyXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS90aW1lLmpzb24nXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+RnJvbSBXb3JsZDwvaDE+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRlc3RcIj5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IGFzPXtgL3RpbWUvJHtpdGVtLnRpdGxlLnJlcGxhY2UoLyAvZywgXCJfXCIpfWB9IGhyZWY9e2AvZGV0YWlsP3RpdGxlPSR7aXRlbS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIGxpIGEge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl19 */\n/*@ sourceURL=C:\\React_SEO\\API-NEWS-NEXTJS-test2\\pages\\index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map