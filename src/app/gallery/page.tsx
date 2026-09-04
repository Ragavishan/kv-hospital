"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/constants/gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Gallery
          </p>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Hospital Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Explore our hospital facilities, medical team and special moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-20">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Gallery */}
        <div className="mt-14 text-center">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>
    </main>
  );
}