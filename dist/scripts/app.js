(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");

setAppHeight();
window.addEventListener('resize', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(setAppHeight, 150));
addToggleListener(document.querySelector('.site-hamburger-button'));
var submenuTriggers = document.querySelectorAll('.site-navigation__submenu-trigger');

for (var i = 0; i < submenuTriggers.length; i++) {
  var trigger = submenuTriggers[i];
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    var item = e.target.closest('[aria-haspopup]');
    toggle(item);
  });
}

if (document.querySelector('.site-navigation')) {
  menu(document.querySelector('.site-navigation'));
}

function setAppHeight() {
  var doc = document.documentElement;
  doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
}

function addToggleListener(el) {
  if (!el) {
    console.warn('Trying to add toggle listener to element that does not exist');
    return;
  }

  el.addEventListener('click', function () {
    return requestAnimationFrame(function () {
      return toggleAriaExpanded(el);
    });
  });
}

function toggleAriaExpanded(el) {
  var isExpanded = el.getAttribute('aria-expanded') === 'true';
  el.setAttribute('aria-expanded', !isExpanded);
  var controlsStr = el.getAttribute('aria-controls');

  if (controlsStr) {
    controlsStr.split(' ').forEach(function (selector) {
      var el = document.getElementById(selector);

      if (el) {
        el.classList[isExpanded ? 'remove' : 'add']('is-expanded');
      }
    });
  }
}

function toggle(el) {
  var isExpanded = el.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }

  var controls = el.getAttribute('aria-controls');

  if (controls) {
    controls.split(' ').forEach(function (selector) {
      var el = document.getElementById(selector);

      if (isExpanded) {
        el.classList.remove('is-active');
      } else {
        el.classList.add('is-active');
      }
    });
  }

  function open(el) {
    el.setAttribute('aria-expanded', true);
  }

  function close(el) {
    el.setAttribute('aria-expanded', false);
  }
}

function openItem(itemEl) {
  if (!itemEl) return;
  var controlEl = itemEl.querySelector('[aria-haspopup="true"]');
  var controlsEl = controlEl && controlEl.getAttribute('aria-controls') ? document.getElementById(controlEl.getAttribute('aria-controls')) : undefined;

  if (controlEl) {
    controlEl.setAttribute('aria-expanded', true);
  }

  if (controlsEl) {
    controlsEl.classList.add('is-active');
  }
}

function closeItem(itemEl) {
  if (!itemEl) return;
  var controlEl = itemEl.querySelector('[aria-haspopup="true"]');
  var controlsEl = controlEl && controlEl.getAttribute('aria-controls') ? document.getElementById(controlEl.getAttribute('aria-controls')) : undefined;

  if (controlEl) {
    controlEl.setAttribute('aria-expanded', false);
  }

  if (controlsEl) {
    controlsEl.classList.remove('is-active');
  }
}

function menu(menu) {
  var itemsWithSubmenu = menu.querySelectorAll('.has-children');

  var _loop = function _loop(_i) {
    var itemWithSubmenu = itemsWithSubmenu[_i];
    itemWithSubmenu.addEventListener('mouseover', function () {
      return requestAnimationFrame(function () {
        if (!matchMedia('(min-width: 1024px)').matches) return; // Close other submenus

        Array.from(itemsWithSubmenu).forEach(closeItem);
        openItem(itemWithSubmenu);
      });
    });
    itemWithSubmenu.addEventListener('mouseout', function () {
      return requestAnimationFrame(function () {
        if (!matchMedia('(min-width: 1024px)').matches) return;
        closeItem(itemWithSubmenu);
      });
    });
  };

  for (var _i = 0; _i < itemsWithSubmenu.length; _i++) {
    _loop(_i);
  }
}

/***/ }),

/***/ "./resources/assets/styles/admin.scss":
/*!********************************************!*\
  !*** ./resources/assets/styles/admin.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/admin.scss ./resources/assets/styles/editor.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
__webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/styles/admin.scss */"./resources/assets/styles/admin.scss");
module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map