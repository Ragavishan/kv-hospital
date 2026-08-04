import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Patients Say"
            description="Patient satisfaction is our highest priority."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                review={testimonial.review}
              />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}