import SkillsSection from "./SkillsSection";
import { Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-3 sm:px-6 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-5xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800/60 rounded-2xl p-8 md:p-14 shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-shadow duration-500">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
            About Me
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* About Card */}
          <div className="h-full flex flex-col justify-between bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-black/90 border border-gray-800 rounded-xl p-6 shadow-lg hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-md">
            <h3 className="text-base md:text-lg font-semibold text-white mb-3">
              Meet{" "}
              <span className="text-blue-400 font-semibold">
                Wajahat Kamal
              </span>{" "}
              – Full Stack Developer
            </h3>

            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed tracking-wide">
              I’m a{" "}
              <span className="text-blue-400 font-semibold">
                MERN stack developer
              </span>{" "}
              with hands-on experience building full-stack web applications
              using{" "}
              <span className="text-cyan-300 font-medium">
                MongoDB, Express.js, React,
              </span>{" "}
              and{" "}
              <span className="text-cyan-300 font-medium">Node.js</span>. I
              specialize in creating scalable backends, interactive frontends,
              and delivering clean, maintainable code.
            </p>

            <p className="text-gray-300 text-sm mt-4">
              📧{" "}
              <span className="font-medium text-gray-200">Email:</span>{" "}
              <a
                href="mailto:wajahatkamal3.0@gmail.com"
                className="text-blue-400 hover:underline hover:text-cyan-300 transition-colors duration-200"
              >
                wajahatkamal3.0@gmail.com
              </a>
            </p>
          </div>

          {/* Skills Card */}
          <div className="h-full flex flex-col rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-black/90 shadow-lg hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-md p-5 md:p-6">
            <h3 className="relative text-center text-lg md:text-xl font-extrabold tracking-wide mb-4">
              <span className="inline-flex items-center gap-2">
                <Rocket className="w-4 h-4 text-blue-400 drop-shadow-[0_0_3px_#60a5fa]" />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  My Skills
                </span>
              </span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-[1.5px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 blur-[1px]"></span>
            </h3>

            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
};
