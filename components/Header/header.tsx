"use client";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import routes from "../../lib/routes";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--card-bg)] sticky top-0 z-50 rounded-b-4xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          DrConnect
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) => (
            <button
              key={idx}
              onClick={() => router.push(item.href)}
              className="text-sm font-medium text-white px-3 py-1 hover:text-[var(--primary)] underline-offset-4 transition-all duration-200 hover:cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--primary)]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Login */}
{/* Desktop Auth Buttons */}
<div className="hidden md:flex items-center gap-4">
  <button
    className="text-sm px-6 py-1.5 rounded-full text-white border border-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
    onClick={() => router.push(routes.LOGIN)}

  >
    Login
  </button>
  <button
    className="bg-[var(--button-bg)] text-white px-6 py-1.5 rounded-full text-sm hover:bg-[var(--button-hover)] transition"
    onClick={() => router.push("/register")}
  >
    Sign Up
  </button>
</div>

      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[var(--card-bg)] border-l border-[var(--border)] z-50 transform transition-transform duration-300 ease-in-out rounded-l-2xl shadow-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-[var(--border)] pb-3">
            <span className="text-2xl font-bold text-white tracking-wide">
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[var(--primary)] hover:text-[var(--foreground)] transition"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMenuOpen(false);
                  router.push(item.href);
                }}
                className="text-left text-[15px] font-medium text-white hover:text-[var(--accent)] transition-all duration-300 ease-in-out pl-1"
                style={{
                  animation: `fadeIn 0.3s ease ${(idx + 1) * 0.05}s both`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Login Button */}
          {/* Auth Buttons for Mobile */}
<div className="mt-auto pt-6 flex flex-col gap-3">
  <button
    className="w-full bg-[var(--button-bg)] text-white px-6 py-2 rounded-full text-sm hover:bg-[var(--button-hover)] transition-all duration-300"
    onClick={() => {
      setMenuOpen(false);
      router.push("/login");
    }}
  >
    Login
  </button>
  <button
    className="w-full text-sm text-white border border-white py-2 rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
    onClick={() => {
      setMenuOpen(false);
      router.push("/register");
    }}
  >
    Sign Up
  </button>
</div>

        </div>
      </div>

      {/* Optional Backdrop (click to close) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
