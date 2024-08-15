var tento1;
var tento2;
var tento3;
var kieru;
var hyoji;
var botan;
var tensu=0;
var saiko=0;
var gameover=false;
var lastspurt=false;

window.onload = function(){
    start();
}

function start(){
    tento1=document.getElementById("gazo1");
    tento2=document.getElementById("gazo2");
    tento3=document.getElementById("gazo3");
    hyoji=document.getElementById("ten");
    botan=document.getElementById("start");
    tento1.onclick = function(){
        tento1.src="naki.png";
        setTimeout(modosu1,1000);
        tensu=tensu+1;
        hyoji.innerHTML=tensu;
    };
    tento2.onclick=function(){
        tento2.src="naki.png";
        setTimeout(modosu2,1000);
        tensu=tensu+1;
        hyoji.innerHTML=tensu;
    };
    tento3.onclick=function(){
        tento3.src="naki.png";
        setTimeout(modosu3,1000);
        tensu=tensu+1;
        hyoji.innerHTML=tensu;
    };
    botan.onclick=function(){
        gameover=false;
        lastspurt=false;
        tensu=0;
        hyoji.innerHTML=tensu;
        start();
    }
    var ransu3=Math.random()*3;
    setTimeout(kesu1,ransu3*1000);
    setTimeout(kesu2,ransu3*1000);
    setTimeout(kesu3,ransu3*1000);
    setTimeout(stop,60000);
    setTimeout(nokori10,50000);
}

function modosu1(){
    tento1.src="tento.png";
}

function modosu2(){
    tento2.src="tento.png";
}

function modosu3(){
    tento3.src="tento.png";
}

function kesu1(){
    tento1.style.visibility="hidden";
    var ransu=Math.random()*3;
    if(lastspurt==true){
        setTimeout(dasu101,ransu*1000);
    }
    else{
        setTimeout(dasu1,ransu*1000);
    }
}

function kesu2(){
    tento2.style.visibility="hidden";
    var ransu=Math.random()*3;
    if(lastspurt==true){
        setTimeout(dasu102,ransu*1000);
    }
    else{
        setTimeout(dasu2,ransu*1000);
    }
}

function kesu3(){
    tento3.style.visibility="hidden";
    var ransu=Math.random()*3;
    if(lastspurt==true){
        setTimeout(dasu103,ransu*1000);
    }
    else{
        setTimeout(dasu3,ransu*1000);
    }
}

function dasu1(){
    if(gameover==false){
        tento1.style.visibility="visible";
    }
    var ransu=Math.random()*3;
    setTimeout(kesu1,ransu*1000);
}

function dasu2(){
    if(gameover==false){
        tento2.style.visibility="visible";
    }
    var ransu=Math.random()*3;
    setTimeout(kesu2,ransu*1000);
}

function dasu3(){
    if(gameover==false){
        tento3.style.visibility="visible";
    }
    var ransu=Math.random()*3;
    setTimeout(kesu3,ransu*1000);
}

function dasu101(){
    if(gameover==false){
        tento1.style.visibility="visible";
    }
    var ransu=Math.random();
    setTimeout(kesu1,ransu*1000);
}

function dasu102(){
    if(gameover==false){
        tento2.style.visibility="visible";
    }
    var ransu=Math.random();
    setTimeout(kesu2,ransu*1000);
}

function dasu103(){
    if(gameover==false){
        tento3.style.visibility="visible";
    }
    var ransu=Math.random();
    setTimeout(kesu3,ransu*1000);
}

function stop(){
    alert("ゲームオーバー！");
    gameover=true;
    tento1.style.visibility="hidden";
    tento2.style.visibility="hidden";
    tento3.style.visibility="hidden";
    if(tensu>saiko){
        saiko=tensu;
        kiroku=document.getElementById("saiko");
        kiroku.innerHTML=saiko;
    }
}

function nokori10(){
    alert("もう、おこったぞ！");
    lastspurt=true;
}