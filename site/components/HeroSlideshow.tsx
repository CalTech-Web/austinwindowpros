"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/gallery/project-13.jpg", alt: "Window installation project in Austin TX" },
  { src: "/images/hero/hero-01.jpg", alt: "Custom window replacement by Austin Window Pros" },
  { src: "/images/gallery/project-05.jpg", alt: "Residential window upgrade in Central Texas" },
  { src: "/images/gallery/project-20.jpg", alt: "Professional door installation in Austin" },
  { src: "/images/gallery/project-10.jpg", alt: "Energy efficient windows installed in Austin home" },
];

const DURATION = 6000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, DURATION);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-25" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover ${i === current ? "animate-hero-zoom" : ""}`}
            priority={i === 0}
            quality={45}
            sizes="100vw"
          />
        </div>
      ))}
    </>
  );
}
