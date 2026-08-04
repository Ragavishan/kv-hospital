"use client";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import DepartmentsSection from "@/sections/DepartmentsSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import FooterSection from "@/sections/FooterSection";
import DoctorsSection from "@/sections/DoctorsSection";
import AppointmentCTA from "@/sections/AppointmentCTA";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";
import AppointmentFormSection from "@/sections/AppointmentFormSection";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import FloatingCall from "@/components/common/FloatingCall";
import BackToTop from "@/components/common/BackToTop";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import GallerySection from "@/sections/GallerySection";
import FAQSection from "@/sections/FAQSection";

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
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <DoctorsSection />
      <GallerySection />
      <TestimonialsSection />
      <WhyChooseUs />
      <AppointmentCTA />
      <ContactSection />
      <AppointmentFormSection />
      <FAQSection />
      <FooterSection />


      <BackToTop />
      <FloatingCall />
      <FloatingWhatsApp />
    </>
  );
}