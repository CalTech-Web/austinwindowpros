"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen ? "border-blue-200 shadow-md" : "border-gray-100 shadow-sm hover:shadow-md"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: isOpen ? "#3b82f6" : "#1a3a5c" }}
                >
                  {i + 1}
                </span>
                <h3
                  className="font-bold text-base"
                  style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}
                >
                  {faq.q}
                </h3>
              </div>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                style={{ color: "#3b82f6" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
            >
              <p className="px-5 pb-5 pl-16 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
