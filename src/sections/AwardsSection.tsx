"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage, type Language } from "@/components/common/LanguageProvider";

type Award = {
  image: string;
  title: Record<Language, string>;
  year?: string;
  recognition: Record<Language, string>;
  awardedBy: Record<Language, string>;
  achievement: Record<Language, string>;
};

const awards: Award[] = [
  {
    image: "/images/awards/award-1.jpg",

    title: {
      en: "CME Programme – Invited Speaker",
      ta: "CME நிகழ்ச்சி – சிறப்பு அழைப்பாளர்",
      ml: "CME പ്രോഗ്രാം – ക്ഷണിക്കപ്പെട്ട സ്പീക്കർ",
      te: "CME కార్యక్రమం – ఆహ్వానిత వక్త",
      hi: "CME कार्यक्रम – आमंत्रित वक्ता",
    },

    year: "2025",

    recognition: {
      en: "Invited Speaker for “Azoospermia Management”",
      ta: "“அசோஸ்பெர்மியா மேலாண்மை” குறித்த சிறப்பு அழைப்பாளர்",
      ml: "“അസോസ്പെർമിയ മാനേജ്മെന്റ്” വിഷയത്തിൽ ക്ഷണിക്കപ്പെട്ട സ്പീക്കർ",
      te: "“అజోస్పెర్మియా మేనేజ్‌మెంట్” పై ఆహ్వానిత వక్త",
      hi: "“एज़ोस्पर्मिया प्रबंधन” के लिए आमंत्रित वक्ता",
    },

    awardedBy: {
      en: "Indian Medical Association (IMA) – Thoothukudi Branch",
      ta: "இந்திய மருத்துவ சங்கம் (IMA) – தூத்துக்குடி கிளை",
      ml: "ഇന്ത്യൻ മെഡിക്കൽ അസോസിയേഷൻ (IMA) – തൂത്തുക്കുടി ശാഖ",
      te: "ఇండియన్ మెడికల్ అసోసియేషన్ (IMA) – తూత్తుకుడి శాఖ",
      hi: "इंडियन मेडिकल एसोसिएशन (IMA) – तूतीकोरिन शाखा",
    },

    achievement: {
      en: "Invited as a speaker to deliver an expert session on Azoospermia Management at the CME Programme held on 1st November 2025 at Hotel DSF Plaza, Thoothukudi.",
      ta: "2025 நவம்பர் 1 அன்று தூத்துக்குடி ஹோட்டல் DSF பிளாசாவில் நடைபெற்ற CME நிகழ்ச்சியில் அசோஸ்பெர்மியா மேலாண்மை குறித்த நிபுணர் அமர்வை வழங்கும் பேச்சாளராக அழைக்கப்பட்டார்.",
      ml: "2025 നവംബർ 1-ന് തൂത്തുക്കുടിയിലെ ഹോട്ടൽ DSF പ്ലാസയിൽ നടന്ന CME പരിപാടിയിൽ അസോസ്പെർമിയ മാനേജ്മെന്റ്  വിഷയത്തിൽ വിദഗ്ധ സെഷൻ അവതരിപ്പിക്കാൻ സ്പീക്കറായി ക്ഷണിക്കപ്പെട്ടു.",
      te: "2025 నవంబర్ 1న తూత్తుకుడి హోటల్ DSF ప్లాజాలో జరిగిన CME కార్యక్రమంలో అజోస్పెర్మియా మేనేజ్‌మెంట్ పై నిపుణుల సెషన్ ఇవ్వడానికి స్పీకర్‌గా ఆహ్వానించబడ్డారు.",
      hi: "1 नवम्बर 2025 को तूतीकोरिन होटल DSF प्लाज़ा में आयोजित CME कार्यक्रम में एज़ोस्पर्मिया प्रबंधन पर विशेषज्ञ सत्र देने के लिए वक्ता के रूप में आमंत्रित किया गया।",
    },
  },

  {
    image: "/images/awards/award-2.jpg",

    title: {
      en: "25th Silver Jubilee Award & Recognition",
      ta: "25வது வெள்ளி விழா விருது & அங்கீகாரம்",
      ml: "25ാം സിൽവർ ജൂബിലി അവാർഡ് & നേട്ടം",
      te: "25వ సిల్వర్ జూబ్లీ అవార్డు & విజయము",
      hi: "25वीं सिल्वर जुबली पुरस्कार एवं अभियोग",
    },

    year: "2000-2025",

    recognition: {
      en: "25th Silver Jubilee Celebration",
      ta: "25வது வெள்ளி விழா கொண்டாட்டம்",
      ml: "25-ാം സിൽവർ ജൂബിലി ആഘോഷം",
      te: "25వ సిల్వర్ జూబ్లీ వేడుక",
      hi: "25वीं सिल्वर जुबली समारोह",
    },

    awardedBy: {
      en: "Sankar Ponnar HR Sec School & Sankar Ponnar Global Campus",
      ta: "சங்கர் பொன்னர் மேல்நிலைப் பள்ளி மற்றும் சங்கர் பொன்னர் குளோபல் கேம்பஸ்",
      ml: "ശങ്കർ പൊന്നാർ ഹൈയർ സെക്കൻഡറി സ്കൂൾ & ശങ്കർ പൊന്നാർ ഗ്ലോബൽ കാമ്പസ്",
      te: "శంకర్ పొన్నార్ హయ్యర్ సెకండరీ స్కూల్ & శంకర్ పొన్నార్ గ్లోబల్ క్యాంపస్",
      hi: "संकर पोनार एचआर सेक स्कूल & संकर पोनार ग्लोबल कैंपस",
    },

    achievement: {
      en: "Honoured as part of the 25th Silver Jubilee celebration of Sankar Ponnar HR Sec School & Sankar Ponnar Global Campus, commemorating 25 years of educational excellence and dedicated service.",
      ta: "சங்கர் பொன்னர் மேல்நிலைப் பள்ளி மற்றும் சங்கர் பொன்னர் குளோபல் கேம்பஸ்-ன் 25வது வெள்ளி விழாவை முன்னிட்டு, 25 ஆண்டுகால கல்விச் சிறப்பு மற்றும் அர்ப்பணிப்பான சேவையை கௌரவிக்கும் வகையில் இந்த அங்கீகாரம் வழங்கப்பட்டது.",
      ml: "ശങ്കർ പൊന്നാർ ഹൈയർ സെക്കൻഡറി സ്കൂൾ & ശങ്കർ പൊന്നാർ ഗ്ലോബൽ കാമ്പസ്-ന്റെ 25-ാം സിൽവർ ജൂബിലി ആഘോഷത്തിന്റെ ഭാഗമായി, 25 വർഷത്തെ വിദ്യാഭ്യാസ മികവും സമർപ്പിത സേവനവും ആദരിക്കുന്നതിനായി ഈ അംഗീകാരം ലഭിച്ചു.",
      te: "శంకర్ పొన్నర్ ఉన్నత స్థాయి పాఠశాల & శంకర్ పొన్నర్ గ్లోబల్ కేల్పస్ - 25వ సిల్వర్ జూబిలీ వేడుకల్లో, 25 సంవత్సరాల విద్యా సేవలు మరియు ప్రతిభను గుర్తించి ఈ అవార్డు ప్రదానం అయ్యింది.",
      hi: "संकर पोनार एचआर सेक स्कूल & संकर पोनार ग्लोबल कैंपस के 25वें सिल्वर जुबली समारोह के अवसर पर 25 वर्षों की शैक्षिक उत्कृष्टता और समर्पित सेवा के लिए यह सम्मान प्रदान किया गया।",
    },
  },

  {
    image: "/images/awards/award-3.jpg",

    title: {
      en: "Best Service Award",
      ta: "சிறந்த சேவை விருது",
      ml: "മികച്ച സേവനത്തിനുള്ള അവാർഡ്",
      te: "ఉత్తమ సేవా పురస్కారం",
      hi: "सर्वश्रेष्ठ सेवा पुरस्कार",
    },

    year: "2023",

    recognition: {
      en: "Best Service Award",
      ta: "சிறந்த சேவை விருது",
      ml: "മികച്ച സേവനത്തിനുള്ള അവാർഡ്",
      te: "ఉత్తమ సేవా పురస్కారం",
      hi: "सर्वश्रेष्ठ सेवा पुरस्कार",
    },

    awardedBy: {
      en: "Indian Medical Association – Palani, Oddanchatram & Madurai Meenakshi Branches, in association with Meenakshi Mission Hospital & Research Centre",
      ta: "இந்திய மருத்துவ சங்கம் – பழனி, ஒட்டன்சத்திரம் மற்றும் மதுரை மீனாட்சி கிளைகள், மீனாட்சி மிஷன் மருத்துவமனை மற்றும் ஆராய்ச்சி மையத்துடன் இணைந்து",
      ml: "ഇന്ത്യൻ മെഡിക്കൽ അസോസിയേഷൻ – പഴനി, ഒട്ടൻചത്രം & മധുരൈ മീനാക്ഷി ശാഖകൾ, മീനാക്ഷി മിഷൻ ഹോസ്പിറ്റൽ & റിസർച്ച് സെന്ററുമായി സഹകരിച്ച്",
      te: "ఇండియన్ మెడికల్ అసోసియేషన్ – పళని, ఒడ్డంచత్రం & మదురై మీనాక్షి శాఖలు, మీనాక్షి మిషన్ హాస్పిటల్ & రీసెర్చ్ సెంటర్‌తో కలిసి",
      hi: "इंडियन मेडिकल एसोसिएशन – पलानी, ओडंचत्रम और मदुरै मीनाक्षी शाखाएँ, मीनाक्षी मिशन हॉस्पिटल एवं रिसर्च सेंटर के सहयोग से",
    },

    achievement: {
      en: "Honoured with the Best Service Award in recognition of dedicated service and contribution to the medical profession and patient care.",
      ta: "மருத்துவத் துறைக்கும் நோயாளி பராமரிப்பிற்கும் அர்ப்பணிப்புடன் வழங்கிய சேவையை பாராட்டி சிறந்த சேவை விருது வழங்கப்பட்டது.",
      ml: "മെഡിക്കൽ മേഖലയിലും രോഗി പരിചരണത്തിലും നൽകിയ സമർപ്പിത സേവനത്തിനും സംഭാവനകൾക്കും മികച്ച സേവനത്തിനുള്ള അവാർഡ് നൽകി ആദരിച്ചു.",
      te: "వైద్య రంగం మరియు రోగి సంరక్షణకు అందించిన అంకితభావంతో కూడిన సేవలను గుర్తించి ఉత్తమ సేవా పురస్కారంతో సత్కరించారు.",
      hi: "चिकित्सा क्षेत्र और रोगी देखभाल में समर्पित सेवा एवं योगदान के लिए सर्वश्रेष्ठ सेवा पुरस्कार से सम्मानित किया गया।",
    },
  },

  {
    image: "/images/awards/award-4.jpg",

    title: {
      en: "2008th Child Birth – Special Achievement",
      ta: "2008வது குழந்தை பிறப்பு – சிறப்பு சாதனை",
      ml: "2008-ാമത്തെ കുഞ്ഞിന്റെ ജനനം – പ്രത്യേക നേട്ടം",
      te: "2008వ శిశువు జననం – ప్రత్యేక విజయం",
      hi: "2008वें बच्चे का जन्म – विशेष उपलब्धि",
    },

    year: "2008",

    recognition: {
      en: "Recognition for achieving the birth of the 2008th child",
      ta: "2008வது குழந்தையின் பிறப்பை வெற்றிகரமாக நிறைவேற்றியதற்கான அங்கீகாரம்",
      ml: "2008-ാമത്തെ കുഞ്ഞിന്റെ ജനനം വിജയകരമായി കൈവരിച്ചതിനുള്ള അംഗീകാരം",
      te: "2008వ శిశువు జననాన్ని విజయవంతంగా సాధించినందుకు గుర్తింపు",
      hi: "2008वें बच्चे के सफल जन्म के लिए सम्मान",
    },

    awardedBy: {
      en: "Iswarya Women Care & Fertility Centre, Palani",
      ta: "ஐஸ்வர்யா மகளிர் பராமரிப்பு & கருத்தரிப்பு மையம், பழனி",
      ml: "ഐശ്വര്യ വനിതാ പരിചരണവും വന്ധ്യതാ കേന്ദ്രവും, പളനി",
      te: "ఐశ్వర్య మహిళా సంరక్షణ & సంతానోత్పత్తి కేంద్రం, పళని",
      hi: "ऐश्वर्या महिला देखभाल एवं प्रजनन केंद्र, पलनी",
    },

    achievement: {
      en: "Honoured for the successful achievement of the birth of the 2008th child, commemorated during a special celebration held at Iswarya Women Care & Fertility Centre, Palani, on 11th May 2008.",
      ta: "11 மே 2008 அன்று பழனி ஐஸ்வர்யா மகளிர் பராமரிப்பு & கருத்தரிப்பு மையம்-ல் நடைபெற்ற சிறப்பு விழாவில் 2008வது குழந்தையின் வெற்றிகரமான பிறப்பை முன்னிட்டு இந்த அங்கீகாரம் வழங்கப்பட்டது.",
      ml: "2008 മെയ് 11-ന് പളനി ഐശ്വര്യ വനിതാ പരിചരണവും വന്ധ്യതാ കേന്ദ്രവും-ൽ നടന്ന പ്രത്യേക ആഘോഷത്തിൽ 2008-ാമത്തെ കുഞ്ഞിന്റെ വിജയകരമായ ജനനത്തെ ആദരിച്ച് ഈ അംഗീകാരം നൽകി.",
      te: "2008 మే 11న పళని ఇశ్వర్య మహిళా సంరక్షణ & సంతానోత్పత్తి కేంద్రం లో జరిగిన ప్రత్యేక కార్యక్రమంలో 2008వ శిశువు విజయవంతమైన జననాన్ని గుర్తిస్తూ ఈ గౌరవం అందించబడింది.",
      hi: "11 मई 2008 को पलनी इश्वार्या महिला देखभाल एवं प्रजनन केंद्र में आयोजित विशेष समारोह में 2008वें बच्चे के सफल जन्म के लिए यह सम्मान प्रदान किया गया।",
    },
  },

  {
    image: "/images/awards/award-5.jpg",

    title: {
      en: "“Ungalukkum Oru Kuzhandhai” – Fertility Awareness Recognition",
      ta: "“உங்களுக்கும் ஒரு குழந்தை” – கருத்தரிப்பு விழிப்புணர்வு அங்கீகாரம்",
      ml: "“നിങ്ങൾക്കും ഒരു കുഞ്ഞ്” – ഫെർട്ടിലിറ്റി ബോധവൽക്കരണ അംഗീകാരം",
      te: "“మీకు కూడా ఒక బిడ్డ” – సంతానోత్పత్తి అవగాహన గుర్తింపు",
      hi: "“आपको भी एक बच्चा” – प्रजनन जागरूकता सम्मान",
    },

    recognition: {
      en: "Recognition for contribution towards fertility awareness and helping couples understand fertility and parenthood",
      ta: "கருத்தரிப்பு விழிப்புணர்வை ஏற்படுத்தி, தம்பதிகள் கருத்தரிப்பு மற்றும் பெற்றோராகும் பயணத்தைப் புரிந்துகொள்ள உதவியதற்கான அங்கீகாரம்",
      ml: "ഫെർട്ടിലിറ്റി ബോധവൽക്കരണത്തിനും ദമ്പതികൾക്ക് ഫെർട്ടിലിറ്റിയും മാതാപിതൃത്വവും മനസ്സിലാക്കാൻ സഹായിച്ചതിനുമുള്ള അംഗീകാരം",
      te: "సంతానోత్పత్తి అవగాహనకు మరియు దంపతులకు సంతానోత్పత్తి, తల్లిదండ్రత్వం గురించి అవగాహన కల్పించేందుకు చేసిన కృషికి గుర్తింపు",
      hi: "प्रजनन जागरूकता में योगदान और दंपतियों को प्रजनन क्षमता एवं माता-पिता बनने की प्रक्रिया समझाने के लिए सम्मान",
    },

    awardedBy: {
      en: "Tamil Nadu Governor – K. Rosaiah",
      ta: "தமிழ்நாடு ஆளுநர் – கே. ரோசையா",
      ml: "തമിഴ്നാട് ഗവർണർ – കെ. റോസയ്യ",
      te: "తమిళనాడు గవర్నర్ – కె. రోసయ్య",
      hi: "तमिलनाडु के राज्यपाल – के. रोसैया",
    },

    achievement: {
      en: "Honoured for contributing to fertility awareness through educational efforts aimed at helping couples understand fertility, treatment and the journey towards parenthood.",
      ta: "கருத்தரிப்பு, சிகிச்சை மற்றும் பெற்றோராகும் பயணத்தைப் புரிந்துகொள்ள தம்பதிகளுக்கு உதவும் கல்வி முயற்சிகள் மூலம் கருத்தரிப்பு விழிப்புணர்வை ஏற்படுத்தியதற்காக கௌரவிக்கப்பட்டார்.",
      ml: "ഫെർട്ടിലിറ്റി, ചികിത്സ, മാതാപിതൃത്വത്തിലേക്കുള്ള യാത്ര എന്നിവ മനസ്സിലാക്കാൻ ദമ്പതികളെ സഹായിക്കുന്ന വിദ്യാഭ്യാസ പ്രവർത്തനങ്ങളിലൂടെ ഫെർട്ടിലിറ്റി ബോധവൽക്കരണത്തിന് നൽകിയ സംഭാവനയ്ക്ക് ആദരിച്ചു.",
      te: "సంతానోత్పత్తి, చికిత్స మరియు తల్లిదండ్రత్వ ప్రయాణాన్ని అర్థం చేసుకోవడంలో దంపతులకు సహాయపడే విద్యా కార్యక్రమాల ద్వారా సంతానోత్పత్తి అవగాహనకు చేసిన కృషికి గౌరవించబడ్డారు.",
      hi: "प्रजनन क्षमता, उपचार और माता-पिता बनने की यात्रा को समझने में दंपतियों की सहायता करने वाले शैक्षिक प्रयासों के माध्यम से प्रजनन जागरूकता में योगदान के लिए सम्मानित किया गया।",
    },
  },
];

