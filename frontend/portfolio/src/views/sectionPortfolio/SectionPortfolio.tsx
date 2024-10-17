import React from "react";

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

const Button = ({ text }: { text: string }) => {
    return (
        <button className="text-lightBlack py-[10px] sm:py-[15px] px-[20px] sm:px-[32px] mx-1 sm:mx-2 rounded-[24px] bg-[#F2F4F7] hover:bg-orange hover:text-white duration-500 transition-all ease-in-out">
            {text}
        </button>
    );
};

const SectionPortfolio = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] lg:h-[90vh] bg-white max-w-7xl mx-auto px-4 lg:px-0 py-20">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16 w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
                    Let's have a look at my{" "}
                    <span className="text-orange">Portfolio</span>
                </h1>
                <button className="px-[20px] sm:px-[40px] py-[15px] sm:py-[20px] bg-orange rounded-[50px] text-white">
                    See All
                </button>
            </div>

            {/* Technologies Section */}
            <div className="my-10 lg:my-20 w-full">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center items-center">
                    {[{ src: HTML, label: "HTML" }, { src: CSS, label: "CSS" }, { src: JS, label: "Javascript" },
                        { src: TS, label: "Typescript" }, { src: ReactIcon, label: "React" }, { src: Vue, label: "Vue" },
                        { src: NextJS, label: "NextJs" }, { src: Tailwind, label: "Tailwind" }, { src: Npm, label: "Npm" },
                        { src: Node, label: "Node" }, { src: Firebase, label: "Firebase" }, { src: Docker, label: "Docker" },
                        { src: Git, label: "Git" }, { src: Figma, label: "Figma" }].map((tech, index) => (
                        <div key={index} className="group">
                            <Image className="h-16 sm:h-20 md:h-24" src={tech.src} alt={tech.label} />
                            <p className="text-center text-lightBlack group-hover:text-orange transition-colors duration-300">{tech.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10 lg:mt-14">
                    <div className="flex space-x-2">
                        <div className="w-16 h-4 bg-orange rounded-xl"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
                <Button text="Landing Page" />
                <Button text="Product Design" />
                <Button text="Animation" />
                <Button text="Glassmorphism" />
                <Button text="Cards" />
            </div>
        </section>
    );
};

export default SectionPortfolio;
