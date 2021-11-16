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
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  }, props.item.location)), props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
        lineNumber: 50,
        columnNumber: 16
      }
    });
  }) : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Cannot find your result.");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsImN1cnJlbmN5IiwidG9GaXhlZCIsInJlcGxhY2UiLCJMaXN0aW5nIiwicHJvcHMiLCJpdGVtIiwidGl0bGUiLCJwcmljZSIsImxvY2F0aW9uIiwiaW1nVXJsIiwiTGlzdGluZ3MiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJkYXRhRW5kcG9pbnQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZW5kZXJlZExpc3QiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFTO0FBQ2hDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1ELElBQUcsQ0FBQ0UsT0FBSixDQUFZLENBQVosRUFBZUMsT0FBZixDQUF1QixtQkFBdkIsRUFBNEMsS0FBNUMsQ0FBdkI7O0FBQ0EsU0FBT0YsUUFBUDtBQUNELENBSkQ7O0FBTUEsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQWhCLENBRFIsRUFFUTtBQUFL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OTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIFRPRE9cbiAgY29uc3QgY3VycmVuY3kgPSAnJCcgKyBpbnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKTtcbiAgcmV0dXJuIGN1cnJlbmN5O1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICAgICAgPGg1Pntwcm9wcy5pdGVtLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8aDU+e2Zvcm1hdEFzQ3VycmVuY3kocHJvcHMuaXRlbS5wcmljZSl9PC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcm9wcy5pdGVtLmltZ1VybCAmJiA8aW1nIHNyYz17cHJvcHMuaXRlbS5pbWdVcmx9IGFsdD0naW1nJyAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3MgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIGNvbXBvbmVudCBzaG91bGQgbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGFwaSBlbmRwb2ludCAocHJvcHMuZGF0YUVuZHBvaW50KVxuICAvLyB0aGVuIHJlbmRlciB0aGUgcmVzdWx0IGFzIHNldCBvZiBsaXN0aW5ncyBhcyBwZXIgdGhlIGRlc2lnbiBtb2Nrc1xuICAvLyBjaGVjayBwcm9wcyBwYXNzZWQgaW4gZnJvbSBwYXJlbnQgZm9yIG90aGVyIHZhbHVlcyB0aGF0IHlvdSBtYXkgbmVlZCB0byB1c2VcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwJHtwcm9wcy5kYXRhRW5kcG9pbnR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRMaXN0KGRhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJlZExpc3QgPVxuICAgIGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwID8gKFxuICAgICAgbGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxMaXN0aW5nIGtleT17aXRlbS50aXRsZX0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8aDE+Q2Fubm90IGZpbmQgeW91ciByZXN1bHQuPC9oMT5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19faGVhZGVyJz5cbiAgICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4+e2xpc3QgPyBsaXN0Lmxlbmd0aCA6IDB9IHJlc3VsdHM8L3NwYW4+IGZvclxuICAgICAgICAgIDxzcGFuPkZlcnJhcmkgPC9zcGFuPlxuICAgICAgICAgIGluIDxzcGFuPkF1c3RyYWxpYTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2dyaWQnPlxuICAgICAgICB7IWlzTG9hZGluZyA/IHJlbmRlcmVkTGlzdCA6IDxoMT5Mb2FkaW5nLi4uPC9oMT59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==