"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years of dental care" },
  { value: "8,200+", label: "Patients treated" },
  { value: "4.9/5", label: "Average review rating" },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 about-left"
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
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="rounded-none border border-slate-200 bg-slate-900 p-2.5 sm:p-4 text-white shadow-sm flex flex-col justify-between"
                >
                  <p className="text-xl sm:text-3xl font-extrabold tracking-tight">
                    <span>{stat.value}</span>
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs md:text-sm leading-tight text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-none border border-slate-200 bg-slate-950 shadow-sm about-right"
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
