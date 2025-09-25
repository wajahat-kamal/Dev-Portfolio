import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* -------- Logo -------- */}
          <a
            href="#"
            className="text-2xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code"
          >
            {"<Portfolio/>"}
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`font-medium transition-colors duration-200 ${
                  activeLink === link
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                    : "text-gray-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* -------- Mobile Menu Button -------- */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* -------- Mobile Menu -------- */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-sm shadow-md">
          <div className="flex flex-col items-center space-y-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`font-medium transition-colors duration-200 ${
                  activeLink === link
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                    : "text-gray-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600"
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
