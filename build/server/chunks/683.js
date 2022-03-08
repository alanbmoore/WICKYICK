exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 9810:
/***/ ((module) => {

// Exports
module.exports = {
	"client-card": "Client-Card_client-card__2Rl9c",
	"profile-pic": "Client-Card_profile-pic__ySaOW",
	"user-icon": "Client-Card_user-icon__J2MlH",
	"card-body": "Client-Card_card-body__I76EE",
	"agent-name": "Client-Card_agent-name__2fnbx",
	"agent-followers": "Client-Card_agent-followers__sF_vq",
	"agent-location": "Client-Card_agent-location__LHMim"
};


/***/ }),

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/userIcon.6e694112.jpeg","height":965,"width":965,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApIP/xAAbEAACAQUAAAAAAAAAAAAAAAABAxIABBMUI//aAAgBAQABPwA3yd4O6Y4Rr//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});

/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9810);
/* harmony import */ var _styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_userIcon_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4617);





const CustomCard = ({ image , title , description , subDescription , width , height  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["client-card"]),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {
                style: {
                    width: "100%",
                    borderRadius: "18px",
                    border: 0
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        className: !image ? (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["profile-pic"]) + " " + (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["user-icon"]) : (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["profile-pic"]),
                        src: image ? image : _public_static_images_userIcon_jpeg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: "Picture of the agent",
                        width: width,
                        height: height
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {
                        className: (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["card-body"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
                                className: (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["agent-name"]),
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Text, {
                                className: (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["agent-followers"]) + " mb-0",
                                children: description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Text, {
                                className: (_styles_Client_Card_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["agent-location"]),
                                children: subDescription
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCard);


/***/ })

};
;