let userNum;
let machineNum;
const control = document.querySelector(".control");
const result = document.querySelector("#result");
const machineOption = document.querySelector("#machineOption");
const userOption = document.querySelector("#userOption");
const userScore = document.querySelector("#userScore");
const machineScore = document.querySelector("#machineScore");
const main = document.querySelector(".main");
let option = {
    0: "rock",
    1: "paper",
    2: "scissors",
}

main.style.display = "none";

function compare(){
    let userImage = document.createElement("img");
    userImage.src = option[userNum] + ".jpg";
    let machineImage = document.createElement("img");
    machineImage.src = option[machineNum] + ".jpg";
    userOption.append(userImage);
    machineOption.append(machineImage);


    if(userNum == machineNum){
        let handshake = document.createElement("img");
        handshake.src = "handshake.gif";
        handshake.style.width = "300px";
        result.append(handshake);
    }
    else if(userNum - machineNum == -1 || userNum - machineNum == 2){
        let machineDance = document.createElement("img");
        machineDance.src = "lose.gif";
        machineDance.style.width = "300px";

        result.append(machineDance);
    }
    else{
        let userDance = document.createElement("img");
        userDance.src = "congratulate.gif";
        userDance.style.width = "300px";
        result.append(userDance);
    }
}

function again(){
    document.addEventListener("keydown", ()=>{
        result.lastElementChild.remove(); 
        main.style.display = "none";
        control.style.display = "flex";
    })
}

document.querySelectorAll(".option").forEach(function(button) {
    button.onclick = function() {
        userNum =  this.value;
        machineNum = Math.floor(Math.random()*3);
        userOption.lastElementChild.remove();        
        machineOption.lastElementChild.remove();       
        compare();
        control.style.display = "none";
        main.style.display = "flex"
        again();
    }
});