const sectionText: Record<
  Language,
  {
    badge: string;
    title: string;
    description: string;
    details: string;
    awardedIn: string;
    awardedBy: string;
    achievement: string;
    explore: string;
    close: string;
  }
> = {
  en: {
    badge: "Awards & Achievements",
    title: "Our Achievements",
    description:
      "Celebrating our achievements and recognition for excellence in healthcare.",
    details: "Achievement Details",
    awardedIn: "Awarded In",
    awardedBy: "Awarded By",
    achievement: "Achievement",
    explore: "Explore Achievement",
    close: "Close",
  },

  ta: {
    badge: "விருதுகள் மற்றும் சாதனைகள்",
    title: "எங்கள் சாதனைகள்",
    description:
      "சுகாதாரத் துறையில் எங்களின் சிறப்பான சாதனைகள் மற்றும் அங்கீகாரங்களை கொண்டாடுகிறோம்.",
    details: "சாதனை விவரங்கள்",
    awardedIn: "விருது பெற்ற ஆண்டு",
    awardedBy: "வழங்கியவர்",
    achievement: "சாதனை",
    explore: "சாதனையை பார்க்க",
    close: "மூடு",
  },

  ml: {
    badge: "അവാർഡുകളും നേട്ടങ്ങളും",
    title: "ഞങ്ങളുടെ നേട്ടങ്ങൾ",
    description:
      "ആരോഗ്യപരിചരണ രംഗത്തെ ഞങ്ങളുടെ മികച്ച നേട്ടങ്ങളും അംഗീകാരങ്ങളും ആഘോഷിക്കുന്നു.",
    details: "നേട്ടത്തിന്റെ വിശദാംശങ്ങൾ",
    awardedIn: "അവാർഡ് ലഭിച്ച വർഷം",
    awardedBy: "അവാർഡ് നൽകിയത്",
    achievement: "നേട്ടം",
    explore: "നേട്ടം കാണുക",
    close: "അടയ്ക്കുക",
  },

  te: {
    badge: "అవార్డులు & విజయాలు",
    title: "మా విజయాలు",
    description:
      "ఆరోగ్య సంరక్షణ రంగంలో మా విజయాలు మరియు గుర్తింపులను గర్వంగా జరుపుకుంటున్నాము.",
    details: "విజయ వివరాలు",
    awardedIn: "అవార్డు పొందిన సంవత్సరం",
    awardedBy: "అవార్డు అందించిన వారు",
    achievement: "విజయం",
    explore: "విజయాన్ని చూడండి",
    close: "మూసివేయండి",
  },

  hi: {
    badge: "पुरस्कार एवं उपलब्धियाँ",
    title: "हमारी उपलब्धियाँ",
    description:
      "स्वास्थ्य सेवा के क्षेत्र में हमारी उपलब्धियों और उत्कृष्टता के लिए मिले सम्मानों का जश्न।",
    details: "उपलब्धि का विवरण",
    awardedIn: "पुरस्कार वर्ष",
    awardedBy: "पुरस्कार प्रदानकर्ता",
    achievement: "उपलब्धि",
    explore: "उपलब्धि देखें",
    close: "बंद करें",
  },
};

