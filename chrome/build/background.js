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

	eval("'use strict';\n\n/* global chrome */\n\nvar ports = {};\n\nchrome.runtime.onConnect.addListener(function (port) {\n    var name = void 0;\n    var tab = void 0;\n\n    if (isNumeric(port.name)) {\n        installContentScript(+port.name);\n        name = 'devtools';\n        tab = port.name;\n    } else {\n        name = 'react-tree-content-script';\n        tab = port.sender.tab.id;\n    }\n\n    if (!ports[tab]) {\n        ports[tab] = {\n            devtools: null,\n            'react-tree-content-script': null\n        };\n    }\n\n    ports[tab][name] = port;\n\n    if (ports[tab].devtools && ports[tab]['react-tree-content-script']) {\n        doublePipe(ports[tab].devtools, ports[tab]['react-tree-content-script']);\n    }\n});\n\nfunction doublePipe(devtools, contentScript) {\n    contentScript.onMessage.addListener(onMsgOne);\n    devtools.onMessage.addListener(onMsgTwo);\n    function onMsgOne(message) {\n        devtools.postMessage(message);\n    }\n    function onMsgTwo(message) {\n        contentScript.postMessage(message);\n    }\n    function shutdown() {\n        devtools.onMessage.removeListener(onMsgTwo);\n        contentScript.onMessage.removeListener(onMsgOne);\n        devtools.disconnect();\n        contentScript.disconnect();\n    }\n\n    devtools.onDisconnect.addListener(shutdown);\n    contentScript.onDisconnect.addListener(shutdown);\n}\n\nfunction installContentScript(tabId) {\n    chrome.tabs.executeScript(tabId, { file: '/build/contentScript.js' }, function () {});\n}\n\nfunction isNumeric(str) {\n    return +str + '' === str;\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYmFja2dyb3VuZC5qcz85NjE2Iiwid2VicGFjazovLy8/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBjaHJvbWUgKi9cblxuY29uc3QgcG9ydHMgPSB7fVxuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocG9ydCl7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgdGFiXG5cbiAgICBpZihpc051bWVyaWMocG9ydC5uYW1lKSl7XG4gICAgICAgIGluc3RhbGxDb250ZW50U2NyaXB0KCtwb3J0Lm5hbWUpXG4gICAgICAgIG5hbWUgPSAnZGV2dG9vbHMnXG4gICAgICAgIHRhYiA9IHBvcnQubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSAncmVhY3QtdHJlZS1jb250ZW50LXNjcmlwdCdcbiAgICAgICAgdGFiID0gcG9ydC5zZW5kZXIudGFiLmlkXG4gICAgfVxuXG4gICAgaWYoIXBvcnRzW3RhYl0pe1xuICAgICAgICBwb3J0c1t0YWJdID0ge1xuICAgICAgICAgICAgZGV2dG9vbHM6IG51bGwsXG4gICAgICAgICAgICAncmVhY3QtdHJlZS1jb250ZW50LXNjcmlwdCc6IG51bGwsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3J0c1t0YWJdW25hbWVdID0gcG9ydFxuXG4gICAgaWYocG9ydHNbdGFiXS5kZXZ0b29scyAmJiBwb3J0c1t0YWJdWydyZWFjdC10cmVlLWNvbnRlbnQtc2NyaXB0J10pe1xuICAgICAgICBkb3VibGVQaXBlKHBvcnRzW3RhYl0uZGV2dG9vbHMsIHBvcnRzW3RhYl1bJ3JlYWN0LXRyZWUtY29udGVudC1zY3JpcHQnXSlcbiAgICB9XG59KVxuXG5cblxuZnVuY3Rpb24gZG91YmxlUGlwZShkZXZ0b29scywgY29udGVudFNjcmlwdCl7XG4gICAgY29udGVudFNjcmlwdC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25Nc2dPbmUpXG4gICAgZGV2dG9vbHMub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTXNnVHdvKVxuICAgIGZ1bmN0aW9uIG9uTXNnT25lKG1lc3NhZ2Upe1xuICAgICAgICBkZXZ0b29scy5wb3N0TWVzc2FnZShtZXNzYWdlKVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1zZ1R3byhtZXNzYWdlKXtcbiAgICAgICAgY29udGVudFNjcmlwdC5wb3N0TWVzc2FnZShtZXNzYWdlKVxuICAgIH1cbiAgICBmdW5jdGlvbiBzaHV0ZG93bigpe1xuICAgICAgICBkZXZ0b29scy5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25Nc2dUd28pXG4gICAgICAgIGNvbnRlbnRTY3JpcHQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG9uTXNnT25lKVxuICAgICAgICBkZXZ0b29scy5kaXNjb25uZWN0KClcbiAgICAgICAgY29udGVudFNjcmlwdC5kaXNjb25uZWN0KClcbiAgICB9XG5cbiAgICBkZXZ0b29scy5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoc2h1dGRvd24pXG4gICAgY29udGVudFNjcmlwdC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoc2h1dGRvd24pXG59XG5cbmZ1bmN0aW9uIGluc3RhbGxDb250ZW50U2NyaXB0KHRhYklkOiBudW1iZXIpe1xuICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtmaWxlOiAnL2J1aWxkL2NvbnRlbnRTY3JpcHQuanMnfSwgZnVuY3Rpb24oKXt9KVxufVxuXG5mdW5jdGlvbiBpc051bWVyaWMoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gK3N0ciArICcnID09PSBzdHJcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);