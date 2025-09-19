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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n\n//# sourceURL=webpack://webpack_theme/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/libraries/add-alt-title.js":
/*!*******************************************!*\
  !*** ./src/js/libraries/add-alt-title.js ***!
  \*******************************************/
/***/ (() => {

eval("{jQuery(\"img:not([title])\").each(function () {\n  if (jQuery(this).attr(\"alt\") !== \"\")\n    jQuery(this).attr(\"title\", jQuery(this).attr(\"alt\"));\n});\n\njQuery(\"img:not([alt])\").each(function () {\n  if (jQuery(this).attr(\"title\") !== \"\")\n    jQuery(this).attr(\"alt\", jQuery(this).attr(\"title\"));\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/add-alt-title.js?\n}");

/***/ }),

/***/ "./src/js/libraries/libraries.js":
/*!***************************************!*\
  !*** ./src/js/libraries/libraries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-alt-title */ \"./src/js/libraries/add-alt-title.js\");\n/* harmony import */ var _add_alt_title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_add_alt_title__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-mask */ \"./src/js/libraries/phone-mask.js\");\n/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phone_mask__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/libraries.js?\n}");

/***/ }),

/***/ "./src/js/libraries/phone-mask.js":
/*!****************************************!*\
  !*** ./src/js/libraries/phone-mask.js ***!
  \****************************************/
