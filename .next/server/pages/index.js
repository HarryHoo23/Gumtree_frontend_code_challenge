module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\harry\\Downloads\\gtau-fe-test\\components\\Listings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ACTIONS = ['View', 'Reply'];

const formatAsCurrency = int => {
  // Formate integer to currency Format.
  return int ? int.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }).split('.')[0] : 'Wanted';
};

const Listing = props => {
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    className: "listing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, props.item.location)), props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: props.item.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, props.item.description), __jsx("div", {
    className: "button-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, ACTIONS.map((btn, index) => {
    return __jsx("button", {
      key: index,
      className: "btn",
      onClick: () => console.log(`${btn}: ${props.item.title}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, btn);
  }))));
};

const Listings = props => {
  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const fetchData = async () => {
    setIsLoading(true); //Fetch data from api endpoint.

    try {
      const response = await fetch(`http://localhost:3000${props.dataEndpoint}`);
      const data = await response.json();
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }; // fetch data when Listing page is first rendered.  


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, []); // If list exist and the list length is more than 0 then render the list, otherwise show error message.

  const renderedList = list && list.length > 0 ? list.map(item => {
    return __jsx(Listing, {
      key: item.title,
      item: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 16
      }
    });
  }) : __jsx("div", {
    className: "error__result",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Cannot find your result."));
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, " Ferrari "), "in ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("div", {
    className: "error__result",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Loading..."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Listings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Listings */ "./components/Listings.js");
var _jsxFileName = "C:\\Users\\harry\\Downloads\\gtau-fe-test\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LISTINGS_ENDPOINT = "/api/listings";
function Home() {
  return __jsx("div", {
    className: "home__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "GTAU Front-End Test"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/variables.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/globals.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/home.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/listings.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "home__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_components_Listings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataEndpoint: LISTINGS_ENDPOINT,
    keyword: "Ferrari",
    location: "Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFDVElPTlMiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5Iiwic3BsaXQiLCJMaXN0aW5nIiwicHJvcHMiLCJpdGVtIiwidGl0bGUiLCJwcmljZSIsImxvY2F0aW9uIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJidG4iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJMaXN0aW5ncyIsImxpc3QiLCJzZXRMaXN0IiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YUVuZHBvaW50IiwiZGF0YSIsImpzb24iLCJlcnJvciIsInVzZUVmZmVjdCIsInJlbmRlcmVkTGlzdCIsImxlbmd0aCIsIkxJU1RJTkdTX0VORFBPSU5UIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFJQyxHQUFELElBQVM7QUFDaEM7QUFDQSxTQUFPQSxHQUFHLEdBQ05BLEdBQUcsQ0FDQUMsY0FESCxDQUNrQixPQURsQixFQUMyQjtBQUN2QkMsU0FBSyxFQUFFLFVBRGdCO0FBRXZCQyxZQUFRLEVBQUU7QUFGYSxHQUQzQixFQUtHQyxLQUxILENBS1MsR0FMVCxFQUtjLENBTGQsQ0FETSxHQU9OLFFBUEo7QUFRRCxDQVZEOztBQVlBLE1BQU1DLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQ3pCO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQWxDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtULGdCQUFnQixDQUFDTyxLQUFLLENBQUNDLElBQU4sQ0FBV0UsS0FBWixDQUFyQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJSCxLQUFLLENBQUNDLElBQU4sQ0FBV0csUUFBZixDQUZGLENBRkYsRUFNR0osS0FBSyxDQUFDQyxJQUFOLENBQVdJLE1BQVgsSUFDQztBQUFLLE9BQUcsRUFBRUwsS0FBSyxDQUFDQyxJQUFOLENBQVdJLE1BQXJCO0FBQTZCLE9BQUcsRUFBRUwsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVVFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkYsS0FBSyxDQUFDQyxJQUFOLENBQVdLLFdBQXZDLENBVkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsT0FBTyxDQUFDZSxHQUFSLENBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQzNCLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxlQUFTLEVBQUMsS0FGWjtBQUdFLGFBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFSCxHQUFJLEtBQUlSLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFNLEVBQXhDLENBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR00sR0FMSCxDQURGO0FBU0QsR0FWQSxDQURILENBWEYsQ0FERixDQURGO0FBNkJELENBakNEOztBQW1DQSxNQUFNSSxRQUFRLEdBQUlaLEtBQUQsSUFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU07QUFBQSxPQUFDYSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsRUFBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNRyxTQUFTLEdBQUcsWUFBWTtBQUM1QkQsZ0JBQVksQ0FBQyxJQUFELENBQVosQ0FENEIsQ0FFNUI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLHdCQUF1QnBCLEtBQUssQ0FBQ3FCLFlBQWEsRUFEakIsQ0FBNUI7QUFHQSxZQUFNQyxJQUFJLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQW5CO0FBQ0FULGFBQU8sQ0FBQ1EsSUFBRCxDQUFQO0FBQ0FMLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FQRCxDQU9FLE9BQU9PLEtBQVAsRUFBYztBQUNkZCxhQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBWjtBQUNEO0FBQ0YsR0FiRCxDQVIwQixDQXVCMUI7OztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZFAsYUFBUztBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQsQ0F4QjBCLENBNEIxQjs7QUFDQSxRQUFNUSxZQUFZLEdBQ2hCYixJQUFJLElBQUlBLElBQUksQ0FBQ2MsTUFBTCxHQUFjLENBQXRCLEdBQ0VkLElBQUksQ0FBQ04sR0FBTCxDQUFVTixJQUFELElBQVU7QUFDakIsV0FBTyxNQUFDLE9BQUQ7QUFBUyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBbkI7QUFBMEIsVUFBSSxFQUFFRCxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZELENBREYsR0FLRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBTko7QUFXQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ZLElBQUksR0FBR0EsSUFBSSxDQUFDYyxNQUFSLEdBQWlCLENBQTVCLGFBREYsVUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLFNBR0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFITCxDQUZGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ1gsU0FBRCxHQUNDVSxZQURELEdBR0M7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQUpKLENBVEYsQ0FERjtBQXFCRCxDQTdERDs7QUErRGVkLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUVBLE1BQU1nQixpQkFBaUIsR0FBRyxlQUExQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDM0IsU0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG9CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxrQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsZUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLEVBVUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUNJLGdCQUFZLEVBQUVELGlCQURsQjtBQUVJLFdBQU8sRUFBQyxTQUZaO0FBR0ksWUFBUSxFQUFDLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosQ0FESjtBQW9CSCxDOzs7Ozs7Ozs7OztBQzFCRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIEZvcm1hdGUgaW50ZWdlciB0byBjdXJyZW5jeSBGb3JtYXQuXG4gIHJldHVybiBpbnRcbiAgICA/IGludFxuICAgICAgICAudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNwbGl0KCcuJylbMF1cbiAgICA6ICdXYW50ZWQnO1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntwcm9wcy5pdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWluZm8nPlxuICAgICAgICAgIDxoMz57Zm9ybWF0QXNDdXJyZW5jeShwcm9wcy5pdGVtLnByaWNlKX08L2gzPlxuICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcm9wcy5pdGVtLmltZ1VybCAmJiAoXG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLml0ZW0uaW1nVXJsfSBhbHQ9e3Byb3BzLml0ZW0udGl0bGV9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiBTaG93IGltYWdlIGlmIGltYWdlIHVybCBleGlzdHMgKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ncm91cCc+XG4gICAgICAgICAge0FDVElPTlMubWFwKChidG4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0bidcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhgJHtidG59OiAke3Byb3BzLml0ZW0udGl0bGV9YCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnRufVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gIC8vIHRoZW4gcmVuZGVyIHRoZSByZXN1bHQgYXMgc2V0IG9mIGxpc3RpbmdzIGFzIHBlciB0aGUgZGVzaWduIG1vY2tzXG4gIC8vIGNoZWNrIHByb3BzIHBhc3NlZCBpbiBmcm9tIHBhcmVudCBmb3Igb3RoZXIgdmFsdWVzIHRoYXQgeW91IG1heSBuZWVkIHRvIHVzZVxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgLy9GZXRjaCBkYXRhIGZyb20gYXBpIGVuZHBvaW50LlxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwJHtwcm9wcy5kYXRhRW5kcG9pbnR9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRMaXN0KGRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBmZXRjaCBkYXRhIHdoZW4gTGlzdGluZyBwYWdlIGlzIGZpcnN0IHJlbmRlcmVkLiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICAvLyBJZiBsaXN0IGV4aXN0IGFuZCB0aGUgbGlzdCBsZW5ndGggaXMgbW9yZSB0aGFuIDAgdGhlbiByZW5kZXIgdGhlIGxpc3QsIG90aGVyd2lzZSBzaG93IGVycm9yIG1lc3NhZ2UuXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9XG4gICAgbGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPExpc3Rpbmcga2V5PXtpdGVtLnRpdGxlfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvcl9fcmVzdWx0Jz5cbiAgICAgICAgPGgxPkNhbm5vdCBmaW5kIHlvdXIgcmVzdWx0LjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19faGVhZGVyJz5cbiAgICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4+e2xpc3QgPyBsaXN0Lmxlbmd0aCA6IDB9IHJlc3VsdHM8L3NwYW4+IGZvclxuICAgICAgICAgIDxzcGFuPiBGZXJyYXJpIDwvc3Bhbj5cbiAgICAgICAgICBpbiA8c3Bhbj5BdXN0cmFsaWE8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19ncmlkJz5cbiAgICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgcmVuZGVyZWRMaXN0XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycm9yX19yZXN1bHQnPlxuICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaXN0aW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0aW5nc1wiO1xuXG5jb25zdCBMSVNUSU5HU19FTkRQT0lOVCA9IFwiL2FwaS9saXN0aW5nc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R1RBVSBGcm9udC1FbmQgVGVzdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy92YXJpYWJsZXMuY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvZ2xvYmFscy5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9ob21lLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2xpc3RpbmdzLmNzc1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxMaXN0aW5nc1xuICAgICAgICAgICAgICAgICAgICBkYXRhRW5kcG9pbnQ9e0xJU1RJTkdTX0VORFBPSU5UfVxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkPVwiRmVycmFyaVwiXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPVwiQXVzdHJhbGlhXCJcbiAgICAgICAgICAgICAgICA+PC9MaXN0aW5ncz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9