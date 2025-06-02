import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Modern React JS Developer
            </h3>

            <p className="text-muted-foreground">
              At just 15 years old, I have over 6 months of experience in
              front-end web development, specializing in building user-friendly
              interfaces with React JS. I'm passionate about optimizing website
              performance and creating fully responsive designs.
              {/* With over 6 months of experience in front-end web development, I specialize
              in creating responsive, accessible, and performant web
              applications using ReactJS and Wordpress. */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 py-10 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    {" "}
                    Front-end Development
                  </h4>

                  <p className="text-muted-foreground sm:text-[16px] text-[14px]">
                    Using React JS, developers create responsive websites and
                    web applications. This powerful library enables the
                    development of fast, dynamic, and interactive user
                    interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Wordpress Development
                  </h4>

                  <p className="text-muted-foreground sm:text-[17px] text-[14px]">
                    Creating custom theme for WordPress website.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>

                </div>

              </div>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
