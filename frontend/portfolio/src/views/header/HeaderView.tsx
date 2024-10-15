import React from "react";

import Image from "next/image"

import QuoteIcon from "../../../public/quote-up.png";
import StarsIcon from "../../../public/Frame4.png"
import Elipse from "../../../public/Ellipse.png"
import MyPictures from "../../../public/MyPictures.png"


import NavComponent from "@/components/nav/NavComponent";

const HeaderView = ()  => {
    return (
        <header className="h-[90vh] w-screen relative">
            <NavComponent/>
            <div className="flex flex-col items-center mt-20 text-center ">
                <button className="mx-auto border-[1px] border-lightBlack px-4 py-1 rounded-full font-semibold">Hello!</button>
                <p className="text-6xl font-semibold">I'm <span className="text-orange">Damian</span>,</p>
                <p className="text-5xl font-semibold">Full Stack Developer</p>
            </div>
            <div className="max-w-7xl mx-auto flex justify-between mt-24 px-28">
                <div className="hidden lg:block w-96">
                    <Image src={QuoteIcon} alt="Quote icon"/>
                    <p>Damian’s full stack expertise transformed our project into a seamless, high-performing app. Highly recommended!</p>
                </div>
                <div className="hidden w-1/2 lg:flex flex-col items-end">
                    <Image src={StarsIcon} alt="Stars icon"/>
                    <p className="text-5xl font-bold">2 Years</p>
                    <p>Experience</p>
                </div>
            </div>
            <div className="hidden xl:flex justify-center w-full mt-auto absolute bottom-0 "> {/* Flex container for centering Elipse */}
                <Image src={Elipse} alt="Elipse"/>
            </div>

        </header>
    );
}

export default HeaderView;