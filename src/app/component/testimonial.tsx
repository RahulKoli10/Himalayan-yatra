import Image from "next/image";
import { testimonials } from "../data/testimonail";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

        {/* Heading */}
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            What Our Yatris Say About Us
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Real experiences from pilgrims who travelled with Himalayan Yatra.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60"
            >
              {/* Rating */}
              <div className="flex mb-3 text-amber-400 text-sm">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                “{item.review}”
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {item.location} • {item.trip}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}