import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container space-y-14">

        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700">
            <Icon icon="mdi:map-marker-radius-outline" className="h-4 w-4" />
            Based in Haridwar • Uttarakhand
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Trusted Local Cab Operator for Char Dham Yatra
          </h1>

          <p className="text-sm text-slate-600 md:text-base">
            Himalayan Yatra Travels is a small, family-run cab service
            specializing in Char Dham, Kedarnath, Badrinath and daily
            Uttarakhand routes. We focus on safe driving, honest pricing and
            direct communication with yatris.
          </p>
        </div>

        {/* Core Highlights */}
        <div className="grid gap-6 md:grid-cols-3">

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  icon="mdi:car"
                  className="h-5 w-5 text-emerald-600"
                />
                Own Vehicles
              </CardTitle>
              <CardDescription>
                We operate our own Dzire and Ertiga cabs, ensuring
                proper maintenance and reliable service.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  icon="mdi:account-group"
                  className="h-5 w-5 text-sky-600"
                />
                Direct Owner Support
              </CardTitle>
              <CardDescription>
                No middle agents or call centers. You talk directly with
                the owner for planning and confirmations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon
                  icon="mdi:shield-check"
                  className="h-5 w-5 text-amber-600"
                />
                Safe Hill Driving
              </CardTitle>
              <CardDescription>
                Experienced mountain driving for Kedarnath,
                Badrinath, Gangotri and Yamunotri routes.
              </CardDescription>
            </CardHeader>
          </Card>

        </div>

        {/* Detailed Section */}
        <div className="grid gap-10 md:grid-cols-2 items-start">

          <div className="space-y-4 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-800">
              Our Mission
            </h2>

            <p>
              Our mission is simple — to provide reliable and comfortable
              cab services for pilgrims visiting Char Dham Yatra and nearby
              spiritual destinations.
            </p>

            <p>
              We understand mountain terrain, darshan rush, senior citizen
              needs and weather conditions. That’s why we focus only on
              Uttarakhand yatra routes instead of operating nationwide tours.
            </p>

            <p>
              Transparency in pricing and respectful behavior towards
              yatris is our priority.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-800">
              Why Travelers Choose Us
            </h2>

            <ul className="space-y-2 list-disc pl-5">
              <li>Private cab only (no sharing)</li>
              <li>Pickup from Haridwar, Dehradun & Delhi</li>
              <li>Clear breakdown of tolls & driver allowance</li>
              <li>Flexible pickup timing</li>
              <li>Quick WhatsApp response</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}