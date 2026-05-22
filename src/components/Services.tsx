"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
 
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
 
interface ServicesProps {
  onOpenBookingWithService: (serviceName: string) => void;
}
 
export default function Services({ onOpenBookingWithService }: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });

      tl.from(".services-header", {
        opacity: 0,
        y: 35,
        duration: 0.75,
        ease: "power2.out"
      })
      .from(".service-card", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.45")
      .from(".services-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.45");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="bg-slate-50 py-12 sm:py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2.5 text-center mx-auto mb-10 services-header">
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <img src="https://img.icons8.com/ios-glyphs/30/0f172a/pulse.png" alt="Heartbeat Icon" className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Dental care built around clear outcomes.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Each service is designed to be straightforward, efficient, and with your comfort in mind. We explain the plan first, then deliver the treatment.
          </p>
        </div>
 
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
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
 
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.benefits.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="mt-0.5 h-4 w-4 flex-none rounded-none bg-slate-100 text-slate-900 grid place-items-center">
                          <img src="https://img.icons8.com/ios-glyphs/30/0f172a/checkmark.png" alt="Checkmark" className="h-3 w-3" />
                        </span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
 
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBookingWithService(service.title)}
                  className="group inline-flex w-full items-center justify-center gap-2 border border-slate-200 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-600 hover:bg-brand-50 hover:border-brand-200 transition duration-200 cursor-pointer"
                >
                  Inquire about this service
                  <img src="https://img.icons8.com/ios-glyphs/30/2563eb/long-arrow-right.png" alt="Arrow Right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
 
        <div className="mt-12 text-center services-cta">
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800 shadow-[0_4px_14px_rgba(15,23,42,0.15)] cursor-pointer sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.12em]"
          >
            Explore All 7 Specialized Services
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/long-arrow-right.png" alt="Arrow Right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}


