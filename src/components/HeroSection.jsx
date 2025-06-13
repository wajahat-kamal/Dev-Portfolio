import { ArrowDown } from "lucide-react";

export const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
  >
    <div className="container max-w-4xl mx-auto text-center z-10">
      <div className="space-y-6">
        <div className="w-full flex justify-center">
          <img
            src="/portfolioimg.png"
            alt="Wajahat Kamal's portfolio image"
            className="w-50 md:w-80 rounded-full"
          />
        </div>

        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Wajahat
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            {" "}
            Kamal
          </span>
        </h1>

        <p className="text-[18px] md:text-4xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          React JS Developer
        </p>

        <div className=" opacity-0 animate-fade-in-delay-4">
          <a
          className="cosmic-button"
            href="/wajahatkamal-CV.png"
            download="wajahatkamal-CV.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>
);
