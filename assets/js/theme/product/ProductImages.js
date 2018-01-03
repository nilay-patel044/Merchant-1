import imagesLoaded from 'imagesloaded';
import slick from 'slick-carousel';
import Zoom from 'bc-zoom';
import productViewTemplates from './productViewTemplates';

export default class ProductImages {
  constructor(container, context) {
    this.context = context;
    this.container = container;
    this.imageLightbox = new Zoom(`${container} [data-product-image]`, context);

    this._initCarousel();
    this._bindEvents();
  }

  _initCarousel() {
    $(this.container).slick({
      infinite: false,
      arrows: false,
      lazyLoad: 'ondemand',
      adaptiveHeight: JSON.parse($(this.container).attr('data-adaptive-height')),
    });
  }

  _bindEvents() {
    // Paging
    $(document).on('click', '.product-images-pagination a', (event) => {
      event.preventDefault();
      $('.product-slides-wrap').slick('slickGoTo', $(event.currentTarget).attr('data-slide-to'));
    });

    // Lightbox
    $(this.container).on('click', '[data-product-image]', (event) => {
      event.preventDefault();
      this.imageLightbox.show($(event.currentTarget).index());
    });
  }

  variationImgPreview(productImageUrl, zoomImageUrl, alt, optId) {
    // Only append if image doesn't already exist.
    // Otherwise, scroll to it.
    if (! $(`img[src="${productImageUrl}"]`).length) {
      const numSlides = $('[data-product-image]').length;

      const newImage = productViewTemplates.variationImage({
        productImageSrc: productImageUrl,
        zoomImageSrc: zoomImageUrl,
        alt: alt
      });

      // Add carousel image
      $(this.container).slick('slickAdd', newImage);

      // Add carousel nav item
      $('.product-images-pagination').append(productViewTemplates.variationImageNav({
        productImageSrc: productImageUrl,
        index: numSlides,
        id: optId
      })).slideDown();

      $(this.container).slick('slickGoTo', numSlides + 1);
    } else {
      const $changedOption = $(`[data-option-id="${optId}"]`);
      if ($changedOption.length) {
        $(this.container).slick('slickGoTo', $changedOption.index(), true);
      }
    }
  }
}
