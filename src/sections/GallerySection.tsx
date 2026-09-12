"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import Section from "@/components/animations/Section";
import {
  galleryImages,
  GalleryCategory,
} from "@/constants/gallery";
import { useLanguage } from "@/components/common/LanguageProvider";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

import { useEffect, useState } from "react";

type GalleryFilter = GalleryCategory | "all";

type Language = "en" | "ta" | "ml" | "te" | "hi";

/* =========================================================
   CATEGORY LABELS
========================================================= */

const categoryLabels: Record<
  Language,
  Record<GalleryFilter, string>
> = {
  en: {
    all: "All",
    "hospital-life": "Medical Amenities",
    team: "Our Team",
    moments: "Special Moments",
  },

  ta: {
    all: "அனைத்தும்",
    "hospital-life": "மருத்துவ வசதிகள்",
    team: "எங்கள் குழு",
    moments: "சிறப்பு தருணங்கள்",
  },

  ml: {
    all: "എല്ലാം",
    "hospital-life": "ആശുപത്രി ജീവിതം",
    team: "ഞങ്ങളുടെ ടീം",
    moments: "പ്രത്യേക നിമിഷങ്ങൾ",
  },

  te: {
    all: "అన్నీ",
    "hospital-life": "ఆసుపత్రి జీవితం",
    team: "మా బృందం",
    moments: "ప్రత్యేక క్షణాలు",
  },

  hi: {
    all: "सभी",
    "hospital-life": "अस्पताल जीवन",
    team: "हमारी टीम",
    moments: "विशेष क्षण",
  },
};

/* =========================================================
   SECTION TEXT
========================================================= */

const sectionText: Record<
  Language,
  {
    eyebrow: string;
    headingFirst: string;
    headingHighlight: string;
    description: string;
    hospital: string;
    viewFullGallery: string;
    previous: string;
    next: string;
    viewImage: string;
    close: string;
    imageOf: string;
  }
> = {
  en: {
    eyebrow: "Our Gallery",
    headingFirst: "Explore Our",
    headingHighlight: "Gallery",
    description:
      "A glimpse into our hospital environment, our people, events and memorable moments.",
    hospital: "Iswarya Hospital",
    viewFullGallery: "View Full Gallery",
    previous: "Previous image",
    next: "Next image",
    viewImage: "View image",
    close: "Close image",
    imageOf: "Image",
  },

  ta: {
    eyebrow: "சிறப்புப் பார்வை",
    headingFirst: "எங்கள்",
    headingHighlight: "புகைப்படத் தொகுப்பு",
    description:
      "எங்கள் மருத்துவமனை சூழல், பணியாளர்கள், நிகழ்வுகள் மற்றும் நினைவில் நிற்கும் தருணங்களின் ஒரு பார்வை.",
    hospital: "ஐஸ்வர்யா மருத்துவமனை",
    viewFullGallery: "முழு புகைப்படத் தொகுப்பைப் பார்க்க",
    previous: "முந்தைய படம்",
    next: "அடுத்த படம்",
    viewImage: "படத்தைப் பார்க்க",
    close: "படத்தை மூட",
    imageOf: "படம்",
  },

  ml: {
    eyebrow: "ഞങ്ങളുടെ ഗാലറി",
    headingFirst: "ഞങ്ങളുടെ",
    headingHighlight: "ഗാലറി കാണൂ",
    description:
      "ഞങ്ങളുടെ ആശുപത്രി അന്തരീക്ഷം, ജീവനക്കാർ, പരിപാടികൾ, ഓർമ്മിക്കാവുന്ന നിമിഷങ്ങൾ എന്നിവയുടെ ഒരു കാഴ്ച.",
    hospital: "ഇശ്വര്യ ഹോസ്പിറ്റൽ",
    viewFullGallery: "പൂർണ്ണ ഗാലറി കാണുക",
    previous: "മുമ്പത്തെ ചിത്രം",
    next: "അടുത്ത ചിത്രം",
    viewImage: "ചിത്രം കാണുക",
    close: "ചിത്രം അടയ്ക്കുക",
    imageOf: "ചിത്രം",
  },

  te: {
    eyebrow: "మా గ్యాలరీ",
    headingFirst: "మా",
    headingHighlight: "గ్యాలరీని చూడండి",
    description:
      "మా ఆసుపత్రి వాతావరణం, సిబ్బంది, కార్యక్రమాలు మరియు గుర్తుండిపోయే క్షణాల ఒక చూపు.",
    hospital: "ఇశ్వర్య హాస్పిటల్",
    viewFullGallery: "పూర్తి గ్యాలరీని చూడండి",
    previous: "మునుపటి చిత్రం",
    next: "తదుపరి చిత్రం",
    viewImage: "చిత్రాన్ని చూడండి",
    close: "చిత్రాన్ని మూసివేయండి",
    imageOf: "చిత్రం",
  },

  hi: {
    eyebrow: "हमारी गैलरी",
    headingFirst: "हमारी",
    headingHighlight: "गैलरी देखें",
    description:
      "हमारे अस्पताल के वातावरण, हमारी टीम, कार्यक्रमों और यादगार पलों की एक झलक।",
    hospital: "इस्वर्या हॉस्पिटल",
    viewFullGallery: "पूरी गैलरी देखें",
    previous: "पिछली तस्वीर",
    next: "अगली तस्वीर",
    viewImage: "तस्वीर देखें",
    close: "तस्वीर बंद करें",
    imageOf: "तस्वीर",
  },
};

