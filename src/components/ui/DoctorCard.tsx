"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Stethoscope,
  X,
  Award,
} from "lucide-react";

interface DoctorCardProps {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  experienceYears: number;
  isActive: boolean;
  bio: string;
  specialistIn: string[];
  image: string;
}

export default function DoctorCard({
  name,
  qualification,
  specialization,
  experience,
  experienceYears,
  isActive,
  bio,
  specialistIn,
  image,
}: DoctorCardProps) {
  const [open, setOpen] = useState(false);

  /*
   * Experience number extract pannrom.
   * Example:
   * "15+ Years" -> 15
   * "2 Years"   -> 2
   */
  const experienceNumber =
    parseInt(experience.match(/\d+/)?.[0] || "0", 10);

  const isHighlyExperienced = experienceNumber >= 10;

  const handleBookAppointment = () => {
    setOpen(false);

    setTimeout(() => {
      const appointment =
        document.getElementById("appointment-form") ||
        document.getElementById("appointment");

      appointment?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          DOCTOR CARD
      ====================================================== */}

      <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

        {/* Premium top accent */}

        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 opacity-80" />

        {/* =================================================
            PHOTO
        ================================================== */}

        <div className="relative overflow-hidden bg-slate-100">

          <Image
            src={image}
            alt={`${name} - ${specialization}`}
            width={600}
            height={650}
            className="h-[350px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />

          {/* Bottom photo gradient */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/25 to-transparent" />

        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="p-6 sm:p-7">

          {/* Status + Experience */}

          <div className="flex flex-wrap items-center justify-between gap-3">

            {/* Availability */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

              </span>

              Available for Consultation

            </div>

            {/* Experience Badge */}

            {isHighlyExperienced && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-3.5 py-2 text-xs font-extrabold text-amber-700 shadow-sm">

                <Award size={14} />

                Highly Experienced

              </div>
            )}

          </div>

          {/* =================================================
              DOCTOR NAME
          ================================================== */}

          <div className="mt-6">

            <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-[1.7rem]">
              {name}
            </h3>

            {/* Qualification */}

            <div className="mt-2 flex items-center gap-2">

              <ShieldCheck
                size={17}
                className="shrink-0 text-blue-700"
              />

              <p className="text-sm font-bold text-blue-700">
                {qualification}
              </p>

            </div>

          </div>

          {/* =================================================
              SPECIALIZATION
          ================================================== */}

          <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-slate-50 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-700/20">

                <Stethoscope size={19} />

              </div>

              <div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Specialization
                </p>

                <p className="mt-0.5 font-extrabold text-slate-900">
                  {specialization}
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              EXPERIENCE
          ================================================== */}

          <div
            className={`mt-4 flex items-center justify-between rounded-2xl border p-4 ${
              isHighlyExperienced
                ? "border-amber-200 bg-gradient-to-r from-amber-50 to-white"
                : "border-slate-200 bg-slate-50"
            }`}
          >

            <div className="flex items-center gap-3">

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isHighlyExperienced
                    ? "bg-amber-100 text-amber-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                <Clock3 size={19} />
              </div>

              <div>

                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Clinical Experience
                </p>

                <p
                  className={`mt-0.5 font-extrabold ${
                    isHighlyExperienced
                      ? "text-amber-700"
                      : "text-slate-800"
                  }`}
                >
                  {experience}
                </p>

              </div>

            </div>

            {isHighlyExperienced && (
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-700">
                Senior
              </span>
            )}

          </div>

          {/* =================================================
              BIO
          ================================================== */}

          <p className="mt-5 line-clamp-2 text-sm leading-7 text-slate-600">
            {bio}
          </p>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div className="mt-7 grid grid-cols-2 gap-3">

            {/* View Profile */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group/profile inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
            >
              View Profile

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/profile:translate-x-1"
              />
            </button>

            {/* Book */}

            <button
              type="button"
              onClick={handleBookAppointment}
              className="group/book inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              <CalendarCheck2 size={17} />

              Book

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/book:translate-x-1"
              />
            </button>

          </div>

        </div>
      </article>

      {/* =====================================================
          PROFILE MODAL
      ====================================================== */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close profile"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md backdrop-blur transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X size={21} />
            </button>

            {/* Modal Header */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 px-7 py-9 text-white sm:px-9">

              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

                <Image
                  src={image}
                  alt={name}
                  width={180}
                  height={180}
                  className="h-32 w-32 rounded-2xl border-4 border-white/20 object-cover object-top shadow-xl"
                />

                <div>

                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-200 ring-1 ring-emerald-300/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Available for Consultation
                  </div>

                  <h2 className="text-2xl font-extrabold sm:text-3xl">
                    {name}
                  </h2>

                  <p className="mt-2 font-bold text-blue-200">
                    {qualification}
                  </p>

                  <p className="mt-1 text-sm font-medium text-blue-100">
                    {specialization}
                  </p>

                </div>

              </div>

            </div>

            {/* Modal Content */}

            <div className="p-7 sm:p-9">

              {/* Experience */}

              <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Award size={23} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      Professional Experience
                    </p>

                    <p className="mt-1 text-xl font-extrabold text-amber-800">
                      {experience}
                    </p>

                  </div>

                </div>

              </div>

              {/* About */}

              <div className="mt-8">

                <h3 className="text-lg font-extrabold text-slate-900">
                  About Doctor
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {bio}
                </p>

              </div>

              {/* Expertise */}

              <div className="mt-8">

                <h3 className="text-lg font-extrabold text-slate-900">
                  Areas of Expertise
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  {specialistIn.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-emerald-600"
                      />

                      {item}
                    </div>
                  ))}

                </div>

              </div>

              {/* Appointment */}

              <button
                type="button"
                onClick={handleBookAppointment}
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                <CalendarCheck2 size={19} />

                Book Appointment

                <ArrowRight size={18} />

              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}