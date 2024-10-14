import ServicesComponent from "@/components/servicesComponent/ServicesComponent";

const SectionMyServices = () => {
    return (
        <section className="relative h-[80vh]  bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10">
            <div
                className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">
                <div className="flex justify-between mx-auto text-white mt-20 max-w-screen-xl px-20">
                    <h2 className="text-5xl">My <span className="text-orange">Services</span></h2>
                    <p className="w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
                        nunc, posuere in justo vulputate, bibendum sodales </p>
                </div>
                <div className="flex justify-around items-center mx-auto max-w-screen-2xl mt-24">
                    <ServicesComponent/>
                    <ServicesComponent/>
                    <ServicesComponent/>
                </div>
                <div className="flex justify-around w-36 mx-auto mt-14">
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