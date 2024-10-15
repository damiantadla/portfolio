import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/Logo.png";

const NavComponent = () => {
    return (
        <>
            <nav className="hidden xl:block bg-lightBlack w-11/12 max-w-7xl h-20 rounded-full mt-8 mx-auto text-xl p-3">
                <ul className="w-full h-full flex justify-between items-center text-white">
                    <li className='flex-grow mx-auto text-center bg-orange m-4 py-4 rounded-full'>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='flex-grow mx-auto text-center'>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className='flex-grow mx-auto text-center'>
                        <Link href="/contact">
                            Service
                        </Link>
                    </li>
                    <li className='flex justify-center w-60 items-center  mx-auto'>
                        <Image src={Logo} alt="Logo" className="w-12"/>
                        <h1 className="font-bold text-2xl tracking-widest ml-2">TADLA</h1>
                    </li>
                    <li className='flex-grow mx-auto text-center'>
                        <Link href="/products">
                            Resume
                        </Link>
                    </li>
                    <li className='flex-grow mx-auto text-center'>
                        <Link href="/projects">
                            Project
                        </Link>
                    </li>
                    <li className='flex-grow mx-auto text-center'>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex xl:hidden justify-end mr-4 mt-4 ">
                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 3H42.5M2.5 18H42.5M2.5 33H42.5" stroke="black" stroke-width="5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </div>

        </>

    )
}

export default NavComponent;
