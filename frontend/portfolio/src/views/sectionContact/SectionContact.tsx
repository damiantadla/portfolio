const SectionContact = () => {
    return (
        <section className="h-[70vh] bg-[#F2F4F7] flex justify-center items-center mx-auto">
            <div className="w-full max-w-7xl flex">
                {/* Left Section with Image/Graphic */}
                <div className="flex justify-center items-center w-1/3">
                    <div className="w-[300px] h-[400px] bg-[#feb173] rounded-[70px] shadow-lg"></div>
                </div>

                {/* Right Section with Form */}
                <div className="w-2/3 px-40 flex flex-col space-y-6">
                    {/* Title */}
                    <h1 className="text-6xl font-bold text-darkBlue mb-4">Contact <span
                        className="text-orange">Us</span></h1>

                    {/* Input Fields */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition"
                    />

                    {/* Textarea with resize disabled and bottom border */}
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition resize-none"
                        cols="30"
                        rows="5"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        className="self-start px-12 py-6 bg-none border-lightBlack border-[1px] text-xl text-lightBlack font-semibold rounded-[14px] shadow-md transition">
                        Submit
                    </button>

                </div>
            </div>
        </section>
    );
};

export default SectionContact;
