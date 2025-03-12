"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);
    const [darkMode, setDarkMode] = useState(true); // Default to dark

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest < (scrollY.getPrevious() || 0));
    });

    // Load theme from localStorage AFTER component mounts
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = darkMode ? "light" : "dark";
        setDarkMode(!darkMode);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 left-1/2 transform px-2 -translate-x-1/2 w-full max-w-[400px] bg-opacity-50 backdrop-blur-lg bg-[#09121A]/50 dark:bg-[#1B2530]/80 border border-[#4FC3F7] dark:border-[#7DD3FC] rounded-full p-4 flex justify-between items-center z-50 shadow-xl text-[#DDE6ED] dark:text-[#A1CCD1]"
        >
            <ul className="flex w-full justify-center gap-4">
                <li className="hover:text-[#7DD3FC] cursor-pointer">
                    <Link href="#projects">Projects</Link>
                </li>
                <li className="hover:text-[#7DD3FC] cursor-pointer">
                    <Link href="#skills">Skills</Link>
                </li>
                <li className="hover:text-[#7DD3FC] cursor-pointer">
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
            
        </motion.nav>
    );
};

export default Navbar;
