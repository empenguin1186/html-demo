class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper (this.el, {

            // Optional parameters
            // スライド方向
            // direction: 'vertical',
        
            // フェードするエフェクトを付与する
            // effect: 'fade',
        
            // 立体的なエフェクトを付与する
            effect: 'coverflow',

            // ホバー時のマウスをグラブに
            grabCursor: true,
            loop: true,

            // 画像を中央揃えに
            centeredSlides: true,

            // 画面に表示する画像の数
            slidesPerView: 1,

            // アニメーションに効果時間
            speed: 1000,

            // 画面の幅が変更された場合に伴う設定変更
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            }

            // 自動アニメーションの設定
            // autoplay: {
            //     // 4秒後にアニメーションが切り替わる
            //     delay: 4000,

            //     // クリックしても自動アニメーションが行われる
            //     disableOnInteraction: false
            // }
        });
    }

    start(options = {}) {

        options = Object.assign({
            // 4秒後にアニメーションが切り替わる
            delay: 4000,
    
            // クリックしても自動アニメーションが行われる
            disableOnInteraction: false
        }, options)
        this.swiper.params.autoplay = options

        // autoplayを開始する
        this.swiper.autoplay.start();
    }

    stop() {
        // autoplayを停止する
        this.swiper.autoplay.stop();
    }
}