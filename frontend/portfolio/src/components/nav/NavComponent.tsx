import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/Logo.png";

const NavComponent = () => {
    return (
        <nav className="bg-lightBlack w-11/12 max-w-7xl h-20 rounded-full mt-8 mx-auto text-xl p-3">
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
    )
}

export default NavComponent;
