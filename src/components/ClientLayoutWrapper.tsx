"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

function BookingModalHandler({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isBookingOpen = searchParams.get("booking") === "open";
  const selectedService = searchParams.get("service") || "";

  const handleOpenBooking = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("booking", "open");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCloseBooking = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("booking");
    params.delete("service");
    const newQuery = params.toString();
    router.push(`${pathname}${newQuery ? `?${newQuery}` : ""}`, { scroll: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenBooking={handleOpenBooking} />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex flex-col bg-white" />}>
      <BookingModalHandler>{children}</BookingModalHandler>
    </Suspense>
  );
}
