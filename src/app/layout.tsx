import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Heritage Homes Realty | Luxury Real Estate & Homes in Ghana",
  description:
    "Heritage Homes Realty is Ghana's premier luxury real estate agency. Discover exclusive modern homes, luxury apartments, and upscale developments in Cantonments, East Legon, Airport Residential, and Ahodwo.",
  keywords: "luxury real estate ghana, homes for sale accra, cantonments apartments, East Legon real estate, buy house ghana",
  openGraph: {
    title: "Heritage Homes Realty | Luxury Real Estate & Homes in Ghana",
    description:
      "Heritage Homes Realty is Ghana's premier luxury real estate agency. Discover exclusive modern homes, luxury apartments, and upscale developments in Cantonments, East Legon, Airport Residential, and Ahodwo.",
    type: "website",
    locale: "en_GH",
    siteName: "Heritage Homes Realty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-warm text-text-dark font-sans selection:bg-accent-gold/30 selection:text-primary-deep">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">{children}</div>
        
        {/* Floating WhatsApp Widget */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
