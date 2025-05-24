import { ExternalLink, Github, ArrowRight } from "lucide-react"


const projects = [
  {
    id: 1,
    title: "WK Shoes Store",
    description: "A beautiful WK Shoes Store build HTML, CSS and JavaScript.",
    image: "/projects/WK-Shoes-Store.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://wkshoesstore.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-Shoes-Store.git"
  },
  {
    id: 2,
    title: "WK Restaurant",
    description: "A beautiful WK Restaurant website build HTML, CSS and JavaScript.",
    image: "/projects/WK-Restaurant.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://wk-restaurant.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-Restaurant.git"
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-38 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
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