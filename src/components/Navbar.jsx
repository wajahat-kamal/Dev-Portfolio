import React, { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 lg:pr-23">
        <div className="flex justify-between items-center h-16">
          {/* -------- Logo -------- */}
          <a
            href="#"
            className="flex flex-row justify-center items-center gap-0 mt-0 md:mt-3"
          >
            <div className="relative h-11 w-12 opacity-100">
              <span
                className="absolute h-12 w-10.5 flex justify-center items-center text-lg fira-code font-Header bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent"
                style={{ transform: "translateX(1px) translateZ(0)" }}
              >
                WK
              </span>

              {/* Gradient Bars */}
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{ transform: "translateY(5px) rotate(-30deg)" }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateX(-10px) translateY(18px) rotate(90deg)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{ transform: "translateY(31px) rotate(30deg)" }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateX(19px) translateY(27px) rotate(-30deg)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateX(19px) translateY(-10px) rotate(30deg)",
                }}
              ></div>
              <div
                className="h-1 w-6 rounded bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                style={{
                  transform: "translateX(28px) translateY(2px) rotate(90deg)",
                }}
              ></div>
            </div>
            <h1 className="fira-code text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
              {"<Portfolio/>"}
            </h1>
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
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
                {index + 1}. {link}
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
            className="md:hidden text-gray-200 hover:text-white transition-colors duration-200 z-[60]"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* -------- Overlay Background -------- */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible z-40" : "opacity-0 invisible"
        } md:hidden`}
      ></div>

      {/* -------- Mobile Slide Menu -------- */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] flex justify-between flex-col items-center bg-black/80 backdrop-blur-md border-l border-white/10 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-[50]`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 pt-25">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleClick(link)}
              className={`font-medium text-xl transition-all duration-300 ${
                activeLink === link
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                  : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-3 pb-8">
          <div className="flex flex-row items-center space-x-4">
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
          <a
            href="mailto:wajahatkamal3.0@gmail.com"
            className="text-gray-400 mr-4 hover:text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code tracking-wider text-[13px] transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-semibold">
              wajahatkamal3.0
              <span
                className="
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code "
              >
                @
              </span>
              gmail
              <span
                className="
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code "
              >
                .com
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
