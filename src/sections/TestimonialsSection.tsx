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
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
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

          {/* Horizontal Patient Testimonials */}
          <div className="relative mt-10">
            <div
              className="
                flex gap-5
                overflow-x-auto
                pb-4
                snap-x snap-mandatory
                scrollbar-hide
              "
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="
                    w-[270px]
                    shrink-0
                    snap-start
                    sm:w-[290px]
                    lg:w-[300px]
                  "
                >
                  <TestimonialCard
                    name={testimonial.name[currentLanguage]}
                    location={testimonial.location[currentLanguage]}
                    review={testimonial.review[currentLanguage]}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}
