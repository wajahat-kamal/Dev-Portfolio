
const nameField = document.querySelector(".name")
const title = document.querySelector(".title")
const underline = document.querySelector(".line")
const signup = document.querySelector("#signup")
const signin = document.querySelector("#signin")
const forgot = document.querySelector(".forgot")


signin.addEventListener("click", () => {
   nameField.style.maxHeight = "0"
   title.innerHTML = "Sign in"
   signup.classList.add("disabled")
   signin.classList.remove("disabled")
   underline.style.transform = "translateX(35px)"
   forgot.innerHTML = "Lost your password?"
})
signup.addEventListener("click", () => {
   nameField.style.maxHeight = "60px"
   title.innerHTML = "Sign up"
   signup.classList.remove("disabled")
   signin.classList.add("disabled")
   underline.style.transform = "translateX(0)"
   forgot.innerHTML = "Password Suggestions"
})