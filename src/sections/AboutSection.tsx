import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";

export default function AboutSection() {
  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <Section>
        <Container>

          {/* Section Heading */}

          <SectionTitle
            subtitle="About KV Hospital"
            title="Compassionate Care. Trusted Healthcare."
            description="We are committed to providing quality healthcare through experienced doctors, modern facilities, and patient-focused medical care."
          />

          {/* Main Content */}

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

            {/* =====================================================
                IMAGE SIDE
            ===================================================== */}

            <div className="relative">

              {/* Background Shape */}

              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-blue-100/70" />

              {/* Decorative Circle */}

              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-blue-200/60 bg-blue-100/30" />

              {/* Main Image */}

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">

                <div className="relative overflow-hidden rounded-[1.5rem]">

                  <Image
                    src="/images/about.jpg"
                    alt="KV Hospital healthcare team and facilities"
                    width={800}
                    height={600}
                    className="h-[380px] w-full object-cover object-center transition duration-700 hover:scale-105 sm:h-[500px]"
                  />

                  {/* Image Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                </div>
              </div>

              {/* =================================================
                  EXPERIENCE BADGE
              ================================================= */}

              <div className="absolute -right-3 top-8 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-[0_15px_40px_rgba(15,23,42,0.15)] backdrop-blur-md sm:-right-6">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-2xl font-extrabold tracking-tight text-blue-700">
                      25+
                    </p>

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Years of Care
                    </p>
                  </div>

                </div>
              </div>

              {/* =================================================
                  PATIENT FIRST BADGE
              ================================================= */}

              <div className="absolute -bottom-5 left-5 rounded-2xl border border-blue-500/20 bg-blue-700 px-5 py-4 text-white shadow-[0_15px_35px_rgba(29,78,216,0.28)] sm:left-8">

                <div className="flex items-center gap-3">

                  <HeartHandshake size={26} />

                  <div>
                    <p className="text-sm font-bold">
                      Patient First
                    </p>

                    <p className="mt-0.5 text-[11px] text-blue-100">
                      Care you can trust
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* =====================================================
                CONTENT SIDE
            ===================================================== */}

            <div>

              {/* Premium Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">

                <HeartHandshake size={15} />

                Patient First
              </div>

              {/* Heading */}

              <h3 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Caring for Every Life,
                <span className="block text-blue-700">
                  Every Step of the Way.
                </span>
              </h3>

              {/* Description */}

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600">
                At KV Hospital, we believe healthcare is more than treatment.
                It is about listening, understanding, and caring for every patient
                with dignity and compassion.
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                With experienced healthcare professionals, modern facilities,
                and patient-focused services, we strive to make quality medical
                care accessible, reliable, and comfortable for individuals and families.
              </p>

              {/* =================================================
                  FEATURE CARDS
              ================================================= */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {/* Doctor Card */}

                <div className="group min-h-[104px] rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Stethoscope size={21} />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Experienced Doctors
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Skilled medical professionals
                      </p>
                    </div>

                  </div>
                </div>

                {/* Trusted Care Card */}

                <div className="group min-h-[104px] rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <ShieldCheck size={21} />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Trusted Care
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Patient-focused healthcare
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================= */}

              <div className="mt-7 space-y-3.5">

                {[
                  "Personalized healthcare for every patient",
                  "Modern medical facilities and services",
                  "Dedicated and compassionate healthcare team",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium leading-6 text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-emerald-600"
                    />

                    {item}
                  </div>
                ))}

              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <button
                type="button"
                onClick={handleLearnMore}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>

          </div>

        </Container>
      </Section>
    </section>
  );
}