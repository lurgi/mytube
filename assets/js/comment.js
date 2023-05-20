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

eval("const video = document.getElementById(\"videoContainer\");\nconst form = document.getElementById(\"commentForm\");\nconst commentContainer = document.getElementById(\"commentContainer\");\nconst addComment = (id, text) => {\n  const firstDiv = document.createElement(\"div\");\n  const secondDiv = document.createElement(\"div\");\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.innerText = \"삭제\";\n  deleteBtn.dataset.id = id;\n  deleteBtn.addEventListener(\"click\", deleteComment);\n  secondDiv.innerText = text;\n  firstDiv.appendChild(secondDiv);\n  firstDiv.appendChild(deleteBtn);\n  commentContainer.prepend(firstDiv);\n};\nconst handleClick = async e => {\n  e.preventDefault();\n  const comment = document.getElementById(\"comment\");\n  const text = comment.value;\n  const {\n    id\n  } = video.dataset;\n  const response = await fetch(`/api/videos/${id}/comment`, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      text\n    })\n  });\n  if (response.status === 201) {\n    comment.value = \"\";\n    const {\n      newCommentId\n    } = await response.json();\n    addComment(newCommentId, text);\n  }\n};\nif (form) {\n  form.addEventListener(\"submit\", handleClick);\n}\nconst commentDelete = document.querySelectorAll(\".commentDelete\");\nconst deleteComment = async e => {\n  const {\n    id: videoId\n  } = video.dataset;\n  const {\n    id: commentId\n  } = e.target.dataset;\n  const response = await fetch(`/api/video/${videoId}/comment/${commentId}/delete`, {\n    method: \"POST\"\n  });\n  if (response.status === 200) {\n    e.target.parentNode.remove();\n  }\n};\nfor (let i = 0; i < commentDelete.length; i++) {\n  commentDelete[i].addEventListener(\"click\", deleteComment);\n}\n\n//# sourceURL=webpack://230515yotubeclone/./src/client/js/comment.js?");

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