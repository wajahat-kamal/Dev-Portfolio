import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", Icon },
  { name: "About", href: "#about", Icon },
  { name: "Services", href: "#services", Icon },
  { name: "Projects", href: "#projects",Icon },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        "fixed w-full z-20 transition-all duration-300",
        isScrolled ? "md:py-3 py-2 shadow-md" : "md:py-5 py-3"
      )}
    >
      <div className="container flex items-center justify-between relative z-30">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="text-2xl md:text-3xl flex items-center gap-1 text-glow fira-code bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            {"<Portfolio/>"}
          </span>
        </a>

        <ul className="flex flex-row justify-end items-center gap-8 backdrop-blur-md bg-black rounded-2xl py-4 px-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <Icon />
                <span className="hidden md:block text-foreground/80 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-400 hover:to-purple-600 bg-clip-text hover:text-transparent tracking-wide text-xl font-semibold transition-colors duration-300">
                  {" "}
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
