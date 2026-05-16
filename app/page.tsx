"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import BookDirect from "@/components/BookDirect";
import About from "@/components/About";
import RoomsSection from "@/components/RoomsSection";
import Features from "@/components/Features";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import BlogCarousel from "@/components/BlogCarousel";
import Partners from "@/components/Partners";
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
      <BookDirect />
      <About />
      <RoomsSection onBook={(room) => setSelectedRoom(room)} />
      <Features />
      <Experiences />
      <Gallery />
      <Testimonials />
      <CTABand onBook={() => setSelectedRoom(null)} />
      <BlogCarousel />
      <Partners />
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