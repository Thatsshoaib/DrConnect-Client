"use client";

import { services } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  return (
    <section className="w-full  text-[var(--foreground)] py-20  bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[var(--accent)]">
          What You Can Do
        </h2>
        <p className="text-center text-sm text-[var(--foreground)] mb-12 max-w-2xl mx-auto">
          Explore powerful features that make your healthcare journey seamless and accessible.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          className="!pb-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={index}>
                <div className="group relative bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-[var(--primary)]/50 transition duration-300 ease-in-out h-full">
                  <div className="mb-5 w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:rotate-[8deg] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--accent)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">
                    {service.description}
                  </p>
                  <span className="absolute bottom-4 left-6 w-0 h-[2px] bg-[var(--primary)] group-hover:w-16 transition-all duration-300"></span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
