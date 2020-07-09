class TextAnimation {

    constructor(el) {
        this.el = el instanceof HTMLElement ? el : document.querySelector(el);
        // this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    animate() {
        this.el.classList.toggle('inview');
    }
}