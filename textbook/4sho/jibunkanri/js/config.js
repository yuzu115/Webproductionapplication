//cssに設定色　反映する関数
function changeBackColor(){
    //画面値の取得
    let r=document.getElementById('bgColorR').Value;
    let g=document.getElementById('bgColorG').Value;
    let b=document.getElementById('bgColorB').Value;

    //cssを変更
    let rgb="rgb("+r+","+g+","+b+")";
    document.documentElement.style.setProperty('--main-bg-color',rgb);
}

//設定色を初期状態にリセットする関数
function resetBackColor(){
    //画面値を初期値に
    document.getElementById('bgColorR').value=praseInt('ff',16);
    document.getElementById('bgColorG').value=praseInt('57',16);
    document.getElementById('bgColorB').value=praseInt('22',16);

    changeBackColor();
}