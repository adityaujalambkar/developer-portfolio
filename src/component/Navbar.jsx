import React from "react";
import Link from "./Link";
import {Download} from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-violet-500">&lt;/&gt;</span>
          <span className="font-semibold text-black text-xl">AU</span>
        </div>

        <div className="hidden md:flex gap-8 text-black">
          <a href="#home" className="hover:text-violet-400">
            Home
          </a>
          <a href="#about" className="hover:text-violet-400">
            About
          </a>
          <a href="#projects" className="hover:text-violet-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-violet-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-violet-400">
            Contact
          </a>
        </div>
      </nav>
  );
};

export default Navbar;