import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#0A0F1C] border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 w-full md:w-[45%]">
      {/* Image */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 mb-1 sm:mb-2">
            {project.title}
          </h3>

          {/* Full Description on Mobile */}
          <p className="text-gray-300 text-[9px] sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs px-2 py-[3px] bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4  border-t border-white/10 pt-2">
          <span className="text-[10px] sm:text-[11px] text-gray-400">{project.date}</span>
          <div className="flex gap-2 sm:gap-3">
            <a
              href={project.demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-110 transition-transform"
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-200 hover:text-white transition-all hover:scale-110"
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
