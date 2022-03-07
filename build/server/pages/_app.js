(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4031:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-bar": "Navbar_nav-bar__F_J5I",
	"title": "Navbar_title__J_BSP",
	"nav-links": "Navbar_nav-links__KCcqo",
	"last-child": "Navbar_last-child__exvpy",
	"signup-btn": "Navbar_signup-btn__CrtJj",
	"user-avatar": "Navbar_user-avatar__eSj95",
	"user-profile": "Navbar_user-profile__efSW9"
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

/***/ 7134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: ./store/userSlice.ts
var userSlice = __webpack_require__(5072);
;// CONCATENATED MODULE: ./store/index.ts



/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        loading: loadingSlice/* default */.ZP,
        user: userSlice/* default */.ZP
    }
}));

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(4031);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/static/images/logo.png
var logo = __webpack_require__(6119);
// EXTERNAL MODULE: ./services/isLoggedIn.tsx
var isLoggedIn = __webpack_require__(1602);
// EXTERNAL MODULE: ./public/static/images/userIcon.jpeg
var userIcon = __webpack_require__(4617);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./components/navbar/index.tsx













const AppNavbar = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: sidebarOpen , 1: setSidebarOpen  } = (0,external_react_.useState)(false);
    const { user  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const { 0: userData , 1: setUserData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        !userData && setUserData((0,isLoggedIn/* getUser */.PR)());
    });
    (0,external_react_.useEffect)(()=>{
        user && setUserData(user);
    }, [
        user
    ]);
    const onSetSidebarOpen = (open)=>{
        setSidebarOpen(open);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar, {
            className: (Navbar_module_default())["nav-bar"],
            bg: "white",
            expand: "lg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Brand, {
                    className: (Navbar_module_default()).title,
                    onClick: ()=>router.push("/")
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: logo/* default */.Z,
                            width: "30px",
                            height: "30px",
                            alt: "logo image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "px-2",
                            children: "WickYick"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
                    "aria-controls": "navbarScroll"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                    id: "navbarScroll",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                        className: "me-auto my-2 my-lg-0 w-100 justify-content-end",
                        style: {
                            maxHeight: "100px"
                        },
                        navbarScroll: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                className: (Navbar_module_default())["nav-links"],
                                href: "#action1",
                                children: "Advertise"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                                href: "mailto:alanbmoore@wickyick.com?subject=Help: ",
                                className: (Navbar_module_default())["nav-links"],
                                children: "Help"
                            }),
                            !(0,isLoggedIn/* isLogin */.bg)() ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Navbar_module_default())["nav-links"] + " " + (Navbar_module_default())["last-child"],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/login",
                                            passHref: true,
                                            children: "Login"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        onClick: ()=>router.push("/signup")
                                        ,
                                        className: (Navbar_module_default())["signup-btn"],
                                        children: "Sign Up"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: (0,isLoggedIn/* isLogin */.bg)() && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Navbar_module_default())["user-profile"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item dropdown nav-user",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                                                    className: "",
                                                    as: "span",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        onClick: ()=>{},
                                                        className: "nav-link",
                                                        id: "navbarDropdownMenuLink2",
                                                        "aria-haspopup": "true",
                                                        "aria-expanded": "false",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            className: (Navbar_module_default())["user-avatar"],
                                                            width: "40px",
                                                            height: "40px",
                                                            src: userData && userData.picture ? userData.picture : userIcon/* default */.Z,
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown.Menu, {
                                                    className: "dropdown-menu dropdown-menu-right nav-user-dropdown",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                            className: "nav-user-info",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                className: "mb-0 text-white nav-user-name",
                                                                children: [
                                                                    userData && userData.first_name,
                                                                    " ",
                                                                    userData && userData.last_name
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/settings",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "dropdown-item",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoIosSettings, {
                                                                            fontSize: "20px"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "px-2",
                                                                            children: "Setting"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "javascript:void(0)",
                                                                onClick: isLoggedIn/* logout */.kS,
                                                                className: "dropdown-item",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineLogout, {}),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "px-2",
                                                                        children: "Logout"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar = (AppNavbar);

;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
            store: store,
            children: [
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
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "bg": () => (/* binding */ isLogin),
/* harmony export */   "PR": () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const TOKEN_KEY = "id_token";
const USER_KEY = "user";
const logout = ()=>{
    localStorage.removeItem(TOKEN_KEY);
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push("/");
};
const isLogin = ()=>{
    if (false) {}
    return false;
};
const getUser = ()=>{
    if (false) {}
    return false;
};


/***/ }),

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,882], () => (__webpack_exec__(7134)));
module.exports = __webpack_exports__;

})();