/***/ (() => {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\n  var phoneInputs = document.querySelectorAll('input[type=\"tel\"]');\n\n  if (phoneInputs) {\n    phoneInputs.forEach(function (phoneInput) {\n      var phoneMask = IMask(phoneInput, {\n        mask: \"+38(000)000-00-00\",\n      });\n    });\n  }\n});\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/libraries/phone-mask.js?\n}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/parts */ \"./src/js/parts/parts.js\");\n/* harmony import */ var _parts_parts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_parts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libraries_libraries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraries/libraries */ \"./src/js/libraries/libraries.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider */ \"./src/js/parts/slider.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_slider__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/parts/parts.js":
/*!*******************************!*\
  !*** ./src/js/parts/parts.js ***!
  \*******************************/
/***/ (() => {

eval("{document.addEventListener('DOMContentLoaded', function () {\r\n\tconst animItems = document.querySelectorAll('._anim-items');\r\n\r\n\tif (animItems.length > 0) {\r\n\t\twindow.addEventListener('scroll', animOnScroll, { passive: true });\r\n\r\n\t\tfunction animOnScroll() {\r\n\t\t\tfor (let index = 0; index < animItems.length; index++) {\r\n\t\t\t\tconst animItem = animItems[index];\r\n\t\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\t\tconst animItemOffset = offset(animItem).top;\r\n\t\t\t\tconst animStart = 10;\r\n\t\t\t\tlet animItemPoint = window.innerHeight + animItemHeight / animStart;\r\n\t\t\t\tif (animItemHeight < window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {\r\n\t\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction offset(el) {\r\n\t\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\t\treturn {\r\n\t\t\t\ttop: rect.top + scrollTop,\r\n\t\t\t\tleft: rect.left + scrollLeft,\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tanimOnScroll();\r\n\t\t}, 300);\r\n\t}\r\n\r\n\tconst animCar = document.querySelectorAll('._anim-items-driver');\r\n\r\n\tif (animCar.length > 0) {\r\n\t\twindow.addEventListener('scroll', animOnScrollCar, { passive: true });\r\n\r\n\t\tfunction animOnScrollCar() {\r\n\t\t\tfor (let index = 0; index < animCar.length; index++) {\r\n\t\t\t\tconst animItem = animCar[index];\r\n\t\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\t\tconst animItemOffset = offsetCar(animItem).top;\r\n\t\t\t\tconst animStart = 10;\r\n\r\n\t\t\t\tlet animItemPoint = window.innerHeight - animItemHeight * animStart;\r\n\t\t\t\tif (animItemHeight > window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight + window.innerHeight * animStart;\r\n\t\t\t\t} else if (animItemHeight < window.innerHeight) {\r\n\t\t\t\t\tanimItemPoint = window.innerHeight + window.innerHeight * animStart;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {\r\n\t\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction offsetCar(el) {\r\n\t\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\t\treturn {\r\n\t\t\t\ttop: rect.top + scrollTop,\r\n\t\t\t\tleft: rect.left + scrollLeft,\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tanimOnScrollCar();\r\n\t\t}, 300);\r\n\t}\r\n\r\n\t// checkboxes\r\n\tconst multiselects = document.querySelectorAll('.multiselect');\r\n\r\n\tmultiselects.forEach(ms => {\r\n\t\tconst toggle = ms.querySelector('.multiselect-toggle');\r\n\t\tconst popup = ms.querySelector('.multiselect-popup');\r\n\r\n\t\ttoggle.addEventListener('click', e => {\r\n\t\t\te.stopPropagation();\r\n\t\t\tms.classList.toggle('open');\r\n\t\t});\r\n\r\n\t\tpopup.addEventListener('change', () => {\r\n\t\t\tconst checked = [...popup.querySelectorAll('input:checked')].map(i => i.value);\r\n\t\t\ttoggle.textContent = checked.length ? checked.join(', ') : 'Vælg område';\r\n\t\t});\r\n\t});\r\n\r\n\tdocument.addEventListener('click', e => {\r\n\t\tdocument.querySelectorAll('.multiselect.open').forEach(ms => {\r\n\t\t\tif (!ms.contains(e.target)) {\r\n\t\t\t\tms.classList.remove('open');\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\r\n\t//video\r\n\tconst tabs = document.querySelectorAll('.step-tab');\r\n\tconst video = document.querySelector('.steps-block__video video');\r\n\tconst playPauseButton = document.querySelector('.video__play');\r\n\r\n\tconst showPlayButton = () => {\r\n\t\tif (playPauseButton) {\r\n\t\t\tplayPauseButton.innerHTML =\r\n\t\t\t\t'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\"><circle cx=\"25\" cy=\"25\" r=\"22\" fill=\"#fff\" opacity=\".5\"/><path fill=\"#fff\" d=\"m22 18 10 7-10 7z\"/></svg>';\r\n\t\t\tplayPauseButton.style.display = 'flex';\r\n\t\t}\r\n\t};\r\n\r\n\tconst hidePlayButton = () => {\r\n\t\tif (playPauseButton) {\r\n\t\t\tplayPauseButton.innerHTML = '';\r\n\t\t\tplayPauseButton.style.display = 'none';\r\n\t\t}\r\n\t};\r\n\r\n\tif (tabs.length && video) {\r\n\t\ttabs.forEach(tab => {\r\n\t\t\ttab.addEventListener('click', () => {\r\n\t\t\t\ttabs.forEach(t => t.classList.remove('active'));\r\n\t\t\t\ttab.classList.add('active');\r\n\r\n\t\t\t\tconst newVideo = tab.dataset.video;\r\n\t\t\t\tif (newVideo) {\r\n\t\t\t\t\tvideo.style.opacity = 0;\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tvideo.src = newVideo;\r\n\t\t\t\t\t\tvideo.pause();\r\n\t\t\t\t\t\tshowPlayButton();\r\n\t\t\t\t\t\tvideo.style.opacity = 1;\r\n\t\t\t\t\t}, 300);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tif (playPauseButton && video) {\r\n\t\tplayPauseButton.addEventListener('click', () => {\r\n\t\t\tvideo.play();\r\n\t\t\thidePlayButton();\r\n\t\t});\r\n\t}\r\n\r\n\tif (video) {\r\n\t\tvideo.addEventListener('click', () => {\r\n\t\t\tif (!video.paused) {\r\n\t\t\t\tvideo.pause();\r\n\t\t\t\tshowPlayButton();\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\t//header\r\n\tlet header = document.querySelector('.header');\r\n\tlet scrollPrev = 0;\r\n\r\n\twindow.addEventListener('scroll', function () {\r\n\t\tvar scrolled = window.PageYOffset || this.document.documentElement.scrollTop;\r\n\r\n\t\tif (scrolled > 100 && scrolled > scrollPrev) {\r\n\t\t\theader.classList.add('header--hidden');\r\n\t\t} else {\r\n\t\t\tif (header.classList.contains('header--hidden')) {\r\n\t\t\t\theader.classList.remove('header--hidden');\r\n\t\t\t}\r\n\t\t}\r\n\t\tscrollPrev = scrolled;\r\n\t});\r\n\r\n\t//burger-menu\r\n\tconst menu = document.querySelector('.header__content');\r\n\tconst menuButton = document.querySelector('.header__mobile-menu');\r\n\r\n\tmenuButton.addEventListener('click', function () {\r\n\t\tthis.classList.toggle('active');\r\n\t\tmenu.classList.toggle('open');\r\n\t\tdocument.body.classList.toggle('burger-open');\r\n\t});\r\n});\r\n\r\ndocument.addEventListener('click', function (event) {\r\n\tconst headerSearch = document.querySelector('.header__search');\r\n\tconst isClickInside = headerSearch.contains(event.target);\r\n\r\n\tif (isClickInside) {\r\n\t\theaderSearch.classList.add('active');\r\n\t} else {\r\n\t\theaderSearch.classList.remove('active');\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/parts.js?\n}");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ (() => {

eval("{\n\n//# sourceURL=webpack://webpack_theme/./src/js/parts/slider.js?\n}");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (() => {

eval("{throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nUndefined variable.\\n   ╷\\n35 │     @media screen and (min-width: $tablet) {\\r\\n   │                                   ^^^^^^^\\n   ╵\\n  src\\\\scss\\\\includes\\\\_base.scss 35:32    @import\\n  src\\\\scss\\\\includes\\\\_includes.scss 4:9  @import\\n  src\\\\scss\\\\main.scss 1:9                root stylesheet\\n    at tryRunOrWebpackError (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:87:9)\\n    at __webpack_require_module__ (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5515:12)\\n    at __webpack_require__ (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5462:18)\\n    at C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5550:20\\n    at symbolIterator (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:31:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:21:14)\\n    at C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5437:43\\n    at symbolIterator (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nUndefined variable.\\n   ╷\\n35 │     @media screen and (min-width: $tablet) {\\r\\n   │                                   ^^^^^^^\\n   ╵\\n  src\\\\scss\\\\includes\\\\_base.scss 35:32    @import\\n  src\\\\scss\\\\includes\\\\_includes.scss 4:9  @import\\n  src\\\\scss\\\\main.scss 1:9                root stylesheet\\n    at Object.<anonymous> (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js??ruleSet[1].rules[0].use[1]!C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\src\\\\scss\\\\main.scss:1:7)\\n    at C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:544:10\\n    at Hook.eval [as call] (eval at create (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:16:14)\\n    at C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5517:39\\n    at tryRunOrWebpackError (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:82:7)\\n    at __webpack_require_module__ (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5515:12)\\n    at __webpack_require__ (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5462:18)\\n    at C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5550:20\\n    at symbolIterator (C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n\\nGenerated code for C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js??ruleSet[1].rules[0].use[1]!C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\OSPanel\\\\domains\\\\flexi\\\\wp-content\\\\themes\\\\pointer-theme\\\\src\\\\scss\\\\main.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nUndefined variable.\\\\n   ╷\\\\n35 │     @media screen and (min-width: $tablet) {\\\\r\\\\n   │                                   ^^^^^^^\\\\n   ╵\\\\n  src\\\\\\\\scss\\\\\\\\includes\\\\\\\\_base.scss 35:32    @import\\\\n  src\\\\\\\\scss\\\\\\\\includes\\\\\\\\_includes.scss 4:9  @import\\\\n  src\\\\\\\\scss\\\\\\\\main.scss 1:9                root stylesheet\\\");\");\n\n//# sourceURL=webpack://webpack_theme/./src/scss/main.scss?\n}");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;