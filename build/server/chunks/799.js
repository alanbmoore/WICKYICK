"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 3707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const UserService = {
    updateProfile: async (data)=>{
        try {
            const url = "api/user/update/profile/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "put", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    getUserList: async (params)=>{
        try {
            const url = "api/user/users/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "get", {}, {}, params);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    getInstagramData: async (id)=>{
        try {
            const url = `api/user/get-instagram-media/${id}/`;
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "get", {}, {});
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    sendInstagramCode: async (data)=>{
        try {
            const url = "api/user/get-instagram-token/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    }
};


/***/ }),

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K4": () => (/* binding */ showModal),
/* harmony export */   "VG": () => (/* binding */ hideModal),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export modalSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    showModal: false
};
const modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state)=>{
            state.showModal = true;
        },
        hideModal: (state)=>{
            state.showModal = false;
        }
    }
});
const { showModal , hideModal  } = modalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlice.reducer);


/***/ })

};
;