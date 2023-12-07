(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/editor"],{

/***/ "./resources/assets/palette.json":
/*!***************************************!*\
  !*** ./resources/assets/palette.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Black\",\"slug\":\"black\",\"color\":\"#000000\"},{\"name\":\"White\",\"slug\":\"white\",\"color\":\"#ffffff\"},{\"name\":\"liliac\",\"slug\":\"liliac\",\"color\":\"#c491fe\"},{\"name\":\"brightlightblue\",\"slug\":\"brightlightblue\",\"color\":\"#30e0ff\"},{\"name\":\"orangish\",\"slug\":\"orangish\",\"color\":\"#ff8547\"},{\"name\":\"weirdgreen\",\"slug\":\"weirdgreen\",\"color\":\"#43d09d\"},{\"name\":\"bubblegumpink\",\"slug\":\"bubblegumpink\",\"color\":\"#ff99e5\"},{\"name\":\"lightblue\",\"slug\":\"lightblue\",\"color\":\"#6dcff6\"},{\"name\":\"sunfloweryellow\",\"slug\":\"sunfloweryellow\",\"color\":\"#ffe400\"},{\"name\":\"greyishbrown\",\"slug\":\"greyishbrown\",\"color\":\"#3c3c3c\"}]");

/***/ }),

/***/ "./resources/assets/scripts/editor.js":
/*!********************************************!*\
  !*** ./resources/assets/scripts/editor.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _palette_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../palette.json */ "./resources/assets/palette.json");
var _palette_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../palette.json */ "./resources/assets/palette.json", 1);









Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__["registerFormatType"])('urban-tech-helsinki/highlight', {
  title: 'Highlight',
  tagName: 'span',
  className: 'highlight',
  attributes: {
    color: 'data-color'
  },
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        _onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;

    var onToggle = function onToggle() {
      _onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__["toggleFormat"])(value, {
        type: 'urban-tech-helsinki/highlight'
      }));
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
      icon: "editor-underline",
      title: "Highlight",
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "u"
    }), isActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Popover"], {
      position: "bottom center",
      headerTitle: "Highlight color"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: "Color name",
      value: activeAttributes.color || '',
      options: [{
        label: 'Select color',
        value: ''
      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_palette_json__WEBPACK_IMPORTED_MODULE_8__.map(function (color) {
        return {
          label: color.name,
          value: color.slug
        };
      }))),
      onChange: function onChange(newColor) {
        _onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__["applyFormat"])(value, {
          type: 'urban-tech-helsinki/highlight',
          attributes: {
            color: newColor
          }
        }));
      }
    }))];
  }
});
var excludeBlockTypes = ['core/archives', 'core/calendar', 'core/categories', 'core/latest-posts', 'core/navigation', 'core/nextpage', 'core/latest-comments', 'core/more', 'core/rss', 'core/search', 'core/social-links', 'core/tag-cloud', 'core-embed/amazon-kindle', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/facebook', 'core-embed/flickr', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/instagram', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/polldaddy', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/soundcloud', 'core-embed/speaker', 'core-embed/speaker-deck', 'core-embed/spotify', 'core-embed/ted', 'core-embed/tiktok', 'core-embed/tumblr', 'core-embed/twitter', 'core-embed/videopress', 'core-embed/vimeo', 'core-embed/wordpress', 'core-embed/wordpress-tv'];
wp.hooks.addFilter('blocks.registerBlockType', 'pw-examples/exclude-blocks', function (settings, name) {
  if (excludeBlockTypes.indexOf(name) !== -1) {
    return Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        inserter: false
      })
    });
  }

  return settings;
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["unregisterBlockStyle"])('core/button', 'fill');
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/button', {
    name: 'outline',
    label: 'Outline',
    isDefault: true
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/button', {
    name: 'text',
    label: 'Text',
    isDefault: true
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/media-text', {
    name: 'wide',
    label: 'Wide',
    isDefault: false
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/columns', {
    name: 'partner-grid',
    label: 'Partner grid',
    isDefault: false
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/columns', {
    name: 'startup-grid',
    label: 'Startup grid',
    isDefault: false
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/paragraph', {
    name: 'txt-link',
    label: 'TXT Link',
    isDefault: false
  });
  ;
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (heading) {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/heading', {
      name: "size-".concat(heading),
      label: "".concat(heading.toUpperCase(), " size"),
      isDefault: false
    });
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('core/heading', {
    name: "article-title",
    label: 'Article Title',
    isDefault: false
  });
});

/***/ }),

/***/ 3:
/*!**************************************************!*\
  !*** multi ./resources/assets/scripts/editor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-urban-tech-helsinki/web/app/themes/urban-tech-helsinki/resources/assets/scripts/editor.js */"./resources/assets/scripts/editor.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!*******************************************!*\
  !*** external {"this":["wp","domReady"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/rich-text":
/*!*******************************************!*\
  !*** external {"this":["wp","richText"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ })

},[[3,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=editor.js.map