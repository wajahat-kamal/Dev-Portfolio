const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkEvenOrOdd() {
  const number = userInput.value;
  if (number % 2 === 0) {
    result.innerText = `${number} is even`;
  } else {
    result.innerText = `${number} is Odd`;
  }
}

checkBtn.addEventListener("click", checkEvenOrOdd);
