export type Language = "en" | "ta" | "ml" | "te" |"hi";

export interface LocalizedText {
  en: string;
  ta: string;
  ml: string;
  te: string;
  hi: string;
}

export interface LocalizedList {
  en: string[];
  ta: string[];
  ml: string[];
  te: string[];
  hi: string[];
}

export interface Doctor {
  id: number;
  name: LocalizedText;
  qualification: LocalizedText;
  specialization: LocalizedText;
  experience: LocalizedText;
  experienceYears: number;
  isActive: boolean;
  showSpecialization: boolean;
  bio: LocalizedText;
  specialistIn: LocalizedList;
  highlights?: string[];
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,

    name: {
      en: "Dr. K. VELUSWAMY",
      ta: "டாக்டர் கே. வேலுசாமி",
      ml: "ഡോ. കെ. വേലുസ്വാമി",
      te: "డా. కె. వేలుస్వామి",
      hi: "डॉ. के. वेलुस्वामी",
    },

    qualification: {
      en: "M.D(Med), (A.I.I.M.S), F.C.C.P, M.Sc.(Repro.Med.), P.G.(Dip), U.S.G",
      ta: "M.D(Med), (A.I.I.M.S), F.C.C.P, M.Sc.(Repro.Med.), P.G.(Dip), U.S.G",
      ml: "M.D(Med), (A.I.I.M.S), F.C.C.P, M.Sc.(Repro.Med.), P.G.(Dip), U.S.G",
      te: "M.D(Med), (A.I.I.M.S), F.C.C.P, M.Sc.(Repro.Med.), P.G.(Dip), U.S.G",
      hi: "M.D(Med), (A.I.I.M.S), F.C.C.P, M.Sc.(Repro.Med.), P.G.(Dip), U.S.G",
    },

    specialization: {
      en: "Cardiology & General Medicine",
      ta: "இதயவியல் மற்றும் பொது மருத்துவம்",
      ml: "കാർഡിയോളജി & ജനറൽ മെഡിസിൻ",
      te: "కార్డియాలజీ & జనరల్ మెడిసిన్",
      hi: "कार्डियोलॉजी और जनरल मेडिसिन",
    },

    experience: {
      en: "40+ Years",
      ta: "40+ ஆண்டுகள்",
      ml: "40+ വർഷങ്ങൾ",
      te: "40+ సంవత్సరాలు",
      hi: "40+ वर्ष",
    },

    experienceYears: 40,
    isActive: true,

    // Dr. Veluswamy-ku specialization card show aagaathu
    showSpecialization: false,

