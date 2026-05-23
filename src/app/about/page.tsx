"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheckIcon, SparklesIcon, MedalIcon, PulseIcon } from "@/components/Icons";

const stats = [
  { value: "12+", label: "Years of Dental Care" },
  { value: "8,200+", label: "Happy Patients Treated" },
  { value: "4.9/5", label: "Average Review Rating" },
  { value: "100%", label: "DHA-Licensed Quality" }
];

const pillars = [
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Licensed Excellence",
    description: "Our clinicians hold full DHA licensing, continuously training to offer predictable, high-precision outcomes."
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Comfort-First Protocols",
    description: "We use modern, minimally-invasive dental techniques and soothing care protocols to ensure an entirely stress-free visit."
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Honest & Clear Communication",
    description: "No medical jargon, no hidden fees. We explain every treatment option in plain language with transparent pricing."
  }
];

export default function AboutPage() {
  return (
    <div className="flex-1 bg-white text-slate-900">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-12 sm:pt-40 sm:pb-20 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cfe6fe_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 about-hero-content">
            <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <MedalIcon className="h-4 w-4" />
              Established Care Excellence
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-6xl max-w-4xl mx-auto leading-tight">
              Making you feel right at home with warm, gentle dental care.
            </h1>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 mx-auto">
              At FS Pinoy Dental Clinic, we believe dental visits should be simple and stress-free. We blend warm Filipino hospitality with trusted clinical expertise to look after your family’s smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Visual Grid Section */}
      <section className="py-14 sm:py-20 about-narrative-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative about-narrative-visual">
              <div className="relative overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern dental clinic treatment setting"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-300 font-bold">Clinical Precision</span>
                    <h3 className="text-lg font-bold text-white mt-1">State-of-the-art dental technology.</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 about-narrative-content">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 sm:text-sm sm:tracking-[0.25em]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-brand-100 text-brand-700 font-extrabold text-sm">P</span>
                  Patient-First Philosophy
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight">
                  A gentle, stress-free approach to keeping your teeth healthy.
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  We know that visiting the dentist can feel a bit scary or stressful. That is why FS Pinoy was started with one simple promise: to make your dental treatments as gentle, comfortable, and painless as possible.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  By pairing high clinical standards with real care and honest conversations, we want you to feel completely safe and valued every time you walk through our doors.
                </p>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-900 text-white p-4 border border-slate-800 shadow-sm flex flex-col justify-between">
                    <p className="text-2xl sm:text-3xl font-black text-brand-400">
                      <span>{stat.value}</span>
                    </p>
                    <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 py-14 sm:py-20 border-t border-b border-slate-200 pillars-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 pillars-header">
            <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <PulseIcon className="h-4 w-4" />
              Core Pillars
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mt-3">
              The values that define our practice.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mt-2">
              Every crown we fit, every hygiene treatment we perform, and every plan we draw up is grounded in these strict principles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-md hover:border-slate-300 pillar-card"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Standards Highlight */}
      <section className="py-14 sm:py-20 border-b border-slate-200 standards-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 standards-content">
            <span className="text-xs uppercase tracking-[0.16em] font-extrabold text-brand-600 sm:tracking-[0.3em]">Keeping You Safe</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight">
              Our promise of cleanliness and safety.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Your health is our greatest responsibility. We follow incredibly strict disinfection and sterilization standards for every single tool, chair, and surface. You can lie back and relax knowing you are in safe, clean hands.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2 pt-6 text-sm text-slate-700 max-w-3xl mx-auto">
              {[
                "DHA-Licensed Medical Team",
                "Advanced chemical disinfection & autoclave sterilization",
                "Premium ISO-Certified dental materials and custom ceramics",
                "Comprehensive clinical assessment before treatment"
              ].map((std) => (
                <div key={std} className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-left hover:border-slate-200 transition-colors">
                  <span className="h-6 w-6 bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono">✓</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0055a8_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready to experience gentle, trusted dentistry?
          </h2>
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base mx-auto">
            Book an appointment today. Select a day and time slot convenient for you, and let our clinic team prepare a warm welcome.
          </p>
          <div className="pt-2">
            <Link
              href="?booking=open"
              className="inline-flex w-full items-center justify-center rounded-none bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-brand-600 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
            >
              Book Your Visit Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
