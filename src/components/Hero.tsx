"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon } from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
      .from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-stats", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.6")
      .from(cardRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 30,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");

      // 2. Parallax effect on scroll
      gsap.to(cardRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      // 3. Mousemove Tilt Animation
      const card = cardRef.current;
      if (card) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = -(y / rect.height) * 12;
          const rotateY = (x / rect.width) * 12;
          
          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
            overwrite: "auto"
          });
        };
        
        const onMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out",
            duration: 0.6,
            overwrite: "auto"
          });
        };
        
        card.addEventListener("mousemove", onMouseMove);
        card.addEventListener("mouseleave", onMouseLeave);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative w-full overflow-hidden bg-slate-50 text-slate-900">
      <div className="relative mx-auto flex max-w-7xl items-center px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl hero-title">
              Dental care made clear, calm, and confident.
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 lg:max-w-xl hero-description">
              Every appointment is designed around precision and comfort. Modern dentistry delivered with honesty, efficient scheduling, and an approachable team.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start hero-btn">
              <button
                onClick={onOpenBooking}
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:bg-brand-600 cursor-pointer sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.12em]"
              >
                See available times
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-none border border-slate-200 bg-white shadow-sm w-full hero-stats">
              <div className="p-4 flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Clear planning</p>
                <p className="mt-1 text-sm text-slate-500">Detailed treatment plans without surprises.</p>
              </div>
              <div className="p-4 flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Reliable care</p>
                <p className="mt-1 text-sm text-slate-500">Consistent results from trusted professionals.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              ref={cardRef}
              style={{ transformStyle: "preserve-3d" }}
              className="overflow-hidden rounded-none border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="h-[16rem] sm:h-[22rem] lg:h-[28rem] w-full bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=900"
                  alt="A friendly dentist and happy patient smiling at FS Pinoy Dental Clinic"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="grid gap-4 border-t border-slate-200 bg-white p-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Clinic hours</p>
                  <p className="text-sm font-semibold text-slate-900">8 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
