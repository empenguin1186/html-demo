document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = this.querySelector('.mobile-menu-icon');
    const clickOrTap = window.ontouchstart ? 'touchstart' : 'click';
    menuBtn.addEventListener(clickOrTap, function () {
        document.querySelector('body').classList.toggle('menu-open');
    })
});