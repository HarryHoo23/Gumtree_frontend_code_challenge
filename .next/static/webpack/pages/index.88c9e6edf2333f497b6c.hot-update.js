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
  // const currency = '$' + int.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return _int.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

var Listing = function Listing(props) {
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, props.item.location)), props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 31
    }
  })));
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
  var renderedList = list && list.length > 0 ? list.map(function (item) {
    return __jsx(Listing, {
      key: item.title,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 16
      }
    });
  }) : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Cannot find your result.");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 38
    }
  }, "Loading...")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsIkxpc3RpbmciLCJwcm9wcyIsIml0ZW0iLCJ0aXRsZSIsInByaWNlIiwibG9jYXRpb24iLCJpbWdVcmwiLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImRhdGFFbmRwb2ludCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlbmRlcmVkTGlzdCIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEM7QUFDQTtBQUNBLFNBQU9BLElBQUcsQ0FBQ0MsY0FBSixDQUFtQixPQUFuQixFQUE0QjtBQUNqQ0MsU0FBSyxFQUFFLFVBRDBCO0FBRWpDQyxZQUFRLEVBQUU7QUFGdUIsR0FBNUIsQ0FBUDtBQUlELENBUEQ7O0FBU0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQWhCLENBREYsRUFFRTtBQUFL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YjZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gY29uc3QgY3VycmVuY3kgPSAnJCcgKyBpbnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKTtcbiAgcmV0dXJuIGludC50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICB9KTtcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgIDxoNT57cHJvcHMuaXRlbS50aXRsZX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbmZvJz5cbiAgICAgICAgICA8aDU+e2Zvcm1hdEFzQ3VycmVuY3kocHJvcHMuaXRlbS5wcmljZSl9PC9oNT5cbiAgICAgICAgICA8cD57cHJvcHMuaXRlbS5sb2NhdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cHJvcHMuaXRlbS5pbWdVcmwgJiYgPGltZyBzcmM9e3Byb3BzLml0ZW0uaW1nVXJsfSBhbHQ9J2ltZycgLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCR7cHJvcHMuZGF0YUVuZHBvaW50fWApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0TGlzdChkYXRhKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyZWRMaXN0ID1cbiAgICBsaXN0ICYmIGxpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgIGxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiA8TGlzdGluZyBrZXk9e2l0ZW0udGl0bGV9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSlcbiAgICApIDogKFxuICAgICAgPGgxPkNhbm5vdCBmaW5kIHlvdXIgcmVzdWx0LjwvaDE+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2hlYWRlcic+XG4gICAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPntsaXN0ID8gbGlzdC5sZW5ndGggOiAwfSByZXN1bHRzPC9zcGFuPiBmb3JcbiAgICAgICAgICA8c3Bhbj5GZXJyYXJpIDwvc3Bhbj5cbiAgICAgICAgICBpbiA8c3Bhbj5BdXN0cmFsaWE8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19ncmlkJz5cbiAgICAgICAgeyFpc0xvYWRpbmcgPyByZW5kZXJlZExpc3QgOiA8aDE+TG9hZGluZy4uLjwvaDE+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=