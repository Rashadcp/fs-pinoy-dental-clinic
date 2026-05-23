"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PulseIcon, CheckIcon, ArrowRightIcon } from "./Icons";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  badge: string;
  accent: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "preventive",
    title: "Preventive & General Dentistry",
    tagline: "Healthy foundations for a lifetime of smiles.",
    description: "Routine clinical care to prevent decay, screen for oral health issues, and maintain clean, healthy enamel.",
    benefits: [
      "Dental Checkups & Screenings",
      "Teeth Cleaning (Scaling & Polishing)",
      "Digital X-Rays for precise planning",
      "Fluoride Treatments & Sealants",
      "Gum Health Assessment & Oral Hygiene Advice"
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    badge: "Preventive",
    accent: "bg-teal-50 text-teal-700 border-teal-100"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    tagline: "Smile with complete confidence.",
    description: "Advanced aesthetics designed to brighten and refine the natural appearance of your teeth.",
    benefits: [
      "Teeth Whitening (Nano Whitening / Hollywood Smile)",
      "Premium Veneers (2D, 3D, 6D Premium custom designs)"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    badge: "Cosmetic",
    accent: "bg-rose-50 text-rose-700 border-rose-100"
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    tagline: "Bring strength and health back to your smile.",
    description: "Reconstruct damaged teeth, treat dental pain, and restore fully functional structural integrity.",
    benefits: [
      "Durable Tooth Fillings",
      "Root Canal Treatment for pain relief",
      "Dentures (Normal & Flexible options)",
      "Custom Crowns and Bridges"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    badge: "Restorative",
    accent: "bg-slate-900 text-white border-slate-700"
  },
  {
    id: "surgery",
    title: "Oral Surgery",
    tagline: "Expert surgical care focused on your safety.",
    description: "Safe, predictable outpatient surgical treatments to resolve structural issues and relieve chronic pain.",
    benefits: [
      "Gentle Tooth Extractions",
      "Dental Abscess Treatment",
      "DHA-licensed surgical safety protocols",
      "Outpatient post-operative care guidance"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    badge: "Surgery",
    accent: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    id: "orthodontic",
    title: "Orthodontic Services",
    tagline: "Straight smiles with contemporary care.",
    description: "Modern brace and alignment technologies designed to correctly position teeth and improve bite health.",
    benefits: [
      "Fixed Metal Braces",
      "Ceramic Braces (discreet aesthetics)",
      "Retainers (Plastic & Wired custom fits)",
      "Fashion Braces adjustments",
      "Clear Aligners support"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    badge: "Orthodontic",
    accent: "bg-orange-50 text-orange-700 border-orange-100"
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    tagline: "Warm, gentle care for the youngest smiles.",
    description: "Comfort-focused dentistry that builds positive clinical associations and healthy dental habits for children.",
    benefits: [
      "Kids Dental Checkups & cleanings",
      "Protective Fluoride Treatments",
      "Pediatric Dental Sealants",
      "Children's Cavity Treatment",
      "Early Orthodontic Check-ups"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    badge: "Pediatric",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    id: "aesthetic",
    title: "Aesthetic Dentistry",
    tagline: "Stand out with a unique, custom shine.",
    description: "Bespoke dental adornments and custom crown placements to add unique artistic styling to your teeth.",
    benefits: [
      "Tooth Jewels / Diamond Fixing",
      "Crystal Tooth Gems application",
      "Premium Gold & Silver Crowns",
      "Custom Tooth Grill Placement",
      "Non-invasive aesthetic attachment"
    ],
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1200&auto=format&fit=crop",
    badge: "Aesthetic",
    accent: "bg-amber-50 text-amber-700 border-amber-100"
  }
];

const getBenefitIcon = (item: string, serviceId: string) => {
  const normalized = item.toLowerCase();
  
  if (normalized.includes("checkup") || normalized.includes("screening")) {
    return (
      <svg className="h-4.5 w-4.5 text-teal-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8a3 3 0 0 1 3 3" />
      </svg>
    );
  }
  if (normalized.includes("cleaning") || normalized.includes("polishing") || normalized.includes("whitening")) {
    return (
      <svg className="h-4.5 w-4.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  if (normalized.includes("x-ray") || normalized.includes("digital")) {
    return (
      <svg className="h-4.5 w-4.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    );
  }
  if (normalized.includes("veneer") || normalized.includes("aesthetic") || normalized.includes("jewel") || normalized.includes("gem")) {
    return (
      <svg className="h-4.5 w-4.5 text-rose-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l3 13" />
        <path d="M13 3 16 9l-3 13" />
        <path d="M2 9h20" />
      </svg>
    );
  }
  if (normalized.includes("filling") || normalized.includes("fluoride") || normalized.includes("sealant")) {
    return (
      <svg className="h-4.5 w-4.5 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (normalized.includes("root canal") || normalized.includes("treatment") || normalized.includes("pain")) {
    return (
      <svg className="h-4.5 w-4.5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1.45.45 1.45 1v4c0 .55-.45 1-1.45 1z" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    );
  }
  if (normalized.includes("crown") || normalized.includes("bridge")) {
    return (
      <svg className="h-4.5 w-4.5 text-slate-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 5 7-6 7 6 3-5v15H2V4z" />
      </svg>
    );
  }
  
  // Default general health icon
  return (
    <svg className="h-4.5 w-4.5 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

interface ServicesProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export default function Services({ onOpenBookingWithService }: ServicesProps) {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24 lg:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-2.5 text-center mx-auto mb-12 sm:mb-16 services-header"
        >
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <PulseIcon className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Dental care built around clear outcomes.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Each service is designed to be straightforward, efficient, and with your comfort in mind. We explain the plan first, then deliver the treatment.
          </p>
        </motion.div>
 
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="flex flex-col justify-between overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 service-card"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex rounded-none border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm ${service.accent}`}>
                      {service.badge}
                    </span>
                  </div>
                </div>
 
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-950 min-h-[56px] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {service.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {service.description}
                  </p>
 
                  <div className="grid gap-2.5 pt-3.5 border-t border-slate-100">
                    {service.benefits.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-slate-50 border border-slate-200/50 p-2.5 transition-all duration-200 hover:bg-slate-100 hover:border-slate-300">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-slate-900">
                          {getBenefitIcon(item, service.id)}
                        </div>
                        <span className="text-xs font-semibold text-slate-800 leading-tight line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
 
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    const number = "971542575730";
                    const text = `Hi! I'm interested in inquiring about your "${service.title}" service at FS Pinoy Dental Clinic. Could you tell me more about pricing and slots?`;
                    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="group inline-flex w-full items-center justify-center gap-2 border border-slate-200 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-600 hover:bg-brand-50 hover:border-brand-200 transition duration-200 cursor-pointer"
                >
                  Inquire about this service
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center services-cta"
        >
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 shadow-[0_4px_14px_rgba(15,23,42,0.15)] cursor-pointer sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
          >
            Explore All 7 Specialized Services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
