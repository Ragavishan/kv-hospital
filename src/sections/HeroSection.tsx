"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function HeroSection() {
  const handleBookAppointment = () => {
    document.getElementById("appointment-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section
      id="home"
      className="
        relative
        isolate
        h-[720px]
        min-h-[680px]
        overflow-hidden
        bg-slate-950
        sm:h-[740px]
        lg:h-[760px]
      "
    >
      {/* =====================================================
          HOSPITAL BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden bg-slate-950">
        <Image
          src="/images/hospital-hero.jpg"
          alt="KV Hospital building"
          fill
          priority
          sizes="100vw"
          className="h-full w-full scale-[0.96] object-cover object-center origin-center"
        />
      </div>

      {/* =====================================================
          OVERLAYS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/20" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-slate-950/85
          via-slate-950/45
          to-slate-950/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-slate-950/10
          via-transparent
          to-slate-950/35
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          items-center
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-[620px]">
            {/* TRUST BADGE */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-blue-100
                shadow-lg
                backdrop-blur-md
              "
            >
              <ShieldCheck
                size={15}
                className="text-blue-300"
              />

              Trusted Multi-Speciality Care
            </div>

            {/* MAIN HEADING */}

            <h1
              className="
                max-w-[620px]
                text-5xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                drop-shadow-2xl
                sm:text-6xl
                lg:text-[62px]
                xl:text-[68px]
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
                  drop-shadow-2xl
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
                max-w-[545px]
                text-sm
                font-medium
                leading-7
                text-slate-100
                drop-shadow-lg
                sm:text-base
                sm:leading-8
              "
            >
              At KV Hospital, we combine experienced medical
              professionals, modern healthcare facilities, and
              compassionate treatment to deliver trusted care
              for you and your family.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* BOOK APPOINTMENT */}

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
                  hover:shadow-2xl
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

              {/* CALL HOSPITAL */}

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
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/50
                  hover:bg-white/20
                "
              >
                <Phone size={18} />

                Call Hospital
              </button>
            </div>

            {/* TRUST POINTS */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-x-6
                gap-y-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-white
                  drop-shadow-lg
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-blue-300"
                />

                Experienced Doctors
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-white
                  drop-shadow-lg
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-blue-300"
                />

                Modern Facilities
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-white
                  drop-shadow-lg
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-blue-300"
                />

                Patient-First Care
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT EMERGENCY CARD
          ================================================= */}

          <div className="flex justify-center lg:justify-end">
            <div
              className="
                w-full
                max-w-[350px]
                rounded-[2rem]
                border
                border-white/20
                bg-slate-950/45
                p-5
                shadow-2xl
                backdrop-blur-xl
                sm:p-6
              "
            >
              {/* EMERGENCY */}

              <div
                className="
                  rounded-2xl
                  border
                  border-red-400/30
                  bg-red-950/45
                  p-5
                  shadow-xl
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span
                          className="
                            absolute
                            inline-flex
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
                            inline-flex
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
                          tracking-[0.15em]
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

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-5
                        text-slate-200
                      "
                    >
                      Immediate medical assistance when you
                      need it most.
                    </p>
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
                    <Clock size={20} />
                  </div>
                </div>

                {/* EMERGENCY BUTTON */}

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
                    bg-red-600
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-red-500
                    hover:shadow-xl
                  "
                >
                  <Phone size={16} />

                  Emergency Assistance
                </button>
              </div>

              {/* STATISTICS */}

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/10
                    p-4
                    backdrop-blur-md
                  "
                >
                  <p
                    className="
                      text-2xl
                      font-extrabold
                      text-white
                    "
                  >
                    24×7
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-medium
                      text-slate-300
                    "
                  >
                    Emergency Support
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/10
                    p-4
                    backdrop-blur-md
                  "
                >
                  <p
                    className="
                      text-2xl
                      font-extrabold
                      text-white
                    "
                  >
                    15+
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-medium
                      text-slate-300
                    "
                  >
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />
    </section>
  );
}