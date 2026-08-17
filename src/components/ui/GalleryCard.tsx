"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface GalleryCardProps {
  title: string;
  image: string;
}

export default function GalleryCard({
  title,
  image,
}: GalleryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Gallery Card */}

      <article
        className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        {/* Image */}

        <div className="relative h-72 overflow-hidden bg-slate-100">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

          {/* View Button */}

          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/90 text-slate-800 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <Maximize2 size={18} />
          </div>

          {/* Title */}

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                KV Hospital
              </p>

              <h3 className="text-xl font-extrabold text-white">
                {title}
              </h3>

            </div>

          </div>

        </div>
      </article>

      {/* ================= LIGHTBOX ================= */}

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close image"
              className="absolute -right-1 -top-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {/* Large Image */}

            <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">

              <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className="max-h-[80vh] w-full object-contain"
              />

            </div>

            {/* Image Title */}

            <div className="mt-4 text-center">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                KV Hospital
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                {title}
              </h2>

            </div>

          </div>
        </div>
      )}
    </>
  );
}