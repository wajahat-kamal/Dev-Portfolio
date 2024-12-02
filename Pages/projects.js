

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
    id: 16,
    title: "Calculator",
    img: "./assets/Screenshot (139).png",
    description: "A simple calculator with basic functions.",
    link: "./projects/Calculator/index.html",
  },
  {
    id: 15,
    title: "Rock Paper Scissors.",
    img: "./assets/Screenshot (1).png",
    description: "Classic Rock Paper Scissors game play with computer. ",
    link: "./projects/Rock-Paper-Scissors-Game/index.html",
  },
  {
    id: 14,
    title: "Tic Tac Toe",
    img: "./assets/Screenshot (143).png",
    description: "Classic Tic Tac Toe game play with friends. ",
    link: "./projects/Tic-Tac-Toe/index.html",
  },
  {
    id: 13,
    title: "Dice Roller",
    img: "./assets/DiceRoller.png",
    description: "Randomly generate dice rolls for your games.",
    link: "./projects/DiceRoller/html.html",
  },
  {
    id: 12,
    title: "Todo App",
    img: "./assets/todoapp.png",
    description: "Simplify your life, one task at a time.",
    link: "./projects/TodoApp/index.html",
  },
  
  {
    id: 9,
    title: "Joke Generator",
    img: "./assets/jokegenerator.png",
    description: "Enjoy a new, funny joke every time you click.",
    link: "./projects/Random-Joke-Generator/index.html",
  },
  {
    id: 11,
    title: "Password Generator",
    img: "./assets/RPgenerator.png",
    description: " Create strong, unique passwords instantly.",
    link: "./projects/Password_Generator/index.html",
  },
    {
        id: 9,
        title: "Analog Clock",
        img: "./assets/analogclock.png",
        description: "Simple design, classic function, timeless appeal.",
        link: "./projects/Clock_2/index.html",
      },
      {
        id: 8,
        title: "Background Changer",
        img: "./assets/bg-changer.png",
        description: "Transform your screen, one color at a time.",
        link: "./projects/Background-color_Change/Index.html",
      },
      {
        id: 7,
        title: "Dynamic Form",
        img: "./assets/dynamincForm.png",
        description: "Create forms with ease for any purpose.",
        link: "./projects/Dynamic-form/index.html",
      },
      {
        id: 6,
        title: "Color Picker Tool",
        img: "./assets/colorPicker.png",
        description: "Easily select and identify any color.",
        link: "./projects/Color-Picker/index.html",
      },
      {
        id: 5,
        title: "Number Checker",
        img: "./assets/oddevenchecker.png",
        description: "Instantly determine if a number is odd or even.",
        link: "./projects/odd-even-checker-app/index.html",
      },
      {
        id: 4,
        title: "Emoji Switcher",
        img: "./assets/emoji_switcher.png",
        description: "Quickly switch between different emoji sets.",
        link: "./projects/Emoji-Switcher/html.html",
      },
    
      {
        id: 3,
        title: "Number Counter",
        img: "./assets/numbercounter.png",
        description: "Number Counter Tool.",
        link: "./projects/Number_Counter/index.html",
      },
      {
        id: 2,
        title: "Random Color Box",
        img: "./assets/RCbox.png",
        description: " Generate random colors with a click.",
        link: "./projects/Random-Color-Box/index.html",
      },
      {
        id: 1,
        title: "Digital Clock",
        img: "./assets/digitalclock.png",
        description: "Modern timekeeping, precise and efficient",
        link: "./projects/Digital-Clock1/index.html",
      },
]



for (const project of projects) {
    const { title, img, description, link } = project;
  
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
  
    projectCard.innerHTML = `
    <img src="${img}" alt="" class="project-img" />
   
    <p class="project-description">
      ${description}
    </p>
    <a target="_blank" href="${link}"><i class="fa-solid fa-eye"></i>See Live</a>
  `;
  
    document.querySelector(".container").appendChild(projectCard);
  }
  // <h5 class="project-title">${title}</h5>