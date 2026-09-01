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
import { useLanguage } from "@/components/common/LanguageProvider";

export default function AppointmentPopup() {
  const { language, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // OPEN POPUP AFTER 20 SECONDS
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // =====================================================
  // PREVENT BACKGROUND SCROLL
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
  // CLOSE POPUP
  // =====================================================

  const closePopup = () => {
    setIsOpen(false);
    setSubmitted(false);
    setError("");

    // Show popup again after 20 seconds
    setTimeout(() => {
      setIsOpen(true);
    }, 20000);
  };

  // =====================================================
  // SUBMIT APPOINTMENT
  // =====================================================

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
          result.message || t.appointment.unableToSubmit
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : t.appointment.somethingWentWrong
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // HIDE POPUP
  // =====================================================

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-md sm:p-5">

      {/* ================================================= */}
      {/* AMBIENT GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* ================================================= */}
      {/* MAIN POPUP */}
      {/* ================================================= */}

      <div className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[30px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] animate-[popupIn_0.45s_ease-out]">

        {/* ================================================= */}
        {/* GRADIENT TOP LINE */}
        {/* ================================================= */}

        <div className="absolute left-0 right-0 top-0 z-20 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500" />

        {/* ================================================= */}
        {/* CLOSE BUTTON */}
        {/* ================================================= */}

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

                {/* ================================================= */}
                {/* PREMIUM BADGE */}
                {/* ================================================= */}

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-xl">
                  <Sparkles
                    size={14}
                    className="text-cyan-300"
                  />

                  {t.appointment.badge}
                </div>

                {/* ================================================= */}
                {/* LEFT TITLE */}
                {/* ================================================= */}

                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">

                  {t.hero.title1}

                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {t.hero.title2}
                  </span>

                </h2>

                {/* ================================================= */}
                {/* LEFT DESCRIPTION */}
                {/* ================================================= */}

                <p className="mt-5 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
                  {t.appointment.description}
                </p>

                {/* ================================================= */}
                {/* FEATURE CARDS */}
                {/* ================================================= */}

                <div className="mt-8 space-y-3">

                  {/* Flexible Scheduling */}

                  <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20">
                      <CalendarDays size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {t.appointment.flexibleScheduling}
                      </p>

                      <p className="mt-0.5 text-xs text-blue-200">
                        {t.appointment.chooseConvenientDate}
                      </p>
                    </div>

                  </div>

                  {/* Experienced Doctors */}

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
                      <Stethoscope size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {t.hero.experiencedDoctors}
                      </p>

                      <p className="mt-0.5 text-xs text-blue-200">
                        {t.about.skilledProfessionals}
                      </p>
                    </div>

                  </div>

                  {/* Trusted Care */}

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20">
                      <ShieldCheck size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        {t.about.trustedCare}
                      </p>

                      <p className="mt-0.5 text-xs text-blue-200">
                        {t.about.patientFirst}
                      </p>
                    </div>

                  </div>

                </div>

                {/* ================================================= */}
                {/* CONTACT */}
                {/* ================================================= */}

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Phone size={17} />
                  </div>

                  <div>

                    <p className="text-xs text-blue-200">
                      {t.appointment.needHelp}
                    </p>

                    <p className="text-sm font-bold">
                      {t.appointment.teamWillContact}
                    </p>

                  </div>

                </div>

              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FORM */}
            {/* ================================================= */}

            <div className="relative bg-white p-6 sm:p-9 lg:p-10">

              {/* Decoration */}

              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-100/50 blur-3xl" />

              {/* ================================================= */}
              {/* SUCCESS SCREEN */}
              {/* ================================================= */}

              {submitted ? (

                <div className="relative flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="relative">

                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/25">
                      <CheckCircle2 size={40} />
                    </div>

                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                    Success
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-slate-900">
                    {t.appointment.appointmentRequestSent}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-500">
                    {t.appointment.thankYou}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    {t.appointment.bookAnotherAppointment}
                  </button>

                </div>

              ) : (

                /* ================================================= */
                /* FORM */
                /* ================================================= */

                <form
                  onSubmit={handleSubmit}
                  className="relative"
                >

                  {/* ================================================= */}
                  {/* HEADING */}
                  {/* ================================================= */}

                  <div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-xs font-bold text-blue-700">

                      <Sparkles size={13} />

                      {t.appointment.appointmentRequest}

                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">

                      Tell us{" "}

                      <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        how we can help
                      </span>

                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {t.appointment.description}
                    </p>

                  </div>

                  {/* ================================================= */}
                  {/* NAME + PHONE */}
                  {/* ================================================= */}

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    {/* Patient Name */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.patientName}
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder={t.appointment.patientNamePlaceholder}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                    {/* Phone */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.phoneNumber}
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.appointment.phoneNumberPlaceholder}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* DEPARTMENT + DOCTOR */}
                  {/* ================================================= */}

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    {/* Department */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.department}
                      </label>

                      <select
                        name="department"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >

                        <option value="">
                          {t.appointment.selectDepartment}
                        </option>

                        <option value="General Medicine">
                          {language === "ta"
                            ? "பொது மருத்துவம்"
                            : language === "ml"
                            ? "ജനറൽ മെഡിസിൻ"
                            : language === "te"
                            ? "జనరల్ మెడిసిన్"
                            : "General Medicine"}
                        </option>

                        <option value="General Surgery">
                          {language === "ta"
                            ? "பொது அறுவை சிகிச்சை"
                            : language === "ml"
                            ? "ജനറൽ സർജറി"
                            : language === "te"
                            ? "జనరల్ సర్జరీ"
                            : "General Surgery"}
                        </option>

                        <option value="Cardiology">
                          {language === "ta"
                            ? "இதய மருத்துவம்"
                            : language === "ml"
                            ? "കാർഡിയോളജി"
                            : language === "te"
                            ? "కార్డియాలజీ"
                            : "Cardiology"}
                        </option>

                        <option value="Orthopedics">
                          {language === "ta"
                            ? "எலும்பியல்"
                            : language === "ml"
                            ? "ഓർത്തോപീഡിക്സ്"
                            : language === "te"
                            ? "ఆర్థోపెడిక్స్"
                            : "Orthopedics"}
                        </option>

                        <option value="Neurology">
                          {language === "ta"
                            ? "நரம்பியல்"
                            : language === "ml"
                            ? "ന്യൂറോളജി"
                            : language === "te"
                            ? "న్యూరాలజీ"
                            : "Neurology"}
                        </option>

                        <option value="Pediatrics">
                          {language === "ta"
                            ? "குழந்தை மருத்துவம்"
                            : language === "ml"
                            ? "പീഡിയാട്രിക്സ്"
                            : language === "te"
                            ? "పీడియాట్రిక్స్"
                            : "Pediatrics"}
                        </option>

                        <option value="Emergency Care">
                          {language === "ta"
                            ? "அவசர சிகிச்சை"
                            : language === "ml"
                            ? "എമർജൻസി കെയർ"
                            : language === "te"
                            ? "అత్యవసర వైద్యం"
                            : "Emergency Care"}
                        </option>

                      </select>

                    </div>

                    {/* Doctor */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.preferredDoctor}
                      </label>

                      <select
                        name="doctor"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                      >

                        <option value="">
                          {t.appointment.selectDoctor}
                        </option>

                        {doctors.map((doctor) => (
                          <option
                            key={doctor.id}
                            value={doctor.name.en}
                          >
                            {doctor.name[language as keyof typeof doctor.name]} —{" "}
                            {doctor.specialization[language as keyof typeof doctor.specialization]}
                          </option>
                        ))}

                      </select>

                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* DATE + TIME */}
                  {/* ================================================= */}

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">

                    {/* Date */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.preferredDate}
                      </label>

                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                      />

                    </div>

                    {/* Time */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                        {t.appointment.preferredTime}
                      </label>

                      <select
                        name="time"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-pink-500 focus:bg-white focus:ring-4 focus:ring-pink-100"
                      >

                        <option value="">
                          {t.appointment.selectTime}
                        </option>

                        <option value="Morning">
                          {t.appointment.morning}
                        </option>

                        <option value="Afternoon">
                          {t.appointment.afternoon}
                        </option>

                        <option value="Evening">
                          {t.appointment.evening}
                        </option>

                      </select>

                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* MESSAGE */}
                  {/* ================================================= */}

                  <div className="mt-4">

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                      {t.appointment.message}
                    </label>

                    <textarea
                      name="message"
                      rows={3}
                      placeholder={t.appointment.messagePlaceholder}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />

                  </div>

                  {/* ================================================= */}
                  {/* ERROR */}
                  {/* ================================================= */}

                  {error && (
                    <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  {/* ================================================= */}
                  {/* SUBMIT BUTTON */}
                  {/* ================================================= */}

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
                      ? t.appointment.sendingRequest
                      : t.appointment.requestAppointment}

                  </button>

                  {/* ================================================= */}
                  {/* FOOTER */}
                  {/* ================================================= */}

                  <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400">

                    <ShieldCheck
                      size={14}
                      className="text-emerald-500"
                    />

                    {t.appointment.confirmationNote}

                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* POPUP ANIMATION */}
      {/* ================================================= */}

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