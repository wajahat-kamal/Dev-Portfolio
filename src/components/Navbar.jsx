import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 lg:pr-23">
        <div className="flex justify-between items-center h-16">
          {/* -------- Logo -------- */}
          <a
            href="#"
            className="flex flex-row justify-center items-center gap-1 mt-4"
          >
            <div className="relative h-11 w-12 opacity-100">
              {/* Gradient Text */}
              <span
                className="absolute h-12 w-10.5 flex justify-center items-center text-lg fira-code font-Header bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent"
                style={{ transform: "translateX(1px) translateZ(0)" }}
              >
                WK
              </span>

              {/* Gradient Bars */}
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateY(5px) rotate(-30deg) translateZ(0px)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform:
                    "translateX(-10px) translateY(18px) rotate(90deg) translateZ(0px)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateY(31px) rotate(30deg) translateZ(0px)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform:
                    "translateX(19px) translateY(27px) rotate(-30deg) translateZ(0px)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform:
                    "translateX(19px) translateY(-10px) rotate(30deg) translateZ(0px)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform:
                    "translateX(28px) translateY(2px) rotate(90deg) translateZ(0px)",
                }}
              ></div>
            </div>
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`relative font-medium transition-all duration-300 fira-code
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
                    activeLink === link
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
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
