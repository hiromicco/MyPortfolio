document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.sides = document.querySelectorAll('.side');
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  _toggleInviewAnimation(el, inview) {
    if (inview) {
      this.sides.forEach(el => el.classList.add("inview"))
    } else {
      el.classList.remove("inview");
    }
  }

  _gaspAnimation(el, inview) {
    if (inview) {
      const ta = new gaspTextAnimation(el);
      ta.animate();
    }
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
      setTimeout(() => {
        this.hero.stop();
      }, 13000);
    } else {
      this.hero.stop();
    }
  }

  _scrollInit() {
    this.observers = new ScrollObserver(".cover_slide", this._inviewAnimation);
    this.observers = new ScrollObserver(".appear", this._inviewAnimation);
    this.observers = new ScrollObserver(".gasp_animate_title", this._gaspAnimation, {rootMargin: "-100px 0px"});
    this.observers = new ScrollObserver(".swiper-container", this._toggleSlideAnimation.bind(this), {once: false});
    this.observers = new ScrollObserver(".main_content", this._toggleInviewAnimation.bind(this), {once: false, rootMargin: "-350px 0px"});
  }
}
