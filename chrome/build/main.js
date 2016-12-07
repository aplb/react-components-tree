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

	eval("'use strict';\n\n/*  global chrome */\n\nvar panelCreated = false;\n\nfunction createPanelIfReactLoaded() {\n    if (panelCreated) {\n        return;\n    }\n\n    chrome.devtools.inspectedWindow.eval('!!(\\n        Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length || window.React\\n    )', function (pageHasReact, exception) {\n        if (!pageHasReact || panelCreated) {\n            return;\n        }\n\n        clearInterval(loadCheckInterval);\n        panelCreated = true;\n\n        chrome.devtools.panels.create('ReactTree', '', 'panel.html', function (panel) {});\n    });\n}\n\nchrome.devtools.network.onNavigated.addListener(function () {\n    createPanelIfReactLoaded();\n});\n\nvar loadCheckInterval = setInterval(function () {\n    createPanelIfReactLoaded();\n}, 1000);\n\ncreatePanelIfReactLoaded();//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIiwid2VicGFjazovLy8/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmbG93XG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyogIGdsb2JhbCBjaHJvbWUgKi9cblxudmFyIHBhbmVsQ3JlYXRlZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIGNyZWF0ZVBhbmVsSWZSZWFjdExvYWRlZCgpIHtcbiAgICBpZihwYW5lbENyZWF0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2hyb21lLmRldnRvb2xzLmluc3BlY3RlZFdpbmRvdy5ldmFsKGAhIShcbiAgICAgICAgT2JqZWN0LmtleXMod2luZG93Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5fcmVuZGVyZXJzKS5sZW5ndGggfHwgd2luZG93LlJlYWN0XG4gICAgKWAsIGZ1bmN0aW9uKHBhZ2VIYXNSZWFjdCwgZXhjZXB0aW9uKXtcbiAgICAgICAgaWYoICFwYWdlSGFzUmVhY3QgfHwgcGFuZWxDcmVhdGVkKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2FkQ2hlY2tJbnRlcnZhbClcbiAgICAgICAgcGFuZWxDcmVhdGVkID0gdHJ1ZVxuXG4gICAgICAgIGNocm9tZS5kZXZ0b29scy5wYW5lbHMuY3JlYXRlKCdSZWFjdFRyZWUnLCAnJywgJ3BhbmVsLmh0bWwnLCBmdW5jdGlvbihwYW5lbCl7XG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jaHJvbWUuZGV2dG9vbHMubmV0d29yay5vbk5hdmlnYXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbigpe1xuICAgIGNyZWF0ZVBhbmVsSWZSZWFjdExvYWRlZCgpXG59KVxuXG52YXIgbG9hZENoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIGNyZWF0ZVBhbmVsSWZSZWFjdExvYWRlZCgpXG59LCAxMDAwKVxuXG5jcmVhdGVQYW5lbElmUmVhY3RMb2FkZWQoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21haW4uanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDQ0E7QURDQTtBQUNBO0FBQ0E7QUFDQTtBQ0dBO0FEQ0E7QUFDQTtBQUNBO0FBQ0E7QUNDQTtBQUNBO0FEQ0E7QUNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);