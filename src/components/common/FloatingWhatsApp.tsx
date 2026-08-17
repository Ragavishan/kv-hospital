import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20KV%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp KV Hospital"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Hover Label */}
      <span className="mr-3 hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg transition-all duration-300 group-hover:block">
        WhatsApp Us
      </span>

      {/* WhatsApp Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:shadow-2xl">

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />

        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="relative z-10"
        />
      </span>
    </a>
  );
}