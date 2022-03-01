"use strict";
exports.id = 64;
exports.ids = [64];
exports.modules = {

/***/ 1844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ makeRequest)
/* harmony export */ });
/* unused harmony export axiosObj */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = "http://127.0.0.1:8000/" || 0;
const axiosObj = axios__WEBPACK_IMPORTED_MODULE_0___default().create();
const makeRequest = (url, method, headers, body, params)=>{
    return new Promise((resolve, reject)=>{
        const token = localStorage.getItem("id_token");
        let updatedHeaders = {
            ...headers
        };
        if (token) updatedHeaders = {
            ...updatedHeaders,
            Authorization: "Token " + token
        };
        axiosObj({
            url: BASE_URL + url,
            method: method,
            headers: updatedHeaders,
            data: body,
            params
        }).then((response)=>{
            resolve(response);
        }).catch((err)=>{
            var ref;
            // Handle error here.
            if ((err === null || err === void 0 ? void 0 : (ref = err.response) === null || ref === void 0 ? void 0 : ref.status) === 403) {
                localStorage.removeItem("id_token");
                next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/");
            }
            reject(err);
        });
    });
};


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


/***/ })

};
;