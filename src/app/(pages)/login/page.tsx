"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    router.push("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[#0d1117]">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl z-0 animate-[pulse_5s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl z-0 animate-[pulse_5s_ease-in-out_infinite]"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-in-out">
        
        {/* Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10">
          <img
            src="/assets/icons/mobile-login-animate.SVG"
            alt="Login Illustration"
            className="max-w-xs animate-fade-in"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-[var(--foreground)]">
          <h2 className="text-4xl font-extrabold mb-2 text-center tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm mb-8 text-center opacity-70">
            Please enter your credentials to access your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <div className="flex items-center bg-[var(--muted)] border border-[var(--border)] rounded-md px-3 focus-within:ring-2 ring-[var(--accent)] transition">
                <Mail className="w-4 h-4 text-[var(--foreground)] opacity-60" />
                <input
                  type="email"
                  className="w-full px-2 py-2 bg-transparent outline-none text-[var(--foreground)] placeholder-gray-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password with Toggle */}
            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <div className="relative flex items-center bg-[var(--muted)] border border-[var(--border)] rounded-md px-3 focus-within:ring-2 ring-[var(--accent)] transition">
                <Lock className="w-4 h-4 text-[var(--foreground)] opacity-60" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-2 py-2 bg-transparent outline-none text-[var(--foreground)] placeholder-gray-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[var(--foreground)] opacity-60 hover:opacity-100 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm text-[var(--foreground)]/70">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[var(--primary)]" />
                Remember me
              </label>
              <a href="#" className="text-[var(--accent)] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover)] transition-all py-3 rounded-md text-white font-semibold tracking-wide shadow-md hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-sm text-center text-[var(--foreground)]/70">
            Don’t have an account?{" "}
            <a href="/register" className="text-[var(--accent)] hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
