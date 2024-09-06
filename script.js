const choices = document.querySelector(".choices");
const choicesArray = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissor", emoji: "✌️" },
];


const userScoreBoard=document.getElementById("user-score");
const ComputerScoreBoard=document.getElementById("computer-score");


choices.addEventListener("click", (e) => {
  const userHistory = document.querySelector(".user-history");
  const computerHistory = document.querySelector(".computer-history");
  const userChoice = e.target.classList[0];
  const ComputerChoice =
    choicesArray[Math.floor(Math.random() * choicesArray.length)];
  let userScore = parseInt(userScoreBoard.innerText);
  let ComputerScore = parseInt(
    ComputerScoreBoard.innerText
  );

  const newUserDiv = document.createElement("div");
  const newUComputerDiv = document.createElement("div");

  // User and Computer Ties
  if (
    (userChoice === "rock" && ComputerChoice.name === "rock") ||
    (userChoice === "paper" && ComputerChoice.name === "paper") ||
    (userChoice === "scissor" && ComputerChoice.name === "scissor")
  ) {
    newUserDiv.classList.add(`${ComputerChoice.name}`);
    newUComputerDiv.classList.add(`${ComputerChoice.name}`);

    newUserDiv.innerText = ComputerChoice.emoji;
    newUComputerDiv.innerText = ComputerChoice.emoji;

    userHistory.append(newUserDiv);
    computerHistory.append(newUComputerDiv);
  }
  // User Wins
  else if (
    (userChoice === "rock" && ComputerChoice.name === "scissor") ||
    (userChoice === "paper" && ComputerChoice.name === "rock") ||
    (userChoice === "scissor" && ComputerChoice.name === "paper")
  ) {
    newUserDiv.classList.add(`${userChoice}`);
    newUComputerDiv.classList.add(`${ComputerChoice.name}`);

    const userChoiceObject = choicesArray.find(
      (choice) => choice.name === userChoice
    );
    newUserDiv.innerText = userChoiceObject.emoji;
    newUComputerDiv.innerText = ComputerChoice.emoji;

    userHistory.append(newUserDiv);
    computerHistory.append(newUComputerDiv);
    userScoreBoard.innerText = userScore + 1;
  }
  // Computer Wins
  else {
    newUserDiv.classList.add(`${userChoice}`);
    newUComputerDiv.classList.add(`${ComputerChoice.name}`);

    const userChoiceObject = choicesArray.find(
      (choice) => choice.name === userChoice
    );
    newUserDiv.innerText = userChoiceObject.emoji;
    newUComputerDiv.innerText = ComputerChoice.emoji;
    newUComputerDiv.innerText = ComputerChoice.emoji;

    userHistory.append(newUserDiv);
    computerHistory.append(newUComputerDiv);

    ComputerScoreBoard.innerText = ComputerScore + 1;
  }
});