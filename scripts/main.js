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

class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile_menu__btn');
    this.DOM.cover = document.querySelector('.mobile_menu__cover');
    this.DOM.container = document.querySelector('#global_container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggleClass.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggleClass.bind(this));
  }
  _toggleClass() {
    this.DOM.container.classList.toggle('menu_open');
  }
}

new MobileMenu();

