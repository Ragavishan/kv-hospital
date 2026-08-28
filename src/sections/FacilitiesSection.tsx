"use client";

import Image from "next/image";
import { useRef } from "react";

const facilities = [
  {
    title: "Emergency Care",
    image: "/images/facilities/emergency.jpg",
    description: "24/7 emergency medical care with immediate attention.",
  },
  {
    title: "ICU",
    image: "/images/facilities/icu.jpg",
    description: "Advanced intensive care with continuous monitoring.",
  },
  {
    title: "Operation Theatre",
    image: "/images/facilities/operation-theatre.jpg",
    description: "Modern operation theatre with advanced equipment.",
  },
  {
    title: "Pharmacy",
    image: "/images/facilities/pharmacy.jpg",
    description: "Quality medicines and convenient pharmacy services.",
  },
  {
    title: "Laboratory",
    image: "/images/facilities/laboratory.jpg",
    description: "Reliable diagnostic testing with accurate results.",
  },
  {
    title: "Diagnostic Services",
    image: "/images/facilities/diagnostic-services.jpg",
    description: "Modern diagnostic facilities for better healthcare.",
  },
  {
    title: "Doctor Consultation",
    image: "/images/facilities/doctor-consultation.jpg",
    description: "Expert medical consultation with experienced doctors.",
  },
];

export default function FacilitiesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section
        id="facilities"
        className="w-full bg-white py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <p className="text-sm font-semibold tracking-[3px] text-cyan-600 uppercase">
          Our Facilities
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
          World-Class Healthcare Facilities
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          We provide modern medical facilities and advanced healthcare
          services for our patients.
        </p>
      </div>

      {/* Moving Cards */}
      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="facilities-marquee flex w-max gap-6 hover:[animation-play-state:paused]"
        >
          {/* First set */}
          {facilities.map((facility, index) => (
            <div
              key={`first-${index}`}
              className="group relative w-[280px] sm:w-[320px] md:w-[350px] h-[390px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="350px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for continuous loop */}
          {facilities.map((facility, index) => (
            <div
              key={`second-${index}`}
              className="group relative w-[280px] sm:w-[320px] md:w-[350px] h-[390px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="350px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .facilities-marquee {
          animation: facilities-scroll 35s linear infinite;
        }

        @keyframes facilities-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @media (max-width: 640px) {
          .facilities-marquee {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .facilities-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}