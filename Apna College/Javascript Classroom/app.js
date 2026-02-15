let gameSeq = [];
let playerSeq = [];

let buttons = ["yellow", "blue", "red", "green"];

let started = false;
let level = 0;

document.addEventListener('keydown', function() {
    if(started === false) {
        console.log('Game Started');
        started = true;

        levelUp();
    }
});

function levelUp() {
    level++;
    let h2 = document.querySelector('h2')
    h2.textContent = 'Level ' + level;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = buttons[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
};    

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);
}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 250);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');
    playerSeq.push(userColor);

    checkAnswer();
}

let btns = document.querySelectorAll('.btn');
for(btn of btns) {
    btn.addEventListener('click', btnPress);
}
        
function checkAnswer() {
    if(playerSeq.length === gameSeq.length) {
        setTimeout(function() {
            levelUp();
            playerSeq = [];
        }, 1000);
    }
    let currIdx = level - 1;
    if(playerSeq[currIdx] === gameSeq[currIdx]) {
        console.log('Correct');
    }
    else {
        h2.textContent = 'Game Over, Press Any Key to Restart';
    }
}

console.log(gameSeq);
console.log(playerSeq);