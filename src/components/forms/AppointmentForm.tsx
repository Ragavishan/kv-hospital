"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessAlert from "@/components/ui/SuccessAlert";
import { doctors } from "@/constants/doctors";

interface FormData {
  fullName: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  doctor?: string;
  date?: string;
  time?: string;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    department: "General Medicine",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.doctor) {
      newErrors.doctor = "Please select a doctor.";
    }

    if (!formData.date) {
      newErrors.date = "Please select an appointment date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const selectedDoctor = doctors.find(
        (doctor) => doctor.name === formData.doctor
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: formData.fullName,
          phone: formData.phone,
          department: formData.department,
          doctor: selectedDoctor?.name || formData.doctor,
          specialization: selectedDoctor?.specialization || "",
          date: formData.date,
          time: formData.time,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccessMessage(
        "✅ Appointment request submitted successfully! Our team will contact you shortly."
      );

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      setFormData({
        fullName: "",
        phone: "",
        department: "General Medicine",
        doctor: "",
        date: "",
        time: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      alert(
        "❌ Failed to send appointment request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent selecting previous dates
  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Patient Appointment
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Please provide your details and select your preferred doctor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            placeholder="Enter 10-digit phone number"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Department
          </label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Orthopedics</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Emergency Care</option>
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Select Doctor
          </label>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="">
              Select your preferred doctor
            </option>

            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name} — {doctor.specialization}
              </option>
            ))}
          </select>

          {errors.doctor && (
            <p className="mt-2 text-sm text-red-600">
              {errors.doctor}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Preferred Date
          </label>

          <input
            type="date"
            name="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          {errors.date && (
            <p className="mt-2 text-sm text-red-600">
              {errors.date}
            </p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Preferred Time
          </label>

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
          >
            <option value="">
              Select preferred time
            </option>
            <option>09:00 AM - 10:00 AM</option>
            <option>10:00 AM - 11:00 AM</option>
            <option>11:00 AM - 12:00 PM</option>
            <option>02:00 PM - 03:00 PM</option>
            <option>03:00 PM - 04:00 PM</option>
            <option>04:00 PM - 05:00 PM</option>
            <option>05:00 PM - 06:00 PM</option>
          </select>

          {errors.time && (
            <p className="mt-2 text-sm text-red-600">
              {errors.time}
            </p>
          )}
        </div>

      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Message
        </label>

        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your health concern..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isSubmitting
            ? "Submitting Appointment..."
            : "Book Appointment"}
        </button>
      </div>

      {/* Success */}
      {successMessage && (
        <div className="mt-6">
          <SuccessAlert message={successMessage} />
        </div>
      )}
    </form>
  );
}