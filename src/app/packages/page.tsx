import { Icon } from "@iconify/react";

import { packages, PackageType } from "../data/package";
import PackageCard from "../component/PackageCard";

export default function Packages() {
  return (
    <main className="section-muted min-h-screen py-12">
      <div className="container space-y-10">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/30">
            <Icon icon="mdi:mountain-range" className="h-4 w-4" />
            Hand‑crafted Char Dham itineraries
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">
            Choose the yatra package that fits your schedule.
          </h1>
          <p className="text-sm text-slate-600 md:text-base">
            These sample packages can be customized with hotels, meals and extra
            sightseeing as per your family’s needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg: PackageType) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </main>
  );
}
