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
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <Container>
        <div
          id="appointment-form"
          className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-100"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* ================= LEFT SIDE ================= */}

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white sm:p-10 lg:p-12">

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                {t.appointment.badge}
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                {t.appointment.title}
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                {t.appointment.description}
              </p>

              {/* Appointment Information */}

              <div className="mt-10 space-y-5">

                {/* Flexible Scheduling */}

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      {t.appointment.flexibleScheduling}
                    </p>

                    <p className="text-sm text-blue-100">
                      {t.appointment.chooseConvenientDate}
                    </p>
                  </div>
                </div>

                {/* Quick Assistance */}

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      {t.appointment.quickAssistance}
                    </p>

                    <p className="text-sm text-blue-100">
                      {t.appointment.teamWillContact}
                    </p>
                  </div>
                </div>

                {/* Need Help */}

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      {t.appointment.needHelp}
                    </p>

                    <p className="text-sm text-blue-100">
                      {t.appointment.contactHospitalTeam}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div className="p-8 sm:p-10 lg:p-12">

              {submitted ? (

                /* ================= SUCCESS ================= */

                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                  <div className="rounded-full bg-green-100 p-4 text-green-600">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {t.appointment.appointmentRequestSent}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    {t.appointment.thankYou}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                  >
                    {t.appointment.bookAnotherAppointment}
                  </button>

                </div>

              ) : (

                /* ================= FORM ================= */

                <form onSubmit={handleSubmit}>

                  {/* Form Heading */}

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                      {t.appointment.appointmentRequest}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      {t.appointment.formTitle}
                    </h3>
                  </div>

                  {/* Patient Name + Phone */}

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">

                    {/* Patient Name */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.patientName}
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder={t.appointment.patientNamePlaceholder}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Phone */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.phoneNumber}
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.appointment.phoneNumberPlaceholder}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                  </div>

                  {/* Department + Doctor */}

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    {/* Department */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.department}
                      </label>

                      <select
                        name="department"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.preferredDoctor}
                      </label>

                      <select
                        name="doctor"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    {/* Date */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.preferredDate}
                      </label>

                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Time */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        {t.appointment.preferredTime}
                      </label>

                      <select
                        name="time"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      {t.appointment.message}
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder={
                        t.appointment.messagePlaceholder
                      }
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={18} />

                    {loading
                      ? t.appointment.sendingRequest
                      : t.appointment.requestAppointment}
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-400">
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