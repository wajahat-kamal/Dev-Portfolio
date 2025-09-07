import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-foreground py-4 px-4 md:px-9 bg-[#0B111E] flex justify-between items-center">
      <div className="">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wajahat Kamal 28-july. All rights
          reserved.
        </p>
        <p className="text-sm">
          Built with{" "}
          <a
            target="_blank"
            href="https://reactjs.org"
            className="text-blue-500"
          >
            React JS
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-blue-500"
          >
            Tailwind CSS.
          </a>
        </p>
      </div>

      <div className="flex items-center gap-2 md:gap-4 justify-center flex-row">
        <a target="_blank" href="https://github.com/wajahat-kamal">
         <Github size={30}/>
        </a>

        <a target="_blank" href="https://www.linkedin.com">
          <Linkedin size={30}/>
        </a>
      </div>
    </footer>
  );
};
