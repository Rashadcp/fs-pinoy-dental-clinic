"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// CountUp animation hook
function useCountUp(target: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return count;
}

// Animated stat display component
function AnimatedStat({ value, suffix, prefix, decimals = 0, label, delay }: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, 2, isInView);

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="rounded-none bg-slate-900 p-2.5 sm:p-4 text-white shadow-sm flex flex-col justify-between"
    >
      <p className="text-xl sm:text-3xl font-extrabold tracking-tight">
        <span>{prefix}{formatted}{suffix}</span>
      </p>
      <p className="mt-1 text-[10px] sm:text-xs md:text-sm leading-tight text-slate-300">{label}</p>
    </motion.div>
  );
}

const stats = [
  { value: 12, suffix: "+", label: "Years of dental care" },
  { value: 8200, suffix: "+", label: "Patients treated" },
  { value: 4.9, suffix: "/5", label: "Average review rating", decimals: 1 },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 about-left flex flex-col h-full"
          >
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
              <div className="pt-2 sm:pt-4">
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-900 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 shadow-sm cursor-pointer sm:w-auto sm:px-6 sm:tracking-wider"
                >
                  More About Our Clinical Philosophy
                  <span className="text-brand-400">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-auto pt-8">
              {stats.map((stat, idx) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  label={stat.label}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-none border border-slate-200 bg-slate-950 shadow-sm about-right lg:h-[calc(100%-60px)] lg:self-end"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
