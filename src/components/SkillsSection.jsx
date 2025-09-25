import React from "react";
import { skills } from "../assets/Data";


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
