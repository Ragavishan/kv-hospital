"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="group fixed bottom-48 right-6 z-50 flex items-center"
    >
      {/* Hover Label */}
      <span className="mr-3 hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg transition-all duration-300 group-hover:block">
        Back to Top
      </span>

      {/* Button */}
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-slate-900 group-hover:text-white group-hover:shadow-2xl">
        <ChevronUp
          size={22}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </span>
    </button>
  );
}