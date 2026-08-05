import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/common/Container";
import Stats from "@/components/common/Stats";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div className="order-2 lg:order-1">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              🏥 Trusted Healthcare in Palani
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health,
              <span className="text-blue-700"> Our Priority</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              KV Hospital provides compassionate healthcare with experienced
              doctors, advanced medical technology and patient-centered
              treatment to ensure the best possible care for every patient.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                text="Book Appointment"
                onClick={() =>
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />

              <Button
                text="Explore Services"
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("departments")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <Stats
                number="15+"
                label="Doctors"
              />

              <Stats
                number="25+"
                label="Years"
              />

              <Stats
                number="50K+"
                label="Patients"
              />

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="order-1 flex justify-center lg:order-2">

            <div className="relative">

              {/* Blue Background */}

              <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-blue-100"></div>

              {/* Image */}

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">

                <Image
                  src="/images/hospital.jpg"
                  alt="KV Hospital"
                  width={500}
                  height={600}
                  priority
                  className="h-[360px] w-[320px] object-cover transition duration-700 hover:scale-105 sm:h-[520px] sm:w-[430px]"
                />

              </div>

              {/* Experience */}

              <div className="absolute -left-6 top-8 rounded-2xl bg-white px-6 py-4 shadow-xl">

                <h3 className="text-3xl font-bold text-blue-700">
                  25+
                </h3>

                <p className="text-sm text-slate-500">
                  Years Experience
                </p>

              </div>

              {/* Emergency */}

              <div className="absolute -bottom-6 right-6 rounded-2xl bg-red-600 px-6 py-4 text-white shadow-xl">

                <h3 className="text-lg font-bold">
                  🚑 Emergency
                </h3>

                <p className="text-sm">
                  Available 24 × 7
                </p>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}