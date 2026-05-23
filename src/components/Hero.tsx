"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./Icons";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-slate-50 text-slate-900 lg:min-h-screen lg:flex lg:items-center lg:pt-20">
      {/* Background Decorative Ambient Glows - Placed safely to prevent any sharp clipping */}
      <div className="pointer-events-none absolute top-12 left-12 h-[350px] w-[350px] rounded-full bg-brand-200/20 blur-[90px] sm:h-[450px] sm:w-[450px]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 pt-32 pb-10 sm:px-6 sm:pt-24 sm:pb-16 lg:px-[88px] lg:pt-[80px] lg:pb-[64px] w-full">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] mb-[28px] hero-title"
            >
              No stress, no surprises. Just <span className="text-brand-500">gentle, expert care</span> to keep your smile healthy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-base leading-[1.65] text-slate-600 sm:text-lg lg:mx-0 lg:max-w-xl mb-[32px] hero-description"
            >
              Book your visit in minutes and see how easy it can be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start hero-btn"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:bg-brand-600 cursor-pointer sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.12em]"
              >
                Book Appointment
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full overflow-hidden mt-[40px] hero-stats"
            >
              <div className="py-[24px] px-[28px] flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Clear planning</p>
                <p className="mt-1 text-sm text-slate-500">Detailed treatment plans without surprises.</p>
              </div>
              <div className="py-[24px] px-[28px] flex-1 text-left">
                <p className="text-sm font-semibold text-slate-900">Reliable care</p>
                <p className="mt-1 text-sm text-slate-500">Consistent results from trusted professionals.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-none border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
              <div className="h-[16rem] sm:h-[22rem] lg:h-[23rem] w-full bg-slate-950">
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
        </div>
      </div>
    </section>
  );
}
