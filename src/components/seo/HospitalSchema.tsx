export default function HospitalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",

    "@id": "https://www.iswaryahospitalpalani.com/#hospital",

    name: "Iswarya Hospital",
    alternateName: "Iswarya Multispeciality Hospital",

    url: "https://www.iswaryahospitalpalani.com",

    logo: {
      "@type": "ImageObject",
      url: "https://www.iswaryahospitalpalani.com/images/iswarya-hospital-logo.png",
    },

    image:
      "https://www.iswaryahospitalpalani.com/images/hospital-hero.jpg",

    description:
      "Iswarya Hospital is a multispeciality hospital in Palani offering 24/7 emergency care, experienced doctors, advanced treatments, and quality healthcare.",

    telephone: "+91 7502710333",
    email: "kvmultispecialityhospital@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "72-B Dindigul–Palani Main Road, Laxmipuram",
      addressLocality: "Palani",
      addressRegion: "Tamil Nadu",
      postalCode: "624601",
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

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Palani",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dindigul",
      },
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
    ],
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