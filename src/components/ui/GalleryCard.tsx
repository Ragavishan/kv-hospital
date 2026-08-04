import Image from "next/image";

interface GalleryCardProps {
  title: string;
  image: string;
}

export default function GalleryCard({
  title,
  image,
}: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl shadow-lg">
      <Image
        src={image}
        alt={title}
        width={500}
        height={350}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="bg-white p-4">
        <h3 className="text-center text-lg font-semibold text-slate-800">
          {title}
        </h3>
      </div>
    </div>
  );
}