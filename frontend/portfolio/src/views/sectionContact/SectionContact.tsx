import Image from "next/image";
import Foto from "../../../public/damiablack.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionContact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="h-auto lg:h-[70vh] bg-[#F2F4F7] flex justify-center items-center mx-auto py-10 lg:py-0">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="hidden md:flex justify-center lg:justify-between items-center w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="w-full max-w-[420px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#feb173] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-[70px] shadow-lg flex items-end">
                        <div className="w-full h-full flex items-center justify-center">
                            <Image
                                src={Foto}
                                alt="Damian"
                                className="w-[550px] h-auto rounded-full md:rounded-[70px] pb-14"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col space-y-4">
                    <motion.h1
                        ref={ref}
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-darkBlue mb-4 text-center lg:text-left"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                    >
                        Contact <span className="text-orange">Me</span>
                    </motion.h1>

                    <motion.input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />

                    <motion.input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    />

                    <motion.textarea
                        placeholder="Message"
                        className="w-full h-32 sm:h-40 p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition resize-none"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.textarea>

                    <div className="flex justify-center lg:justify-start">
                        <motion.button
                            className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-28 sm:w-32 bg-none text-black border-[1px] border-lightBlack rounded-[50px] hover:bg-orange hover:text-white hover:border-none transition-all duration-500"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Send
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionContact;
