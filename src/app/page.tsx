"use client";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import DepartmentsSection from "@/sections/DepartmentsSection";
import DoctorsSection from "@/sections/DoctorsSection";
import GallerySection from "@/sections/GallerySection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import AppointmentCTA from "@/sections/AppointmentCTA";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import FooterSection from "@/sections/FooterSection";

import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import FloatingCall from "@/components/common/FloatingCall";
import BackToTop from "@/components/common/BackToTop";

import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <Navbar />

      <main className="w-full min-w-0">
        <HeroSection />

        <AboutSection />

        <DepartmentsSection />

        <DoctorsSection />

        <GallerySection />

        <TestimonialsSection />

        <WhyChooseUs />

        <AppointmentCTA />

        <ContactSection />

        <FAQSection />
      </main>

      <FooterSection />

      <BackToTop />
      <FloatingCall />
      <FloatingWhatsApp />
    </div>
  );
}