let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, secret_target) =>{

    const difference = (a, b) => Math.abs(a, b);
    const numMan = difference(human, secret_target);
    const numComputer = difference(computer , secret_target);

    if (numMan === numComputer){
        updateScore('human')
        return true;
        
    }
    else if(numMan < numComputer){
        updateScore('human')
        return true;
    }
    else{
        return false;
    }

};

const updateScore = (winner) =>{
    if ( winner === 'human '){
        humanScore += 1;
    }
    else{
        computerScore += 1;
    };

    
};

const advanceRound = () =>{
    
    currentRoundNumber += 1;
};