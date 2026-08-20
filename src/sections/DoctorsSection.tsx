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
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <Section>
        <Container>

          {/* =====================================================
              SECTION HEADING
          ===================================================== */}

          <SectionTitle
            subtitle="Our Medical Team"
            title="Meet Our Experienced Doctors"
            description="Our dedicated team of healthcare professionals is committed to providing trusted medical care with experience, compassion, and attention to every patient."
          />

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}

          <div className="mx-auto mt-7 max-w-3xl text-center">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Meet the doctors who bring medical expertise, experience, and
              compassionate care to every patient at KV Hospital.
            </p>
          </div>

          {/* =====================================================
              DOCTOR CARDS
          ===================================================== */}

          <div className="mt-12 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* =====================================================
              TRUST STRIP
          ===================================================== */}

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-blue-100/80 bg-white px-6 py-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:px-10 sm:py-8">

            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              {/* Trust Content */}

              <div className="max-w-2xl">

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                  Trusted Medical Care
                </p>

                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  Experienced professionals. Patient-first care.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Dedicated medical professionals focused on providing
                  dependable and compassionate healthcare.
                </p>

              </div>

              {/* Appointment Button */}

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
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
              >
                Book Appointment

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </div>

        </Container>
      </Section>
    </section>
  );
}