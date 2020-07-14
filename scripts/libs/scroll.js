class ScrollObserver {

    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        this.cb = cb;

        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            thresholld: 0,
            once: true
        };

        this.options = Object.assign(defaultOptions, options)
        this.once = this.options.once;
        this._init();
    }

    _init() {
        const callback = function (entries, observer) {
            entries.forEach(el => {
                if (el.isIntersecting) {
                    this.cb(el.target, true);
                    if (this.once) {
                        observer.unobserve(el.target);
                    }
                } else {
                    this.cb(el.target, false);
                }
            });
        };

        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}