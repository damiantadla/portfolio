"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../public/Logo.png";

const NavComponent = () => {
    const pathname = usePathname();

    return (
        <>
            <nav className="hidden xl:block bg-lightBlack w-11/12 max-w-7xl h-20 rounded-full mt-8 mx-auto text-xl p-3">
                <ul className="w-full h-full flex justify-between items-center text-white">
                    <li className={`flex-grow mx-auto text-center ${pathname === '/' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`flex-grow mx-auto text-center ${pathname === '/about' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`flex-grow mx-auto text-center ${pathname === '/services' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/services">Service</Link>
                    </li>
                    <li className="flex justify-center w-60 items-center mx-auto group">
                        <Image src={Logo} alt="Logo" className="w-12"/>
                        <div className="flex flex-col justify-center">
                            <span
                                className="ml-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 ease-in-out text-sm font-light">
                            Created by
                             </span>
                            <h1 className="font-bold text-2xl tracking-widest ml-2 transition-all duration-500 ease-in-out -translate-y-2 group-hover:translate-y-1">
                                TADLA
                            </h1>
                        </div>
                    </li>
                    <li className={`flex-grow mx-auto text-center ${pathname === '/resume' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li className={`flex-grow mx-auto text-center ${pathname === '/projects' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className={`flex-grow mx-auto text-center ${pathname === '/contact' ? 'bg-orange m-4 py-4 rounded-full' : ''}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex xl:hidden justify-end mr-4 mt-4">
                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 3H42.5M2.5 18H42.5M2.5 33H42.5" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </>
    );
};

export default NavComponent;
