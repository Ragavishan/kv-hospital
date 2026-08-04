import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/animations/Section";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Section>
        <Container>
          <SectionTitle
            subtitle="Why Choose Us"
            title="Why Patients Trust KV Hospital"
            description="Committed to providing exceptional healthcare with compassion and excellence."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="👨‍⚕️"
              title="Experienced Doctors"
              description="Highly qualified specialists with years of experience."
            />

            <FeatureCard
              icon="🏥"
              title="Modern Facilities"
              description="Advanced medical equipment and infrastructure."
            />

            <FeatureCard
              icon="🚑"
              title="24×7 Emergency"
              description="Emergency care available round the clock."
            />

            <FeatureCard
              icon="❤️"
              title="Patient First"
              description="Compassionate care focused on every patient's well-being."
            />
          </div>
        </Container>
      </Section>
    </section>
  );
}