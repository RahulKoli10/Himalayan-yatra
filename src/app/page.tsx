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
              2026 Char Dham Bookings Now Open
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Char Dham & Kedarnath Yatra <br />
              <span className="bg-linear-to-r from-amber-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                {" "}
                Safe. Comfortable. Divine.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-xl">
              Trusted local travel experts from Haridwar & Dehradun offering
              premium AC cabs, experienced hill drivers, and complete end-to-end
              yatra support.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              {/* Primary Button */}
              <Button
                asChild
                size="lg"
                className="group w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 px-8 shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <Link href="/packages" className="flex items-center">
                  <Icon
                    icon="mdi:mountain"
                    className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  View Packages
                </Link>
              </Button>

              {/* Secondary Button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto border-white/30 text-white px-8 backdrop-blur-md hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                <Link href="/book" className="flex items-center">
                  <Icon
                    icon="mdi:whatsapp"
                    className="mr-2 h-5 w-5 text-emerald-400 transition-transform duration-300 group-hover:scale-110"
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
      {/* WHY CHOOSE US */}
      <section className="section-muted section-padding">
        <div className="container space-y-12">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Why Choose Himalayan Yatra
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Trusted Local Experts for a
              <span className="block text-emerald-600">
                Safe & Stress-Free Char Dham Yatra
              </span>
            </h2>

            <p className="text-sm text-slate-600 md:text-base">
              From route planning and hotel coordination to darshan timings and
              emergency support, we manage every detail so you can focus
              completely on your spiritual journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <Card className="group border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-700 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon icon="mdi:steering" className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    Experienced Hill Drivers
                  </CardTitle>
                  <CardDescription className="pt-2 text-sm text-slate-600">
                    Skilled in mountain terrain, sharp bends and changing
                    weather conditions for maximum passenger safety.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="group border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-xl bg-sky-500/10 p-3 text-sky-700 group-hover:bg-sky-500/20 transition-colors">
                  <Icon icon="mdi:car-seat-cooler" className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    Clean & Comfortable Vehicles
                  </CardTitle>
                  <CardDescription className="pt-2 text-sm text-slate-600">
                    Regularly serviced Ertiga & Dzire cabs with pushback seats,
                    luggage space and AC comfort.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="group border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-xl bg-amber-500/10 p-3 text-amber-700 group-hover:bg-amber-500/20 transition-colors">
                  <Icon icon="mdi:whatsapp" className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    Direct WhatsApp Support
                  </CardTitle>
                  <CardDescription className="pt-2 text-sm text-slate-600">
                    Speak directly with the owner for instant confirmations,
                    itinerary updates and quick assistance.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CAR SHOWCASE */}
      <section className="section-padding">
        <div className="container space-y-12">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Our Fleet
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Comfortable & Reliable Cabs for Char Dham Yatra
            </h2>

            <p className="text-sm text-slate-600 md:text-base">
              Well-maintained vehicles with experienced hill drivers, ensuring a
              safe and smooth Himalayan journey.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Ertiga */}
            <Card className="group overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/ertiga.jpeg"
                  alt="Maruti Ertiga cab for Char Dham Yatra in Uttarakhand"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow">
                  Ideal for 5–7 Pilgrims
                </div>
              </div>

              <CardContent className="space-y-4 pt-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Maruti Ertiga (6–7 Seater)
                  </CardTitle>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Family Favourite
                  </span>
                </div>

                <CardDescription className="text-sm text-slate-600">
                  Spacious MPV with AC comfort, pushback seats and ample luggage
                  space — perfect for families and small groups planning Char
                  Dham or Kedarnath Yatra.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Dzire */}
            <Card className="group overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/dzire.jpg"
                  alt="Maruti Dzire taxi for Kedarnath and Char Dham Yatra"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow">
                  Ideal for 2–4 Pilgrims
                </div>
              </div>

              <CardContent className="space-y-4 pt-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Maruti Dzire (4 Seater)
                  </CardTitle>

                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                    Best for Couples
                  </span>
                </div>

                <CardDescription className="text-sm text-slate-600">
                  Comfortable sedan with smooth suspension and AC — ideal for
                  couples and small families seeking a peaceful and
                  budget-friendly yatra.
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
