"use client";

import { useState } from "react";

export default function DailyBookingPage() {
  const [form, setForm] = useState({
    tripType: "One Way",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "Sedan",
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
🚖 *New Cab Booking Request*

Trip Type: ${form.tripType}
Pickup: ${form.pickup}
Drop: ${form.drop}
Date: ${form.date}
Time: ${form.time}
Vehicle: ${form.vehicle}
Passengers: ${form.passengers}

Name: ${form.name}
Phone: ${form.phone}

Notes: ${form.notes}

Please confirm availability.
    `;

    const encodedMessage = encodeURIComponent(message);

    setTimeout(() => {
      window.location.href = `https://wa.me/917078101720?text=${encodedMessage}`;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Book Your Daily Cab
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Safe & Reliable Travel Across North India
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl space-y-4"
      >
        {/* Trip Type */}
        <select
          name="tripType"
          value={form.tripType}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        >
          <option>One Way</option>
          <option>Round Trip</option>
        </select>

        {/* Pickup & Drop */}
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location *"
          value={form.pickup}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          name="drop"
          placeholder="Drop Location *"
          value={form.drop}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />
        </div>

        {/* Vehicle */}
        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        >
          <option>4 seater(Dzire) </option>
          <option>8 seater(Ertiga)</option>
          <option>Tempo Traveller</option>
        </select>

        {/* Passengers */}
        <input
          type="number"
          name="passengers"
          placeholder="Number of Passengers"
          value={form.passengers}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        {/* Name & Phone */}
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        {/* Notes */}
        <textarea
          name="notes"
          placeholder="Special Instructions"
          value={form.notes}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          {loading ? "Redirecting to WhatsApp..." : "Book via WhatsApp"}
        </button>
      </form>

      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/917078101720"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        WhatsApp
      </a> */}
    </div>
  );
}