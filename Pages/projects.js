

const projects = [
  {
    id: "big1",
    title: "Amazon Clone",
    img: "./assets/amazon.png",
    description: "Amazon Clone Project, HTML and CSS.",
    link: "./projects/Amazon-clone/index.html",
  },
  {
    id: "big2",
    title: "Netflix Clone",
    img: "./assets/netflix.png",
    description: "Netflix Clone Project, HTML and CSS.",
    link: "./projects/Netflix-clone/index.html",
  },
  {
    id: "big3",
    title: "Spotify Clone",
    img: "./assets/Screenshot (2).png",
    description: "Spotify Clone Project, HTML and CSS.",
    link: "./projects/spotify-clone/index.html",
  },
  {
    id: 9,
    title: "Note App",
    img: "./assets/Screenshot (8).png",
    description: "Note App HTML, CSS and Javascript.",
    link: "./projects/Note-app/index.html",
  },
  {
    id: 8,
    title: "QR Code Generator",
    img: "./assets/Screenshot (5).png",
    description: "QR Code Generato HTML,  CSS and Javascript.",
    link: "./projects/QR-Code-Generator/index.html",
  },
  {
    id: 7,
    title: "Sign in & Sign up Page",
    img: "./assets/Screenshot (4).png",
    description: "Sign in & Sign up Page HTML,  CSS and Javascript.",
    link: "./projects/signup-page/index.html",
  },
  {
    id: 6,
    title: "Rock Paper Scissors.",
    img: "./assets/Screenshot (1).png",
    description: "Classic Rock Paper Scissors game play with computer. ",
    link: "./projects/Rock-Paper-Scissors-Game/index.html",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    img: "./assets/Screenshot (143).png",
    description: "Classic Tic Tac Toe game play with friends. ",
    link: "./projects/Tic-Tac-Toe/index.html",
  },
  {
    id: 4,
    title: "Calculator",
    img: "./assets/Screenshot (139).png",
    description: "A simple calculator with basic functions.",
    link: "./projects/Calculator/index.html",
  },
  {
    id: 3,
    title: "Dice Roller",
    img: "./assets/DiceRoller.png",
    description: "Randomly generate dice rolls for your games.",
    link: "./projects/DiceRoller/html.html",
  },
  {
    id: 2,
    title: "Todo App",
    img: "./assets/todoapp.png",
    description: "Simplify your life, one task at a time.",
    link: "./projects/TodoApp/index.html",
  },
  

 
    
      {
        id: 1,
        title: "Dynamic Form",
        img: "./assets/dynamincForm.png",
        description: "Create forms with ease for any purpose.",
        link: "./projects/Dynamic-form/index.html",
      },
]




for (const project of projects) {
  const {img, link, title} = project;

  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
  
  <a target="_blank" href="${link}">

  <img src="${img}" alt="" />

  <h4 class="card-title" >${title}</h4> </a>
`;

  document.querySelector(".container").appendChild(projectCard);
}