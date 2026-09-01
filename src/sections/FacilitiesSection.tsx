"use client";

import Image from "next/image";
import { useLanguage } from "@/components/common/LanguageProvider";
import { translations } from "@/constants/translations";

type Translation = (typeof translations)[keyof typeof translations];

type FacilityTitleKey =
  | "emergencyCare"
  | "icu"
  | "operationTheatre"
  | "pharmacy"
  | "laboratory"
  | "diagnosticServices"
  | "doctorConsultation";

type FacilityDescriptionKey =
  | "emergencyCareDescription"
  | "icuDescription"
  | "operationTheatreDescription"
  | "pharmacyDescription"
  | "laboratoryDescription"
  | "diagnosticServicesDescription"
  | "doctorConsultationDescription";

type Facility = {
  titleKey: FacilityTitleKey;
  descriptionKey: FacilityDescriptionKey;
  image: string;
};

const facilities: Facility[] = [
  {
    titleKey: "emergencyCare",
    descriptionKey: "emergencyCareDescription",
    image: "/images/facilities/emergency.jpg",
  },
  {
    titleKey: "icu",
    descriptionKey: "icuDescription",
    image: "/images/facilities/icu.jpg",
  },
  {
    titleKey: "operationTheatre",
    descriptionKey: "operationTheatreDescription",
    image: "/images/facilities/operation-theatre.jpg",
  },
  {
    titleKey: "pharmacy",
    descriptionKey: "pharmacyDescription",
    image: "/images/facilities/pharmacy.jpg",
  },
  {
    titleKey: "laboratory",
    descriptionKey: "laboratoryDescription",
    image: "/images/facilities/laboratory.jpg",
  },
  {
    titleKey: "diagnosticServices",
    descriptionKey: "diagnosticServicesDescription",
    image: "/images/facilities/diagnostic-services.jpg",
  },
  {
    titleKey: "doctorConsultation",
    descriptionKey: "doctorConsultationDescription",
    image: "/images/facilities/doctor-consultation.jpg",
  },
];

export default function FacilitiesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="facilities"
      className="w-full bg-white py-16"
      style={{
        overflow: "hidden",
      }}
    >
      {/* =========================================
          HEADING
      ========================================= */}
      <div className="text-center mb-10 px-4">
        <p className="text-sm font-semibold tracking-[3px] text-cyan-600 uppercase">
          {t.facilities.subtitle}
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
          {t.facilities.title}
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          {t.facilities.description}
        </p>
      </div>

      {/* =========================================
          HORIZONTAL MARQUEE VIEWPORT
      ========================================= */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* =========================================
            HORIZONTAL RUNNING TRACK
        ========================================= */}
        <div
          className="facilities-marquee"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "stretch",
            width: "max-content",
            minWidth: "max-content",
            maxWidth: "none",
            gap: "0px",
          }}
        >
          {/* =========================================
              FIRST SET
          ========================================= */}
          <div
            className="facilities-group"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "stretch",
              width: "max-content",
              minWidth: "max-content",
              flexShrink: 0,
              gap: "24px",
              paddingRight: "24px",
            }}
          >
            {facilities.map((facility, index) => (
              <FacilityCard
                key={`first-${index}`}
                facility={facility}
                t={t}
              />
            ))}
          </div>

          {/* =========================================
              DUPLICATE SET
          ========================================= */}
          <div
            className="facilities-group"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "stretch",
              width: "max-content",
              minWidth: "max-content",
              flexShrink: 0,
              gap: "24px",
              paddingRight: "24px",
            }}
          >
            {facilities.map((facility, index) => (
              <FacilityCard
                key={`second-${index}`}
                facility={facility}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          HORIZONTAL ANIMATION
      ========================================= */}
      <style jsx global>{`
        .facilities-marquee {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          animation-name: facilities-scroll !important;
          animation-duration: 25s !important;
          animation-timing-function: linear !important;
          animation-iteration-count: infinite !important;
          animation-fill-mode: both !important;
          will-change: transform;
        }

        .facilities-group {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          flex-shrink: 0 !important;
        }

        @keyframes facilities-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .facilities-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .facilities-marquee {
            animation-duration: 18s !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================
   FACILITY CARD
========================================= */

function FacilityCard({
  facility,
  t,
}: {
  facility: Facility;
  t: Translation;
}) {
  return (
    <div
      className="facility-card group"
      style={{
        width: "350px",
        minWidth: "350px",
        maxWidth: "350px",
        height: "390px",

        /* FORCE HORIZONTAL CARD */
        flex: "0 0 350px",
        flexShrink: 0,

        position: "relative",
        overflow: "hidden",

        borderRadius: "16px",

        background: "white",

        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={facility.image}
          alt={t.facilities[facility.titleKey]}
          fill
          sizes="350px"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold">
            {t.facilities[facility.titleKey]}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/90">
            {t.facilities[facility.descriptionKey]}
          </p>
        </div>
      </div>
    </div>
  );
}