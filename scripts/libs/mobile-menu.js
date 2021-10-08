
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
