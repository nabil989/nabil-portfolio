"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/Link"
const Link_namespaceObject = require("next/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: ./components/Footer.js


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "flex flex-col mt-20 justify-center align-middle text-center space-y-5 mb-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-row justify-center align-middle text-center font-bold space-x-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-[gray] transiton ease-linear duration-300",
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "/about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-[gray] transiton ease-linear duration-300",
                                children: "About"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "/projects",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-[gray] transiton ease-linear duration-300",
                                children: "Projects"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "mailto: nabilc377@utexas.edu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-[gray] transiton ease-linear duration-300",
                                children: "Contact"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-row justify-center align-middle space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "https://www.linkedin.com/in/chowdhury-nabil/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                role: "img",
                                viewBox: "0 0 24 24",
                                className: "w-6 h-6 fill-gray-700 hover:fill-black",
                                stroke: "currentColor",
                                strokeWidth: "0",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                        children: "LinkedIn"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "https://github.com/nabil989",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                role: "img",
                                viewBox: "0 0 24 24",
                                className: "w-6 h-6 fill-gray-700 hover:fill-black",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                        children: "GitHub"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "https://www.instagram.com/nabiiiiiiiiiiiil/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                role: "img",
                                className: "w-6 h-6 fill-gray-700 hover:fill-black",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                        children: "Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            href: "mailto: nabilc377@utexas.edu",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                role: "img",
                                viewBox: "0 0 24 24",
                                className: "w-6 h-6 fill-gray-700 hover:fill-black",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                        children: "Gmail"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-500",
                children: "\xa9 2022 Nabil Chowdhury"
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Navbar.js



const Navbar = ({ toggle , isOpen  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex flex-row flex-nowrap justify-start sm:justify-around h-8 w-full py-8 items-center mt-10 sm:mb-24 select-none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                classNameName: "w-1/8 flex hover:scale-105 duration-300 ml-7 mb-7 cursor-pointer sm:hidden select-none",
                onClick: toggle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: `w-8 h-8 ${isOpen ? 'hidden' : ''}`,
                        fill: "currentColor",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 6h16M4 12h16M4 18h16"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: `w-8 h-8 ${!isOpen ? 'hidden' : ''}`,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: toggle,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] hidden lg:block font-medium transiton ease-linear duration-300 text-sm lg:text-base w-1/5 text-center",
                    children: "Nabil Chowdhury"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "hidden sm:flex px-1 font-medium gap-x-1 lg:text-sm text-base flex-row h-12 mx-auto justify-center items-center bg-[#0000000A] border-solid rounded-full ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: " rounded-full py-3 leading hover:text-[gray] transiton ease-linear duration-300 px-3",
                                    style: {
                                        background: router.pathname == "/" ? "white" : ""
                                    },
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3",
                                    style: {
                                        background: router.pathname == "/about" ? "white" : ""
                                    },
                                    children: "About"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/bookmarks",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: " rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3",
                                    style: {
                                        background: router.pathname == "/bookmarks" ? "white" : ""
                                    },
                                    children: "Bookmarks"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/photography",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: " rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3",
                                    style: {
                                        background: router.pathname == "/photography" ? "white" : ""
                                    },
                                    children: "Photography"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: " rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3",
                                    style: {
                                        background: router.pathname == "/projects" ? "white" : ""
                                    },
                                    children: "Projects"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "font-medium hidden lg:block hover:text-[gray] text-sm lg:text-base transiton ease-linear duration-300 px-2 w-1/5 text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "mailto: nabilc377@utexas.edu",
                    className: "",
                    children: "Contact"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Dropdown.js


const Dropdown = ({ isOpen , toggle  })=>{
    return(// grid grid-rows-4 text-center items-center bg-cyan-600
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` flex flex-col space-y-2 ml-7 align-middle justify-center text-left my-auto font-medium text-4xl transition-all duration-500 select-none' ${isOpen ? 'opacity-100 pointer-events-auto' : 'transition-none h-0 -translate-y-2 opacity-0 pointer-events-none'}`,
        onClick: toggle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] transiton ease-linear duration-300 mr-auto",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] transiton ease-linear duration-300 mr-auto",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/bookmarks",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] transiton ease-linear duration-300 mr-auto",
                    children: "Bookmarks"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/photography",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] transiton ease-linear duration-300 mr-auto",
                    children: "Photography"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "hover:text-[gray] transiton ease-linear duration-300 mr-auto",
                    children: "Projects"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Dropdown = (Dropdown);

;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const toggle = ()=>{
        setOpen(!isOpen);
    };
    (0,external_react_.useEffect)(()=>{
        const hideMenu = ()=>{
            if (window.innerWidth > 639 && isOpen) {
                setOpen(false);
            }
        };
        window.addEventListener('resize', hideMenu);
        return ()=>{
            window.removeEventListener('resize', hideMenu);
        };
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                toggle: toggle,
                isOpen: isOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Dropdown, {
                isOpen: isOpen,
                toggle: toggle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: `transition-all duration-500 ${isOpen ? ' opacity-0 h-0 transition-none ease-out ' : 'opacity-100'}`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,63], () => (__webpack_exec__(1458)));
module.exports = __webpack_exports__;

})();