"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck2 } from "lucide-react";
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

    if (appointmentForm) {
      appointmentForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const element = section as HTMLElement;
        const top = element.offsetTop - 140;
        const height = element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
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
          ? "border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}

        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md transition duration-300 group-hover:scale-105 group-hover:bg-blue-800">
            <span className="text-lg font-bold">KV</span>
          </div>

          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              KV Hospital
            </h1>

            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-700">
              Trusted Healthcare
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(event, item.href)
                  }
                  className={`relative py-2 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-blue-700"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-700 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Appointment Button */}

        <div className="hidden md:block">
          <button
            type="button"
            onClick={handleBookAppointment}
            className="group flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
          >
            <CalendarCheck2
              size={18}
              className="transition group-hover:scale-110"
            />

            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-xl md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-5 py-5">

            {navigation.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "");

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(event, item.href)
                    }
                    className={`block rounded-xl px-4 py-3 font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}

            <li className="pt-3">
              <button
                type="button"
                onClick={handleBookAppointment}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                <CalendarCheck2 size={19} />
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}