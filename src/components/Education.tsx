"use client";

import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const educationData = [
    {
        degree: "B.Tech in Electronics & Communication",
        institution: "Sant Longowal Institute of Engineering and Technology",
        duration: "2023 - 2026",
        icon: <FaUniversity size={30} className="text-blue-400" />
    }
];

export default function Education() {
    return (
        <section className="py-20 bg-[#0A1A2F] text-white" id="education">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg shadow-lg mb-8 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
                    <div className="absolute inset-0 bg-opacity-20 backdrop-blur-md"></div>
                    <div className="flex space-x-4 overflow-hidden">
                        <div className="animate-marquee flex min-w-max">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                Education ✦ Education ✦ Education ✦ Education ✦ Education <span className="opacity-0">p </span>
                            </h2>
                        </div>
                        <div className="animate-marquee flex min-w-max" aria-hidden="true">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                               ✦ Education ✦ Education ✦ Education ✦ Education ✦ Education ✦
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Education Timeline */}
                <div className="flex flex-col items-center space-y-8 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="relative bg-gray-800 rounded-lg p-6 w-full max-w-xl shadow-lg hover:shadow-blue-500 transition duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
                                    {edu.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                    <p className="text-sm text-gray-300">{edu.institution}</p>
                                    <p className="text-sm text-gray-400">{edu.duration}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}