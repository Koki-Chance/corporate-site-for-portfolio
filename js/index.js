/* 
 * index.js 
 */

// filterizrをインポートする
// import Filterizr from 'filterizr'


/* wow.js を起動する */
new WOW().init();


/* ページを下へスクロールすると、固定しているナビゲーションバーのデザインを変化させる */
window.addEventListener("scroll", function(){
    // header 要素を取得
    var header = document.querySelector("nav");
    // 要素内に任意のクラスが存在しない場合、そのクラスを付与する
    // 第一引数: クラス名、第二引数: toggleの発火条件
    header.classList.toggle("scrolled", window.scrollY > 20);
})



/* 「我々の強み」の横棒グラフのアニメーション */
$('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
        // .progress-bar クラスが付与された要素に対して width: "aria-valuenowの値%" と追記する。
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, { offset: '80%'} );

/* 
 * 上記解説
 * 1. waypoint -> 画面の任意の地点までスクロールしたら発火するイベント。
 *   第一引数: 発火する関数 
 *   第二引数: オプション
 * 
 * 2. offset -> 発火タイミング(画面下部からの位置をパーセントで指定する)
 */




/* カウントアップ */
// 数値をカウントアップさせるアニメーションを起動する（facts で使用する）
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1500
});







/* 
 * filterizr のイニシャライズ 
 * 参考リンク:
 * 1. Filterizr.js - https://yiotis.net/filterizr/#/
 * 2. Shuffle.js(filterizrがだめだった時用) - https://vestride.github.io/Shuffle/#install
 * 3. Filterizr #1. 基本的なフィルタリング(DESIGN LINK WORK) - https://designlink.work/ja/filterizr/
 */

// オプションを設定
const filterizrOptions = { 
    
        animationDuration: 0.5,
        callbacks: {
            onInit: function() { },
            onFilteringStart: function() { },
            onFilteringEnd: function() { },
            onShufflingStart: function() { },
            onShufflingEnd: function() { },
            onSortingStart: function() { },
            onSortingEnd: function() { }
        },
        controlsSelector: '',
        delay: 0,
        delayMode: 'progressive',
        easing: 'ease-out',
        filter: 'all',
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: {
            opacity: 0,
            transform: 'scale(1)'
        },
        gridItemsSelector: '.filtr-item',
        gutterPixels: 0,
        layout: 'sameSize',
        multifilterLogicalOperator: 'or',
        searchTerm: '',
        setupControls: true,
        spinner: {
            enabled: false,
            fillColor: '#2184D0',
            styles: {
                height: '75px',
                margin: '0 auto',
                width: '75px',
                'z-index': 2,
            },
        },
};


// filterizr をイニシャライズする
$('.filter-container').filterizr({filterizrOptions});
