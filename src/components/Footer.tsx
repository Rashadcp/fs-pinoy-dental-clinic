"use client";
 
import React from "react";
import Link from "next/link";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-2.5">
            <Link href="/" className="inline-block">
              <img src="/fs-logo-horizontal.png" alt="FS Pinoy Dental Clinic" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              High-quality dental care that combines precision with a calm patient experience.
            </p>
            <p className="text-sm text-slate-400">
              <a href="mailto:hello@fspinoydental.com" className="hover:text-white transition-colors">hello@fspinoydental.com</a>
            </p>
          </div>
 
          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-1.5">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white uppercase tracking-[0.2em]">Popular Services</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Preventive & General Care</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontic Services</li>
              <li>Restorative Dentistry</li>
            </ul>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white uppercase tracking-[0.2em]">Licensing</h4>
            <p className="leading-relaxed text-slate-400">
              Dr. Amit Sharma, D.M.D. <br /> DHA License No. DHA-123456
            </p>
            <p className="text-slate-500">
              Accepted plans include NextCare, AXA, Daman, SAADA.
            </p>
            <div className="pt-2">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Split in 4 installments</span>
              <div className="flex items-center gap-3">
                {/* Tamara Official Logo */}
                <div className="bg-white rounded-md p-1 flex items-center justify-center transition hover:opacity-90 h-8">
                  <img src="/tamara-logo.png" alt="Tamara" className="h-6 w-auto object-contain" />
                </div>
                {/* Tabby Official Logo */}
                <div className="bg-white rounded-md p-1 flex items-center justify-center transition hover:opacity-90 h-8">
                  <img src="/tabby-logo.png" alt="Tabby" className="h-6 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-5 text-sm text-slate-500 md:flex-row">
          <p>&copy; {currentYear} FS Pinoy Dental Clinic. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Developed By Winshine Infotech
          </p>
        </div>
      </div>
    </footer>
  );
}


