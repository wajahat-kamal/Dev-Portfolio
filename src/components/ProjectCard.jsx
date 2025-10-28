import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#0A0F1C] border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 w-full md:w-[45%]">
      {/* Image */}
      <div className="relative w-full h-32 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="py-2 px-3 sm:px-4 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 my-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-[10px] sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 border-t border-white/10 pt-3 gap-2 sm:gap-0">
          {/* Date */}
          <span className="text-[9px] sm:text-[11px] text-blue-400 font-medium bg-blue-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-400/20 shadow-sm shadow-blue-500/20 self-start sm:self-auto">
            {project.date}
          </span>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-inner shadow-black/20">
            {project.tags.map((tag, index) => (
              <img
                key={index}
                src={tag}
                alt="tech icon"
                className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-1.5 sm:gap-2 justify-end">
            <a
              href={project.demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-110 transition-transform hover:shadow-md hover:shadow-purple-500/30"
            >
              <ExternalLink size={12} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-200 hover:text-white transition-all hover:scale-110 hover:shadow-md hover:shadow-blue-500/30"
            >
              <Github size={12} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
