"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BookPage() {
  return (
    <main className="section-muted min-h-screen py-12">
      <div className="container">
        <Suspense
          fallback={
            <div className="text-sm text-slate-500">Loading booking form…</div>
          }
        >
          <BookForm />
        </Suspense>
      </div>
    </main>
  );
}

function BookForm() {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package") || "Not decided yet";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const maxDate = (() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 6);
    return d.toISOString().split("T")[0];
  })();

  const handleBooking = () => {
    const message = `
Hello, I want to book the following package:

Package: ${selectedPackage}
Name: ${name}
Phone: ${phone}
Travel Date: ${date}
Number of People: ${people}
    `;

    const whatsappNumber = "917088308738";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const isDisabled = !name || !phone || !date || !people;

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-slate-200/80 bg-white/90 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Icon
              icon="mdi:calendar-clock-outline"
              className="h-6 w-6 text-emerald-600"
            />
            Book your Char Dham package
          </CardTitle>
          <CardDescription>
            Share your basic details and we will confirm the fare and full
            itinerary with you on WhatsApp.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="rounded-lg bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            <p className="font-semibold">Selected package</p>
            <p>{selectedPackage}</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">WhatsApp number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="date">Travel start date</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icon
                      icon="mdi:calendar-blank-outline"
                      className="h-5 w-5"
                    />
                  </span>
                  <Input
                    id="date"
                    type="date"
                    min={today}
                    max={maxDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="pl-10 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:bottom-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Char Dham yatra season typically May–November
                </p>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="people">Number of people</Label>
                <Input
                  id="people"
                  type="number"
                  min={1}
                  placeholder="e.g. 4"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button
            className="mt-2 w-full bg-emerald-600 text-white hover:bg-emerald-700"
            size="lg"
            onClick={handleBooking}
            disabled={isDisabled}
          >
            <Icon icon="mdi:whatsapp" className="mr-2 h-5 w-5" />
            Confirm &amp; chat on WhatsApp
          </Button>
          {isDisabled && (
            <p className="text-xs text-slate-500">
              Fill all fields to continue to WhatsApp.
            </p>
          )}
        </CardContent>
      </Card>

      <div className="space-y-5 text-sm text-slate-600">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
          <h2 className="mb-2 flex items-center gap-2 text-base font-semibold">
            <Icon
              icon="mdi:shield-check"
              className="h-5 w-5 text-emerald-600"
            />
            Why book with Himalayan Yatra?
          </h2>
          <ul className="space-y-1.5 pl-4">
            <li className="list-disc">
              Direct dealing with local owner, no hidden commissions.
            </li>
            <li className="list-disc">
              Transparent cab fare with proper driver allowance &amp; tolls
              explained.
            </li>
            <li className="list-disc">
              Help with hotel selection, helicopter booking guidance and route
              planning.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100">
          <h2 className="mb-2 flex items-center gap-2 text-base font-semibold">
            <Icon
              icon="mdi:clock-check-outline"
              className="h-5 w-5 text-emerald-400"
            />
            Quick response promise
          </h2>
          <p className="text-xs text-slate-300">
            Once you submit this form and land on WhatsApp, our team usually
            replies within{" "}
            <span className="font-semibold text-emerald-300">
              10–15 minutes
            </span>{" "}
            between 7 AM – 10 PM.
          </p>
        </div>
      </div>
    </div>
  );
}

