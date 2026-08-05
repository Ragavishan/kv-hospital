import Image from "next/image";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="About KV Hospital"
            title="Quality Healthcare You Can Trust"
            description="We are committed to providing compassionate care, advanced medical treatment, and trusted healthcare services for every patient."
          />

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="About KV Hospital"
                width={700}
                height={500}
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Caring Beyond Treatment
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Caring for Every Life
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                KV Hospital is dedicated to delivering exceptional healthcare
                through experienced doctors, modern medical facilities, and
                compassionate patient-centered care.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                For over 25 years, we have earned the trust of families in
                Palani by providing affordable, reliable, and high-quality
                healthcare services with advanced technology and experienced
                specialists.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-white p-5 shadow-lg">
                  <h4 className="text-3xl font-bold text-blue-700">25+</h4>
                  <p className="text-slate-500">Years of Excellence</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-lg">
                  <h4 className="text-3xl font-bold text-blue-700">50K+</h4>
                  <p className="text-slate-500">Happy Patients</p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </section>
  );
}