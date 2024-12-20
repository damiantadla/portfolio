"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const SectionMyPortfolio = () => {
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
            className="relative h-[200vh] sm:h-[160vh] md:h-[92vh] xl:h-[92vh] 2xl:h-[92vh] 3xl:h-[40vh] bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10 overflow-hidden"
            ref={ref}
        >
            <div className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">
                <div className="h-full flex flex-col justify-center items-center py-20">
                    <div
                        className="w-full flex flex-col md:flex-row sm:items-start xl:mx-auto justify-between text-white my-16 md:mb-20 max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center md:text-center"
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            My <span className="text-orange">Portfolio</span>
                        </motion.h2>
                        <motion.p
                            className="w-[90%] sm:w-[70%] md:w-[50%] xl:w-[450px] xl:text-2xl text-justify mx-auto md:text-start md:mx-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Welcome to my portfolio, showcasing my projects in design and development. Explore my work to see how I bring ideas to life and solve challenges effectively.
                        </motion.p>
                    </div>

                    <div className="h-full flex items-center justify-center">
                        <div
                            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center px-4 sm:px-0">
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

export default SectionMyPortfolio;
