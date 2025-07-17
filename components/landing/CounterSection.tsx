"use client"
import React from "react";
import CountUp from "react-countup";

const counters = [
 { number: 40, suffix: "+", title: "Registered Doctors" },
  { number: 25, suffix: "+", title: "Hospitals Listed" },
  { number: 15, suffix: "+", title: "Medical Departments" },
  { number: 10, suffix: "+", title: "Years of Excellence" }
];

// Dot constants
const dotSize = 20;
const borderWidth = 2;

const translateSm = 72 - dotSize / 2 - borderWidth / 2;   // w-36
const translateMd = 96 - dotSize / 2 - borderWidth / 2;   // w-48
const translateLg = 120 - dotSize / 2 - borderWidth / 2;  // w-60

const CounterSection = () => {
  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .orbit-container {
          width: 0;
          height: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transform-origin: center;
        }

        .group:hover .orbit-container {
          animation: orbit 4s linear infinite;
        }

        .dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: rotate(0deg) translate(${translateSm}px) rotate(0deg);
        }

        @media (min-width: 640px) {
          .dot {
            transform: rotate(0deg) translate(${translateMd}px) rotate(0deg);
          }
        }

        @media (min-width: 1024px) {
          .dot {
            transform: rotate(0deg) translate(${translateLg}px) rotate(0deg);
          }
        }
      `}</style>

      <section className=" pt-20 lg:pt-28 pb-12 overflow-visible  ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center relative z-10">
          {counters.map((item, index) => (
            <div
              key={index}
              className={`relative w-36 sm:w-48 lg:w-60 h-36 sm:h-48 lg:h-60 flex items-center justify-center rounded-full border-2 border-white-500 group transition-all duration-300 ${
                index % 2 === 1 ? "-mt-8 sm:-mt-12 lg:-mt-16" : "mt-0"
              } mb-3 sm:mb-0`}
            >
              {/* Inner circle */}
              <div className="w-28 sm:w-40 lg:w-52 h-28 sm:h-40 lg:h-52  rounded-full flex flex-col items-center justify-center text-center">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[var(--accent)]">
                  <CountUp end={item.number} duration={2} />
                  {item.suffix}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[var(--foreground)] mt-1 sm:mt-2">{item.title}</p>
              </div>

              {/* Orbiting dot */}
              <div className="orbit-container">
                <div className="dot animate-blink">
                  <div className="w-5 h-5 bg-green-300 rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CounterSection;