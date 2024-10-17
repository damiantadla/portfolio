"use client"; // Dodaj tę linię na początku pliku, aby oznaczyć komponent jako klienta

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Importuj useInView z Framer Motion
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const SectionMyServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Monitoruj, kiedy sekcja jest w widoku
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsVisible(true);
        }
    }, [isInView]);

    return (
        <section
            className="relative h-[200vh] lg:h-[80vh] xl:h-[90vh] bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10"
            ref={ref} // Dodaj referencję do sekcji
        >
            <div className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div
                        className="w-full flex flex-col sm:flex-row sm:items-center xl:mx-auto justify-between text-white  mb-20 max-w-screen-xl px-6 sm:px-20 lg:px-0">
                        <motion.h2
                            className="text-5xl sm:text-5xl"
                            initial={{opacity: 0, y: 50}} // Początkowe właściwości
                            animate={isVisible ? {opacity: 1, y: 0} : {}} // Animacja, gdy widać
                            transition={{duration: 0.5}} // Czas trwania animacji
                        >
                            My <span className="text-orange">Services</span>
                        </motion.h2>
                        <motion.p
                            className="w-[300px] xl:w-[400px] mt-4"
                            initial={{opacity: 0, y: 50}}
                            animate={isVisible ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
                            vulputate, bibendum sodales.
                        </motion.p>
                    </div>
                    <div
                        className="md:max-w-2xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={isVisible ? {opacity: 1, scale: 1} : {}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            <ServicesComponent/>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={isVisible ? {opacity: 1, scale: 1} : {}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            <ServicesComponent/>
                        </motion.div>
                        <motion.div
                            className="md:col-span-2 xl:col-span-1"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={isVisible ? {opacity: 1, scale: 1} : {}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            <ServicesComponent/>
                        </motion.div>
                    </div>
                    <div className="flex justify-around w-36 mx-auto mt-14">
                        <div className="w-16 h-4 bg-orange rounded-xl"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMyServices;
