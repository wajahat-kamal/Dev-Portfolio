import React from "react";
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
    category: "Database",
  },
  {
    name: "Express JS",
    image: "/skills/expressjs-icon.svg",
    category: "Backend",
  },
  {
    name: "Node JS",
    image: "/skills/Nodejs-icon.svg",
    category: "Backend",
  },
  {
    name: "TypeScript",
    image: "/skills/typescript-icon.svg",
    category: "Frontend",
  },
  {
    name: "React JS",
    image: "/skills/React-icon.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    image: "/skills/javascript-icon.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image: "/skills/Tailwind_CSS_Logo.svg",
    category: "Frontend",
  },
  {
    name: "CSS3",
    image: "/skills/CSS3_logo_and_wordmark.svg",
    category: "Frontend",
  },
  {
    name: "HTML5",
    image: "/skills/HTML5_logo_and_wordmark.svg",
    category: "Frontend",
  },
];

function SkillsSection() {
  return (
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
  )
}

export default SkillsSection;
