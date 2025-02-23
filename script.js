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


const skills = [
    {
      id: 1,
      img: "./pics/html-5.png",
    },
    {
      id: 2,
      img: "./pics/css-3.png",
    },
    {
      id: 3,
      img: "./pics/javaScript.jpg",
    },
  
  ];

  const projects = [

    {
      id: "big2",
      title: "WK Restaurant",
      img: "./pics/restaurant.png",
      description: "WK Restaurant Project,  HTML, CSS and JAVASCRIPT.",
      link: "./Projects/resturant/dist/index.html",
    },
    {
      id: "big1",
      title: "Amazon Clone",
      img: "./pics/amazon.png",
      description: "Amazon Clone Project,  HTML and CSS.",
      link: "./Projects/Amazon-clone/index.html",
    },
    // {
    //   id: "big2",
    //   title: "Netflix Clone",
    //   img: "./pics/netflix.png",
    //   description: "Netflix Clone Project,  HTML and CSS.",
    //   link: "./Projects/Netflix-clone/index.html",
    // },
    // {
    //   id: "big3",
    //   title: "Spotify Clone",
    //   img: "./pics/Screenshot (2).png",
    //   description: "Spotify Clone Project, HTML and CSS.",
    //   link: "./Projects/spotify-clone/index.html",
    // },

  ]


for (const skill of skills) {
    const { img } = skill;
  
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
  
    skillCard.innerHTML = `
    <img src="${img}" alt="" class="skill-img" />
    `;
  
    document.querySelector("#skills").appendChild(skillCard);
  }



for (const project of projects) {
  const {img, link, title} = project;

  const  workcard = document.createElement("div");
  workcard.classList.add("workcard");

  workcard.innerHTML = `
  
  <a target="_blank" href="${link}">

  <img src="${img}" alt="" />

  <h4 class="card-title" >${title}</h4> </a>
`;

  document.querySelector("#projects").appendChild(workcard);
}


function footerA() {
  const year = new Date().getFullYear();

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `
  <a href="#"> @ ${year} WAJAHAT KAMAL</a>
  `

  document.querySelector("#MyProject").appendChild(footer);
}
footerA();
