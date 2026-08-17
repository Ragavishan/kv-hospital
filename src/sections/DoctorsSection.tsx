import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import DoctorCard from "@/components/ui/DoctorCard";
import { doctors } from "@/constants/doctors";

export default function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background Decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <Section>
        <Container>

          {/* Heading */}

          <SectionTitle
            subtitle="Our Medical Team"
            title="Meet Our Experienced Doctors"
            description="Our dedicated team of healthcare professionals is committed to providing trusted medical care with experience, compassion, and attention to every patient."
          />

          {/* Introduction */}

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Meet the doctors who bring medical expertise, experience, and
              compassionate care to every patient at KV Hospital.
            </p>
          </div>

          {/* Doctors */}

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                qualification={doctor.qualification}
                specialization={doctor.specialization}
                experience={doctor.experience}
                experienceYears={doctor.experienceYears}
                isActive={doctor.isActive}
                bio={doctor.bio}
                specialistIn={doctor.specialistIn}
                image={doctor.image}
              />
            ))}
          </div>

          {/* Trust Strip */}

          <div className="mt-14 rounded-3xl border border-blue-100 bg-white px-6 py-7 shadow-sm sm:px-10">
            <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                  Trusted Medical Care
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  Experienced professionals. Patient-first care.
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
                className="shrink-0 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
              >
                Book Appointment →
              </button>

            </div>
          </div>

        </Container>
      </Section>
    </section>
  );
}