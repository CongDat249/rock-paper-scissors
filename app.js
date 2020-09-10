let userNum;
let machineNum;
const result = document.querySelector("#result");
const machineOption = document.querySelector("#machineOption");
const userOption = document.querySelector("#userOption");
const userScore = document.querySelector("#userScore");
const machineScore = document.querySelector("#machineScore");
let option = {
    0: "rock",
    1: "paper",
    2: "scissors",
}

let score = {
    machine: 0,
    user: 0
}
function compare(){
    machineOption.textContent = "machine choose: " + option[machineNum];
    userOption.textContent = "you choose: " + option[userNum]
    if(userNum == machineNum){
        result.textContent = "Draw";
    }
    else if(userNum - machineNum == -1 || userNum - machineNum == 2){
        result.textContent = "LOSE";
        score["machine"] ++;
    }
    else{
        result.textContent = "WIN";
        score["user"] ++;
    }
    userScore.textContent = score["user"];
    machineScore.textContent = score["machine"];
}

document.querySelectorAll("button").forEach(function(button) {
    button.onclick = function() {
        userNum =  this.value;
        machineNum = Math.floor(Math.random()*3);
        compare();
    }
});


