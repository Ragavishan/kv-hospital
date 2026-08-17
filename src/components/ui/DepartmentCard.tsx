"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  X,
} from "lucide-react";

interface DepartmentCardProps {
  title: string;
  description: string;
  fullDescription: string;
  services: string[];
  icon: React.ElementType;
}

export default function DepartmentCard({
  title,
  description,
  fullDescription,
  services,
  icon: Icon,
}: DepartmentCardProps) {
  const [open, setOpen] = useState(false);

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
      {/* =========================================================
          PREMIUM DEPARTMENT CARD
      ========================================================= */}

      <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)]">

        {/* Background Glow */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/50 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-200/60" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-100/30 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

        <div className="relative p-7 sm:p-8">

          {/* Top Row */}

          <div className="flex items-start justify-between">

            {/* Icon */}

            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700 transition-all duration-500 group-hover:border-blue-200 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-700/25">

                <Icon
                  size={32}
                  strokeWidth={1.7}
                />

              </div>

            </div>

            {/* Department Number */}

            <span className="text-sm font-bold tracking-[0.18em] text-slate-300 transition duration-300 group-hover:text-blue-200">
              DEPT
            </span>

          </div>

          {/* Department Number Large */}

          <div className="mt-6">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Medical Department
            </span>

            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[27px]">
              {title}
            </h3>

          </div>

          {/* Description */}

          <p className="mt-4 min-h-[78px] text-[15px] leading-7 text-slate-600">
            {description}
          </p>

          {/* Divider */}

          <div className="my-6 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

          {/* Bottom */}

          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Expert Care
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-700">
                Patient-focused treatment
              </p>
            </div>

            {/* Learn More */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20"
            >
              <span>Explore</span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>

          </div>

        </div>

        {/* Bottom Accent */}

        <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

      </article>

      {/* =========================================================
          PREMIUM DEPARTMENT MODAL
      ========================================================= */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              aria-label="Close department information"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 px-7 py-10 text-white sm:px-10">

              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10" />

              <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-2xl" />

              <div className="relative flex items-center gap-5 pr-10">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
                  <Icon
                    size={31}
                    strokeWidth={1.6}
                  />
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    KV Hospital
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {title}
                  </h2>

                  <p className="mt-2 text-sm text-blue-100">
                    Comprehensive medical care
                  </p>

                </div>

              </div>

            </div>

            {/* Modal Content */}

            <div className="p-7 sm:p-10">

              {/* About */}

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  About Department
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  {fullDescription}
                </p>

              </div>

              {/* Services */}

              <div className="mt-9">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      Our Services
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                      What We Provide
                    </h3>

                  </div>

                  <span className="hidden text-sm font-semibold text-slate-400 sm:block">
                    {services.length} Services
                  </span>

                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {services.map((service, index) => (
                    <div
                      key={`${service}-${index}`}
                      className="group/service flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                        <CheckCircle2
                          size={17}
                          className="text-blue-600"
                        />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {service}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Actions */}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                >

                  <CalendarCheck2 size={19} />

                  <span>Book Appointment</span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 px-7 py-4 font-bold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
                >
                  Close
                </button>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}