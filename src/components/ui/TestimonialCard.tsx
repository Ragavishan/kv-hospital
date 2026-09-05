"use client";

import {
  CheckCircle2,
  MapPin,
  Quote,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/common/LanguageProvider";

interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  location,
  review,
  rating,
}: TestimonialCardProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= TESTIMONIAL CARD ================= */}
      <article
        className="
          group relative overflow-hidden
          rounded-2xl
          border border-slate-100
          bg-white
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-100
          hover:shadow-xl
        "
      >
        {/* Top Accent */}
        <div className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700" />

        {/* Card Content */}
        <div className="p-5">
          {/* Quote + Rating */}
          <div className="flex items-center justify-between gap-3">
            {/* Quote */}
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-blue-50
                text-blue-700
                transition-all duration-300
                group-hover:bg-blue-700
                group-hover:text-white
              "
            >
              <Quote size={19} />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-0.5 rounded-full bg-amber-50 px-2.5 py-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  className={
                    star <= rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  }
                />
              ))}
            </div>
          </div>

          {/* Patient Details */}
          <div className="mt-5">
            <h3 className="text-lg font-extrabold text-slate-900">
              {name}
            </h3>

            {/* Location */}
            <div className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-500">
              <MapPin
                size={14}
                className="shrink-0 text-blue-600"
              />
              <span>{location}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-slate-100" />

          {/* Bottom Row */}
          <div className="flex items-center justify-between gap-3">
            {/* Verified */}
            <div
              className="
                flex items-center gap-1.5
                rounded-full
                bg-green-50
                px-2.5 py-1.5
                text-[11px]
                font-bold
                text-green-700
              "
            >
              <CheckCircle2 size={13} />
              <span>{t.testimonials.verified}</span>
            </div>

            {/* Learn More */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
                group/btn
                inline-flex items-center gap-1
                text-xs font-bold
                text-blue-700
                transition-colors
                hover:text-blue-900
              "
            >
              Learn More
              <span
                className="
                  transition-transform duration-300
                  group-hover/btn:translate-x-1
                "
              >
                →
              </span>
            </button>
          </div>
        </div>
      </article>

      {/* ================= FEEDBACK MODAL ================= */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-slate-950/60
            px-4
            backdrop-blur-sm
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative w-full max-w-md
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close feedback"
              className="
                absolute right-4 top-4
                flex h-8 w-8
                items-center justify-center
                rounded-full
                bg-slate-100
                text-slate-600
                transition
                hover:bg-slate-200
                hover:text-slate-900
              "
            >
              <X size={17} />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-7">
              {/* Quote */}
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-700
                "
              >
                <Quote size={20} />
              </div>

              {/* Patient Name */}
              <h3 className="mt-5 pr-8 text-xl font-extrabold text-slate-900">
                {name}
              </h3>

              {/* Location */}
              <div className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-500">
                <MapPin size={14} className="text-blue-600" />
                {location}
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className={
                      star <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300"
                    }
                  />
                ))}
              </div>

              {/* Full Feedback */}
              <div className="my-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">
                  “{review}”
                </p>
              </div>

              {/* Verified */}
              <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                <CheckCircle2 size={16} />
                {t.testimonials.verified}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}