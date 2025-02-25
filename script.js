let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("player-choice").innerText = getEmoji(playerChoice);
    document.getElementById("computer-choice").innerText = getEmoji(computerChoice);

    let resultText = "";

    if (playerChoice === computerChoice) {
        resultText = "It's a tie! 🤝";
        ties++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You win! 🎉 ${getEmoji(playerChoice)} beats ${getEmoji(computerChoice)}`;
        wins++;
    } else {
        resultText = `You lose! 😢 ${getEmoji(computerChoice)} beats ${getEmoji(playerChoice)}`;
        losses++;
    }

    document.getElementById("result-text").innerText = resultText;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("ties").innerText = ties;
}

function getEmoji(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "✌";
    return "❓";
}
