"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="text-[var(--foreground)] py-20 px-6 md:px-28 space-y-24 leading-relaxed bg-[var(--background)]">

      {/* Intro */}
      <section className="text-center space-y-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold">Who We Are</h1>
        <p className="text-lg text-gray-400">
          We are a forward-thinking digital healthcare platform redefining how people access care. With a blend of technology and compassion, we empower patients to connect directly with licensed medical professionals — safely, quickly, and effortlessly.
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/assets/images/healthcareTeam.png"
            alt="Healthcare team illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to make healthcare universally accessible and deeply personal. We believe no one should struggle to find trustworthy care. Through real-time video, smart scheduling, and AI-powered tools, we eliminate barriers between patients and qualified professionals.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/mission.jpg"
            alt="Mission graphic"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Image
            src="/assets/images/vision.webp"
            alt="Vision illustration"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-400">
            We envision a world where healthcare is instant, transparent, and inclusive. No long queues. No guesswork. Just expert care delivered with empathy — available to anyone, anywhere, at any time.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Secure Video Consultations with Verified Doctors",
            "Encrypted One-on-One Patient-Doctor Chat",
            "Doctor Credential Verification System",
            "Hospital & Clinic Listings with User Reviews",
            "Two-Factor Authentication for Safety",
            "Integrated Smart Appointment Scheduling",
            "Dedicated Dashboards for Patients and Doctors",
            "24/7 AI ChatBot for Support and Navigation",
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-[var(--accent)] mt-1" />
              <p className="text-gray-400 text-base">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Users */}
      <section className="text-center space-y-10">
        <h2 className="text-4xl font-bold">Who Can Use Our Platform?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          We support both ends of the healthcare spectrum — patients looking for care and professionals providing it.
        </p>
        <div className="grid md:grid-cols-2 gap-12 pt-6">
          <div className="p-8 border border-[var(--border)] rounded-xl bg-white/5 text-left space-y-4">
            <Image
              src="/images/patient.png"
              alt="Patient illustration"
              width={80}
              height={80}
              className="mb-2"
            />
            <h3 className="text-2xl font-semibold">Patients</h3>
            <p className="text-gray-400">
              Browse profiles, check availability, consult virtually, store prescriptions, and keep your medical journey in one place.
            </p>
          </div>
          <div className="p-8 border border-[var(--border)] rounded-xl bg-white/5 text-left space-y-4">
            <Image
              src="/images/doctor.png"
              alt="Doctor icon"
              width={80}
              height={80}
              className="mb-2"
            />
            <h3 className="text-2xl font-semibold">Doctors</h3>
            <p className="text-gray-400">
              Create verified profiles, manage bookings, interact with patients, and offer consultations through a secure, trusted system.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold">Your Privacy, Our Promise</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          We use bank-grade encryption, activity logging, and strict compliance with global data laws to ensure your personal and medical data stays private.
        </p>
        <Image
          src="/assets/images/security.jpg"
          alt="Security shield"
          width={350}
          height={300}
          className="mx-auto mt-4"
        />
      </section>

      {/* CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold">Be Part of the Future of Healthcare</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We’re building a healthier world — one digital interaction at a time. Join us today and experience care the way it should be.
        </p>
        <button className="mt-4 bg-[var(--secondary)] hover:bg-[var(--button-hover)] text-[var(--foreground)] px-8 py-3 rounded-lg transition font-semibold shadow-md">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
