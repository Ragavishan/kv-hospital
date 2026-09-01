"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import GalleryCard from "@/components/ui/GalleryCard";
import { galleryImages } from "@/constants/gallery";
import Section from "@/components/animations/Section";
import { useLanguage } from "@/components/common/LanguageProvider";


type GalleryTitleKey =
  | "reception"
  | "icu"
  | "laboratory"
  | "operationTheatre"
  | "pharmacy"
  | "waitingArea";

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle={t.gallery.subtitle}
            title={t.gallery.title}
            description={t.gallery.description}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <GalleryCard
                key={item.id}
                title={t.gallery[item.titleKey as GalleryTitleKey]}
                image={item.image}
              />
            ))}
          </div>
        </Container>
      </Section>
    </section>
  );
}