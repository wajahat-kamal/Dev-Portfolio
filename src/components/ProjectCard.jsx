import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 32,
          filter: "blur(8px)",
          scale: 0.96,
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
        },
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group bg-[#0A0F1C] border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 hover:border-white/20 transition-colors duration-400 w-full md:w-[45%]"
    >
      {/* Image */}
      <div className="relative w-full h-38 sm:h-56 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-gray-800 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-white text-center px-4">
              Currently Working on Project
            </h2>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      </div>

      {/* Content */}
      <div className="md:py-2 md:px-4 py-1 px-2 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-primary my-1">
            {project.title}
          </h3>

          <p className="text-gray-300 text-[10px] sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 mt-2 border-t border-white/10 pt-2">

          {/* View Code Button */}
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-9 flex items-center justify-center gap-1.5 rounded bg-white/10 hover:bg-primary hover:scale-105 text-gray-200 hover:text-white transition-all hover:shadow-md hover:shadow-blue-500/30"
          >
            <Github size={14} className="sm:w-4 sm:h-4" />
            <span className="text-sm">View Code</span>
          </a>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 backdrop-blur-md rounded">
            {project.tags.map((tag, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <img
                  src={tag}
                  alt="tech icon"
                  className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </motion.div>
            ))}
          </div>

          {/* View Site Button */}
          <a
            href={project.demoURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-9 flex items-center justify-center gap-1.5 rounded bg-white/10 hover:bg-primary hover:scale-105 text-gray-200 hover:text-white transition-all hover:shadow-md hover:shadow-blue-500/30"
          >
            <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            <span className="text-sm">View Site</span>
          </a>

        </div>
      </div >
    </motion.div >
  );
};

export default ProjectCard;