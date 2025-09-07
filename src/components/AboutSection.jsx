import { Rocket } from "lucide-react";

const skills = [
  // {
  //   name: "Next JS",
  //   image: "/skills/nextjs-logo.svg",
  //   level: "Learning",
  //   category: "Full Stack",
  // },
  {
    name: "Mongo DB",
    image: "/skills/mongodb-icon.svg",
    level: 70,
    category: "Database",
  },
  {
    name: "Express JS",
    image: "/skills/expressjs-icon.svg",
    level: 75,
    category: "Backend",
  },
  {
    name: "Node JS",
    image: "/skills/Nodejs-icon.svg",
    level: 70,
    category: "Backend",
  },
  {
    name: "React JS",
    image: "/skills/React-icon.svg",
    level: 75,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    image: "/skills/JavaScript-logo.svg",
    level: 70,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image: "/skills/Tailwind_CSS_Logo.svg",
    level: 65,
    category: "Frontend",
  },
  {
    name: "CSS3",
    image: "/skills/CSS3_logo_and_wordmark.svg",
    level: 80,
    category: "Frontend",
  },
  {
    name: "HTML5",
    image: "/skills/HTML5_logo_and_wordmark.svg",
    level: 80,
    category: "Frontend",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            About Me
          </span>
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Web Development
            </h3>

            <p className="text-muted-foreground">
              I have over 8 months of experience in front-end web development,
              specializing in building user-friendly interfaces with React JS.
              I'm passionate about optimizing website performance and creating
              fully responsive designs.
            </p>

            {/* Email Address */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              📧 Email:{" "}
              <a
                href="mailto:wajahatkamal3.0@gmail.com"
                className="text-blue-600 hover:underline"
              >
                wajahatkamal3.0@gmail.com
              </a>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button transition-colors duration-300"
              >
                Get In Touch
              </a>

              <a
                className="cosmic-button transition-colors duration-300"
                href="/wajahatkamal-CV.png"
                download="wajahatkamal-CV.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="gradient-border p-6 card-hover rounded-2xl shadow-xl bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
              <div className="flex flex-col gap-6">
                {/* Heading */}

                <h3 className="text-2xl md:text-3xl relative flex items-center justify-center gap-2">
                  <Rocket className="w-6 h-6 text-blue-400" />
                  <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent tracking-wider">
                    My Skills
                  </span>
                  <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-1 bg-gray-800/60 backdrop-blur-md rounded-2xl py-2 shadow-md border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-15 h-10 py-1 px-2 bg-white rounded-lg shadow-sm"
                      />
                      <div className="flex flex-col items-center text-center">
                        <h4 className="text-[12px] font-semibold text-white tracking-wide">
                          {skill.name}
                        </h4>
                        <h4 className="text-[11px] font-medium text-gray-400 italic">
                          {skill.category}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
