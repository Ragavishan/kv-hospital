import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import FAQItem from "@/components/ui/FAQItem";
import { faqs } from "@/constants/faqs";

export default function FAQSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Section>
        <Container>

          <SectionTitle
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to the most common questions about KV Hospital."
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-5">

            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
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