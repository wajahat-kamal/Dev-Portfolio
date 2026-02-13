import React from "react";
import { skills } from "../assets/Data";

function SkillsSection() {
  return (
    <div className="w-full overflow-hidden py-4 relative">
      {/* ====== Infinite Sliding Animation ====== */}
      <div className="flex flex-col gap-3">
        {/* First Row */}
        <div className="flex animate-slide gap-2 md:gap-3 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Second Row - Opposite Direction for Variation */}
        <div className="flex animate-slide-reverse gap-2 md:gap-3 w-max">
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ====== Skill Card Component ====== */
const SkillCard = ({ skill }) => (
  <div
    className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/40 
               bg-gray-800/40 backdrop-blur-md shadow-sm py-2 px-2 transition-all duration-300 
               hover:scale-105 hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/60 min-w-16"
  >
    <div
      className="w-12 h-12 flex items-center justify-center bg-white rounded-md shadow-sm 
                  group-hover:shadow-blue-500/30 transition-all duration-300"
    >
      <img
        src={skill.image}
        alt={skill.name}
        loading="lazy"
        className="w-9 h-9 object-contain"
      />
    </div>
    <div className="text-center">
      <h4 className="text-[11px] font-semibold text-white tracking-wide">
        {skill.name}
      </h4>
      {/* <p className="text-[9px] text-gray-400 italic">{skill.category}</p> */}
    </div>
  </div>
);

export default SkillsSection;
