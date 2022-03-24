exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 5187:
/***/ ((module) => {

// Exports
module.exports = {
	"form-control": "SignUp_form-control__xLaMf",
	"btn": "SignUp_btn__3Lpes",
	"signup-form": "SignUp_signup-form__NK0j8",
	"form-input": "SignUp_form-input___qhtB",
	"forgot-password-text": "SignUp_forgot-password-text__R7p7u",
	"submit-btn": "SignUp_submit-btn__VJ_ED",
	"agreement-text": "SignUp_agreement-text__6bmJE",
	"sub-agreement-text": "SignUp_sub-agreement-text__nWRb_",
	"hint-text": "SignUp_hint-text__3hpUM",
	"do-link": "SignUp_do-link__RhJFY",
	"social-btn": "SignUp_social-btn__9pY4P",
	"title": "SignUp_title__nHr_V",
	"form-heading": "SignUp_form-heading__DYr3O",
	"form-group": "SignUp_form-group__GulE5",
	"row": "SignUp_row__Doq9M",
	"or-seperator": "SignUp_or-seperator__AoI30"
};


/***/ }),

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.558a2afb.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42mOo0y9lYgCCSv1Cxlr90pNAvJ0BCmr1y5igjFI1ID4OVNwOxBOA7P1ALAWWrNYvYQZyXgLxbYTO0vdAfJUBSeASEE+G8YGmrADyDyArmAIU9Ks1KLWvNSgzALITgewWsCSQoQXElkDMC1Q4HYgbgWxRIDYGYm0GoEAVkkk3gSYcQ+LXMNQZlG4D22tQpgAU+AE0/g2QLdRmWM1Ua1C6DQCEKkf11DqdsgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AuthServices)
/* harmony export */ });
/* harmony import */ var _Axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);

const AuthServices = {
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

"use strict";
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


/***/ }),

/***/ 9086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const withoutAuth = (WrappedComponent)=>{
    // eslint-disable-next-line react/display-name
    return (props)=>{
        // checks whether we are on client / browser or server.
        if (false) {}
        // If we are on server, return null
        return null;
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withoutAuth);


/***/ })

};
;