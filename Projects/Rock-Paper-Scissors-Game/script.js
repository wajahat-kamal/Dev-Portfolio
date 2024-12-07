const choices = document.querySelectorAll(".img");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

let computerScore = 0;
let userScore = 0;

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
};

const showWinner = (userWin ,userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lost. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice: ", userChoice);

  // computer choice

  const computerChoice = genComputerChoice();
  console.log("Computer Choice: ", computerChoice);

  if (userChoice === computerChoice) {
    msg.innerText = "Game was Draw. Try Again.";
    msg.style.backgroundColor = "#081b31";
    return;
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin ,userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
