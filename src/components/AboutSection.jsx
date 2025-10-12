import SkillsSection from "./SkillsSection";
import { Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen px-3 sm:px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl  bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-700/60 rounded-lg p-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            About Me
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>

        {/* Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch ">
          {/* About Card */}
          <div className="h-full flex flex-col justify-between space-y-3 py-4 px-3 md:px-5 shadow-md backdrop-blur-sm hover:border-blue-500 transition-colors duration-300">
            <h3 className="text-base font-semibold text-white">
              Meet Wajahat Kamal – Full Stack Developer
            </h3>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed tracking-wide">
              I’m a{" "}
              <span className="text-blue-400 font-semibold">
                MERN stack developer
              </span>{" "}
              with hands-on experience building full-stack web applications
              using{" "}
              <span className="text-cyan-300">MongoDB, Express.js, React,</span>{" "}
              and <span className="text-cyan-300">Node.js</span>. I specialize
              in creating scalable backends, interactive frontends, and
              delivering clean, maintainable code.
            </p>

            <p className="text-gray-300 text-xs">
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:wajahatkamal3.0@gmail.com"
                className="text-blue-400 hover:underline hover:text-cyan-300 transition-colors duration-200"
              >
                wajahatkamal3.0@gmail.com
              </a>
            </p>
          </div>

          {/* Skills Card */}
          <div className="h-full flex flex-col p-3 sm:p-4 rounded-lg shadow-md hover:border-blue-500 bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800/50">
            <h3 className="relative text-center text-lg md:text-xl font-extrabold tracking-wide mb-3">
              <span className="inline-flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-blue-400 drop-shadow-[0_0_3px_#60a5fa]" />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  My Skills
                </span>
              </span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-[1.5px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 blur-[1px]"></span>
            </h3>

            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

