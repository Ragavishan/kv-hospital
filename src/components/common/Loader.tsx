import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50">

      {/* Hospital Logo */}

      <div className="relative h-28 w-28">
        <Image
          src="/images/kv-hospital-logo.png"
          alt="KV Hospital Logo"
          fill
          priority
          sizes="112px"
          className="object-contain"
        />
      </div>

      {/* Hospital Name */}

      <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
        KV Hospital
      </h2>

      <p className="mt-1.5 text-sm font-medium text-slate-500">
        Trusted Healthcare in Palani
      </p>

      {/* Loading Dots */}

      <div className="mt-5 flex items-center gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-700" />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-700"
          style={{ animationDelay: "150ms" }}
        />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-700"
          style={{ animationDelay: "300ms" }}
        />
      </div>

    </div>
  );
}