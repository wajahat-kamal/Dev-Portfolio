const skills = [
  {
    name: "React JS",
    image: "/skills/React-icon.svg",
    level: 75,
    categery: "Fronted",
  },
  {
    name: "JavaScript",
    image: "/skills/JavaScript-logo.svg",
    level: 75,
    categery: "Fronted",
  },
  {
    name: "Tailwind CSS",
    image: "/skills/Tailwind_CSS_Logo.svg",
    level: 80,
    categery: "Fronted",
  },
  {
    name: "CSS",
    image: "/skills/CSS3_logo_and_wordmark.svg",
    level: 90,
    categery: "Fronted",
  },
  {
    name: "HTML",
    image: "/skills/HTML5_logo_and_wordmark.svg",
    level: 90,
    categery: "Fronted",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid gid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="relative bg-card px-2 py-4 m-3 rounded-lg shadow-xs card-hover min-w-50"
            >
              <div className="text-left mb-4 flex flex-row items-center justify-between gap-2">
                <h3 className="font-semibold text-xl">{skill.name}</h3>
                <img
                  className="md:w-10 w-7 h-7 md:h-10  bg-white p-1 rounded"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>

              <div className="w-full bg-secondary/50 h-3 rounded-full bg-[#00000063] overflow-hidden relative">
                <div
                  className="bg-primary h-full rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
                <span className="absolute right-0 top-1/2  -translate-y-1/2 text-[11.5px] text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
