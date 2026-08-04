export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-700"></div>

      <h2 className="mt-6 text-2xl font-bold text-blue-700">
        KV Hospital
      </h2>

      <p className="mt-2 text-slate-500">
        Loading...
      </p>
    </div>
  );
}