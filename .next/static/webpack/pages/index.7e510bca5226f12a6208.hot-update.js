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
  // Formate integer to currency Format.
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
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, props.item.location)), props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: props.item.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, props.item.description), __jsx("div", {
    className: "button-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, ACTIONS.map(function (btn, index) {
    return __jsx("button", {
      key: index,
      className: "btn",
      onClick: function onClick() {
        return console.log("".concat(btn, ": ").concat(props.item.title));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, btn);
  }))));
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
        lineNumber: 81,
        columnNumber: 16
      }
    });
  }) : __jsx("div", {
    className: "error__result",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Cannot find your result."));
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, " Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("div", {
    className: "error__result",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Loading..."))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInNwbGl0IiwiTGlzdGluZyIsInByb3BzIiwiaXRlbSIsInRpdGxlIiwicHJpY2UiLCJsb2NhdGlvbiIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwibWFwIiwiYnRuIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiTGlzdGluZ3MiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhRW5kcG9pbnQiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXNlRWZmZWN0IiwicmVuZGVyZWRMaXN0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBUztBQUNoQztBQUNBLFNBQU9BLElBQUcsR0FDTkEsSUFBRyxDQUNBQyxjQURILENBQ2tCLE9BRGxCLEVBQzJCO0FBQ3ZCQyxTQUFLLEVBQUUsVUFEZ0I7QUFFdkJDLFlBQVEsRUFBRTtBQUZhLEdBRDNCLEVBS0dDLEtBTEgsQ0FLUyxHQUxULEVBS2MsQ0FMZCxDQURNLEdBT04sUUFQSjtBQVFELENBVkQ7O0FBWUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFB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MjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBQ1RJT05TID0gWydWaWV3JywgJ1JlcGx5J107XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIEZvcm1hdGUgaW50ZWdlciB0byBjdXJyZW5jeSBGb3JtYXQuXG4gIHJldHVybiBpbnRcbiAgICA/IGludFxuICAgICAgICAudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNwbGl0KCcuJylbMF1cbiAgICA6ICdXYW50ZWQnO1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUnPntwcm9wcy5pdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWluZm8nPlxuICAgICAgICAgIDxoMz57Zm9ybWF0QXNDdXJyZW5jeShwcm9wcy5pdGVtLnByaWNlKX08L2gzPlxuICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwcm9wcy5pdGVtLmltZ1VybCAmJiAoXG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLml0ZW0uaW1nVXJsfSBhbHQ9e3Byb3BzLml0ZW0udGl0bGV9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHsvKiBTaG93IGltYWdlIGlmIGltYWdlIHVybCBleGlzdHMgKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ncm91cCc+XG4gICAgICAgICAge0FDVElPTlMubWFwKChidG4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0bidcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhgJHtidG59OiAke3Byb3BzLml0ZW0udGl0bGV9YCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnRufVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gIC8vIHRoZW4gcmVuZGVyIHRoZSByZXN1bHQgYXMgc2V0IG9mIGxpc3RpbmdzIGFzIHBlciB0aGUgZGVzaWduIG1vY2tzXG4gIC8vIGNoZWNrIHByb3BzIHBhc3NlZCBpbiBmcm9tIHBhcmVudCBmb3Igb3RoZXIgdmFsdWVzIHRoYXQgeW91IG1heSBuZWVkIHRvIHVzZVxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAke3Byb3BzLmRhdGFFbmRwb2ludH1gXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldExpc3QoZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJlZExpc3QgPVxuICAgIGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwID8gKFxuICAgICAgbGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxMaXN0aW5nIGtleT17aXRlbS50aXRsZX0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyb3JfX3Jlc3VsdCc+XG4gICAgICAgIDxoMT5DYW5ub3QgZmluZCB5b3VyIHJlc3VsdC48L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdGluZ3NfX2hlYWRlcic+XG4gICAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPntsaXN0ID8gbGlzdC5sZW5ndGggOiAwfSByZXN1bHRzPC9zcGFuPiBmb3JcbiAgICAgICAgICA8c3Bhbj4gRmVycmFyaSA8L3NwYW4+XG4gICAgICAgICAgaW4gPHNwYW4+QXVzdHJhbGlhPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19fZ3JpZCc+XG4gICAgICAgIHshaXNMb2FkaW5nID8gKFxuICAgICAgICAgIHJlbmRlcmVkTGlzdFxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvcl9fcmVzdWx0Jz5cbiAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9