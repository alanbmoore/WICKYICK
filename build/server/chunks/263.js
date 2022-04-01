"use strict";
exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AuthServices)
/* harmony export */ });
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const AuthServices = {
    requestAccess: async (data)=>{
        try {
            const url = "api/user/request-access/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    resetPassword: async (data)=>{
        try {
            const url = "api/user/send-password-reset-email/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    changePassword: async (data)=>{
        try {
            const url = "api/user/change-password/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    changeEmail: async (data)=>{
        try {
            const url = "api/user/change-email/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    setPassword: async (data)=>{
        try {
            const url = "api/user/password-reset/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "patch", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    login: async (data)=>{
        try {
            const url = "api/rest-auth/login/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    signup: async (data)=>{
        try {
            const url = "api/user/signup/";
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    },
    sign: async (email, password)=>{},
    submitSocialLogin: async (data, url)=>{
        try {
            const response = await (0,_Axios__WEBPACK_IMPORTED_MODULE_0__/* .makeRequest */ .$)(url, "post", {}, data);
            return response.data;
        } catch (error) {
            var ref;
            throw (ref = error.response) === null || ref === void 0 ? void 0 : ref.data;
        }
    }
};


/***/ }),

/***/ 5169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ isValid)
/* harmony export */ });
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const urlRegex = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
const ShippingZipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const billingZipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const instagramUsernameRegex = /^@(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
const onlyNumbersRegex = /^\d+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const isValid = (value, rules)=>{
    const errors = [];
    if (!rules) return errors;
    if (rules.required && !value.trim()) errors.push("Value is required");
    if (rules.minLength && value.length < rules.minLength) errors.push(`Minimum length required is ${rules.minLength}`);
    if (rules.maxLength && value.length > rules.maxLength) errors.push(`Maximum length required is ${rules.maxLength}`);
    if (rules.email && !emailRegex.test(value)) errors.push("Please enter valid email !");
    if (rules.phoneNumber && !phoneRegex.test(value)) errors.push("Invalid phone number !");
    if (rules.url && !urlRegex.test(value)) errors.push("Invalid Url (e.g: http://www.facebook.com)");
    if (rules.zipCode && !zipCodeRegex.test(value)) errors.push("Invalid  Zip Code");
    if (rules.shippingZipCode && !ShippingZipCodeRegex.test(value)) errors.push("Invalid Shipping Zip Code");
    if (rules.billingZipCode && !billingZipCodeRegex.test(value)) errors.push("Invalid Billing Zip Code");
    if (rules.instagramUsername && !instagramUsernameRegex.test(value)) errors.push("Invalid Username (e.g: @instagram)");
    if (rules.numeric && !onlyNumbersRegex.test(value)) errors.push("Only numeric input is allowed!");
    if (rules.password && !passwordRegex.test(value)) errors.push("Password must contain at least eight characters, one letter, one special character and one number");
    return errors;
};


/***/ })

};
;