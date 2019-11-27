let areaArr = document.querySelectorAll(".game-element");
let areaCount = [0,1,2,3,4,5,6,7,8];
let answerArr = new Array();
let answer = 0;

let playerScore = 0;
let botScore = 0;
document.querySelector("#player-score").innerText = playerScore;
document.querySelector("#bot-score").innerText = botScore;

// parseInt(sessionStorage.getItem("pscore"));
// parseInt(sessionStorage.getItem("bscore"));

for(let i = 0; i < areaArr.length; i++){
        function action(i){
        answer += i;
        answerArr.push(i);
        areaArr[i].innerText = "X";
        areaArr[i].classList.add("active"); 
        areaCount[i] = 9;
        random();
        winnerChoose("XXX");
    }
}

function random(){
    let rand = Math.floor(Math.random() * areaCount.length);

    if(areaCount[rand] != 9){
        answer += rand;
        answerArr.push(rand);
        areaArr[rand].innerText = "O";
        areaArr[rand].classList.add("active"); 
        areaArr[rand].style.backgroundColor = "#0abde3";
        console.log(answer);
        console.log(answerArr);
        winnerChoose("OOO");
    } 
    else {
        random();
    }
}

function winnerChoose(y){
    let x = document.querySelectorAll(".game-container a");
    let header = document.querySelector(".header h1");
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
       if(result = "X"){
           playerScore += 1;
           document.querySelector("#player-score").innerText = playerScore;
           sessionStorage.setItem("pscore", playerScore);
       } else if (result = "O") {
            botScore += 1;
            document.querySelector("#bot-score").innerText = botScore;
            sessionStorage.setItem("bscore", botScore);
       }
       for(let i = 0; i < x.length; i++){
           x[i].style.pointerEvents = "none";
       }
       
    }
}