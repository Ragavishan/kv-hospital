import { CheckCircle2, Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
}

export default function TestimonialCard({
  name,
  location,
  review,
}: TestimonialCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:p-8">

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700" />

      {/* Quote Icon */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
          <Quote size={22} />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={15}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="mt-7 text-[15px] leading-7 text-slate-600">
        “{review}”
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-100" />

      {/* Patient Details */}
      <div className="flex items-center justify-between gap-4">

        <div>
          <h3 className="text-lg font-extrabold text-slate-900">
            {name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-500">
            {location}
          </p>
        </div>

        {/* Verified */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
          <CheckCircle2 size={14} />
          Verified
        </div>

      </div>

    </article>
  );
}