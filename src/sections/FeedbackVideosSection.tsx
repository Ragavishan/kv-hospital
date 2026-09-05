"use client";

import { useEffect, useState } from "react";
import { Maximize2, Play, Sparkles, X } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { useLanguage } from "@/components/common/LanguageProvider";

type FeedbackVideo = {
  id: number;
  video: string;
  title: string;
};

const feedbackVideos: FeedbackVideo[] = [
  {
    id: 1,
    video: "/videos/feedback/feedback-1.mp4",
    title: "Patient Feedback",
  },
  {
    id: 2,
    video: "/videos/feedback/feedback-2.mp4",
    title: "Patient Feedback",
  },
  {
    id: 3,
    video: "/videos/feedback/feedback-3.mp4",
    title: "Patient Feedback",
  },
  {
    id: 4,
    video: "/videos/feedback/feedback-4.mp4",
    title: "Patient Feedback",
  },
  {
    id: 5,
    video: "/videos/feedback/feedback-5.mp4",
    title: "Patient Feedback",
  },
  {
    id: 6,
    video: "/videos/feedback/feedback-6.mp4",
    title: "Patient Feedback",
  },
  {
    id: 7,
    video: "/videos/feedback/feedback-7.mp4",
    title: "Patient Feedback",
  },
  {
    id: 8,
    video: "/videos/feedback/feedback-8.mp4",
    title: "Patient Feedback",
  },
];

