import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Projects"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* -------- Logo -------- */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code"
          >
            {"<Portfolio/>"}
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`relative font-medium transition-all duration-300 
                  ${
                    activeLink === link
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                      : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600"
                  }
                `}
              >
                {link}
                {/* underline effect */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 transition-transform duration-300 origin-left scale-x-0 ${
                    activeLink === link ? "scale-x-100" : "group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* -------- Mobile Menu Button -------- */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* -------- Mobile Menu -------- */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center space-y-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`font-medium text-lg transition-all duration-300 ${
                  activeLink === link
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                    : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
