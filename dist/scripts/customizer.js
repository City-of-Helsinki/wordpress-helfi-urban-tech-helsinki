(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/customizer"],{

/***/ "./resources/assets/scripts/customizer.js":
/*!************************************************!*\
  !*** ./resources/assets/scripts/customizer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * This file allows you to add functionality to the Theme Customizer
 * live preview. jQuery is readily available.
 *
 * {@link https://codex.wordpress.org/Theme_Customization_API}
 */

/**
 * Change the blog name value.
 *
 * @param {string} value
 */
wp.customize('blogname', function (value) {
  value.bind(function (to) {
    return $('.brand').text(to);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ 1:
/*!******************************************************!*\
  !*** multi ./resources/assets/scripts/customizer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/scripts/customizer.js */"./resources/assets/scripts/customizer.js");


/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

},[[1,"/scripts/manifest"]]]);
//# sourceMappingURL=customizer.js.map