/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\n/* global chrome */\n\nvar port = chrome.runtime.connect({\n    name: 'react-tree-content-script'\n});\n\nvar handleMessageFromDevtools = function handleMessageFromDevtools(message) {\n    window.postMessage({\n        source: 'react-tree-content-script',\n        message: message\n    }, '*');\n};\n\nvar handleMessageFromPage = function handleMessageFromPage(e) {\n    if (e.data && e.data.source === 'react-backend') {\n        port.postMessage(e.data.payload);\n    }\n};\n\nwindow.addEventListener('message', handleMessageFromPage);\n\nport.onMessage.addListener(handleMessageFromDevtools);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29udGVudFNjcmlwdC5qcz9jZTVmIiwid2VicGFjazovLy8/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKiBnbG9iYWwgY2hyb21lICovXG5cbmNvbnN0IHBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHtcbiAgICBuYW1lOiAncmVhY3QtdHJlZS1jb250ZW50LXNjcmlwdCcsXG59KVxuXG5jb25zdCBoYW5kbGVNZXNzYWdlRnJvbURldnRvb2xzID0gKG1lc3NhZ2UpID0+IHtcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBzb3VyY2U6ICdyZWFjdC10cmVlLWNvbnRlbnQtc2NyaXB0JyxcbiAgICAgICAgbWVzc2FnZSxcbiAgICB9LCAnKicpXG59XG5cbmNvbnN0IGhhbmRsZU1lc3NhZ2VGcm9tUGFnZSA9IChlKSA9PiB7XG4gICAgaWYoZS5kYXRhICYmIGUuZGF0YS5zb3VyY2UgPT09ICdyZWFjdC1iYWNrZW5kJyl7XG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoZS5kYXRhLnBheWxvYWQpXG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2VGcm9tUGFnZSlcblxucG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoaGFuZGxlTWVzc2FnZUZyb21EZXZ0b29scylcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbnRlbnRTY3JpcHQuanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTtBQUNBO0FDQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);