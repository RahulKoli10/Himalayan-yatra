import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="container section-padding grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
              <Icon
                icon="solar:mountain-bold-duotone"
                className="h-5 w-5"
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide">
                Himalayan Yatra Travels
              </span>
              <span className="text-xs text-slate-400">
                Char Dham Yatra | Uttarakhand
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Trusted local tour operator for Char Dham Yatra 2026. Premium
            cabs, safe drivers and end‑to‑end support from Haridwar &amp; Dehradun.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-emerald-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-emerald-400">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-emerald-400">
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Icon
                icon="mdi:map-marker-radius-outline"
                className="mt-0.5 h-4 w-4 text-emerald-400"
              />
              <span>Haridwar, Uttarakhand, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mdi:phone"
                className="h-4 w-4 text-emerald-400"
              />
              <a href="tel:+917078101720" className="hover:text-emerald-400">
                +91 70781 01720
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mdi:email-outline"
                className="h-4 w-4 text-emerald-400"
              />
              <a
                href="mailto:rahulkohli7088@gmail.com"
                className="hover:text-emerald-400"
              >
                rahulkohli7088@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp & Social */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Instant Support
          </h3>
          <p className="mb-3 text-sm text-slate-400">
            Chat directly with our tour expert for custom itinerary and pricing.
          </p>
          <a
            href="https://wa.me/917078101720?text=Hi%2C%20I%20am%20interested%20in%20Char%20Dham%20Yatra%202026."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-emerald-600"
          >
            <Icon icon="mdi:whatsapp" className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800/60 bg-slate-950/90 py-4">
        <div className="container flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Himalayan Yatra Travels. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            <Icon icon="mdi:shield-check-outline" className="h-3 w-3" />
            Govt. Registered Local Operator
          </p>
        </div>
      </div>
    </footer>
  );
}
