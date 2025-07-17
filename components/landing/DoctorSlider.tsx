"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../UI/Button";
import { Pagination, Autoplay } from "swiper/modules";
import { doctors } from "../../utils/data";

export default function DoctorSlider() {
  return (
  <section className="text-white py-24">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-5xl font-bold text-center mb-16 text-[var(--foreground)]">
      Experts
    </h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12" // space for dots
    >
      {doctors.map((doc, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden px-6 py-8 h-[420px] w-full max-w-[350px] mx-auto text-center flex flex-col items-center justify-start">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-white mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-white mb-1">{doc.name}</h3>
            <p className="text-sm text-[#ccc] mb-2 font-medium">{doc.title}</p>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{doc.desc}</p>
            <span className="text-sm text-blue-400 cursor-pointer hover:underline mb-4">
              Read More
            </span>
            <div className="flex gap-3 mt-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-md">
                Consult
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 text-sm rounded-md">
                Appointment
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


  );
}
