"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChatIcon, QuoteIcon, StarIcon } from "./Icons";

interface ReviewItem {
  rating: number;
  quote: string;
  story: string;
  name: string;
  location: string;
  avatarBg: string;
  avatarText: string;
}

const REVIEWS: ReviewItem[] = [
  {
    rating: 5,
    quote: "Highly recommended for kids and adults!",
    story: "Visiting Dr. Amit Sharma was the best decision. I was nervous about dental work, but the clinic is calm and the team is gentle.",
    name: "Priya M.",
    location: "Jumeirah resident",
    avatarBg: "bg-teal-100 text-teal-800 border-teal-200",
    avatarText: "PM",
  },
  {
    rating: 5,
    quote: "Very gentle cleaning and honest pricing.",
    story: "I had deep scaling done, and it was completely painless. They explain every cost upfront—no hidden fees.",
    name: "Rahul K.",
    location: "Deira commuter",
    avatarBg: "bg-blue-100 text-blue-800 border-blue-200",
    avatarText: "RK",
  },
  {
    rating: 5,
    quote: "Excellent braces adjustment!",
    story: "My orthodontics appointments were smooth and comfortable. Friendly staff and expert care.",
    name: "Anjali P.",
    location: "Dubai Marina professional",
    avatarBg: "bg-rose-100 text-rose-800 border-rose-200",
    avatarText: "AP",
  },
  {
    rating: 5,
    quote: "Warm Filipino approach & family care.",
    story: "Our whole family goes here now. They make you feel right at home. Easy scheduling, clear plans, and amazing kids' cavity care.",
    name: "Mark T.",
    location: "Al Barsha parent",
    avatarBg: "bg-amber-100 text-amber-800 border-amber-200",
    avatarText: "MT",
  }
];

export default function Testimonials() {
  // Triple the reviews array to ensure the viewport is completely filled and the loop is perfectly seamless.
  const scrolledReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="bg-white py-20 sm:py-24 lg:py-28 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-center mx-auto mb-10 sm:mb-14 testimonials-header"
        >
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <ChatIcon className="h-4 w-4" />
            Patient Stories
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            In their own words.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Honest feedback from patients who experienced our gentle care firsthand.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="relative mt-4 sm:mt-8 w-full overflow-hidden py-4">
        {/* Elegant fading visual masks at edges to make reviews blend luxuriously */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling content wrapper */}
        <div
          className="flex w-max gap-6 px-4 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {scrolledReviews.map((review, index) => (
            <div
              key={index}
              className="w-[85vw] max-w-[320px] sm:max-w-[380px] shrink-0 flex flex-col justify-between rounded-none border border-slate-200 bg-slate-50 p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 hover:border-slate-300 hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between text-slate-950 mb-3.5">
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <QuoteIcon className="h-6 w-6 opacity-20 text-slate-400" />
                </div>
                
                <h3 className="text-base font-bold text-slate-950 tracking-tight mb-2 line-clamp-1">
                  &ldquo;{review.quote}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {review.story}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-200/80 pt-3.5 flex items-center gap-3">
                {/* Initial-based circular avatar */}
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${review.avatarBg}`}>
                  {review.avatarText}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-950">{review.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
