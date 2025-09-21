"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Lightbulb, Mail } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "home", path: "#home", icon: <Home size={18} /> },
    { name: "about", path: "#about", icon: <Info size={18} /> },
    { name: "services", path: "#services", icon: <Lightbulb size={18} /> },
    { name: "contact", path: "#contact", icon: <Mail size={18} /> },
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
        ? "text-yellow-500 bg-white/10 md:bg-transparent font-bold"
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 py-4 backdrop-blur-md bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo + Company Name */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            priority
          />
          <span className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
            EverBright Multiple Resources Sdn. Bhd
          </span>
        </a>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-base">
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
        <nav className="md:hidden bg-black/80 px-6 pb-4 pt-2 text-base space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={navLinkStyles(link.name)}
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
