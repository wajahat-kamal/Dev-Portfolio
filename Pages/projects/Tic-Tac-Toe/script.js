const boxes = document.querySelectorAll(".box")
const resetbtn = document.querySelector(".reset")
const result= document.querySelector(".result")
const resultp = document.querySelector(".resultp")
const newGamebtn = document.querySelector(".newgame")

let turnO = true

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"
      turnO = false

      if (box.innerText == "O") {
        box.style.color = "yellowgreen"
      }
    } else {
      box.innerText = "X"
      turnO = true

        if (box.innerText == "X") {
          box.style.color = "red"
        }
    }
    box.disabled = true;
 
    checkwiner()

  })
})


const showWinner = (winner) => {
  resultp.innerText = `Congratulations! The winner is ${winner}`
  result.classList.remove("hide");

  disabledBoxes()
}

const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
}

const checkwiner = () => {
  for (let patterns of winPatterns) {
   

    let posi1val = boxes[patterns[0]].innerText;
    let posi2val = boxes[patterns[1]].innerText;
    let posi3val = boxes[patterns[2]].innerText;
    
    if (posi1val != "" && posi2val != "" && posi3val != "") {

      if (posi1val === posi2val && posi2val === posi3val) {

        showWinner(posi1val);
      }

    }
  }
}




newGamebtn.addEventListener("click", () => {
  document.location.reload();
})

resetbtn.addEventListener("click", () => {
  result.classList.add("hide");
  for (const box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
})
