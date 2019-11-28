let areaArr = document.querySelectorAll(".game-element");
let areaCount = [0,1,2,3,4,5,6,7,8];
let answerArr = new Array(); // used to disable random() at 9th element
let header = document.querySelector(".header h1");

const click_sound = new Audio("click.mp3");
const botClick_sound = new Audio("botClick.mp3");
const finish_sound = new Audio("finish.mp3");


let switcher = 0;

let player1 = new String();
let player2 = new String();

function toggle(){
    for(let i = 0; i < areaArr.length; i++){
        areaArr[i].getAttributeNode("onclick").value = "versus(" + i + ")";
    }
}

for(let i = 0; i < areaArr.length; i++){
    function versus(i){
        answerArr.push(i);
        console.log(answerArr);
        if(answerArr.length % 2 == 0){
            areaArr[i].innerText = "O";
            areaArr[i].classList.add("active"); 
            areaArr[i].style.backgroundColor = "#0abde3";
            header.innerText = "X's Turn";
            botClick_sound.play();
            winnerChoose("OOO");
        } else if(answerArr.length % 2 == 1){
            areaArr[i].innerText = "X";
            areaArr[i].classList.add("active");
            header.innerText = "O's Turn";
            click_sound.play();
            winnerChoose("XXX");
        }
    }
}

for(let i = 0; i < areaArr.length; i++){
        function action(i){
        answerArr.push(i);
        areaArr[i].innerText = "X";
        areaArr[i].classList.add("active"); 
        areaCount[i] = 9;
        click_sound.play();
        winnerChoose("XXX");
        if(answerArr.length >= 8){
            winnerChoose("XXX");
        } else {
        random();
        }
    }
}

function random(){
    let rand = Math.floor(Math.random() * areaCount.length);
    if(areaCount[rand] != 9){
        answerArr.push(rand);
        areaCount[rand] = 9;
        botClick_sound.play();
        areaArr[rand].innerText = "O";
        areaArr[rand].classList.add("active"); 
        areaArr[rand].style.backgroundColor = "#0abde3";
        
        winnerChoose("OOO");
    } 
    else {
        random();
    }
}



function winnerChoose(y){
    let x = document.querySelectorAll(".game-container a");
    let result = y.match(/O/m) || y.match(/X/m);
    if(x[0].innerText + x[1].innerText + x[2].innerText === y ||
       x[3].innerText + x[4].innerText + x[5].innerText === y ||
       x[6].innerText + x[7].innerText + x[8].innerText === y ||
       
       x[0].innerText + x[3].innerText + x[6].innerText === y ||
       x[1].innerText + x[4].innerText + x[7].innerText === y ||
       x[2].innerText + x[5].innerText + x[8].innerText === y ||

       x[0].innerText + x[4].innerText + x[8].innerText === y ||
       x[2].innerText + x[4].innerText + x[6].innerText === y ){
       header.innerText = result + " - WIN";
       header.style.fontSize = "14vh";
        finish_sound.play();
       for(let i = 0; i < x.length; i++){
           x[i].style.pointerEvents = "none";
       }
       setInterval(function(){
        window.location.href = "https://datomezz.github.io/TicTacToe/";
       }, 3000);
    }
}