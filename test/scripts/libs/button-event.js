class AnimationByBtnClick {

    constructor(btn) {
        this.btn = document.querySelector(btn);
    }

    addEvent(className, toggleName) {
        this.addEventByCallBack(className, () => {
            document.querySelector(className).classList.toggle(toggleName);
        });
    }

    addEventByCallBack(className, cb) {
        const clickOrTap = window.ontouchstart ? 'touchstart' : 'click';
        this.btn.addEventListener(clickOrTap, cb);
    }
}