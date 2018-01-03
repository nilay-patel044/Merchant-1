import $ from 'jquery';
import Zoom from '../../dist/js/Zoom';

$(function() {

  const context = {
    zoomClose: 'Close',
    zoomShare: 'Share this image',
    zoomFullscreen: 'View in fullscreen',
    zoomAction: 'Zoom in or out',
    zoomPrevious: 'Previous image',
    zoomNext: 'Next image',
  };

  const imageLightbox = new Zoom('[data-product-image]', context);

  $(document).on('click', '[data-product-image]', (event) => {
    event.preventDefault();
    imageLightbox.show($(event.currentTarget).index());
  });

});