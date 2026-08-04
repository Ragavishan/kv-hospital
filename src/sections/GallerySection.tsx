import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import GalleryCard from "@/components/ui/GalleryCard";
import { galleryImages } from "@/constants/gallery";
import Section from "@/components/animations/Section";

export default function GallerySection() {
  return (
    <section className="bg-slate-50 py-24">
      <Section>
        <Container>

          <SectionTitle
            subtitle="Gallery"
            title="Inside KV Hospital"
            description="Take a look at our modern facilities and patient-friendly environment."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {galleryImages.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                image={item.image}
              />
            ))}

          </div>

        </Container>
      </Section>
    </section>
  );
}
