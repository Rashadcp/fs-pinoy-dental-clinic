"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, MenuIcon } from "./Icons";

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
      className={`fixed top-0 z-50 w-full min-h-fit transition-all duration-300 ease-in-out ${scrolled
          ? "pt-0 px-0 md:pt-4 md:px-6 lg:px-8 bg-white/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
          : "pt-4 px-0 md:pt-6 md:px-0 lg:px-0"
        }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ease-in-out ${scrolled
            ? "flex items-center w-full max-w-full md:max-w-3xl rounded-none md:rounded-full bg-white/70 md:bg-white/75 backdrop-blur-md px-4 sm:px-6 py-3 md:px-6 md:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "flex items-center lg:grid lg:grid-cols-12 lg:gap-8 w-full max-w-[1720px] bg-transparent px-4 py-4 sm:px-6 sm:py-5 lg:px-11 lg:py-5"
          }`}
      >
        <Link href="/" className={`flex flex-shrink-0 items-center gap-3 font-semibold text-slate-900 text-lg tracking-tight -ml-4 ${scrolled ? "" : "lg:col-span-7 lg:-ml-[20px]"}`}>
          <Image src="/fs-pinoy-logo.png" alt="FS Pinoy Dental Clinic" width={300} height={80} className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-8 min-[350px]:h-8" : "h-5 min-[300px]:h-10.5"}`} priority />
        </Link>

        <div className={`hidden md:flex items-center ml-auto ${scrolled ? "gap-5 lg:gap-5" : "lg:col-span-5 lg:w-full lg:justify-between"}`}>
          <nav className={`flex items-center ${scrolled ? "gap-6 lg:gap-8" : "lg:w-full lg:justify-between lg:pr-8 gap-6"}`}>
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
          <button
            onClick={onOpenBooking}
            className="bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400 rounded-full flex-shrink-0"
          >
            Book Appointment
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-0 transition flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
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
            className="md:hidden mx-4 mt-2 max-h-[calc(100vh-100px)] overflow-y-auto rounded-xl bg-white shadow-lg border border-slate-100"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`rounded-sm px-3 py-3 text-sm font-semibold transition ${currentActive === link.name ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="mt-3 rounded-sm bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
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
