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

/***/ "./src/client/js/video.js":
/*!********************************!*\
  !*** ./src/client/js/video.js ***!
  \********************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst videoController = document.getElementById(\"videoController\");\nconst psBtn = videoController.querySelector(\"#playPauseBtn\");\nconst volumeBtn = videoController.querySelector(\"#volume\");\nconst volumeRange = videoController.querySelector(\"#volumeRange\");\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst handlePlayAndStop = () => {\n  if (video.paused) {\n    video.play();\n    psBtn.className = \"fas fa-pause\";\n  } else {\n    video.pause();\n    psBtn.className = \"fas fa-play\";\n  }\n};\nconst handleSound = () => {\n  if (video.muted) {\n    video.muted = false;\n    volumeRange.value = volumeValue;\n    volumeBtn.className = \"fas fa-volume-up\";\n  } else {\n    video.muted = true;\n    volumeRange.value = 0;\n    volumeBtn.className = \"fas fa-volume-mute\";\n  }\n};\nconst handleVolume = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    volumeBtn.className = \"fas fa-volume-mute\";\n  }\n  if (value === \"0\") {\n    volumeBtn.className = \"fas fa-volume-off\";\n  } else {\n    volumeBtn.className = \"fas fa-volume-up\";\n  }\n  video.volume = volumeValue = value;\n};\npsBtn.addEventListener(\"click\", handlePlayAndStop);\nvolumeBtn.addEventListener(\"click\", handleSound);\nvolumeRange.addEventListener(\"input\", handleVolume);\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst formatTime = s => new Date(s * 1000).toISOString().substring(11, 19);\nconst totalTimeSet = () => {\n  totalTime.innerText = formatTime(video.duration);\n};\nconst currentTimeSet = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n};\nvideo.addEventListener(\"loadedmetadata\", totalTimeSet);\nvideo.addEventListener(\"timeupdate\", currentTimeSet);\nconst fullScreenBtn = document.getElementById(\"fullScreenBtn\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst handleFullScreen = () => {\n  const fullElement = document.fullscreenElement;\n  if (fullElement) {\n    document.exitFullscreen();\n  } else {\n    videoContainer.requestFullscreen();\n  }\n};\nconst handleFullScreenChange = () => {\n  const fullElement = document.fullscreenElement;\n  if (fullElement) {\n    fullScreenBtn.classList.remove(\"fa-expand\");\n    fullScreenBtn.classList.add(\"fa-compress\");\n  } else {\n    fullScreenBtn.classList.remove(\"fa-compress\");\n    fullScreenBtn.classList.add(\"fa-expand\");\n  }\n};\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\ndocument.addEventListener(\"fullscreenchange\", handleFullScreenChange);\nconst timeline = document.getElementById(\"timeLine\");\nvideo.addEventListener(\"loadedmetadata\", () => timeline.max = Math.floor(video.duration));\nvideo.addEventListener(\"timeupdate\", () => {\n  timeline.value = video.currentTime;\n});\nconst handleTimeline = () => {\n  video.currentTime = timeline.value;\n};\ntimeline.addEventListener(\"input\", handleTimeline);\nconst handleEnded = () => {\n  const {\n    id\n  } = videoContainer.dataset;\n  fetch(`/api/videos/${id}/views`, {\n    method: \"POST\"\n  });\n};\nvideo.addEventListener(\"ended\", handleEnded);\n\n//# sourceURL=webpack://230515yotubeclone/./src/client/js/video.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/video.js"]();
/******/ 	
/******/ })()
;