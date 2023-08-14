const pbottom = document.querySelector('.pbottom');
const time = document.querySelector('#timer');
const numHit = document.querySelector('#numHit');
const scoreNum = document.querySelector('#score');
const startButton = document.querySelector('#startButton'); // Get the Start Game button

var timer = 60;
var score = 0;

function increase() {
    // const int = parseInt(numHit.textContent);
    score += 1;
    scoreNum.textContent = score;
}

function myFunction() {
    const numBubbles = 170; // Number of bubbles
    for (let i = 0; i < numBubbles; i++) {
        const rand = Math.floor(Math.random() * 10);
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = rand;
        pbottom.appendChild(bubble);
    }
}

function runTimer() {
    var timer1 = setInterval(() => {
        if (timer > 0) {
            timer -= 1;
            time.innerHTML = timer;
        }
        else {
            clearInterval(timer1);
            numHit.innerHTML = '';
            pbottom.innerHTML =
                `<div class='result'>
                    <h1>Game Over</h1>
                    <h2>Your Score is ${score}</h2>
                    <button onclick="location.reload()">Play Again</button>
                </div>`;
        }
    }, 1000);
}

function getNewHit() {
    const rand1 = Math.floor(Math.random() * 10);
    numHit.textContent = rand1;
}

// Function to start the game
function startGame() {
    startButton.style.display = 'none'; // Hide the Start Game button
    runTimer();
    myFunction();
}

pbottom.addEventListener('click', (e) => {
    if (e.target.classList.contains('bubble') && e.target.textContent === numHit.textContent) {
        e.target.remove();
        increase();
        getNewHit();
    }
})

// Attach startGame function to the Start Game button's click event
startButton.addEventListener('click', startGame);
