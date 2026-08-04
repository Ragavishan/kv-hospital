import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="About KV Hospital"
            title="Quality Healthcare You Can Trust"
            description="We are committed to providing compassionate care, advanced medical treatment, and trusted healthcare services for every patient."
          />

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="flex h-80 items-center justify-center rounded-xl bg-slate-200">
              Hospital Image
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Caring for Every Life
              </h3>

              <p className="mb-4 text-slate-600">
                KV Hospital is dedicated to delivering exceptional healthcare
                through experienced doctors, modern facilities, and
                patient-first care.
              </p>

              <p className="text-slate-600">
                Our mission is to provide affordable, reliable, and
                high-quality medical services for families in and around
                Palani.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}