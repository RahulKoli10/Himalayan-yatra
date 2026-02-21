"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
            <Icon icon="solar:mountain-bold-duotone" className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              Himalayan Yatra
            </span>
            <span className="text-xs text-slate-500">
              Char Dham Yatra 2026
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/packages"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Packages
          </Link>
          <Link
            href="/daily-booking"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Book for a cab 
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href="/book">
              <Icon icon="mdi:calendar-clock" className="mr-1.5 h-4 w-4" />
              Book Now
            </Link>
          </Button>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <Icon
              icon={open ? "mi:close" : "mi:menu"}
              className="h-5 w-5"
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-3 text-sm">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="rounded-lg px-3 py-2 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              size="sm"
              className="mt-1 w-full justify-center bg-emerald-600 hover:bg-emerald-700"
            >
              <Link href="/book" onClick={() => setOpen(false)}>
                <Icon icon="mdi:calendar-clock" className="mr-1.5 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
