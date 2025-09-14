import SkillsSection from "./SkillsSection";


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
            <SkillsSection/>
          </div>
        </div>
      </div>
    </section>
  );
};
