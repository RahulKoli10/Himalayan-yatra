"use client";

import { useState } from "react";
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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    tripType: "Char Dham",
    people: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const message = `
📞 *Call Back Request – Himalayan Yatra Travels*

👤 Name: ${form.name}
📱 WhatsApp: ${form.phone}
🏙 Travelling From: ${form.city || "Not specified"}
🛕 Trip Type: ${form.tripType}
👥 Number of People: ${form.people || "Not specified"}

📝 Notes:
${form.notes || "None"}

Please contact and share cab details.
    `;

    const encoded = encodeURIComponent(message);

    setTimeout(() => {
      window.location.href = `https://wa.me/917078101720?text=${encoded}`;
    }, 500);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-14">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT FORM */}
        <Card className="border border-slate-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Icon
                icon="mdi:phone-check-outline"
                className="h-6 w-6 text-emerald-600"
              />
              Request a Call / WhatsApp
            </CardTitle>
            <CardDescription>
              Planning Char Dham or daily cab travel? Share your details and we
              will contact you shortly.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">

            <div className="space-y-1.5">
              <Label>Full Name *</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-1.5">
              <Label>WhatsApp Number *</Label>
              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="7078101720"
              />
            </div>

            <div className="space-y-1.5">
              <Label>City You Are Travelling From</Label>
              <Input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Delhi / Mumbai / Ahmedabad"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Trip Type</Label>
              <select
                name="tripType"
                value={form.tripType}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              >
                <option>Char Dham</option>
                <option>Kedarnath</option>
                <option>Do Dham</option>
                <option>Daily Cab Booking</option>
                <option>Custom Tour</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label>Number of People</Label>
              <Input
                name="people"
                type="number"
                min={1}
                value={form.people}
                onChange={handleChange}
                placeholder="e.g. 4"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Trip Notes (Optional)</Label>
              <Input
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Approx dates, senior citizens, cab type etc."
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              <Icon icon="mdi:whatsapp" className="mr-2 h-5 w-5" />
              {loading ? "Redirecting..." : "Send on WhatsApp"}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              We usually respond within 10–15 minutes (7 AM – 10 PM)
            </p>

          </CardContent>
        </Card>

        {/* RIGHT INFO PANEL */}
        <div className="space-y-6 text-sm">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 font-semibold">
              <Icon
                icon="mdi:map-marker-radius-outline"
                className="h-5 w-5 text-emerald-600"
              />
              Operation Area
            </h2>
            <p>
              We operate mainly from Haridwar, Rishikesh & Dehradun for
              Char Dham departures.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Delhi, Chandigarh & airport pickups available on request.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <h2 className="mb-2 flex items-center gap-2 font-semibold">
              <Icon
                icon="mdi:car"
                className="h-5 w-5 text-emerald-400"
              />
              Why Choose Us?
            </h2>
            <ul className="space-y-1 text-xs text-slate-300 list-disc pl-5">
              <li>Own Dzire & Ertiga vehicles</li>
              <li>Experienced hill driving</li>
              <li>Transparent cab pricing</li>
              <li>Direct owner communication</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}