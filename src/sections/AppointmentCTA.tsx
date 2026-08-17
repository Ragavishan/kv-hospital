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

export default function AppointmentCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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

            {/* LEFT SIDE */}

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white sm:p-10 lg:p-12">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                KV Hospital
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                Book Your Appointment
              </h2>

              <p className="mt-5 leading-7 text-blue-100">
                Take the first step towards better healthcare. Schedule a
                consultation with our experienced medical team.
              </p>

              {/* Appointment Information */}

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Flexible Scheduling
                    </p>

                    <p className="text-sm text-blue-100">
                      Choose a convenient date
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Quick Assistance
                    </p>

                    <p className="text-sm text-blue-100">
                      Our team will contact you
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Need Help?
                    </p>

                    <p className="text-sm text-blue-100">
                      Contact our hospital team
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="p-8 sm:p-10 lg:p-12">

              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                  <div className="rounded-full bg-green-100 p-4 text-green-600">
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Appointment Request Sent
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Thank you for contacting KV Hospital. Our team will
                    get back to you regarding your appointment.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                  >
                    Book Another Appointment
                  </button>

                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  {/* Form Heading */}

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                      Appointment Request
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      Tell us how we can help
                    </h3>
                  </div>

                  {/* Patient Name + Phone */}

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Patient Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
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
                        Department
                      </label>

                      <select
                        name="department"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                    {/* Doctor */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Preferred Doctor
                      </label>

                      <select
                        name="doctor"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    {/* Date */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Preferred Date
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
                        Preferred Time
                      </label>

                      <select
                        name="time"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly about your requirement..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Submit Button */}

                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                  >
                    <Send size={18} />
                    Request Appointment
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-400">
                    Our hospital team will contact you to confirm the
                    appointment.
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