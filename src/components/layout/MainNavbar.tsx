"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to appointment form
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

  // Navigation link click
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
      setIsScrolled(window.scrollY > 50);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const element = section as HTMLElement;
        const top = element.offsetTop - 120;
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="text-2xl font-bold text-blue-700"
        >
          KV Hospital
        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
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
                  className={`font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Book Appointment */}

        <div className="hidden md:block">
          <button
            type="button"
            onClick={handleBookAppointment}
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white shadow-md md:hidden">
          <ul className="space-y-4 p-6">

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
                    className={`block font-medium transition ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-700 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}

            {/* Mobile Book Appointment */}

            <li>
              <button
                type="button"
                onClick={handleBookAppointment}
                className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-800"
              >
                Book Appointment
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}