import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const SocialSidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 hidden md:flex flex-col items-center px-10 z-50">
      {/* Icons */}
      <div className="flex flex-col items-center space-y-4">
        {/* GitHub */}
        <a
          href="https://github.com/wajahat-kamal"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
        >
          <Github className="w-6 h-6 cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6 cursor-pointer" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        >
          <Instagram className="w-6 h-6 cursor-pointer" />
        </a>
      </div>

      {/* Line */}
      <div className="w-0.5 h-28 bg-gray-400 mt-4"></div>
    </div>
  );
};
