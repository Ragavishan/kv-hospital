"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import GoogleMap from "@/components/common/GoogleMap";
import { useLanguage } from "@/components/common/LanguageProvider";
import {
MapPin,
Phone,
Mail,
Clock,
ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
const { language } = useLanguage();

// -----------------------------------------------------
// CONTACT TRANSLATIONS
// -----------------------------------------------------

const contactTranslations = {
en: {
subtitle: "CONTACT US",
title: "Get In Touch",
description:
"We are always here to help you with your healthcare needs.",
visitUs: "Visit Us",
addressTitle: "Iswarya Hospital",
address: [
  
"72-B, Dindigul – Palani Main Road,",
"Laxmipuram,",
"Palani - 624601,",
"Tamil Nadu",
],
callUs: "Call Us",
appointmentAvailable: "Available for appointments",
emailUs: "Email Us",
emailDescription: "Send us your enquiries",
emergencyCare: "Emergency Care",
emergencyDescription:
"Our emergency department is available around the clock.",
available247: "24 × 7 Available",
findUs: "FIND US",
visitHospital: "Visit Iswarya Hospital - Palani",
mapAddress:
"72-B, Dindigul – Palani Main Road, Laxmipuram, Palani",
getDirections: "Get Directions",
},

ta: {
  subtitle: "தொடர்பு கொள்ளுங்கள்",
  title: "எங்களை தொடர்பு கொள்ளுங்கள்",
  description:
    "உங்கள் மருத்துவ தேவைகளுக்கு உதவ நாங்கள் எப்போதும் தயாராக இருக்கிறோம்.",
  visitUs: "எங்களை சந்திக்கவும்",
  addressTitle: "ஐஸ்வர்யா மருத்துவமனை - பழனி",
  address: [
    "72-B, திண்டுக்கல் – பழனி நெடுஞ்சாலை,",
    "லட்சுமிபுரம்,",
    "பழனி - 624601,",
    "தமிழ்நாடு",
  ],
  callUs: "எங்களை அழைக்கவும்",
  appointmentAvailable: "முன்பதிவுகளுக்கு கிடைக்கிறது",
  emailUs: "மின்னஞ்சல்",
  emailDescription:
    "உங்கள் கேள்விகளை எங்களுக்கு அனுப்புங்கள்",
  emergencyCare: "அவசர சிகிச்சை",
  emergencyDescription:
    "எங்கள் அவசர சிகிச்சை பிரிவு 24 மணி நேரமும் செயல்படுகிறது.",
  available247: "24 × 7 கிடைக்கும்",
  findUs: "எங்களைக் கண்டறியுங்கள்",
  visitHospital: "ஐஸ்வர்யா மருத்துவமனை",
  mapAddress:
    "72-B, திண்டுக்கல் – பழனி நெடுஞ்சாலை, லட்சுமிபுரம், பழனி",
  getDirections: "வழிகாட்டுதலைப் பெறுங்கள்",
},

ml: {
  subtitle: "ഞങ്ങളെ ബന്ധപ്പെടുക",
  title: "ബന്ധപ്പെടുക",
  description:
    "നിങ്ങളുടെ ആരോഗ്യ ആവശ്യങ്ങളിൽ നിങ്ങളെ സഹായിക്കാൻ ഞങ്ങൾ എപ്പോഴും തയ്യാറാണ്.",
  visitUs: "ഞങ്ങളെ സന്ദർശിക്കുക",
  addressTitle: "ഐശ്വര്യ മരുത്തുവമനൈ - പഴനി",
  address: [
    "72-B, ദിണ്ടിഗൽ – പഴനി പ്രധാന റോഡ്,",
    "ലക്ഷ്മിപുരം,",
    "പഴനി - 624601,",
    "തമിഴ്നാട്",
  ],
  callUs: "ഞങ്ങളെ വിളിക്കുക",
  appointmentAvailable: "അപ്പോയിന്റ്മെന്റുകൾക്കായി ലഭ്യമാണ്",
  emailUs: "ഇമെയിൽ",
  emailDescription:
    "നിങ്ങളുടെ അന്വേഷണങ്ങൾ ഞങ്ങൾക്ക് അയയ്ക്കുക",
  emergencyCare: "അടിയന്തര പരിചരണം",
  emergencyDescription:
    "ഞങ്ങളുടെ അടിയന്തര വിഭാഗം 24 മണിക്കൂറും പ്രവർത്തിക്കുന്നു.",
  available247: "24 × 7 ലഭ്യമാണ്",
  findUs: "ഞങ്ങളെ കണ്ടെത്തുക",
  visitHospital: "ഐശ്വര്യ മരുത്തുവമനൈ",
  mapAddress:
    "72-B, ദിണ്ടിഗൽ – പഴനി പ്രധാന റോഡ്, ലക്ഷ്മിപുരം, പഴനി",
  getDirections: "വഴി കണ്ടെത്തുക",
},

te: {
  subtitle: "మమ్మల్ని సంప్రదించండి",
  title: "మాతో సంప్రదించండి",
  description:
    "మీ ఆరోగ్య అవసరాలకు సహాయం చేయడానికి మేము ఎల్లప్పుడూ సిద్ధంగా ఉన్నాము.",
  visitUs: "మమ్మల్ని సందర్శించండి",
  addressTitle: "ఐశ్వర్య మరుత్తువమనై - పలని",
  address: [
    "72-B, దిండిగల్ – పలని ప్రధాన రహదారి,",
    "లక్ష్మీపురం,",
    "పలని - 624601,",
    "తమిళనాడు",
  ],
  callUs: "మాకు కాల్ చేయండి",
  appointmentAvailable:
    "అపాయింట్‌మెંટ్ల కోસం అందుబాટులో ఉన్నదி",
  emailUs: "ಇಮೆಯಿಲ್",
  emailDescription:
    "మీ ప్రశ్నలను మాకు పంపండి",
  emergencyCare: "అత్యవసర వైద్యం",
  emergencyDescription:
    "మా అత్యవసర విభాగం 24 గంటలూ అందుబాటులో ఉంటుంది.",
  available247: "24 × 7 అందుబాటులో",
  findUs: "మమ్మల్ని కనుగొనండి",
  visitHospital: "ఐశ్వర్య మరుత్తువమనై",
  mapAddress:
    "72-B, దిండిగల్ – పలని ప్రధాన రహదారి, లక్ష్మీపురం, పలని",
  getDirections: "దిశలను పొందండి",
},

hi: {
  subtitle: "संपर्क करें",
  title: "हमसे संपर्क करें",
  description:
    "आपकी स्वास्थ्य संबंधी आवश्यकताओं में सहायता करने के लिए हम हमेशा तैयार हैं।",
  visitUs: "हमसे मिलें",
  addressTitle: "ऐश्वर्या मरुत्तुवमनै - पलानी",
  address: [
    "72-B, डिंडीगुल – पलानी मुख्य मार्ग,",
    "लक्ष्मीपुरम,",
    "पलानी - 624601,",
    "तमिलनाडु",
  ],
  callUs: "हमें कॉल करें",
  appointmentAvailable:
    "अपॉइंटमेंट के लिए उपलब्ध",
  emailUs: "ईमेल करें",
  emailDescription:
    "अपनी पूछताछ हमें भेजें",
  emergencyCare: "आपातकालीन देखभाल",
  emergencyDescription:
    "हमारा आपातकालीन विभाग चौबीसों घंटे उपलब्ध है।",
  available247: "24 × 7 उपलब्ध",
  findUs: "हमें खोजें",
  visitHospital: "ऐश्वर्या मरुत्तुवमनै",
  mapAddress:
    "72-B, डिंडीगुल – पलानी मुख्य मार्ग, लक्ष्मीपुरम, पलानी",
  getDirections: "दिशा-निर्देश प्राप्त करें",
},

};

const contact =
contactTranslations[language as keyof typeof contactTranslations] ??
contactTranslations.en;

return ( <section
   id="contact"
   className="bg-white py-24"
 > <Section> <Container>

      {/* Section Heading */}
      <SectionTitle
        subtitle={contact.subtitle}
        title={contact.title}
        description={contact.description}
      />

      {/* Contact Information */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Address */}
        <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
            <MapPin size={28} />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {contact.visitUs}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            <span className="font-semibold text-slate-800">
              {contact.addressTitle}
            </span>

            {contact.address.map((line: string, index: number) => (
              <span key={index}>
                <br />
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Phone */}
        <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
            <Phone size={28} />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {contact.callUs}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            {contact.appointmentAvailable}
          </p>

          <a
            href="tel:+917502710333"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
          >
            +91 7502710333
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Email */}
        <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
            <Mail size={28} />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {contact.emailUs}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            {contact.emailDescription}
          </p>

          <a
            href="mailto:kvmultispecialityhospital@gmail.com"
            className="mt-3 inline-flex items-center gap-2 break-all font-semibold text-blue-700 transition hover:text-blue-900"
          >
            kvmultispecialityhospital@gmail.com
            <ArrowUpRight
              size={16}
              className="shrink-0"
            />
          </a>
        </div>

        {/* Emergency */}
        <div className="group rounded-3xl border border-red-100 bg-red-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
            <Clock size={28} />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {contact.emergencyCare}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {contact.emergencyDescription}
          </p>

          <span className="mt-3 inline-block font-bold text-red-600">
            {contact.available247}
          </span>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">

        <div className="p-6 sm:p-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                {contact.findUs}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                {contact.visitHospital}
              </h3>

              <p className="mt-2 text-slate-500">
                {contact.mapAddress}
              </p>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Iswarya+Hospital+-+Palani,+72-B+Dindigul-Palani+Main+Road,+Laxmipuram,+Palani,+Tamil+Nadu+624601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
            >
              <MapPin size={18} />
              {contact.getDirections}
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        <div className="h-[380px] w-full">
          <GoogleMap />
        </div>

      </div>

    </Container>
  </Section>
</section>
);
}
