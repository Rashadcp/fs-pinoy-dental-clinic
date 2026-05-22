import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FS Pinoy Dental Clinic | Warm, Gentle Dental Care in Your Neighborhood",
  description: "Welcome to a different kind of dental experience. We focus on gentle, stress-free, and painless dental care for you and your family. Book a visit with our friendly team today.",
  keywords: ["dental clinic", "gentle dentist", "teeth cleaning", "teeth whitening", "orthodontics", "implants", "painless dentistry", "local dentist", "FS Pinoy Dental", "Philippines dentist"],
  metadataBase: new URL("https://fspinoydental.com"), // Placeholder URL, replace with actual
  openGraph: {
    title: "FS Pinoy Dental Clinic | Gentle Dental Care",
    description: "Welcome to a different kind of dental experience. We focus on gentle, stress-free, and painless dental care.",
    url: "https://fspinoydental.com",
    siteName: "FS Pinoy Dental Clinic",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "FS Pinoy Dental Clinic - Warm, Gentle Dental Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FS Pinoy Dental Clinic | Gentle Dental Care",
    description: "Welcome to a different kind of dental experience. We focus on gentle, stress-free, and painless dental care.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "FS Pinoy Dental Clinic",
  image: "https://fspinoydental.com/og-image.jpg",
  "@id": "https://fspinoydental.com",
  url: "https://fspinoydental.com",
  telephone: "+631234567890", // Placeholder
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room No.105, Ajmal Perfume Building, Near Satwa Big Masjid",
    addressLocality: "Al Satwa, Dubai",
    addressRegion: "Dubai",
    postalCode: "",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/fspinoydental", // Placeholder
    "https://www.instagram.com/fspinoydental", // Placeholder
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-gray-800 bg-white overflow-x-hidden">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
