"use client";
import { Github, Linkedin } from "lucide-react";
import React from "react";

export const SocialSidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 hidden lg:flex flex-col items-center px-10 z-50">
      {/* Icons */}
      <div className="flex flex-col items-center space-y-6">
        {/* GitHub */}
        <a
          href="https://github.com/Wajahat049"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
        >
          <Github className="w-6 h-6 cursor-pointer" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wajahatahmed49/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6 cursor-pointer" />
        </a>

        {/* Upwork (custom icon) */}
        <a
          href="https://www.upwork.com/freelancers/~01d3189f9829035451"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-6 h-6 cursor-pointer"
          >
            <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
          </svg>
        </a>
      </div>

      {/* Line */}
      <div className="w-0.5 h-28 bg-gray-400 mt-6"></div>
    </div>
  );
};
