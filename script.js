let humanScore = 0;
let ComputerScore = 0;



function getComputerChoice(){
    let cc = Math.random();
    
    if (cc < 0.33){
        return 'rock' ;
    }
    else if(cc > 0.33 && cc < 0.66 ){
        return 'paper' ;
    }
    else{
        return 'scissor' ;
    }

}

function getHumanChoice(){
    let user = prompt("Enter the correct option");
    let uc = user.toLowerCase();
    return uc;
}

function playRound( HC , CC){
    if ( HC === CC ){
        console.log("Computer Score: " , ComputerScore);
        console.log("User Score: " , humanScore);
        return console.log("Tie");
    }
    else if( HC === 'paper' && CC === 'rock'){
        humanScore += 1;
        console.log("Computer Score: " , ComputerScore);
        console.log("User Score: " , humanScore);
       
        return console.log("User wins! paper beats Rock!");
    }
    else if( HC === 'rock' && CC === 'scissor'){
        humanScore += 1;
        console.log("Computer Score: " , ComputerScore);
        console.log("User Score: " , humanScore);
        return console.log("User wins! Rock beats Scissor ");

    }
    else if( HC === 'scissor' && CC === 'paper'){
        humanScore += 1;
        console.log("Computer Score: " , ComputerScore);
        console.log("User Score: " , humanScore);
        return console.log("User wins! Scissor beats Paper ");
    }
    else{
        ComputerScore += 1;
        console.log("Computer Score: " , ComputerScore);
        console.log("User Score: " , humanScore);
        return console.log("Computer wins!!");
    }
}


function playGame(){
    for ( let i = 1 ; i <=5 ; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice , computerChoice);
    
    }
    
    if(humanScore > ComputerScore){
        return console.log('User wins');
    }
    else if(ComputerScore > humanScore){
        return console.log('Computer wins');
    }
    else{
        return console.log('Tie');
    }
    

    
    
}

playGame();