export default function AwardsSection() {
  const { language } = useLanguage();

  const currentLanguage: Language =
    language === "ta" ||
    language === "ml" ||
    language === "te" ||
    language === "hi"
      ? language
      : "en";

  const text = sectionText[currentLanguage];

  const [selectedAward, setSelectedAward] =
    useState<Award | null>(null);

  return (
    <section
      id="awards"
      style={{
        width: "100%",
        padding: "80px 0",
        background: "#f8fafc",
        overflow: "hidden",
        scrollMarginTop: "100px",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        style={{
          textAlign: "center",
          padding: "0 20px",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#0891b2",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {text.badge}
        </p>

        <h2
          style={{
            margin: "10px 0",
            color: "#1f2937",
            fontSize: "38px",
            fontWeight: 700,
          }}
        >
          {text.title}
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            color: "#64748b",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          {text.description}
        </p>
      </div>

      {/* =====================================================
          HORIZONTAL RUNNING AREA
      ===================================================== */}

      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="awards-track"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "max-content",
            alignItems: "stretch",
            animation: "awardRunning 25s linear infinite",
          }}
        >
          {/* FIRST SET */}

          {awards.map((award, index) => (
            <AwardCard
              key={`first-${index}`}
              award={award}
              language={currentLanguage}
              exploreText={text.explore}
              onOpen={() => setSelectedAward(award)}
            />
          ))}

          {/* DUPLICATE SET */}

          {awards.map((award, index) => (
            <AwardCard
              key={`second-${index}`}
              award={award}
              language={currentLanguage}
              exploreText={text.explore}
              onOpen={() => setSelectedAward(award)}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          POPUP
      ===================================================== */}

      {selectedAward && (
        <div
          onClick={() => setSelectedAward(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(0,0,0,.75)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "700px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "20px",
              background: "#fff",
            }}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              aria-label={text.close}
              onClick={() => setSelectedAward(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: 5,
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: "50%",
                background: "rgba(0,0,0,.7)",
                color: "#fff",
                fontSize: "26px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {/* POPUP IMAGE */}

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "330px",
              }}
            >
              <Image
                src={selectedAward.image}
                alt={
                  selectedAward.title[currentLanguage]
                }
                fill
                unoptimized
                sizes="700px"
                style={{
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* POPUP CONTENT */}

            <div style={{ padding: "30px" }}>
              <p
                style={{
                  margin: 0,
                  color: "#0891b2",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {text.details}
              </p>

              <h2
                style={{
                  margin: "8px 0 25px",
                  color: "#1f2937",
                  fontSize: "28px",
                  lineHeight: 1.3,
                }}
              >
                {selectedAward.title[currentLanguage]}
              </h2>

              {/* AWARD INFO */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, minmax(0, 1fr))",
                  gap: "15px",
                }}
              >
                {/* YEAR */}

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                  }}
                >
                  <small
                    style={{
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    {text.awardedIn}
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "5px",
                      color: "#1f2937",
                    }}
                  >
                    {selectedAward.year ?? "N/A"}
                  </strong>
                </div>

                {/* AWARDED BY */}

                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                  }}
                >
                  <small
                    style={{
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    {text.awardedBy}
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "5px",
                      color: "#1f2937",
                      lineHeight: 1.5,
                    }}
                  >
                    {selectedAward.awardedBy[
                      currentLanguage
                    ]}
                  </strong>
                </div>
              </div>

              {/* RECOGNITION */}

              <div style={{ marginTop: "22px" }}>
                <small
                  style={{
                    color: "#64748b",
                    fontWeight: 700,
                  }}
                >
                  {selectedAward.recognition[
                    currentLanguage
                  ]}
                </small>
              </div>

              {/* ACHIEVEMENT */}

              <div style={{ marginTop: "18px" }}>
                <small
                  style={{
                    color: "#64748b",
                    fontWeight: 700,
                  }}
                >
                  {text.achievement}
                </small>

                <p
                  style={{
                    marginTop: "8px",
                    color: "#64748b",
                    lineHeight: 1.8,
                  }}
                >
                  {selectedAward.achievement[
                    currentLanguage
                  ]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style jsx>{`
        @keyframes awardRunning {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .awards-track:hover {
          animation-play-state: paused !important;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 0 !important;
          }

          .awards-track {
            animation-duration: 20s !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   AWARD CARD
========================================================= */

function AwardCard({
  award,
  language,
  exploreText,
  onOpen,
}: {
  award: Award;
  language: Language;
  exploreText: string;
  onOpen: () => void;
}) {
  return (
    <div
      style={{
        position: "relative",
        flex: "0 0 350px",
        width: "350px",
        height: "380px",
        marginRight: "24px",
        overflow: "hidden",
        borderRadius: "18px",
        background: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      <Image
        src={award.image}
        alt={award.title[language]}
        fill
        unoptimized
        sizes="350px"
        style={{
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.25), transparent)",
        }}
      />

      {/* CONTENT */}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "25px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          {award.title[language]}
        </h3>

        <button
          type="button"
          onClick={onOpen}
          style={{
            marginTop: "12px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "50px",
            background: "#fff",
            color: "#0891b2",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {exploreText}
        </button>
      </div>
    </div>
  );
}