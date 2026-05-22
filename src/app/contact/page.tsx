"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Content Stagger Reveal
      gsap.from(".contact-hero-content > *", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 2. Form Slide Reveal
      gsap.from(".contact-form-container", {
        scrollTrigger: {
          trigger: ".form-map-grid",
          start: "top 80%"
        },
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: "power2.out"
      });

      // 3. Map Slide Reveal
      gsap.from(".contact-map-hub", {
        scrollTrigger: {
          trigger: ".form-map-grid",
          start: "top 80%"
        },
        opacity: 0,
        x: 40,
        duration: 0.7,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-slate-50/50 text-slate-900 flex flex-col">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-brand-50/60 blur-3xl sm:h-72" />
      
      {/* Grid Mesh Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      {/* Contact Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 border-b border-slate-200/80 bg-white/40 backdrop-blur-[2px]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5 contact-hero-content">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Get in touch
          </span>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-6xl max-w-4xl mx-auto leading-[1.15]">
            We&apos;re always here to help you feel at home.
          </h1>
          
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 mx-auto">
            Have questions about bookings, insurance, or customized dental treatments? Fill out the form below or reach out directly. Our friendly team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-14 sm:py-20 flex-1 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Quick Connect Cards Row */}
          <div className="hidden">
            
            {/* Card 1: Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ajmal+Perfume+Building,+Al+Satwa,+Dubai"
              target="_blank"
              rel="noreferrer"
              className="connect-card group flex flex-col justify-between rounded-none border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md hover:-translate-y-1 hover:border-brand-300 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-slate-950 text-white group-hover:bg-brand-600 transition-colors duration-300 shadow-sm">
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/marker.png" className="h-5 w-5" alt="Location" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.14em] text-slate-500 font-bold sm:tracking-[0.25em]">Our Location</h3>
                  <p className="mt-2 text-sm font-bold text-slate-900">Room 105, Ajmal Perfume Building</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium">Al Satwa, Near Satwa Big Masjid, Dubai, UAE</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-brand-600 group-hover:text-brand-700 gap-1 select-none">
                Open in Maps &rarr;
              </span>
            </a>

            {/* Card 2: Phone & WhatsApp */}
            <a
              href="tel:+971542575730"
              className="connect-card group flex flex-col justify-between rounded-none border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md hover:-translate-y-1 hover:border-brand-300 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-slate-950 text-white group-hover:bg-brand-600 transition-colors duration-300 shadow-sm">
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/phone.png" className="h-5 w-5" alt="Phone" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.14em] text-slate-500 font-bold sm:tracking-[0.25em]">Call & WhatsApp</h3>
                  <p className="mt-2 text-sm font-bold text-slate-900">054 257 5730</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium">Click to dial or text us directly on WhatsApp anytime</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-brand-600 group-hover:text-brand-700 gap-1 select-none">
                Call Us Now &rarr;
              </span>
            </a>

            {/* Card 3: Email Us */}
            <a
              href="mailto:hello@fspinoydental.com"
              className="connect-card group flex flex-col justify-between rounded-none border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md hover:-translate-y-1 hover:border-brand-300 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-slate-950 text-white group-hover:bg-brand-600 transition-colors duration-300 shadow-sm">
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" className="h-5 w-5" alt="Email" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.14em] text-slate-500 font-bold sm:tracking-[0.25em]">Email Support</h3>
                  <p className="mt-2 text-sm font-bold text-slate-900">hello@fspinoydental.com</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium">Send us your queries and get responses within 24 hours</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-brand-600 group-hover:text-brand-700 gap-1 select-none">
                Send Email &rarr;
              </span>
            </a>

            {/* Card 4: Operating Hours */}
            <div className="connect-card group flex flex-col justify-between rounded-none border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-slate-950 text-white shadow-sm">
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/clock.png" className="h-5 w-5" alt="Hours" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.14em] text-slate-500 font-bold sm:tracking-[0.25em]">Clinic Hours</h3>
                  <p className="mt-2 text-sm font-bold text-slate-900">Mon – Sat: 9:00 AM – 5:00 PM</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium">Closed on Sundays. Appointments recommended.</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1.5 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-600">Open for Booking</span>
              </div>
            </div>

          </div>

          {/* Form & Map Grid */}
          <div className="form-map-grid grid gap-8 lg:grid-cols-12 lg:items-stretch">
            
            {/* Left Column: Redesigned Premium Contact Form */}
            <div className="contact-form-container lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="space-y-2 mb-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Send Us a Message</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">Fill out the fields below, and our care team will get back to you within 24 hours.</p>
                </div>

                {!isSuccess ? (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 transition-all duration-300 ease-in-out opacity-100"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Full Name Input */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</span>
                        <div className="relative group flex items-center focus-within:text-brand-500 text-slate-400">
                          <img src="https://img.icons8.com/ios-glyphs/30/94a3b8/user.png" className="pointer-events-none absolute left-3.5 h-[18px] w-[18px] transition-colors duration-200 opacity-70 group-focus-within:opacity-100" alt="User" />
                          <input
                            type="text"
                            required
                            placeholder="Juan Dela Cruz"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-none border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 placeholder-muted"
                          />
                        </div>
                      </div>

                      {/* Phone Number Input */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</span>
                        <div className="relative group flex items-center focus-within:text-brand-500 text-slate-400">
                          <img src="https://img.icons8.com/ios-glyphs/30/94a3b8/phone.png" className="pointer-events-none absolute left-3.5 h-[18px] w-[18px] transition-colors duration-200 opacity-70 group-focus-within:opacity-100" alt="Phone" />
                          <input
                            type="text"
                            required
                            placeholder="054 257 5730"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-none border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 placeholder-muted"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Address Input */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</span>
                      <div className="relative group flex items-center focus-within:text-brand-500 text-slate-400">
                        <img src="https://img.icons8.com/ios-glyphs/30/94a3b8/new-post.png" className="pointer-events-none absolute left-3.5 h-[18px] w-[18px] transition-colors duration-200 opacity-70 group-focus-within:opacity-100" alt="Email" />
                        <input
                          type="email"
                          required
                          placeholder="juan@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-none border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 placeholder-muted"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Subject</span>
                      <input
                        type="text"
                        required
                        placeholder="Inquiry about pricing/treatments"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-none border border-slate-200 bg-white px-4 py-3.5 text-slate-900 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 placeholder-muted"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Message</span>
                      <textarea
                        required
                        rows={6}
                        placeholder="How can we help make you smile today?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-none border border-slate-200 bg-white px-4 py-3.5 text-slate-900 text-sm shadow-sm transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 placeholder-muted"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-none bg-slate-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md hover:shadow-lg sm:text-sm sm:tracking-widest"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                ) : (
                  <div
                    className="py-12 text-center space-y-6 flex-1 flex flex-col justify-center transition-all duration-300 ease-in-out opacity-100"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg animate-bounce">
                      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/checkmark.png" className="h-7 w-7" alt="Success" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-950">Thank You!</h3>
                      <p className="text-sm leading-relaxed text-slate-600 max-w-md mx-auto font-medium">
                        Your inquiry has been successfully sent to our clinic. Our staff will review your message and get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex mx-auto rounded-none border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-50 shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Redesigned Interactive Maps & Live Details Hub */}
            <div className="contact-map-hub lg:col-span-5 bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden h-full lg:min-h-[500px]">
              {/* Card Header details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">Satwa Clinic Hub</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Al Satwa, Dubai, UAE</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Open Now
                  </span>
                </div>

                <div className="space-y-2 text-xs leading-relaxed text-slate-600 font-medium">
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-slate-800">Address:</span>
                    <span>Room No.105, Ajmal Perfume Building, Near Satwa Big Masjid, Al Satwa, Dubai</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">Transit:</span>
                    <span>Easy bus access & street parking available near masjid</span>
                  </p>
                </div>
              </div>

              {/* Enhanced Map Embed Frame */}
              <div className="my-6 relative overflow-hidden bg-slate-100 border border-slate-200/85 h-64 sm:h-80 lg:h-96 flex-1 shadow-inner">
                <iframe
                  title="FS Pinoy Dental Clinic location map"
                  src="https://maps.google.com/maps?q=Ajmal%20Perfume%20Building,%20Al%20Satwa,%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0 grayscale-[15%] contrast-[110%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct Maps Action CTA */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ajmal+Perfume+Building,+Al+Satwa,+Dubai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-slate-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-slate-800 shadow-md hover:shadow-lg sm:text-sm sm:tracking-[0.12em]"
              >
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/marker.png" className="h-4 w-4" alt="Marker" />
                Open Driving Directions
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
