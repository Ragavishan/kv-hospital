"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function TestimonialsSection() {
  const { language, t } = useLanguage();

  const currentLanguage =
    ["en", "ta", "ml", "te", "hi"].includes(language)
      ? language
      : "en";

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <Section>
        <Container>
          {/* Section Heading */}
          <div className="relative">
            <SectionTitle
              subtitle={t.testimonials.subtitle}
              title={t.testimonials.title}
              description={t.testimonials.description}
            />
          </div>

          {/* Written Patient Testimonials Only */}
          <div className="relative mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name[currentLanguage]}
                location={testimonial.location[currentLanguage]}
                review={testimonial.review[currentLanguage]}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}