"use client";
import { useEffect, useState } from "react";
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

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon icon={icon} className="h-4 w-4 text-emerald-400" />
      <span>{text}</span>
    </div>
  );
}

export default function Home() {
  const backgrounds = [
    "/hero-bg.jpeg",
    "/hero-bg2.jpeg",
    "/hero-bg3.jpeg",
    "/hero-bg4.jpeg",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <main className="relative overflow-hidden text-white">
        {/* Background Slider */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgrounds[bgIndex]}
            alt="Char Dham Yatra"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto flex min-h-[90vh] flex-col justify-center px-4 py-16 md:flex-row md:items-center md:gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40 backdrop-blur">
              <Icon
                icon="mdi:star-four-points-circle"
                className="h-3.5 w-3.5"
              />
              Char Dham Yatra 2026 bookings open
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Sacred Himalayas,
              <span className="bg-linear-to-r from-amber-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                {" "}
                safe & comfortable yatra.
              </span>
            </h1>

            <p className="text-sm text-slate-200 sm:text-base md:text-lg">
              Travel with a trusted local operator from Haridwar & Dehradun.
              Clean cabs, expert drivers, and end-to-end guidance for your Char
              Dham Yatra.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600"
              >
                <Link href="/packages">
                  <Icon icon="mdi:mountain" className="mr-2 h-5 w-5" />
                  View Packages
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10"
              >
                <Link href="/book">
                  <Icon
                    icon="mdi:whatsapp"
                    className="mr-2 h-5 w-5 text-emerald-400"
                  />
                  WhatsApp Booking
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300 sm:text-sm md:justify-start">
              <Feature icon="mdi:shield-check" text="Verified local drivers" />
              <Feature icon="mdi:car-seat" text="Clean premium cabs" />
              <Feature
                icon="mdi:clock-check-outline"
                text="24×7 WhatsApp support"
              />
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="mt-12 w-full max-w-md md:mt-0">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <Image
                src="/ertiga.jpeg"
                alt="Premium cab"
                width={900}
                height={600}
                className="h-60 w-full object-cover sm:h-72 md:h-80"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs sm:text-sm">
                <div>
                  <p className="font-semibold">Haridwar ⇄ Char Dham</p>
                  <p className="text-slate-300 text-xs">
                    Experienced hill driver
                  </p>
                </div>

                {/* <div className="rounded-xl bg-black/70 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase text-slate-400">
                    Starting
                  </p>
                  <p className="text-sm font-semibold text-emerald-300">
                    ₹7,000
                  </p>
                </div> */}
              </div>
            </div>
          </div>
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
              team handles everything so you can focus on your spiritual
              journey.
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
                  <CardDescription className="pt-3">
                    Expert in mountain roads, weather patterns and safe driving
                    on sharp bends.
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
                  <CardDescription className="pt-3">
                    Regularly serviced Ertiga &amp; Dzire cabs with pushback
                    seats and ample luggage space.
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
                  <CardDescription className="pt-3">
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
                  Spacious MPV with comfortable seating, AC and large boot space
                  — perfect for joint families and small groups.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Dzire */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/dzire.jpg"
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
                  Comfortable sedan with smooth ride quality — perfect for
                  couples and nuclear families planning a peaceful yatra.
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
