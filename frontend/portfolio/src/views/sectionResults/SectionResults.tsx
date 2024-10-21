"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "./styles.css";

const StartSvg = ({ color = "#FD853A", width = 32, height = 33 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
        >
            <path
                d="M23.8912 20.0095C23.5459 20.3442 23.3872 20.8282 23.4659 21.3028L24.6512 27.8628C24.7512 28.4188 24.5165 28.9815 24.0512 29.3028C23.5952 29.6362 22.9885 29.6762 22.4912 29.4095L16.5858 26.3295C16.3805 26.2202 16.1525 26.1615 15.9192 26.1548H15.5578C15.4325 26.1735 15.3099 26.2135 15.1979 26.2748L9.29118 29.3695C8.99918 29.5162 8.66852 29.5682 8.34452 29.5162C7.55518 29.3668 7.02852 28.6148 7.15785 27.8215L8.34452 21.2615C8.42318 20.7828 8.26452 20.2962 7.91918 19.9562L3.10452 15.2895C2.70185 14.8988 2.56185 14.3122 2.74585 13.7828C2.92452 13.2548 3.38052 12.8695 3.93118 12.7828L10.5578 11.8215C11.0619 11.7695 11.5045 11.4628 11.7312 11.0095L14.6512 5.02284C14.7205 4.88951 14.8099 4.76685 14.9179 4.66285L15.0378 4.56951C15.1005 4.50018 15.1725 4.44285 15.2525 4.39618L15.3979 4.34285L15.6245 4.24951H16.1859C16.6872 4.30151 17.1285 4.60151 17.3592 5.04951L20.3179 11.0095C20.5312 11.4455 20.9459 11.7482 21.4245 11.8215L28.0512 12.7828C28.6112 12.8628 29.0792 13.2495 29.2645 13.7828C29.4392 14.3175 29.2885 14.9042 28.8779 15.2895L23.8912 20.0095Z"
                fill={color}
            />
        </svg>
    );
};

const SectionResults = () => {
    const slidesData = [
        {
            src: "/avatar.svg",
            title: "Example 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
        {
            src: "/avatar.svg",
            title: "Example 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
        {
            src: "/avatar.svg",
            title: "Example 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
        {
            src: "/avatar.svg",
            title: "Example 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
        {
            src: "/avatar.svg",
            title: "Example 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
        {
            src: "/avatar.svg",
            title: "Example 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
        },
    ];

    return (
        <section className="relative h-[70vh] md:h-[60vh] bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10">
            <div className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0 text-white">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="flex justify-between max-w-7xl md:flex mx-auto mb-2 md:mb-20">
                        <h1 className="text-4xl sm:text-5xl font-semibold lg:text-6xl  md:text-4xl max-w-full sm:max-w-[50%] text-center md:text-start">
                            Testimonials That Speak to <span className="text-orange">My Results</span>
                        </h1>
                        <p className="hidden md:block w-[300px] xl:w-[450px] mt-4 xl:text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                        </p>
                    </div>

                    <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={30}
                        initialSlide={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper mt-8"
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="mx-4">
                                    <div className="flex flex-col w-full h-[280px] bg-white bg-opacity-15 text-white p-2 rounded-[24px]">
                                        <div className="flex justify-between m-4">
                                            <div className="flex items-center space-x-2 md:space-x-4">
                                                <Image src={slide.src} alt={slide.title} width={54} height={54} loading="lazy" className="flex-shrink-0" />
                                                <div className="text-start">
                                                    <p className="text-base sm:text-lg md:text-xl">{slide.title}</p>
                                                    <p className="text-sm sm:text-base">UI/UX Designer</p>
                                                </div>
                                            </div>
                                            <svg
                                                width="60"
                                                height="60"
                                                viewBox="0 0 128 129"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M84.8534 66.0542H109.867C109.44 90.9609 104.533 95.0676 89.2267 104.134C87.4667 105.201 86.88 107.441 87.9467 109.254C89.0134 111.014 91.2534 111.601 93.0667 110.534C111.093 99.8676 117.387 93.3609 117.387 62.3209V33.5742C117.387 24.4542 109.973 17.0942 100.907 17.0942H84.9067C75.52 17.0942 68.4267 24.1876 68.4267 33.5742V49.5742C68.3734 58.9609 75.4667 66.0542 84.8534 66.0542Z"
                                                    fill="#667085"
                                                    fillOpacity="0.3"
                                                />
                                                <path
                                                    d="M27.1466 66.0542H52.1609C51.7349 90.9609 46.8279 95.0676 31.5213 104.134C29.7613 105.201 29.1746 107.441 30.2413 109.254C31.308 111.014 33.548 111.601 35.3613 110.534C53.3879 99.8676 59.6813 93.3609 59.6813 62.3209V33.5742C59.68 24.4542 52.2666 17.0942 43.2 17.0942H27.2C17.76 17.0942 10.6666 24.1876 10.6666 33.5742V49.5742C10.6666 58.9609 17.76 66.0542 27.1466 66.0542Z"
                                                    fill="#667085"
                                                    fillOpacity="0.3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center ml-2">
                                            <StartSvg />
                                            <StartSvg />
                                            <StartSvg />
                                            <StartSvg />
                                            <StartSvg />
                                            <p className="text-2xl ml-1">5.0</p>
                                        </div>

                                        <p className="text-start m-3 mt-4 text-sm md:text-base break-words">{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SectionResults;
