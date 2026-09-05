"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  X,
} from "lucide-react";

import { useLanguage } from "@/components/common/LanguageProvider";
import type {
  Department,
  Language,
} from "@/constants/departments";

interface DepartmentCardProps {
  department: Department;
}

const departmentVideos: Record<string, string> = {
  "2": "/images/departments/heart.mp4",
  "3": "/images/departments/skeleton.mp4",
  "5": "/images/departments/dialysis.mp4",
  "6": "/images/departments/neurology.mp4",
  "7": "/images/departments/gastro.mp4",
  "8": "/images/departments/gynecology.mp4",
};

const uiTranslations = {
  en: {
    department: "Medical Department",
    expertCare: "Expert Care",
    explore: "Explore",
    hospital: "Iswarya Hospital",
    comprehensive: "Comprehensive medical care",
    about: "About Department",
    services: "Our Services",
    provide: "What We Provide",
    service: "Services",
    book: "Book Appointment",
    close: "Close",
  },

  ta: {
    department: "மருத்துவத் துறை",
    expertCare: "சிறப்பு சிகிச்சை",
    explore: "மேலும் பார்க்க",
    hospital: "ஐஸ்வர்யா மருத்துவமனை",
    comprehensive: "முழுமையான மருத்துவ சேவை",
    about: "துறை பற்றிய தகவல்",
    services: "எங்கள் சேவைகள்",
    provide: "நாங்கள் வழங்குவது",
    service: "சேவைகள்",
    book: "முன்பதிவு செய்யவும்",
    close: "மூடு",
  },

  ml: {
    department: "മെഡിക്കൽ വിഭാഗം",
    expertCare: "വിദഗ്ധ പരിചരണം",
    explore: "കൂടുതൽ കാണുക",
    hospital: "ஐസ്വര്യാ മരുത്തുവമനൈ ",
    comprehensive: "സമഗ്രമായ മെഡിക്കൽ പരിചരണം",
    about: "വിഭാഗത്തെക്കുറിച്ച്",
    services: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    provide: "ഞങ്ങൾ നൽകുന്നത്",
    service: "സേവനങ്ങൾ",
    book: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക",
    close: "അടയ്ക്കുക",
  },

  te: {
    department: "వైద్య విభాగం",
    expertCare: "నిపుణుల చికిత్స",
    explore: "మరింత చూడండి",
    hospital: "ಐస్వర్యా హాస్పిటల్",
    comprehensive: "సమగ్ర వైద్య సేవలు",
    about: "విభాగం గురించి",
    services: "మా సేవలు",
    provide: "మేము అందించేది",
    service: "సేవలు",
    book: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    close: "మూసివేయండి",
  },

  hi: {
    department: "चिकित्सा विभाग",
    expertCare: "विशेषज्ञ देखभाल",
    explore: "और देखें",
    hospital: "ऐस्वर्या हॉस्पिटल",
    comprehensive: "व्यापक चिकित्सा देखभाल",
    about: "विभाग के बारे में",
    services: "हमारी सेवाएं",
    provide: "हम क्या प्रदान करते हैं",
    service: "सेवाएं",
    book: "अपॉइंटमेंट बुक करें",
    close: "बंद करें",
  },
} as const;

const patientFocusedTranslations = {
  en: {
    "1": "Complete patient care",
    "2": "Advanced cardiac care",
    "3": "Bone & joint care",
    "4": "Specialized surgical care",
    "5": "Dedicated dialysis care",
    "6": "Advanced neurological care",
    "7": "Digestive health care",
    "8": "Comprehensive women's care",
    "9": "Expert pediatric care",
    "10": "Advanced diagnostic care",
    "11": "Complete diabetes care",
    "12": "Comprehensive emergency care",
  },

  ta: {
    "1": "நோய்கள் மற்றும் சிகிச்சைகள்",
    "2": "இதயநோய் அறிகுறிகள் & காரணங்கள்",
    "3": "எலும்பு மற்றும் எலும்பியல் பராமரிப்பு",
    "4": "குழந்தையின் நோய் கண்டறிதல்",
    "5": "சிறப்பு டயாலிசிஸ் சிகிச்சை",
    "6": "மேம்பட்ட நரம்பியல் சிகிச்சை",
    "7": "செரிமான நல சிகிச்சை",
    "8": "முழுமையான பெண்கள் நல சிகிச்சை",
    "9": "கதிரியக்க நோயறிதல் மற்றும் Imaging",
    "10": "ஆய்வகம் மற்றும் மருத்துவ நோயறிதல்",
    "11": "முழுமையான நீரிழிவியல் சிகிச்சை",
    "12": "அவசரம் மற்றும் தீவிர சிகிச்சை",
  },

  ml: {
    "1": "സമ്പൂർണ്ണ രോഗി പരിചരണം",
    "2": "അത്യാധുനിക ഹൃദയ പരിചരണം",
    "3": "എല്ല് & സന്ധി പരിചരണം",
    "4": "പ്രത്യേക ശസ്ത്രക്രിയാ പരിചരണം",
    "5": "പ്രത്യേക ഡയാലിസിസ് പരിചരണം",
    "6": "അത്യാധുനിക ന്യൂറോളജി പരിചരണം",
    "7": "ദഹന ആരോഗ്യ പരിചരണം",
    "8": "സമ്പൂർണ്ണ വനിതാ ആരോഗ്യ പരിചരണം",
    "9": "വിദഗ്ധ ശിശു പരിചരണം",
    "10": "അത്യാധുനിക രോഗനിർണയ സേവനം",
    "11": "സമ്പൂർണ്ണ അടിയന്തര പരിചരണം",
    "12": "സമ്പൂർണ്ണ അവസര പരിചരണം",
  },

  te: {
    "1": "సంపూర్ణ రోగి సంరక్షణ",
    "2": "అధునాతన హృదయ సంరక్షణ",
    "3": "ఎముకలు & కీళ్ల సంరక్షణ",
    "4": "ప్రత్యేక శస్త్రచికిత్స సంరక్షణ",
    "5": "ప్రత్యేక డయాలసిస్ సంరక్షణ",
    "6": "అధునాతన న్యూరాలజీ సంరక్షణ",
    "7": "జీర్ణ ఆరోగ్య సంరక్షణ",
    "8": "సంపూర్ణ మహిళల ఆరోగ్య సంరక్షణ",
    "9": "నిపుణుల పిల్లల సంరక్షణ",
    "10": "అధునాతన నిర్ధారణ సేవలు",
    "11": "సంపూర్ణ ప్రమేహ సంరక్షణ",
    "12": "సంపూర్ణ అవసర సంరక్షణ",
  },

  hi: {
    "1": "सम्पूर्ण रोगी देखभाल",
    "2": "उन्नत हृदय देखभाल",
    "3": "हड्डी और जोड़ देखभाल",
    "4": "विशेष सर्जिकल देखभाल",
    "5": "विशेष डायलिसिस देखभाल",
    "6": "उन्नत न्यूरोलॉजी देखभाल",
    "7": "पाचन स्वास्थ्य देखभाल",
    "8": "सम्पूर्ण महिला स्वास्थ्य देखभाल",
    "9": "विशेषज्ञ बाल चिकित्सा देखभाल",
    "10": "उन्नत निदान सेवाएं",
    "11": "सम्पूर्ण प्रमेह देखभाल",
    "12": "सम्पूर्ण आपातकालीन देखभाल",
  },
} as const;

