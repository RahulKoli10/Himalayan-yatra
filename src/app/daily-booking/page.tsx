"use client";

import { useState } from "react";

export default function DailyBookingPage() {
  const [form, setForm] = useState({
    tripType: "One Way",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "Dzire (4 Seater)",
    passengers: "",
    name: "",
    phone: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.pickup ||
      !form.drop ||
      !form.date ||
      !form.time ||
      !form.name ||
      !form.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const message = `
🚖 *Daily Cab Booking Request*

🛣 Trip Type: ${form.tripType}
📍 Pickup: ${form.pickup}
📍 Drop: ${form.drop}

📅 Date: ${form.date}
⏰ Time: ${form.time}

🚗 Vehicle: ${form.vehicle}
👥 Passengers: ${form.passengers || "Not specified"}

👤 Name: ${form.name}
📞 Phone: ${form.phone}

📝 Notes: ${form.notes || "None"}

Please confirm fare & availability.
    `;

    const encodedMessage = encodeURIComponent(message);

    setTimeout(() => {
      window.location.href = `https://wa.me/917078101720?text=${encodedMessage}`;
    }, 600);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Daily Cab Booking
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            Pauri • Delhi • Tehri • Haridwar • Dehradun • Airport Transfers
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-5 border border-slate-200"
        >
          {/* Trip Type */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Trip Type</label>
            <select
              name="tripType"
              value={form.tripType}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Outstation Multi-Day</option>
            </select>
          </div>

          {/* Pickup & Drop */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Pickup Location *</label>
              <input
                type="text"
                name="pickup"
                placeholder="e.g. Pauri / Delhi Airport"
                value={form.pickup}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Drop Location *</label>
              <input
                type="text"
                name="drop"
                placeholder="e.g. Tehri / Haridwar"
                value={form.drop}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Travel Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Pickup Time *</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>
          </div>

          {/* Vehicle */}
          <div>
            <label className="text-sm font-medium">Vehicle Type</label>
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-xl mt-1"
            >
              <option>Dzire (4 Seater)</option>
              <option>Ertiga (6–7 Seater)</option>
              <option>Tempo Traveller (On Request)</option>
            </select>
          </div>

          {/* Passengers */}
          <div>
            <label className="text-sm font-medium">Number of Passengers</label>
            <input
              type="number"
              name="passengers"
              min={1}
              placeholder="e.g. 4"
              value={form.passengers}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-xl mt-1"
            />
          </div>

          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Your Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 p-3 rounded-xl mt-1"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-medium">
              Special Instructions (Optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full border border-slate-300 p-3 rounded-xl mt-1"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300"
          >
            {loading ? "Redirecting to WhatsApp..." : "Confirm & Book via WhatsApp"}
          </button>
        </form>
      </div>
    </main>
  );
}