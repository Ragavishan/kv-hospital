"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  CalendarCheck2,
  ArrowRight,
  Globe2,
  ChevronDown,
  Check,
} from "lucide-react";
import Image from "next/image";
import { navigation } from "@/constants/navigation";
import { useLanguage } from "@/components/common/LanguageProvider";

type Language = "en" | "ta" | "ml" | "te" | "hi";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { language, setLanguage } = useLanguage();

  // =====================================================
  // NAVIGATION TRANSLATIONS
  // =====================================================

  const navTranslations: Record<
    Language,
    Record<string, string>
  > = {
    en: {
      home: "Home",
      about: "About",
      facilities: "Facilities",
      departments: "Departments",
      doctors: "Doctors",
      appointment: "Appointment",
      awards: "Awards",
      contact: "Contact",
    },

    ta: {
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      facilities: "சேவைகள்",
      departments: "துறைகள்",
      doctors: "மருத்துவர்கள்",
      appointment: "முன்பதிவு",
      awards: "விருதுகள்",
      contact: "தொடர்பு",
    },

    ml: {
      home: "ഹോം",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      facilities:"സൗകര്യങ്ങൾ",
      departments: "വിഭാഗങ്ങൾ",
      doctors: "ഡോക്ടർമാർ",
      appointment: "അപ്പോയിന്റ്മെന്റ്",
      awards:"അവാർഡുകൾ",
      contact: "ബന്ധപ്പെടുക",
    },

    te: {
      home: "హోమ్",
      about: "మా గురించి",
      facilities: "సౌకర్యాలు",
      departments: "విభాగాలు",
      doctors: "వైద్యులు",
      appointment: "అపాయింట్‌మెంట్",
      awards: "అవార్డులు",
      contact: "సంప్రదించండి",
    },

    hi: {
      home: "होम",
      about: "हमारे बारे में",
      facilities: "सुविधाएँ",
      doctors: "डॉक्टर",
      departments: "विभाग",
      awards: "पुरस्कार",
      contact: "संपर्क",
    }
  };

  // =====================================================
  // LANGUAGE NAMES
  // =====================================================

  const languageNames: Record<Language, string> = {
    en: "English",
    ta: "தமிழ்",
    ml: "മലയാളം",
    te: "తెలుగు",
    hi: "हिन्दी",
  };

  // =====================================================
  // GET NAVIGATION LABEL
  // =====================================================

  const getNavLabel = (
    href: string,
    fallback: string
  ) => {
    const key = href.replace("#", "") as keyof typeof navTranslations.en;

    return (
      navTranslations[language as Language]?.[key] ||
      fallback
    );
  };

  // =====================================================
  // LANGUAGE CHANGE
  // =====================================================

  const handleLanguageChange = (
    selectedLanguage: Language
  ) => {
    setLanguage(selectedLanguage);
    setLanguageOpen(false);
    setIsOpen(false);
  };

  // =====================================================
  // BOOK APPOINTMENT
  // =====================================================

  const handleBookAppointment = () => {
    setIsOpen(false);

    const appointmentForm =
      document.getElementById("appointment-form") ||
      document.getElementById("appointment");

    appointmentForm?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =====================================================
  // ACTIVE SECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const element = section as HTMLElement;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          150;

        const bottom =
          top + element.offsetHeight;

        if (
          scrollY >= top &&
          scrollY < bottom
        ) {
          setActiveSection(
            navigation[index].href.replace("#", "")
          );
        }
      });
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // CURRENT LANGUAGE
  // =====================================================

  const currentLanguage =
    languageNames[language as Language] ||
    "English";

  return (
    <nav
      className="
        absolute
        left-0
        right-0
        top-0
        z-50
        w-full
        bg-transparent
      "
    >
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[82px]
          w-full
          max-w-[1500px]
          items-center
          justify-between
          gap-5
          px-5
          py-4
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(event, "#home")
          }
          className="
            group
            flex
            shrink-0
            items-center
            gap-3
          "
        >
          {/* LOGO */}

          <div
            className="
              relative
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              bg-transparent
            "
          >
            <Image
              src="/images/iswarya-hospital-logo.png"
              alt="Iswarya Hospital"
              fill
              sizes="48px"
              className="object-contain bg-transparent mix-blend-screen"
              priority
            />
          </div>

          {/* HOSPITAL NAME */}

          <div className="leading-none">
            <h1
              className="
                text-[19px]
                font-extrabold
                tracking-[-0.025em]
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                sm:text-[20px]
              "
            >
              Iswarya Hospital
            </h1>

            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/85
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                "
              >
                Multi-Speciality Care
              </p>
            </div>
          </div>
        </a>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <div
          className="
            hidden
            items-center
            gap-6
            lg:flex
            xl:gap-8
          "
        >
          {navigation.map((item) => {
            const isActive =
              activeSection ===
              item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.href
                  )
                }
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-3
                  text-[13px]
                  font-semibold
                  text-white/90
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {getNavLabel(
                  item.href,
                  item.name
                )}

                {/* ACTIVE UNDERLINE */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-2/3"
                    }
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* ===================================================
            DESKTOP RIGHT SIDE
        =================================================== */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* LANGUAGE DROPDOWN */}

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setLanguageOpen(!languageOpen)
              }
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/25
                bg-white/10
                px-3.5
                py-2.5
                text-[12px]
                font-bold
                text-white
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              <Globe2 size={16} />

              <span>
                {currentLanguage}
              </span>

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  languageOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {/* DROPDOWN */}

            {languageOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-[calc(100%+10px)]
                  w-44
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/20
                  bg-slate-950/95
                  p-1.5
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {/* ENGLISH */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("en")
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  <span>English</span>

                  {language === "en" && (
                    <Check
                      size={16}
                      className="text-blue-400"
                    />
                  )}
                </button>

                {/* TAMIL */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("ta")
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  <span>தமிழ்</span>

                  {language === "ta" && (
                    <Check
                      size={16}
                      className="text-blue-400"
                    />
                  )}
                </button>

                {/* MALAYALAM */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("ml")
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  <span>മലയാളം</span>

                  {language === "ml" && (
                    <Check
                      size={16}
                      className="text-blue-400"
                    />
                  )}
                </button>

                {/* TELUGU */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("te")
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  <span>తెలుగు</span>

                  {language === "te" && (
                    <Check
                      size={16}
                      className="text-blue-400"
                    />
                  )}
                </button>

                {/* HINDI */}

                <button
                  type="button"
                  onClick={() =>
                  handleLanguageChange("hi")
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-white/10
                "
              >
                <span>हिन्दी</span>

                {language === "hi" && (
                  <Check
                    size={16}
                    className="text-blue-400"
                  />
                )}
              </button>
              </div>
            )}
          </div>

          {/* BOOK APPOINTMENT */}

          <button
            type="button"
            onClick={handleBookAppointment}
            className="
              group
              inline-flex
              items-center
              gap-2
              whitespace-nowrap
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-[13px]
              font-bold
              text-white
              shadow-lg
              shadow-blue-950/30
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-500
              hover:shadow-xl
            "
          >
            <CalendarCheck2
              size={17}
              strokeWidth={2}
            />

            <span>
              {navTranslations[
                language as Language
              ]?.appointment ||
                "Book Appointment"}
            </span>

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            rounded-xl
            border
            border-white/25
            bg-black/10
            p-2.5
            text-white
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-black/20
            lg:hidden
          "
        >
          {isOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {isOpen && (
        <div
          className="
            border-t
            border-white/15
            bg-slate-950/90
            backdrop-blur-xl
            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-5
              py-5
              sm:px-6
            "
          >
            {/* MOBILE LINKS */}

            <div className="space-y-1.5">
              {navigation.map((item) => {
                const isActive =
                  activeSection ===
                  item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        item.href
                      )
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    <span>
                      {getNavLabel(
                        item.href,
                        item.name
                      )}
                    </span>

                    {isActive && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-blue-400
                        "
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* =================================================
                MOBILE LANGUAGE
            ================================================= */}

            <div
              className="
                mt-5
                border-t
                border-white/15
                pt-5
              "
            >
              <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                Language
              </p>

              <div className="grid grid-cols-2 gap-2">

                {/* ENGLISH */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("en")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    ${
                      language === "en"
                        ? "border-blue-400/50 bg-blue-600 text-white"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }
                  `}
                >
                  English

                  {language === "en" && (
                    <Check size={15} />
                  )}
                </button>

                {/* TAMIL */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("ta")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    ${
                      language === "ta"
                        ? "border-blue-400/50 bg-blue-600 text-white"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }
                  `}
                >
                  தமிழ்

                  {language === "ta" && (
                    <Check size={15} />
                  )}
                </button>

                {/* MALAYALAM */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("ml")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    ${
                      language === "ml"
                        ? "border-blue-400/50 bg-blue-600 text-white"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }
                  `}
                >
                  മലയാളം

                  {language === "ml" && (
                    <Check size={15} />
                  )}
                </button>

                {/* TELUGU */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("te")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    ${
                      language === "te"
                        ? "border-blue-400/50 bg-blue-600 text-white"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }
                  `}
                >
                  తెలుగు

                  {language === "te" && (
                    <Check size={15} />
                  )}
                </button>

                {/* HINDI */}

                <button
                  type="button"
                  onClick={() =>
                    handleLanguageChange("hi")
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-bold
                    transition-all
                  ${
                    language === "hi"
                      ? "border-blue-400/50 bg-blue-600 text-white"
                      : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                  }
                `}
              >
                हिन्दी

                {language === "hi" && (
                  <Check size={15} />
                )}
              </button>

            </div>
          </div>

            {/* =================================================
                MOBILE APPOINTMENT
            ================================================= */}

            <div className="mt-5">
              <button
                type="button"
                onClick={handleBookAppointment}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-blue-500
                "
              >
                <CalendarCheck2
                  size={18}
                />

                <span>
                  {navTranslations[
                    language as Language
                  ]?.appointment ||
                    "Book Appointment"}
                </span>

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}