    bio: {
      en: "Dr. K. Veluswamy is the Founder and Owner of the Hospital and a highly experienced Senior Consultant Cardiologist with over 40 years of distinguished experience in clinical medicine. With extensive expertise in cardiology, general medicine, comprehensive diagnosis, critical care, and preventive healthcare, he is committed to delivering trusted, personalized, and evidence-based medical care. His four decades of experience, leadership, and patient-first approach have made him a respected name in healthcare.",

      ta: "டாக்டர் கே. வேலுசாமி அவர்கள் மருத்துவமனையின் நிறுவனர் மற்றும் உரிமையாளர் ஆவார். மருத்துவத் துறையில் 40 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட மூத்த இதயநோய் நிபுணராக உள்ளார். இதயவியல், பொது மருத்துவம், நோயறிதல், தீவிர சிகிச்சை மற்றும் தடுப்பு மருத்துவம் ஆகிய துறைகளில் விரிவான அனுபவம் கொண்ட இவர், நம்பகமான மற்றும் நோயாளியை மையமாகக் கொண்ட மருத்துவ சேவையை வழங்குவதில் அர்ப்பணிப்புடன் செயல்படுகிறார்.",

      ml: "ഡോ. കെ. വേലുസ്വാമി ആശുപത്രിയുടെ സ്ഥാപകനും ഉടമയും ആണ്. ക്ലിനിക്കൽ മെഡിസിൻ രംഗത്ത് 40 വർഷത്തിലധികം അനുഭവമുള്ള പരിചയസമ്പന്നനായ സീനിയർ കൺസൾട്ടന്റ് കാർഡിയോളജിസ്റ്റാണ് അദ്ദേഹം. കാർഡിയോളജി, ജനറൽ മെഡിസിൻ, രോഗനിർണയം, ക്രിട്ടിക്കൽ കെയർ, പ്രതിരോധ ആരോഗ്യപരിചരണം എന്നിവയിൽ വിപുലമായ പരിചയമുള്ള അദ്ദേഹം വിശ്വസനീയവും വ്യക്തിഗതവുമായ രോഗികേന്ദ്രിത ചികിത്സ നൽകുന്നതിൽ പ്രതിബദ്ധനാണ്.",

      te: "డా. కె. వేలుస్వామి ఆసుపత్రి వ్యవస్థాపకుడు మరియు యజమాని. క్లినికల్ మెడిసిన్ రంగంలో 40 సంవత్సరాలకు పైగా అనుభవం కలిగిన సీనియర్ కన్సల్టెంట్ కార్డియాలజిస్ట్. కార్డియాలజీ, జనరల్ మెడిసిన్, సమగ్ర నిర్ధారణ, క్రిటికల్ కేర్ మరియు నివారణ వైద్యంలో విస్తృత అనుభవంతో, విశ్వసనీయమైన మరియు రోగి కేంద్రిత వైద్య సేవలను అందించడంలో ఆయన అంకితభావంతో ఉన్నారు.",

      hi: "डॉ. के. वेलुस्वामी अस्पताल के संस्थापक और मालिक हैं तथा क्लिनिकल मेडिसिन में 40 से अधिक वर्षों के अनुभव वाले वरिष्ठ कंसल्टेंट कार्डियोलॉजिस्ट हैं। कार्डियोलॉजी, जनरल मेडिसिन, व्यापक निदान, क्रिटिकल केयर और निवारक स्वास्थ्य सेवाओं में उनके व्यापक अनुभव के साथ, वे विश्वसनीय, व्यक्तिगत और रोगी-केंद्रित चिकित्सा देखभाल प्रदान करने के लिए प्रतिबद्ध हैं।",
    },


