"use client"; // Dodajemy klienta, aby używać framer-motion

import React, { useState } from "react";
import CSS from "./iconTechnologies/css3.svg";
import Docker from "./iconTechnologies/Docker.svg";
import Figma from "./iconTechnologies/Figma.svg";
import Firebase from "./iconTechnologies/firebase.svg";
import Git from "./iconTechnologies/Git.svg";
import HTML from "./iconTechnologies/html5.svg";
import JS from "./iconTechnologies/javascript.svg";
import NextJS from "./iconTechnologies/Next.js.svg";
import Node from "./iconTechnologies/nodejs.svg";
import Npm from "./iconTechnologies/npm.svg";
import ReactIcon from "./iconTechnologies/react.svg";
import Tailwind from "./iconTechnologies/Tailwind CSS.svg";
import TS from "./iconTechnologies/typescript.svg";
import Vue from "./iconTechnologies/vuejs.svg";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Zmieniony komponent Button
const Button = ({ text, onClick, active }: { text: string; onClick: () => void; active: boolean }) => {
    return (
        <button
            onClick={onClick}
            className={`py-[10px] sm:py-[15px] px-[20px] sm:px-[32px] mx-1 sm:mx-2 rounded-[24px] 
            ${active ? 'bg-orange text-white' : 'bg-[#F2F4F7] text-lightBlack hover:bg-orange hover:text-white'} 
            duration-500 transition-all ease-in-out`}
        >
            {text}
        </button>
    );
};

const technologies = [
    { src: HTML, label: "HTML", category: "Frontend" },
    { src: CSS, label: "CSS", category: "Frontend" },
    { src: JS, label: "Javascript", category: "Frontend" },
    { src: TS, label: "Typescript", category: "Frontend" },
    { src: ReactIcon, label: "React", category: "Frontend" },
    { src: Vue, label: "Vue", category: "Frontend" },
    { src: NextJS, label: "NextJs", category: "Frontend" },
    { src: Tailwind, label: "Tailwind", category: "Frontend" },
    { src: Npm, label: "Npm", category: "Tools" },
    { src: Node, label: "Node", category: "Backend" },
    { src: Firebase, label: "Firebase", category: "Backend" },
    { src: Docker, label: "Docker", category: "DevOps" },
    { src: Git, label: "Git", category: "Tools" },
    { src: Figma, label: "Figma", category: "Design" },
];

const categories = ["All", "Frontend", "Backend", "DevOps", "Design", "Tools"];

const SectionPortfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTechnologies = activeCategory === "All"
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white max-w-7xl mx-auto px-4 lg:px-0 py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16 w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
                    Let's have a look at my{" "}
                    <span className="text-orange">Portfolio</span>
                </h1>
                <Link href="/services"
                    className="px-[20px] sm:px-[40px] py-[15px] sm:py-[20px] bg-orange rounded-[50px] text-white transition duration-300 border border-transparent hover:bg-white hover:text-orange hover:border-orange">
                    See All
                </Link>
            </div>

            <div className="my-10 lg:my-20 w-full min-h-[560px] xl:min-h-[460px]">
                <AnimatePresence>
                    <div
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center items-center">
                        {filteredTechnologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="w-[100px] h-[100px] flex justify-center items-center">
                                    <Image className="" src={tech.src} alt={tech.label} />
                                </div>
                                <p className="text-center text-lightBlack group-hover:text-orange transition-colors duration-300">
                                    {tech.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>

            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        text={category}
                        onClick={() => setActiveCategory(category)}
                        active={activeCategory === category}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionPortfolio;
