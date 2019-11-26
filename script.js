let areaArr = document.querySelectorAll(".game-element");
let areaCount = [0,1,2,3,4,5,6,7,8];
let answerArr = new Array();
let answer = 0;

for(let i = 0; i < areaArr.length; i++){
        function action(i){
        answer += i;
        answerArr.push(i);
        areaArr[i].innerText = "X";
        areaArr[i].classList.add("active"); 
        areaCount[i] = 9;
        random();
    }
}

function random(){
    let rand = Math.floor(Math.random() * areaCount.length);

    if(areaCount[rand] != 9){
        answer += rand;
        answerArr.push(rand);
        areaCount[rand] = (areaCount[rand] / areaCount[rand]) + 8;
        areaArr[rand].innerText = "O";
        areaArr[rand].classList.add("active"); 
        areaArr[rand].style.backgroundColor = "#0abde3";
        console.log(answer);
        console.log(answerArr);
        lastCountCheck();
    } 
    else {
        random();
    }
}
function lastCountCheck(){
    if(answerArr.length >= 8 ){
        answer = 36 - answer;
        areaArr[answer].innerText = "O";
        areaArr[answer].classList.add("active");
        areaArr[answer].style.backgroundColor = "#0abde3";
        console.log(areaArr[answer], "answer");
        let loc = function(){
            location.replace("https://datomezz.github.io/TicTacToe/");
        }
        setInterval(loc, 3000);
    }
}