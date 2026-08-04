"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";
import Button from "@/components/ui/Button";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
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

        {/* Desktop Button */}

        <div className="hidden md:block">
          <Button text="Book Appointment" />
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="space-y-4 p-6">

            {navigation.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "");

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition ${
                      isActive
                        ? "text-blue-700"
                        : "hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}

            <Button text="Book Appointment" />

          </ul>
        </div>
      )}
    </nav>
  );
}