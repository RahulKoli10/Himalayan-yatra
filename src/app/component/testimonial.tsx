import { testimonials } from "../data/testimonail";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-gray-600 mb-4">
              &quot;{item.review}&quot;
            </p>
            <h4 className="font-semibold">
              — {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
