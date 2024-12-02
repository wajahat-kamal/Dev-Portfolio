const jokep = document.getElementById("jokep");
const jokebtn = document.getElementsByClassName("jokebtn")[0];

const API_URL = "https://icanhazdadjoke.com/";

generateJoke();

async function generateJoke() {
  const res = await fetch(API_URL, {
    headers: {
      Accept:" application/json"
    }
  })
  
  const data = await res.json();
  jokep.innerHTML = data.joke;
  
}
// jokebtn.addEventListener("click", () => {
//   document.location.reload(true);
// });

jokebtn.addEventListener("click", () => {
  generateJoke();

});