"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

import QuoteIcon from "../../../public/quote-up.png";
import StarsIcon from "../../../public/Frame4.png";
import Elipse from "../../../public/Ellipse.png";
import Foto from "../../../public/damiablack.png";

const HeaderView = () => {
    // Define animation
    const headerAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="h-[90vh] w-screen flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center mt-20 text-center lg:text-left lg:mr-20 mx-auto">
                <motion.button
                    className="w-1/5 mx-auto border-[1px] border-lightBlack px-4 py-1 rounded-full font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hello!
                </motion.button>
                <motion.p
                    className="text-6xl font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I'm <span className="text-orange">Damian Tadla</span>,
                </motion.p>
                <motion.p
                    className="text-5xl font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Full Stack Developer
                </motion.p>
                <motion.p
                    className="text-lg mt-4 max-w-xl"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I am a student and a developer proficient in JavaScript and TypeScript.
                    I work with technologies like Next.js, Node.js, NestJS, and Firebase.
                </motion.p>
            </div>

            <motion.div
                className="relative bottom-0 w-full h-full lg:w-1/2 flex justify-center lg:justify-end mt-10 mr-20 lg:mt-0"
                initial="hidden"
                animate="visible"
                variants={headerAnimation}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <div className="">
                    <Image
                        src={Foto}
                        alt="Damian"
                        className="absolute left-1/2 transform -translate-x-1/2 z-20 bottom-0 w-[450px] md:w-[600px] rounded-b-md"
                    />
                    <Image
                        src={Elipse}
                        alt="Elipse"
                        className="w-[1000px] hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeaderView;
