"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  CalendarCheck2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { navigation } from "@/constants/navigation";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
          {/* CIRCULAR LOGO */}

          <div
            className="
              relative
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-white
              shadow-lg
              ring-2
              ring-white/30
              transition-all
            "
          >
            <Image
              src="/images/kv-hospital-logo.png"
              alt="KV Hospital"
              fill
              sizes="48px"
              className="object-contain scale-[1.18]" 
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
              KV Hospital
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
                {item.name}

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
            DESKTOP BOOK APPOINTMENT
        =================================================== */}

        <div className="hidden lg:block">
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
              Book Appointment
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
                      {item.name}
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

            {/* MOBILE APPOINTMENT */}

            <div
              className="
                mt-5
                border-t
                border-white/15
                pt-5
              "
            >
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
                  Book Appointment
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
