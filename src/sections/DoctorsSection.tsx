"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctors } from "@/constants/doctors";
import { useLanguage } from "@/components/common/LanguageProvider";

import type { Language } from "@/constants/doctors";

export default function DoctorsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const currentLanguage = language as Language;

  // =====================================================
  // TRANSLATED SECTION TEXT
  // =====================================================

  const ui = {
    en: {
      subtitle: "OUR DOCTORS",
      title: "Meet Our Experienced Doctors",
      description:
        "Our team of experienced doctors is committed to providing trusted, compassionate and quality healthcare.",
      intro:
        "With experienced medical professionals across multiple specialties, we focus on accurate diagnosis, personalized treatment and patient-centered care.",
      viewMoreDoctors: "View More Doctors",
      trustedMedicalCare: "Trusted Medical Care",
      trustTitle: "Experienced Doctors. Better Care.",
      trustDescription:
        "Get the right medical guidance from experienced healthcare professionals.",
      bookAppointment: "Book Appointment",
    },

    ta: {
      subtitle: "எங்கள் மருத்துவர்கள்",
      title: "எங்கள் அனுபவம் வாய்ந்த மருத்துவர்களை சந்திக்கவும்",
      description:
        "நம்பகமான, அக்கறையான மற்றும் தரமான மருத்துவ சேவையை வழங்க எங்கள் அனுபவம் வாய்ந்த மருத்துவர்கள் அர்ப்பணிப்புடன் செயல்படுகின்றனர்.",
      intro:
        "பல மருத்துவத் துறைகளில் அனுபவம் வாய்ந்த மருத்துவ நிபுணர்களுடன், துல்லியமான நோயறிதல், தனிப்பட்ட சிகிச்சை மற்றும் நோயாளியை மையமாகக் கொண்ட பராமரிப்பில் நாங்கள் கவனம் செலுத்துகிறோம்.",
      viewMoreDoctors: "மேலும் மருத்துவர்களைப் பார்க்க",
      trustedMedicalCare: "நம்பகமான மருத்துவ சேவை",
      trustTitle: "அனுபவம் வாய்ந்த மருத்துவர்கள். சிறந்த பராமரிப்பு.",
      trustDescription:
        "அனுபவம் வாய்ந்த மருத்துவ நிபுணர்களிடமிருந்து சரியான மருத்துவ ஆலோசனையைப் பெறுங்கள்.",
      bookAppointment: "மருத்துவ முன்பதிவு",
    },

    ml: {
      subtitle: "ഞങ്ങളുടെ ഡോക്ടർമാർ",
      title: "ഞങ്ങളുടെ പരിചയസമ്പന്നരായ ഡോക്ടർമാരെ പരിചയപ്പെടൂ",
      description:
        "വിശ്വസനീയവും കരുണാപൂർണ്ണവും ഗുണമേന്മയുള്ളതുമായ ആരോഗ്യപരിചരണം നൽകാൻ ഞങ്ങളുടെ പരിചയസമ്പന്നരായ ഡോക്ടർമാർ പ്രതിബദ്ധരാണ്.",
      intro:
        "വിവിധ മെഡിക്കൽ വിഭാഗങ്ങളിലെ പരിചയസമ്പന്നരായ വിദഗ്ധരോടൊപ്പം കൃത്യമായ രോഗനിർണയം, വ്യക്തിഗത ചികിത്സ, രോഗികേന്ദ്രിത പരിചരണം എന്നിവയിൽ ഞങ്ങൾ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.",
      viewMoreDoctors: "കൂടുതൽ ഡോക്ടർമാരെ കാണുക",
      trustedMedicalCare: "വിശ്വസനീയമായ മെഡിക്കൽ പരിചരണം",
      trustTitle: "പരിചയസമ്പന്നരായ ഡോക്ടർമാർ. മികച്ച പരിചരണം.",
      trustDescription:
        "പരിചയസമ്പന്നരായ ആരോഗ്യ വിദഗ്ധരിൽ നിന്ന് ശരിയായ മെഡിക്കൽ മാർഗനിർദ്ദേശം നേടുക.",
      bookAppointment: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക",
    },

    te: {
      subtitle: "మా వైద్యులు",
      title: "మా అనుభవజ్ఞులైన వైద్యులను కలుసుకోండి",
      description:
        "విశ్వసనీయమైన, శ్రద్ధతో కూడిన మరియు నాణ్యమైన వైద్య సేవలను అందించడానికి మా అనుభవజ్ఞులైన వైద్యులు కట్టుబడి ఉన్నారు.",
      intro:
        "వివిధ వైద్య విభాగాల్లో అనుభవజ్ఞులైన నిపుణులతో కలిసి ఖచ్చితమైన నిర్ధారణ, వ్యక్తిగత చికిత్స మరియు రోగి కేంద్రిత సంరక్షణపై మేము దృష్టి పెడుతున్నాము.",
      viewMoreDoctors: "మరిన్ని వైద్యులను చూడండి",
      trustedMedicalCare: "విశ్వసనీయ వైద్య సేవ",
      trustTitle: "అనుభవజ్ఞులైన వైద్యులు. మెరుగైన సంరక్షణ.",
      trustDescription:
        "అనుభవజ్ఞులైన వైద్య నిపుణుల నుండి సరైన వైద్య మార్గదర్శకత్వాన్ని పొందండి.",
      bookAppointment: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    },

    hi: {
      subtitle: "हमारे डॉक्टर",
      title: "हमारे अनुभवी डॉक्टरों से मिलें",
      description:
        "हमारे अनुभवी डॉक्टर विश्वसनीय, सहानुभूतिपूर्ण और गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं।",
      intro:
        "विभिन्न चिकित्सा विशेषज्ञताओं में अनुभवी चिकित्सा पेशेवरों की हमारी टीम सटीक निदान, व्यक्तिगत उपचार और रोगी-केंद्रित देखभाल पर ध्यान केंद्रित करती है।",
      viewMoreDoctors: "और डॉक्टर देखें",
      trustedMedicalCare: "विश्वसनीय चिकित्सा सेवा",
      trustTitle: "अनुभवी डॉक्टर। बेहतर देखभाल।",
      trustDescription:
        "अनुभवी स्वास्थ्य विशेषज्ञों से सही चिकित्सा मार्गदर्शन प्राप्त करें।",
      bookAppointment: "अपॉइंटमेंट बुक करें",
    },
  } as const;

  const text = ui[currentLanguage];

  // =====================================================
  // VIEW MORE DOCTORS
  // =====================================================

  const viewMoreDoctors = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-doctor-card]"
    );

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24;

    const moveAmount = (cardWidth + gap) * 3;

    const maxScroll = Math.max(
      slider.scrollWidth - slider.clientWidth,
      0
    );

    if (maxScroll === 0) return;

    if (slider.scrollLeft >= maxScroll - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    const nextPosition = Math.min(
      slider.scrollLeft + moveAmount,
      maxScroll
    );

    slider.scrollTo({
      left: nextPosition,
      behavior: "smooth",
    });
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-[100px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-cyan-100/30 blur-[100px] sm:h-96 sm:w-96" />

      <Section>
        <Container>
          {/* Section Heading */}

          <SectionTitle
            subtitle={text.subtitle}
            title={text.title}
            description={text.description}
          />

          {/* Short Intro */}

          <div className="mx-auto mt-4 max-w-2xl px-2 text-center sm:mt-6 sm:px-0">
            <p className="text-xs leading-6 text-slate-500 sm:text-base sm:leading-7">
              {text.intro}
            </p>
          </div>

          {/* Doctor Carousel */}

          <div className="relative mt-7 sm:mt-10">
            <div
              ref={sliderRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:pb-5"
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  data-doctor-card
                  className="w-[86%] shrink-0 snap-start sm:w-[55%] lg:w-[calc((100%-48px)/3)]"
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
                    language={currentLanguage}
                  />
                </div>
              ))}
            </div>

            {/* View More Doctors */}

            <div className="mt-5 flex justify-center sm:mt-7">
              <button
                type="button"
                onClick={viewMoreDoctors}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/25 sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                {text.viewMoreDoctors}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
                />
              </button>
            </div>
          </div>

          {/* Trust Strip */}

          <div className="relative mt-9 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-4 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:mt-12 sm:rounded-[1.75rem] sm:px-9 sm:py-7">
            {/* Decorative Circle */}

            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-200/30 blur-3xl sm:-right-20 sm:-top-20 sm:h-48 sm:w-48" />

            <div className="relative flex flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-5 md:text-left">
              {/* Trust Content */}

              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-700 sm:text-[10px] sm:tracking-[0.18em]">
                  {text.trustedMedicalCare}
                </p>

                <h3 className="mt-1.5 break-words text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl">
                  {text.trustTitle}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  {text.trustDescription}
                </p>
              </div>

              {/* Appointment Button */}

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
                className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                {text.bookAppointment}

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