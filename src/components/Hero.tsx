"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./Icons";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative w-full bg-gradient-to-b from-white via-brand-50/30 to-slate-50 text-slate-900 lg:min-h-screen lg:flex lg:flex-col lg:pt-16">
      {/* Background Decorative Ambient Glows - Placed safely to prevent any sharp clipping */}
      <div className="pointer-events-none absolute top-12 left-12 hidden h-[450px] w-[450px] rounded-full bg-brand-200/20 blur-[90px] sm:block" />
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[450px] w-[450px] rounded-full bg-brand-100/10 blur-[100px] sm:block" />

      <div className="relative mx-auto flex max-w-[1720px] items-center px-4 pt-32 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-11 lg:pt-[80px] lg:pb-[60px] w-full my-auto">
        <div className="grid grid-cols-1 w-full gap-y-10 gap-x-6 sm:gap-y-12 sm:gap-x-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          {/* Top text block (Left Column Top) */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-1 lg:row-start-1 flex flex-col justify-center">
            <motion.h1
              className="text-3xl font-black leading-[1.1] text-slate-950 sm:text-5xl lg:text-[3.25rem] mb-[20px] hero-title"
            >
              {/* Line 1 */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block mb-[2px] sm:mb-[4px]"
              >
                <span className="relative inline-block mr-2 pb-1">
                  <span className="relative z-10 text-slate-950">No stress,</span>
                  {/* Luminous Ambient Glow Backing (Moving Gradient) */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: 1,
                      opacity: 0.75,
                      backgroundPosition: ["0% 50%", "200% 50%"]
                    }}
                    transition={{
                      scaleX: { delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { delay: 0.5, duration: 0.6 },
                      backgroundPosition: { repeat: Infinity, duration: 3, ease: "linear" }
                    }}
                    className="absolute bottom-1.5 left-0 h-[38%] w-full bg-[linear-gradient(90deg,#67aefb,#328bf7,#67aefb)] bg-[length:200%_100%] origin-left -z-10 pointer-events-none sm:blur-[10px]"
                  />
                  {/* Marker Background Highlight (Moving Gradient) */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                      backgroundPosition: ["0% 50%", "200% 50%"]
                    }}
                    transition={{
                      scaleX: { delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { delay: 0.5, duration: 0.6 },
                      backgroundPosition: { repeat: Infinity, duration: 3, ease: "linear" }
                    }}
                    className="absolute bottom-1.5 left-0 h-[38%] w-full bg-[linear-gradient(90deg,#cfe6fe,#a3cdfc,#cfe6fe)] bg-[length:200%_100%] origin-left -rotate-1 rounded-sm z-0"
                  />
                </span>
                <span className="relative inline-block pb-1">
                  <span className="relative z-10 text-slate-950">no surprises.</span>
                  {/* Luminous Ambient Glow Backing (Moving Gradient) */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: 1,
                      opacity: 0.75,
                      backgroundPosition: ["0% 50%", "200% 50%"]
                    }}
                    transition={{
                      scaleX: { delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { delay: 0.8, duration: 0.6 },
                      backgroundPosition: { repeat: Infinity, duration: 3, ease: "linear" }
                    }}
                    className="absolute bottom-1.5 left-0 h-[38%] w-full bg-[linear-gradient(90deg,#67aefb,#328bf7,#67aefb)] bg-[length:200%_100%] origin-left -z-10 pointer-events-none sm:blur-[10px]"
                  />
                  {/* Marker Background Highlight (Moving Gradient) */}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                      backgroundPosition: ["0% 50%", "200% 50%"]
                    }}
                    transition={{
                      scaleX: { delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { delay: 0.8, duration: 0.6 },
                      backgroundPosition: { repeat: Infinity, duration: 3, ease: "linear" }
                    }}
                    className="absolute bottom-1.5 left-0 h-[38%] w-full bg-[linear-gradient(90deg,#cfe6fe,#a3cdfc,#cfe6fe)] bg-[length:200%_100%] origin-left -rotate-1 rounded-sm z-0"
                  />
                </span>
              </motion.span>

              {/* Line 2 */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="block mb-[2px] sm:mb-[4px]"
              >
                Just <span className="text-brand-500">gentle, expert care</span>
              </motion.span>

              {/* Line 3 */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                className="block"
              >
                to keep your smile healthy.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="max-w-2xl text-base leading-[1.65] text-slate-600 sm:text-lg lg:max-w-xl mb-[20px] sm:mb-[28px] hero-description"
            >
              Book your visit in minutes and see how easy it can be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start hero-btn w-full"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-brand-500 px-6 py-4 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:bg-brand-600 cursor-pointer sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.12em] shadow-md shadow-brand-500/10"
              >
                Book Appointment
                <ArrowRightIcon className="h-4 w-4" />
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-5 sm:mt-4 flex items-center justify-center sm:justify-start gap-3 w-full"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Trusted by <span className="font-bold text-slate-800">500+</span> happy patients in Dubai
              </p>
            </motion.div>
          </div>

          {/* Right Column Image card (Item 2 - ordered 2nd on mobile, but floats right on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 lg:h-full lg:pt-[12px] order-2 lg:order-2 lg:row-start-1 lg:col-start-8 lg:row-span-2 w-full"
          >
            <div className="overflow-hidden rounded-none border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] flex flex-col h-full w-full">
              <div className="h-[20rem] sm:h-[28rem] lg:h-0 lg:flex-1 w-full bg-slate-950">
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
                  <p className="text-sm font-semibold text-slate-900">9 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards (Item 3 - ordered 3rd on mobile, but floats under text on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="order-3 lg:order-3 lg:col-span-7 lg:row-start-2 w-full lg:self-end"
          >
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100 rounded-sm border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full overflow-hidden mt-2 lg:mt-0 hero-stats">
              <div className="py-[24px] px-[28px] flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Clear planning</p>
                <p className="mt-1 text-sm text-slate-500">Detailed treatment plans without surprises.</p>
              </div>
              <div className="py-[24px] px-[28px] flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Reliable care</p>
                <p className="mt-1 text-sm text-slate-500">Consistent results from trusted professionals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
