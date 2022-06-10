/******************************************************* 
 * 
 * 
 * 参考:
 *   
 * 
 * 
 * 
 *******************************************************/

// Firestore に対する操作を行うためのメソッドをインポートする
import { query, where, orderBy, collection, doc, updateDoc, setDoc, addDoc, getDoc, getDocs, onSnapshot, initializeFirestore, getFirestore } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Firebaseのファイアストアにアクセスする用のインスタンス作成
const db = getFirestore();

jQuery(document).ready(function($) {
    "use strict";  // 厳格なエラーチェックが行われるモードに切り替える
    
    // フォームの「送信」ボタンをクリックしたときに走るfunction
    $('form.contactForm').submit(function(event) {
        // ページの遷移を停止させることで、エラーを防ぐ
        event.preventDefault();

        // ボタンを無効化する(二重送信の防止)
        $button.attr('disabled', true);

        // 操作対象のフォーム要素を取得
        var $form = $(this);
        
        // 送信ボタンを取得
        // （後で使う: 二重送信を防止する。）
        var $button = $form.find('button');

        // 現時刻の日付情報を取得する
        const sendDate = new Date();


        // フォームに入力された値をオブジェクトに格納する
        const inquiry = {
            name:  $form.name.value,
            email: $form.email.value,
            title: $form.subject.value,
            body:  $form.message.value,
            date:  sendDate,
        };

        console.log('inquiry:\n' + inquiry);

        // Firebase に情報を送信する[ 第一引数: Firestoreのインスタンス, 第二引数: コレクション名, 第三引数: 追加するデータ(配列) ]
        addDoc(collection(db, "inquiries"), inquiry)
        .then(() => {
            // 送信が完了したことを案内するメッセージを表示する (#sendmessage 要素の display:none; を削除すると、非表示が解かれる)
            $('#sendmessage').removeClass('display');

            // フォームに入力された値をリセットする
            $form.reset();

        }).catch(error => {
            // 送信が失敗したことを案内するメッセージを表示する
            $('#errormessage').removeClass('display');
            console.log("送信に失敗しました。エラーメッセージは以下のとおりです。\n", error.message);
        });


        // ボタンの無効化を解除し、再送信を許可する()
        $button.attr('disabled', false);






        


        // フォームの送信が成功可否に関わらず、以下のメッセージは表示される
        console.log("フォーム送信処理終了");


    });
});