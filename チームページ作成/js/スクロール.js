// スクロール必須の設定
var mySwiper = new Swiper('.swiper-container', {
    //スピード
    speed: 100,
    //スクロールのループ
    loop: true,
    //次へボタンの戻るボタン
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});