    specialistIn: {
      en: [
        "Cardiology & Heart Care",
        "General Medicine",
        "Comprehensive Medical Diagnosis",
        "Critical & Emergency Medical Care",
        "Preventive Healthcare",
        "Cardiovascular Disease Management",
        "Hypertension Management",
        "Diabetes & Metabolic Care",
        "Lifestyle Disease Management",
        "Comprehensive Health Assessment",
        "Specialized Medical Consultation",
        "Multi-Specialty Medical Care",
      ],

      ta: [
        "இதயவியல் மற்றும் இதய பராமரிப்பு",
        "பொது மருத்துவம்",
        "முழுமையான மருத்துவ நோயறிதல்",
        "அவசர மற்றும் தீவிர மருத்துவ சிகிச்சை",
        "தடுப்பு மருத்துவம்",
        "இதய நோய் மேலாண்மை",
        "உயர் இரத்த அழுத்த மேலாண்மை",
        "நீரிழிவு மற்றும் மெட்டபாலிக் பராமரிப்பு",
        "வாழ்க்கை முறை நோய் மேலாண்மை",
        "முழுமையான சுகாதார மதிப்பீடு",
        "சிறப்பு மருத்துவ ஆலோசனை",
        "பல்துறை மருத்துவ சேவை",
      ],

      ml: [
        "കാർഡിയോളജി & ഹൃദയ പരിചരണം",
        "ജനറൽ മെഡിസിൻ",
        "സമഗ്രമായ രോഗനിർണയം",
        "ക്രിട്ടിക്കൽ & എമർജൻസി മെഡിക്കൽ കെയർ",
        "പ്രതിരോധ ആരോഗ്യപരിചരണം",
        "ഹൃദ്രോഗ നിയന്ത്രണം",
        "രക്തസമ്മർദ്ദ നിയന്ത്രണം",
        "പ്രമേഹവും മെറ്റബോളിക് പരിചരണവും",
        "ജീവിതശൈലി രോഗ നിയന്ത്രണം",
        "സമഗ്ര ആരോഗ്യ വിലയിരുത്തൽ",
        "പ്രത്യേക മെഡിക്കൽ കൺസൾട്ടേഷൻ",
        "മൾട്ടി-സ്പെഷ്യാലിറ്റി മെഡിക്കൽ കെയർ",
      ],

      te: [
        "కార్డియాలజీ & హార్ట్ కేర్",
        "జనరల్ మెడిసిన్",
        "సమగ్ర వైద్య నిర్ధారణ",
        "క్రిటికల్ & ఎమర్జెన్సీ మెడికల్ కేర్",
        "నివారణ ఆరోగ్య సంరక్షణ",
        "హృదయ సంబంధిత వ్యాధుల నిర్వహణ",
        "అధిక రక్తపోటు నిర్వహణ",
        "డయాబెటిస్ & మెటబాలిక్ కేర్",
        "లైఫ్‌స్టైల్ వ్యాధుల నిర్వహణ",
        "సమగ్ర ఆరోగ్య అంచనా",
        "ప్రత్యేక వైద్య సంప్రదింపులు",
        "మల్టీ-స్పెషాలిటీ వైద్య సేవలు",
      ],

      hi: [
        "कार्डियोलॉजी और हृदय देखभाल",
        "जनरल मेडिसिन",
        "व्यापक चिकित्सा निदान",
        "क्रिटिकल और आपातकालीन चिकित्सा देखभाल",
        "निवारक स्वास्थ्य सेवा",
        "हृदय रोग प्रबंधन",
        "उच्च रक्तचाप प्रबंधन",
        "मधुमेह और मेटाबोलिक देखभाल",
        "जीवनशैली संबंधी रोग प्रबंधन",
        "व्यापक स्वास्थ्य मूल्यांकन",
        "विशेषज्ञ चिकित्सा परामर्श",
        "बहु-विशेषता चिकित्सा सेवा",
      ],
    },

    highlights: [
      "40+ Years of Medical Experience",
      "Founder & Owner of the Hospital",
      "Senior Consultant Cardiologist",
      "Extensive Clinical Expertise",
      "Patient-Centered Approach",
      "Comprehensive Medical Care",
    ],

