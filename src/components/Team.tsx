"use client";
 
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
 
interface TeamMember {
  name: string;
  role: string;
  focus: string;
  image: string;
  accent: string;
}
 
const MEMBERS: TeamMember[] = [
  {
    name: "Dr. Amit Sharma, D.M.D.",
    role: "Chief Implant & Restorative Surgeon",
    focus: "High-strength implants, custom crowns, and painless surgical care.",
    image: "/dr-amit-sharma.png",
    accent: "bg-brand-50 text-brand-700 border-brand-100"
  },
  {
    name: "Dr. Camille Reyes, D.D.S.",
    role: "Associate Orthodontist & Pediatrics",
    focus: "Gentle aligners, braces care, and child-friendly orthodontics.",
    image: "/sarah-torres.png",
    accent: "bg-brand-50 text-brand-700 border-brand-100"
  },
  {
    name: "Dr. Anjali Rao, D.D.S.",
    role: "General & Cosmetic Dentist",
    focus: "Preventive checkups, smile brightening, and natural-looking cosmetic care.",
    image: "/dr-camille-reyes.jpg",
    accent: "bg-brand-50 text-brand-700 border-brand-100"
  }
];
 
export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      tl.from(".team-header", {
        opacity: 0,
        y: 35,
        duration: 0.75,
        ease: "power2.out"
      })
      .from(".team-card", {
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.45")
      .from(".team-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="team" className="bg-slate-50 py-12 sm:py-14 md:py-18 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2.5 text-center mx-auto mb-10 team-header">
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Clinical Specialists
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Specialized dental experts you can rely on.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Our team combines licensed clinical expertise with clear communication and professional care.
          </p>
        </div>
 
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 team-card"
            >
              <div className="overflow-hidden border-b border-slate-200 bg-brand-50/65 relative h-72 sm:h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex max-w-[calc(100vw-4rem)] rounded-none border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] shadow-sm sm:px-3 sm:text-[10px] sm:tracking-[0.25em] ${member.accent}`}>
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-extrabold text-slate-950">{member.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600 min-h-[48px]">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>
 
        <div className="mt-12 text-center team-cta">
          <Link
            href="/team"
            className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 shadow-[0_4px_14px_rgba(15,23,42,0.15)] cursor-pointer sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
          >
            Meet Our Certified Specialists
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/long-arrow-right.png" className="h-4 w-4" alt="Arrow Right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
