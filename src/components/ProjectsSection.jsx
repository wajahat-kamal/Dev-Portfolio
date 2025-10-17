import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../assets/Data.js";
import ProjectCard from "./ProjectCard.jsx";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-18 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-7 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Projects
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>
        <p className="text-center text-xs text-muted-foreground mb-4 max-w-xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-sm:gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/wajahat-kamal"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
