"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiHono, SiSocketdotio, SiMongodb, SiPostgresql, SiPrisma, SiRedis, SiGit, SiCloudflare, SiDocker, SiExpo } from "react-icons/si";

const skillCategories = ["Frontend", "Backend", "Database", "Tools"];

interface Skill {
    name: string;
    level: number;
    icon: JSX.Element;
}

const skillsData: Record<string, Skill[]> = {
    Frontend: [
        { name: "JavaScript", level: 90, icon: <SiJavascript size={40} color="#F7DF1E" /> },
        { name: "React", level: 85, icon: <SiReact size={40} color="#61DAFB" /> },
        { name: "Next.js", level: 80, icon: <SiNextdotjs size={40} color="white" /> },
        { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    ],
    Backend: [
        { name: "Node.js", level: 85, icon: <SiNodedotjs size={40} color="#339933" /> },
        { name: "Express.js", level: 80, icon: <SiExpress size={40} color="white" /> },
        { name: "Hono", level: 75, icon: <SiHono size={40} color="#FFCC00" /> },
        { name: "WebSockets", level: 78, icon: <SiSocketdotio size={40} color="white" /> },
    ],
    Database: [
        { name: "MongoDB", level: 85, icon: <SiMongodb size={40} color="#47A248" /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql size={40} color="#336791" /> },
        { name: "Prisma", level: 75, icon: <SiPrisma size={40} color="white" /> },
        { name: "Redis", level: 78, icon: <SiRedis size={40} color="#DC382D" /> },
    ],
    Tools: [
        { name: "Git", level: 90, icon: <SiGit size={40} color="#F05032" /> },
        { name: "Cloudflare", level: 85, icon: <SiCloudflare size={40} color="#F38020" /> },
        { name: "Docker", level: 70, icon: <SiDocker size={40} color="#2496ED" /> },
        { name: "Expo", level: 75, icon: <SiExpo size={40} color="white" /> },
    ],
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>("Frontend");

    return (
        <section className="py-20 bg-[#0A1A2F] text-white container mx-auto px-4" id="skills">
            <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg shadow-lg mb-8 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
                <div className="absolute inset-0 bg-opacity-20 backdrop-blur-md"></div>
                <div className="flex space-x-4 overflow-hidden">
                    <div className="animate-marquee1 flex min-w-max">
                        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                            Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills <span className="opacity-0">p </span>
                        </h2>
                    </div>
                    <div className="animate-marquee1 flex min-w-max" aria-hidden="true">
                        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                            ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 text-center">
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    {skillCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 text-lg font-semibold rounded-lg transition duration-300 shadow-md 
                                ${activeCategory === category ? "bg-blue-500 text-white shadow-blue-500" : "bg-gray-700 hover:bg-gray-600"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsData[activeCategory].map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

interface SkillCardProps {
    skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center space-x-4 bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-md hover:shadow-blue-500 transition duration-300"
        >
            {/* Circular Icon */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-3 shadow-md">
                {skill.icon}
            </div>

            {/* Skill Details */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <div className="relative w-full bg-gray-600 h-2 rounded-full overflow-hidden mt-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                    />
                </div>
                <p className="text-sm mt-1">{skill.level}%</p>
            </div>
        </motion.div>
    );
}
