webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\harry\\Downloads\\gtau-fe-test\\components\\Listings.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ACTIONS = ['View', 'Reply'];

var formatAsCurrency = function formatAsCurrency(_int) {
  // TODO
  var currency = '$' + _int.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return currency;
};

var Listing = function Listing(props) {
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  });
};

_c = Listing;

var Listings = function Listings(props) {
  _s();

  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(true);
    fetch("http://localhost:3000".concat(props.dataEndpoint)).then(function (res) {
      return res.json();
    }).then(function (data) {
      setList(data);
      setIsLoading(false);
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, formatAsCurrency(2000)), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, isLoading && __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "Loading..."), list && list.map(function (item) {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }, item.title);
  })));
};

_s(Listings, "Zp5P5YTnfESyUvQrVBc5n46GEeQ=");

_c2 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2;

$RefreshReg$(_c, "Listing");
$RefreshReg$(_c2, "Listings");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsImN1cnJlbmN5IiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwicHJvcHMiLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImRhdGFFbmRwb2ludCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEM7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUQsSUFBRyxDQUFDRSxPQUFKLENBQVksQ0FBWixFQUFlQyxPQUFmLENBQXVCLG1CQUF2QixFQUE0QyxLQUE1QyxDQUF2Qjs7QUFDQSxTQUFPRixRQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekI7QUFDQTtBQUVBLFNBQU87QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQUxEOztLQUFNRCxPOztBQU9OLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNELEtBQUQsRUFBVztBQUFBOztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUF3QkUsc0RBQVEsRUFBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NGLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUVDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRSxTQUFLLGdDQUF5QlIsS0FBSyxDQUFDUyxZQUEvQixFQUFMLENBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURiLEVBRUtGLElBRkwsQ0FFVSxVQUFBRyxJQUFJLEVBQUk7QUFDVlQsYUFBTyxDQUFDUyxJQUFELENBQVA7QUFDQVAsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQUxMO0FBTUgsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVGLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNaLGdCQUFnQixDQUFDLElBQUQsQ0FBbkQsQ0FERixFQUVNO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1csU0FBUyxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGxCLEVBRUtGLElBQUksSUFBSUEsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNDLEtBQVYsQ0FESjtBQUdILEdBSlEsQ0FGYixDQUZOLENBREY7QUFhRCxDQS9CRDs7R0FBTWYsUTs7TUFBQUEsUTtBQWlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM1ZDI4ZmY2M2Y1MGQ3NTZmODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIFRPRE9cbiAgY29uc3QgY3VycmVuY3kgPSAnJCcgKyBpbnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKTtcbiAgcmV0dXJuIGN1cnJlbmN5O1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2xpc3RpbmcnPjwvZGl2Pjtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAke3Byb3BzLmRhdGFFbmRwb2ludH1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19oZWFkZXInPntmb3JtYXRBc0N1cnJlbmN5KDIwMDApfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19fZ3JpZCc+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGgxPkxvYWRpbmcuLi48L2gxPn1cbiAgICAgICAgICAgICAge2xpc3QgJiYgbGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==