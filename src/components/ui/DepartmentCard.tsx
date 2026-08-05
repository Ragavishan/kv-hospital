"use client";

import { useState } from "react";

interface DepartmentCardProps {
  title: string;
  description: string;
  fullDescription: string;
  services: string[];
  icon: React.ElementType;
}

export default function DepartmentCard({
  title,
  description,
  fullDescription,
  services,
  icon: Icon,
}: DepartmentCardProps) {
  const [open, setOpen] = useState(false);

  const handleLearnMore = () => {
    console.log("Learn More Clicked");
    setOpen(true);
  };

  const handleBookAppointment = () => {
    setOpen(false);

    setTimeout(() => {
      document
        .getElementById("appointment")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      {/* Card */}
      <div className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
          <Icon size={32} />
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <button
          type="button"
          onClick={handleLearnMore}
          className="mt-6 rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white transition hover:bg-blue-800"
        >
          Learn More
        </button>

      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center gap-4">

              <div className="rounded-2xl bg-blue-100 p-4 text-blue-700">
                <Icon size={36} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {title}
                </h2>

                <p className="text-slate-500">
                  Department Information
                </p>
              </div>

            </div>

            <p className="leading-8 text-slate-600">
              {fullDescription}
            </p>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Services Offered
            </h3>

            <ul className="mt-4 space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-green-600">✔</span>
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                onClick={handleBookAppointment}
                className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Book Appointment
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}