'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _photoswipe = require('photoswipe');

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = require('photoswipe/dist/photoswipe-ui-default');

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

var _photoSwipeTemplate = require('./photoSwipeTemplate');

var pst = _interopRequireWildcard(_photoSwipeTemplate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zoom = function () {
  function Zoom(imageSelector, context, options) {
    _classCallCheck(this, Zoom);

    this.options = $.extend({
      index: 0,
      bgOpacity: 0.95,
      history: false
    }, options);

    this.isOpen = false;
    this.imageSelector = imageSelector;
    this.context = context;
    this.templateSelector = '.' + pst.templateClass;

    this._injectTemplate();
  }

  /**
   *
   * Add the PhotoSwipe template to the DOM
   *
   */


  _createClass(Zoom, [{
    key: '_injectTemplate',
    value: function _injectTemplate() {
      if ($(this.templateSelector).length) return;

      $(document.body).append(pst.template(this.context));
    }

    /**
     *
     * Init PhotoSwipe when a product image is clicked
     * @param {array} imageArray The array of large / zoomable images
     *
     */

  }, {
    key: '_init',
    value: function _init(imageArray) {
      var _this = this;

      this.pswpElement = $(this.templateSelector)[0];

      this.productImages = new _photoswipe2.default(this.pswpElement, _photoswipeUiDefault2.default, imageArray, this.options);

      this.productImages.listen('close', function () {
        return _this.isOpen = false;
      });
      this.productImages.init();
    }

    /**
     *
     * Build out the image array
     * @returns {array} of image objects
     *
     */

  }, {
    key: '_buildImageArray',
    value: function _buildImageArray() {
      var paths = $(this.imageSelector).toArray().map(function (element) {
        return $(element).attr('href');
      });

      return Promise.all(paths.map(this._getImageMeta));
    }

    /**
     *
     * Get the meta properties of an image
     * @returns {Promise} Returns the image meta if resolved (image loaded)
     *
     */

  }, {
    key: '_getImageMeta',
    value: function _getImageMeta(src) {
      return new Promise(function (resolve) {
        var $thumbnail = $('[href="' + src + '"]').find('img');
        var image = new Image();

        // Resolve with meta values once image has loaded
        image.onload = function () {
          return resolve({
            src: src,
            w: image.naturalWidth,
            h: image.naturalHeight,
            msrc: $thumbnail.attr('src'),
            title: $thumbnail.attr('alt')
          });
        };

        image.onerror = function () {
          return reject('error loading image');
        };

        image.src = src;
      });
    }

    /**
     *
     * Get the coordinates zoom animation will start / end with
     * @param {int} index The index of the image within the gallery
     *
     */

  }, {
    key: '_getThumbBounds',
    value: function _getThumbBounds(index) {
      var thumbnail = $(this.imageSelector)[index];

      var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

      var rect = thumbnail.getBoundingClientRect();

      return {
        x: rect.left,
        y: rect.top + pageYScroll,
        w: rect.width
      };
    }

    /**
     *
     * Show the PhotoSwipe modal
     * @public
     * @param {int} index The index of the image within the gallery
     *
     */

  }, {
    key: 'show',
    value: function show(index) {
      var _this2 = this;

      // Ensure that we don't open a new instance before the first closes.
      // Having two open instances can put us into an invalid state.
      if (this.isOpen) return;
      this.isOpen = true;

      this.options.index = index;
      this.options.getThumbBoundsFn = function (index) {
        return _this2._getThumbBounds(index);
      };

      this._buildImageArray().then(function (imageArray) {
        _this2._init(imageArray);
      });
    }
  }]);

  return Zoom;
}();

exports.default = Zoom;