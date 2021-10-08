document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider('.swiper-container');
  hero.start();

  setTimeout(() => {
    hero.stop();
  }, 13000);
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'fade',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000
    });
  }
  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

