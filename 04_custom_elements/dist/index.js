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

eval("// create custom element\nclass WikiHello extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t\t//this.shadow = this.attachShadow({mode: 'opne'})\n\t\tconst helloElement = document.createElement(\"h1\")\n\t\thelloElement.textContent = \"WikiHello\"\n\t}\n}\n\n// define DOM\nconsole.log(\"define init\")\ncustomElements.define(\"wiki-hello\", WikiHello)\nconsole.log(\"defined DOM\")\n\n\n// Create a class for the element\nclass PopUpInfo extends HTMLElement {\n  constructor() {\n    // Always call super first in constructor\n    super();\n\n    // Create a shadow root\n    var shadow = this.attachShadow({mode: 'open'});\n\n    // Create spans\n    var wrapper = document.createElement('span');\n    wrapper.setAttribute('class','wrapper');\n    var icon = document.createElement('span');\n    icon.setAttribute('class','icon');\n    icon.setAttribute('tabindex', 0);\n    var info = document.createElement('span');\n    info.setAttribute('class','info');\n\n    // Take attribute content and put it inside the info span\n    var text = this.getAttribute('text');\n    info.textContent = text;\n\n    // Insert icon\n    var imgUrl;\n    if(this.hasAttribute('img')) {\n      imgUrl = this.getAttribute('img');\n    } else {\n      imgUrl = 'img/default.png';\n    }\n    var img = document.createElement('img');\n    img.src = imgUrl;\n    icon.appendChild(img);\n\n    // Create some CSS to apply to the shadow dom\n    var style = document.createElement('style');\n\n    style.textContent = '.wrapper {' +\n                           'position: relative;' +\n                        '}' +\n\n                         '.info {' +\n                            'font-size: 0.8rem;' +\n                            'width: 200px;' +\n                            'display: inline-block;' +\n                            'border: 1px solid black;' +\n                            'padding: 10px;' +\n                            'background: white;' +\n                            'border-radius: 10px;' +\n                            'opacity: 0;' +\n                            'transition: 0.6s all;' +\n                            'position: absolute;' +\n                            'bottom: 20px;' +\n                            'left: 10px;' +\n                            'z-index: 3;' +\n                          '}' +\n\n                          'img {' +\n                            'width: 1.2rem' +\n                          '}' +\n\n                          '.icon:hover + .info, .icon:focus + .info {' +\n                            'opacity: 1;' +\n                          '}';\n\n    // attach the created elements to the shadow dom\n\n    shadow.appendChild(style);\n    shadow.appendChild(wrapper);\n    wrapper.appendChild(icon);\n    wrapper.appendChild(info);\n  }\n}\n\n// Define the new element\ncustomElements.define('popup-info', PopUpInfo);\n\n\nconst Body = document.body\nBody.innerHTML = `\n<div id=\"app\"></div>\n<script src=\"index.js\"></script>\n`\n\ndocument.getElementById(`app`).innerHTML = `\n<wiki-hello></wiki-hello>\n<h1>hello</h1>\n<popup-info img=\"img/alt.png\" text=\"Your card validation code (CVC) is an extra\n                                    security feature — it is the last 3 or 4\n                                    numbers on the back of your card.\">\n`\n\nconsole.log(Body)\nconsole.log(document)\n\n\n//# sourceURL=webpack://custom_elements/./src/index.js?");

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