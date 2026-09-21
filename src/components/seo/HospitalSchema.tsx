export default function HospitalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Iswarya Hospital",
    description:
      "Iswarya Hospital is a multispeciality hospital in Palani offering 24/7 emergency care, experienced doctors, advanced treatments, and quality healthcare.",
    telephone: "+91 7502710333",
    email: "iswarya hospitalmultispecialityhospital@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "72-B Dindigul–Palani Main Road, Laxmipuram",
      addressLocality: "Palani",
      postalCode: "624601",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: "Palani",
    availableService: {
      "@type": "MedicalClinic",
      name: "Iswarya Hospital",
    },
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