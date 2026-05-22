"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== "/") return;
      const sections = ["home", "services", "about", "team", "contact"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(
            section === "home"
              ? "Home"
              : section === "services"
              ? "Services"
              : section === "about"
              ? "About Us"
              : section === "team"
              ? "Team"
              : "Contact"
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const currentActive = pathname === "/" ? active : (
    pathname === "/about" ? "About Us" :
    pathname === "/services" ? "Services" :
    pathname === "/team" ? "Team" :
    pathname === "/contact" ? "Contact" : ""
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled ? "pt-4 px-4 sm:px-6 lg:px-8" : "pt-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-w-5xl rounded-full bg-white/60 px-6 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md"
            : "max-w-7xl bg-transparent px-4 py-4 sm:px-6 lg:px-8"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900 text-lg tracking-tight">
          <img src="/fs-pinoy-logo.png" alt="FS Pinoy Dental Clinic" className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = currentActive === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition ${isActive ? "text-brand-500" : "text-slate-600 hover:text-brand-600"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className={`bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 ${
              scrolled ? "rounded-full" : "rounded-none"
            }`}
          >
            Book Appointment
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <img src="https://img.icons8.com/ios-glyphs/30/0f172a/multiply.png" className="h-6 w-6" alt="Close" />
          ) : (
            <img src="https://img.icons8.com/ios-glyphs/30/0f172a/menu.png" className="h-6 w-6" alt="Menu" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden ${
              scrolled 
                ? "mx-4 mt-2 overflow-hidden rounded-2xl bg-white/80 shadow-lg backdrop-blur-md sm:mx-6 lg:mx-8" 
                : "bg-white/95 shadow-lg"
            }`}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${currentActive === link.name ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="mt-3 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


