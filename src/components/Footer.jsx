import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-foreground py-3 sm:py-4 px-3 sm:px-20 bg-[#0B111E] flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-center sm:text-left">
      {/* Left Section */}
      <div>
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Wajahat Kamal 28-July. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm">
          Built with{" "}
          <a
            target="_blank"
            href="https://reactjs.org"
            className="text-blue-500 hover:underline"
          >
            React JS
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-blue-500 hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4 justify-center">
        <a
          target="_blank"
          href="https://github.com/wajahat-kamal"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform duration-200"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        </a>

        <a
          target="_blank"
          href="https://linkedin.com"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        </a>
      </div>
    </footer>
  );
};
