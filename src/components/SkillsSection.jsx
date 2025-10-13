import React from "react";
import { skills } from "../assets/Data";

function SkillsSection() {
  return (
    <div className="overflow-hidden w-full py-4">
      {/* Outer container with animation */}
      <div className="flex animate-slide gap-4 w-max">
        {/* First copy */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/40 bg-gray-800/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/50 py-2 px-3"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm group-hover:shadow-blue-500/30 transition-all duration-300">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="text-[11px] font-semibold text-white tracking-wide">
                {skill.name}
              </h4>
              <p className="text-[9px] font-medium text-gray-400 italic">
                {skill.category}
              </p>
            </div>
          </div>
        ))}

        {/* Second copy (for seamless infinite loop) */}
        {skills.map((skill, index) => (
          <div
            key={`copy-${index}`}
            className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/40 bg-gray-800/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/50 py-2 px-3"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm group-hover:shadow-blue-500/30 transition-all duration-300">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="text-center">
              <h4 className="text-[11px] font-semibold text-white tracking-wide">
                {skill.name}
              </h4>
              <p className="text-[9px] font-medium text-gray-400 italic">
                {skill.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
