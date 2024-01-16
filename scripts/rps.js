let roundSelection = document.getElementById('roundSelection');
let oneRoundBtn = document.getElementById('oneRoundBtn');
let fiveRoundBtn = document.getElementById('fiveRoundBtn');
let sevenRoundBtn = document.getElementById('sevenRoundBtn');

let choices = document.getElementById('choices');
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

let backBtn = document.getElementById('backBtn');
let rounds = 1;

backBtn.addEventListener('click', function(){
    location.href = '../index.html';
})

oneRoundBtn.addEventListener('click', function(){
    Play(rounds);
})

fiveRoundBtn.addEventListener('click', function(){
    rounds = 5;
    Play(rounds);
})

sevenRoundBtn.addEventListener('click', function(){
    rounds = 7;
    Play(rounds);
})

function Play(numRounds){
    roundSelection.innerHTML = "";


    for(let i = 0; i < numRounds; i++){

    }
}