interface StatsProps {
  number: string;
  label: string;
}

export default function Stats({ number, label }: StatsProps) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-blue-700">
        {number}
      </h3>

      <p className="mt-2 text-slate-600">
        {label}
      </p>
    </div>
  );
}