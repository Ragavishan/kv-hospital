import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/common/LanguageProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iswarya Hospital | Best Multispeciality Hospital in Palani",
  description:
    "Iswarya Hospital is a trusted multispeciality hospital in Palani offering 24/7 emergency care, experienced doctors, advanced treatments, and quality healthcare.",
  icons: {
    icon: "/images/iswarya-hospital-logo.png",
    shortcut: "/images/iswarya-hospital-logo.png",
    apple: "/images/iswarya-hospital-logo.png",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
