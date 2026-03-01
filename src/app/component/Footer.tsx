import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container section-padding grid gap-12 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="space-y-4">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/custom-logo.svg"
              alt="Himalayan Yatra Travels – Char Dham & Kedarnath Tour Operator"
              width={160}
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed">
            Trusted local tour operator for Char Dham Yatra 2026.
            Premium cabs, verified hill drivers and complete
            end-to-end travel support from Haridwar & Dehradun.
          </p>

          <p className="flex items-center gap-2 text-xs text-emerald-400">
            <Icon icon="mdi:shield-check-outline" className="h-4 w-4" />
            Govt. Registered Local Operator
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">
            {[
              { name: "Home", href: "/" },
              { name: "Packages", href: "/packages" },
              { name: "Book Now", href: "/book" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Icon
                icon="mdi:map-marker-radius-outline"
                className="mt-0.5 h-4 w-4 text-emerald-400"
              />
              <span>Haridwar, Uttarakhand, India</span>
            </li>

            <li className="flex items-center gap-3">
              <Icon
                icon="mdi:phone"
                className="h-4 w-4 text-emerald-400"
              />
              <a
                href="tel:+917078101720"
                className="hover:text-emerald-400 transition"
              >
                +91 70781 01720
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Icon
                icon="mdi:email-outline"
                className="h-4 w-4 text-emerald-400"
              />
              <a
                href="mailto:rahulkohli7088@gmail.com"
                className="hover:text-emerald-400 transition"
              >
                rahulkohli7088@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Instant Support
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed">
            Talk directly with our tour expert for custom itinerary,
            pricing and 2026 Char Dham bookings.
          </p>

          <a
            href="https://wa.me/917078101720?text=Hi%2C%20I%20am%20interested%20in%20Char%20Dham%20Yatra%202026."
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-emerald-600 transition-all duration-300"
          >
            <Icon icon="mdi:whatsapp" className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-4">
        <div className="container flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Himalayan Yatra Travels. All rights reserved.
          </p>
          <p>
            Designed for safe & spiritual journeys across Uttarakhand.
          </p>
        </div>
      </div>
    </footer>
  );
}