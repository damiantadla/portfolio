"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

import QuoteIcon from "../../../public/quote-up.png";
import StarsIcon from "../../../public/Frame4.png";
import Elipse from "../../../public/Ellipse.png";

const HeaderView = () => {
    // Definicja animacji
    const headerAnimation = {
        hidden: { opacity: 0, y: -50 }, // Ukryte
        visible: { opacity: 1, y: 0 }, // Widoczne
    };

    return (
        <header className="h-[90vh] w-screen relative">
            <div className="flex flex-col items-center mt-20 text-center">
                <motion.button
                    className="mx-auto border-[1px] border-lightBlack px-4 py-1 rounded-full font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.1 }} // Czas trwania animacji
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
                    I'm <span className="text-orange">Damian</span>,
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
            </div>
            <div className="max-w-7xl mx-auto flex justify-between mt-24 px-28">
                <motion.div
                    className="hidden lg:block w-96"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Image src={QuoteIcon} alt="Quote icon" />
                    <p>Damian’s full stack expertise transformed our project into a seamless, high-performing app. Highly recommended!</p>
                </motion.div>
                <motion.div
                    className="hidden w-1/2 lg:flex flex-col items-end"
                    initial="hidden"
                    animate="visible"
                    variants={headerAnimation}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Image src={StarsIcon} alt="Stars icon" />
                    <p className="text-5xl font-bold">2 Years</p>
                    <p>Experience</p>
                </motion.div>
            </div>
            <motion.div
                className="hidden xl:flex justify-center w-full mt-auto absolute bottom-0" // Flex container for centering Elipse
                initial="hidden"
                animate="visible"
                variants={headerAnimation}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Image src={Elipse} alt="Elipse" />
            </motion.div>
        </header>
    );
};

export default HeaderView;
