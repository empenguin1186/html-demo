document.addEventListener('DOMContentLoaded', function () {

    // const menuBtn = new AnimationByBtnClick('.mobile-menu-icon');
    // menuBtn.addEvent('body', 'menu-open');
    const menu = new MobileMenu();

    const ta = new TextAnimation('.animate__title');
    ta.animate();

    const animateBtn = new AnimationByBtnClick('.btn-3d');
    animateBtn.addEventByCallBack('.animate__title', ta.animate.bind(ta));

    const callback = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }
    const tso = new ScrollObserver('.scroll__element', callback);

    const imageSlide = function (el, isIntersecting) {
        if (isIntersecting) {
            el.classList.toggle('inview');
        }
    }
    const iso = new ScrollObserver('.cover-slide', imageSlide);
});


class MobileMenu {

    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}