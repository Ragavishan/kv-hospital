import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/common/LanguageProvider";
import HospitalSchema from "@/components/seo/HospitalSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iswaryahospitalpalani.com"),

  title: {
    default: "Iswarya Hospital | Multispeciality Hospital in Palani",
    template: "%s | Iswarya Hospital",
  },

  description:
    "Iswarya Hospital in Palani provides multispeciality healthcare, 24/7 emergency care, experienced doctors, and advanced medical treatments for patients in Palani and surrounding areas.",

  keywords: [
    "Iswarya Hospital",
    "Iswarya Hospital Palani",
    "hospital in Palani",
    "multispeciality hospital in Palani",
    "emergency hospital in Palani",
    "24/7 emergency care Palani",
    "doctors in Palani",
    "healthcare in Palani",
  ],

  authors: [
    {
      name: "Iswarya Hospital",
    },
  ],

  creator: "Iswarya Hospital",
  publisher: "Iswarya Hospital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/iswarya-hospital-logo.png",
    shortcut: "/images/iswarya-hospital-logo.png",
    apple: "/images/iswarya-hospital-logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.iswaryahospitalpalani.com",
    siteName: "Iswarya Hospital",
    title: "Iswarya Hospital | Multispeciality Hospital in Palani",
    description:
      "Iswarya Hospital in Palani provides multispeciality healthcare, 24/7 emergency care, experienced doctors, and advanced medical treatments.",
    images: [
      {
        url: "/images/hospital-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Iswarya Hospital in Palani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Iswarya Hospital | Multispeciality Hospital in Palani",
    description:
      "Iswarya Hospital in Palani provides multispeciality healthcare, 24/7 emergency care, experienced doctors, and advanced medical treatments.",
    images: ["/images/hospital-hero.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.className} min-h-screen`}>
        <HospitalSchema />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}