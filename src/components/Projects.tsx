"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const projects = [
    {
        name: "ChatVerse",
        description: "A real-time chat application with authentication and WebSockets.",
        tech: "Next.js, TypeScript, MongoDB, WebSockets, Tailwind, NextAuth",
        image: "/chatApp.png",
        demo: "#",
        source: "#",
    },
    {
        name: "Sensai",
        description: "An online resume builder and mock quiz platform with industry insights.",
        tech: "React.js, TypeScript, Neon, Prisma, Tailwind, Gemini Flash 1.5",
        image: "/sensai.png",
        demo: "#",
        source: "#",
    },
    {
        name: "Zentry",
        description: "A stylish frontend project with smooth GSAP animations.",
        tech: "React, Tailwind, GSAP",
        image: "/zentry.png",
        demo: "#",
        source: "#",
    },
    {
        name: "SaaS App",
        description: "A sleek SaaS frontend with smooth UI interactions.",
        tech: "Next.js, Tailwind, Framer Motion",
        image: "/saass.png",
        demo: "#",
        source: "#",
    },
    {
        name: "Todo App",
        description: "A full-stack todo app with a modern UI.",
        tech: "Next.js, TypeScript, Neon, Prisma, Tailwind, Framer Motion",
        image: "/todo.png",
        demo: "#",
        source: "#",
    },
    {
        name: "ViewVerse",
        description: "A media-sharing platform built with the MERN stack.",
        tech: "React, Express, MongoDB, Tailwind",
        image: "/view.png",
        demo: "#",
        source: "#",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
    return (
        <section className="py-20 bg-[#0A1A2F] text-white" id="projects">
            <div className="container mx-auto px-4">
                <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg shadow-lg mb-8 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
                    <div className="absolute inset-0 bg-opacity-20 backdrop-blur-md"></div>
                    <div className="flex space-x-4 overflow-hidden">
                        <div className="animate-marquee flex min-w-max">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects <span className="opacity-0">p </span>
                            </h2>
                        </div>
                        <div className="animate-marquee flex min-w-max" aria-hidden="true">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-sm:max-w-xs max-sm:mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className="relative overflow-hidden bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-md hover:shadow-blue-500 transition duration-300"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
        >
            <div className="relative overflow-hidden rounded-lg group">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="rounded-lg w-full transform transition duration-300 group-hover:opacity-30"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm mb-2 text-white">{project.description}</p>
                    <p className="text-xs text-gray-300">{project.tech}</p>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
            <div className="mt-4 flex space-x-4">
                <a
                    href={project.demo}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1 shadow-blue-500/80 hover:shadow-blue-500 animate-pulse"
                >
                    Demo
                </a>
                <a
                    href={project.source}
                    className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg transition-transform transform hover:-translate-y-1 shadow-gray-500/80 hover:shadow-gray-500 animate-pulse"
                >
                    Source Code
                </a>
            </div>
        </motion.div>
    );
}
