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

export default function HeroSection() {
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
      "
    >
      {/* =====================================================
          HERO HOSPITAL BUILDING — FULL BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-30 overflow-hidden bg-slate-900">
        <Image
          src="/images/hospital-hero.jpg"
          alt="KV Hospital building"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 -z-20 bg-slate-950/25" />

      {/* LEFT DARK GRADIENT */}

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

      {/* RIGHT DARK GRADIENT */}

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

      {/* BOTTOM DARK GRADIENT */}

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
          EVERYTHING IS OVER THE BUILDING IMAGE
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
          px-5
          pb-7
          pt-24
          sm:px-8
          lg:px-12
          lg:pb-8
          lg:pt-28
          xl:px-16
        "
      >
        {/* ===================================================
            MAIN HERO CONTENT
        =================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              max-w-[600px]
            "
          >
            {/* TRUST BADGE */}

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
                backdrop-blur-md
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
                "
              >
                Trusted Multi-Speciality Care
              </span>
            </div>

            {/* MAIN HEADING */}

            <h1
              className="
                text-5xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                drop-shadow-[0_5px_25px_rgba(0,0,0,0.65)]
                sm:text-6xl
                lg:text-[64px]
                xl:text-[72px]
              "
            >
              Compassionate
              <br />
              Care.

              <span
                className="
                  mt-2
                  block
                  text-blue-300
                "
              >
                Advanced
                <br />
                Medicine.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-[540px]
                text-sm
                font-medium
                leading-7
                text-white/90
                drop-shadow-lg
                sm:text-base
                sm:leading-8
              "
            >
              At KV Hospital, we combine experienced
              medical professionals, modern healthcare
              facilities, and compassionate treatment
              to deliver trusted care for you and your
              family.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <button
                type="button"
                onClick={handleBookAppointment}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  shadow-blue-950/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500
                "
              >
                <CalendarCheck2 size={18} />

                Book Appointment

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

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
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/20
                "
              >
                <Phone size={18} />

                Call Hospital
              </button>
            </div>
          </div>

          {/* =================================================
              EMERGENCY CARD — RIGHT SIDE
          ================================================= */}

          <div
            className="
              absolute
              right-5
              top-1/2
              z-20
              hidden
              w-[300px]
              -translate-y-1/2
              lg:right-8
              lg:block
              xl:right-14
              xl:w-[340px]
            "
          >
            <div
              className="
                rounded-[24px]
                border
                border-white/20
                bg-slate-950/55
                p-4
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
            >
              {/* EMERGENCY BOX */}

              <div
                className="
                  rounded-[20px]
                  border
                  border-red-400/25
                  bg-red-950/60
                  p-5
                  animate-pulse
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          relative
                          flex
                          h-2.5
                          w-2.5
                        "
                      >
                        <span
                          className="
                            absolute
                            h-full
                            w-full
                            animate-ping
                            rounded-full
                            bg-red-400
                            opacity-60
                          "
                        />

                        <span
                          className="
                            relative
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-red-500
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
                        Emergency Care
                      </span>
                    </div>

                    <h2
                      className="
                        mt-3
                        text-2xl
                        font-extrabold
                        text-white
                      "
                    >
                      Available 24 × 7
                    </h2>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-500/20
                      text-red-300
                    "
                  >
                    <Clock3 size={20} />
                  </div>
                </div>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-5
                    text-slate-200
                  "
                >
                  Immediate medical assistance when
                  you need it most.
                </p>

                <button
                  type="button"
                  onClick={handleCall}
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-red-600
                    via-red-500
                    to-rose-600
                    px-5
                    py-3.5
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-red-500
                  "
                >
                  <Phone size={16} />

                  Emergency Support
                </button>
              </div>

              {/* SMALL STATS */}

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    p-3
                    backdrop-blur-md
                  "
                >
                  <p className="text-xl font-extrabold text-white">
                    24×7
                  </p>

                  <p className="mt-1 text-[10px] text-slate-300">
                    Emergency Support
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-white/15
                    bg-white/10
                    p-3
                    backdrop-blur-md
                  "
                >
                  <p className="text-xl font-extrabold text-white">
                    15+
                  </p>

                  <p className="mt-1 text-[10px] text-slate-300">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM FEATURES
            NO BORDER / NO HORIZONTAL LINE
        =================================================== */}

        <div
          className="
            relative
            z-30
            mt-8
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-5
              lg:gap-8
            "
          >
            <Feature text="Experienced Doctors" />

            <Feature text="Modern Facilities" />

            <Feature text="Patient First Care" />
          </div>
        </div>

        {/* ===================================================
            MOBILE EMERGENCY
            STILL OVER THE HERO IMAGE
        =================================================== */}

        <div
          className="
            relative
            z-30
            mt-8
            lg:hidden
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-white/20
              bg-slate-950/60
              p-4
              shadow-2xl
              backdrop-blur-xl
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
                  <span className="h-2 w-2 rounded-full bg-red-500" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-red-200
                    "
                  >
                    Emergency Care
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
                  Available 24 × 7
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
                  bg-red-600
                  px-4
                  py-3
                  text-xs
                  font-bold
                  text-white
                "
              >
                <Phone size={15} />

                Emergency
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
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-blue-500/20
        "
      >
        <CheckCircle2
          size={17}
          className="text-blue-300"
        />
      </span>

      {text}
    </div>
  );
}

