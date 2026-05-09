"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import RoomsSection from "@/components/RoomsSection";
import Features from "@/components/Features";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BookingModal from "@/components/BookingModal";
import { Room } from "@/lib/rooms";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <StatsStrip />
      <About />
      <RoomsSection onBook={(room) => setSelectedRoom(room)} />
      <Features />
      <Experiences />
      <Gallery />
      <Testimonials />
      <CTABand onBook={() => setSelectedRoom(null)} />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </>
  );
}