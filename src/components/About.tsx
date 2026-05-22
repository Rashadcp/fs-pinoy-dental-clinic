"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "12+", label: "Years of dental care" },
  { value: "8,200+", label: "Patients treated" },
  { value: "4.9/5", label: "Average review rating" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const parseStat = (value: string) => {
    const match = value.match(/^[0-9.,]+/);
    if (!match) return { target: 0, suffix: value, isFloat: false };
    const numStr = match[0];
    const suffix = value.substring(numStr.length);
    const target = parseFloat(numStr.replace(/,/g, ""));
    const isFloat = numStr.includes(".");
    return { target, suffix, isFloat };
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Columns entrance reveals
      gsap.from(".about-left", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".about-right", {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Stats numbers count-up tween
      const statNumbers = gsap.utils.toArray(".stat-number");
      statNumbers.forEach((el: any) => {
        const targetVal = parseFloat(el.getAttribute("data-target"));
        const isFloat = el.getAttribute("data-float") === "true";
        const suffix = el.getAttribute("data-suffix") || "";
        
        const countObj = { val: 0 };
        
        gsap.to(countObj, {
          val: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            if (isFloat) {
              el.innerText = countObj.val.toFixed(1) + suffix;
            } else {
              el.innerText = Math.round(countObj.val).toLocaleString() + suffix;
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="bg-slate-50 py-12 sm:py-14 md:py-18 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4 sm:space-y-6 about-left">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 sm:text-sm sm:tracking-[0.3em]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-brand-100 text-brand-700">A</span>
              About FS Pinoy
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Modern dental care with a calm, confident patient experience.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                At FS Pinoy Dental Clinic, every treatment begins with respect, clarity, and a tailored plan. We combine clinical precision with a warm Filipino approach to make dentistry approachable for the whole family.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat) => {
                const { target, suffix, isFloat } = parseStat(stat.value);
                return (
                  <div key={stat.label} className="rounded-none border border-slate-200 bg-slate-900 p-2.5 sm:p-4 text-white shadow-sm flex flex-col justify-between">
                    <p className="text-xl sm:text-3xl font-extrabold tracking-tight">
                      <span
                        className="stat-number"
                        data-target={target}
                        data-suffix={suffix}
                        data-float={isFloat}
                      >
                        0{suffix}
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs md:text-sm leading-tight text-slate-300">{stat.label}</p>
                  </div>
                );
              })}
            </div>
 
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-900 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 shadow-sm cursor-pointer sm:w-auto sm:px-6 sm:tracking-wider"
              >
                More About Our Clinical Philosophy
                <span className="text-brand-400">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-none border border-slate-200 bg-slate-950 shadow-sm about-right">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200"
              alt="Modern dental clinic equipment and treatment room"
              className="h-64 sm:h-[440px] lg:h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Patient-first care</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">A calm environment for your best smile.</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">From initial consultation to follow-up, our clinic focuses on thoughtful treatment and a welcoming experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


