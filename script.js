let areaArr = document.querySelectorAll(".game-element");
areaCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for(let i = 0; i < areaArr.length; i++){
    function action(i){
        areaCount[i] = 1;
        if(areaCount[i] = 1){
            areaArr[i].innerText = "X";
        }
        random(i);
        console.log(rand);
    }
}

function random(i){
    let rand = Math.floor(Math.random() * 8);
    if(areaCount[i] == 1){
        random();
    } else {
        areaArr[rand].innerText = "O";
    }
}