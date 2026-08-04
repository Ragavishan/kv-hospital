interface DepartmentCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function DepartmentCard({
  title,
  description,
  icon: Icon,
}: DepartmentCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
        <Icon size={32} />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <button className="mt-6 font-semibold text-blue-700">
        Learn More →
      </button>

    </div>
  );
}