    image: "/images/doctors/doctor1.jpg",
  },

  {
    id: 2,

    name: {
      en: "Dr. ANAND",
      ta: "டாக்டர் ஆனந்த்",
      ml: "ഡോ. ആനന്ദ്",
      te: "డా. ఆనంద్",
      hi: "डॉ. आनंद",
    },

    qualification: {
      en: "MBBS., MD (GEN MED)",
      ta: "MBBS., MD (GEN MED)",
      ml: "MBBS., MD (GEN MED)",
      te: "MBBS., MD (GEN MED)",
      hi: "MBBS., MD (GEN MED)",
    },

    specialization: {
      en: "General Physician",
      ta: "பொது மருத்துவர்",
      ml: "ജനറൽ ഫിസിഷ്യൻ",
      te: "జనరల్ ఫిజిషియన్",
      hi: "जनरल फिजिशियन",
    },

    experience: {
      en: "8+ Years",
      ta: "8+ ஆண்டுகள்",
      ml: "8+ വർഷങ്ങൾ",
      te: "8+ సంవత్సరాలు",
      hi: "8+ वर्ष",
    },

    experienceYears: 8,
    isActive: true,
    showSpecialization: true,

    bio: {
      en: "An experienced General Physician committed to delivering comprehensive, evidence-based, and patient-centered medical care. With a strong focus on accurate diagnosis, timely treatment, preventive healthcare, and effective management of acute and chronic medical conditions, dedicated to providing dependable medical support. Experienced in emergency and critical care, with an emphasis on clear communication, compassionate treatment, and personalized healthcare for patients of all age groups.",

      ta: "முழுமையான, ஆதார அடிப்படையிலான மற்றும் நோயாளியை மையமாகக் கொண்ட மருத்துவ சேவையை வழங்குவதில் அர்ப்பணிப்புடன் செயல்படும் அனுபவம் வாய்ந்த பொது மருத்துவர். துல்லியமான நோயறிதல், சரியான நேரத்தில் சிகிச்சை, தடுப்பு மருத்துவம் மற்றும் தீவிர மற்றும் நீண்டகால நோய்களின் சிறப்பான மேலாண்மையில் கவனம் செலுத்துகிறார்.",

      ml: "സമഗ്രവും തെളിവ് അടിസ്ഥാനമാക്കിയതുമായ രോഗികേന്ദ്രിതമായ ചികിത്സ നൽകുന്നതിൽ പ്രതിബദ്ധനായ പരിചയസമ്പന്നനായ ജനറൽ ഫിസിഷ്യൻ. കൃത്യമായ രോഗനിർണയം, സമയബന്ധിതമായ ചികിത്സ, പ്രതിരോധ ആരോഗ്യപരിചരണം, ഗുരുതരവും ദീർഘകാലവുമായ രോഗങ്ങളുടെ ഫലപ്രദമായ നിയന്ത്രണം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.",

      te: "సమగ్ర, ఆధార ఆధారిత మరియు రోగి కేంద్రిత వైద్య సేవలను అందించడంలో అంకితభావంతో పనిచేసే అనుభవజ్ఞుడైన జనరల్ ఫిజిషియన్. ఖచ్చితమైన నిర్ధారణ, సమయానుకూల చికిత్స, నివారణ ఆరోగ్య సంరక్షణ మరియు తీవ్రమైన మరియు దీర్ఘకాలిక వ్యాధుల సమర్థవంతమైన నిర్వహణపై దృష్టి పెడతారు.",

      hi: "व्यापक, प्रमाण-आधारित और रोगी-केंद्रित चिकित्सा देखभाल प्रदान करने के लिए समर्पित एक अनुभवी जनरल फिजिशियन। सटीक निदान, समय पर उपचार, निवारक स्वास्थ्य सेवा तथा तीव्र और दीर्घकालिक चिकित्सा स्थितियों के प्रभावी प्रबंधन पर विशेष ध्यान देते हैं।",
    },

    specialistIn: {
      en: [
        "General Medicine",
        "Cardiology Treatments",
        "ICU & Emergency Medical Care",
        "Poisoning Treatment",
        "Nephrology Care",
        "Gastroenterology Care",
        "Orthopedic Care",
        "Stroke Care",
        "Breast Specialty Care",
        "Diabetes Management",
        "Hypertension Management",
        "Preventive Healthcare",
      ],

      ta: [
        "பொது மருத்துவம்",
        "இதய நோய் சிகிச்சை",
        "ICU மற்றும் அவசர மருத்துவ சிகிச்சை",
        "விஷத்தன்மை சிகிச்சை",
        "சிறுநீரக பராமரிப்பு",
        "இரைப்பை மற்றும் குடல் மருத்துவம்",
        "எலும்பியல் பராமரிப்பு",
        "பக்கவாத சிகிச்சை",
        "மார்பக சிறப்பு சிகிச்சை",
        "நீரிழிவு மேலாண்மை",
        "உயர் இரத்த அழுத்த மேலாண்மை",
        "தடுப்பு மருத்துவம்",
      ],

      ml: [
        "ജനറൽ മെഡിസിൻ",
        "കാർഡിയോളജി ചികിത്സ",
        "ICU & എമർജൻസി മെഡിക്കൽ കെയർ",
        "വിഷബാധ ചികിത്സ",
        "നെഫ്രോളജി കെയർ",
        "ഗാസ്ട്രോഎൻട്രോളജി കെയർ",
        "ഓർത്തോപീഡിക് കെയർ",
        "സ്ട്രോക്ക് കെയർ",
        "ബ്രസ്റ്റ് സ്പെഷ്യാലിറ്റി കെയർ",
        "പ്രമേഹ നിയന്ത്രണം",
        "രക്തസമ്മർദ്ദ നിയന്ത്രണം",
        "പ്രതിരോധ ആരോഗ്യപരിചരണം",
      ],

      te: [
        "జనరల్ మెడిసిన్",
        "కార్డియాలజీ చికిత్సలు",
        "ICU & ఎమర్జెన్సీ మెడికల్ కేర్",
        "విషపూరిత పరిస్థితుల చికిత్స",
        "నెఫ్రాలజీ కేర్",
        "గ్యాస్ట్రోఎంటరాలజీ కేర్",
        "ఆర్థోపెడిక్ కేర్",
        "స్ట్రోక్ కేర్",
        "బ్రెస్ట్ స్పెషాలిటీ కేర్",
        "డయాబెటిస్ నిర్వహణ",
        "అధిక రక్తపోటు నిర్వహణ",
        "నివారణ ఆరోగ్య సంరక్షణ",
      ],

      hi: [
        "जनरल मेडिसिन",
        "कार्डियोलॉजी उपचार",
        "ICU और आपातकालीन चिकित्सा देखभाल",
        "विषाक्तता उपचार",
        "नेफ्रोलॉजी देखभाल",
        "गैस्ट्रोएंटरोलॉजी देखभाल",
        "ऑर्थोपेडिक देखभाल",
        "स्ट्रोक देखभाल",
        "स्तन संबंधी विशेष देखभाल",
        "मधुमेह प्रबंधन",
        "उच्च रक्तचाप प्रबंधन",
        "निवारक स्वास्थ्य सेवा",
      ],
    },

    image: "/images/doctors/doctor2.jpg",
  },

  {
    id: 3,

    name: {
      en: "Dr. UTHAYA KUMAR",
      ta: "டாக்டர் உதய குமார்",
      ml: "ഡോ. ഉദയ കുമാർ",
      te: "డా. ఉదయ కుమార్",
      hi: "डॉ. उदय कुमार",
    },

    qualification: {
      en: "MBBS., M.S (GENERAL SURGEON)",
      ta: "MBBS., M.S (பொது அறுவை சிகிச்சை நிபுணர்)",
      ml: "MBBS., M.S (ജനറൽ സർജൻ)",
      te: "MBBS., M.S (జనరల్ సర్జన్)",
      hi: "MBBS., M.S (GENERAL SURGEON)",
    },

    specialization: {
      en: "General Surgeon",
      ta: "பொது அறுவை சிகிச்சை நிபுணர்",
      ml: "ജനറൽ സർജൻ",
      te: "జనరల్ సర్జన్",
      hi: "जनरल सर्जन",
    },

    experience: {
      en: "3+ Years",
      ta: "3+ ஆண்டுகள்",
      ml: "3+ വർഷങ്ങൾ",
      te: "3+ సంవత్సరాలు",
      hi: "3+ वर्ष",
    },

    experienceYears: 3,
    isActive: true,
    showSpecialization: true,

    bio: {
      en: "Dedicated general surgeon providing careful evaluation and surgical care with a strong focus on patient safety, recovery, and personalized treatment.",

      ta: "நோயாளியின் பாதுகாப்பு, விரைவான மீட்பு மற்றும் தனிப்பட்ட சிகிச்சையில் கவனம் செலுத்தி, கவனமான மதிப்பீடு மற்றும் அறுவை சிகிச்சை சேவையை வழங்கும் அர்ப்பணிப்புள்ள பொது அறுவை சிகிச்சை நிபுணர்.",

      ml: "രോഗിയുടെ സുരക്ഷ, വീണ്ടെടുപ്പ്, വ്യക്തിഗത ചികിത്സ എന്നിവയിൽ ശക്തമായ ശ്രദ്ധയോടെ സൂക്ഷ്മമായ വിലയിരുത്തലും ശസ്ത്രക്രിയാ പരിചരണവും നൽകുന്ന സമർപ്പിത ജനറൽ സർജൻ.",

      te: "రోగి భద్రత, కోలుకోవడం మరియు వ్యక్తిగత చికిత్సపై ప్రత్యేక దృష్టితో జాగ్రత్తగా మూల్యాంకనం మరియు శస్త్రచికిత్సా సేవలను అందించే అంకితభావం కలిగిన జనరల్ సర్జన్.",

      hi: "रोगी की सुरक्षा, शीघ्र स्वस्थ होने और व्यक्तिगत उपचार पर विशेष ध्यान देते हुए सावधानीपूर्वक मूल्यांकन और शल्य चिकित्सा देखभाल प्रदान करने वाले समर्पित जनरल सर्जन।",
    },

    specialistIn: {
      en: [
        "General Surgery",
        "Surgical Consultation",
        "Proctoscopy",
        "Laparoscopic Surgery",
        "Major & Minor Surgical Procedures",
        "Post-Surgical Care",
        "Diabetic Foot Care",
        "Wound Surgery & Wound Infection Management",
      ],

      ta: [
        "பொது அறுவை சிகிச்சை",
        "அறுவை சிகிச்சை ஆலோசனை",
        "புரோக்டோஸ்கோபி",
        "லேபரோஸ்கோபிக் அறுவை சிகிச்சை",
        "பெரிய மற்றும் சிறிய அறுவை சிகிச்சைகள்",
        "அறுவை சிகிச்சைக்குப் பிந்தைய பராமரிப்பு",
        "நீரிழிவு பாத பராமரிப்பு",
        "காய சிகிச்சை மற்றும் தொற்று மேலாண்மை",
      ],

      ml: [
        "ജനറൽ സർജറി",
        "ശസ്ത്രക്രിയാ കൺസൾട്ടേഷൻ",
        "പ്രോക്ടോസ്കോപ്പി",
        "ലാപറോസ്കോപ്പിക് സർജറി",
        "വലുതും ചെറുതുമായ ശസ്ത്രക്രിയകൾ",
        "ശസ്ത്രക്രിയാനന്തര പരിചരണം",
        "ഡയബറ്റിക് ഫൂട്ട് കെയർ",
        "മുറിവ് ശസ്ത്രക്രിയയും അണുബാധ നിയന്ത്രണവും",
      ],

      te: [
        "జనరల్ సర్జరీ",
        "శస్త్రచికిత్సా సంప్రదింపులు",
        "ప్రోక్టోస్కోపీ",
        "లాపరోస్కోపిక్ సర్జరీ",
        "మేజర్ & మైనర్ సర్జికల్ ప్రొసీజర్లు",
        "శస్త్రచికిత్స అనంతర సంరక్షణ",
        "డయాబెటిక్ ఫుట్ కేర్",
        "గాయం శస్త్రచికిత్స & ఇన్ఫెక్షన్ నిర్వహణ",
      ],

      hi: [
        "जनरल सर्जरी",
        "सर्जिकल परामर्श",
        "प्रोक्टोस्कोपी",
        "लेप्रोस्कोपिक सर्जरी",
        "बड़ी और छोटी शल्य चिकित्सा प्रक्रियाएं",
        "सर्जरी के बाद की देखभाल",
        "डायबिटिक फुट केयर",
        "घाव की सर्जरी और संक्रमण प्रबंधन",
      ],
    },

    image: "/images/doctors/doctor3.jpg",
  },

  {
    id: 4,

    name: {
      en: "Dr. SRINATH",
      ta: "டாக்டர் ஸ்ரீநாத்",
      ml: "ഡോ. ശ്രീനാഥ്",
      te: "డാ. శ్రీనాథ్",
      hi: "डॉ. श्रीनाथ",
    },

    qualification: {
      en: "MBBS",
      ta: "MBBS",
      ml: "MBBS",
      te: "MBBS",
      hi: "MBBS",
    },

    specialization: {
      en: "Duty Doctor",
      ta: "பணியில் உள்ள மருத்துவர்",
      ml: "ഡ്യൂട്ടി ഡോക്ടർ",
      te: "డ్యూటీ డాక్టర్",
      hi: "ड्यूटी डॉक्टर",
    },

    experience: {
      en: "3+ Years",
      ta: "3+ ஆண்டுகள்",
      ml: "3+ വർഷങ്ങൾ",
      te: "3+ సంవత్సరాలు",
      hi: "3+ वर्ष",
    },

    experienceYears: 3,
    isActive: true,
    showSpecialization: true,

    bio: {
      en: "Committed to providing responsive medical care, initial assessment, and continuous patient support with a patient-first approach.",

      ta: "நோயாளிக்கு முன்னுரிமை அளித்து விரைவான மருத்துவ பராமரிப்பு, ஆரம்ப மதிப்பீடு மற்றும் தொடர்ச்சியான நோயாளி ஆதரவை வழங்குவதில் அர்ப்பணிப்புடன் செயல்படுகிறார்.",

      ml: "രോഗിക്ക് മുൻഗണന നൽകി സമയബന്ധിതമായ ചികിത്സ, പ്രാഥമിക വിലയിരുത്തൽ, തുടർച്ചയായ രോഗി പിന്തുണ എന്നിവ നൽകുന്നതിൽ പ്രതിബദ്ധനാണ്.",

      te: "రోగికి ప్రాధాన్యతనిస్తూ సమయానుకూల వైద్య సంరక్షణ, ప్రారంభ మూల్యాంకనం మరియు నిరంతర రోగి సహాయాన్ని అందించడంలో అంకితభావంతో పనిచేస్తున్నారు.",

      hi: "रोगी-केंद्रित दृष्टिकोण के साथ समय पर चिकित्सा देखभाल, प्रारंभिक मूल्यांकन और निरंतर रोगी सहायता प्रदान करने के लिए प्रतिबद्ध।",
    },

    specialistIn: {
      en: [
        "General Consultation",
        "Resident Medical Officer (RMO)",
        "Initial Assessment",
        "Emergency Support",
        "Patient Monitoring",
      ],

      ta: [
        "பொது மருத்துவ ஆலோசனை",
        "Resident Medical Officer (RMO)",
        "ஆரம்ப மதிப்பீடு",
        "அவசர உதவி",
        "நோயாளி கண்காணிப்பு",
      ],

      ml: [
        "ജനറൽ കൺസൾട്ടേഷൻ",
        "Resident Medical Officer (RMO)",
        "പ്രാഥമിക വിലയിരുത്തൽ",
        "എമർജൻസി സപ്പോർട്ട്",
        "രോഗി നിരീക്ഷണം",
      ],

      te: [
        "జనరల్ కన్సల్టేషన్",
        "Resident Medical Officer (RMO)",
        "ప్రాథమిక మూల్యాంకనం",
        "అత్యవసర సహాయం",
        "రోగి పర్యవేక్షణ",
      ],

      hi: [
        "जनरल कंसल्टेशन",
        "Resident Medical Officer (RMO)",
        "प्रारंभिक मूल्यांकन",
        "आपातकालीन सहायता",
        "रोगी निगरानी",
      ],
    },

    image: "/images/doctors/doctor4.jpg",
  },

  {
    id: 5,

    name: {
      en: "Dr. REEN",
      ta: "டாக்டர் ரீன்",
      ml: "ഡോ. രീന്‍",
      te: "డా. రీన్",
      hi: "डॉ. रीन",
    },

    qualification: {
      en: "MBBS",
      ta: "MBBS",
      ml: "MBBS",
      te: "MBBS",
      hi: "MBBS",
    },

    specialization: {
      en: "Duty Doctor",
      ta: "பணியில் உள்ள மருத்துவர்",
      ml: "ഡ്യൂട്ടി ഡോക്ടർ",
      te: "డ్యూటీ డాక్టర్",
      hi: "ड्यूटी डॉक्टर",
    },

    experience: {
      en: "3+ Years",
      ta: "3+ ஆண்டுகள்",
      ml: "3+ വർഷങ്ങൾ",
      te: "3+ సంవత్సరాలు",
      hi: "3+ वर्ष",
    },

    experienceYears: 3,
    isActive: true,
    showSpecialization: true,

    bio: {
      en: "An experienced duty doctor focused on timely medical assessment, patient monitoring, and coordinated care for a wide range of healthcare needs.",

      ta: "சரியான நேரத்தில் மருத்துவ மதிப்பீடு, நோயாளி கண்காணிப்பு மற்றும் பல்வேறு மருத்துவ தேவைகளுக்கான ஒருங்கிணைந்த பராமரிப்பில் கவனம் செலுத்தும் அனுபவம் வாய்ந்த பணியில் உள்ள மருத்துவர்.",

      ml: "സമയബന്ധിതമായ മെഡിക്കൽ വിലയിരുത്തൽ, രോഗി നിരീക്ഷണം, വിവിധ ആരോഗ്യ ആവശ്യങ്ങൾക്കുള്ള ഏകോപിത പരിചരണം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന പരിചയസമ്പന്നനായ ഡ്യൂട്ടി ഡോക്ടർ.",

      te: "సమయానుకూల వైద్య మూల్యాంకనం, రోగి పర్యవేక్షణ మరియు వివిధ ఆరోగ్య అవసరాలకు సమన్వయంతో కూడిన సంరక్షణపై దృష్టి పెట్టే అనుభవజ్ఞుడైన డ్యూటీ డాక్టర్.",

      hi: "विभिन्न स्वास्थ्य आवश्यकताओं के लिए समय पर चिकित्सा मूल्यांकन, रोगी निगरानी और समन्वित देखभाल पर ध्यान केंद्रित करने वाले अनुभवी ड्यूटी डॉक्टर।",
    },

    specialistIn: {
      en: [
        "General Consultation",
        "Resident Medical Officer (RMO)",
        "Patient Monitoring",
        "Emergency Support",
        "Primary Care",
      ],

      ta: [
        "பொது மருத்துவ ஆலோசனை",
        "Resident Medical Officer (RMO)",
        "நோயாளி கண்காணிப்பு",
        "அவசர உதவி",
        "முதன்மை மருத்துவ பராமரிப்பு",
      ],

      ml: [
        "ജനറൽ കൺസൾട്ടേഷൻ",
        "Resident Medical Officer (RMO)",
        "രോഗി നിരീക്ഷണം",
        "എമർജൻസി സപ്പോർട്ട്",
        "പ്രാഥമിക പരിചരണം",
      ],

      te: [
        "జనరల్ కన్సల్టేషన్",
        "Resident Medical Officer (RMO)",
        "రోగి పర్యవేక్షణ",
        "అత్యవసర సహాయం",
        "ప్రాథమిక వైద్య సంరక్షణ",
      ],

      hi: [
        "जनरल कंसल्टेशन",
        "Resident Medical Officer (RMO)",
        "रोगी निगरानी",
        "आपातकालीन सहायता",
        "प्राथमिक चिकित्सा देखभाल",
      ],
    },

    image: "/images/doctors/doctor5.jpg",
  },
];