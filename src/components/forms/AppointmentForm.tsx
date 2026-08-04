"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessAlert from "@/components/ui/SuccessAlert";

interface FormData {
  fullName: string;
  phone: string;
  department: string;
  date: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  date?: string;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    department: "General Medicine",
    date: "",
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

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

    if (!formData.date) {
      newErrors.date = "Please select an appointment date.";
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
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        fullName: formData.fullName,
        phone: formData.phone,
        department: formData.department,
        date: formData.date,
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
      date: "",
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
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-8 shadow-xl"
    >
      <div>
        <label className="mb-2 block font-semibold">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-700"
        />

        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-700"
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Department
        </label>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-700"
        >
          <option>General Medicine</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Neurology</option>
          <option>Pediatrics</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Preferred Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-700"
        />

        {errors.date && (
          <p className="mt-2 text-sm text-red-600">
            {errors.date}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Message
        </label>

        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your problem..."
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-700"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? "Submitting..." : "Book Appointment"}
      </button>
      {successMessage && (
        <SuccessAlert message={successMessage} />
        )}
    </form>
  );
}