const SectionContact = () => {
    return (
        <section className="h-auto lg:h-[70vh] bg-[#F2F4F7] flex justify-center items-center mx-auto py-10 lg:py-0">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row">
                {/* Left Image Section */}
                <div className="hidden md:flex justify-center lg:justify-between items-center w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="w-full max-w-[400px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#feb173] rounded-[40px] sm:rounded-[50px] md:rounded-[70px] shadow-lg"></div>
                </div>

                {/* Right Contact Form Section */}
                <div className="w-full lg:w-1/2 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkBlue mb-4 text-center lg:text-left">
                        Contact <span className="text-orange">Us</span>
                    </h1>

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full h-32 sm:h-40 p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition resize-none"
                    ></textarea>

                    <div className="flex justify-center lg:justify-start">
                        <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-28 sm:w-32 bg-none text-black border-[1px] border-lightBlack rounded-[50px] hover:bg-orange hover:text-white hover:border-none transition-all duration-500">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionContact;
