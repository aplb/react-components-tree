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
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react2tree = __webpack_require__(1);\n\nvar _react2tree2 = _interopRequireDefault(_react2tree);\n\nvar _types = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// executed in Window of inspected page\nvar welcome = function welcome(e) {\n    if (e.data && e.data.source === 'react-tree-content-script') {\n        var reactTree = (0, _react2tree2.default)(window.__REACT_DEVTOOLS_GLOBAL_HOOK__);\n\n        window.removeEventListener('message', welcome);\n        window.postMessage({\n            source: 'react-backend',\n            payload: {\n                hook: reactTree\n            }\n        }, '*');\n    }\n};\n\nwindow.addEventListener('message', welcome);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYmFja2VuZC5qcz82YmZlIiwid2VicGFjazovLy8/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLy8gZXhlY3V0ZWQgaW4gV2luZG93IG9mIGluc3BlY3RlZCBwYWdlXG5pbXBvcnQgcmVhY3QyVHJlZSBmcm9tICcuLi8uLi9mcm9udGVuZC9yZWFjdDJ0cmVlJ1xuaW1wb3J0IHsgUmVhY3RUcmVlIH0gZnJvbSAnLi4vLi4vZnJvbnRlbmQvdHlwZXMnXG5cbmNvbnN0IHdlbGNvbWUgPSAoZSkgPT4ge1xuICAgIGlmKGUuZGF0YSAmJiBlLmRhdGEuc291cmNlID09PSAncmVhY3QtdHJlZS1jb250ZW50LXNjcmlwdCcpe1xuICAgICAgICBjb25zdCByZWFjdFRyZWU6IFJlYWN0VHJlZSA9IHJlYWN0MlRyZWUod2luZG93Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXylcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdlbGNvbWUpXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBzb3VyY2U6ICdyZWFjdC1iYWNrZW5kJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBob29rOiByZWFjdFRyZWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAnKicpXG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHdlbGNvbWUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYmFja2VuZC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFIQTtBQUlBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQ0NBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _types = __webpack_require__(2);\n\nvar tree = {};\n\n\nvar getReactTree = function getReactTree(hook) {\n    var renderers = hook._renderers;\n    var keys = Object.keys(renderers);\n\n    return keys.length > 0 ? walkTree(renderers[keys[0]]) : {};\n};\n\nvar walkTree = function walkTree(renderer) {\n    var roots = renderer.Mount._instancesByReactRootID;\n    // eslint-disable-next-line prefer-const\n    for (var name in roots) {\n        walkNode(roots[name], tree);\n    }\n\n    return tree;\n};\n\nvar walkNode = function walkNode(component, subTree) {\n    // smth with dom names\n    if (component) {\n        subTree.name = component.getName && component.getName() || component._tag || component._currentElement;\n        if (!subTree.name) {\n            subTree.name = 'Unknown';\n        }\n\n        if (component._renderedComponent && component._currentElement) {\n            var children = [component._renderedComponent];\n            subTree.children = children.map(function (child) {\n                return walkNode(child, {});\n            });\n        }\n        if (component._renderedChildren) {\n            subTree.children = Object.keys(component._renderedChildren).map(function (key) {\n                return walkNode(component._renderedChildren[key], {});\n            });\n        }\n    }\n    return subTree;\n};\n\nexports.default = getReactTree;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9mcm9udGVuZC9yZWFjdDJ0cmVlLmpzPzczNDMiLCJ3ZWJwYWNrOi8vLz9kNDFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBSZWFjdEhvb2sgfSBmcm9tICcuL3R5cGVzJ1xuY29uc3QgdHJlZSA9IHt9XG5cbmNvbnN0IGdldFJlYWN0VHJlZSA9IChob29rOiBSZWFjdEhvb2spID0+IHtcbiAgICBjb25zdCByZW5kZXJlcnMgPSBob29rLl9yZW5kZXJlcnNcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVuZGVyZXJzKVxuXG4gICAgcmV0dXJuIGtleXMubGVuZ3RoID4gMCA/IHdhbGtUcmVlKHJlbmRlcmVyc1trZXlzWzBdXSkgOiB7fVxufVxuXG5jb25zdCB3YWxrVHJlZSA9IChyZW5kZXJlcikgPT4ge1xuICAgIGNvbnN0IHJvb3RzID0gcmVuZGVyZXIuTW91bnQuX2luc3RhbmNlc0J5UmVhY3RSb290SURcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgZm9yKGxldCBuYW1lIGluIHJvb3RzKXtcbiAgICAgICAgd2Fsa05vZGUocm9vdHNbbmFtZV0sIHRyZWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyZWVcbn1cblxuY29uc3Qgd2Fsa05vZGUgPSAoY29tcG9uZW50LCBzdWJUcmVlKSA9PiB7XG4gICAgLy8gc210aCB3aXRoIGRvbSBuYW1lc1xuICAgIGlmKGNvbXBvbmVudCl7XG4gICAgICAgIHN1YlRyZWUubmFtZSA9IGNvbXBvbmVudC5nZXROYW1lICYmIGNvbXBvbmVudC5nZXROYW1lKCkgfHwgY29tcG9uZW50Ll90YWcgfHwgY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudFxuICAgICAgICBpZighc3ViVHJlZS5uYW1lKXtcbiAgICAgICAgICAgIHN1YlRyZWUubmFtZSA9ICdVbmtub3duJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29tcG9uZW50Ll9yZW5kZXJlZENvbXBvbmVudCAmJiBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50KXtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW2NvbXBvbmVudC5fcmVuZGVyZWRDb21wb25lbnRdXG4gICAgICAgICAgICBzdWJUcmVlLmNoaWxkcmVuID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IHdhbGtOb2RlKGNoaWxkLCB7fSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoY29tcG9uZW50Ll9yZW5kZXJlZENoaWxkcmVuKXtcbiAgICAgICAgICAgIHN1YlRyZWUuY2hpbGRyZW4gPSBPYmplY3Qua2V5cyhjb21wb25lbnQuX3JlbmRlcmVkQ2hpbGRyZW4pLm1hcChrZXkgPT4gd2Fsa05vZGUoY29tcG9uZW50Ll9yZW5kZXJlZENoaWxkcmVuW2tleV0sIHt9KSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3ViVHJlZVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSZWFjdFRyZWVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2Zyb250ZW5kL3JlYWN0MnRyZWUuanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);