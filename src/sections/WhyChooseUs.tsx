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
import Section from "@/components/animations/Section";
import { useLanguage } from "@/components/common/LanguageProvider";

type Language = "en" | "ta" | "ml" | "te" | "hi";

type Feature = {
  icon: typeof Stethoscope;
  number: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  gradient: string;
  soft: string;
  iconColor: string;
};

const features: Feature[] = [
  {
    icon: Stethoscope,
    number: "01",
    title: {
      en: "Experienced Doctors",
      ta: "அனுபவம் வாய்ந்த மருத்துவர்கள்",
      ml: "പരിചയസമ്പന്നരായ ഡോക്ടർമാർ",
      te: "అనుభవజ్ఞులైన వైద్యులు",
      hi: "अनुभवी डॉक्टर",
    },
    description: {
      en: "Highly qualified medical professionals dedicated to accurate diagnosis and personalized treatment.",
      ta: "துல்லியமான நோயறிதல் மற்றும் தனிப்பட்ட சிகிச்சைக்கு அர்ப்பணிப்புடன் செயல்படும் தகுதி வாய்ந்த மருத்துவ நிபுணர்கள்.",
      ml: "കൃത്യമായ രോഗനിർണയത്തിനും വ്യക്തിഗത ചികിത്സയ്ക്കുമായി സമർപ്പിതരായ പരിചയസമ്പന്നരായ മെഡിക്കൽ വിദഗ്ധർ.",
      te: "ఖచ్చితమైన నిర్ధారణ మరియు వ్యక్తిగత చికిత్సకు అంకితమైన నైపుణ్యం కలిగిన వైద్య నిపుణులు.",
      hi: "सटीक निदान और व्यक्तिगत उपचार के लिए समर्पित योग्य चिकित्सा विशेषज्ञ।",
    },
    gradient: "from-blue-500 to-cyan-400",
    soft: "bg-blue-50",
    iconColor: "text-blue-600",
  },

  {
    icon: Building2,
    number: "02",
    title: {
      en: "Modern Facilities",
      ta: "நவீன வசதிகள்",
      ml: "ആധുനിക സൗകര്യങ്ങൾ",
      te: "ఆధునిక సదుపాయాలు",
      hi: "आधुनिक सुविधाएँ",
    },
    description: {
      en: "Advanced healthcare infrastructure and modern medical facilities designed for quality patient care.",
      ta: "தரமான நோயாளி பராமரிப்பிற்காக வடிவமைக்கப்பட்ட நவீன மருத்துவ வசதிகள் மற்றும் மேம்பட்ட சுகாதார உள்கட்டமைப்பு.",
      ml: "ഗുണമേന്മയുള്ള രോഗി പരിചരണത്തിനായി രൂപകൽപ്പന ചെയ്ത ആധുനിക മെഡിക്കൽ സൗകര്യങ്ങളും മികച്ച ആരോഗ്യ അടിസ്ഥാന സൗകര്യങ്ങളും.",
      te: "నాణ్యమైన రోగి సంరక్షణ కోసం రూపొందించిన ఆధునిక వైద్య సదుపాయాలు మరియు అధునాతన ఆరోగ్య మౌలిక వసతులు.",
      hi: "गुणवत्तापूर्ण रोगी देखभाल के लिए आधुनिक चिकित्सा सुविधाएँ और उन्नत स्वास्थ्य बुनियादी ढाँचा।",
    },
    gradient: "from-violet-600 to-purple-400",
    soft: "bg-violet-50",
    iconColor: "text-violet-600",
  },

  {
    icon: Clock3,
    number: "03",
    title: {
      en: "24×7 Emergency Care",
      ta: "24×7 அவசர சிகிச்சை",
      ml: "24×7 അടിയന്തര പരിചരണം",
      te: "24×7 అత్యవసర వైద్యం",
      hi: "24×7 आपातकालीन देखभाल",
    },
    description: {
      en: "Round-the-clock emergency assistance with a dedicated team ready when you need us most.",
      ta: "உங்களுக்கு மிகவும் தேவைப்படும் நேரத்தில் உதவ தயாராக இருக்கும் அர்ப்பணிப்புள்ள குழுவுடன் 24 மணி நேர அவசர சேவை.",
      ml: "നിങ്ങൾക്ക് ഏറ്റവും ആവശ്യമുള്ള സമയത്ത് സഹായിക്കാൻ തയ്യാറായ സമർപ്പിത ടീമിനൊപ്പം 24 മണിക്കൂറും അടിയന്തര സേവനം.",
      te: "మీకు అత్యవసరంగా అవసరమైన సమయంలో సహాయం అందించడానికి సిద్ధంగా ఉన్న ప్రత్యేక బృందంతో 24 గంటల అత్యవసర సేవ.",
      hi: "जब आपको सबसे अधिक आवश्यकता हो तब सहायता के लिए समर्पित टीम के साथ 24 घंटे आपातकालीन सेवा।",
    },
    gradient: "from-rose-500 to-orange-400",
    soft: "bg-rose-50",
    iconColor: "text-rose-600",
  },

  {
    icon: HeartHandshake,
    number: "04",
    title: {
      en: "Patient First",
      ta: "நோயாளியே முதன்மை",
      ml: "രോഗിയാണ് ആദ്യം",
      te: "రోగే ప్రధానం",
      hi: "रोगी सर्वोपरि",
    },
    description: {
      en: "Compassionate healthcare focused on comfort, trust, safety, and the well-being of every patient.",
      ta: "ஒவ்வொரு நோயாளியின் வசதி, நம்பிக்கை, பாதுகாப்பு மற்றும் நலனை மையமாகக் கொண்ட அக்கறையுள்ள சுகாதார சேவை.",
      ml: "ഓരോ രോഗിയുടെയും സുഖം, വിശ്വാസം, സുരക്ഷ, ക്ഷേമം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന കരുതലുള്ള ആരോഗ്യപരിചരണം.",
      te: "ప్రతి రోగి సౌకర్యం, నమ్మకం, భద్రత మరియు ఆరోగ్యంపై దృష్టి సారించే ఆప్యాయమైన వైద్య సేవ.",
      hi: "हर रोगी के आराम, विश्वास, सुरक्षा और स्वास्थ्य पर केंद्रित संवेदनशील चिकित्सा सेवा।",
    },
    gradient: "from-emerald-500 to-teal-400",
    soft: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const content: Record<
  Language,
  {
    badge: string;
    title: string;
    description: string;
    trustedTitle: string;
    trustedDesc: string;
    qualityTitle: string;
    qualityDesc: string;
    compassionTitle: string;
    compassionDesc: string;
    bottomTitle: string;
    bottomDescription: string;
  }
> = {
  en: {
    badge: "Why Choose Us",
    title: "Why Patients Trust Iswarya Hospital",
    description:
      "Committed to providing exceptional healthcare with compassion, advanced facilities, and a patient-first approach.",
    trustedTitle: "Trusted Care",
    trustedDesc: "Patient-focused service",
    qualityTitle: "Quality Healthcare",
    qualityDesc: "Excellence in treatment",
    compassionTitle: "Compassionate Care",
    compassionDesc: "Here for every patient",
    bottomTitle: "Healthcare You Can Trust",
    bottomDescription:
      "From consultation to recovery, our team is committed to making every step of your healthcare journey comfortable, safe, and reassuring.",
  },

  ta: {
    badge: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
    title: "நோயாளிகள் ஏன் ஐஸ்வர்யா மருத்துவமனையை நம்புகிறார்கள்",
    description:
      "அனுபவம் வாய்ந்த சிகிச்சை, நவீன வசதிகள் மற்றும் முதன்மை அணுகுமுறையுடன் கூடிய சிறந்த சுகாதார சேவையை வழங்குவதில் நாங்கள் அர்ப்பணிப்புடன் செயல்படுகிறோம்.",
    trustedTitle: "நம்பகமான பராமரிப்பு",
    trustedDesc: "நோயாளியை மையமாகக் கொண்ட சேவை",
    qualityTitle: "தரமான சுகாதாரம்",
    qualityDesc: "சிகிச்சையில் சிறப்பு",
    compassionTitle: "அக்கறையான பராமரிப்பு",
    compassionDesc: "ஒவ்வொரு நோயாளிக்கும் எங்களின் ஆதரவு",
    bottomTitle: "நீங்கள் நம்பக்கூடிய சுகாதார சேவை",
    bottomDescription:
      "ஆலோசனை முதல் குணமடைதல் வரை, உங்கள் மருத்துவ பயணத்தின் ஒவ்வொரு சிகிச்சையும் பாதுகாப்பாகவும் வசதியாகவும் அமைய எங்கள் குழு முழு அர்ப்பணிப்புடன் செயல்படுகிறது.",
  },

  ml: {
    badge: "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം",
    title: "രോഗികൾ ഐശ്വര്യ ഹോസ്പിറ്റൽ -നെ വിശ്വസിക്കുന്നത് എന്തുകൊണ്ട്",
    description:
      "കരുതലും ആധുനിക സൗകര്യങ്ങളും രോഗിയെ മുൻനിർത്തിയ സമീപനവും ഉപയോഗിച്ച് മികച്ച ആരോഗ്യപരിചരണം നൽകാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.",
    trustedTitle: "വിശ്വസനീയമായ പരിചരണം",
    trustedDesc: "രോഗികേന്ദ്രിത സേവനം",
    qualityTitle: "ഗുണമേന്മയുള്ള ആരോഗ്യപരിചരണം",
    qualityDesc: "ചികിത്സയിലെ മികവ്",
    compassionTitle: "കരുതലുള്ള പരിചരണം",
    compassionDesc: "ഓരോ രോഗിക്കും ഞങ്ങളുണ്ട്",
    bottomTitle: "നിങ്ങൾക്ക് വിശ്വസിക്കാവുന്ന ആരോഗ്യപരിചരണം",
    bottomDescription:
      "കൺസൾട്ടേഷൻ മുതൽ സുഖം പ്രാപിക്കുന്നതുവരെ, നിങ്ങളുടെ ആരോഗ്യയാത്രയിലെ ഓരോ ഘട്ടവും സുരക്ഷിതവും സൗകര്യപ്രദവും ആശ്വാസകരവുമാക്കാൻ ഞങ്ങളുടെ ടീം പ്രതിജ്ഞാബദ്ധമാണ്.",
  },

  te: {
    badge: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
    title: "రోగులు ఐశ్వర్య మరుత్తువమనైను ఎందుకు నమ్ముతారు",
    description:
      "ఆప్యాయత, ఆధునిక సదుపాయాలు మరియు రోగి-కేంద్రిత విధానంతో అత్యుత్తమ వైద్య సేవలను అందించడానికి మేము కట్టుబడి ఉన్నాము.",
    trustedTitle: "నమ్మకమైన సంరక్షణ",
    trustedDesc: "రోగి కేంద్రిత సేవ",
    qualityTitle: "నాణ్యమైన వైద్యం",
    qualityDesc: "చికిత్సలో అత్యుత్తమత",
    compassionTitle: "ఆప్యాయమైన సంరక్షణ",
    compassionDesc: "ప్రతి రోగికి మేమున్నాం",
    bottomTitle: "మీరు నమ్మగల వైద్య సేవ",
    bottomDescription:
      "సలహా నుండి కోలుకునే వరకు, మీ వైద్య ప్రయాణంలోని ప్రతి దశను సురక్షితంగా, సౌకర్యవంతంగా మరియు నమ్మకంగా మార్చేందుకు మా బృందం కట్టుబడి ఉంది.",
  },

  hi: {
    badge: "हमें क्यों चुनें",
    title: "मरीज ऐश्वर्या हॉस्पिटल पर भरोसा क्यों करते हैं",
    description:
      "करुणा, आधुनिक सुविधाओं और रोगी-केंद्रित दृष्टिकोण के साथ उत्कृष्ट स्वास्थ्य सेवा प्रदान करने के लिए हम प्रतिबद्ध हैं।",
    trustedTitle: "विश्वसनीय देखभाल",
    trustedDesc: "रोगी-केंद्रित सेवा",
    qualityTitle: "गुणवत्तापूर्ण स्वास्थ्य सेवा",
    qualityDesc: "उपचार में उत्कृष्टता",
    compassionTitle: "संवेदनशील देखभाल",
    compassionDesc: "हर मरीज के लिए हम साथ हैं",
    bottomTitle: "स्वास्थ्य सेवा जिस पर आप भरोसा कर सकते हैं",
    bottomDescription:
      "परामर्श से लेकर स्वस्थ होने तक, आपकी स्वास्थ्य यात्रा के हर चरण को आरामदायक, सुरक्षित और भरोसेमंद बनाने के लिए हमारी टीम प्रतिबद्ध है।",
  },
};

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const currentLanguage = (language as Language) || "en";
  const t = content[currentLanguage] || content.en;

  return (
    <section
      id="why-choose-us"
      className={`
        relative
        overflow-hidden
        bg-slate-50
        py-14
        sm:py-20
        lg:py-28
      `}
      style={{ scrollMarginTop: "90px" }}
    >
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

          <div className="relative mx-auto max-w-5xl text-center">

            <div
              className={`
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100
                bg-white
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-blue-700
                shadow-sm
                sm:mb-5
                sm:px-4
                sm:py-2
                sm:text-xs
                sm:tracking-[0.18em]
              `}
            >
              <Sparkles size={13} className="sm:h-3.5 sm:w-3.5" />
              {t.badge}
            </div>

            <h2
              className={`
                mx-auto
                max-w-3xl
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-3xl
                lg:text-[2.25rem]
              `}
            >
              {t.title}
            </h2>

            <p
              className={`
                mx-auto
                mt-3
                max-w-2xl
                px-2
                text-xs
                leading-6
                text-slate-500
                sm:mt-4
                sm:px-0
                sm:text-base
                sm:leading-7
              `}
            >
              {t.description}
            </p>
          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <div className="relative mx-auto mt-8 max-w-4xl sm:mt-12">

            <div
              className={`
                grid
                overflow-hidden
                rounded-2xl
                border
                border-white
                bg-white
                shadow-xl
                shadow-slate-200/50
                sm:grid-cols-3
                sm:rounded-3xl
              `}
            >

              {/* Trusted Care */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  border-b
                  border-slate-100
                  p-4
                  sm:gap-3
                  sm:border-b-0
                  sm:border-r
                  sm:p-5
                `}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
                  <ShieldCheck size={19} className="sm:h-[21px] sm:w-[21px]" />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                    {t.trustedTitle}
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {t.trustedDesc}
                  </p>
                </div>
              </div>

              {/* Quality Healthcare */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  border-b
                  border-slate-100
                  p-4
                  sm:gap-3
                  sm:border-b-0
                  sm:border-r
                  sm:p-5
                `}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 sm:h-10 sm:w-10">
                  <Award size={19} className="sm:h-[21px] sm:w-[21px]" />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                    {t.qualityTitle}
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {t.qualityDesc}
                  </p>
                </div>
              </div>

              {/* Compassionate Care */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  p-4
                  sm:gap-3
                  sm:p-5
                `}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-10 sm:w-10">
                  <HeartHandshake
                    size={19}
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-xs font-extrabold text-slate-900 sm:text-sm">
                    {t.compassionTitle}
                  </p>

                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {t.compassionDesc}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              FEATURE CARDS
          ================================================= */}

          <div
            className={`
              relative
              mt-8
              grid
              gap-4
              sm:mt-10
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-4
            `}
          >

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-5
                    shadow-lg
                    shadow-slate-200/40
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                    hover:shadow-slate-300/50
                    sm:rounded-3xl
                    sm:p-7
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* Gradient Glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />

                  {/* Number */}
                  <div
                    className={`
                      absolute
                      right-4
                      top-4
                      text-3xl
                      font-black
                      text-slate-100
                      transition-colors
                      duration-500
                      group-hover:text-slate-200
                      sm:right-5
                      sm:top-5
                      sm:text-4xl
                    `}
                  >
                    {feature.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      ${feature.soft}
                      ${feature.iconColor}
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      sm:h-16
                      sm:w-16
                    `}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      className="sm:h-[30px] sm:w-[30px]"
                    />

                    {/* Icon Glow */}
                    <div
                      className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative mt-5 sm:mt-7">

                    <h3
                      className={`
                        text-lg
                        font-extrabold
                        leading-snug
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-700
                        sm:text-xl
                      `}
                    >
                      {feature.title[currentLanguage]}
                    </h3>

                    <p
                      className={`
                        mt-2.5
                        text-xs
                        leading-6
                        text-slate-500
                        sm:mt-3
                        sm:text-sm
                        sm:leading-7
                      `}
                    >
                      {feature.description[currentLanguage]}
                    </p>

                  </div>

                  {/* Bottom Gradient Line */}
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

          <div
            className={`
              relative
              mx-auto
              mt-8
              max-w-4xl
              overflow-hidden
              rounded-2xl
              bg-gradient-to-r
              from-slate-900
              via-blue-950
              to-violet-950
              p-5
              text-center
              text-white
              shadow-2xl
              sm:mt-12
              sm:rounded-3xl
              sm:p-9
            `}
          >

            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative">

              {/* Icon */}
              <div
                className={`
                  mx-auto
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  backdrop-blur
                  sm:h-12
                  sm:w-12
                  sm:rounded-2xl
                `}
              >
                <HeartHandshake
                  size={21}
                  className="text-cyan-300 sm:h-[25px] sm:w-[25px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-extrabold leading-tight sm:mt-5 sm:text-2xl">
                {t.bottomTitle}
              </h3>

              {/* Description */}
              <p
                className={`
                  mx-auto
                  mt-2
                  max-w-2xl
                  px-1
                  text-xs
                  leading-6
                  text-blue-100
                  sm:px-0
                  sm:text-sm
                  sm:leading-7
                `}
              >
                {t.bottomDescription}
              </p>

            </div>
          </div>

        </Container>
      </Section>

      {/* =====================================================
          HOVER ANIMATION
      ===================================================== */}

      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          #why-choose-us :global(.group) {
            will-change: transform;
          }
        }
      `}</style>
    </section>
  );
}