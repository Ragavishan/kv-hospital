"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctors } from "@/constants/doctors";

export default function DoctorsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const viewMoreDoctors = () => {
    if (!sliderRef.current || doctors.length === 0) return;

    const slider = sliderRef.current;

    const card = slider.querySelector<HTMLElement>(
      "[data-doctor-card]"
    );

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;

    // Move exactly 3 doctors
    const moveAmount = (cardWidth + gap) * 3;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    /*
     * If currently at the last group,
     * go back to the first group.
     */

    if (slider.scrollLeft >= maxScroll - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
     * Otherwise move to the next 3 doctors.
     */

    const nextPosition = Math.min(
      slider.scrollLeft + moveAmount,
      maxScroll
    );

    slider.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/30 blur-[100px]" />

      <Section>
        <Container>

          {/* =====================================================
              SECTION HEADING
          ===================================================== */}

          <SectionTitle
            subtitle="Our Medical Team"
            title="Meet Our Experienced Doctors"
            description="Our dedicated team of healthcare professionals is committed to providing trusted medical care with experience, compassion, and attention to every patient."
          />

          {/* Short Intro */}

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Meet the experienced medical professionals dedicated to
              providing compassionate and trusted healthcare.
            </p>
          </div>

          {/* =====================================================
              DOCTOR CAROUSEL
          ===================================================== */}

          <div className="relative mt-10">

            {/* Horizontal Doctor List */}

            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  data-doctor-card
                  className="w-[88%] shrink-0 snap-start sm:w-[55%] lg:w-[calc((100%-48px)/3)]"
                >
                  <DoctorCard
                    name={doctor.name}
                    qualification={doctor.qualification}
                    specialization={doctor.specialization}
                    experience={doctor.experience}
                    experienceYears={doctor.experienceYears}
                    isActive={doctor.isActive}
                    bio={doctor.bio}
                    specialistIn={doctor.specialistIn}
                    image={doctor.image}
                    showSpecialization={doctor.showSpecialization}
                  />
                </div>
              ))}
            </div>

            {/* =====================================================
                VIEW MORE DOCTORS
            ===================================================== */}

            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={viewMoreDoctors}
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/25"
              >
                View More Doctors

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* =====================================================
              TRUST STRIP
          ===================================================== */}

          <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-6 py-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:px-9">

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                  Trusted Medical Care
                </p>

                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  Experienced professionals. Patient-first care.
                </h3>

                <p className="mt-1.5 text-sm text-slate-500">
                  Dedicated to providing dependable and compassionate
                  healthcare for every patient.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                Book Appointment

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </div>

        </Container>
      </Section>
    </section>
  );
}