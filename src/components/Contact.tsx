"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatsAppPopup from "./WhatsAppPopup";
import { ShieldCheckIcon, MarkerIcon, PhoneIcon, EmailIcon, ClockIcon } from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side details fade + slide
      gsap.from(".contact-left", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Right side map box fade + slide
      gsap.from(".contact-right", {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="bg-slate-50 py-12 sm:py-14 md:py-18 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 contact-left">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-sm sm:tracking-[0.3em]">
              <ShieldCheckIcon className="h-4 w-4" />
              Find Our Clinic
            </div>
            <div className="space-y-2.5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                We&apos;re here to help you feel at home.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                Have questions about treatments, pricing, or bookings? Reach out now and we&apos;ll respond promptly.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-3.5">
              <div className="rounded-none border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-start gap-3 text-slate-950 mb-2 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none bg-slate-900 text-white">
                    <MarkerIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Location</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">Room No.105, Ajmal Perfume Building, Near Satwa Big Masjid, Al Satwa, Dubai, UAE</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Conveniently located near the Satwa Big Masjid.</p>
              </div>

              <div className="rounded-none border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-start gap-3 text-slate-950 mb-2 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none bg-slate-900 text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Phone</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">Mobile & WhatsApp: <a href="tel:+971542575730" className="text-slate-900 hover:text-slate-700">054 257 5730</a></p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900">International: <a href="tel:+971542575730" className="text-slate-900 hover:text-slate-700">+971 54 257 5730</a></p>
                  </div>
                </div>
              </div>

              <div className="rounded-none border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-start gap-3 text-slate-950 mb-2 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none bg-slate-900 text-white">
                    <EmailIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Email</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900"><a href="mailto:hello@fspinoydental.com" className="text-slate-900 hover:text-slate-700">hello@fspinoydental.com</a></p>
                  </div>
                </div>
              </div>

              <div className="rounded-none border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-start gap-3 text-slate-950 mb-2 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none bg-slate-900 text-white">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hours</p>
                    <p className="mt-1.5 text-sm font-semibold text-slate-900">Monday to Saturday: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Appointment scheduling is recommended to ensure a timely visit.</p>
              </div>
            </div>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-4 sm:p-5 shadow-sm contact-right">
            <div className="mb-4 rounded-none border border-slate-200 bg-slate-950 px-4 py-4 text-center text-white">
              <p className="text-xs uppercase tracking-[0.3em]">Clinic Map</p>
              <p className="mt-1.5 text-lg font-semibold">Al Satwa, Dubai</p>
            </div>
            <div className="h-64 sm:h-80 overflow-hidden rounded-none bg-slate-900">
              <iframe
                title="FS Pinoy Dental Clinic location"
                src="https://maps.google.com/maps?q=Ajmal%20Perfume%20Building,%20Al%20Satwa,%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ajmal+Perfume+Building,+Al+Satwa,+Dubai"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-none bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
      <WhatsAppPopup />
    </section>
  );
}
