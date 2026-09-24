export default function HospitalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Iswarya Hospital",
    url: "https://www.iswaryahospitalpalani.com",
    logo: "https://www.iswaryahospitalpalani.com/images/iswarya-hospital-logo.png",
    image: "https://www.iswaryahospitalpalani.com/images/hospital-hero.jpg",
    description:
      "Iswarya Hospital is a multispeciality hospital in Palani offering 24/7 emergency care, experienced doctors, advanced treatments, and quality healthcare.",
    telephone: "+91 7502710333",
    email: "kvmultispecialityhospital@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "72-B Dindigul–Palani Main Road, Laxmipuram",
      addressLocality: "Palani",
      postalCode: "624601",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.44864655,
      longitude: 77.52446515,
    },

    medicalSpecialty: [
    "Cardiology",
    "General Medicine",
    "General Surgery",
    "Obstetrics and Gynecology",
    "Pediatrics",
    "Orthopedics",
  ],
    
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}