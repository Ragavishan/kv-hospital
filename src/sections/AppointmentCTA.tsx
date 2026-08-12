"use client";

import Container from "@/components/common/Container";

export default function AppointmentCTA() {
  const handleBookAppointment = () => {
    const appointmentForm = document.getElementById("appointment-form");

    if (appointmentForm) {
      appointmentForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="appointment"
      className="bg-blue-700 py-20 text-white"
    >
      <Container>
        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Need Medical Assistance?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Our experienced doctors are available to provide quality
            healthcare. Book your appointment today.
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleBookAppointment}
              className="rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
            >
              Book Appointment
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}