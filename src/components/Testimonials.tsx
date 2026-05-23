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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20 md:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-center mx-auto mb-12 sm:mb-16 testimonials-header"
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

        {/* 2x2 Grid of Unique Reviews */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col justify-between rounded-none border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 hover:border-slate-300 hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between text-slate-950 mb-4">
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <QuoteIcon className="h-7 w-7 opacity-20 text-slate-400" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                  &ldquo;{review.quote}&rdquo;
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {review.story}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200/80 pt-4 flex items-center gap-3">
                {/* Initial-based circular avatar */}
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${review.avatarBg}`}>
                  {review.avatarText}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">{review.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
