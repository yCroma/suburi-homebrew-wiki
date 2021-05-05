/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class TimeFormatted extends HTMLElement {\n\n  render() { // (1)\n    let date = new Date(this.getAttribute('datetime') || Date.now());\n\n    this.innerHTML = new Intl.DateTimeFormat(\"default\", {\n      year: this.getAttribute('year') || undefined,\n      month: this.getAttribute('month') || undefined,\n      day: this.getAttribute('day') || undefined,\n      hour: this.getAttribute('hour') || undefined,\n      minute: this.getAttribute('minute') || undefined,\n      second: this.getAttribute('second') || undefined,\n      timeZoneName: this.getAttribute('time-zone-name') || undefined,\n    }).format(date);\n  }\n\n  connectedCallback() { // (2)\n    if (!this.rendered) {\n      this.render();\n      this.rendered = true;\n    }\n  }\n\n  static get observedAttributes() { // (3)\n    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) { // (4)\n    this.render();\n  }\n\n}\n\ncustomElements.define(\"time-formatted\", TimeFormatted);\n\ndocument.getElementById(\"app\").innerHTML = `\n<time-formatted id=\"elem\" hour=\"numeric\" minute=\"numeric\" second=\"numeric\"></time-formatted>\n`\n\nsetInterval(() => elem.setAttribute('datetime', new Date()), 1000);\n\n\n//# sourceURL=webpack://10_set_attribute_sample/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;