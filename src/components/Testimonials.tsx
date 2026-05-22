"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ReviewItem {
  rating: number;
  quote: string;
  story: string;
  name: string;
  location: string;
}

const REVIEWS: ReviewItem[] = [
  {
    rating: 5,
    quote: "Highly recommended for kids and adults!",
    story: "Visiting Dr. Amit Sharma was the best decision. I was nervous about dental work, but the clinic is calm and the team is gentle.",
    name: "Priya M.",
    location: "Jumeirah resident",
  },
  {
    rating: 5,
    quote: "Very gentle cleaning and honest pricing.",
    story: "I had deep scaling done, and it was completely painless. They explain every cost upfront—no hidden fees.",
    name: "Rahul K.",
    location: "Deira commuter",
  },
  {
    rating: 5,
    quote: "Excellent braces adjustment!",
    story: "My orthodontics appointments were smooth and comfortable. Friendly staff and expert care.",
    name: "Anjali P.",
    location: "Dubai Marina professional",
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal on scroll
      gsap.from(".testimonials-header", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      // Infinite reviews scrolling marquee using GSAP
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 35,
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="reviews" className="bg-white py-12 sm:py-14 md:py-18 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-5 sm:mb-7 testimonials-header">
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <img src="https://img.icons8.com/ios-glyphs/30/0f172a/speech-bubble.png" alt="Message Icon" className="h-4 w-4" />
            Patient Stories
          </span>
          <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            In their own words.
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-slate-600">
            Honest feedback from patients who experienced our care firsthand.
          </p>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-10 w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max gap-5 px-5"
          style={{ willChange: "transform" }}
        >
          {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, index) => (
            <div
              key={index}
              className="w-[85vw] max-w-[350px] shrink-0 sm:w-[450px] sm:max-w-none rounded-none border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 text-slate-950 mb-3">
                <img src="https://img.icons8.com/ios-glyphs/60/94a3b8/quote-left.png" alt="Quote Icon" className="h-8 w-8 opacity-50" />
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <img key={i} src="https://img.icons8.com/ios-glyphs/30/eab308/star.png" alt="Star" className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-950">{review.quote}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{review.story}</p>
              <div className="mt-4 border-t border-slate-200 pt-3.5">
                <p className="text-sm font-semibold text-slate-950">{review.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
