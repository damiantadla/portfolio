const SectionContact = () => {
    return (
        <section className="h-[70vh] bg-[#F2F4F7] flex justify-center items-center mx-auto">
            <div className="w-full max-w-7xl flex">

                <div className="flex justify-center items-center w-1/2">
                    <div className="w-[300px] h-[400px] bg-[#feb173] rounded-[70px] shadow-lg"></div>
                </div>
                <div className="w-1/2 px-20  flex flex-col space-y-4">
                        <h1 className="text-6xl font-bold text-darkBlue mb-4">Contact <span
                            className="text-orange">Us</span></h1>

                        <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
                            posuere in justo vulputate, bibendum sodales </p>

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
                            className="w-full h-40 p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition resize-none"
                        ></textarea>
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
