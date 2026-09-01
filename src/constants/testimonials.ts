export type Language = "en" | "ta" | "ml" | "te" | "hi";

export interface LocalizedText {
  en: string;
  ta: string;
  ml: string;
  te: string;
  hi: string;
}

export interface Testimonial {
  id: number;
  name: LocalizedText;
  location: LocalizedText;
  review: LocalizedText;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,

    name: {
      en: "Ramesh Kumar",
      ta: "ரமேஷ் குமார்",
      ml: "രമേഷ് കുമാർ",
      te: "రమేష్ కుమార్",
      hi: "रमेश कुमार",
    },

    location: {
      en: "Palani",
      ta: "பழனி",
      ml: "പഴനി",
      te: "పళని",
      hi: "पलानी",
    },

    review: {
      en: "Excellent treatment and friendly doctors. Highly recommended for family healthcare.",
      ta: "சிறந்த சிகிச்சையும் நட்பான மருத்துவர்களும். குடும்ப மருத்துவ பராமரிப்புக்கு மிகவும் பரிந்துரைக்கிறேன்.",
      ml: "മികച്ച ചികിത്സയും സൗഹൃദപരമായ ഡോക്ടർമാരും. കുടുംബ ആരോഗ്യപരിചരണത്തിന് വളരെ ശുപാർശ ചെയ്യുന്നു.",
      te: "అద్భుతమైన చికిత్స మరియు స్నేహపూర్వక వైద్యులు. కుటుంబ ఆరోగ్య సంరక్షణకు ఎంతో సిఫార్సు చేస్తున్నాను.",
      hi: "उत्कृष्ट उपचार और मिलनसार डॉक्टर। पारिवारिक स्वास्थ्य देखभाल के लिए अत्यधिक अनुशंसित।",
    },

    rating: 5,
  },

  {
    id: 2,

    name: {
      en: "Lakshmi",
      ta: "லட்சுமி",
      ml: "ലക്ഷ്മി",
      te: "లక్ష్మి",
      hi: "लक्ष्मी",
    },

    location: {
      en: "Oddanchatram",
      ta: "ஒட்டன்சத்திரம்",
      ml: "ഒട്ടൻചത്രം",
      te: "ఒట్టంచత్రం",
      hi: "ओड्डनछत्रम",
    },

    review: {
      en: "Very clean hospital with experienced specialists. Staff members were supportive and caring.",
      ta: "அனுபவம் வாய்ந்த நிபுணர்களுடன் மிகவும் சுத்தமான மருத்துவமனை. பணியாளர்கள் அன்பாகவும் உதவியாகவும் இருந்தனர்.",
      ml: "പരിചയസമ്പന്നരായ വിദഗ്ധരുള്ള വളരെ വൃത്തിയുള്ള ആശുപത്രിയാണ്. ജീവനക്കാർ സഹായകരവും കരുതലോടെയും പെരുമാറി.",
      te: "అనుభవజ్ఞులైన నిపుణులతో చాలా శుభ్రమైన ఆసుపత్రి. సిబ్బంది ఎంతో సహాయకారిగా మరియు శ్రద్ధగా ఉన్నారు.",
      hi: "अनुभवी विशेषज्ञों के साथ बहुत साफ-सुथरा अस्पताल। स्टाफ सदस्य सहयोगी और देखभाल करने वाले थे।",
    },

    rating: 5,
  },

  {
    id: 3,

    name: {
      en: "Saravanan",
      ta: "சரவணன்",
      ml: "സரவണൻ",
      te: "సరవణన్",
      hi: "सरवणन",
    },

    location: {
      en: "Dindigul",
      ta: "திண்டுக்கல்",
      ml: "ദിണ്ടിഗൽ",
      te: "దిండిగల్",
      hi: "डिंडीगुल",
    },

    review: {
      en: "Emergency service was excellent. Doctors explained everything clearly and provided quick care.",
      ta: "அவசர சிகிச்சை சேவை சிறப்பாக இருந்தது. மருத்துவர்கள் அனைத்தையும் தெளிவாக விளக்கி விரைவான சிகிச்சை அளித்தனர்.",
      ml: "എമർജൻസി സേവനം മികച്ചതായിരുന്നു. ഡോക്ടർമാർ എല്ലാം വ്യക്തമായി വിശദീകരിക്കുകയും വേഗത്തിലുള്ള പരിചരണം നൽകുകയും ചെയ്തു.",
      te: "అత్యవసర సేవ అద్భుతంగా ఉంది. వైద్యులు ప్రతిదీ స్పష్టంగా వివరించి త్వరితగతిన చికిత్స అందించారు.",
      hi: "आपातकालीन सेवा उत्कृष्ट थी। डॉक्टरों ने सब कुछ स्पष्ट रूप से समझाया और तुरंत उपचार प्रदान किया।",
    },

    rating: 5,
  },
];