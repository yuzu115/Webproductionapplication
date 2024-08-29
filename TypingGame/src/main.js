class App{
    //コンストラクター
    constructor(){
        this.eventHandlers=[];
        this.intervals=[];

        //ページのロードが完了したとき、タイトル画面を描画する関数を実行する
        window.addEventListener('load',()=>{
            this.title();
        });
    }
    //「1」を「01」にしてくれる関数
    twoDigit(num){
        return num<10?`0${num}`:num.toString();
    }
    //タイトル
    title(){
        //全てのイベントハンドラーを解除　（この関数の前に実行された関数でリスナーされたイベントのハンドラーはすべて不要なため）
        if(this.eventHandlers.length){
            for(let i=0;i<this.eventHandlers.length;i++)
            {
                if(this.eventHandlers[i])document.removeEventListener(this.eventHandlers[i].typeName,this.eventHandlers[i].callback);
            }
            this.eventHandlers=[];
        }
        //UIを構築し描画
        let titleElement=`<div class=S"title"><h1>タイピングゲーム</h1><button onclick="app.playTypingGame();">ゲーム開始</button></div>`;
        let containerElement
    }
}