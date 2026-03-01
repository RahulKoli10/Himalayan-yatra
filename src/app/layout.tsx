    import type { Metadata } from "next";
    import { Playfair_Display, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./component/Navbar";
import WhatsAppButton from "./component/WhatsAppButton";
import Footer from "./component/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});


export const metadata: Metadata = {
  title:
    "Char Dham Cab Service 2026 | Kedarnath Taxi from Haridwar | Himalayan Yatra",

  description:
    "Book trusted Char Dham cab service 2026 from Haridwar & Dehradun. Private Dzire & Ertiga taxis for Kedarnath, Badrinath, Gangotri & Yamunotri with experienced hill drivers.",

  keywords: [
    "Char Dham cab service 2026",
    "Kedarnath taxi service",
    "Haridwar to Kedarnath cab",
    "Char Dham taxi price",
    "Badrinath taxi booking",
    "Uttarakhand cab operator",
    "Pauri to Delhi taxi",
  ],

  metadataBase: new URL("https://himalayan-yatra-lake.vercel.app"),

  icons: {
    icon: "/custom-logo.svg",
    apple: "/custom-logo.svg",
  },

  openGraph: {
    title:
      "Char Dham Cab Service 2026 | Himalayan Yatra Travels",
    description:
      "Private Dzire & Ertiga taxis for Char Dham, Kedarnath & Uttarakhand routes. Trusted local cab operator.",
    url: "https://himalayan-yatra-lake.vercel.app",
    siteName: "Himalayan Yatra Travels",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Char Dham Cab Service 2026 | Himalayan Yatra",
    description:
      "Trusted Uttarakhand cab operator for Char Dham & Kedarnath routes.",
  },

  alternates: {
    canonical: "https://himalayan-yatra-lake.vercel.app",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}

      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
