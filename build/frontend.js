/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comp/PayPal.jsx":
/*!*****************************!*\
  !*** ./src/comp/PayPal.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PayPal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayPal.css */ "./src/comp/PayPal.css");



const PayPal = () => {
  const [approvalUrl, setApprovalUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [payment_id, setPayment_id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);
  const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("product name");
  const [currency_code, setCurrency_code] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("usd");
  const handleSubmit = async () => {
    const apiUrl = "https://100088.pythonanywhere.com/api/paypal/initialize/public/a7c3b800-f141-448d-8c33-e198cd51c1df";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        paypal_client_id: "AVJXJddOEG7WGrLkTzg4_9ODsDNhIHrqT4ZL6gwXRz1ftQELliYtticZH-kLjoYaTZfNn_8y5onH_YP3",
        paypal_secret_key: "ELsNyOGLDJVZCsfuuu5AhsFRmQbgBwxEVZteB-2XLZm8RLa8cPeS_cfNi35w7bJwkOKDHOnNxyHsJKu6",
        price,
        product,
        currency_code
      })
    };
    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      setApprovalUrl(data.approval_url);
      setPayment_id(data.payment_id);
    } catch (error) {
      console.error("Error while initializing payment:", error);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "home-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "h"
  }, "PayPal Payment"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Price:", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: price,
    onChange: e => setPrice(e.target.value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Product:", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: product,
    onChange: e => setProduct(e.target.value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Currency:", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: currency_code,
    onChange: e => setCurrency_code(e.target.value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleSubmit
  }, "Initialize Payment"), approvalUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Approval URL:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: approvalUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, approvalUrl), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "payment ID: ", payment_id)));
};
/* harmony default export */ __webpack_exports__["default"] = (PayPal);

/***/ }),

/***/ "./src/comp/PayPal.css":
/*!*****************************!*\
  !*** ./src/comp/PayPal.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comp_PayPal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp/PayPal */ "./src/comp/PayPal.jsx");





const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");
divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(OurComponent, data), div);
  div.classList.remove("boilerplate-update-me");
});
function OurComponent(props) {
  const [showSkyColor, setShowSkyColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showGrassColor, setShowGrassColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "boilerplate-frontend"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_comp_PayPal__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map