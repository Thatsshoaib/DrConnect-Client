"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    router.push("/dashboard");
  };

  return (
    <section className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--border)] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--foreground)] tracking-wide">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-[var(--foreground)]">Email</label>
            <div className="flex items-center bg-[var(--muted)] border border-[var(--border)] rounded-md px-3">
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

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-[var(--foreground)]">Password</label>
            <div className="flex items-center bg-[var(--muted)] border border-[var(--border)] rounded-md px-3">
              <Lock className="w-4 h-4 text-[var(--foreground)] opacity-60" />
              <input
                type="password"
                className="w-full px-2 py-2 bg-transparent outline-none text-[var(--foreground)] placeholder-gray-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm text-[var(--foreground)]/70">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[var(--primary)]" />
              Remember me
            </label>
            <a href="#" className="text-[var(--accent)] hover:underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover)] transition py-2 rounded-md text-white font-semibold tracking-wide shadow-md"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-sm text-center text-[var(--foreground)]/70">
          Don’t have an account?{" "}
          <a href="/register" className="text-[var(--accent)] hover:underline">Register</a>
        </p>
      </div>
    </section>
  );
}
