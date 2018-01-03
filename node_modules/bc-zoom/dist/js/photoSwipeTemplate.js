'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var templateClass = 'pswp';

function template(context) {
  var strings = {
    close: context.zoomClose || 'Close (Esc)',
    share: context.zoomShare || 'Share',
    fullscreen: context.zoomFullscreen || 'Toggle fullscreen',
    action: context.zoomAction || 'Zoom in/out',
    previous: context.zoomPrevious || 'Previous (arrow left)',
    next: context.zoomNext || 'Next (arrow right)'
  };

  return '<div class="' + templateClass + '" tabindex="-1" role="dialog" aria-hidden="true">\n      <div class="pswp__bg"></div>\n      <div class="pswp__scroll-wrap">\n        <div class="pswp__container">\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n        </div>\n        <div class="pswp__ui pswp__ui--hidden">\n          <div class="pswp__top-bar">\n          <div class="pswp__counter"></div>\n          <button class="pswp__button pswp__button--close" title="' + strings.close + '"></button>\n          <button class="pswp__button pswp__button--share" title="' + strings.share + '"></button>\n          <button class="pswp__button pswp__button--fs" title="' + strings.fullscreen + '"></button>\n          <button class="pswp__button pswp__button--zoom" title="' + strings.action + '"></button>\n          <div class="pswp__preloader">\n            <div class="pswp__preloader__icn">\n              <div class="pswp__preloader__cut">\n                <div class="pswp__preloader__donut"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n          <div class="pswp__share-tooltip"></div>\n        </div>\n        <button class="pswp__button pswp__button--arrow--left" title="' + strings.previous + '"></button>\n        <button class="pswp__button pswp__button--arrow--right" title="' + strings.next + '"></button>\n        <div class="pswp__caption">\n          <div class="pswp__caption__center"></div>\n        </div>\n      </div>\n    </div>';
}

exports.templateClass = templateClass;
exports.template = template;