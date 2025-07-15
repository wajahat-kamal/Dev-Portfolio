const skills = [
  {
    name: "Mongo DB",
    image: "/skills/mongodb-icon.svg",
    level: "Learning",
    category: "Database",
    tooltip: "NoSQL document-based database storing flexible JSON-like data for modern web applications.",
  },
  {
    name: "Express JS",
    image: "/skills/expressjs-icon.svg",
    level: "Learning",
    category: "Backend",
    tooltip: "Minimal Node.js web framework for creating APIs, middleware, and server-side routing.",
  },
  {
    name: "Node JS",
    image: "/skills/Nodejs-icon.svg",
    level: "Learning",
    category: "Backend",
    tooltip: "JavaScript runtime for building fast, scalable server-side applications using event-driven architecture.",
  },
  {
    name: "React JS",
    image: "/skills/React-icon.svg",
    level: 70,
    category: "Frontend",
    tooltip: "Component-based frontend library for building dynamic UIs with virtual DOM and JSX.",
  },
  {
    name: "JavaScript",
    image: "/skills/JavaScript-logo.svg",
    level: 75,
    category: "Frontend",
    tooltip: "Adds logic, interactivity, and dynamic functionality to websites using the browser's capabilities.",
  },
  {
    name: "Tailwind CSS",
    image: "/skills/Tailwind_CSS_Logo.svg",
    level: 65,
    category: "Frontend",
    tooltip: "Utility-first CSS framework enabling fast, responsive UI building with minimal custom CSS.",
  },
  {
    name: "CSS",
    image: "/skills/CSS3_logo_and_wordmark.svg",
    level: 80,
    category: "Frontend",
    tooltip: "Styles webpages with layout, spacing, fonts, colors, transitions, and responsive design utilities.",
  },
  {
    name: "HTML",
    image: "/skills/HTML5_logo_and_wordmark.svg",
    level: 80,
    category: "Frontend",
    tooltip: "Defines webpage structure using semantic tags, forms, media, and basic accessibility rules.",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl px-5 py-3 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
                {/* Tooltip */}
  <div className="absolute z-10 -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-500 bg-[#05080F] text-white text-1xl px-3 py-2 rounded-md shadow-md shadow-[#45505e] w-[90%] text-center">
    {skill.tooltip}
  </div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <img
                  src={skill.image}
                  alt={skill.name}
                  title={skill.tooltip}
                  className="w-10 h-10 p-1 bg-white rounded shadow-sm"
                />
              </div>

              {/* Learning Badge */}
              {typeof skill.level !== "number" && (
                <div className="mb-3 text-start">
                  <span className="inline-block text-xs text-yellow-400 bg-yellow-900/40 px-3 py-1 rounded-full font-semibold">
                    {skill.level === "Pending" ? "Learning" : skill.level}
                  </span>
                </div>
              )}

              {/* Progress Bar */}
              {typeof skill.level === "number" && (
                <div className="relative h-3 bg-[#0e0b4183] rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">
                    {skill.level}%
                  </span>
                </div>
              )}

              {/* Category */}
              <div className="text-white text-start flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Category:
                </span>
                <span className="text-sm bg-[#7F6CE0] text-white px-3 py-1 rounded-full shadow-sm">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
