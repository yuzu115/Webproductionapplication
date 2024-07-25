//要素オブジェクトの取得
let getResult = document.getElementById('getResult');
let result = document.getElementById('result');

//イベントの登録
getResult.addEventListener('click',function(){
    result.innerHTML = '結果は「' + omikuji.getResult() + '」でした。';
});

//おみくじオブジェクトの定義
let omikuji = {
    result: ["大吉","吉","中吉","小吉","凶"],
    getResult: function() {
        let result = this.result;
        return result[Math.floor(Math.random() * result.length)];
    }
}

console.log(omikuji.getResult());