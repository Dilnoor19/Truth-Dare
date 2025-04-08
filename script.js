let playerList = [];

function startGame() {
  const input = document.getElementById("players").value.trim();
  playerList = input.split("\n").map(name => name.trim()).filter(name => name !== "");

  if (playerList.length < 2) {
    alert("Please enter at least 2 player names.");
    return;
  }

  document.querySelector(".player-input").classList.add("hidden");
  document.querySelector(".gameplay").classList.remove("hidden");
}

function playRound() {
  const randomPlayer = playerList[Math.floor(Math.random() * playerList.length)];
  const choice = Math.random() < 0.5 ? "Truth" : "Dare";

  const resultText = `${randomPlayer}, you got: 🔥 ${choice}!`;
  document.getElementById("resultDisplay").textContent = resultText;
}