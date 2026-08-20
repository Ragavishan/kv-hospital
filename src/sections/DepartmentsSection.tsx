import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DepartmentCard from "@/components/ui/DepartmentCard";
import { departments } from "@/constants/departments";
import { ArrowRight, Stethoscope } from "lucide-react";

export default function DepartmentsSection() {
  const handleBookAppointment = () => {
    document.getElementById("appointment-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="departments"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

      <Section>
        <Container>

          {/* Section Heading */}

          <div className="relative">
            <SectionTitle
              subtitle="Our Departments"
              title="Comprehensive Medical Services"
              description="From routine healthcare to specialized treatment, our medical departments are equipped to provide trusted care for every stage of life."
            />
          </div>

          {/* Introduction */}

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Explore our medical specialties and discover the right care
              for you and your family.
            </p>
          </div>

          {/* Department Count */}

          <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700">
            <Stethoscope size={18} />

            <span>
              {departments.length}+ Medical Departments
            </span>
          </div>

          {/* Department Cards */}

          <div className="relative mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                title={department.title}
                description={department.description}
                fullDescription={department.fullDescription}
                services={department.services}
                image={department.image}
              />
            ))}
          </div>

          {/* Bottom CTA */}

          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 px-7 py-9 text-white shadow-2xl sm:px-10 sm:py-10">

            {/* Decorations */}

            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10" />

            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

              {/* CTA Content */}

              <div className="max-w-2xl">

                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-blue-200" />

                  Need Medical Assistance?
                </div>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Find the right care for you
                </h3>

                <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                  Our experienced healthcare team is ready to help you choose
                  the right department and provide the care you need.
                </p>

              </div>

              {/* CTA Button */}

              <button
                type="button"
                onClick={handleBookAppointment}
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
              >
                Book Appointment

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>

        </Container>
      </Section>
    </section>
  );
}