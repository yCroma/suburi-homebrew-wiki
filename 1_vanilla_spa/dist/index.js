/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/html/index.html":
/*!*****************************!*\
  !*** ./src/html/index.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n\\t<meta charset=\\\"UTF-8\\\">\\n\\t<title></title>\\n</head>\\n<body>\\n\\t<header>\\n\\t\\t<a href=\\\"/\\\">TOP</a>\\n\\t\\t<a href=\\\"/home\\\">HOME</a>\\n\\t\\t<a href=\\\"/profile\\\">PROFILE</a>\\n\\t</header>\\n\\t<div id=\\\"app\\\"></div>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://vanila_spa/./src/html/index.html?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/js/init.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/js/router.js\");\n\n\n\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.init)();\n(0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();\n\n\n//# sourceURL=webpack://vanila_spa/./src/js/index.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _html_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/index.html */ \"./src/html/index.html\");\n\n\nfunction init() {\n\tconsole.log(_html_index_html__WEBPACK_IMPORTED_MODULE_0__.default)\n\tdocument.body.innerHTML = _html_index_html__WEBPACK_IMPORTED_MODULE_0__.default;\n\tconsole.log(\"init.js\")\n}\n\n\n//# sourceURL=webpack://vanila_spa/./src/js/init.js?");

/***/ }),

/***/ "./src/js/matcher.js":
/*!***************************!*\
  !*** ./src/js/matcher.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst EXTRACT = /\\/:[^\\/]+/g;\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(matcher) {\n\tconsole.log(matcher)\n\tconst extracted = matcher.match(EXTRACT);\n\tconsole.log(extracted)\n}\n\n\n//# sourceURL=webpack://vanila_spa/./src/js/matcher.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matcher */ \"./src/js/matcher.js\");\n\n\nconst updateView = () => {\n\tconst pages = {\n\t\t\"/\": `\n\t\t\t<h1>Vanilla SPA</h1>\n\t\t`,\n\t\t\"/home\": `\n\t\t\t<h1>ようこそ</h1>\n\t\t`,\n\t\t\"/profile\": `\n\t\t\t<h1>私は太郎です</h1>\n\t\t`\n\t}\n\tconst page = pages[window.location.pathname]\n\tconst render = page || `<h1>404 : Not Found</h1>`\n\tdocument.getElementById(\"app\").innerHTML = render\n}\n\nconst browserback = () => {\n\twindow.addEventListener(\"popstate\", () => {\n\t\tupdateView();\n\t})\n}\n\nfunction router() {\n\tconst URL = window.location.pathname\n\t;(0,_matcher__WEBPACK_IMPORTED_MODULE_0__.default)(URL)\n\n\tbrowserback()\n\tdocument.querySelectorAll(\"a\").forEach( a => {\n\t\ta.onclick = event => {\n\t\t\tevent.preventDefault();\n\t\t\twindow.history.pushState(null, \"\", a.href);\n\t\t\tupdateView();\n\t\t};\n\t})\n}\n\n\n//# sourceURL=webpack://vanila_spa/./src/js/router.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;