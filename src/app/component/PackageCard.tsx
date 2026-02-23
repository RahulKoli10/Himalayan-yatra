import Link from "next/link";
import { Icon } from "@iconify/react";

import { PackageType } from "../data/package";
import {
  Card,
  CardContent,
  CardDescription,
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
    <Card className="flex h-full flex-col justify-between border-slate-200/80 hover:border-emerald-200">
      <CardHeader>
        <CardTitle className="mb-1 text-lg md:text-xl">
          {pkg.title}
        </CardTitle>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Icon icon="mdi:calendar-clock-outline" className="h-4 w-4" />
          <span>{pkg.duration}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-emerald-600">
            {pkg.price}
          </span>
          <span className="text-xs text-slate-500">per cab</span>
        </div>
        <CardDescription className="text-sm text-slate-600">
          {pkg.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between gap-3">
        <p className="text-[11px] text-slate-500">
          Customized hotels &amp; meals can be arranged on request.
        </p>
        <Button
          asChild
          size="sm"
          className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600"
        >
          <Link href={`/book?package=${encodeURIComponent(pkg.title)}`}>
            <Icon icon="mdi:send-circle-outline" className="mr-1.5 h-4 w-4" />
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
