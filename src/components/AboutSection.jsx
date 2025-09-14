import SkillsSection from "./SkillsSection";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 bg-gray-800/40 border border-gray-700/60 rounded-2xl py-8 px-4 md:px-8 shadow-xl backdrop-blur-sm hover:border-blue-500 transition-colors duration-300">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Web Development
            </h3>

            <p className="text-gray-300 text-base md:text-md leading-relaxed tracking-wide">
              I’m a{" "}
              <span className="text-blue-400 font-semibold">
                MERN stack developer
              </span>{" "}
              with hands-on experience building full-stack web applications
              using{" "}
              <span className=" text-cyan-300">
                MongoDB, Express.js, React,
              </span>{" "}
              and <span className=" text-cyan-300">Node.js</span>. I specialize
              in creating scalable backends , interactive frontends , and
              delivering clean, maintainable code .
            </p>

            <p className="text-gray-300">
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:wajahatkamal3.0@gmail.com"
                className="text-blue-400 hover:underline hover:text-cyan-300 transition-colors duration-200"
              >
                wajahatkamal3.0@gmail.com
              </a>
            </p>
          </div>

          <div className="grid gap-4">
            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
};
