import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Testimonials from "./component/testimonial";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative overflow-hidden bg-slate-950 text-white">
        <div className="container flex min-h-[80vh] flex-col items-center justify-center gap-10 py-12 md:flex-row md:py-20">
          {/* Left content */}
          <div className="relative z-10 max-w-xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40">
              <Icon icon="mdi:star-four-points-circle" className="h-3.5 w-3.5" />
              Char Dham Yatra 2026 bookings open
            </span>

            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Sacred Himalayas,
              <span className="bg-linear-to-r from-amber-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                {" "}
                safe & comfortable yatra.
              </span>
            </h1>

            <p className="text-balance text-sm text-slate-200 md:text-base">
              Travel with a trusted local operator from Haridwar &amp; Dehradun.
              Clean cabs, expert drivers, and end‑to‑end guidance for your Char
              Dham Yatra 2026.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/packages">
                  <Icon icon="mdi:mountain" className="mr-2 h-5 w-5" />
                  View Packages
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 bg-transparent text-slate-100 hover:bg-slate-900/60">
                <Link href="/book">
                  <Icon icon="mdi:whatsapp" className="mr-2 h-5 w-5 text-emerald-400" />
                  Quick WhatsApp Booking
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-300 md:text-sm">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shield-check" className="h-4 w-4 text-emerald-400" />
                <span>Verified local drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:car-seat" className="h-4 w-4 text-emerald-400" />
                <span>Clean &amp; premium cabs</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:clock-check-outline" className="h-4 w-4 text-emerald-400" />
                <span>24×7 WhatsApp support</span>
              </div>
            </div>
          </div>

          {/* Right image / stats */}
          <div className="relative z-10 w-full max-w-md md:max-w-lg">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-[0_0_120px_rgba(16,185,129,0.45)]">
              <Image
                src="/ertiga.jpeg"
                alt="Premium cab for Char Dham Yatra"
                width={900}
                height={600}
                className="h-64 w-full object-cover sm:h-80"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100 sm:text-sm">
                <div className="space-y-1">
                  <p className="font-semibold">Haridwar ⇄ Char Dham</p>
                  <p className="text-slate-300">Round‑trip with experienced hill driver</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 px-3 py-2 text-right">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    Starting from
                  </p>
                  <p className="text-sm font-semibold text-emerald-300">₹7,000 / cab</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-300 sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
                <p className="text-lg font-semibold text-emerald-300">500+</p>
                <p>Pilgrims served</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
                <p className="text-lg font-semibold text-emerald-300">4.9★</p>
                <p>Average rating</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
                <p className="text-lg font-semibold text-emerald-300">10+ yrs</p>
                <p>Yatra experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        </div>
      </main>

      {/* WHY CHOOSE US */}
      <section className="section-muted section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Why travellers trust us
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Local expertise for a stress‑free Char Dham Yatra.
            </h2>
            <p className="text-sm text-slate-600 md:text-base">
              From route planning to hotel coordination and darshan timings, our
              team handles everything so you can focus on your spiritual journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-700">
                  <Icon icon="mdi:steering" className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Experienced hill drivers</CardTitle>
                  <CardDescription>
                    Expert in mountain roads, weather patterns and safe driving on
                    sharp bends.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="rounded-lg bg-sky-500/10 p-2 text-sky-700">
                  <Icon icon="mdi:car-seat-cooler" className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Clean &amp; comfortable vehicles</CardTitle>
                  <CardDescription>
                    Regularly serviced Ertiga &amp; Dzire cabs with pushback seats and
                    ample luggage space.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="rounded-lg bg-amber-500/10 p-2 text-amber-700">
                  <Icon icon="mdi:whatsapp" className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Direct WhatsApp support</CardTitle>
                  <CardDescription>
                    Talk directly with the owner on WhatsApp for instant
                    confirmations and changes.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CAR SHOWCASE */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our fleet
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Comfortable cabs for every group size.
            </h2>
            <p className="text-sm text-slate-600 md:text-base">
              Choose from compact sedans for couples to spacious MPVs for joint
              families and groups.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Ertiga */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/ertiga.jpeg"
                  alt="Maruti Ertiga used for Char Dham Yatra"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-100">
                  Ideal for 5–7 pilgrims
                </div>
              </div>
              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <CardTitle>Maruti Ertiga (6–7 seater)</CardTitle>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Family favourite
                  </span>
                </div>
                <CardDescription>
                  Spacious MPV with comfortable seating, AC and large boot space —
                  perfect for joint families and small groups.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Dzire */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/ertiga.jpeg"
                  alt="Maruti Dzire used for Char Dham Yatra"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-100">
                  Ideal for 2–4 pilgrims
                </div>
              </div>
              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <CardTitle>Maruti Dzire (4 seater)</CardTitle>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                    Best for couples
                  </span>
                </div>
                <CardDescription>
                  Comfortable sedan with smooth ride quality — perfect for couples
                  and nuclear families planning a peaceful yatra.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
