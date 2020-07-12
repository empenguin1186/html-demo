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

    const hero = new HeroSlider('.swiper-container');
    hero.start({ delay: 2000 });
    setTimeout(() => {
        hero.stop();
    }, 5000);
});