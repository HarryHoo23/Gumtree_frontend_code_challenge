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
  var handleViewBtnClicked = function handleViewBtnClicked(button) {
    console.log("".concat(button, ": "));
  };

  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.item.title), __jsx("div", {
    className: "card-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, formatAsCurrency(props.item.price)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, props.item.location)), props.item.imgUrl && __jsx("img", {
    src: props.item.imgUrl,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 31
    }
  }), __jsx("p", {
    className: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, props.item.description), __jsx("div", {
    className: "button-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, ACTIONS.map(function (btn) {
    return __jsx("button", {
      className: "btn",
      onClick: function onClick() {
        return console.log("".concat(btn, ": ").concat(props.item.title));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 20
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
        lineNumber: 72,
        columnNumber: 16
      }
    });
  }) : __jsx("div", {
    className: "error__result",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Cannot find your result."));
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "Search Results"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, list ? list.length : 0, " results"), " for", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, " Ferrari "), "in ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 14
    }
  }, "Australia"))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, !isLoading ? renderedList : __jsx("div", {
    className: "error__result",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInNwbGl0IiwiTGlzdGluZyIsInByb3BzIiwiaGFuZGxlVmlld0J0bkNsaWNrZWQiLCJidXR0b24iLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsInRpdGxlIiwicHJpY2UiLCJsb2NhdGlvbiIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwibWFwIiwiYnRuIiwiTGlzdGluZ3MiLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhRW5kcG9pbnQiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXNlRWZmZWN0IiwicmVuZGVyZWRMaXN0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBUztBQUNoQyxTQUFPQSxJQUFHLEdBQ05BLElBQUcsQ0FDQUMsY0FESCxDQUNrQixPQURsQixFQUMyQjtBQUN2QkMsU0FBSyxFQUFFLFVBRGdCO0FBRXZCQyxZQUFRLEVBQUU7QUFGYSxHQUQzQixFQUtHQyxLQUxILENBS1MsR0FMVCxFQUtjLENBTGQsQ0FETSxHQU9OLFFBUEo7QUFRRCxDQVREOztBQVdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QjtBQUNBO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxNQUFELEVBQVk7QUFDdkNDLFdBQU8sQ0FBQ0MsR0FBUixXQUFl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QSxRO0FBNERTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Mzk0ZTJmMzJmNjQyY2FhNjJjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQUNUSU9OUyA9IFsnVmlldycsICdSZXBseSddO1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICByZXR1cm4gaW50XG4gICAgPyBpbnRcbiAgICAgICAgLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5zcGxpdCgnLicpWzBdXG4gICAgOiAnV2FudGVkJztcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG4gIGNvbnN0IGhhbmRsZVZpZXdCdG5DbGlja2VkID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbn06IGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmcnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e3Byb3BzLml0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW5mbyc+XG4gICAgICAgICAgPGgzPntmb3JtYXRBc0N1cnJlbmN5KHByb3BzLml0ZW0ucHJpY2UpfTwvaDM+XG4gICAgICAgICAgPHA+e3Byb3BzLml0ZW0ubG9jYXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Byb3BzLml0ZW0uaW1nVXJsICYmIDxpbWcgc3JjPXtwcm9wcy5pdGVtLmltZ1VybH0gYWx0PSdpbWcnIC8+fVxuICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tZ3JvdXAnPlxuICAgICAgICAgIHtBQ1RJT05TLm1hcCgoYnRuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0bicgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coYCR7YnRufTogJHtwcm9wcy5pdGVtLnRpdGxlfWApfT57YnRufTwvYnV0dG9uPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBjb21wb25lbnQgc2hvdWxkIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhcGkgZW5kcG9pbnQgKHByb3BzLmRhdGFFbmRwb2ludClcbiAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgLy8gY2hlY2sgcHJvcHMgcGFzc2VkIGluIGZyb20gcGFyZW50IGZvciBvdGhlciB2YWx1ZXMgdGhhdCB5b3UgbWF5IG5lZWQgdG8gdXNlXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCR7cHJvcHMuZGF0YUVuZHBvaW50fWBcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0TGlzdChkYXRhKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlcmVkTGlzdCA9XG4gICAgbGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPExpc3Rpbmcga2V5PXtpdGVtLnRpdGxlfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvcl9fcmVzdWx0Jz5cbiAgICAgICAgPGgxPkNhbm5vdCBmaW5kIHlvdXIgcmVzdWx0LjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0aW5nc19faGVhZGVyJz5cbiAgICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4+e2xpc3QgPyBsaXN0Lmxlbmd0aCA6IDB9IHJlc3VsdHM8L3NwYW4+IGZvclxuICAgICAgICAgIDxzcGFuPiBGZXJyYXJpIDwvc3Bhbj5cbiAgICAgICAgICBpbiA8c3Bhbj5BdXN0cmFsaWE8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RpbmdzX19ncmlkJz5cbiAgICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgcmVuZGVyZWRMaXN0XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycm9yX19yZXN1bHQnPlxuICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=