import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-20 transition-all duration-300 backdrop-blur-md bg-background/60",
        isScrolled ? "md:py-3 py-2 shadow-md" : "md:py-5 py-3"
      )}
    >
      <div className="container flex items-center justify-between relative z-30">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="text-2xl md:text-3xl flex items-center gap-1 text-glow fira-code">
            {"<Portfolio/>"}
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 relative z-30">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary text-xl font-semibold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground relative z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-2 text-xl w-full p-3 bg-[#000000da] absolute top-15 z-50">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/90 hover:text-primary font-semibold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
