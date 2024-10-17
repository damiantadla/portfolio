const SectionWorkExp = () => {
    return (
        <section className="flex flex-col items-center justify-center h-auto bg-white py-14 sm:py-14 md:py-24 sm:mx-10 mx-6 md:mx-20">
            <div className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
                My <span className="text-orange">Work Experience</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-end xl:justify-between w-full max-w-screen-xl h-full mt-10 lg:mt-20">
                <div className="flex flex-col justify-between h-auto lg:h-[400px] mb-10 lg:mb-0">
                    <div>
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                </div>

                <div className="hidden md:block rotate-90 md:rotate-0 mx-auto relative w-12 h-[300px] sm:h-[350px] md:h-[394px] mb-10 lg:mb-0">
                    <div className="absolute w-[2px] border-2 border-dashed border-spacing-2 h-full border-darkBlue left-1/2 transform -translate-x-1/2"></div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="w-12 h-12 border-2 border-dashed border-darkBlue bg-white rounded-full z-10">
                            <div className="flex items-center justify-center h-full">
                                <div className="h-9 w-9 bg-orange rounded-full"></div>
                            </div>
                        </div>
                        <div className="w-12 h-12 border-2 border-dashed border-darkBlue bg-white rounded-full z-10">
                            <div className="flex items-center justify-center h-full">
                                <div className="h-9 w-9 bg-darkBlue rounded-full"></div>
                            </div>
                        </div>
                        <div className="w-12 h-12 border-2 border-dashed border-darkBlue bg-white rounded-full z-10">
                            <div className="flex items-center justify-center h-full">
                                <div className="h-9 w-9 bg-orange rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between h-auto lg:h-[400px]">
                    <div>
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-darkBlue">Cognizant, Mumbai</h3>
                        <p>Sep 2016 - July 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionWorkExp;
