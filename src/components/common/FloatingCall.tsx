import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+919876543210"
      aria-label="Call KV Hospital"
      className="group fixed bottom-28 right-6 z-50 flex items-center"
    >
      {/* Hover Label */}
      <span className="mr-3 hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg transition-all duration-300 group-hover:block">
        Call Us
      </span>

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-800 group-hover:shadow-2xl">

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-blue-700 opacity-30 animate-ping" />

        <Phone
          size={25}
          className="relative z-10"
        />
      </span>
    </a>
  );
}