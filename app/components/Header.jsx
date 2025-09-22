"use client";
import { useState, useEffect } from "react";
import {
  CircuitBoard,
  Bolt,
  Lightbulb,
  Plug,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "home", path: "#home", icon: <CircuitBoard size={18} /> },
    { name: "about", path: "#about", icon: <Bolt size={18} /> },
    { name: "services", path: "#services", icon: <Lightbulb size={18} /> },
    { name: "contact", path: "#contact", icon: <Plug size={18} /> },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinkStyles = (name) =>
    `capitalize transition-all duration-200 px-3 py-1 rounded-md flex items-center gap-2 ${
      activeSection === name
        ? "text-yellow-400 bg-white/10 md:bg-transparent font-bold"
        : "text-gray-300 hover:text-yellow-300 hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 py-3 sm:py-4 backdrop-blur-md bg-gradient-to-r from-[#0a0a0a] via-[#001f2d] to-[#0a0a0a] shadow-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo + Company Name */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Image
            src="/favicon.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            priority
          />
          <span className="truncate text-cyan-400 font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
            EverBright Multiple Resources{" "}
            <span className="text-yellow-400">Sdn. Bhd</span>
          </span>
        </a>

        {/* Toggle Icon (Mobile) */}
        <button
          className="text-yellow-400 md:hidden flex items-center transition-transform duration-200 hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={navLinkStyles(link.name)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden px-4 pb-6 pt-4 text-base space-y-3 bg-gradient-to-b from-[#001f2d] via-[#000000] to-[#001f2d] animate-slideDown border-t border-yellow-400/20"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`block px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300
                ${
                  activeSection === link.name
                    ? "text-yellow-400 bg-white/10 shadow-[0_0_10px_rgba(255,255,0,0.7)]"
                    : "text-gray-300 hover:text-yellow-300 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] hover:bg-white/5"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
