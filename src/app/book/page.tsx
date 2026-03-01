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
  const selectedPackage = searchParams.get("package") || "Custom Cab Service";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [vehicle, setVehicle] = useState("Dzire");
  const [pickup, setPickup] = useState("Haridwar");
  const [drop, setDrop] = useState("");
  const [tripType, setTripType] = useState("Round Trip");

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {
    const message = `
🚗 Himalayan Yatra Cab Booking Request

Package: ${selectedPackage}
Name: ${name}
WhatsApp: ${phone}
Travel Date: ${date}
People: ${people}
Vehicle: ${vehicle}
Trip Type: ${tripType}
Pickup: ${pickup}
Drop: ${drop}

Please share final fare and availability.
    `;

    const whatsappNumber = "917078101720";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const isDisabled =
    !name || !phone || !date || !people || !pickup || !drop;

  return (
    <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
      <Card className="shadow-lg border-slate-200 bg-white/95">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Icon
              icon="mdi:car"
              className="h-6 w-6 text-emerald-600"
            />
            Book Your Cab
          </CardTitle>
          <CardDescription>
            Fill the details below and confirm instantly on WhatsApp.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">

          {/* Selected Package */}
          <div className="rounded-lg bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            <p className="font-semibold">Selected Service</p>
            <p>{selectedPackage}</p>
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <Label>Full Name</Label>
            <Input
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label>WhatsApp Number</Label>
            <Input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Trip Type */}
          <div className="space-y-1.5">
            <Label>Trip Type</Label>
            <select
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option>Round Trip</option>
              <option>One Way</option>
              <option>Full Yatra Package</option>
            </select>
          </div>

          {/* Pickup & Drop */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Pickup Location</Label>
              <Input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Drop Location</Label>
              <Input
                placeholder="Kedarnath / Badrinath / etc"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
              />
            </div>
          </div>

          {/* Date + People */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Travel Date</Label>
              <Input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Number of People</Label>
              <Input
                type="number"
                min={1}
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>

          {/* Vehicle Selection */}
          <div className="space-y-1.5">
            <Label>Select Vehicle</Label>
            <select
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option>Dzire (4 Seater)</option>
              <option>Ertiga (6–7 Seater)</option>
            </select>
          </div>

          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            size="lg"
            disabled={isDisabled}
            onClick={handleBooking}
          >
            <Icon icon="mdi:whatsapp" className="mr-2 h-5 w-5" />
            Confirm & Chat on WhatsApp
          </Button>

          {isDisabled && (
            <p className="text-xs text-slate-500">
              Please fill all required fields.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Right Info Panel */}
      <div className="space-y-5 text-sm">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold mb-2">
            Why Book With Us?
          </h2>
          <ul className="space-y-2 list-disc pl-5 text-slate-600">
            <li>Private cab only (no sharing)</li>
            <li>Experienced hill drivers</li>
            <li>Transparent pricing</li>
            <li>Flexible pickup timing</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-950 text-white p-5">
          <h2 className="font-semibold mb-2">
            Fast Response
          </h2>
          <p className="text-xs text-slate-300">
            We usually respond within
            <span className="text-emerald-400 font-semibold">
              {" "}10–15 minutes
            </span>
            {" "}between 7 AM – 10 PM.
          </p>
        </div>
      </div>
    </div>
  );
} 