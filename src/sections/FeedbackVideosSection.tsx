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
      "ஒவ்வொரு நோயாளியின் பயணமும் நம்பகமான மருத்துவ சேவையை வழங்க எங்களை ஊக்குவிக்கிறது.",

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
          py-14
          sm:py-20
          lg:py-28
        "
      >
        {/* ==================================================
            BACKGROUND DECORATION
        ================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0b6b78]/[0.025]
              blur-3xl
              sm:h-[700px]
              sm:w-[700px]
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
          {/* ==================================================
              SECTION HEADER
          ================================================== */}
          <div
            className="
              mx-auto
              mb-8
              max-w-3xl
              text-center
              sm:mb-12
              lg:mb-4
            "
          >
            <div
              className="
                mb-3
                inline-flex
                max-w-full
                items-center
                gap-1.5
                rounded-full
                border
                border-[#0b6b78]/10
                bg-[#0b6b78]/5
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#0b6b78]
                sm:mb-4
                sm:gap-2
                sm:px-4
                sm:py-2
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="truncate">{currentContent.eyebrow}</span>
            </div>

            <h2
              className="
                text-2xl
                font-semibold
                leading-tight
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
                mt-3
                max-w-2xl
                px-2
                text-xs
                leading-6
                text-slate-600
                sm:mt-5
                sm:px-0
                sm:text-base
                sm:leading-7
              "
            >
              {currentContent.description}
            </p>
          </div>

          {/* ==================================================
              DESKTOP + LARGE TABLET ORBIT
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-24
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

            {/* INNER ORBIT */}
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

            {/* CENTER CONTENT */}
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

                <h3 className="text-3xl font-semibold leading-tight text-slate-900">
                  {currentContent.centerTitle}
                </h3>

                <div className="mt-1 text-3xl font-semibold leading-tight text-[#0b6b78]">
                  {currentContent.centerHighlight}
                </div>

                <p className="mx-auto mt-5 max-w-[260px] text-sm leading-7 text-slate-600">
                  {currentContent.centerText}
                </p>
              </div>
            </div>

            {/* DESKTOP VIDEO ORBIT */}
            {feedbackVideos.slice(0, 8).map((item, index) => {
              const total = 8;
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
              MOBILE CIRCLE / ORBIT STRUCTURE
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-8  
              block
              h-[500px]
              w-full
              max-w-[500px]
              -translate-y-20
              sm:mt-12
              sm:h-[620px]
              sm:max-w-[620px]
              lg:hidden
            "
            style={{
              "--video-orbit-radius": "1000px",
            } as React.CSSProperties}
          >
            {/* MOBILE OUTER ORBIT */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[390px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#0b6b78]/10
                sm:h-[500px]
                sm:w-[500px]
                sm:max-lg:h-[100px]
                sm:max-lg:w-[100px]
              "
            />

            {/* MOBILE INNER ORBIT */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[315px]
                w-[315px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#0b6b78]/15
                sm:h-[410px]
                sm:w-[410px]
                sm:max-lg:h-[350px]
                sm:max-lg:w-[350px]
              "
            />

            {/* MOBILE CENTER GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0b6b78]/5
                blur-2xl
                sm:h-[330px]
                sm:w-[330px]
              "
            />

            {/* MOBILE CENTER CIRCLE */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[185px]
                w-[185px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[7px]
                border-white
                bg-white
                p-5
                text-center
                shadow-[0_20px_60px_rgba(11,107,120,0.15)]
                ring-1
                ring-[#0b6b78]/10
                sm:h-[245px]
                sm:w-[245px]
                sm:border-[8px]
                sm:p-7
              "
            >
              <div>
                <div
                  className="
                    mx-auto
                    mb-2
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0b6b78]/10
                    text-[#0b6b78]
                    sm:mb-3
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <h3
                  className="
                    text-base
                    font-semibold
                    leading-tight
                    text-slate-900
                    sm:text-xl
                  "
                >
                  {currentContent.centerTitle}
                </h3>

                <div
                  className="
                    mt-0.5
                    text-base
                    font-semibold
                    leading-tight
                    text-[#0b6b78]
                    sm:text-xl
                  "
                >
                  {currentContent.centerHighlight}
                </div>

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[145px]
                    text-[9px]
                    leading-4
                    text-slate-600
                    sm:mt-3
                    sm:max-w-[175px]
                    sm:text-xs
                    sm:leading-5
                  "
                >
                  {currentContent.centerText}
                </p>
              </div>
            </div>

            {/* MOBILE 8 VIDEO ORBIT */}
            {feedbackVideos.slice(0, 8).map((item, index) => {
              const total = 8;

              /*
                Smaller radius for mobile.
                This keeps all circles inside the screen.
              */
              const radius = 148;

              const angle = -90 + (360 / total) * index;

              return (
                <VideoOrbMobileOrbit
                  key={item.id}
                  item={item}
                  angle={angle}
                  radius={radius}
                  onOpen={() => setSelectedVideo(item.video)}
                />
              );
            })}
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
            p-3
            backdrop-blur-sm
            sm:p-4
          "
          onClick={() => setSelectedVideo(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setSelectedVideo(null)}
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              sm:right-4
              sm:top-4
              sm:h-11
              sm:w-11
            "
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* VIDEO */}
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
                max-h-[88vh]
                w-full
                rounded-xl
                object-contain
                shadow-2xl
                sm:rounded-2xl
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
  const radius = 350;

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
          transition
          duration-300
          group-hover:bg-black/0
        "
      />

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
   MOBILE ORBIT VIDEO
================================================== */

function VideoOrbMobileOrbit({
  item,
  angle,
  radius,
  onOpen,
}: {
  item: FeedbackVideo;
  angle: number;
  radius: number;
  onOpen: () => void;
}) {
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
        h-[82px]
        w-[82px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-full
        border-[4px]
        border-white
        bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        active:scale-95
        sm:h-[105px]
        sm:w-[105px]
        sm:border-[5px]

        md:max-lg:h-[100px]
        md:max-lg:w-[100px]
        md:max-lg:border-[5px]

      "
      style={{
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
    >
      {/* VIDEO PREVIEW */}
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

      {/* OVERLAY */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-black/15
        "
      />

      {/* PLAY */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-7
          w-7
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-[#0b6b78]
          shadow-lg
          sm:h-9
          sm:w-9

          md:max-lg:h-8
          md:max-lg:w-8
        "
      >
        <Play
          className="
            ml-0.5
            h-3
            w-3
            fill-current
            sm:h-4
            sm:w-4
          "
        />
      </span>

      {/* NUMBER */}
      <span
        className="
          absolute
          bottom-1.5
          left-1/2
          -translate-x-1/2
          rounded-full
          bg-black/60
          px-1.5
          py-0.5
          text-[7px]
          font-semibold
          text-white
          sm:bottom-2
          sm:px-2
          sm:text-[9px]
        "
      >
        {String(item.id).padStart(2, "0")}
      </span>

      {/* EXPAND */}
      <span
        className="
          absolute
          right-1.5
          top-1.5
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white/85
          text-[#0b6b78]
          shadow-sm
          sm:right-2
          sm:top-2
          sm:h-6
          sm:w-6
        "
      >
        <Maximize2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
      </span>
    </button>
  );
}