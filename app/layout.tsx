import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Royal Cliff Resort — Pahalgam, Kashmir",
    template: "%s | Royal Cliff Resort",
  },
  description:
    "Luxury cliff-side resort in Pahalgam, Kashmir. Breathtaking valley views, premium suites, authentic Kashmiri hospitality. Book online with instant confirmation.",
  keywords: [
    "Royal Cliff Resort",
    "Pahalgam resort",
    "Kashmir luxury hotel",
    "hotel booking Pahalgam",
    "Kashmir vacation",
    "Betab Valley resort",
    "Lidder Valley hotel",
    "luxury stay Kashmir",
  ],
  metadataBase: new URL("https://royalcliffresort.com"),
  openGraph: {
    type: "website",
    siteName: "Royal Cliff Resort",
    locale: "en_IN",
    title: "Royal Cliff Resort — Pahalgam, Kashmir",
    description:
      "Luxury cliff-side resort in Pahalgam. Breathtaking views, premium suites, authentic Kashmiri hospitality.",
    url: "https://royalcliffresort.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Cliff Resort — Pahalgam, Kashmir",
    description: "Luxury cliff-side resort in Pahalgam, Kashmir.",
  },
  alternates: {
    canonical: "https://royalcliffresort.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Royal Cliff Resort",
            "description": "Luxury cliff-side resort in Pahalgam, Kashmir",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near BP Road",
              "addressLocality": "Pahalgam",
              "addressRegion": "Jammu & Kashmir",
              "postalCode": "192125",
              "addressCountry": "IN"
            },
            "telephone": "+919622299302",
            "email": "contact@royalcliffresort.com",
            "url": "https://royalcliffresort.com",
            "priceRange": "₹₹₹",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0161",
              "longitude": "75.3162"
            }
          })
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}