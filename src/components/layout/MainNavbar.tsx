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
  const [isScrolled, setIsScrolled] = useState(false);

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
      facilities: "സൗകര്യങ്ങൾ",
      departments: "വിഭാഗങ്ങൾ",
      doctors: "ഡോക്ടർമാർ",
      appointment: "അപ്പോയിന്റ്മെന്റ്",
      awards: "അവാർഡുകൾ",
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
      departments: "विभाग",
      doctors: "डॉक्टर",
      appointment: "अपॉइंटमेंट",
      awards: "पुरस्कार",
      contact: "संपर्क",
    },
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
    const key =
      href.replace("#", "") as keyof typeof navTranslations.en;

    return (
      navTranslations[language as Language]?.[key] ||
      fallback
    );
  };

  // =====================================================
  // SCROLL EFFECT
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);

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
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // MOBILE BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

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
    setLanguageOpen(false);

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
    setLanguageOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =====================================================
  // CURRENT LANGUAGE
  // =====================================================

  const currentLanguage =
    languageNames[language as Language] ||
    "English";

  // =====================================================
  // LANGUAGE OPTIONS
  // =====================================================

  const languages: {
    code: Language;
    label: string;
  }[] = [
    {
      code: "en",
      label: "English",
    },
    {
      code: "ta",
      label: "தமிழ்",
    },
    {
      code: "ml",
      label: "മലയാളം",
    },
    {
      code: "te",
      label: "తెలుగు",
    },
    {
      code: "hi",
      label: "हिन्दी",
    },
  ];

  return (
    <nav
      className={`
        fixed
        left-0
        right-0
        top-0
        z-[100]
        w-full
        transition-all
        duration-500
        ${
          isScrolled
            ? `
              border-b
              border-white/10
              bg-slate-950/75
              shadow-[0_8px_30px_rgba(0,0,0,0.18)]
              backdrop-blur-2xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      -z-10
      h-32
      bg-gradient-to-b
      from-slate-950/25
      to-transparent
    "
  />
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className={`
          mx-auto
          flex
          w-full
          max-w-[1500px]
          items-center
          justify-between
          gap-5
          px-5
          transition-all
          duration-500
          sm:px-8
          lg:px-10
          xl:px-14
          ${
            isScrolled
              ? "min-h-[70px] py-2.5"
              : "min-h-[82px] py-4"
          }
        `}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(
              event,
              "#home"
            )
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
            className={`
              relative
              flex
              shrink-0
              items-center
              justify-center
              bg-transparent
              transition-all
              duration-500
              ${
                isScrolled
                  ? "h-10 w-10"
                  : "h-12 w-12"
              }
            `}
          >
            <Image
              src="/images/iswarya-hospital-logo.png"
              alt="Iswarya Hospital"
              fill
              sizes="48px"
              className="
                object-contain
                bg-transparent
                mix-blend-screen
                transition-transform
                duration-300
                group-hover:scale-105
              "
              priority
            />
          </div>

          {/* HOSPITAL NAME */}

          <div className="leading-none">
            <h1
              className={`
                font-extrabold
                tracking-[-0.035em]
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                transition-all
                duration-500
                ${
                  isScrolled
                    ? "text-[17px]"
                    : "text-[19px] sm:text-[20px]"
                }
              `}
            >
              Iswarya Hospital
            </h1>

            <div className="mt-1.5 flex items-center gap-1.5">
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_8px_rgba(96,165,250,0.8)]
                "
              />

              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/80
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                  sm:text-[9px]
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
            gap-1
            lg:flex
            xl:gap-2
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
                  rounded-lg
                  px-2.5
                  py-3
                  text-[13px]
                  font-semibold
                  text-white/85
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                  xl:px-3
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
                    bottom-1
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-white
                    shadow-[0_0_8px_rgba(255,255,255,0.45)]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "w-[70%] opacity-100"
                        : "w-0 opacity-0 group-hover:w-[55%] group-hover:opacity-100"
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

        <div
          className="
            hidden
            items-center
            gap-2.5
            lg:flex
          "
        >
          {/* LANGUAGE DROPDOWN */}

          <div className="relative">
            <button
              type="button"
              aria-label="Select language"
              aria-expanded={languageOpen}
              onClick={() =>
                setLanguageOpen(
                  !languageOpen
                )
              }
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-white/[0.08]
                px-3.5
                py-2.5
                text-[12px]
                font-bold
                text-white
                shadow-[0_4px_18px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.14]
              "
            >
              <Globe2
                size={16}
                strokeWidth={2}
              />

              <span>
                {currentLanguage}
              </span>

              <ChevronDown
                size={14}
                className={`
                  transition-transform
                  duration-300
                  ${
                    languageOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* LANGUAGE DROPDOWN */}

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
                  border-white/10
                  bg-slate-950/95
                  p-1.5
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                  animate-in
                  fade-in
                  slide-in-from-top-2
                  duration-200
                "
              >
                {languages.map(
                  ({
                    code,
                    label,
                  }) => {
                    const isSelected =
                      language === code;

                    return (
                      <button
                        key={code}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(
                            code
                          )
                        }
                        className={`
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
                          transition-all
                          duration-200
                          ${
                            isSelected
                              ? "bg-blue-600/20 text-blue-300"
                              : "text-white/85 hover:bg-white/10 hover:text-white"
                          }
                        `}
                      >
                        <span>
                          {label}
                        </span>

                        {isSelected && (
                          <Check
                            size={16}
                            className="text-blue-400"
                          />
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* BOOK APPOINTMENT */}

          <button
            type="button"
            onClick={
              handleBookAppointment
            }
            className="
              group
              inline-flex
              items-center
              gap-2
              whitespace-nowrap
              rounded-xl
              border
              border-blue-400/20
              bg-blue-600
              px-4.5
              py-3
              text-[13px]
              font-bold
              text-white
              shadow-[0_8px_24px_rgba(37,99,235,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-300/30
              hover:bg-blue-500
              hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]
              active:translate-y-0
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
            border-white/20
            bg-white/[0.08]
            p-2.5
            text-white
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-white/30
            hover:bg-white/[0.14]
            active:scale-95
            lg:hidden
          "
        >
          {isOpen ? (
            <X
              size={23}
              strokeWidth={2}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {isOpen && (
        <div
          className="
            max-h-[calc(100vh-70px)]
            overflow-y-auto
            border-t
            border-white/10
            bg-slate-950/95
            shadow-[0_20px_40px_rgba(0,0,0,0.3)]
            backdrop-blur-2xl
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
                  item.href.replace(
                    "#",
                    ""
                  );

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
                      border
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "border-blue-400/20 bg-blue-600/15 text-white"
                          : "border-transparent text-white/75 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
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
                          shadow-[0_0_8px_rgba(96,165,250,0.8)]
                        "
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* MOBILE LANGUAGE */}

            <div
              className="
                mt-5
                border-t
                border-white/10
                pt-5
              "
            >
              <div className="mb-3 flex items-center gap-2 px-1">
                <Globe2
                  size={14}
                  className="text-blue-400"
                />

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/50
                  "
                >
                  Language
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {languages.map(
                  ({
                    code,
                    label,
                  }) => {
                    const isSelected =
                      language === code;

                    return (
                      <button
                        key={code}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(
                            code
                          )
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
                          duration-200
                          ${
                            isSelected
                              ? "border-blue-400/30 bg-blue-600 text-white shadow-lg shadow-blue-950/20"
                              : "border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.08] hover:text-white"
                          }
                        `}
                      >
                        {label}

                        {isSelected && (
                          <Check
                            size={15}
                          />
                        )}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* MOBILE APPOINTMENT */}

            <div className="mt-5">
              <button
                type="button"
                onClick={
                  handleBookAppointment
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  active:scale-[0.99]
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