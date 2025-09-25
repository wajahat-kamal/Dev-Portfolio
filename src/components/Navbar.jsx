import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* -------- Logo -------- */}
          <a
            href="#"
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 fira-code"
          >
            {"<Portfolio/>"}
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-100 font-medium hover:text-primary transition-colors duration-200"
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
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-100 font-medium hover:text-primary transition-colors duration-200"
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
