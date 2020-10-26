function computerPlay(){
    let computerChoice = Math.floor(Math.random() *3);
    if(computerChoice===0){
        return "rock";
    }
    else if(computerChoice===1){
        return "paper"
    }
    else if(computerChoice===2){
        return "scissors";
    }

}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.tolowerCase();
    if(playerSelection=computerSelection){
        return "Draw!!";
    }
    else if((playerSelection=="rock")&&(computerSelection=="paper")){
        return "You lose! paper beats rock";
    }
    else if((playerSelection=="rock")&&(computerSelection=="scissors")){
        return "you Win! rock beats scissor";
    }
    else if((playerSelection=="paper")&&(computerSelection=="rock")){
        return "you Win! paper beats rock";
    }
    else if((playerSelection=="paper")&&(computerSelection=="scissors")){
        return "you Lose!! scissor beats paper";
    }
    else if((playerSelection=="scissors")&&(computerSelection=="rock")){
        return "you Lose!! rock beats scissors";
    }
    else if((playerSelection=="scissors")&&(computerSelection=="paper")){
        return "You Win!! scissors beats paper"
    }
    else{
        return "You didn't enter 'rock','paper' or 'scissor'";
    }
}

function game(){
    let rounds;
    let wins =0;
    let losses=0;
    let draws=0;

    for(rounds==0; rounds<=5; rounds++){
        let playerSelection = prompt("Enter 'rock','paper' or 'scissor'");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        let results =playRound(playerSelection,computerSelection);
        if(results.includes("Win")){
            Wins +=1;
        }
        else if(results.includes("losses")){
            losses +=1;
        }
        else{
            draws +=1;
        }
    }console.log("Final Score: You - " + wins + " , Computer - " + losses + " , Draws - " + draws);

}
 
game();
