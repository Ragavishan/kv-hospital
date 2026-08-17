interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl">

      {/* Top Accent */}

      <div className="absolute left-0 top-0 h-1 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700 group-hover:shadow-lg">
        <span className="transition-transform duration-500 group-hover:scale-110">
          {icon}
        </span>
      </div>

      {/* Content */}

      <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      {/* Bottom Indicator */}

      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-5" />
        Trusted Care
      </div>

    </article>
  );
}