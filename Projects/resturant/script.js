const reloadbtns = document.querySelectorAll("#reloadbtns");
const loop15 = document.querySelector(".loop15");
const loop50 = document.querySelector(".loop50");
const fourSmallLine = document.querySelector(".four-line-small");
const breakfast = document.querySelector(".breakfast");
const launch = document.querySelector(".launch");
const dinner = document.querySelector(".dinner");
const clientsCards = document.querySelector(".scroll");
const dot = document.querySelectorAll(".si-dot");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");


function reloadPage() {
    window.location.reload();
}
reloadbtns.forEach((btn) => {
    btn.addEventListener("click", reloadPage);
    
})

// dot.forEach((dot) => {
//    dot.addEventListener("click", () =>{
//       clientsCards.style.gridTemplateColumns = "repeat(4, 1fr)";
//       clientsCards.style.transform = "translateX(-375px)";
//    })
// })


dot1.addEventListener("click", () => {
    clientsCards.style.gridTemplateColumns = "repeat(4, 1fr)";
    clientsCards.style.transform = "translateX(0px)";
})
dot2.addEventListener("click", () => {
    clientsCards.style.gridTemplateColumns = "repeat(4, 1fr)";
    clientsCards.style.transform = "translateX(-375px)";
})



breakfast.addEventListener("click", () => {
    fourSmallLine.style.transform = "translateX(0px)"
})
launch.addEventListener("click", () => {
    fourSmallLine.style.transform = "translateX(140px)"
})
dinner.addEventListener("click", () => {
    fourSmallLine.style.transform = "translateX(280px)"
})





const burgerIcon = document.getElementById("burger-icon");
const burgerMenuContent = document.getElementById("burger-menu-content");
const burgersvg = document.getElementById("burgersvg");

const crossIcon = document.querySelector(".cross-icon");
const navbar = document.querySelector(".navbar");

let isVisible = false;

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 720) {
    isVisible = false;
    toggleMenu();
  }
});

const toggleMenu = () => {
  if (isVisible) {
    burgerIcon.innerHTML = `
       <img class="cross-icon" src="./pics/images.png" alt="">
    `;
    burgerIcon.style.fontSize = "2rem";
    burgerMenuContent.classList.remove("hidden");
  } else {
    burgerIcon.innerHTML = "";
    burgerIcon.appendChild(burgersvg);
    burgerMenuContent.classList.add("hidden");
  }
};

burgerIcon.addEventListener("click", () => {
  isVisible = !isVisible;

  toggleMenu();
});
