"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-blue-200 shadow-lg"
          : "border-slate-200 shadow-sm hover:border-blue-100 hover:shadow-md"
      }`}
    >
      {/* Question */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span
          className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
            open ? "text-blue-700" : "text-slate-800"
          }`}
        >
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "rotate-180 bg-blue-700 text-white"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-7">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}