"use client";

import Image from "next/image";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

export default function DoctorCard({
  name,
  specialization,
  experience,
  image,
}: DoctorCardProps) {
  const handleBookAppointment = () => {
    const section = document.getElementById("appointment");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Doctor Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="h-72 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Doctor Details */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-800">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-blue-700">
          {specialization}
        </p>

        <p className="mt-2 text-slate-500">
          {experience}
        </p>

        <button
          onClick={handleBookAppointment}
          className="mt-6 w-full rounded-xl bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Book Appointment
        </button>

      </div>

    </div>
  );
}