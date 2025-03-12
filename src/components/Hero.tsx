"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-4 py-10 mx-auto w-full max-w-5xl bg-[#0A1A2F] pt-48 ">
            {/* Left Section */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white">Vivek Kumar</h1>
                <div className="text-2xl md:text-4xl font-semibold mt-4">
                    <span className="text-[#00FFC6]">
                        <Typewriter words={["Full Stack Developer","Frontend Developer","Backend Developer"]} loop cursor />
                    </span>
                </div>
            </div>

            {/* Right Section - Image with rotating dashed border */}
            <div className="relative mt-10 md:mt-0 flex justify-center items-center">
                {/* Rotating Border */}
                <motion.div
                    className="absolute md:w-[280px] md:h-[280px] w-[220px] h-[220px] border-4 border-dashed rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    style={{ borderColor: "#00AEEF" }}
                ></motion.div>

                {/* Profile Image */}
                <Image
                    src="/heroo.jpg"
                    alt="Vivek"
                    width={250}
                    height={250}
                    className="rounded-full md:w-[250px] md:h-[250px] w-[200px] h-[200px] border-4 border-[#00AEEF]"
                />
            </div>
        </section>
    );
}
