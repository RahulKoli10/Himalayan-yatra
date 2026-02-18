import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="section-muted min-h-screen py-12">
      <div className="container space-y-10">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/30">
            <Icon icon="mdi:map-marker-radius-outline" className="h-4 w-4" />
            Local operator from Uttarakhand
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">
            About Himalayan Yatra Travels
          </h1>
          <p className="text-sm text-slate-600 md:text-base">
            We are a small, owner‑run travel company based in Uttarakhand,
            focused only on Char Dham and nearby yatra routes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  icon="mdi:calendar-clock-outline"
                  className="h-5 w-5 text-emerald-600"
                />
                3+ years experience
              </CardTitle>
              <CardDescription>
                Serving yatris from all over India with safe cabs and honest
                guidance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  icon="mdi:account-group"
                  className="h-5 w-5 text-sky-600"
                />
                Family‑run business
              </CardTitle>
              <CardDescription>
                Direct conversation with the owner — no call centres or middle
                agents.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon icon="mdi:hand-heart" className="h-5 w-5 text-amber-600" />
                Yatra‑first mindset
              </CardTitle>
              <CardDescription>
                Focus on darshan timings, senior citizen comfort and safe
                halts.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

