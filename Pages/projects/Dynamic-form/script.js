const servey = document.getElementById("servey-option")
const add = document.getElementById("add")
const remove = document.getElementById("remove")

add.onclick = function () {
  let newFiles = document.createElement("input")
  newFiles.setAttribute("type", "text")
  newFiles.setAttribute("name", "name")
  newFiles.setAttribute("class", "servey-option")
  newFiles.setAttribute("size", "50")
  newFiles.setAttribute("placeholder", "Another Field")

  servey.appendChild(newFiles)
}

remove.onclick = function () {
  let inputTags = servey.getElementsByTagName("input")

  if (inputTags.length > 2) {
    servey.removeChild(inputTags[(inputTags.length) -1])
  }
}
