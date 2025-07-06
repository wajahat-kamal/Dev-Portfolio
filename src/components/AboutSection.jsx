import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-2 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Web Development</h3>

            <p className="text-muted-foreground">
              I have over 8 months of experience in
              front-end web development, specializing in building user-friendly
              interfaces with React JS. I'm passionate about optimizing website
              performance and creating fully responsive designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button hover:bg-transparent border-2 border-primary hover:text-primary transition-colors duration-300">
                {" "}
                Get In Touch
              </a>

              <a
                className="cosmic-button hover:bg-transparent border-2 border-primary hover:text-primary transition-colors duration-300"
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

            <div className="gradient-border p-4 py-6 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    {" "}
                    Front-end Development
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    Using React JS, developers create responsive websites and
                    web applications. This powerful library enables the
                    development of fast, dynamic, and interactive user
                    interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 py-6 card-hover">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    {" "}
                    FullStack Development <button className="inline-block text-xs text-yellow-400 bg-yellow-900/40 px-3 py-1 rounded-full font-semibold">Upcomming..</button>
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    Using Next.JS, Node.JS, ExpressJS and MongoDB, developers create responsive websites and
                    web applications. This powerful library enables the
                    development of fast, dynamic, and interactive user
                    interfaces.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
