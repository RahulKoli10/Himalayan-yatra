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
  title: "Char Dham Yatra 2026 | Himalayan Yatra Travels",
  description:
    "Book Char Dham Yatra 2026 package with trusted local Uttarakhand tour operator. Kedarnath, Badrinath, Gangotri & Yamunotri travel packages available.",
  keywords: [
    "Char Dham Yatra 2026",
    "Kedarnath package",
    "Badrinath tour",
    "Gangotri trip",
    "Yamunotri yatra",
    "Uttarakhand taxi service",
  ],
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
