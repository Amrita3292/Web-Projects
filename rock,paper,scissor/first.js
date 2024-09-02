let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play Again."
    msg.style.backgroundColor="#081b31";
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Lose");
        msg.innerText="You Lose.";
        msg.style.backgroundColor="Red";
    }
}

const playGame=(userChoice) => {
    console.log("user choices =",userChoice);
    const compChoice=genCompChoice();
    console.log("user choices =",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => { 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
}); 

