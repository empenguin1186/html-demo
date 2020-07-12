window.addEventListener('DOMContentLoaded', function () {

    // スマホかPCか
    const tapOrClick = window.ontouchstart ? 'touchstart' : 'click'

    // メニューボタンをクリックした時の挙動
    const menuBtn = document.querySelector('.mobile-menu__btn');
    menuBtn.addEventListener(tapOrClick, () => {
        document.querySelector('#global-container').classList.toggle('menu-open');
    });

    const menuCover = document.querySelector('.mobile-menu__cover');
    menuCover.addEventListener(tapOrClick, () => {
        document.querySelector('#global-container').classList.toggle('menu-open');
    });

    // ヒーロースライダーの設定
    const hero = new HeroSlider('.swiper-container');
    hero.start({ delay: 2000 });
    setTimeout(() => {
        hero.stop();
    }, 5000);

});