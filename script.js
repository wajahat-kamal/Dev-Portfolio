const burgerIcon = document.getElementById("burger-icon");
const burgerMenuContent = document.getElementById("burger-menu-content");
const burgersvg = document.getElementById("burgersvg");


let isVisible = false;

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    isVisible = false;
    toggleMenu();
  }
});

const toggleMenu = () => {
  if (isVisible) {
    burgerIcon.innerHTML = `
            <?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg
              height="40px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512; "
              version="1.1"
              viewBox="0 0 512 512"
              width="40px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
              />
            </svg>
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
      img: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    },
  ];

  const projects = [

    {
      id: "big1",
      title: "Amazon Clone",
      img: "./pics/amazon.png",
      description: "Amazon Clone Project,  HTML and CSS.",
      link: "./Projects/Amazon-clone/index.html",
    },
    {
      id: "big2",
      title: "Netflix Clone",
      img: "./pics/netflix.png",
      description: "Netflix Clone Project,  HTML and CSS.",
      link: "./Projects/Netflix-clone/index.html",
    },
    {
      id: "big3",
      title: "Spotify Clone",
      img: "./pics/Screenshot (2).png",
      description: "Spotify Clone Project, HTML and CSS.",
      link: "./Projects/spotify-clone/index.html",
    },
    {
      id: 16,
      title: "Rock Paper Scissors",
      img: "./pics/Screenshot (1).png",
      // description: "A simple calculator with basic functions.",
      link: "./Projects/Rock-Paper-Scissors-Game/index.html",
    },
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
