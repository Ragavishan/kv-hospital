import Button from "@/components/ui/Button";
import Container from "@/components/common/Container";

export default function AppointmentCTA() {
  return (
    <section   id="appointment" className="bg-blue-700 py-20 text-white">
      <Container>
        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Need Medical Assistance?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Our experienced doctors are available to provide quality healthcare.
            Book your appointment today.
          </p>

          <div className="mt-8">
            <Button text="Book Appointment" />
          </div>

        </div>
      </Container>
    </section>
  );
}