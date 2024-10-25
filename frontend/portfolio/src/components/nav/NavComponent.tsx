"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";

import Logo from "../../../public/Logo.png";

import FbLogo from "../../../public/media/facebook.svg";
import GithubLogo from "../../../public/media/github.svg"
import LinkedinLogo from "../../../public/media/linkedin.svg"


const NavComponent = () => {
    const pathname = usePathname();


    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
    }, [scrolled]);

    const toggleMenu = () => setMenuOpen(!menuOpen);


    return (
        <>
            <nav className="hidden xl:block bg-lightBlack w-11/12 max-w-7xl h-20 rounded-full mt-8 mx-auto text-xl p-3">
                <ul className="w-full h-full flex justify-between items-center text-white">
                    <Link href="/"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        Home
                    </Link>
                    <Link href="/about"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/about' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        About
                    </Link>
                    <Link href="/services"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/services' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        Services
                    </Link>
                    <li className="flex justify-center w-60 items-center mx-auto group">
                        <Image src={Logo} alt="Logo" className="w-12"/>
                        <div className="flex flex-col justify-center">
                    <span
                        className="ml-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 ease-in-out text-sm font-light">
                        Created by
                    </span>
                            <h1 className="font-bold text-2xl tracking-widest ml-2 transition-all duration-500 ease-in-out -translate-y-2 group-hover:translate-y-0">
                                TADLA
                            </h1>
                        </div>
                    </li>
                    <Link href="/resume"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/resume' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        Resume
                    </Link>
                    <Link href="/projects"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/projects' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        Projects
                    </Link>
                    <Link href="/contact"
                          className={`flex-grow mx-auto text-center m-4 py-4 ${pathname === '/contact' ? 'bg-orange rounded-full' : 'hover:text-orange'}`}>
                        Contact
                    </Link>
                </ul>
            </nav>
            <div
                className={`fixed xl:hidden w-full h-20 top-0 left-0 z-20 transition-all duration-500 ease-in-out  ${
                    scrolled ? 'bg-white bg-opacity-90' : 'bg-[]'
                }`}
            >
                <div className="fixed xl:hidden justify-end top-6 right-4 z-30" onClick={toggleMenu}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 3H42.5M2.5 18H42.5M2.5 33H42.5" stroke="black" strokeWidth="5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="fixed xl:hidden top-4 left-4 z-100">
                    <Link href="/">
                        <div className="flex justify-start w-60 items-center mx-auto group">
                            <Image src={Logo} alt="Logo" className="w-12"/>
                            <div className="flex flex-col justify-center">
                            <span
                                className="ml-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 ease-in-out text-sm font-light">
                                Created by
                            </span>
                                <h1 className="font-bold text-2xl tracking-widest ml-2 transition-all duration-500 ease-in-out -translate-y-2 group-hover:translate-y-0">
                                    TADLA
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>


            <div
                className={`fixed h-screen w-screen md:w-1/2 right-0 top-0 bg-lightBlack text-white transition-transform duration-500 transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
            >
                <div className="h-full flex flex-col justify-between items-end">
                    <div onClick={toggleMenu} className="w-full flex flex-col justify-between mt-4 px-4">
                        <div className="flex justify-between mx-4">
                            <Image src={Logo} alt="Logo" className="h-[64px] w-[64px]"/>
                            <svg
                                fill="#fff"
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                id="cross"
                                data-name="Flat Line"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#fff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                    <path id="primary" d="M19,19,5,5M19,5,5,19"/>
                                </g>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-end justify-center space-y-8 text-3xl pr-12 pt-20 ">
                            <li className={`text-center ${pathname === '/' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            </li>
                            <li className={`text-center ${pathname === '/about' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li className={`text-center ${pathname === '/services' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/services" onClick={() => setMenuOpen(false)}>Service</Link>
                            </li>
                            <li className={`text-center ${pathname === '/resume' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
                            </li>
                            <li className={`text-center ${pathname === '/projects' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                            </li>
                            <li className={`text-center ${pathname === '/contact' ? 'bg-orange px-8 py-4 rounded-full' : ''}`}>
                                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex mx-auto mb-4">
                        <a href="https://www.facebook.com/damian.tadla" target="_blank" rel="noopener noreferrer">
                            <Image src={FbLogo} alt="Facebook logo" className="w-12 h-12 lg:w-16 lg:h-16"/>
                        </a>
                        <a href="https://github.com/damiantadla" target="_blank" rel="noopener noreferrer">
                            <Image src={GithubLogo} alt="Github logo" className="w-12 h-12 lg:w-16 lg:h-16"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/damian-tadla-b20731200/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={LinkedinLogo} alt="Linkedin logo" className="w-12 h-12 lg:w-16 lg:h-16"/>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NavComponent;
