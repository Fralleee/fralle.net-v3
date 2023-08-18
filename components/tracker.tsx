"use client";

import { useEffect, useState } from "react";

export default function Tracker() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

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

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
