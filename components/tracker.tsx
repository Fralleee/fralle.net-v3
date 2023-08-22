"use client";

import { useEffect, useState } from "react";

export default function Tracker() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const [colorScheme, setColorScheme] = useState("light");

  const handleMouseMove = (event: MouseEvent) => {
    setGradientPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setColorScheme(newColorScheme);
    };

    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (colorSchemeQuery.matches) {
      setColorScheme("dark");
    }

    colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      colorSchemeQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  const useTracker = colorScheme === "dark";
  return useTracker ? (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  ) : null;
}
