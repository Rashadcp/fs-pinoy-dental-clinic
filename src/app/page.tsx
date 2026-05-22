"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  const router = useRouter();

  const handleOpenBooking = () => {
    router.push("/?booking=open", { scroll: false });
  };

  const handleOpenBookingWithService = (serviceName: string) => {
    router.push(`/?booking=open&service=${encodeURIComponent(serviceName)}`, { scroll: false });
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Services Stacking Scroll Section */}
      <Services onOpenBookingWithService={handleOpenBookingWithService} />

      {/* About Section */}
      <About />

      {/* Clinical Specialists Team Section */}
      <Team />

      {/* Testimonials Review Section */}
      <Testimonials />

      {/* Reach Out / Contact Section */}
      <Contact />
    </main>
  );
}
