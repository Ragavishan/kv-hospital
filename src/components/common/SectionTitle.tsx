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
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {/* Subtitle */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
        {subtitle}
      </p>

      {/* Main Title */}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}