const content = {
  en: {
    eyebrow: "Patient Stories",
    title: "Real Experiences",
    highlight: "Real Trust",
    description:
      "Hear directly from our patients about their experience, care and journey with Iswarya Hospital.",

    centerTitle: "Your Trust",
    centerHighlight: "Our Strength",
    centerText:
      "Every patient's journey inspires us to provide compassionate and trusted healthcare.",

    clickToWatch: "Click to watch",
  },

  ta: {
    eyebrow: "நோயாளிகளின் அனுபவங்கள்",
    title: "உண்மையான அனுபவங்கள்",
    highlight: "உண்மையான நம்பிக்கை",
    description:
      "ஐஸ்வர்யா மருத்துவமனையில் எங்கள் நோயாளிகள் பெற்ற சிகிச்சை மற்றும் அனுபவங்களை நேரடியாக கேளுங்கள்.",

    centerTitle: "உங்கள் நம்பிக்கை",
    centerHighlight: "எங்கள் பலம்",
    centerText:
      "ஒவ்வொரு நோயாளியின் பயணமும் அன்பான மற்றும் நம்பகமான மருத்துவ சேவையை வழங்க எங்களை ஊக்குவிக்கிறது.",

    clickToWatch: "பார்க்க கிளிக் செய்யவும்",
  },

  ml: {
    eyebrow: "രോഗികളുടെ അനുഭവങ്ങൾ",
    title: "യഥാർത്ഥ അനുഭവങ്ങൾ",
    highlight: "യഥാർത്ഥ വിശ്വാസം",
    description:
      "ഇശ്വര്യ ഹോസ്പിറ്റലിലെ ഞങ്ങളുടെ രോഗികളുടെ ചികിത്സാ അനുഭവങ്ങൾ നേരിട്ട് കേൾക്കൂ.",

    centerTitle: "നിങ്ങളുടെ വിശ്വാസം",
    centerHighlight: "ഞങ്ങളുടെ ശക്തി",
    centerText:
      "ഓരോ രോഗിയുടെയും യാത്രയും മികച്ചതും കരുതലുള്ളതുമായ ആരോഗ്യ സേവനം നൽകാൻ ഞങ്ങളെ പ്രചോദിപ്പിക്കുന്നു.",

    clickToWatch: "കാണാൻ ക്ലിക്ക് ചെയ്യുക",
  },

  te: {
    eyebrow: "రోగుల అనుభవాలు",
    title: "నిజమైన అనుభవాలు",
    highlight: "నిజమైన నమ్మకం",
    description:
      "ఇశ్వర్య హాస్పిటల్‌లో మా రోగులు పొందిన చికిత్స మరియు అనుభవాలను నేరుగా వినండి.",

    centerTitle: "మీ నమ్మకం",
    centerHighlight: "మా బలం",
    centerText:
      "ప్రతి రోగి ప్రయాణం ప్రేమతో మరియు నమ్మకమైన ఆరోగ్య సేవలను అందించడానికి మాకు ప్రేరణ ఇస్తుంది.",

    clickToWatch: "చూడటానికి క్లిక్ చేయండి",
  },

  hi: {
    eyebrow: "मरीजों के अनुभव",
    title: "वास्तविक अनुभव",
    highlight: "वास्तविक विश्वास",
    description:
      "इश्वर्या हॉस्पिटल में हमारे मरीजों के उपचार और अनुभवों को सीधे सुनें।",

    centerTitle: "आपका विश्वास",
    centerHighlight: "हमारी ताकत",
    centerText:
      "हर मरीज की यात्रा हमें बेहतर, भरोसेमंद और संवेदनशील स्वास्थ्य सेवा देने के लिए प्रेरित करती है।",

    clickToWatch: "देखने के लिए क्लिक करें",
  },
};
export default function FeedbackVideosSection() {
  const { language } = useLanguage();

  const currentContent =
    content[language as keyof typeof content] ?? content.en;

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo]);

  return (
    <>
      <Section
        id="feedback-videos"
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          lg:py-28
        "
      >
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0b6b78]/[0.025]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -left-32
              top-20
              h-72
              w-72
              rounded-full
              bg-[#dff6f7]
              blur-3xl
              opacity-40
            "
          />

          <div
            className="
              absolute
              -right-32
              bottom-10
              h-72
              w-72
              rounded-full
              bg-[#e8f7f3]
              blur-3xl
              opacity-40
            "
          />
        </div>

        <Container className="relative z-10">
          {/* SECTION HEADER */}
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-4">
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#0b6b78]/10
                bg-[#0b6b78]/5
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0b6b78]
              "
            >
              <Sparkles className="h-4 w-4" />
              {currentContent.eyebrow}
            </div>

            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              {currentContent.title}{" "}
              <span className="text-[#0b6b78]">
                {currentContent.highlight}
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
              "
            >
              {currentContent.description}
            </p>
          </div>

          {/* ==================================================
              DESKTOP SUN / ORBIT STRUCTURE
              SAME STRUCTURE
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-16
              hidden
              h-[820px]
              w-full
              max-w-[1200px]
              lg:block
            "
          >
            {/* OUTER ORBIT */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[720px]
                w-[720px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#0b6b78]/10
              "
            />

            {/* INNER DASHED ORBIT */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[610px]
                w-[610px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#0b6b78]/15
              "
            />

            {/* CENTER GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0b6b78]/5
                blur-2xl
              "
            />

            {/* ==================================================
                CENTER CIRCLE
                EMPTY
            ================================================== */}
            {/* CENTER CONTENT CIRCLE */}
            <div
            className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[390px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[10px]
                border-white
                bg-white
                p-12
                text-center
                shadow-[0_25px_80px_rgba(11,107,120,0.15)]
            "
            >
            <div>
                <div
                className="
                    mx-auto
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0b6b78]/10
                    text-[#0b6b78]
                "
                >
                <Sparkles className="h-6 w-6" />
                </div>

                <h3
                className="
                    text-3xl
                    font-semibold
                    leading-tight
                    text-slate-900
                "
                >
                {currentContent.centerTitle}
                </h3>

                <div
                className="
                    mt-1
                    text-3xl
                    font-semibold
                    leading-tight
                    text-[#0b6b78]
                "
                >
                {currentContent.centerHighlight}
                </div>

                <p
                className="
                    mx-auto
                    mt-5
                    max-w-[260px]
                    text-sm
                    leading-7
                    text-slate-600
                "
                >
                {currentContent.centerText}
                </p>
            </div>
            </div>

            {/* ==================================================
                AUTOMATIC 8 VIDEO ORBIT
            ================================================== */}
            {feedbackVideos.slice(0, 8).map((item, index) => {
              const total = Math.min(feedbackVideos.length, 8);

              const angle = -90 + (360 / total) * index;

              return (
                <VideoOrb
                  key={item.id}
                  item={item}
                  angle={angle}
                  onOpen={() => setSelectedVideo(item.video)}
                />
              );
            })}
          </div>

          {/* ==================================================
              MOBILE STRUCTURE
          ================================================== */}
          <div className="lg:hidden">
            {/* Empty center circle */}
            <div className="mx-auto mb-10 flex max-w-md justify-center">
              <div
                className="
                  flex
                  aspect-square
                  w-full
                  max-w-[360px]
                  items-center
                  justify-center
                  rounded-full
                  border-[8px]
                  border-white
                  bg-white
                  p-10
                  text-center
                  shadow-[0_20px_60px_rgba(11,107,120,0.14)]
                  ring-1
                  ring-[#0b6b78]/10
                "
              />
            </div>

            {/* Mobile videos */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {feedbackVideos.slice(0, 8).map((item) => (
                <VideoOrbMobile
                  key={item.id}
                  item={item}
                  onOpen={() => setSelectedVideo(item.video)}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ==================================================
          VIDEO MODAL
      ================================================== */}
      {selectedVideo && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setSelectedVideo(null)}
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="
              relative
              flex
              max-h-[92vh]
              w-full
              max-w-5xl
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="
                max-h-[90vh]
                w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ==================================================
   DESKTOP VIDEO ORB
================================================== */

function VideoOrb({
  item,
  angle,
  onOpen,
}: {
  item: FeedbackVideo;
  angle: number;
  onOpen: () => void;
}) {
  const radius = 340;

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Watch ${item.title}`}
      className="
        group
        absolute
        left-1/2
        top-1/2
        h-[205px]
        w-[205px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-full
        border-[6px]
        border-white
        bg-white
        shadow-[0_15px_45px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
        hover:scale-110
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.25)]
        xl:h-[225px]
        xl:w-[225px]
      "
      style={{
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
    >
      {/* ==================================================
          ACTUAL VIDEO PREVIEW
          ALL 1-8 VIDEOS AUTO PLAY
      ================================================== */}
      <video
        src={item.video}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          rounded-full
          object-cover
        "
      />

      {/* Soft overlay */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-black/10
          transition
          duration-300
          group-hover:bg-black/0
        "
      />

      {/* Play button */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-[#0b6b78]
          shadow-lg
          backdrop-blur-sm
          transition
          duration-300
          group-hover:scale-110
        "
      >
        <Play className="ml-1 h-5 w-5 fill-current" />
      </span>

      {/* Number */}
      <span
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          rounded-full
          bg-black/55
          px-3
          py-1
          text-xs
          font-semibold
          text-white
          backdrop-blur-sm
        "
      >
        {String(item.id).padStart(2, "0")}
      </span>

      {/* Expand */}
      <span
        className="
          absolute
          right-4
          top-4
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white/85
          text-[#0b6b78]
          shadow-md
          backdrop-blur-sm
        "
      >
        <Maximize2 className="h-4 w-4" />
      </span>
    </button>
  );
}

/* ==================================================
   MOBILE VIDEO ORB
================================================== */

function VideoOrbMobile({
  item,
  onOpen,
}: {
  item: FeedbackVideo;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Watch ${item.title}`}
      className="
        group
        relative
        aspect-square
        w-full
        overflow-hidden
        rounded-full
        border-4
        border-white
        bg-white
        shadow-[0_12px_35px_rgba(0,0,0,0.15)]
        transition
        duration-300
        hover:scale-105
      "
    >
      {/* ACTUAL VIDEO PREVIEW */}
      <video
        src={item.video}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          rounded-full
          object-cover
        "
      />

      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-black/10
        "
      />

      {/* Play */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-11
          w-11
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-[#0b6b78]
          shadow-lg
        "
      >
        <Play className="ml-1 h-4 w-4 fill-current" />
      </span>

      {/* Number */}
      <span
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          rounded-full
          bg-black/55
          px-2.5
          py-1
          text-[10px]
          font-semibold
          text-white
        "
      >
        {String(item.id).padStart(2, "0")}
      </span>
    </button>
  );
}