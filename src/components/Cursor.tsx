"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
            style={{
                backgroundColor: hovered ? "#00FFC6" : "#00AEEF",
                mixBlendMode: "difference",
            }}
            animate={{
                x: position.x - 12, // Adjust for center alignment
                y: position.y - 12,
                scale: hovered ? 1.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
}

