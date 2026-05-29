import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function GlobalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 80);
      
      if (currentScrollY > 600 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Films", path: "/films" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0A0707]/70 backdrop-blur-xl py-4 border-b border-[#D4AF37]/15"
            : "bg-transparent py-6",
          isHidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-1 group">
            <span className="font-display text-2xl tracking-widest text-[#F5E9D3] group-hover:text-[var(--color-brand-gold)] transition-colors">
              GA
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.3em] text-[#F5E9D3]/70 uppercase">
              Studio
            </span>
            <div className="w-1 h-1 rounded-full bg-[var(--color-brand-gold)] ml-1" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-sans text-[var(--text-micro)] tracking-[0.2em] uppercase transition-colors relative group",
                  location.pathname === link.path ? "text-[var(--color-brand-gold)]" : "text-[#F5E9D3] hover:text-[var(--color-brand-gold)]"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--color-brand-gold)] origin-left transition-transform duration-400 ease-out",
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/book"
              className="inline-flex items-center justify-center border border-[var(--color-brand-gold)] px-6 py-3 text-[var(--text-micro)] tracking-[0.2em] uppercase text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[#6B0F1A] transition-all duration-400"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden text-[#F5E9D3] flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="w-6 h-px bg-[var(--color-brand-gold)] block" />
            <span className="w-6 h-px bg-[var(--color-brand-gold)] block" />
            <span className="w-6 h-px bg-[var(--color-brand-gold)] block" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-[var(--color-bg-base)] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-[var(--color-brand-gold)] p-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl text-[#F5E9D3] hover:text-[var(--color-brand-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.2 }}
              >
                <Link
                  to="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors hover:bg-[var(--color-brand-gold)] hover:text-[#6B0F1A] inline-block"
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
