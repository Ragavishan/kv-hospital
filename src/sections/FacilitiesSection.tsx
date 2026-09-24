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
    image:  "/images/facilities/icu-optimized.jpg",
  },
  {
    titleKey: "operationTheatre",
    descriptionKey: "operationTheatreDescription",
    image: "/images/facilities/operation-theatre-optimized.jpg",
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
      className="w-full overflow-hidden bg-white py-14 sm:py-16"
    >
      {/* =========================================
          HEADING
      ========================================= */}

      <div className="mb-8 px-4 text-center sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[2.5px] text-cyan-600 sm:text-sm sm:tracking-[3px]">
          {t.facilities.subtitle}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          {t.facilities.title}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {t.facilities.description}
        </p>
      </div>

      {/* =========================================
          HORIZONTAL MARQUEE VIEWPORT
      ========================================= */}

      <div className="relative w-full overflow-hidden">
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
            animation-duration: 19s !important;
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
      className="
        facility-card
        group
        relative
        h-[340px]
        w-[290px]
        min-w-[290px]
        flex-[0_0_290px]
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]

        sm:h-[390px]
        sm:w-[350px]
        sm:min-w-[350px]
        sm:flex-[0_0_350px]
      "
    >
      <div className="relative h-full w-full">
        <Image
          src={facility.image}
          alt={t.facilities[facility.titleKey]}
          fill
          sizes="(max-width: 640px) 290px, 350px"
          className="
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* CONTENT */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-4
            text-white
            sm:p-6
          "
        >
          <h3
            className="
              text-xl
              font-bold
              leading-tight
              sm:text-2xl
            "
          >
            {t.facilities[facility.titleKey]}
          </h3>

          <p
            className="
              mt-2
              text-xs
              leading-5
              text-white/90
              sm:text-sm
              sm:leading-6
            "
          >
            {t.facilities[facility.descriptionKey]}
          </p>
        </div>
      </div>
    </div>
  );
}