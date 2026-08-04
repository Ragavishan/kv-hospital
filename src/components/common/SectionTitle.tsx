interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}