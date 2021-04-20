let smiley = document.getElementById("smile");
let scoreText = document.getElementById("score");
smiley.addEventListener("click", addScore);

let score = 0;
let scoreEnabled = false;

function makeFrown() {
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber == 0) {
        scoreEnabled = true;
        smiley.innerHTML = "<img src='images/frown.png'>";
    } else {
        scoreEnabled = false;
        smiley.innerHTML = "<img src='images/smile.png'>";
    }
}

function addScore() {
    if (scoreEnabled) {
        score += 100;
        scoreText.innerText = score;
        smiley.innerHTML = "<img src='images/frown.png'>";
    } else {
        score -= 50;
        scoreText.innerText = score;
    }
}

setInterval(makeFrown, 500);

