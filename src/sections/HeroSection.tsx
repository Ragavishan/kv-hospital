"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { useLanguage } from "@/components/common/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  const handleBookAppointment = () => {
    const appointmentForm =
      document.getElementById("appointment-form") ||
      document.getElementById("appointment");

    appointmentForm?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCall = () => {
    window.location.href = "tel:+917502710333";
  };

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-slate-950
        sm:max-lg:min-h-[100svh]
      "
    >
      {/* =====================================================
          HERO HOSPITAL BUILDING — FULL BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-30 overflow-hidden bg-slate-900">
        <Image
          src="/images/hospital-hero.jpg"
          alt="Iswarya Hospital building"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="
            object-cover
            object-[50%_38%]
            sm:object-[58%_center]
            sm:max-lg:object-[55%_center]
          "
        />
      </div>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 -z-20 bg-slate-950/25" />

      {/* =====================================================
          LEFT DARK GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          -z-10
          w-[70%]
          bg-gradient-to-r
          from-slate-950/85
          via-slate-950/50
          to-transparent
        "
      />

      {/* =====================================================
          RIGHT DARK GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-y-0
          right-0
          -z-10
          w-[40%]
          bg-gradient-to-l
          from-slate-950/50
          via-transparent
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DARK GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-60
          bg-gradient-to-t
          from-slate-950/80
          via-slate-950/25
          to-transparent
        "
      />

      {/* =====================================================
          ALL HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          flex-col
          justify-between
          px-4
          pb-5
          pt-16

          sm:px-8
          sm:pb-7
          sm:pt-24

          sm:max-lg:px-6
          sm:max-lg:pb-5
          sm:max-lg:pt-20

          lg:px-12
          lg:pb-8
          lg:pt-28

          xl:px-16
        "
      >
        {/* ===================================================
            MAIN HERO CONTENT
        =================================================== */}

        <div className="flex flex-1 items-center">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              max-w-[600px]
              min-w-0
              sm:max-w-[600px]
              sm:max-lg:max-w-[500px]
            "
          >
            {/* =================================================
                TRUST BADGE
            ================================================= */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-slate-950/40
                px-4
                py-2
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                backdrop-blur-md

                sm:max-lg:mb-4
                sm:max-lg:px-3.5
                sm:max-lg:py-1.5
              "
            >
              <ShieldCheck
                size={16}
                className="text-blue-300"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-100

                  sm:max-lg:text-[9px]
                "
              >
                {t.hero.badge}
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                max-w-full
                min-w-0
                overflow-wrap-anywhere
                break-words
                text-[24px]
                font-extrabold
                leading-[1.18]
                tracking-[-0.015em]
                text-white
                drop-shadow-[0_5px_25px_rgba(0,0,0,0.65)]

                sm:text-6xl
                sm:leading-[1.02]
                sm:tracking-[-0.035em]

                sm:max-lg:text-[44px]
                sm:max-lg:leading-[1.05]
                sm:max-lg:tracking-[-0.025em]

                lg:text-[58px]
                xl:text-[66px]
              "
            >
              <span className="block">
                {t.hero.title1}
              </span>

              <span className="block">
                {t.hero.title2}
              </span>

              <span
                className="
                  mt-1
                  block
                  text-blue-300

                  sm:mt-2
                  sm:max-lg:mt-1
                "
              >
                <span className="block">
                  {t.hero.title3}
                </span>

                <span className="block">
                  {t.hero.title4}
                </span>
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-4
                max-w-[540px]
                text-[13px]
                font-medium
                leading-5
                text-white/90
                drop-shadow-lg

                sm:mt-6
                sm:text-base
                sm:leading-8

                sm:max-lg:mt-4
                sm:max-lg:max-w-[490px]
                sm:max-lg:text-[13px]
                sm:max-lg:leading-6
              "
            >
              {t.hero.description}
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                gap-2.5

                sm:mt-7
                sm:flex-row

                sm:max-lg:mt-5
                sm:max-lg:gap-2
              "
            >
              {/* =================================================
                  BOOK APPOINTMENT
              ================================================= */}

              <button
                type="button"
                onClick={handleBookAppointment}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_28px_rgba(37,99,235,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300/30
                  hover:bg-blue-500
                  hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]
                  active:translate-y-0

                  sm:max-lg:px-4
                  sm:max-lg:py-3
                  sm:max-lg:text-[12px]
                "
              >
                <CalendarCheck2 size={18} />

                {t.hero.bookAppointment}

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* =================================================
                  CALL HOSPITAL
              ================================================= */}

              <button
                type="button"
                onClick={handleCall}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/30
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/20
                  active:translate-y-0

                  sm:max-lg:px-4
                  sm:max-lg:py-3
                  sm:max-lg:text-[12px]
                "
              >
                <Phone size={18} />

                {t.hero.callHospital}
              </button>
            </div>
          </div>

          {/* =================================================
              EMERGENCY CARD — RIGHT SIDE
              DESKTOP ONLY — UNCHANGED
          ================================================= */}

          <div
            className="
              absolute
              right-5
              top-1/2
              z-20
              hidden
              w-[260px]
              -translate-y-1/2
              lg:right-8
              lg:block
              xl:right-14
              xl:w-[280px]
            "
          >
            <div
              className="
                rounded-[22px]
                border
                border-white/20
                bg-slate-950/55
                p-3.5
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
            >
              {/* =================================================
                  EMERGENCY BOX
              ================================================= */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-red-400/25
                  bg-gradient-to-br
                  from-red-950/80
                  via-red-900/60
                  to-slate-950/70
                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  {/* LEFT SIDE */}

                  <div>
                    {/* EMERGENCY LABEL */}

                    <div className="flex items-center gap-2">
                      <span
                        className="
                          relative
                          flex
                          h-3
                          w-3
                        "
                      >
                        <span
                          className="
                            absolute
                            inset-0
                            animate-ping
                            rounded-full
                            bg-red-400
                            opacity-75
                          "
                        />

                        <span
                          className="
                            relative
                            h-3
                            w-3
                            rounded-full
                            bg-red-500
                            shadow-[0_0_12px_rgba(239,68,68,0.9)]
                          "
                        />
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-red-200
                        "
                      >
                        {t.hero.emergencyCare}
                      </span>
                    </div>

                    <h2
                      className="
                        mt-2.5
                        text-[20px]
                        font-extrabold
                        leading-tight
                        text-white
                      "
                    >
                      {t.hero.available}
                    </h2>
                  </div>

                  {/* CLOCK */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-red-400/20
                      bg-red-500/15
                      text-red-300
                    "
                  >
                    <Clock3
                      size={15}
                      strokeWidth={2.3}
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2.5
                    text-[11px]
                    leading-5
                    text-slate-200
                  "
                >
                  {t.hero.emergencyDescription}
                </p>

                {/* EMERGENCY BUTTON */}

                <button
                  type="button"
                  onClick={handleCall}
                  className="
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-red-700
                    via-red-600
                    to-rose-600
                    px-4
                    py-3
                    text-[11px]
                    font-bold
                    text-white
                    shadow-[0_8px_25px_rgba(220,38,38,0.3)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:from-red-600
                    hover:via-red-500
                    hover:to-rose-500
                    active:translate-y-0
                  "
                >
                  <Phone size={15} />

                  {t.hero.emergencySupport}
                </button>
              </div>

              {/* =================================================
                  SMALL STATS
              ================================================= */}

              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    p-2.5
                    backdrop-blur-md
                  "
                >
                  <p className="text-lg font-extrabold text-white">
                    24×7
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-300">
                    {t.hero.emergencySupportSmall}
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    p-2.5
                    backdrop-blur-md
                  "
                >
                  <p className="text-lg font-extrabold text-white">
                    40+
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-300">
                    {t.hero.yearsExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM FEATURES
        =================================================== */}

        <div
          className="
            relative
            z-30
            mt-8

            sm:max-lg:mt-5
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-start
              gap-8

              sm:max-lg:gap-4

              lg:gap-14
            "
          >
            <Feature text={t.hero.experiencedDoctors} />

            <Feature text={t.hero.modernFacilities} />

            <Feature text={t.hero.patientFirstCare} />
          </div>
        </div>

        {/* ===================================================
            MOBILE + TABLET EMERGENCY
        =================================================== */}

        <div
          className="
            relative
            z-30
            mt-8
            lg:hidden

            sm:max-lg:mt-5
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-white/20
              bg-slate-950/60
              p-3.5
              shadow-2xl
              backdrop-blur-xl

              sm:max-lg:p-3
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="
                        absolute
                        inset-0
                        animate-ping
                        rounded-full
                        bg-red-400
                        opacity-70
                      "
                    />

                    <span
                      className="
                        relative
                        h-3
                        w-3
                        rounded-full
                        bg-red-500
                        shadow-[0_0_10px_rgba(239,68,68,0.8)]
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-red-200
                    "
                  >
                    {t.hero.emergencyCare}
                  </span>
                </div>

                <h2
                  className="
                    mt-1
                    text-lg
                    font-extrabold
                    text-white
                  "
                >
                  {t.hero.available}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCall}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-red-700
                  via-red-600
                  to-rose-600
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-red-950/40
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-red-600
                  hover:via-red-500
                  hover:to-rose-500
                  active:translate-y-0
                "
              >
                <Phone size={15} />

                {t.hero.emergency}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({ text }: { text: string }) {
  return (
    <div
      className="
        flex
        items-center
        gap-2.5
        text-sm
        font-semibold
        text-white
        drop-shadow-lg

        sm:max-lg:gap-2
        sm:max-lg:text-[11px]
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-blue-300/10
          bg-blue-500/20

          sm:max-lg:h-6
          sm:max-lg:w-6
        "
      >
        <CheckCircle2
          size={17}
          className="
            text-blue-300

            sm:max-lg:h-4
            sm:max-lg:w-4
          "
        />
      </span>

      {text}
    </div>
  );
}
