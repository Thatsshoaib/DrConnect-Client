// components/ThemeProvider.tsx
"use client";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 50,
          background: "var(--primary-color)",
          color: "var(--text-color)",
          padding: "8px 12px",
          borderRadius: "8px",
        }}
      >
        Toggle Theme
      </button>
      {children}
    </>
  );
};

export default ThemeProvider;
