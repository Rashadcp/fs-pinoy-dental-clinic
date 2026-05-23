"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PulseIcon, CalendarIcon, HelpIcon, ChevronDownIcon } from "@/components/Icons";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  badge: string;
  accent: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "preventive",
    title: "Routine Checkups & Gentle Cleanings",
    tagline: "Keeping your smile bright, fresh, and healthy every day.",
    description: "Friendly routine checkups and deep cleanings to keep your teeth sparkling, fresh, and completely healthy. We focus on keeping you smiling and feeling great.",
    benefits: [
      "Warm & Friendly Teeth Checkups",
      "Gentle Teeth Cleaning (Scaling & Polishing)",
      "Comfortable, low-radiation Digital X-Rays",
      "Protective Fluoride to keep teeth strong",
      "Kind, easy-to-follow tips for daily brushing"
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    badge: "Preventive",
    accent: "bg-teal-50 text-teal-700 border-teal-100"
  },
  {
    id: "cosmetic",
    title: "Smile Brightening & Cosmetic Care",
    tagline: "Helping your natural smile shine its absolute brightest.",
    description: "Simple, safe treatments to brighten your natural smile and give you that extra boost of confidence. We design every change to look completely natural and beautiful.",
    benefits: [
      "Gentle, safe teeth whitening options",
      "Custom premium veneers designed uniquely for your face"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    badge: "Cosmetic",
    accent: "bg-rose-50 text-rose-700 border-rose-100"
  },
  {
    id: "restorative",
    title: "Restorative & Tooth Repair Care",
    tagline: "Getting you back to chewing, laughing, and smiling comfortably.",
    description: "Gentle treatments to relieve dental pain, repair chipped or damaged teeth, and get you chewing comfortably again. We make sure you feel cozy and pain-free throughout.",
    benefits: [
      "Tooth-colored, durable fillings",
      "Gentle Root Canal therapy to relieve pain",
      "Comfy, natural-looking flexible dentures",
      "Beautiful, strong custom crowns & bridges"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    badge: "Restorative",
    accent: "bg-slate-900 text-white border-slate-700"
  },
  {
    id: "surgery",
    title: "Safe & Gentle Oral Surgery",
    tagline: "Stress-free, comfortable care when you need it most.",
    description: "Careful, stress-free extractions to relieve dental pain and support you through a quick, smooth recovery. We guide you gently through every step of the healing process.",
    benefits: [
      "Pain-free, gentle tooth extractions",
      "Quick relief and healing for dental swelling",
      "State-of-the-art safety with a gentle human touch",
      "Caring, simple instructions for a smooth recovery at home"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    badge: "Surgery",
    accent: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    id: "orthodontic",
    title: "Orthodontics & Smile Alignment",
    tagline: "Guiding your teeth into a healthy, beautiful alignment.",
    description: "Comfortable braces and modern alignment options to help guide your teeth into a healthy, beautiful smile. We work at your pace to find the perfect fit for your lifestyle.",
    benefits: [
      "Traditional metal braces for precise results",
      "Discreet ceramic braces that blend right in",
      "Comfy custom retainers to protect your progress",
      "Fun, stylish fashion braces and adjustments",
      "Modern clear aligners for a nearly invisible option"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    badge: "Orthodontic",
    accent: "bg-orange-50 text-orange-700 border-orange-100"
  },
  {
    id: "pediatric",
    title: "Warm & Playful Kids' Dentistry",
    tagline: "Creating happy, brave, and healthy little dental patients.",
    description: "A warm, playful environment to help your little ones feel safe and build happy, healthy habits for life. We turn dental visits into fun adventures!",
    benefits: [
      "Fun, friendly checkups and gentle cleanings",
      "Sweet-tasting protective fluoride treatments",
      "Tooth-protecting sealants to keep cavities away",
      "Super-gentle cavity treatments with lots of patience",
      "Early, easy-going orthodontic evaluations"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    badge: "Pediatric",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    id: "aesthetic",
    title: "Aesthetic Touches & Tooth Gems",
    tagline: "Expressing your unique personality through your smile.",
    description: "Fun, safe custom tooth gems and artistic touches to let your unique personality shine through. We use safe, temporary techniques to keep your teeth perfectly healthy.",
    benefits: [
      "Beautiful, sparkling custom tooth crystals",
      "Safe, pain-free application of tooth gems",
      "Premium custom gold & silver teeth styling",
      "Customized artistic tooth grills",
      "100% safe, non-invasive applications that protect your enamel"
    ],
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1200&auto=format&fit=crop",
    badge: "Aesthetic",
    accent: "bg-amber-50 text-amber-700 border-amber-100"
  }
];

const faqs = [
  {
    question: "Can I use my dental insurance at your clinic?",
    answer: "Yes, you absolutely can! We gladly accept major direct billing networks including NextCare, AXA, Daman, and SAADA. We'll even do all the heavy lifting and insurance paperwork for you so you can focus entirely on your smile. Depending on your plan, treatments like routine cleanings, fillings, and extractions are often fully covered!"
  },
  {
    question: "Do you offer easy installment or split payment options?",
    answer: "Absolutely. We believe everyone deserves a healthy, beautiful smile without financial worry. We've partnered with Tamara and Tabby so you can split your total bill into 4 interest-free, monthly installments with instant approval in less than a minute."
  },
  {
    question: "How long will my first visit or consultation take?",
    answer: "Your first visit will usually take between 30 to 45 minutes. This gives us plenty of time for a thorough checkup, a refreshing cleaning, and a cozy chat about your dental health—without ever making you feel rushed. We value your time and keep wait times super short!"
  },
  {
    question: "What should I do if I need to change or reschedule my appointment?",
    answer: "We completely understand that life happens! If you need to change your appointment date or time, just let us know at least 24 hours in advance. You can reschedule easily in seconds by clicking the WhatsApp link in your confirmation message or chatting with our friendly team."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 transition hover:bg-slate-50"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 border-t border-slate-100 text-sm leading-relaxed text-slate-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

const getBenefitIcon = (item: string, serviceId: string) => {
  const normalized = item.toLowerCase();
  
  if (normalized.includes("checkup") || normalized.includes("screening")) {
    return (
      <svg className="h-4.5 w-4.5 text-teal-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8a3 3 0 0 1 3 3" />
      </svg>
    );
  }
  if (normalized.includes("cleaning") || normalized.includes("polishing") || normalized.includes("whitening") || normalized.includes("brightening")) {
    return (
      <svg className="h-4.5 w-4.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );
  }
  if (normalized.includes("x-ray") || normalized.includes("digital") || normalized.includes("radiation")) {
    return (
      <svg className="h-4.5 w-4.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    );
  }
  if (normalized.includes("veneer") || normalized.includes("aesthetic") || normalized.includes("jewel") || normalized.includes("gem") || normalized.includes("crystal") || normalized.includes("gold") || normalized.includes("silver") || normalized.includes("grill")) {
    return (
      <svg className="h-4.5 w-4.5 text-rose-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l3 13" />
        <path d="M13 3 16 9l-3 13" />
        <path d="M2 9h20" />
      </svg>
    );
  }
  if (normalized.includes("filling") || normalized.includes("fluoride") || normalized.includes("sealant")) {
    return (
      <svg className="h-4.5 w-4.5 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (normalized.includes("root canal") || normalized.includes("treatment") || normalized.includes("pain") || normalized.includes("abscess") || normalized.includes("swelling") || normalized.includes("extraction") || normalized.includes("healing") || normalized.includes("post-operative")) {
    return (
      <svg className="h-4.5 w-4.5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1.45.45 1.45 1v4c0 .55-.45 1-1.45 1z" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    );
  }
  if (normalized.includes("crown") || normalized.includes("bridge") || normalized.includes("denture") || normalized.includes("brace") || normalized.includes("retainer") || normalized.includes("aligner")) {
    return (
      <svg className="h-4.5 w-4.5 text-slate-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 5 7-6 7 6 3-5v15H2V4z" />
      </svg>
    );
  }
  
  // Default general health icon
  return (
    <svg className="h-4.5 w-4.5 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Preventive", "Cosmetic", "Restorative", "Surgery", "Orthodontic", "Pediatric", "Aesthetic"];

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.badge === activeCategory);

  return (
    <div className="flex-1 bg-white text-slate-900 overflow-hidden">
      {/* Services Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-12 sm:pt-40 sm:pb-20 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(#cfe6fe_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4 services-hero-content">
          <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <PulseIcon className="h-4 w-4" />
            Complete Dental Solutions
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-6xl max-w-4xl mx-auto leading-tight">
            Warm Filipino hospitality meets modern, gentle dental care.
          </h1>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 mx-auto">
            Whether it&apos;s your child&apos;s first checkup, a refreshing cleaning, or a complete smile transformation, we welcome you like family. Experience stress-free, pain-free dental care filled with real warmth.
          </p>
        </div>
      </section>

      {/* Categories Filter Tabs */}
      <section className="categories-bar py-8 bg-white border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 scrollbar-none flex-nowrap md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] rounded-none border transition-all flex-shrink-0 sm:px-5 sm:text-xs sm:tracking-wider ${
                  activeCategory === cat
                    ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Services Cards */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="service-card bg-white border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Header Image */}
                  <div className="h-48 overflow-hidden bg-slate-900 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex max-w-[calc(100vw-4rem)] rounded-none border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] shadow-sm sm:px-3 sm:text-[10px] sm:tracking-[0.2em] ${service.accent}`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">{service.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">{service.tagline}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                    
                    {/* Benefits Grid */}
                    <div className="grid gap-2.5 pt-3.5 border-t border-slate-100">
                      {service.benefits.map((item) => (
                        <div key={item} className="flex items-center gap-3 bg-slate-50 border border-slate-200/50 p-2.5 transition-all duration-200 hover:bg-slate-100 hover:border-slate-300">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-slate-900">
                            {getBenefitIcon(item, service.id)}
                          </div>
                          <span className="text-xs font-semibold text-slate-800 leading-tight line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex items-center justify-between gap-4 mt-4">
                  <Link
                    href={`/?booking=open&service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Standard Booking &rarr;
                  </Link>
                  <button
                    onClick={() => {
                      const number = "971542575730";
                      const text = `Hi! I'm interested in inquiring about your "${service.title}" service at FS Pinoy Dental Clinic. Could you tell me more about pricing and slots?`;
                      window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="group inline-flex items-center justify-center gap-2 border border-slate-200 bg-brand-50/50 hover:bg-brand-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-600 hover:border-brand-200 transition duration-200"
                  >
                    Inquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectation Timeline Section */}
      <section className="py-14 sm:py-20 border-t border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="expectation-header text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <CalendarIcon className="h-4 w-4" />
              Your Cozy Journey with Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mt-3">
              What to expect at FS Pinoy Dental
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mt-2">
              From the moment you step through our doors, we treat you like family. Here is what your friendly visit will look like.
            </p>
          </div>

          <div className="expectation-steps-grid grid gap-8 md:grid-cols-3 relative">
            {/* Step 1 */}
            <div className="expectation-step bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm relative">
              <div className="h-10 w-10 bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">01</div>
              <h3 className="text-lg font-bold text-slate-950">A Warm Welcome & Chat</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Enjoy a cup of tea or water as we chat about your smile goals. We take quick, easy X-rays and friendly checkups with zero pressure.
              </p>
            </div>

            {/* Step 2 */}
            <div className="expectation-step bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm relative">
              <div className="h-10 w-10 bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">02</div>
              <h3 className="text-lg font-bold text-slate-950">Gentle, Stress-Free Care</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                No surprises, just gentle care. We explain everything in simple terms, let you choose your favorite music, and keep you completely comfortable.
              </p>
            </div>

            {/* Step 3 */}
            <div className="expectation-step bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm relative">
              <div className="h-10 w-10 bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">03</div>
              <h3 className="text-lg font-bold text-slate-950">A Caring Follow-Up</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                We check in on you the next day to make sure you&apos;re feeling great. We send easy tips and are always just a WhatsApp message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="faq-header text-center space-y-2">
            <span className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              <HelpIcon className="h-4 w-4" />
              Patient Resources
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="faq-items-list grid gap-3 pt-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