/* =========================================================
   IMAGE TITLES
========================================================= */

const imageTitles: Record<
  Language,
  Record<number, string>
> = {
  en: {
    1: "Reception",
    2: "Intensive Care Unit",
    3: "Laboratory",
    4: "Operation Theatre",
    5: "Pharmacy",
    6: "Waiting Area",
    7: "Our Medical Team",
    8: "A New Beginning",
    9: "100 Hearts, 100 Lives",
    10: "Auspicious Beginning",
    11: "Light of Healing",
    12: "A Special Moment",
  },

  ta: {
    1: "வரவேற்பு",
    2: "தீவிர சிகிச்சைப் பிரிவு",
    3: "ஆய்வகம்",
    4: "அறுவை சிகிச்சை அறை",
    5: "மருந்தகம்",
    6: "காத்திருப்பு பகுதி",
    7: "எங்கள் மருத்துவக் குழு",
    8: "ஒரு புதிய தொடக்கம்",
    9: "100 இதயங்கள், 100 உயிர்கள்",
    10: "மங்களகரமான தொடக்கம்",
    11: "குணமளிக்கும் ஒளி",
    12: "ஒரு சிறப்பான தருணம்",
  },

  ml: {
    1: "റിസപ്ഷൻ",
    2: "തീവ്രപരിചരണ വിഭാഗം",
    3: "ലബോറട്ടറി",
    4: "ഓപ്പറേഷൻ തിയേറ്റർ",
    5: "ഫാർമസി",
    6: "കാത്തിരിപ്പ് മേഖല",
    7: "ഞങ്ങളുടെ മെഡിക്കൽ ടീം",
    8: "ഒരു പുതിയ തുടക്കം",
    9: "100 ഹൃദയങ്ങൾ, 100 ജീവനുകൾ",
    10: "മംഗളകരമായ തുടക്കം",
    11: "സൗഖ്യത്തിന്റെ പ്രകാശം",
    12: "ഒരു പ്രത്യേക നിമിഷം",
  },

  te: {
    1: "రిసెప్షన్",
    2: "ఇంటెన్సివ్ కేర్ యూనిట్",
    3: "ప్రయోగశాల",
    4: "ఆపరేషన్ థియేటర్",
    5: "ఫార్మసీ",
    6: "వేచి ఉండే ప్రదేశం",
    7: "మా వైద్య బృందం",
    8: "ఒక కొత్త ఆరంభం",
    9: "100 హృదయాలు, 100 ప్రాణాలు",
    10: "శుభారంభం",
    11: "స్వస్థత కాంతి",
    12: "ఒక ప్రత్యేక క్షణం",
  },

  hi: {
    1: "रिसेप्शन",
    2: "गहन चिकित्सा इकाई",
    3: "प्रयोगशाला",
    4: "ऑपरेशन थिएटर",
    5: "फार्मेसी",
    6: "प्रतीक्षा क्षेत्र",
    7: "हमारी मेडिकल टीम",
    8: "एक नई शुरुआत",
    9: "100 दिल, 100 जानें",
    10: "शुभ शुरुआत",
    11: "ठीक करने वाली रोशनी",
    12: "एक खास पल",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function GallerySection() {
  const { language } = useLanguage();

  const currentLanguage =
    (language as Language) || "en";

  const text = sectionText[currentLanguage];

  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("hospital-life");

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  /* =========================================================
     FILTER IMAGES
  ========================================================= */

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (item) =>
            item.category === activeCategory
        );

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (filteredImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(
        (prev) =>
          (prev + 1) % filteredImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [
    filteredImages.length,
    activeCategory,
  ]);

  /* =========================================================
     KEYBOARD + BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0
            ? filteredImages.length - 1
            : prev - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex(
          (prev) =>
            (prev + 1) % filteredImages.length
        );
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [lightboxOpen, filteredImages.length]);

  /* =========================================================
     SAFETY
  ========================================================= */

  if (filteredImages.length === 0) {
    return null;
  }

  /* =========================================================
     INDEX HELPERS
  ========================================================= */

  const getIndex = (offset: number) => {
    return (
      (activeIndex +
        offset +
        filteredImages.length) %
      filteredImages.length
    );
  };

  const currentImage =
    filteredImages[activeIndex];

  const previousImage =
    filteredImages[getIndex(-1)];

  const nextImage =
    filteredImages[getIndex(1)];

  const currentTitle =
    imageTitles[currentLanguage][
      currentImage.id
    ] || currentImage.title;

  const previousTitle =
    imageTitles[currentLanguage][
      previousImage.id
    ] || previousImage.title;

  const nextTitle =
    imageTitles[currentLanguage][
      nextImage.id
    ] || nextImage.title;

  /* =========================================================
     CONTROLS
  ========================================================= */

  const goPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0
        ? filteredImages.length - 1
        : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex(
      (prev) =>
        (prev + 1) % filteredImages.length
    );
  };

  const handleCategoryChange = (
    category: GalleryFilter
  ) => {
    setActiveCategory(category);
    setActiveIndex(0);
    setLightboxOpen(false);
  };

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        id="gallery"
        className="relative scroll-mt-24 overflow-hidden bg-white py-14 sm:py-20 md:py-24"
      >
        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-10 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-blue-50/60 blur-3xl sm:h-[500px] sm:w-[700px]" />

        <Section>
          <Container>
            {/* =================================================
                HEADING
            ================================================== */}

            <div className="relative z-10 mx-auto max-w-3xl px-2 text-center sm:px-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:mb-3 sm:text-sm sm:tracking-[0.25em]">
                {text.eyebrow}
              </p>

              <h2 className="break-words text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                {text.headingFirst}{" "}
                <span className="text-blue-600">
                  {text.headingHighlight}
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
                {text.description}
              </p>
            </div>

            {/* =================================================
                CATEGORY BUTTONS
            ================================================== */}

            <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2 px-1 sm:mt-9 sm:gap-2.5 sm:px-0">
              {(
                [
                  "all",
                  "hospital-life",
                  "team",
                  "moments",
                ] as GalleryFilter[]
              ).map((category) => {
                const isActive =
                  activeCategory === category;

                const count =
                  category === "all"
                    ? galleryImages.length
                    : galleryImages.filter(
                        (item) =>
                          item.category ===
                          category
                      ).length;

                if (count === 0) return null;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                    className={`max-w-full rounded-full px-3.5 py-2 text-[10px] font-bold leading-4 transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-xs md:px-6 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-lg"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <span className="break-words">
                      {
                        categoryLabels[
                          currentLanguage
                        ][category]
                      }
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                MAIN CAROUSEL
            ================================================== */}

            <div className="relative z-10 mt-7 sm:mt-12">
              <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                {/* LEFT PREVIEW */}

                {filteredImages.length > 1 && (
                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label={text.previous}
                    className="group hidden shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl md:block"
                  >
                    <div className="relative h-44 w-36 overflow-hidden lg:h-52 lg:w-44">
                      <Image
                        src={previousImage.image}
                        alt={previousTitle}
                        fill
                        sizes="176px"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/10" />
                    </div>
                  </button>
                )}

                {/* CENTER IMAGE */}

                <div className="group relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl sm:rounded-[1.75rem] sm:shadow-2xl">
                  <div className="relative aspect-[16/9] min-h-[220px] w-full overflow-hidden sm:min-h-[300px] md:min-h-[360px] lg:min-h-[440px]">
                    <Image
                      key={currentImage.id}
                      src={currentImage.image}
                      alt={currentTitle}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-cover transition-all duration-700 ease-out"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                    {/* Fullscreen */}

                    <button
                      type="button"
                      onClick={() =>
                        setLightboxOpen(true)
                      }
                      aria-label={text.viewImage}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-800 shadow-lg backdrop-blur transition-all duration-300 sm:right-5 sm:top-5 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-105"
                    >
                      <Maximize2
                        size={16}
                        className="sm:h-[18px] sm:w-[18px]"
                      />
                    </button>

                    {/* Caption */}

                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 sm:p-6 sm:pb-8 md:p-8">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-blue-200 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
                        {text.hospital}
                      </p>

                      <h3 className="max-w-[90%] break-words text-base font-extrabold leading-tight text-white sm:text-xl md:text-2xl">
                        {currentTitle}
                      </h3>
                    </div>

                    {/* DOTS */}

                    {filteredImages.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 flex max-w-[70%] -translate-x-1/2 items-center gap-1.5 overflow-hidden sm:bottom-5 sm:gap-2">
                        {filteredImages.map(
                          (image, index) => (
                            <button
                              key={image.id}
                              type="button"
                              onClick={() =>
                                setActiveIndex(
                                  index
                                )
                              }
                              aria-label={`${text.imageOf} ${
                                index + 1
                              }`}
                              className={`shrink-0 rounded-full transition-all duration-300 ${
                                index ===
                                activeIndex
                                  ? "h-2 w-6 bg-white shadow-lg sm:h-2.5 sm:w-7"
                                  : "h-2 w-2 bg-white/60 hover:bg-white sm:h-2.5 sm:w-2.5"
                              }`}
                            />
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT PREVIEW */}

                {filteredImages.length > 1 && (
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={text.next}
                    className="group hidden shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl md:block"
                  >
                    <div className="relative h-44 w-36 overflow-hidden lg:h-52 lg:w-44">
                      <Image
                        src={nextImage.image}
                        alt={nextTitle}
                        fill
                        sizes="176px"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/10" />
                    </div>
                  </button>
                )}
              </div>

              {/* =================================================
                  MOBILE CONTROLS
              ================================================== */}

              {filteredImages.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label={text.previous}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <span className="min-w-[50px] text-center text-[11px] font-bold text-slate-500">
                    {activeIndex + 1} /{" "}
                    {filteredImages.length}
                  </span>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={text.next}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* =================================================
                VIEW FULL GALLERY
            ================================================== */}

            <div className="relative z-10 mt-7 px-2 text-center sm:mt-10 sm:px-0">
              <Link
                href="/gallery"
                className="inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold leading-5 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="break-words">
                  {text.viewFullGallery}
                </span>

                <ChevronRight
                  size={16}
                  className="shrink-0 sm:h-[17px] sm:w-[17px]"
                />
              </Link>
            </div>
          </Container>
        </Section>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-md sm:p-4"
          onClick={() =>
            setLightboxOpen(false)
          }
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() =>
                setLightboxOpen(false)
              }
              aria-label={text.close}
              className="absolute right-0 -top-12 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:-right-1 sm:-top-14 sm:h-10 sm:w-10"
            >
              <span className="text-xl leading-none sm:text-2xl">
                ×
              </span>
            </button>

            {/* PREVIOUS */}

            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={goPrevious}
                aria-label={text.previous}
                className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-white/20 sm:left-3 sm:h-11 sm:w-11 md:-left-16"
              >
                <ChevronLeft
                  size={19}
                  className="sm:h-[22px] sm:w-[22px]"
                />
              </button>
            )}

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl sm:rounded-3xl">
              <div className="relative aspect-[4/3] max-h-[72vh] w-full sm:aspect-[16/10] sm:max-h-[80vh]">
                <Image
                  src={currentImage.image}
                  alt={currentTitle}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* NEXT */}

            {filteredImages.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                aria-label={text.next}
                className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-white/20 sm:right-3 sm:h-11 sm:w-11 md:-right-16"
              >
                <ChevronRight
                  size={19}
                  className="sm:h-[22px] sm:w-[22px]"
                />
              </button>
            )}

            {/* CAPTION */}

            <div className="mt-3 px-8 text-center sm:mt-4 sm:px-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300 sm:text-xs sm:tracking-[0.2em]">
                {text.hospital}
              </p>

              <h3 className="mt-1 break-words text-base font-bold leading-tight text-white sm:text-xl">
                {currentTitle}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}