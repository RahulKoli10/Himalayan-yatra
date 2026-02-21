"use client";

import { Icon } from "@iconify/react";

export default function WhatsAppButton() {
  const phoneNumber = "917078101720"; // Replace with your WhatsApp number
  const message = "Hello, I want to book a cab. Please provide details.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <Icon icon="mdi:whatsapp" className="h-5 w-5" />
      <span>Chat on WhatsApp</span>
    </button>
  );
}
