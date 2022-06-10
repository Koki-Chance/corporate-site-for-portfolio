jQuery(document).ready(function($) {
    "use strict";
    
    // フォームの「送信」ボタンをクリックしたときに走るfunction
    $('form.newsLetterForm').submit(function(event) {
        event.preventDefault();
        



        // サーバーにメールアドレスを受け渡す処理を書く
        


        

        console.log("ニュースレター登録用email送信完了");
    });
});