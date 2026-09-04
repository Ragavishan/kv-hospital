export type GalleryCategory =
  | "hospital-life"
  | "team"
  | "moments";

export type GalleryImage = {
  id: number;
  category: GalleryCategory;
  title: string;
  image: string;
};

export const galleryImages: GalleryImage[] = [
  // Hospital Life
  {
    id: 1,
    category: "hospital-life",
    title: "Reception",
    image: "/images/gallery/hospital-life/gallery1.jpg",
  },
  {
    id: 2,
    category: "hospital-life",
    title: "Intensive Care Unit",
    image: "/images/gallery/hospital-life/gallery2.jpg",
  },
  {
    id: 3,
    category: "hospital-life",
    title: "Laboratory",
    image: "/images/gallery/hospital-life/gallery3.jpg",
  },
  {
    id: 4,
    category: "hospital-life",
    title: "Operation Theatre",
    image: "/images/gallery/hospital-life/gallery4.jpg",
  },
  {
    id: 5,
    category: "hospital-life",
    title: "Pharmacy",
    image: "/images/gallery/hospital-life/gallery5.jpg",
  },
  {
    id: 6,
    category: "hospital-life",
    title: "Waiting Area",
    image: "/images/gallery/hospital-life/gallery6.jpg",
  },

  // Our Team
  {
    id: 7,
    category: "team",
    title: "Our Medical Team",
    image: "/images/gallery/team/team1.jpg",
  },

  // Special Moments
  {
    id: 8,
    category: "moments",
    title: "A New Beginning",
    image: "/images/gallery/moments/moments1.jpg",
  },
  {
    id: 9,
    category: "moments",
    title: "100 Hearts, 100 Lives",
    image: "/images/gallery/moments/moments2.jpg",
  },
  {
    id: 10,
    category: "moments",
    title: "Auspicious Beginning",
    image: "/images/gallery/moments/moments3.jpg",
  },
  {
    id: 11,
    category: "moments",
    title: "Light of Healing",
    image: "/images/gallery/moments/moments4.jpg",
  },
  {
    id: 12,
    category: "moments",
    title: "A Special Moments",
    image: "/images/gallery/moments/moments5.jpg",
  },
];