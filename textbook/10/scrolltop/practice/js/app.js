$(function () {
    //上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    //ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn(); //フェードインで表示
        }else{
            topBtn.fadeOut(); //フェードアウトで非表示
        }
    });

    //クリックで上に戻るボタン
    topBtn.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        },500);
    });
})