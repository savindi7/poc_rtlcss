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

eval("window.onload = function () {\n    // For example, check the browser's language setting\n    const isRTL = true\n\n    // If language is Arabic or other RTL language, apply RTL stylesheet\n    if (isRTL) {\n        document.getElementById('theme-stylesheet').setAttribute('href', 'assets/theme.rtl.min.css');\n    } else {\n        // Keep LTR stylesheet if language is not Arabic\n        document.getElementById('theme-stylesheet').setAttribute('href', 'assets/theme.min.css');\n    }\n};\n\n//# sourceURL=webpack://rtlcss_poc/./src/index.js?");

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