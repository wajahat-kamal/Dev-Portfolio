import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../assets/Data.js";


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-18 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Projects
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
          <br />
          <button className="inline-block text-sm text-yellow-400 bg-yellow-900/40 px-3 py-1 rounded-full font-semibold">
            Exciting Full Stack Projects are coming soon.
          </button>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-md overflow-hidden shadow-xs card-hover"
            >
              <div className="h-32 sm:h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-2 sm:p-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-0.5 text-[10px] sm:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {project.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-md overflow-hidden shadow-xs card-hover"
            >
              <div className="h-32 sm:h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-2 sm:p-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-0.5 text-[10px] sm:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {project.date}
                  </p>
                </div>
              </div>
            </div>
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
