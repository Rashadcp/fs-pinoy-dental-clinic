"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Member {
  name: string;
  role: string;
  focus: string;
  education: string;
  license: string;
  experience: string;
  image: string;
  accent: string;
}

const TEAM_MEMBERS: Member[] = [
  {
    name: "Dr. Amit Sharma, D.M.D.",
    role: "Chief Implant & Restorative Surgeon",
    focus: "Helping patients restore their smiles comfortably with gentle dental implants, custom crowns, and warm restorative care.",
    education: "Doctor of Dental Medicine (D.M.D.) — Manipal College of Dental Sciences",
    license: "DHA License No. DHA-123456",
    experience: "12+ Years of Warm Dental Care",
    image: "/dr-amit-sharma.png",
    accent: "bg-teal-50 text-teal-700 border-teal-100"
  },
  {
    name: "Dr. Anjali Rao, D.D.S.",
    role: "Associate Orthodontist & Pediatrics",
    focus: "Creating straight, healthy smiles for kids and adults using discreet aligners and gentle children's braces.",
    education: "Doctor of Dental Surgery (D.D.S.) — Maulana Azad Institute of Dental Sciences",
    license: "DHA License No. DHA-789012",
    experience: "8+ Years of Gentle Orthodontics",
    image: "/sarah-torres.png",
    accent: "bg-rose-50 text-rose-700 border-rose-100"
  },
  {
    name: "Dr. Camille Reyes, D.D.S.",
    role: "General & Cosmetic Dentist",
    focus: "Helping patients maintain healthy teeth with calm preventive visits, smile brightening, and natural-looking cosmetic care.",
    education: "Doctor of Dental Surgery (D.D.S.) - University of the Philippines College of Dentistry",
    license: "DHA License No. DHA-345678",
    experience: "7+ Years of Family Dental Care",
    image: "/dr-camille-reyes.jpg",
    accent: "bg-brand-50 text-brand-700 border-brand-100"
  }
];

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Content Reveal
      gsap.from(".team-hero-content > *", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 2. Team Cards Stagger Reveal
      gsap.from(".team-member-card", {
        scrollTrigger: {
          trigger: ".team-cards-grid",
          start: "top 80%"
        },
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out"
      });

      // 3. Clinical Integrity - Text Elements
      gsap.from(".integrity-text > *", {
        scrollTrigger: {
          trigger: ".integrity-section",
          start: "top 80%"
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
      });

      // 4. Clinical Integrity - Image
      gsap.from(".integrity-image", {
        scrollTrigger: {
          trigger: ".integrity-section",
          start: "top 80%"
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out"
      });

      // 5. Scheduler Banner
      gsap.from(".scheduler-banner > *", {
        scrollTrigger: {
          trigger: ".scheduler-banner",
          start: "top 85%"
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex-1 bg-white text-slate-900 overflow-hidden">
      {/* Team Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-12 sm:pt-32 sm:pb-20 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cfe6fe_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 team-hero-content">
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <img src="https://img.icons8.com/ios-glyphs/30/1d4ed8/group.png" alt="Users Icon" className="h-4 w-4" />
            Warm & Caring Team
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-6xl max-w-4xl mx-auto leading-tight">
            Meet the warm hearts behind your bright smile.
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 mx-auto">
            With years of professional training and a deep passion for gentle care, our dedicated team treats you just like family. We&apos;re here to make every single dental visit warm, easy, and completely comfortable.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="team-cards-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="team-member-card bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Photo Container */}
                  <div className="h-72 overflow-hidden bg-brand-50/65 relative border-b border-slate-200 sm:h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale-[20%] contrast-[105%] transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex max-w-[calc(100vw-4rem)] rounded-none border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] shadow-sm sm:px-3 sm:text-[10px] sm:tracking-[0.2em] ${member.accent}`}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Profile info */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">{member.name}</h3>
                      <p className="text-xs uppercase tracking-wider text-brand-600 font-bold">{member.experience}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 font-medium">
                      {member.focus}
                    </p>
 
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <img src="https://img.icons8.com/ios-glyphs/30/94a3b8/graduation-cap.png" alt="Education Icon" className="h-4 w-4 flex-shrink-0" />
                        <span className="leading-snug">{member.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="https://img.icons8.com/ios-glyphs/30/94a3b8/security-checked.png" alt="License Icon" className="h-4 w-4 flex-shrink-0" />
                        <span>{member.license}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0 mt-2">
                  <Link
                    href={`?booking=open`}
                    className="inline-flex w-full items-center justify-center rounded-none bg-slate-900 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 sm:tracking-wider"
                  >
                    Request An Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Integrity Standards */}
      <section className="integrity-section py-14 sm:py-20 bg-white border-t border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="integrity-text lg:col-span-6 space-y-6">
              <span className="block text-xs font-extrabold uppercase tracking-[0.16em] text-brand-600 sm:tracking-[0.3em]">Always Learning, Always Caring</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight">
                Our commitment to your comfort and health.
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Dental care is always advancing, and so are we! Our team continuously learns the latest, gentlest techniques from around the world. Whether it&apos;s a simple filling or a dental implant, you can rest assured you&apos;re receiving modern, high-quality care wrapped in authentic Filipino warmth.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 pt-2 text-sm text-slate-700">
                <div className="p-4 border border-slate-100 bg-slate-50 space-y-2">
                  <h4 className="font-bold text-slate-950">Highly Trained Experts</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Our doctors and hygienists are fully certified with years of real clinical experience, keeping their skills sharp and safe.
                  </p>
                </div>
                <div className="p-4 border border-slate-100 bg-slate-50 space-y-2">
                  <h4 className="font-bold text-slate-950">Hospitable & Gentle Hearts</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We promise to listen to your concerns, go at your own pace, and take extra special care of you if you feel nervous.
                  </p>
                </div>
              </div>
            </div>

            <div className="integrity-image lg:col-span-6 overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
                alt="Dentists discussing dental chart diagnostics"
                className="w-full h-80 sm:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Appointment Scheduler Banner */}
      <section className="scheduler-banner bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0055a8_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            We&apos;re excited to welcome you into our family!
          </h2>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base mx-auto">
            Take the first step toward a happier, healthier smile today. Simply choose a time that works for you, and we&apos;ll take care of all the rest.
          </p>
          <div className="pt-2">
            <Link
              href="?booking=open"
              className="inline-flex w-full items-center justify-center rounded-none bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-brand-600 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
            >
              Book Your Friendly Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
