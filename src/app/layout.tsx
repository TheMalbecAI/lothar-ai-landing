import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lotharai.com"),
  title: {
    default: "Lothar AI | AI-Powered Ad Generation for Product Brands",
    template: "%s | Lothar AI",
  },
  description:
    "Generate brand-accurate, high-converting static ads in minutes. Proven psychological frameworks, unlimited custom scenes, and 99%+ product fidelity. Custom-built for your brand.",
  keywords: [
    "AI ad generation",
    "product brand ads",
    "static ad creation",
    "AI advertising",
    "DTC brand marketing",
    "automated ad design",
    "product photography AI",
    "advertising frameworks",
    "supplement brand ads",
    "skincare brand ads",
    "CPG advertising",
    "custom AI ad platform",
  ],
  openGraph: {
    title: "Lothar AI | AI-Powered Ad Generation for Product Brands",
    description:
      "Generate brand-accurate, high-converting static ads in minutes. Proven psychological frameworks plus unlimited custom scenes. Custom-built for your brand.",
    url: "https://lotharai.com",
    siteName: "Lothar AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lothar AI — AI-Powered Ad Generation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lothar AI | AI-Powered Ad Generation for Product Brands",
    description:
      "Generate brand-accurate, high-converting static ads in minutes. Proven frameworks plus unlimited custom scenes. Custom-built for your brand.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lothar AI",
              url: "https://lotharai.com",
              description:
                "AI-powered ad generation platform for product brands",
              logo: "https://lotharai.com/og-image.png",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
