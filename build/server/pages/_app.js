"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,366];
exports.modules = {

/***/ 9617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/loadingSlice.ts
var loadingSlice = __webpack_require__(6487);
;// CONCATENATED MODULE: ./store/index.ts


/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        loading: loadingSlice/* default */.ZP
    }
}));

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./pages/app.tsx
var app = __webpack_require__(8163);
;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
            store: store,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(app["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                    hideProgressBar: true
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "WickYick"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "WickYick"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/logo.png"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                ";"
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QP": () => (/* binding */ showLoading),
/* harmony export */   "Zk": () => (/* binding */ hideLoading),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export loadingSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    loading: false
};
const loadingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "loading",
    initialState,
    reducers: {
        showLoading: (state)=>{
            state.loading = true;
        },
        hideLoading: (state)=>{
            state.loading = false;
        }
    }
});
const { showLoading , hideLoading  } = loadingSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [163], () => (__webpack_exec__(9617)));
module.exports = __webpack_exports__;

})();