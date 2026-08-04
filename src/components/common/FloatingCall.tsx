import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+919876543210"
      className="fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-800"
      aria-label="Call KV Hospital"
    >
      <Phone size={30}   className="animate-pulse" />
    </a>
  );
}