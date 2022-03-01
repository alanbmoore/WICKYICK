"use strict";
exports.id = 707;
exports.ids = [707];
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


/***/ })

};
;