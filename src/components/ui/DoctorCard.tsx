"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ShieldCheck,
  X,
  Award,
  Stethoscope,
} from "lucide-react";

import type {
  Language,
  LocalizedText,
  LocalizedList,
} from "@/constants/doctors";

interface DoctorCardProps {
  name: LocalizedText;
  qualification: LocalizedText;
  specialization: LocalizedText;
  experience: LocalizedText;
  experienceYears: number;
  isActive: boolean;
  bio: LocalizedText;
  specialistIn: LocalizedList;
  image: string;
  showSpecialization?: boolean;
  language: Language;
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
  showSpecialization = true,
  language,
}: DoctorCardProps) {
  const [open, setOpen] = useState(false);

  // =====================================================
  // CURRENT LANGUAGE DATA
  // =====================================================

  const currentName = name[language];
  const currentQualification = qualification[language];
  const currentSpecialization = specialization[language];
  const currentExperience = experience[language];
  const currentBio = bio[language];
  const currentSpecialistIn = specialistIn[language];

  // =====================================================
  // EXPERIENCE
  // =====================================================

  const experienceNumber =
    parseInt(
      currentExperience.match(/\d+/)?.[0] ??
        String(experienceYears),
      10
    ) || 0;

  const isHighlyExperienced = experienceNumber >= 10;

  // =====================================================
  // TRANSLATED UI
  // =====================================================

  const ui = {
    en: {
      available: "Available",
      senior: "Senior",
      specialization: "Specialization",
      professionalExperience: "Professional Experience",
      highlyExperienced: "Highly Experienced",
      experienced: "Experienced",
      viewFullProfile: "View Full Profile",
      availableForConsultation: "Available for Consultation",
      aboutDoctor: "About Doctor",
      areasOfExpertise: "Areas of Expertise",
      bookAppointment: "Book Appointment",
      closeProfile: "Close profile",
    },

    ta: {
      available: "கிடைக்கிறார்",
      senior: "மூத்தவர்",
      specialization: "சிறப்பு துறை",
      professionalExperience: "மருத்துவ அனுபவம்",
      highlyExperienced: "மிகவும் அனுபவம் வாய்ந்தவர்",
      experienced: "அனுபவம் வாய்ந்தவர்",
      viewFullProfile: "முழு சுயவிவரத்தை பார்க்க",
      availableForConsultation: "ஆலோசனைக்கு கிடைக்கிறார்",
      aboutDoctor: "மருத்துவரைப் பற்றி",
      areasOfExpertise: "சிறப்பு நிபுணத்துவ துறைகள்",
      bookAppointment: "மருத்துவ முன்பதிவு",
      closeProfile: "சுயவிவரத்தை மூடவும்",
    },

    ml: {
      available: "ലഭ്യമാണ്",
      senior: "സീനിയർ",
      specialization: "സ്പെഷ്യലൈസേഷൻ",
      professionalExperience: "മെഡിക്കൽ പരിചയം",
      highlyExperienced: "വളരെ പരിചയസമ്പന്നൻ",
      experienced: "പരിചയസമ്പന്നൻ",
      viewFullProfile: "പൂർണ്ണ പ്രൊഫൈൽ കാണുക",
      availableForConsultation: "കൺസൾട്ടേഷനായി ലഭ്യമാണ്",
      aboutDoctor: "ഡോക്ടറെക്കുറിച്ച്",
      areasOfExpertise: "വിദഗ്ധ മേഖലകൾ",
      bookAppointment: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക",
      closeProfile: "പ്രൊഫൈൽ അടയ്ക്കുക",
    },

    te: {
      available: "అందుబాటులో ఉన్నారు",
      senior: "సీనియర్",
      specialization: "ప్రత్యేకత",
      professionalExperience: "వైద్య అనుభవం",
      highlyExperienced: "అత్యంత అనుభవజ్ఞులు",
      experienced: "అనుభవజ్ఞులు",
      viewFullProfile: "పూర్తి ప్రొఫైల్ చూడండి",
      availableForConsultation:
        "సంప్రదింపుల కోసం అందుబాటులో ఉన్నారు",
      aboutDoctor: "వైద్యుని గురించి",
      areasOfExpertise: "నిపుణతా విభాగాలు",
      bookAppointment: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      closeProfile: "ప్రొఫైల్ మూసివేయండి",
    },

    hi: {
      available: "उपलब्ध",
      senior: "वरिष्ठ",
      specialization: "विशेषज्ञता",
      professionalExperience: "व्यावसायिक अनुभव",
      highlyExperienced: "अत्यधिक अनुभवी",
      experienced: "अनुभवी",
      viewFullProfile: "पूरी प्रोफ़ाइल देखें",
      availableForConsultation: "परामर्श के लिए उपलब्ध",
      aboutDoctor: "डॉक्टर के बारे में",
      areasOfExpertise: "विशेषज्ञता के क्षेत्र",
      bookAppointment: "अपॉइंटमेंट बुक करें",
      closeProfile: "प्रोफ़ाइल बंद करें",
    },
  } as const;

  const text = ui[language];

  // =====================================================
  // BOOK APPOINTMENT
  // =====================================================

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

  // =====================================================
  // ESCAPE MODAL
  // =====================================================

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

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      {/* =====================================================
          DOCTOR CARD
      ===================================================== */}

      <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.14)]">

        {/* Top Accent */}

        <div className="h-1 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700" />

        {/* Photo */}

        <div className="relative overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={`${currentName} - ${currentSpecialization}`}
            width={600}
            height={650}
            className="h-[290px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent" />

          {/* Availability */}

          {isActive && (
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-emerald-700 shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              {text.available}
            </div>
          )}

          {/* Senior */}

          {isHighlyExperienced && (
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg">
              <Award size={13} />
              {text.senior}
            </div>
          )}
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">

          {/* Name */}

          <h3 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
            {currentName}
          </h3>

          {/* Qualification */}

          <div className="mt-2 flex items-start gap-2">
            <ShieldCheck
              size={16}
              className="mt-0.5 shrink-0 text-blue-700"
            />

            <p className="text-sm font-bold leading-5 text-blue-700">
              {currentQualification}
            </p>
          </div>

          {/* Specialization */}

          {showSpecialization && (
            <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-slate-50 p-4">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-700/20">
                  <Stethoscope size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {text.specialization}
                  </p>

                  <p className="mt-0.5 font-extrabold text-slate-900">
                    {currentSpecialization}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Professional Experience */}

          <div
            className={`mt-4 rounded-xl border px-4 py-3.5 ${
              isHighlyExperienced
                ? "border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-white"
                : "border-blue-100 bg-gradient-to-r from-blue-50 via-sky-50 to-white"
            }`}
          >
            <div className="flex items-center justify-between gap-3">

              <div>
                <p
                  className={`text-[10px] font-extrabold uppercase tracking-[0.14em] ${
                    isHighlyExperienced
                      ? "text-amber-600"
                      : "text-blue-600"
                  }`}
                >
                  {text.professionalExperience}
                </p>

                <p
                  className={`mt-1 text-lg font-black ${
                    isHighlyExperienced
                      ? "text-amber-800"
                      : "text-blue-800"
                  }`}
                >
                  {currentExperience}
                </p>
              </div>

              <div
                className={`shrink-0 rounded-full px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide ${
                  isHighlyExperienced
                    ? "bg-amber-200 text-amber-800"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {isHighlyExperienced
                  ? text.highlyExperienced
                  : text.experienced}
              </div>

            </div>
          </div>

          {/* View Full Profile */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group/profile mt-auto pt-5"
          >
            <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20">

              {text.viewFullProfile}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/profile:translate-x-1"
              />

            </span>
          </button>

        </div>
      </article>

      {/* =====================================================
          PROFILE MODAL
      ===================================================== */}

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
              aria-label={text.closeProfile}
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
                  alt={currentName}
                  width={180}
                  height={180}
                  className="h-32 w-32 rounded-2xl border-4 border-white/20 object-cover object-top shadow-xl"
                />

                <div>

                  {isActive && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-200 ring-1 ring-emerald-300/20">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      {text.availableForConsultation}
                    </div>
                  )}

                  <h2 className="text-2xl font-extrabold sm:text-3xl">
                    {currentName}
                  </h2>

                  <p className="mt-2 font-bold text-blue-200">
                    {currentQualification}
                  </p>

                  {showSpecialization && (
                    <p className="mt-1 text-sm font-medium text-blue-100">
                      {currentSpecialization}
                    </p>
                  )}

                </div>
              </div>
            </div>

            {/* Modal Content */}

            <div className="p-7 sm:p-9">

              {/* Experience */}

              <div
                className={`rounded-2xl border p-5 ${
                  isHighlyExperienced
                    ? "border-amber-200 bg-gradient-to-r from-amber-50 to-white"
                    : "border-blue-200 bg-gradient-to-r from-blue-50 to-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isHighlyExperienced
                          ? "text-amber-600"
                          : "text-blue-600"
                      }`}
                    >
                      {text.professionalExperience}
                    </p>

                    <p
                      className={`mt-1 text-xl font-extrabold ${
                        isHighlyExperienced
                          ? "text-amber-800"
                          : "text-blue-800"
                      }`}
                    >
                      {currentExperience}
                    </p>
                  </div>

                  <div
                    className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide ${
                      isHighlyExperienced
                        ? "bg-amber-200 text-amber-800"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {isHighlyExperienced
                      ? text.highlyExperienced
                      : text.experienced}
                  </div>

                </div>
              </div>

              {/* About */}

              <div className="mt-8">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {text.aboutDoctor}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {currentBio}
                </p>
              </div>

              {/* Expertise */}

              <div className="mt-8">

                <h3 className="text-lg font-extrabold text-slate-900">
                  {text.areasOfExpertise}
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  {currentSpecialistIn.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
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

                {text.bookAppointment}

                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
