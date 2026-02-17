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
  return (
    <main className="section-muted min-h-screen py-12">
      <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-200/80 bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Icon
                icon="mdi:phone-check-outline"
                className="h-6 w-6 text-emerald-600"
              />
              Get a call back for your yatra plan
            </CardTitle>
            <CardDescription>
              Share your contact details and our team will call or message you
              with a suitable itinerary and quote.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">WhatsApp number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g. 9876543210"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="city">City you are travelling from</Label>
              <Input id="city" placeholder="e.g. Delhi, Mumbai, Ahmedabad" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="notes">Trip notes (optional)</Label>
              <Input
                id="notes"
                placeholder="Approx. dates, number of days, senior citizens etc."
              />
            </div>

            <Button className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700">
              <Icon icon="mdi:phone-forward" className="mr-2 h-5 w-5" />
              Request a call / WhatsApp
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6 text-sm text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <Icon
                icon="mdi:map-marker-radius-outline"
                className="h-5 w-5 text-emerald-600"
              />
              Office &amp; operation area
            </h2>
            <p className="mb-2">
              We primarily operate from Haridwar, Rishikesh and Dehradun for Char
              Dham departures.
            </p>
            <p className="text-xs text-slate-500">
              Pick‑ups from Delhi, Chandigarh and other cities can be arranged on
              request.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100">
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <Icon
                icon="mdi:whatsapp"
                className="h-5 w-5 text-emerald-400"
              />
              Direct WhatsApp support
            </h2>
            <p className="mb-3 text-xs text-slate-300">
              Prefer WhatsApp? Click the button below to chat directly with us.
            </p>
            <a
              href="https://wa.me/917088308738?text=Hi%2C%20I%20want%20to%20plan%20my%20Char%20Dham%20Yatra."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-white shadow-md hover:bg-emerald-600"
            >
              <Icon icon="mdi:whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

