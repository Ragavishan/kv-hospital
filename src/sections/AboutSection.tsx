"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
import { useLanguage } from "@/components/common/LanguageProvider";

export default function AboutSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { t } = useLanguage();

  const aboutImages = [
    "/images/about/about-1.jpg",
    "/images/about/about-2.jpg",
    "/images/about/about-3.jpg",
    "/images/about/about-4.jpg",
    "/images/about/about-5.jpg",
    "/images/about/about-6.jpg",
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, aboutImages.length]);

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
            subtitle={t.about.subtitle}
            title={t.about.title}
            description={t.about.description}
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

              {/* Main Image Frame */}

              <div
                className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative h-[380px] overflow-hidden rounded-[1.5rem] sm:h-[500px]">
                  {aboutImages.map((image, index) => (
                    <div
                      key={image}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        activeImage === index
                          ? "scale-100 opacity-100"
                          : "scale-105 opacity-0"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${t.about.imageAlt} ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                      />

                      {/* Image Gradient */}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                    </div>
                  ))}

                  {/* Slider Indicators */}

                  <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-slate-950/25 px-3 py-2 backdrop-blur-md">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`${t.about.showImage} ${index + 1}`}
                        onClick={() => setActiveImage(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeImage === index
                            ? "w-7 bg-white"
                            : "w-1.5 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
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
                      40+
                    </p>

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {t.about.yearsOfCare}
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
                      {t.about.patientFirst}
                    </p>

                    <p className="mt-0.5 text-[11px] text-blue-100">
                      {t.about.careYouCanTrust}
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
                {t.about.patientFirst}
              </div>

              {/* Heading */}

              <h3 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                {t.about.caringTitle}
                <span className="block text-blue-700">
                  {t.about.caringHighlight}
                </span>
              </h3>

              {/* Description */}

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600">
                {t.about.paragraph1}
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                {t.about.paragraph2Before}{" "}
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-[16px] font-extrabold text-transparent">
                  {t.about.highlight}
                </span>
                {t.about.paragraph2After}
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
                        {t.about.experiencedDoctors}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {t.about.skilledProfessionals}
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
                        {t.about.trustedCare}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {t.about.patientFocusedHealthcare}
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
                  t.about.point1,
                  t.about.point2,
                  t.about.point3,
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
                {t.about.learnMore}

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
