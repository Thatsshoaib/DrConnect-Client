"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { heroslides } from "../../utils/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSwiper() {
  return (
   <section className="w-full bg-[var(--background)] text-[var(--foreground)]">
  <Swiper
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{ delay: 4000 }}
    modules={[Pagination, Autoplay]}
    className="w-full h-full"
  >
    {heroslides.map((slide) => (
      <SwiperSlide key={slide.id}>
        <div className="relative h-[100vh] md:h-[92vh] w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src={slide.img}
            alt={slide.title1}
            fill
            className="object-filld object-center brightness-90"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block bg-[var(--accent)]/20 text-[var(--accent)] px-4 py-1 text-sm rounded-full tracking-wide uppercase mb-6 shadow-sm backdrop-blur-sm">
              Trusted by 10,000+ Patients
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-2xl">
              <span className="text-white">{slide.title1}</span>{" "}
              <span className="text-[var(--primary)]">{slide.title2}</span>
            </h2>

            <p className="text-gray-300 max-w-2xl text-base md:text-lg drop-shadow-lg">
              {slide.text}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[var(--button-bg)] text-white px-6 py-3 rounded-full font-medium text-sm md:text-base shadow-lg hover:bg-[var(--primary)] transition">
                Book Appointment
              </button>
              <button className="border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[var(--accent)] hover:text-white transition shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Swiper Pagination Styling */}
  <style jsx global>{`
    .swiper-pagination-bullet {
      background: var(--accent);
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      background: var(--foreground);
      opacity: 1;
    }
  `}</style>
</section>

  );
}
