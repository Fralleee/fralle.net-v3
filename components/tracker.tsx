"use client";

import { useEffect, useState } from "react";

export default function Tracker() {
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
    const [colorScheme, setColorScheme] = useState("none");

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

        const colorSchemeQuery = window.matchMedia(
            "(prefers-color-scheme: dark)",
        );
        if (colorSchemeQuery.matches) {
            setColorScheme("dark");
        }

        colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

        return () => {
            colorSchemeQuery.removeEventListener(
                "change",
                handleColorSchemeChange,
            );
        };
    }, []);

    const darkColor = "rgba(29 78 216 / 0.15)";
    const lightColor = "rgb(250 252 254)";
    const trackerColor = colorScheme === "dark" ? darkColor : lightColor;
    const useTracker = colorScheme !== "none";
    return useTracker ? (
        <div
            className="pointer-events-none fixed inset-0 -z-10 hidden transition duration-300 lg:block"
            style={{
                background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, ${trackerColor}, transparent 80%)`,
            }}
        />
    ) : null;
}
