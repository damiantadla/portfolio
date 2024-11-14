"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

import Elipse from "../../../public/Ellipse.png";
import Foto from "../../../public/damiablack.png";

const HeaderView = () => {
    // Define animation
    const headerAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="max-h-[50vh] sm:max-h-[80vh] w-screen max-w-7xl flex flex-col xl:flex-row mx-auto items-center pt-10">
            <div className="flex flex-col items-center mt-20 px-10 text-center">
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
                    I&apos;m <span className="text-orange">Damian Tadla</span>,
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
                    className="text-lg mt-10 max-w-xl"
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
                className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 items-end"
                initial="hidden"
                animate="visible"
                variants={headerAnimation}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <div className="relative w-full flex justify-center items-end">
                    <Image
                        src={Foto}
                        alt="Damian"
                        className="relative z-20 rounded-b-md w-[60%] sm:w-[50%] md:w-[40%] xl:w-[35%] 2xl:w-[30%]"
                        style={{ bottom: 0 }}
                    />
                    <Image
                        src={Elipse}
                        alt="Elipse"
                        className="absolute z-10 w-[300px] sm:w-[200px] md:w-[400px] xl:w-[400px] left-1/2 transform -translate-x-1/2 bottom-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeaderView;
