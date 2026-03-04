import React from "react";
import { skills } from "../assets/Data";

function SkillsSection() {
  return (
    <div className="w-full overflow-hidden py-4 relative">
      {/* First Row */}
      <div className="flex justify-center flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* ====== Skill Card Component ====== */
const SkillCard = ({ skill }) => (
  <div
    className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/40 
               bg-gray-800/40 backdrop-blur-md shadow-sm p-1.5 transition-all duration-300 
               hover:scale-105 hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/60 min-w-16 cursor-pointer"
  >
    <div
      className="w-14 h-14 flex items-center justify-center bg-white rounded-md shadow-sm 
                  group-hover:shadow-blue-500/30 transition-all duration-300"
    >
      <img
        src={skill.image}
        alt={skill.name}
        loading="lazy"
        className="w-11 h-11 object-contain"
      />
    </div>
    <div className="text-center">
      <h4 className="text-[11px] font-semibold text-white tracking-wide">
        {skill.name}
      </h4>
    </div>
  </div>
);

export default SkillsSection;
