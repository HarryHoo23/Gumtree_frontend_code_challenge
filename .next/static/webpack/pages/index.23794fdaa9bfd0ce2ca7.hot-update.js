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
      lineNumber: 15,
      columnNumber: 10
    }
  }, props.item.title);
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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 61
    }
  }, "Ferrari"), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, !isLoading ? list && list.map(function (item) {
    return __jsx(Listing, {
      key: item.title,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 20
      }
    });
  }) : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsImN1cnJlbmN5IiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwicHJvcHMiLCJpdGVtIiwidGl0bGUiLCJMaXN0aW5ncyIsInVzZVN0YXRlIiwibGlzdCIsInNldExpc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImRhdGFFbmRwb2ludCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEM7QUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUQsSUFBRyxDQUFDRSxPQUFKLENBQVksQ0FBWixFQUFlQyxPQUFmLENBQXVCLG1CQUF2QixFQUE0QyxLQUE1QyxDQUF2Qjs7QUFDQSxTQUFPRixRQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekI7QUFDQTtBQUVBLFNBQU87QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBckMsQ0FBUDtBQUNELENBTEQ7O0tBQU1ILE87O0FBT04sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0gsS0FBRCxFQUFXO0FBQUE7O0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQXdCSSxzREFBUSxFQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFrQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLFNBQUssZ0NBQXlCVixLQUFLLENBQUNXLFlBQS9CLEVBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkVCxhQUFPLENBQUNTLElBQUQsQ0FBUDtBQUNBUCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBTEg7QUFNRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxJQUFJLEdBQUdBLElBQUksQ0FBQ1csTUFBUixHQUFpQixDQUE1QixhQURGLFdBQ29EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcEQsU0FFSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZMLENBRkYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDVCxTQUFELEdBQ0NGLElBQUksSUFDSkEsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ2hCLElBQUQsRUFBVTtBQUNqQixXQUFPLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUFuQjtBQUEwQixVQUFJLEVBQUVELElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkQsQ0FGRCxHQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosQ0FSRixDQURGO0FBcUJELENBdkNEOztHQUFNRSxROztNQUFBQSxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzc5NGZkYWE5YmZkMGNlMmNhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQUNUSU9OUyA9IFsnVmlldycsICdSZXBseSddO1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICAvLyBUT0RPXG4gIGNvbnN0IGN1cnJlbmN5ID0gJyQnICsgaW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxkKD89KFxcZHszfSkrXFwuKS9nLCAnJCYsJyk7XG4gIHJldHVybiBjdXJyZW5jeTtcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nJz57cHJvcHMuaXRlbS50aXRsZX08L2Rpdj47XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gIC8vIHRoZW4gcmVuZGVyIHRoZSByZXN1bHQgYXMgc2V0IG9mIGxpc3RpbmdzIGFzIHBlciB0aGUgZGVzaWduIG1vY2tzXG4gIC8vIGNoZWNrIHByb3BzIHBhc3NlZCBpbiBmcm9tIHBhcmVudCBmb3Igb3RoZXIgdmFsdWVzIHRoYXQgeW91IG1heSBuZWVkIHRvIHVzZVxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAke3Byb3BzLmRhdGFFbmRwb2ludH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldExpc3QoZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19faGVhZGVyJz5cbiAgICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4+e2xpc3QgPyBsaXN0Lmxlbmd0aCA6IDB9IHJlc3VsdHM8L3NwYW4+IGZvciA8c3Bhbj5GZXJyYXJpPC9zcGFuPlxuICAgICAgICAgIGluIDxzcGFuPkF1c3RyYWxpYTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2dyaWQnPlxuICAgICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgICBsaXN0ICYmXG4gICAgICAgICAgbGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8TGlzdGluZyBrZXk9e2l0ZW0udGl0bGV9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=