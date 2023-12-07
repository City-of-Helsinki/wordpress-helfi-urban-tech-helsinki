(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/accordion"],{

/***/ "./resources/assets/scripts/accordion.js":
/*!***********************************************!*\
  !*** ./resources/assets/scripts/accordion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var initAccordions = function initAccordions() {
  var accordions = document.querySelectorAll('.accordion-button');
  accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function (event) {
      var currentHeader = event.target;
      var panelId = currentHeader.dataset.target;
      var currentPanel = document.querySelector(panelId);
      var isActive = currentHeader.classList.contains('active');
      accordions.forEach(function (accordion) {
        var header = accordion;
        var panelId = header.dataset.target;
        var content = document.querySelector(panelId);
        header.classList.remove('active');
        content.classList.add('collapse');
        header.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      });

      if (!isActive) {
        currentHeader.classList.add('active');
        currentHeader.setAttribute('aria-expanded', true);
        currentPanel.classList.remove('collapse');
        currentPanel.setAttribute('aria-hidden', false);
      } else {
        currentHeader.classList.remove('active');
        currentHeader.setAttribute('aria-expanded', false);
        currentPanel.classList.add('collapse');
        currentPanel.setAttribute('aria-hidden', true);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  initAccordions();
});

/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./resources/assets/scripts/accordion.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/scripts/accordion.js */"./resources/assets/scripts/accordion.js");


/***/ })

},[[2,"/scripts/manifest"]]]);
//# sourceMappingURL=accordion.js.map