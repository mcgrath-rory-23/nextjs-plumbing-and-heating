/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CProjects%5Cclinton-plumbing-and-heating%5Cpages%5Cindex.js&page=%2F!":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CProjects%5Cclinton-plumbing-and-heating%5Cpages%5Cindex.js&page=%2F! ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDUHJvamVjdHMlNUNjbGludG9uLXBsdW1iaW5nLWFuZC1oZWF0aW5nJTVDcGFnZXMlNUNpbmRleC5qcyZwYWdlPSUyRiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2ZmZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CProjects%5Cclinton-plumbing-and-heating%5Cpages%5Cindex.js&page=%2F!\n"));

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nfunction Navigation() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-center space-x-8 py-4 bg-gray-100\",\n        children: [\n            \"about\",\n            \"services\",\n            \"gallery\",\n            \"testimonials\",\n            \"contact\"\n        ].map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                whileHover: {\n                    scale: 1.1\n                },\n                whileTap: {\n                    scale: 0.9\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\".concat(link),\n                    className: \"text-blue-600 hover:underline\",\n                    children: link.charAt(0).toUpperCase() + link.slice(1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\components\\\\Navigation.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, link, false, {\n                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\components\\\\Navigation.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\components\\\\Navigation.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFFeEIsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1o7WUFBQztZQUFTO1lBQVk7WUFBVztZQUFnQjtTQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEUsOERBQUNMLGlEQUFNQSxDQUFDTSxHQUFHO2dCQUFDQyxZQUFZO29CQUFFQyxPQUFPO2dCQUFJO2dCQUFHQyxVQUFVO29CQUFFRCxPQUFPO2dCQUFJOzBCQUM3RCw0RUFBQ0U7b0JBQUVDLE1BQU0sSUFBUyxPQUFMTjtvQkFBUUYsV0FBVTs4QkFDNUJFLEtBQUtPLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtSLEtBQUtTLEtBQUssQ0FBQzs7Ozs7O2VBRndCVDs7Ozs7Ozs7OztBQVEvRTtLQVp3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2IwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC04IHB5LTQgYmctZ3JheS0xMDBcIj5cclxuICAgICAge1snYWJvdXQnLCAnc2VydmljZXMnLCAnZ2FsbGVyeScsICd0ZXN0aW1vbmlhbHMnLCAnY29udGFjdCddLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19IGtleT17bGlua30+XHJcbiAgICAgICAgICA8YSBocmVmPXtgIyR7bGlua31gfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICB7bGluay5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxpbmsuc2xpY2UoMSl9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIk5hdmlnYXRpb24iLCJuYXYiLCJjbGFzc05hbWUiLCJtYXAiLCJsaW5rIiwiZGl2Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJhIiwiaHJlZiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col items-center justify-center py-8 bg-blue-600 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-extrabold\",\n                        children: \"Welcome to Clinton Plumbing & Heating\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mt-4\",\n                        children: \"Reliable plumbing services by a dedicated professional\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center p-8 bg-gray-100 flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"services\",\n                        className: \"max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold mb-4\",\n                                children: \"My Services\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: \"I offer a wide range of plumbing services including pipe repairs, leak detection, installation of new fixtures, and more.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"testimonials\",\n                        className: \"max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold mb-4\",\n                                children: \"Customer Testimonials\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: \"See what my customers are saying about my services. I take pride in providing excellent customer service and high-quality work.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"gallery\",\n                        className: \"max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold mb-4\",\n                                children: \"My Work Gallery\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: \"Check out some of the work I have done for my satisfied customers.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        className: \"max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold mb-4\",\n                                children: \"Contact Me\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: \"Have a plumbing issue? Contact me today to schedule a service or get a free estimate.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"flex flex-col items-center py-8 bg-blue-600 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Call me today: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"tel:+123456789\",\n                                className: \"underline\",\n                                children: \"+123456789\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 44\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\xa9 2024 Clinton Plumbing & Heating\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\clinton-plumbing-and-heating\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUVuQyxTQUFTQztJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUEwQjs7Ozs7O2tDQUN4Qyw4REFBQ0c7d0JBQUVILFdBQVU7a0NBQWU7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUNILDhEQUFVQTs7Ozs7MEJBRVgsOERBQUNPO2dCQUFLSixXQUFVOztrQ0FDZCw4REFBQ0s7d0JBQVFDLElBQUc7d0JBQVdOLFdBQVU7OzBDQUMvQiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQThCOzs7Ozs7MENBQzVDLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUs5Qiw4REFBQ0s7d0JBQVFDLElBQUc7d0JBQWVOLFdBQVU7OzBDQUNuQyw4REFBQ087Z0NBQUdQLFdBQVU7MENBQThCOzs7Ozs7MENBQzVDLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUs5Qiw4REFBQ0s7d0JBQVFDLElBQUc7d0JBQVVOLFdBQVU7OzBDQUM5Qiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQThCOzs7Ozs7MENBQzVDLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUs5Qiw4REFBQ0s7d0JBQVFDLElBQUc7d0JBQVVOLFdBQVU7OzBDQUM5Qiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQThCOzs7Ozs7MENBQzVDLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1oQyw4REFBQ1E7Z0JBQU9SLFdBQVU7O2tDQUNoQiw4REFBQ0c7d0JBQUVILFdBQVU7OzRCQUFPOzBDQUFlLDhEQUFDUztnQ0FBRUMsTUFBSztnQ0FBaUJWLFdBQVU7MENBQVk7Ozs7Ozs7Ozs7OztrQ0FDbEYsOERBQUNHO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtLQTlDd0JMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04IGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1leHRyYWJvbGRcIj5XZWxjb21lIHRvIENsaW50b24gUGx1bWJpbmcgJiBIZWF0aW5nPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTRcIj5SZWxpYWJsZSBwbHVtYmluZyBzZXJ2aWNlcyBieSBhIGRlZGljYXRlZCBwcm9mZXNzaW9uYWw8L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPE5hdmlnYXRpb24gLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtOCBiZy1ncmF5LTEwMCBmbGV4LTFcIj5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPVwibWF4LXctNHhsIHctZnVsbCBtYi04IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPk15IFNlcnZpY2VzPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPlxyXG4gICAgICAgICAgICBJIG9mZmVyIGEgd2lkZSByYW5nZSBvZiBwbHVtYmluZyBzZXJ2aWNlcyBpbmNsdWRpbmcgcGlwZSByZXBhaXJzLCBsZWFrIGRldGVjdGlvbiwgaW5zdGFsbGF0aW9uIG9mIG5ldyBmaXh0dXJlcywgYW5kIG1vcmUuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiIGNsYXNzTmFtZT1cIm1heC13LTR4bCB3LWZ1bGwgbWItOCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTRcIj5DdXN0b21lciBUZXN0aW1vbmlhbHM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XHJcbiAgICAgICAgICAgIFNlZSB3aGF0IG15IGN1c3RvbWVycyBhcmUgc2F5aW5nIGFib3V0IG15IHNlcnZpY2VzLiBJIHRha2UgcHJpZGUgaW4gcHJvdmlkaW5nIGV4Y2VsbGVudCBjdXN0b21lciBzZXJ2aWNlIGFuZCBoaWdoLXF1YWxpdHkgd29yay5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZ2FsbGVyeVwiIGNsYXNzTmFtZT1cIm1heC13LTR4bCB3LWZ1bGwgbWItOCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTRcIj5NeSBXb3JrIEdhbGxlcnk8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XHJcbiAgICAgICAgICAgIENoZWNrIG91dCBzb21lIG9mIHRoZSB3b3JrIEkgaGF2ZSBkb25lIGZvciBteSBzYXRpc2ZpZWQgY3VzdG9tZXJzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwibWF4LXctNHhsIHctZnVsbCBtYi04IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkNvbnRhY3QgTWU8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XHJcbiAgICAgICAgICAgIEhhdmUgYSBwbHVtYmluZyBpc3N1ZT8gQ29udGFjdCBtZSB0b2RheSB0byBzY2hlZHVsZSBhIHNlcnZpY2Ugb3IgZ2V0IGEgZnJlZSBlc3RpbWF0ZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktOCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkNhbGwgbWUgdG9kYXk6IDxhIGhyZWY9XCJ0ZWw6KzEyMzQ1Njc4OVwiIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPisxMjM0NTY3ODk8L2E+PC9wPlxyXG4gICAgICAgIDxwPiZjb3B5OyAyMDI0IENsaW50b24gUGx1bWJpbmcgJiBIZWF0aW5nPC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJwIiwibWFpbiIsInNlY3Rpb24iLCJpZCIsImgyIiwiZm9vdGVyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CProjects%5Cclinton-plumbing-and-heating%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);