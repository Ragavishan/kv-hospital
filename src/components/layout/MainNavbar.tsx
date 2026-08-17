"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  CalendarCheck2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { navigation } from "@/constants/navigation";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const element = section as HTMLElement;
        const top = element.offsetTop - 150;
        const bottom = top + element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(
            navigation[index].href.replace("#", "")
          );
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(event, "#home")
          }
          className="group flex items-center gap-3"
        >
          {/* Logo */}

          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
            <Image
              src="/images/kv-hospital-logo.png"
              alt="KV Hospital"
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </div>

          {/* Hospital Name */}

          <div className="leading-none">

            <h1 className="text-[18px] font-extrabold tracking-tight text-slate-900 sm:text-[19px]">
              KV Hospital
            </h1>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Multi-Speciality Care
              </p>
            </div>

          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden lg:flex lg:items-center lg:gap-8">

          {navigation.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.href)
                }
                className={`group relative py-2 text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-700 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-2/3"
                  }`}
                />
              </a>
            );
          })}

        </div>

        {/* ================= DESKTOP CTA ================= */}

        <div className="hidden lg:block">

          <button
            type="button"
            onClick={handleBookAppointment}
            className="group flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-2.5 text-[13px] font-bold text-white shadow-md shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
          >
            <CalendarCheck2
              size={17}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              Book Appointment
            </span>

            <ChevronDown
              size={14}
              className="rotate-[-90deg] opacity-70 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <button
          type="button"
          aria-label={
            isOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
        >
          {isOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="border-t border-slate-100 bg-white shadow-xl lg:hidden">

          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">

            <div className="space-y-1">

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
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                    }`}
                  >
                    <span>
                      {item.name}
                    </span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    )}
                  </a>
                );
              })}

            </div>

            {/* Mobile Appointment */}

            <div className="mt-4 border-t border-slate-100 pt-4">

              <button
                type="button"
                onClick={handleBookAppointment}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-700/20 transition-all duration-300 hover:bg-blue-800"
              >
                <CalendarCheck2 size={18} />

                Book Appointment
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}