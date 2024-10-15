import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const SectionMyServices = () => {
    return (
        <section className="relative h-[200vh] xl:h-[60vh]  bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10">
            <div
                className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">
                <div className="flex flex-col sm:flex-row sm:items-center xl:mx-auto justify-between text-white mt-20 mb-10 max-w-screen-xl px-6 sm:px-20">
                    <h2 className="text-5xl sm:text-5xl">My <span className="text-orange">Services</span></h2>
                    <p className="w-[300px] xl:w-[400px] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
                        nunc, posuere in justo vulputate, bibendum sodales </p>
                </div>
                <div className="md:max-w-2xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
                    <ServicesComponent/>
                    <ServicesComponent/>
                    <div className="md:col-span-2 xl:col-span-1">
                        <ServicesComponent/>
                    </div>
                </div>
                <div className="flex justify-around  w-36 mx-auto mt-14">
                    <div className="w-16 h-4 bg-orange rounded-xl">
                    </div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default SectionMyServices