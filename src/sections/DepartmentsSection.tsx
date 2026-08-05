import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DepartmentCard from "@/components/ui/DepartmentCard";
import { departments } from "@/constants/departments";

export default function DepartmentsSection() {
  return (
    <section id="departments" className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="Departments"
            title="Our Medical Services"
            description="We provide comprehensive healthcare services with experienced specialists."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                title={department.title}
                description={department.description}
                fullDescription={department.fullDescription}
                services={department.services}
                icon={department.icon}
              />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}