"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../../utils/data";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 16 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <section className="py-24 bg-white dark:bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          What People Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Hear from our doctors and patients about their experience with our platform.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => {
            const isActive = i === currentSlide || i === (currentSlide + 1) % testimonials.length || i === (currentSlide - 1 + testimonials.length) % testimonials.length;
            const isCenter = i === currentSlide;
            return (
              <div
                key={i}
                className={`keen-slider__slide p-4 transition-all duration-300 ${
                  isCenter
                    ? "scale-100 backdrop-blur-0 z-10"
                    : "scale-90 backdrop-blur-md opacity-60 z-0"
                }`}
              >
                <div
                  className={`relative rounded-2xl shadow-xl border p-6 h-full ${
                    isCenter
                      ? "bg-white dark:bg-[#1e293b] border-indigo-500"
                      : "bg-white/40 dark:bg-white/10 border-gray-300 dark:border-gray-700"
                  }`}
                >
                  <Quote className="w-8 h-8 text-indigo-500 absolute -top-4 -left-4 bg-white dark:bg-gray-900 p-1 rounded-full border border-gray-300 dark:border-gray-700" />
                  <p className="text-gray-800 dark:text-gray-300 mb-4">{t.message}</p>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
