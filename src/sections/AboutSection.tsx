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
import Section from "@/components/animations/Section";
import { useLanguage } from "@/components/common/LanguageProvider";

const aboutImages = [
  "/images/about/about-1.jpg",
  "/images/about/about-2.jpg",
  "/images/about/about-3-optimized.jpg",
  "/images/about/about-4-optimized.jpg",
  "/images/about/about-5.jpg",
  "/images/about/about-6.jpg",
];

function DiamondImage({
  imageIndex,
  altNumber,
  priority = false,
  imageSrc,
}: {
  imageIndex: number;
  altNumber: number;
  priority?: boolean;
  imageSrc: string;
}) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[115px]
        w-[115px]
        -translate-x-1/2
        -translate-y-1/2
        rotate-45
        overflow-hidden
        rounded-none
        border-[5px]
        border-white
        bg-white
        shadow-[0_12px_28px_rgba(15,23,42,0.14)]
        transition-transform
        duration-500
        hover:scale-[1.025]

        sm:h-[180px]
        sm:w-[180px]

        lg:h-[200px]
        lg:w-[200px]
      "
    >
      <div className="absolute inset-[-20%] -rotate-45">
        <Image
          key={`${imageIndex}-${altNumber}`}
          src={imageSrc}
          alt={`Image ${altNumber}`}
          fill
          priority={priority}
          quality={75}
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
          className="object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { t } = useLanguage();

  /* ============================================================
     AUTO IMAGE ROTATION
  ============================================================ */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getImageIndex = (position: number) => {
    return (activeImage + position) % aboutImages.length;
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* ============================================================
          SOFT BACKGROUND GLOW
      ============================================================ */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl" />

      <Section>
        <Container>
          {/* ========================================================
              SECTION HEADING
          ======================================================== */}

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-bold uppercase tracking-[0.18em] text-blue-700">
              {t.about.subtitle}
            </p>

            <h2 className="mt-4 text-center text-2xl font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-4xl">
              <span className="block text-slate-900">
                {t.about.titleLine1}
              </span>

              <span className="block text-blue-500">
                {t.about.titleLine2}
              </span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600">
              {t.about.description}
            </p>
          </div>

          {/* ========================================================
              MAIN CONTENT
          ======================================================== */}

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* ======================================================
                IMAGE SIDE
            ====================================================== */}

            <div className="relative flex min-h-[390px] items-center justify-center sm:min-h-[640px] lg:min-h-[690px]">
              {/* ==================================================
                  COMPACT DIAMOND CLUSTER
              ================================================== */}

              <div
                className="
                  relative
                  h-[330px]
                  w-[330px]

                  sm:h-[560px]
                  sm:w-[560px]

                  lg:h-[620px]
                  lg:w-[620px]
                "
              >
                {/* ==================================================
                    TOP DIAMOND
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[50%]
                    top-[24.5%]
                    h-36
                    w-36
                    -translate-x-1/2
                    -translate-y-1/2

                    sm:h-[220px]
                    sm:w-[220px]

                    lg:h-[240px]
                    lg:w-[240px]
                  "
                >
                  <DiamondImage
                    imageIndex={getImageIndex(0)}
                    altNumber={1}
                    priority
                    imageSrc={aboutImages[getImageIndex(0)]}
                  />
                </div>

                {/* ==================================================
                    LEFT DIAMOND
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[24%]
                    top-[50%]
                    h-36
                    w-36
                    -translate-x-1/2
                    -translate-y-1/2

                    sm:h-[180px]
                    sm:w-[180px]

                    lg:h-[200px]
                    lg:w-[200px]
                  "
                >
                  <DiamondImage
                    imageIndex={getImageIndex(1)}
                    altNumber={2}
                    imageSrc={aboutImages[getImageIndex(1)]}
                  />
                </div>

                {/* ==================================================
                    RIGHT DIAMOND
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[76%]
                    top-[50%]
                    h-36
                    w-36
                    -translate-x-1/2
                    -translate-y-1/2

                    sm:h-[180px]
                    sm:w-[180px]

                    lg:h-[200px]
                    lg:w-[200px]
                  "
                >
                  <DiamondImage
                    imageIndex={getImageIndex(2)}
                    altNumber={3}
                    imageSrc={aboutImages[getImageIndex(2)]}
                  />
                </div>

                {/* ==================================================
                    BOTTOM DIAMOND
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[50%]
                    top-[77%]
                    h-36
                    w-36
                    -translate-x-1/2
                    -translate-y-1/2

                    sm:h-[180px]
                    sm:w-[180px]

                    lg:h-[200px]
                    lg:w-[200px]
                  "
                >
                  <DiamondImage
                    imageIndex={getImageIndex(3)}
                    altNumber={4}
                    imageSrc={aboutImages[getImageIndex(3)]}
                  />
                </div>
              </div>

              {/* ==================================================
                  40+ YEARS BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  right-2
                  top-2
                  z-40
                  rounded-2xl
                  border
                  border-white
                  bg-white
                  px-4
                  py-3
                  shadow-[0_15px_40px_rgba(15,23,42,0.14)]

                  sm:right-2
                  sm:top-10
                "
              >
                <div className="text-center">
                  <p className="text-3xl font-extrabold leading-none tracking-tight text-blue-700">
                    40+
                  </p>

                  <div className="mx-auto my-2 h-px w-9 bg-blue-200" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t.about.yearsOfCare}
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PATIENT FIRST BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-40
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-700
                  px-4
                  py-3
                  text-white
                  shadow-[0_15px_35px_rgba(29,78,216,0.28)]

                  sm:left-2
                  sm:px-5
                  sm:py-4
                "
              >
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

              {/* ==================================================
                  SLIDER INDICATORS
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-[-8px]
                  left-1/2
                  z-40
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/80
                  bg-white/90
                  px-3
                  py-2
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${t.about.showImage} ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeImage === index
                        ? "w-7 bg-blue-700"
                        : "w-1.5 bg-slate-300 hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ======================================================
                RIGHT CONTENT
            ====================================================== */}

            <div>
              {/* Premium Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
                <HeartHandshake size={15} />

                {t.about.patientFirst}
              </div>

              {/* Heading */}

              <h3 className="mt-5 max-w-none text-xl font-extrabold leading-[1.3] tracking-[-0.02em] sm:text-2xl lg:text-[1.75rem]">
                <span className="block">
                  {t.about.caringTitle}
                </span>

                <span className="block text-blue-700">
                  {t.about.caringHighlight}
                </span>
              </h3>

              {/* Paragraph 1 */}

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600">
                {t.about.paragraph1}
              </p>

              {/* Paragraph 2 */}

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
                {t.about.paragraph2Before}{" "}
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-[16px] font-extrabold text-transparent">
                  {t.about.highlight}
                </span>
                {t.about.paragraph2After}
              </p>

              {/* ==================================================
                  FEATURE CARDS
              ================================================== */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {/* Experienced Doctors */}

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

                {/* Trusted Care */}

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

              {/* ==================================================
                  TRUST POINTS
              ================================================== */}

              <div className="mt-7 space-y-3.5">
                {[t.about.point1, t.about.point2, t.about.point3].map(
                  (item) => (
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
                  )
                )}
              </div>

              {/* ==================================================
                  CTA
              ================================================== */}

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