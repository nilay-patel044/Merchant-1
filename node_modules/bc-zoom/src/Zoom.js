import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import * as pst from './photoSwipeTemplate';

export default class Zoom {
  constructor(imageSelector, context, options) {
    this.options = $.extend({
      index: 0,
      bgOpacity: 0.95,
      history: false,
    }, options);

    this.isOpen = false;
    this.imageSelector = imageSelector;
    this.context = context;
    this.templateSelector = `.${pst.templateClass}`;

    this._injectTemplate();
  }

  /**
   *
   * Add the PhotoSwipe template to the DOM
   *
   */
  _injectTemplate() {
    if ($(this.templateSelector).length) return;

    $(document.body).append(pst.template(this.context));
  }

  /**
   *
   * Init PhotoSwipe when a product image is clicked
   * @param {array} imageArray The array of large / zoomable images
   *
   */
  _init(imageArray) {
    this.pswpElement = $(this.templateSelector)[0];

    this.productImages = new PhotoSwipe(
      this.pswpElement,
      PhotoSwipeUI_Default,
      imageArray,
      this.options
    );

    this.productImages.listen('close', () => this.isOpen = false);
    this.productImages.init();
  }

  /**
   *
   * Build out the image array
   * @returns {array} of image objects
   *
   */
  _buildImageArray() {
    const paths = $(this.imageSelector).toArray().map((element) => {
      return $(element).attr('href');
    });

    return Promise.all(
      paths.map(this._getImageMeta)
    );
  }

  /**
   *
   * Get the meta properties of an image
   * @returns {Promise} Returns the image meta if resolved (image loaded)
   *
   */
  _getImageMeta(src) {
    return new Promise(resolve => {
      const $thumbnail = $(`[href="${src}"]`).find('img');
      const image = new Image();

      // Resolve with meta values once image has loaded
      image.onload = () => resolve({
        src,
        w: image.naturalWidth,
        h: image.naturalHeight,
        msrc: $thumbnail.attr('src'),
        title: $thumbnail.attr('alt'),
      });

      image.onerror = () => reject('error loading image');

      image.src = src;
    });
  }

  /**
   *
   * Get the coordinates zoom animation will start / end with
   * @param {int} index The index of the image within the gallery
   *
   */
  _getThumbBounds(index) {
    const thumbnail = $(this.imageSelector)[index];

    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

    const rect = thumbnail.getBoundingClientRect();

    return {
      x: rect.left,
      y: rect.top + pageYScroll,
      w: rect.width,
    };
  }

  /**
   *
   * Show the PhotoSwipe modal
   * @public
   * @param {int} index The index of the image within the gallery
   *
   */
  show(index) {
    // Ensure that we don't open a new instance before the first closes.
    // Having two open instances can put us into an invalid state.
    if (this.isOpen) return;
    this.isOpen = true;

    this.options.index = index;
    this.options.getThumbBoundsFn = index => this._getThumbBounds(index);

    this._buildImageArray().then(imageArray => {
      this._init(imageArray);
    });
  }
}
