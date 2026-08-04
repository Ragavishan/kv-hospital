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
    <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 text-3xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="italic text-slate-600">
        "{review}"
      </p>

      <div className="mt-6">
        <h3 className="font-bold text-lg">
          {name}
        </h3>

        <p className="text-sm text-slate-500">
          {location}
        </p>
      </div>
    </div>
  );
}