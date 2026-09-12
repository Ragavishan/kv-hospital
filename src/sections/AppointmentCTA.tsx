"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  Send,
} from "lucide-react";

import Container from "@/components/common/Container";
import { doctors } from "@/constants/doctors";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function AppointmentCTA() {
  const { t } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-slate-50 py-14 sm:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <Container>
        <div
          id="appointment-form"
          className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-100 sm:rounded-3xl"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* ================= LEFT SIDE ================= */}

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-5 text-white sm:p-10 lg:p-12">

              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                {t.appointment.badge}
              </span>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:mt-6 sm:text-4xl">
                {t.appointment.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:mt-5 sm:leading-7">
                {t.appointment.description}
              </p>

              {/* Appointment Information */}

              <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-5">

                {/* Flexible Scheduling */}

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-lg bg-white/10 p-2.5 sm:rounded-xl sm:p-3">
                    <CalendarDays size={19} className="sm:h-[21px] sm:w-[21px]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold sm:text-base">
                      {t.appointment.flexibleScheduling}
                    </p>

                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                      {t.appointment.chooseConvenientDate}
                    </p>
                  </div>
                </div>

                {/* Quick Assistance */}

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-lg bg-white/10 p-2.5 sm:rounded-xl sm:p-3">
                    <Clock3 size={19} className="sm:h-[21px] sm:w-[21px]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold sm:text-base">
                      {t.appointment.quickAssistance}
                    </p>

                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                      {t.appointment.teamWillContact}
                    </p>
                  </div>
                </div>

                {/* Need Help */}

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-lg bg-white/10 p-2.5 sm:rounded-xl sm:p-3">
                    <Phone size={19} className="sm:h-[21px] sm:w-[21px]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold sm:text-base">
                      {t.appointment.needHelp}
                    </p>

                    <p className="text-xs leading-5 text-blue-100 sm:text-sm">
                      {t.appointment.contactHospitalTeam}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div className="p-5 sm:p-10 lg:p-12">

              {submitted ? (

                /* ================= SUCCESS ================= */

                <div className="flex min-h-[380px] flex-col items-center justify-center text-center sm:min-h-[420px]">

                  <div className="rounded-full bg-green-100 p-3.5 text-green-600 sm:p-4">
                    <CheckCircle2 size={38} className="sm:h-[42px] sm:w-[42px]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 sm:mt-6 sm:text-2xl">
                    {t.appointment.appointmentRequestSent}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                    {t.appointment.thankYou}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 sm:mt-7 sm:px-6 sm:py-3 sm:text-base"
                  >
                    {t.appointment.bookAnotherAppointment}
                  </button>

                </div>

              ) : (

                /* ================= FORM ================= */

                <form onSubmit={handleSubmit}>

                  {/* Form Heading */}

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700 sm:text-sm">
                      {t.appointment.appointmentRequest}
                    </p>

                    <h3 className="mt-1.5 text-xl font-extrabold text-slate-900 sm:mt-2 sm:text-2xl">
                      {t.appointment.formTitle}
                    </h3>
                  </div>

                  {/* Patient Name + Phone */}

                  <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">

                    {/* Patient Name */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.patientName}
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder={t.appointment.patientNamePlaceholder}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>

                    {/* Phone */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.phoneNumber}
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.appointment.phoneNumberPlaceholder}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>

                  </div>

                  {/* Department + Doctor */}

                  <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5">

                    {/* Department */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.department}
                      </label>

                      <select
                        name="department"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                      >
                        <option value="">
                          {t.appointment.selectDepartment}
                        </option>

                        <option value="General Medicine">
                          {t.appointment.generalMedicine}
                        </option>

                        <option value="General Surgery">
                          {t.appointment.generalSurgery}
                        </option>

                        <option value="Cardiology">
                          {t.appointment.cardiology}
                        </option>

                        <option value="Orthopedics">
                          {t.appointment.orthopedics}
                        </option>

                        <option value="Neurology">
                          {t.appointment.neurology}
                        </option>

                        <option value="Pediatrics">
                          {t.appointment.pediatrics}
                        </option>

                        <option value="Emergency Care">
                          {t.appointment.emergencyCare}
                        </option>
                      </select>
                    </div>

                    {/* Doctor */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.preferredDoctor}
                      </label>

                      <select
                        name="doctor"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                      >
                        <option value="">
                          {t.appointment.selectDoctor}
                        </option>

                        {doctors.map((doctor) => (
                          <option
                            key={doctor.id}
                            value={doctor.name.en}
                          >
                            {doctor.name.en} —{" "}
                            {doctor.showSpecialization
                              ? doctor.specialization.en
                              : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Date + Time */}

                  <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5">

                    {/* Date */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.preferredDate}
                      </label>

                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>

                    {/* Time */}

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                        {t.appointment.preferredTime}
                      </label>

                      <select
                        name="time"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
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

                  {/* Message */}

                  <div className="mt-4 sm:mt-5">
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700 sm:mb-2 sm:text-sm">
                      {t.appointment.message}
                    </label>

                    <textarea
                      name="message"
                      rows={3}
                      placeholder={t.appointment.messagePlaceholder}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:rounded-xl sm:px-4 sm:py-3"
                    />
                  </div>

                  {/* Error */}

                  {error && (
                    <div className="mt-3 rounded-lg border border-red-100 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-700 sm:mt-4 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:mt-6 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-base"
                  >
                    <Send size={17} className="sm:h-[18px] sm:w-[18px]" />

                    {loading
                      ? t.appointment.sendingRequest
                      : t.appointment.requestAppointment}
                  </button>

                  <p className="mt-3 text-center text-[10px] leading-4 text-slate-400 sm:mt-4 sm:text-xs">
                    {t.appointment.confirmationNote}
                  </p>

                </form>
              )}

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}