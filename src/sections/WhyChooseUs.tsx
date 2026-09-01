"use client";

import {
  Award,
  Building2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";

const features = [
  {
    icon: Stethoscope,
    number: "01",
    title: "Experienced Doctors",
    description:
      "Highly qualified medical professionals dedicated to accurate diagnosis and personalized treatment.",
    gradient: "from-blue-500 to-cyan-400",
    soft: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Building2,
    number: "02",
    title: "Modern Facilities",
    description:
      "Advanced healthcare infrastructure and modern medical facilities designed for quality patient care.",
    gradient: "from-violet-600 to-purple-400",
    soft: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Clock3,
    number: "03",
    title: "24×7 Emergency Care",
    description:
      "Round-the-clock emergency assistance with a dedicated team ready when you need us most.",
    gradient: "from-rose-500 to-orange-400",
    soft: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Patient First",
    description:
      "Compassionate healthcare focused on comfort, trust, safety, and the well-being of every patient.",
    gradient: "from-emerald-500 to-teal-400",
    soft: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/20 blur-3xl" />

      <Section>
        <Container>

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="relative mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              <Sparkles size={14} />
              Why Choose Us
            </div>

            <SectionTitle
              subtitle=""
              title="Why Patients Trust Iswarya Hospital"
              description="Committed to providing exceptional healthcare with compassion, advanced facilities, and a patient-first approach."
            />

          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <div className="relative mx-auto mt-12 max-w-4xl">

            <div className="grid overflow-hidden rounded-3xl border border-white bg-white shadow-xl shadow-slate-200/50 sm:grid-cols-3">

              <div className="flex items-center justify-center gap-3 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Trusted Care
                  </p>

                  <p className="text-xs text-slate-500">
                    Patient-focused service
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Award size={21} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Quality Healthcare
                  </p>

                  <p className="text-xs text-slate-500">
                    Excellence in treatment
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <HeartHandshake size={21} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Compassionate Care
                  </p>

                  <p className="text-xs text-slate-500">
                    Here for every patient
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              FEATURE CARDS
          ================================================= */}

          <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-300/50"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* Gradient glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />

                  {/* Number */}
                  <div className="absolute right-5 top-5 text-4xl font-black text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
                    {feature.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${feature.soft} ${feature.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={30} strokeWidth={1.8} />

                    {/* Icon glow */}
                    <div
                      className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">

                    <h3 className="text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>

                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}
                  />

                </div>
              );
            })}

          </div>

          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-violet-950 p-7 text-center text-white shadow-2xl sm:p-9">

            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <HeartHandshake
                  size={25}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="mt-5 text-xl font-extrabold sm:text-2xl">
                Healthcare You Can Trust
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-blue-100">
                From consultation to recovery, our team is committed to
                making every step of your healthcare journey comfortable,
                safe, and reassuring.
              </p>

            </div>
          </div>

        </Container>
      </Section>
    </section>
  );
}