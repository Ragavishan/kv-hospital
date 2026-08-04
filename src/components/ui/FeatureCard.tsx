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
    <div className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}