import React from "react";
import { Rocket } from "lucide-react";

const skills = [
//   { name: "Next JS", image: "/skills/nextjs-icon.svg", category: "Full Stack" },
  { name: "Mongo DB", image: "/skills/mongodb-icon.svg", category: "Database" },
  { name: "Express JS", image: "/skills/expressjs-icon.svg", category: "Backend" },
  { name: "Node JS", image: "/skills/Nodejs-icon.svg", category: "Backend" },
  { name: "React JS", image: "/skills/React-icon.svg", category: "Frontend" },
//   { name: "TypeScript", image: "/skills/typescript-icon.svg", category: "Frontend" },
  { name: "JavaScript", image: "/skills/javascript-icon.svg", category: "Frontend" },
  { name: "Tailwind", image: "/skills/tailwindcss-icon.svg", category: "Frontend" },
  { name: "CSS3", image: "/skills/css3-icon.svg", category: "Frontend" },
  { name: "HTML5", image: "/skills/html5-icon.svg", category: "Frontend" },
];

function SkillsSection() {
  return (
    
       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
       {skills.map((skill, index) => (
         <div
           key={index}
           className="group flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-700/40 bg-gray-800/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/50 py-2 px-1"
         >
           <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-blue-500/30 transition-all duration-300">
             <img
               src={skill.image}
               alt={skill.name}
               className="w-9 h-9 object-contain"
             />
           </div>

           <div className="text-center">
             <h4 className="text-[11px] font-semibold text-white tracking-wide">
               {skill.name}
             </h4>
             <p className="text-[10px] font-medium text-gray-400 italic">
               {skill.category}
             </p>
           </div>
         </div>
       ))}
     </div>
  );
}

export default SkillsSection;
