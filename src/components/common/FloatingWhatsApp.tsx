import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20KV%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={34}
        height={34}
      />
    </a>
  );
}