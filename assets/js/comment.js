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

/***/ "./src/client/js/comment.js":
/*!**********************************!*\
  !*** ./src/client/js/comment.js ***!
  \**********************************/
/***/ (() => {

eval("const video = document.getElementById(\"videoContainer\");\nconst form = document.getElementById(\"commentForm\");\nconst handleClick = e => {\n  e.preventDefault();\n  const comment = document.getElementById(\"comment\");\n  const text = comment.value;\n  const {\n    id\n  } = video.dataset;\n  comment.value = \"\";\n  fetch(`/api/videos/${id}/comment`, {\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    method: \"POST\",\n    body: JSON.stringify({\n      text\n    })\n  });\n};\nif (form) {\n  form.addEventListener(\"submit\", handleClick);\n}\n\n//# sourceURL=webpack://230515yotubeclone/./src/client/js/comment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/comment.js"]();
/******/ 	
/******/ })()
;