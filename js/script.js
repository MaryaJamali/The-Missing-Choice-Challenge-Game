const array = ["Python", "Javascript"];
// Player score, computer score
let score = [0, 0];
// Find page elements
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
// Create an event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", startChallenge);
}

function startChallenge(btn) {
    let playerGuess = btn.target.innerText
    // Choosing a computer randomly without decimals
    let computerSelection = Math.floor(Math.random() * 2);
    let computerGuess = array[computerSelection];
    message.innerHTML = "Computer Selected : " + computerGuess;
    let output;
    if (playerGuess === computerGuess) {
        output = "<br/> Player Win . Bravo! .....  ";
        // Add points to the player
        score[0]++;
    }
    else {
        output = "<br/> Computer Win . Bravo! .....  ";
        // Add points to the Computer
        score[1]++;
    }
    message.innerHTML += output + "Player : " + score[0] + " Computer : " + score[1];

}