"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  Send,
  X,
  Sparkles,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { doctors } from "@/constants/doctors";

export default function AppointmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // First popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling
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

  const closePopup = () => {
    setIsOpen(false);
    setSubmitted(false);
    setError("");

    // Show again after 5 seconds
    setTimeout(() => {
      setIsOpen(true);
    }, 5000);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      department: formData.get("department"),
      doctor: formData.get("doctor"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit appointment request"
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-md sm:p-5">

      {/* Ambient Glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* MAIN POPUP */}
      <div className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[30px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] animate-[popupIn_0.45s_ease-out]">

        {/* Gradient Top Line */}
        <div className="absolute left-0 right-0 top-0 z-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close appointment popup"
          className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-700 shadow-xl backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-red-500 sm:right-5 sm:top-5"
        >
          <X size={21} />
        </button>

        <div className="max-h-[94vh] overflow-y-auto">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* ================================================= */}
            {/* LEFT PREMIUM PANEL */}
            {/* ================================================= */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#071a3d] via-[#102b68] to-[#4c1d95] p-7 text-white sm:p-9 lg:p-11">

              {/* Background Orbs */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute right-10 top-1/2 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative z-10">

                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-xl">
                  <Sparkles size={14} className="text-cyan-300" />
                  KV Hospital
                </div>

                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  Your Health,
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                    Our Priority.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
                  Schedule your consultation with our trusted medical
                  professionals and take the next step towards better health.
                </p>

                {/* Feature Cards */}
                <div className="mt-8 space-y-3">

                  <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20">
                      <CalendarDays size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Flexible Scheduling
                      </p>
                      <p className="mt-0.5 text-xs text-blue-200">
                        Choose a convenient date
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
                      <Stethoscope size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Experienced Doctors
                      </p>
                      <p className="mt-0.5 text-xs text-blue-200">
                        Trusted medical professionals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20">
                      <ShieldCheck size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Trusted Care
                      </p>
                      <p className="mt-0.5 text-xs text-blue-200">
                        Patient-first healthcare
                      </p>
                    </div>
                  </div>

                </div>

                {/* Contact */}
                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-blue-200">
                      Need assistance?
                    </p>
                    <p className="text-sm font-bold">
                      Our hospital team is here for you
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FORM */}
            {/* ================================================= */}

            <div className="relative bg-white p-6 sm:p-9 lg:p-10">

              {/* Small Gradient Decoration */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-100/50 blur-3xl" />

              {submitted ? (

                /* SUCCESS */
                <div className="relative flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/25">
                      <CheckCircle2 size={40} />
                    </div>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                    Successfully Submitted
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-slate-900">
                    Appointment Request Sent
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-500">
                    Thank you for choosing KV Hospital. Our team will
                    contact you shortly to confirm your appointment.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Book Another Appointment
                  </button>

                </div>

              ) : (

                /* FORM */
                <form
                  onSubmit={handleSubmit}
                  className="relative"
                >

                  {/* Heading */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      <Sparkles size={13} />
                      APPOINTMENT REQUEST
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
                      Let&apos;s get you{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        the right care.
                      </span>
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Fill in your details and our team will get in touch.
                    </p>
                  </div>

                  {/* Name + Phone */}
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Patient Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />
                    </div>

                  </div>

                  {/* Department + Doctor */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Department
                      </label>

                      <select
                        name="department"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">
                          Select Department
                        </option>

                        <option value="General Medicine">
                          General Medicine
                        </option>

                        <option value="General Surgery">
                          General Surgery
                        </option>

                        <option value="Cardiology">
                          Cardiology
                        </option>

                        <option value="Orthopedics">
                          Orthopedics
                        </option>

                        <option value="Neurology">
                          Neurology
                        </option>

                        <option value="Pediatrics">
                          Pediatrics
                        </option>

                        <option value="Emergency Care">
                          Emergency Care
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Preferred Doctor
                      </label>

                      <select
                        name="doctor"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                      >
                        <option value="">
                          Select Doctor
                        </option>

                        {doctors.map((doctor) => (
                          <option
                            key={doctor.id}
                            value={doctor.name}
                          >
                            {doctor.name} — {doctor.specialization}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Date + Time */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Preferred Date
                      </label>

                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        Preferred Time
                      </label>

                      <select
                        name="time"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                      >
                        <option value="">
                          Select Time
                        </option>

                        <option value="Morning">
                          Morning
                        </option>

                        <option value="Afternoon">
                          Afternoon
                        </option>

                        <option value="Evening">
                          Evening
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us briefly about your requirement..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-6 py-4 font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                    {loading
                      ? "Sending Request..."
                      : "Request Appointment"}
                  </button>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    Your information is handled securely.
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes popupIn {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}