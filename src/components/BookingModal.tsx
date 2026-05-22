"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, SmileIcon, CalendarIcon, UserIcon, PhoneIcon, EmailIcon, ClockIcon, CheckIcon } from "./Icons";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function BookingModal({ isOpen, onClose, selectedService = "" }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(selectedService);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setService(selectedService);
        setDate("");
        setTime("");
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen, selectedService]);

  const getWhatsAppLink = () => {
    const clinicPhone = "971542575730";
    const formattedDate = date ? new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) : "";
    const messageText = `Hello FS Pinoy Dental Clinic! I would like to request an appointment.\n\nAppointment Request:\n• Patient Name: ${name}\n• Treatment: ${service}\n• Preferred Date: ${formattedDate}\n• Preferred Time: ${time}\n${notes ? `• Additional Notes: ${notes}\n` : ""}\nPlease confirm my appointment slot. Thank you!`;
    return `https://wa.me/${clinicPhone}?text=${encodeURIComponent(messageText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1200);
  };

  const servicesList = [
    "Preventive & General Dentistry",
    "Cosmetic Dentistry",
    "Restorative Dentistry",
    "Oral Surgery",
    "Orthodontic Services",
    "Pediatric Dentistry",
    "Aesthetic Dentistry",
  ];

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM"];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/50"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", duration: 0.35 }}
          className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto rounded-none border border-slate-200 bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-none p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close modal"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <div className="px-4 py-7 sm:px-8 sm:py-10">
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-none border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:text-xs sm:tracking-[0.3em]">
                    <SmileIcon className="h-4 w-4" />
                    Book a Visit
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">Let&apos;s find a time that works for you.</h3>
                    <p className="text-sm leading-7 text-slate-600">Select the care you need and choose a date. We&apos;ll confirm the appointment directly.</p>
                  </div>
                </div>

                <div className="grid gap-5">
                  <label className="space-y-2 text-sm text-slate-700">
                    <span>What service are you looking for?</span>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-none border border-slate-300 bg-white px-3.5 py-3 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Select a preferred day</span>
                    <div className="relative">
                      <CalendarIcon className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-none border border-slate-300 bg-white py-3 pl-10 pr-3.5 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </label>

                  <div className="space-y-2 text-sm text-slate-700">
                    <span>Select a convenient time slot</span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`rounded-none border py-3 text-xs font-semibold transition ${time === slot ? "border-brand-700 bg-brand-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!service || !date || !time}
                  onClick={() => setStep(2)}
                  className="inline-flex w-full items-center justify-center rounded-none bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 hover:text-slate-900">
                    &larr; Back to services
                  </button>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">Tell us a bit about yourself.</h3>
                    <p className="text-sm leading-7 text-slate-600">Just a few details so we can confirm your appointment.</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Full Name</span>
                    <div className="relative">
                      <UserIcon className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Juan Dela Cruz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-none border border-slate-300 bg-white py-3 pl-10 pr-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Phone Number</span>
                    <div className="relative">
                      <PhoneIcon className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="054 257 5730"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-none border border-slate-300 bg-white py-3 pl-10 pr-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Email Address</span>
                    <div className="relative">
                      <EmailIcon className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="juan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-none border border-slate-300 bg-white py-3 pl-10 pr-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </label>

                  <label className="space-y-2 text-sm text-slate-700">
                    <span>Additional notes (optional)</span>
                    <textarea
                      rows={3}
                      placeholder="Tell us about any symptoms, anxieties, or preferences..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full rounded-none border border-slate-300 bg-white px-3.5 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                    />
                  </label>
                </div>

                <div className="rounded-none border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="font-semibold text-slate-900">Selected appointment</p>
                      <p className="mt-1 text-slate-600">{service || "No service selected"} on {date ? new Date(date).toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "—"} at {time || "—"}</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-none bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting request…" : "Confirm Visit Request"}
                </button>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-none bg-brand-600 text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">Request sent</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">We received your appointment request and will reach out shortly to confirm your booking.</p>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-none bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Confirm with WhatsApp
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
