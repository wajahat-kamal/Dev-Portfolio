import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Home, User, FolderGit2, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Projects", icon: FolderGit2 },
  { label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <header className="w-full max-w-[950px] rounded-full bg-white/35 dark:bg-white/5 px-6 shadow-lg backdrop-blur-sm">
        <nav className="flex items-center justify-between py-3 text-white">
          {/* -------- Logo -------- */}
          <a
            href="/"
            aria-label="Homepage"
            className="text-xl font-mono font-semibold tracking-widest hover:opacity-90 transition-opacity"
          >
            <span className="font-[cursive]">WK</span>
          </a>

          {/* -------- Desktop Menu -------- */}
          <div className="hidden md:flex items-center gap-x-6 text-sm">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;

              return (
                <a
                  key={link.label}
                  href={`#${link.label.toLowerCase()}`}
                  onClick={() => handleNavClick(link.label)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative font-mono font-medium transition-colors duration-300
                    ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full
                      bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                      origin-left transform transition-transform duration-300
                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* -------- Mobile Toggle -------- */}
          <button
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-gray-200 hover:text-white transition-colors z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* -------- Mobile Overlay -------- */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible z-40" : "opacity-0 invisible"}
        `}
      />

      {/* -------- Mobile Slide Menu -------- */}
      <aside
        className={`fixed top-20 right-4 w-42 rounded-xl bg-black/70 border border-white/10
          backdrop-blur-xl shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-2 p-4 text-left">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;

            return (
              <a
                key={link.label}
                href={`#${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.label)}
                className={`rounded-md px-3 py-2 text-sm transition
                  ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600"
                      : "text-gray-200"
                  }
                `}
              >
                <link.icon className="w-4 h-4"/>
                {link.label}
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
