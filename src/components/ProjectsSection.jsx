import { Github, ArrowRight } from "lucide-react";
import { projects } from "../assets/Data.js";
import ProjectCard from "./ProjectCard.jsx";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="pt-20 md:pt-32 px-4 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-7 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Projects
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>
        <p className="text-center text-gray-400 text-[13px] sm:text-sm md:text-basetext-muted-foreground mb-4 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-sm:gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="bg-gradient-to-r from-blue-500 to-purple-500 cosmic-button font-semibold rounded-xl w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/wajahat-kamal"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
