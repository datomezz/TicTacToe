let areaArr = document.querySelectorAll(".game-element");
let areaCount = [0,1,2,3,4,5,6,7,8];
let answerArr = new Array();
let answer = 0;

for(let i = 0; i < areaArr.length; i++){
        function action(i){
        answer += i;
        answerArr.push(i);
        areaArr[i].innerText = "X";
        areaArr[i].style.backgroundColor = "#f00";
        areaCount[i] = 9;
        console.log(answer);
        console.log(answerArr);
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
        areaArr[rand].style.backgroundColor = "blue";
        console.log(answer);
        lastCountCheck();
    } 
    else {
        random();
    }
    
}
function lastCountCheck(){
    if(answerArr.length > 7){
        answer = 36 - answer;
        areaArr[answer].innerText = "O";
        areaArr[answer].style.backgroundColor = "blue";
        console.log(areaArr[answer], "answer");
    }
}
// else if (areaCount[0] + areaCount[1] + areaCount[2] + areaCount[3] +
//     areaCount[4] + areaCount[5] + areaCount[6] + areaCount[7] + areaCount[8] > 72){
//     let answer = (areaCount[0] + areaCount[1] + areaCount[2] + areaCount[3] +
//     areaCount[4] + areaCount[5] + areaCount[6] + areaCount[7] + areaCount[8]) % 9;
//     areaArr[answer].innerText = "O";
// } 