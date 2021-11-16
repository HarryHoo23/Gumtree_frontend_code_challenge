webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\harry\\Downloads\\gtau-fe-test\\components\\Listings.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var ACTIONS = ['View', 'Reply'];

var formatAsCurrency = function formatAsCurrency(_int) {
  return _int ? _int.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  }).split('.')[0] : 'Wanted';
};

var Listing = function Listing(props) {
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, props.item.location)), __jsx("div", {
    className: "card-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, props.item.description)));
};

_c = Listing;

var Listings = function Listings(props) {
  _s();

  // TODO
  // This component should make a request to the api endpoint (props.dataEndpoint)
  // then render the result as set of listings as per the design mocks
  // check props passed in from parent for other values that you may need to use
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch("http://localhost:3000".concat(props.dataEndpoint));

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              data = _context.sent;
              setList(data);
              setIsLoading(false);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
  }, []);
  var renderedList = list && list.length > 0 ? list.map(function (item) {
    return __jsx(Listing, {
      key: item.title,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    });
  }) : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "Cannot find your result.");
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, " Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInNwbGl0IiwiTGlzdGluZyIsInByb3BzIiwiaXRlbSIsInRpdGxlIiwicHJpY2UiLCJsb2NhdGlvbiIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiTGlzdGluZ3MiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhRW5kcG9pbnQiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInJlbmRlcmVkTGlzdCIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVM7QUFDaEMsU0FBT0EsSUFBRyxHQUNOQSxJQUFHLENBQ0FDLGNBREgsQ0FDa0IsT0FEbEIsRUFDMkI7QUFDdkJDLFNBQUssRUFBRSxVQURnQjtBQUV2QkMsWUFBUSxFQUFFO0FBRmEsR0FEM0IsRUFLR0MsS0FMSCxDQUtTLEdBTFQsRUFLYyxDQUxkLENBRE0sR0FPTixRQVBKO0FBUUQsQ0FURDs7QUFXQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekI7QUFDQTtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1EsSUFBSSxHQUFHQSxJQUFJLENBQUNjLE1BQVIsR0FBaUIsQ0FBNUIsYUFERixVQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsU0FHSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhMLENBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDWixTQUFELEdBQWFXLFlBQWIsR0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEL0IsQ0FURixDQURGO0FBZUQsQ0FsREQ7O0dBQU1mLFE7O01BQUFBLFE7QUFvRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljMjZlZDQ4ZWYxYzk4YjczYzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIHJldHVybiBpbnRcbiAgICA/IGludFxuICAgICAgICAudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNwbGl0KCcuJylbMF1cbiAgICA6ICdXYW50ZWQnO1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntwcm9wcy5pdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWluZm8nPlxuICAgICAgICAgIDxoMz57Zm9ybWF0QXNDdXJyZW5jeShwcm9wcy5pdGVtLnByaWNlKX08L2gzPlxuICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWdcIj5cbiAgICAgICAgICB7cHJvcHMuaXRlbS5pbWdVcmwgJiYgPGltZyBzcmM9e3Byb3BzLml0ZW0uaW1nVXJsfSBhbHQ9J2ltZycgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCR7cHJvcHMuZGF0YUVuZHBvaW50fWBcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0TGlzdChkYXRhKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9XG4gICAgbGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPExpc3Rpbmcga2V5PXtpdGVtLnRpdGxlfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxoMT5DYW5ub3QgZmluZCB5b3VyIHJlc3VsdC48L2gxPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19oZWFkZXInPlxuICAgICAgICA8aDE+U2VhcmNoIFJlc3VsdHM8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj57bGlzdCA/IGxpc3QubGVuZ3RoIDogMH0gcmVzdWx0czwvc3Bhbj4gZm9yXG4gICAgICAgICAgPHNwYW4+IEZlcnJhcmkgPC9zcGFuPlxuICAgICAgICAgIGluIDxzcGFuPkF1c3RyYWxpYTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2dyaWQnPlxuICAgICAgICB7IWlzTG9hZGluZyA/IHJlbmRlcmVkTGlzdCA6IDxoMT5Mb2FkaW5nLi4uPC9oMT59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==