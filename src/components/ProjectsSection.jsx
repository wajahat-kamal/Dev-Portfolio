import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WK Shoes Store",
    description: "A modern online shoes store built with ReactJS and TailwindCSS, offering stylish, durable, and comfortable footwear for every step.",
    image: "/projects/WK-Shoes-Store.png",
    tags: ["React JS", "Tailwind CSS"],
    demoURL: "https://wk-shoes-store.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-Shoes-Store.git",
    date: "2025 June 28",
  },

  {
    id: 2,
    title: "WK AI Chatbot",
    description: "I built a responsive and interactive chatbot using React JS, Tailwind CSS, and the Google Gemini API for smart, real-time conversations.",
    image: "/projects/WK-Chatbot.png",
    tags: ["React JS", "Tailwind CSS", "Gemini API"],
    demoURL: "https://wk-ai-chatbot.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-Chatbot.git",
    date: "2025 June 14",
  },

  {
    id: 3,
    title: "WK Note App",
    description:
      "NoteApp – A simple and clean note-taking app built with ReactJS, Tailwind CSS for organizing your thoughts efficiently.",
    image: "/projects/wk-note-app.png",
    tags: ["React JS", "Tailwind CSS"],
    demoURL: "https://wk-note-app.vercel.app/",
    githubURL: "https://github.com/wajahat-kamal/WK-NoteApp.git",
    date: "2025 May 25",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-18 px-4 relative">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
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
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
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

                    <p className="text-muted-foreground text-sm">{project.date}</p>

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
