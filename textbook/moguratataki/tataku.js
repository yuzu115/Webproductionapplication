var tentokun;

window.onload=function(){
    start();
};

function start(){
    tentokun=document.getElementById("gazo");
    var ransu=Math.random();
    setTimeout(kesu,3000);
}

function kesu(){
    tentokun.style.visibility="hidden";
    var ransu=Math.random();
    setTimeout(dasu,3000);
}

function dasu(){
    tentokun.style.visibility="visible";
    var ransu=Math.random();
    setTimeout(kesu,3000);
}