import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Home, User, Briefcase, Folder } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", Icon: Home },
  { name: "About", href: "#about", Icon: User },
  { name: "Services", href: "#services", Icon: Briefcase },
  { name: "Projects", href: "#projects", Icon: Folder },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 z-20 transition-all duration-300",
        isScrolled
          ? "py-2 md:py-3 shadow-md "
          : "py-3 md:py-6"
      )}
    >
      <div className="container flex items-center justify-center">
        <ul
          className="
            flex items-center gap-6 md:gap-10
            rounded-full px-6 py-3
            backdrop-blur-lg bg-black/40 border-b border-white/10
            shadow-[0_4px_20px_rgba(0,0,0,0.15)]
          "
        >
          {navItems.map(({ name, href, Icon }, i) => (
            <li key={i}>
              <a
                href={href}
                className="
                  group flex items-center gap-2
                  text-foreground/70 hover:text-white
                  transition-colors duration-300
                "
              >
                <Icon
                  className="
                    h-5 w-5 text-foreground/60
                    transition-colors duration-300
                    group-hover:text-white
                  "
                />
                <span
                  className="
                    hidden md:inline text-lg font-medium tracking-wide
                    bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                    bg-clip-text text-transparent
                    transition-opacity duration-300 group-hover:opacity-90
                  "
                >
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
