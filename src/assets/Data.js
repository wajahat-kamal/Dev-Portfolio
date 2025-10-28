// Import project images
import wkGlobifyImg from "./projects/wk-Globify.png";
import wkShoesStoreImg from "./projects/WK-Shoes-Store.png";
import wkChatbotImg from "./projects/wk-chatify.png";
import wkHomifyImg from "./projects/wk-homify.png";
import wkFoodifyImg from "./projects/wk-foodify.png";

// Import skill icons
import nextjsIcon from "./skills/nextjs-icon.svg";
import mongodbIcon from "./skills/mongodb-icon.svg";
import expressjsIcon from "./skills/expressjs-icon.svg";
import nodejsIcon from "./skills/Nodejs-icon.svg";
import reactIcon from "./skills/React-icon.svg";
import typescriptIcon from "./skills/typescript-icon.svg";
import javascriptIcon from "./skills/javascript-icon.svg";
import tailwindcssIcon from "./skills/tailwindcss-icon.svg";
import css3Icon from "./skills/css3-icon.svg";
import html5Icon from "./skills/html5-icon.svg";

import geminiIcon from "./skills/gemini-icon.svg";

// Projects Section
export const projects = [
  {
    id: 1,
    title: "FOODIFY",
    description:
      "A modern and responsive restaurant full stack web app built with Next.js and Tailwind CSS. It features an elegant menu display, smooth ordering experience, and dynamic food management.",
    image: wkFoodifyImg,
    tags: [nextjsIcon, reactIcon, tailwindcssIcon, mongodbIcon],
    demoURL: "https://foodify-wk.vercel.app",
    githubURL: "https://github.com/wajahat-kamal/FOODIFY/",
    date: "2025 Octuber 28",
  },
  {
    id: 2,
    title: "GLOBIFY",
    description:
      "AI-powered MERN stack blog built with Tailwind CSS for smart content creation, seamless image optimization, and a modern, fully responsive UI.",
    image: wkGlobifyImg,
    tags: [
      mongodbIcon,
      reactIcon,
      expressjsIcon,
      nodejsIcon,
      tailwindcssIcon,
      geminiIcon,
    ],
    demoURL: "https://globify-wk.vercel.app",
    githubURL: "https://github.com/wajahat-kamal/GLOBIFY/",
    date: "2025 Sept 18",
  },
  {
    id: 3,
    title: "CHATIFY",
    description:
      "I built a responsive and interactive chatbot using MERN stack, Tailwind CSS, and the Google Gemini API for smart, real-time conversations.",
    image: wkChatbotImg,
    tags: [
      mongodbIcon,
      reactIcon,
      expressjsIcon,
      nodejsIcon,
      tailwindcssIcon,
      geminiIcon,
    ],
    demoURL: "https://chatify-wk.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/CHATIFY/",
    date: "2025 October 2",
  },
  {
    id: 4,
    title: "HOMIFY",
    description:
      "Homify is a modern real estate website built with React.js and Tailwind CSS, featuring a clean UI, smooth animations, and an easy way to connect with me.",
    image: wkHomifyImg,
    tags: [reactIcon, tailwindcssIcon],
    demoURL: "https://homify-wk.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/HOMIFY/",
    date: "2025 October 6",
  },
  {
    id: 5,
    title: "WK Shoes Store",
    description:
      "A modern online shoes store built with ReactJS and TailwindCSS, offering stylish, durable, and comfortable footwear for every step.",
    image: wkShoesStoreImg,
    tags: [reactIcon, tailwindcssIcon],
    demoURL: "https://wk-shoes-store.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-Shoes-Store.git",
    date: "2025 July 5",
  },
];

// Skills Section
export const skills = [
  { name: "Next.js", image: nextjsIcon, category: "Full Stack" },
  { name: "Mongo DB", image: mongodbIcon, category: "Database" },
  {
    name: "Express JS",
    image: expressjsIcon,
    category: "Backend",
  },
  { name: "Node.js", image: nodejsIcon, category: "Backend" },
  { name: "React", image: reactIcon, category: "Frontend" },
  {
    name: "TypeScript",
    image: typescriptIcon,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    image: javascriptIcon,
    category: "Frontend",
  },
  {
    name: "Tailwind",
    image: tailwindcssIcon,
    category: "Frontend",
  },
  { name: "CSS3", image: css3Icon, category: "Frontend" },
  { name: "HTML5", image: html5Icon, category: "Frontend" },
];
