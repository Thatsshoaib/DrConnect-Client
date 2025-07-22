"use client";
import Image from "next/image";
import { useState } from "react";
import { hospitals } from "../../../../utils/data";
import type { Hospital } from "../../../../utils/data";

export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredHospitals = hospitals
    .filter((hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "location") return a.location.localeCompare(b.location);
      if (sortBy === "specialization")
        return a.specialization.localeCompare(b.specialization);
      return 0;
    });

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
         {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Explore Our Hospital Partners
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            We’re connected with top-rated hospitals across Udaipur providing specialized care with trusted professionals.
          </p>
        </div>

        {/* Header Section with Search and Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search hospitals..."
              className="w-full px-4 py-2 border dark:border-gray-700 rounded-md text-sm focus:outline-none dark:bg-[#1e293b] bg-white text-gray-800 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-700 rounded-md text-sm focus:outline-none dark:bg-[#1e293b] bg-white text-gray-800 dark:text-white"
            >
              <option value="name">Sort by Name</option>
              <option value="location">Sort by Location</option>
              <option value="specialization">Sort by Specialization</option>
            </select>
          </div>
        </div>

       

        {/* Hospital Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={hospital.image || "/images/placeholder-hospital.jpg"}
                  alt={hospital.name || "Hospital Image"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {hospital.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {hospital.location}
                </p>

                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  {hospital.description}
                </p>

                <span className="inline-block mt-4 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100">
                  {hospital.specialization}
                </span>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition text-sm">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-blue-50 dark:bg-blue-900 px-8 py-12 rounded-2xl text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Not sure which hospital is right for you?
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-base">
            Get in touch with our health advisor and let us guide you to the best care.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
}
