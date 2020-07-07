document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = this.querySelector('.mobile-menu-icon');
    const clickOrTap = window.ontouchstart ? 'touchstart' : 'click';
    menuBtn.addEventListener(clickOrTap, function () {
        document.querySelector('body').classList.toggle('menu-open');
    })

    const el = document.querySelector('.animate__title');
    const str = el.innerHTML.trim().split("");

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");

    const animateBtn = document.querySelector('.btn-3d');
    animateBtn.addEventListener(clickOrTap, () => {
        document.querySelector('.animate__title').classList.toggle('inview');
    });
});