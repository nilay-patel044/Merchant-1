const templateClass = 'pswp';

function template(context) {
  const strings = {
    close: context.zoomClose || 'Close (Esc)',
    share: context.zoomShare || 'Share',
    fullscreen: context.zoomFullscreen || 'Toggle fullscreen',
    action: context.zoomAction || 'Zoom in/out',
    previous: context.zoomPrevious || 'Previous (arrow left)',
    next: context.zoomNext || 'Next (arrow right)',
  };

  return (
    `<div class="${templateClass}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="${strings.close}"></button>
          <button class="pswp__button pswp__button--share" title="${strings.share}"></button>
          <button class="pswp__button pswp__button--fs" title="${strings.fullscreen}"></button>
          <button class="pswp__button pswp__button--zoom" title="${strings.action}"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="${strings.previous}"></button>
        <button class="pswp__button pswp__button--arrow--right" title="${strings.next}"></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>`
  );
}

export {
  templateClass,
  template,
}