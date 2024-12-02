const btnBox = document.querySelector(".btnbox")
const dabba = document.querySelector(".dabba")
const closeicon = document.querySelector(".close-icon")
const title = document.getElementById("title")
const dattime = document.getElementById("dattime")
const text = document.getElementById("text")
const box = document.querySelector(".box")
const lastbtn =document.querySelector(".lastbtn")

function getTask() {

 if (!title.value) {
   alert("Please enter task")
   return
 }

  let titleval = title.value
  let dattimeval = dattime.value
  let textval = text.value

  const task = document.createElement("div")
  task.className = "task"
  task.innerHTML = `
  <h3>${titleval}</h3>
    <p>${dattimeval}</p>
    <p>${textval}</p>
  `
  box.appendChild(task)

  toggleDabba()
  title.value = ""
  dattime.value = ""
  text.value = ""
}

function toggleDabba() {
  dabba.classList.toggle("hide")
}

btnBox.addEventListener("click", toggleDabba)
closeicon.addEventListener("click", toggleDabba)
lastbtn.addEventListener("click", getTask)