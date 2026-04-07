import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Check } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif mb-6">
            <a
              href="#"
              className="block hover:opacity-80 transition-opacity mb-2"
            >
              <img
                src="/snake-logo.svg"
                alt="Strike Fast Snake Removal"
                className="h-10 md:h-12 w-auto"
              />
            </a>
            Strike Fast Snake Removal
          </h2>
          <p className="max-w-md text-neutral-500">
            Providing professional, humane, and rapid snake removal and property
            inspection services. Available for emergency dispatch.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">
            Contact
          </h3>
          <ul className="space-y-4">
            <CopyableItem icon={Phone} value="(830) 369-8777" />
            <CopyableItem icon={Mail} value="Jesse@strike-fast.com" />
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neutral-400">
            Service Areas
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li>New Braunfels</li>
            <li>Canyon Lake</li>
            <li>Seguin</li>
            <li>San Marcos</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-neutral-900 text-sm text-neutral-600">
        <p>
          &copy; {new Date().getFullYear()} Strike Fast Snake Removal. All
          rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/strikefast_snake_removal/"
            className="hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/p/Strike-Fast-Snake-Removal-61575383790719/"
            className="hover:text-white transition-colors"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function CopyableItem({ icon: Icon, value }: { icon: any; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="relative w-fit flex items-center">
      <button
        onClick={handleCopy}
        className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors font-sans group"
      >
        <Icon size={20} className="shrink-0" />
        <span>{value}</span>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute left-full ml-4 flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-green-500/20 whitespace-nowrap pointer-events-none"
          >
            <Check size={12} /> Copied
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
