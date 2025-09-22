"use client";
import { useState, useEffect } from "react";
import {
  CircuitBoard,
  Bolt,
  Lightbulb,
  Plug,
  EllipsisVertical,
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
    <header className="fixed top-0 w-full z-50 py-4 backdrop-blur-md bg-gradient-to-r from-[#0a0a0a] via-[#001f2d] to-[#0a0a0a] shadow-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo + Company Name */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/favicon.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            priority
          />
          <span className="text-cyan-400 font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
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
          {isOpen ? <X size={26} /> : <EllipsisVertical size={26} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-base">
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
          className="md:hidden px-6 pb-6 pt-4 text-base space-y-4 
                     bg-gradient-to-b from-[#001f2d] via-[#000000] to-[#001f2d] 
                     relative overflow-hidden animate-slideDown border-t border-yellow-400/20"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`relative block px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300
                ${
                  activeSection === link.name
                    ? "text-yellow-400 bg-white/10 shadow-[0_0_10px_rgba(255,255,0,0.7)]"
                    : "text-gray-300 hover:text-yellow-300 hover:shadow-[0_0_10px_rgba(255,255,0,0.6)] hover:bg-white/5"
                }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-3">
                {link.icon}
                {link.name}
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
