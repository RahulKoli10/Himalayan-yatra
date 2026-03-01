import Link from "next/link";
import { Icon } from "@iconify/react";
import { PackageType } from "../data/package";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  pkg: PackageType;
}

export default function PackageCard({ pkg }: Props) {
  return (
    <Card className="group relative flex h-full flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {pkg.badge && (
        <span className="absolute right-4 top-4 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          {pkg.badge}
        </span>
      )}

      <CardHeader className="space-y-2">
        <CardTitle className="text-lg md:text-xl">
          {pkg.title}
        </CardTitle>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Icon icon="mdi:calendar-clock-outline" className="h-4 w-4" />
          <span>{pkg.duration}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Icon icon="mdi:car-outline" className="h-4 w-4" />
          <span>{pkg.vehicle}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-emerald-600">
            {pkg.price}
          </span>
          <span className="text-xs text-slate-500">
            per cab (approx.)
          </span>
        </div>

        <p className="text-sm text-slate-600">
          {pkg.description}
        </p>

        <ul className="space-y-2 text-xs text-slate-600">
          {pkg.highlights.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon
                icon="mdi:check-circle-outline"
                className="mt-0.5 h-4 w-4 text-emerald-500"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </CardContent>

      <CardFooter className="mt-auto flex flex-col gap-3">
        <p className="text-[11px] text-slate-500 text-center">
          *Hotel bookings not included. Assistance available on request.
        </p>

        <Button
          asChild
          size="sm"
          className="w-full bg-emerald-600 hover:bg-emerald-700"
        >
          <Link href={`/book?package=${encodeURIComponent(pkg.title)}`}>
            <Icon icon="mdi:send-circle-outline" className="mr-1.5 h-4 w-4" />
            Get Cab Quote
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}