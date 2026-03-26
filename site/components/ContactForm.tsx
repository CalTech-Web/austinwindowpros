"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
          style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}
        >
          ✓
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
          Message Received!
        </h3>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          Thank you for contacting Austin Window Pros. We will be in touch within one business day. You can also reach us directly at{" "}
          <a href="tel:5124221907" style={{ color: "#3b82f6" }}>
            (512) 422-1907
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition";
  const inputStyle = { borderColor: "#e5e7eb", color: "#171717" };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
            Full Name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(512) 555-0000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
          Email Address <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
          Service Needed
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        >
          <option value="">Select a service...</option>
          <option value="window-replacement">Window Replacement</option>
          <option value="door-replacement">Door Replacement</option>
          <option value="patio-door">Patio Door</option>
          <option value="siding">Siding Installation</option>
          <option value="outdoor-enclosures">Outdoor Enclosures</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#374151" }}>
          Message <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, number of windows, or any questions you have..."
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "#3b82f6" }}
      >
        {submitting ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
        No spam. No pressure. We will get back to you within one business day.
      </p>
    </form>
  );
}
