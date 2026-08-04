import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctors } from "@/constants/doctors";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-24">
      <Container>
        <SectionTitle
          subtitle="Our Doctors"
          title="Meet Our Specialists"
          description="Experienced doctors dedicated to providing quality healthcare."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialization={doctor.specialization}
              experience={doctor.experience}
              image={doctor.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}