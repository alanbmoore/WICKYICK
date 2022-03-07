"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.558a2afb.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42mOo0y9lYgCCSv1Cxlr90pNAvJ0BCmr1y5igjFI1ID4OVNwOxBOA7P1ALAWWrNYvYQZyXgLxbYTO0vdAfJUBSeASEE+G8YGmrADyDyArmAIU9Ks1KLWvNSgzALITgewWsCSQoQXElkDMC1Q4HYgbgWxRIDYGYm0GoEAVkkk3gSYcQ+LXMNQZlG4D22tQpgAU+AE0/g2QLdRmWM1Ua1C6DQCEKkf11DqdsgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "av": () => (/* binding */ setUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    user: null
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
        }
    }
});
const { setUser  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;