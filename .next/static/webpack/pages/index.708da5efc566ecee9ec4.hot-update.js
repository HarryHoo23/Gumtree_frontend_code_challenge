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
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.item.title, props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
        lineNumber: 46,
        columnNumber: 16
      }
    });
  }) : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Cannot find your result.");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsImN1cnJlbmN5IiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwicHJvcHMiLCJpdGVtIiwidGl0bGUiLCJpbWdVcmwiLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImRhdGFFbmRwb2ludCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlbmRlcmVkTGlzdCIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEM7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUQsSUFBRyxDQUFDRSxPQUFKLENBQVksQ0FBWixFQUFlQyxPQUFmLENBQXVCLG1CQUF2QixFQUE0QyxLQUE1QyxDQUF2Qjs7QUFDQSxTQUFPRixRQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekI7QUFDQTtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQURkLEVBRUdGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxNQUFYLElBQXFCO0FBQUssT0FBRyxFQUFFSCxLQUFLLENBQUNDLElBQU4sQ0FBV0UsTUFBckI7QUFBNkIsT0FBRyxFQUFDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGeEIsQ0FERixDQURGO0FBUUQsQ0FaRDs7S0FBTUosTzs7QUFjTixJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSixLQUFELEVBQVc7QUFBQTs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBd0JLLHNEQUFRLEVBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWtDRixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPRyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsU0FBSyxnQ0FBeUJYLEtBQUssQ0FBQ1ksWUFBL0IsRUFBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RULGFBQU8sQ0FBQ1MsSUFBRCxDQUFQO0FBQ0FQLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FMSDtBQU1ELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxNQUFNUSxZQUFZLEdBQ2hCWCxJQUFJLElBQUlBLElBQUksQ0FBQ1ksTUFBTCxHQUFjLENBQXRCLEdBQ0VaLElBQUksQ0FBQ2EsR0FBTCxDQUFTLFVBQUNsQixJQUFELEVBQVU7QUFDakIsV0FBTyxNQUFDLE9BQUQ7QUFBUyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsS0FBbkI7QUFBMEIsVUFBSSxFQUFFRCxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZELENBREYsR0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU5KO0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSyxJQUFJLEdBQUdBLElBQUksQ0FBQ1ksTUFBUixHQUFpQixDQUE1QixhQURGLFVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixTQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEwsQ0FGRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNWLFNBQUQsR0FBYVMsWUFBYixHQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUQvQixDQVRGLENBREY7QUFlRCxDQTFDRDs7R0FBTWIsUTs7TUFBQUEsUTtBQTRDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA4ZGE1ZWZjNTY2ZWNlZTllYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFDVElPTlMgPSBbJ1ZpZXcnLCAnUmVwbHknXTtcblxuY29uc3QgZm9ybWF0QXNDdXJyZW5jeSA9IChpbnQpID0+IHtcbiAgLy8gVE9ET1xuICBjb25zdCBjdXJyZW5jeSA9ICckJyArIGludC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcZCg/PShcXGR7M30pK1xcLikvZywgJyQmLCcpO1xuICByZXR1cm4gY3VycmVuY3k7XG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIGNvbXBvbmVudCB3aGljaCByZW5kZXJzIGFuIGluZGl2aWR1YWwgbGlzdGluZyB0byB0aGUgcGFnZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmcnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICB7cHJvcHMuaXRlbS50aXRsZX1cbiAgICAgICAge3Byb3BzLml0ZW0uaW1nVXJsICYmIDxpbWcgc3JjPXtwcm9wcy5pdGVtLmltZ1VybH0gYWx0PSdpbWcnIC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gIC8vIHRoZW4gcmVuZGVyIHRoZSByZXN1bHQgYXMgc2V0IG9mIGxpc3RpbmdzIGFzIHBlciB0aGUgZGVzaWduIG1vY2tzXG4gIC8vIGNoZWNrIHByb3BzIHBhc3NlZCBpbiBmcm9tIHBhcmVudCBmb3Igb3RoZXIgdmFsdWVzIHRoYXQgeW91IG1heSBuZWVkIHRvIHVzZVxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAke3Byb3BzLmRhdGFFbmRwb2ludH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldExpc3QoZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9XG4gICAgbGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPExpc3Rpbmcga2V5PXtpdGVtLnRpdGxlfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxoMT5DYW5ub3QgZmluZCB5b3VyIHJlc3VsdC48L2gxPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19oZWFkZXInPlxuICAgICAgICA8aDE+U2VhcmNoIFJlc3VsdHM8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj57bGlzdCA/IGxpc3QubGVuZ3RoIDogMH0gcmVzdWx0czwvc3Bhbj4gZm9yXG4gICAgICAgICAgPHNwYW4+RmVycmFyaSA8L3NwYW4+XG4gICAgICAgICAgaW4gPHNwYW4+QXVzdHJhbGlhPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19fZ3JpZCc+XG4gICAgICAgIHshaXNMb2FkaW5nID8gcmVuZGVyZWRMaXN0IDogPGgxPkxvYWRpbmcuLi48L2gxPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9