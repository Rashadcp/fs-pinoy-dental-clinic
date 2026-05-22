"use client";

import React, { useState } from "react";

// Official WhatsApp icon SVG path
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.738 5.486 2.027 7.789L0 32l8.418-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.785-1.856l-.487-.29-5 1.193 1.215-4.866-.318-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.87c-.398-.199-2.355-1.162-2.72-1.295-.364-.133-.63-.199-.895.199-.264.397-1.026 1.295-1.258 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.619-3.202-1.976-1.183-1.056-1.982-2.361-2.213-2.759-.232-.398-.025-.613.174-.811.178-.178.398-.465.597-.697.199-.232.265-.398.397-.664.133-.265.066-.497-.033-.696-.1-.199-.895-2.16-1.226-2.957-.322-.778-.65-.672-.895-.685l-.762-.013c-.265 0-.696.1-1.06.497-.365.398-1.392 1.36-1.392 3.317s1.425 3.847 1.624 4.112c.199.265 2.803 4.28 6.79 5.999.949.41 1.69.655 2.268.838.953.303 1.82.26 2.506.158.764-.114 2.355-.963 2.687-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
  </svg>
);

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+971542575730";
  const whatsappMessage = "Hi! I'm interested in your dental services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
        aria-label="Open WhatsApp chat"
      >
        <WhatsAppIcon className="h-8 w-8 sm:h-7 sm:w-7" />
      </button>

      {/* WhatsApp Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full sm:w-96 rounded-lg sm:rounded-none border border-slate-200 bg-white shadow-2xl animate-in slide-in-from-bottom-5 sm:slide-in-from-bottom-0 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold text-white">Chat on WhatsApp</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-80 transition"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Message us on WhatsApp
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Have questions about our dental services, pricing, or booking an appointment? Chat with us on WhatsApp and we&apos;ll respond quickly.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
                  Phone Number
                </p>
                <p className="mt-2 text-lg font-bold text-green-600">
                  {whatsappNumber.replace("+971", "+971 ")}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Available 24/7 for messages
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-slate-200 px-6 py-4 flex gap-3 sm:flex-row flex-col">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-none border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="flex-1 rounded-none bg-green-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
