import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ROOMS", href: "#rooms" },
  { name: "RESTAURANTS", href: "#restaurants" },
  { name: "AMENITIES", href: "#amenities" },
  { name: "CASINO", href: "#entertainment" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-navy/50 backdrop-blur-lg py-4 border-white/10 shadow-xl"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col z-50">
          <span
            className={cn(
              "font-serif text-2xl font-bold tracking-wider transition-colors",
              isScrolled ? "text-white" : "text-white",
            )}
          >
            HOTEL NEO MAJESTIC
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase opacity-80 text-white">
            Goa • India
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold relative group",
                isScrolled ? "text-white/90" : "text-white",
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            className="font-semibold tracking-wide"
          >
            BOOK A ROOM
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-navy flex flex-col items-center justify-center space-y-8 z-40 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="lg" className="mt-4">
              BOOK A ROOM
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
