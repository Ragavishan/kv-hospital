"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import FAQItem from "@/components/ui/FAQItem";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle={t.faqs.subtitle}
   
   
            title={t.faqs.title}
            description={t.faqs.description}
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-5">
            {Object.entries(t.faqs.questions).map(([id, faq]) => (
              <FAQItem
                key={id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}