document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, inview) {
    if(inview) {
      const ta = new gaspTextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver('.gasp_animate_title', cb);

  const _inviewAnimation = function(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  const so2 = new ScrollObserver('.cover_slide', _inviewAnimation);

});

new MobileMenu();

