"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const SectionMyServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

    useEffect(() => {
        if (isInView) {
            setIsVisible(true);
        }
    }, [isInView]);

    const dotColors = [
        hoveredIndex === 0 ? 'bg-orange' : 'bg-gray-200',
        hoveredIndex === 1 ? 'bg-orange' : 'bg-gray-200',
        hoveredIndex === 2 ? 'bg-orange' : 'bg-gray-200'
    ];

    return (
        <section
            className="relative h-[200vh] sm:h-[160vh] md:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] 3xl:h-[40vh] bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10 overflow-hidden"
            ref={ref}
        >
            <div className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">
                <div className="h-full flex flex-col justify-center items-center py-20">
                    <div
                        className="w-full flex flex-col sm:flex-row sm:items-center xl:mx-auto justify-between text-white mb-16 md:mb-20 max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center md:text-start"
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            My <span className="text-orange">Services</span>
                        </motion.h2>
                        <motion.p
                            className="w-[90%] sm:w-[70%] md:w-[50%] xl:w-[450px] mt-4 xl:text-2xl text-center mx-auto md:text-start md:mx-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
                            vulputate, bibendum sodales.
                        </motion.p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <div
                            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center px-4 sm:px-0">
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={isVisible ? {opacity: 1, scale: 1} : {}}
                                    transition={{duration: 0.5, delay: 0.8}}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                >
                                  <ServicesComponent/>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-around mx-auto mt-10 md:mt-14">
                        <div className="w-12 md:w-16 h-4 bg-orange rounded-xl mx-1"></div>
                        <div className={`h-4 w-4 ${dotColors[0]} rounded-full mx-1`}></div>
                        <div className={`h-4 w-4 ${dotColors[1]} rounded-full mx-1`}></div>
                        <div className={`h-4 w-4 ${dotColors[2]} rounded-full mx-1`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionMyServices;
