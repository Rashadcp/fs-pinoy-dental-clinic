"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

function BookingModalHandler({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const booking = searchParams.get("booking");
    const service = searchParams.get("service");

    if (booking === "open") {
      setSelectedService(service || "");
      setIsBookingOpen(true);
    } else {
      setIsBookingOpen(false);
    }
  }, [searchParams]);

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
    setIsBookingOpen(false);
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
