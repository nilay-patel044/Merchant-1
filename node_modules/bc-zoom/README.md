# Bigcommerce Product Image Zoom Module

## Installation

#### 1. Install module with npm.

```
  npm i --save bitbucket:pixelunion/bc-zoom
```

#### 2. Update bc-core to ensure your theme has the necessary language strings.

## Usage

#### 1. Copy image assets from `/node_modules/photoswipe/dist/default-skin` into your theme's `/assets/img` directory.

#### 2. Add scss imports to your theme.scss file.

  The `$pswp__assets-path` variable is the relative path to where you copied the image assets.

```
  $pswp__assets-path: "../img/";
  @import "../../node_modules/photoswipe/src/css/main";
  @import "../../node_modules/photoswipe/src/css/default-skin/default-skin";
```

#### 3. Inject language strings either in a global injects file or on the template where you'll be using bc-zoom.

  Note that the keys for the injects should be written as below, but the value can be whatever you want.

```
  {{inject 'zoomClose' (lang 'core.product.zoom.close')}}
  {{inject 'zoomShare' (lang 'core.product.zoom.share')}}
  {{inject 'zoomFullscreen' (lang 'core.product.zoom.fullscreen')}}
  {{inject 'zoomAction' (lang 'core.product.zoom.zoom_action')}}
  {{inject 'zoomPrevious' (lang 'core.product.zoom.previous')}}
  {{inject 'zoomNext' (lang 'core.product.zoom.next')}}
```

#### 4. Set up product image template

  Each thumbnail should be wrapped in an `a` that links to the full size image. The `alt` is used as the caption.

```
{{#each images}}
  <a class="product-image" href="{{getImage this 'zoom'}}" data-product-image>
    <img src="{{getImage this 'product'}}" alt="{{alt}}">
  </a>
{{/each}}
```

#### 5. Init zoom functionality.

  The Zoom class has 3 parameters:

  * `imageSelector` (required) - [string]: the selector for an individual image
  * `context` (recommended) - [object]: the template context containing the translation strings above
  * `options` (optional) - [object]: PhotoSwipe [options](http://photoswipe.com/documentation/options.html)

```
  import Zoom from 'bc-zoom';
```

```
  this.imageLightbox = new Zoom('[data-product-image]', context);

  $('.image-container').on('click', '[data-product-image]', (event) => {
    event.preventDefault();
    this.imageLightbox.show($(event.currentTarget).index());
  });
```

## Further Development

Install:

```
npm i
```

Bundle module for release:

```
gulp bundle
```

Demo:

```
npm run serve

webpack --watch
```