export default function DepartmentCard({
  department,
}: DepartmentCardProps) {
  const [open, setOpen] = useState(false);

  const { language } = useLanguage();

  const currentLanguage = (
    ["en", "ta", "ml", "te", "hi"].includes(language)
      ? language
      : "en"
  ) as Language;

  const content = department.content[currentLanguage];

  const ui = uiTranslations[currentLanguage];

  const videoSrc = departmentVideos[String(department.id)];

  const patientFocused =
  patientFocusedTranslations[currentLanguage][
    String(department.id) as keyof typeof patientFocusedTranslations[typeof currentLanguage]
  ];

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
          DEPARTMENT CARD
      ===================================================== */}

      <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)]">

        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/50 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-200/60" />

        <div className="relative p-6 sm:p-7">

          {/* MEDIA */}

          <div className="flex items-start justify-between">

            <div className="relative">

              <div className="absolute -inset-2 rounded-2xl bg-blue-400/20 blur-xl transition-all duration-500 group-hover:bg-blue-400/30" />

              <div className="relative h-[72px] w-[72px] overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 shadow-sm transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-lg">

                {videoSrc ? (
                  <video
                    key={videoSrc}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={department.image}
                    alt={content.title}
                    fill
                    sizes="72px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                )}

              </div>

              {videoSrc && (
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                </span>
              )}

            </div>

            <span className="text-sm font-bold tracking-[0.18em] text-slate-300 transition duration-300 group-hover:text-blue-200">
              {String(department.id).padStart(2, "0")}
            </span>

          </div>

          {/* TITLE */}

          <div className="mt-5">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              {ui.department}
            </span>

            <h3 className="mt-2 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[25px]">
              {content.title}
            </h3>

          </div>

          {/* DESCRIPTION */}

          <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">
            {content.description}
          </p>

          <div className="my-5 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

          {/* BOTTOM */}

          <div className="flex min-h-[48px] items-center justify-between gap-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {ui.expertCare}
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-700">
                {patientFocused}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20"
            >
              <span>{ui.explore}</span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>

          </div>

        </div>

        <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

      </article>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              <X size={20} />
            </button>

            {/* HEADER */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 px-7 py-10 text-white sm:px-10">

              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10" />

              <div className="relative flex items-center gap-5 pr-10">

                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">

                  {videoSrc ? (
                    <video
                      key={`${videoSrc}-${open}`}
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={department.image}
                      alt={content.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    {ui.hospital}
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {content.title}
                  </h2>

                  <p className="mt-2 text-sm text-blue-100">
                    {ui.comprehensive}
                  </p>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-7 sm:p-10">

              {/* ABOUT */}

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                  {ui.about}
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  {content.fullDescription}
                </p>

              </div>

              {/* SERVICES */}

              <div className="mt-9">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      {ui.services}
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                      {ui.provide}
                    </h3>

                  </div>

                  <span className="hidden text-sm font-semibold text-slate-400 sm:block">
                    {content.services.length} {ui.service}
                  </span>

                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {content.services.map(
                    (service, index) => (
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
                    )
                  )}

                </div>

              </div>

              {/* ACTIONS */}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                >

                  <CalendarCheck2 size={19} />

                  <span>{ui.book}</span>

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
                  {ui.close}
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}