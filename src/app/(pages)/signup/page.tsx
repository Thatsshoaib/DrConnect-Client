"use client";

import { useState } from "react";
import { Upload, User, Mail, Lock } from "lucide-react";

export default function SignupForm() {
  const [role, setRole] = useState("patient");
  const [certificate, setCertificate] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificate(e.target.files[0]);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[var(--background)]">
      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl z-0 animate-[pulse_5s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl z-0 animate-[pulse_5s_ease-in-out_infinite]"></div>

      <div className="relative z-10 w-full max-w-3xl bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 m-10">
        <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-8">
          Create an Account
        </h2>

        {/* Role Switch */}
        <div className="flex justify-center gap-4 mb-6">
          {["patient", "doctor"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                role === r
                  ? "bg-[var(--button-bg)] text-white shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-5 text-[var(--foreground)]/90">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 w-4 h-4 text-white/50" />
              <input
                type="email"
                required
                className="pl-10 pr-4 py-2 w-full rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white placeholder-white/60"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <div className="relative">
              <User className="absolute top-3 left-3 w-4 h-4 text-white/50" />
              <input
                type="text"
                required
                className="pl-10 pr-4 py-2 w-full rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white placeholder-white/60"
                placeholder="johndoe"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 w-4 h-4 text-white/50" />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="pl-10 pr-10 py-2 w-full rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white placeholder-white/60"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/50 hover:text-white"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5.5 0-10-4.5-10-10 0-1.7.44-3.3 1.23-4.68M1 1l22 22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Doctor-only Fields */}
          {role === "doctor" && (
            <>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Medical License No.
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MD123456"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white placeholder-white/60"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Specialization
                </label>
                <input
                  type="text"
                  placeholder="specialization"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white/80"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Years of Experience
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-white placeholder-white/60"
                  placeholder="e.g. 5"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Upload Certificate
                </label>
                <div className="relative flex items-center border border-[var(--border)] bg-white/5 rounded-md px-3 py-2">
                  <Upload className="text-white/50 mr-2" />
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                    className="w-full bg-transparent text-white"
                  />
                </div>
                {certificate && (
                  <p className="text-sm text-green-400 mt-1">
                    File: {certificate.name}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-md bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white font-semibold tracking-wide shadow-md hover:scale-[1.02] transition-transform"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
