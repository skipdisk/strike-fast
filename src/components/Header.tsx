import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
      <div className="flex justify-between items-center mix-blend-difference text-white relative z-50">
        <a href="#" className="block hover:opacity-80 transition-opacity">
          <img
            src="/snake-logo.svg"
            alt="Strike Fast Snake Removal"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:opacity-60 transition-opacity uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-2xl font-light z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 transition-colors text-white"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
