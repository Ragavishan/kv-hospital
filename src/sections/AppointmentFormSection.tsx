import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import AppointmentForm from "@/components/forms/AppointmentForm";
import Section from "@/components/animations/Section";

export default function AppointmentFormSection() {
  return (
    <section id="appointment-form" className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="Appointment"
            title="Book an Appointment"
            description="Fill in the form below and our team will contact you shortly."
          />

          <div className="mx-auto max-w-3xl">
            <AppointmentForm />
          </div>
        </Container>
      </Section>
    </section>
  );
}