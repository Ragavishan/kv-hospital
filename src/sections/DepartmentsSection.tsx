"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DepartmentCard from "@/components/ui/DepartmentCard";
import { departments } from "@/constants/departments";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Stethoscope,
} from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";
import { useState } from "react";

export default function DepartmentsSection() {
  const { language } = useLanguage();

  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Initial view = 3 departments
  const departmentsPerPage = 3;

  const totalPages = Math.ceil(
    departments.length / departmentsPerPage
  );

  const startIndex = currentPage * departmentsPerPage;

  const visibleDepartments = departments.slice(
    startIndex,
    startIndex + departmentsPerPage
  );

  /* =========================================================
     NEXT
  ========================================================= */

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : 0
    );
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const previousPage = () => {
    setCurrentPage((prev) =>
      prev > 0 ? prev - 1 : totalPages - 1
    );
  };

  /* =========================================================
     BOOK APPOINTMENT
  ========================================================= */

  const handleBookAppointment = () => {
    document
      .getElementById("appointment-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =========================================================
     LANGUAGE CONTENT
  ========================================================= */

  const content = {
    en: {
      subtitle: "Our Departments",
      title: "Comprehensive Medical Services",
      description:
        "From routine healthcare to specialized treatment, our medical departments are equipped to provide trusted care for every stage of life.",
      intro:
        "Explore our medical specialties and discover the right care for you and your family.",
      departments: "Medical Departments",
      need: "Need Medical Assistance?",
      find: "Find the right care for you",
      ctaDescription:
        "Our experienced healthcare team is ready to help you choose the right department and provide the care you need.",
      book: "Book Appointment",
      viewMore: "View More Departments",
      viewLess: "Show Less Departments",
      previous: "Previous",
      next: "Next",
      scroll: "Scroll to explore all departments",
    },

    ta: {
      subtitle: "எங்கள் துறைகள்",
      title: "முழுமையான மருத்துவ சேவைகள்",
      description:
        "சாதாரண மருத்துவ பரிசோதனைகள் முதல் சிறப்பு சிகிச்சைகள் வரை, எங்கள் மருத்துவத் துறைகள் வாழ்க்கையின் ஒவ்வொரு நிலையிலும் நம்பிக்கைக்குரிய சிகிச்சையை வழங்குகின்றன.",
      intro:
        "எங்கள் மருத்துவ சிறப்புத் துறைகளைப் பார்வையிட்டு, உங்களுக்கும் உங்கள் குடும்பத்திற்கும் தேவையான சிகிச்சையைத் தேர்வு செய்யுங்கள்.",
      departments: "மருத்துவ துறைகள்",
      need: "மருத்துவ உதவி தேவையா?",
      find: "உங்களுக்கு ஏற்ற சிகிச்சையை கண்டறியுங்கள்",
      ctaDescription:
        "உங்களுக்கு தேவையான மருத்துவத் துறையைத் தேர்வு செய்யவும், சரியான சிகிச்சையைப் பெறவும் எங்கள் அனுபவமிக்க மருத்துவக் குழு உதவ தயாராக உள்ளது.",
      book: "மருத்துவ முன்பதிவு",
      viewMore: "மேலும் மருத்துவ துறைகள்",
      viewLess: "குறைவாகக் காண்பி",
      previous: "முந்தைய",
      next: "அடுத்து",
      scroll: "அனைத்து துறைகளையும் பார்க்க scroll செய்யவும்",
    },

    ml: {
      subtitle: "ഞങ്ങളുടെ വിഭാഗങ്ങൾ",
      title: "സമഗ്രമായ മെഡിക്കൽ സേവനങ്ങൾ",
      description:
        "സാധാരണ ആരോഗ്യപരിചരണം മുതൽ പ്രത്യേക ചികിത്സകൾ വരെ, ജീവിതത്തിന്റെ എല്ലാ ഘട്ടങ്ങളിലും വിശ്വസനീയമായ പരിചരണം നൽകാൻ ഞങ്ങളുടെ മെഡിക്കൽ വിഭാഗങ്ങൾ സജ്ജമാണ്.",
      intro:
        "ഞങ്ങളുടെ മെഡിക്കൽ വിഭാഗങ്ങൾ പരിശോധിച്ച് നിങ്ങൾക്കും നിങ്ങളുടെ കുടുംബത്തിനും അനുയോജ്യമായ പരിചരണം കണ്ടെത്തുക.",
      departments: "മെഡിക്കൽ വിഭാഗങ്ങൾ",
      need: "മെഡിക്കൽ സഹായം ആവശ്യമുണ്ടോ?",
      find: "നിങ്ങൾക്ക് അനുയോജ്യമായ പരിചരണം കണ്ടെത്തുക",
      ctaDescription:
        "ശരിയായ വിഭാഗം തിരഞ്ഞെടുക്കാനും ആവശ്യമായ ചികിത്സ ലഭ്യമാക്കാനും ഞങ്ങളുടെ പരിചയസമ്പന്നരായ ആരോഗ്യപരിചരണ സംഘം നിങ്ങളെ സഹായിക്കാൻ തയ്യാറാണ്.",
      book: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക",
      viewMore: "കൂടുതൽ വിഭാഗങ്ങൾ കാണുക",
      viewLess: "കുറച്ച് കാണിക്കുക",
      previous: "മുമ്പത്തെ",
      next: "അടുത്തത്",
      scroll: "എല്ലാ വിഭാഗങ്ങളും കാണാൻ scroll ചെയ്യുക",
    },

    te: {
      subtitle: "మా విభాగాలు",
      title: "సమగ్ర వైద్య సేవలు",
      description:
        "సాధారణ ఆరోగ్య సంరక్షణ నుండి ప్రత్యేక చికిత్సల వరకు, జీవితంలోని ప్రతి దశలో నమ్మకమైన వైద్య సేవలను అందించడానికి మా విభాగాలు సిద్ధంగా ఉన్నాయి.",
      intro:
        "మా వైద్య విభాగాలను పరిశీలించి మీకు మరియు మీ కుటుంబానికి సరైన చికిత్సను కనుగొనండి.",
      departments: "వైద్య విభాగాలు",
      need: "వైద్య సహాయం కావాలా?",
      find: "మీకు సరైన చికిత్సను కనుగొనండి",
      ctaDescription:
        "సరైన విభాగాన్ని ఎంచుకోవడంలో మరియు అవసరమైన చికిత్సను పొందడంలో మా అనుభవజ్ఞులైన వైద్య బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది.",
      book: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      viewMore: "మరిన్ని విభాగాలను చూడండి",
      viewLess: "తక్కువ చూపించు",
      previous: "మునుపటి",
      next: "తదుపరి",
      scroll: "అన్ని విభాగాలను చూడటానికి scroll చేయండి",
    },

    hi: {
      subtitle: "हमारे विभाग",
      title: "व्यापक चिकित्सा सेवाएं",
      description:
        "सामान्य स्वास्थ्य देखभाल से लेकर विशेष उपचार तक, हमारे विभाग जीवन के हर चरण में विश्वसनीय चिकित्सा सेवाएं प्रदान करने के लिए तैयार हैं।",
      intro:
        "हमारे चिकित्सा विभागों को देखें और अपने और अपने परिवार के लिए सही उपचार खोजें।",
      departments: "चिकित्सा विभाग",
      need: "चिकित्सा सहायता चाहिए?",
      find: "अपने लिए सही उपचार खोजें",
      ctaDescription:
        "हमारी अनुभवी चिकित्सा टीम सही विभाग चुनने और आवश्यक उपचार प्राप्त करने में आपकी सहायता करने के लिए तैयार है।",
      book: "अपॉइंटमेंट बुक करें",
      viewMore: "और विभाग देखें",
      viewLess: "कम विभाग दिखाएं",
      previous: "पिछला",
      next: "अगला",
      scroll: "सभी विभाग देखने के लिए scroll करें",
    },
  }[language];

  return (
    <section
      id="departments"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-cyan-50 blur-3xl sm:h-96 sm:w-96" />

      <Section>
        <Container>
          {/* =================================================
              SECTION TITLE
          ================================================= */}

          <div className="relative">
            <SectionTitle
              subtitle={content.subtitle}
              title={content.title}
              description={content.description}
            />
          </div>

          {/* =================================================
              INTRO
          ================================================= */}

          <div className="mx-auto mt-4 max-w-3xl px-2 text-center sm:mt-8 sm:px-0">
            <p className="text-xs leading-6 text-slate-500 sm:text-base sm:leading-7">
              {content.intro}
            </p>
          </div>

          {/* =================================================
              DEPARTMENT COUNT
          ================================================= */}

          <div className="mx-auto mt-6 flex w-fit max-w-[90%] items-center justify-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 sm:mt-8 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm">
            <Stethoscope
              size={16}
              className="shrink-0 sm:h-[18px] sm:w-[18px]"
            />

            <span className="break-words text-center">
              {departments.length}+ {content.departments}
            </span>
          </div>

          {/* =================================================
              INITIAL VIEW
          ================================================= */}

          {!showAll && (
            <>
              <div className="relative mt-8 sm:mt-14">
                {/* LEFT BUTTON */}

                <button
                  type="button"
                  onClick={previousPage}
                  aria-label={content.previous}
                  className="absolute -left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:bg-blue-700 hover:text-white lg:flex"
                >
                  <ArrowLeft size={21} />
                </button>

                {/* RIGHT BUTTON */}

                <button
                  type="button"
                  onClick={nextPage}
                  aria-label={content.next}
                  className="absolute -right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl transition-all duration-300 hover:translate-x-1 hover:border-blue-200 hover:bg-blue-700 hover:text-white lg:flex"
                >
                  <ArrowRight size={21} />
                </button>

                {/* 3 CARDS */}

                <div className="overflow-hidden px-0.5 sm:px-1">
                  <div
                    key={currentPage}
                    className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
                  >
                    {visibleDepartments.map((department) => (
                      <div
                        key={department.id}
                        className="min-w-0 animate-[fadeIn_0.45s_ease-out]"
                      >
                        <DepartmentCard
                          department={department}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <div className="mt-5 flex items-center justify-center gap-2.5 sm:mt-7 sm:gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={previousPage}
                  aria-label={content.previous}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-700 hover:text-white sm:h-11 sm:w-11"
                >
                  <ArrowLeft size={18} />
                </button>

                <div className="flex max-w-[60%] items-center gap-1.5 overflow-hidden rounded-full bg-slate-100 px-3.5 py-2 sm:px-4">
                  {Array.from({
                    length: totalPages,
                  }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Page ${index + 1}`}
                      onClick={() => setCurrentPage(index)}
                      className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? "w-6 bg-blue-700"
                          : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextPage}
                  aria-label={content.next}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-700 hover:text-white sm:h-11 sm:w-11"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </>
          )}

          {/* =================================================
              ALL DEPARTMENTS VIEW
          ================================================= */}

          {showAll && (
            <div className="mt-8 sm:mt-14">
              {/* Scroll Container */}

              <div
                className="
                  max-h-[560px]
                  overflow-y-auto
                  overflow-x-hidden
                  rounded-2xl
                  border border-slate-100
                  bg-slate-50/50
                  p-3
                  shadow-inner
                  sm:max-h-[720px]
                  sm:rounded-[2rem]
                  sm:p-6
                "
              >
                {/* 3 COLUMN GRID */}

                <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                  {departments.map((department, index) => (
                    <div
                      key={department.id}
                      className="min-w-0 animate-[fadeIn_0.4s_ease-out]"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <DepartmentCard
                        department={department}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll Hint */}

              <div className="mt-3 flex items-center justify-center gap-1.5 px-3 text-center text-[10px] font-semibold text-slate-400 sm:mt-4 sm:gap-2 sm:text-xs">
                <ChevronDown
                  size={14}
                  className="shrink-0 animate-bounce sm:h-[15px] sm:w-[15px]"
                />

                <span className="break-words">
                  {content.scroll}
                </span>

                <ChevronDown
                  size={14}
                  className="shrink-0 animate-bounce sm:h-[15px] sm:w-[15px]"
                />
              </div>
            </div>
          )}

          {/* =================================================
              VIEW MORE / SHOW LESS
          ================================================= */}

          <div className="mt-6 flex justify-center px-2 sm:mt-8 sm:px-0">
            <button
              type="button"
              onClick={() =>
                setShowAll((prev) => !prev)
              }
              className="group inline-flex max-w-full items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-center text-xs font-bold leading-5 text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20 sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span className="break-words">
                {showAll
                  ? content.viewLess
                  : content.viewMore}
              </span>

              <ChevronDown
                size={17}
                className={`shrink-0 transition-transform duration-300 sm:h-[18px] sm:w-[18px] ${
                  showAll
                    ? "rotate-180"
                    : "group-hover:translate-y-1"
                }`}
              />
            </button>
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 px-5 py-7 text-white shadow-2xl sm:mt-16 sm:rounded-[2rem] sm:px-10 sm:py-10">
            {/* Decorations */}

            <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-white/10 sm:h-64 sm:w-64" />

            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl sm:h-48 sm:w-48" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-7">
              {/* CTA CONTENT */}

              <div className="min-w-0 max-w-2xl">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-200 sm:gap-2 sm:text-sm sm:tracking-wider">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-200 sm:h-2 sm:w-2" />

                  <span className="break-words">
                    {content.need}
                  </span>
                </div>

                <h3 className="mt-2 break-words text-xl font-extrabold leading-tight tracking-tight sm:mt-3 sm:text-3xl">
                  {content.find}
                </h3>

                <p className="mt-2 text-xs leading-6 text-blue-100 sm:mt-3 sm:text-base sm:leading-7">
                  {content.ctaDescription}
                </p>
              </div>

              {/* BOOK */}

              <button
                type="button"
                onClick={handleBookAppointment}
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl sm:w-auto sm:px-6"
              >
                {content.book}

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