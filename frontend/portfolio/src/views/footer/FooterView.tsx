"use client"

import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import React, {useState} from "react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {firestore} from "@/firebase";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import SnackbarContent from "@mui/material/SnackbarContent";
import {IconButton} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

const LineSvg = () => {
    return (
        <svg className="hidden xl:block my-10" xmlns="http://www.w3.org/2000/svg" width="1300" height="3" viewBox="0 0 1300 3" fill="none">
            <path d="M1 1.08105H1299" stroke="#475467" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
};

const validationEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

interface State {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
}

const FooterView = () => {

    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [stateSnack, setStateSnack] = useState<State>({
        open: false,
        message: '',
        severity: 'error',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleClose = () => {
        setStateSnack({
            open: false,
            message: '',
            severity: 'error',
        });
    };


    const sendEmail = async () => {
        if (!validationEmail(email)) {
            setStateSnack({
                open: true,
                message: 'Invalid email address',
                severity: 'error',
            });
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(firestore, 'emails'), {
                email: email,
                createdAt: serverTimestamp(),
            });
            setStateSnack({
                open: true,
                message: 'Email sent successfully',
                severity:'success',

            });
        } catch (error) {// eslint-disable-line @typescript-eslint/no-unused-vars
            setStateSnack({
                open: true,
                message: 'Failed to send email',
                severity: "error",
            });
            setLoading(false);
        } finally {
            setLoading(false);
            setEmail('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendEmail();
        }
    };

    const getIcon = (severity: string) => {
        switch (severity) {
            case 'success':
                return <CheckCircleIcon style={{color: 'white'}}/>;
            case 'error':
                return <ErrorIcon style={{color: 'white'}}/>;
            default:
                return null;
        }
    }


    return (
        <>
            <Snackbar
                open={stateSnack.open}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <SnackbarContent
                    message={
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {getIcon(stateSnack.severity)}
                            <span style={{ marginLeft: 8 }}>{stateSnack.message}</span>
                        </span>
                    }
                    style={{
                        backgroundColor: stateSnack.severity === 'success' ? '#FD853A' :
                            stateSnack.severity === 'error' ? '#FD853A' :
                                '#FD853A',
                        borderRadius: '40px',
                    }}
                    action={[
                        <IconButton key="close" aria-label="close" onClick={handleClose} sx={{color: "white", fontSize: "24px"}}>
                            <span>&times;</span>
                        </IconButton>
                    ]}
                />
            </Snackbar>
            <section className="max-w-screenh-[685px] bg-[#272727] rounded-t-[20px] text-[#FCFCFD]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="hidden md:flex flex-col md:flex-row items-center justify-between py-12 md:py-16">
                        <h1 className="text-4xl md:text-6xl font-semibold">
                            Lets Connect there
                        </h1>
                        <Link href="/resume"
                            className="hidden md:flex items-center justify-center bg-orange py-[10px] px-[20px] rounded-[60px] group ">
                            <div className="mx-auto flex items-center justify-center">
                                <p className="text-2xl pl-2">Hire me</p>
                                <svg
                                    width="43"
                                    height="43"
                                    viewBox="0 0 43 43"
                                    fill="none"
                                    className="transition-transform duration-500 group-hover:rotate-45"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.75 29.8311L30.25 12.3311"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12.75 12.3311H30.25V29.8311"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <LineSvg/>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <div className="flex items-center group my-4">
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
                            <p className="hidden xl:block w-[500px] my-4">
                                Welcome to my portfolio, showcasing my projects in design and development. Explore my work to see how I bring ideas to life and solve challenges effectively.
                            </p>
                            <div className="flex mb-4">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="" className="m-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 16.2711C22 19.9111 19.83 22.0811 16.19 22.0811H15C14.45 22.0811 14 21.6311 14 21.0811V15.3111C14 15.0411 14.22 14.8111 14.49 14.8111L16.25 14.7811C16.39 14.7711 16.51 14.6711 16.54 14.5311L16.89 12.6211C16.92 12.4411 16.78 12.2711 16.59 12.2711L14.46 12.3011C14.18 12.3011 13.96 12.0811 13.95 11.8111L13.91 9.36105C13.91 9.20105 14.04 9.06107 14.21 9.06107L16.61 9.02106C16.78 9.02106 16.91 8.89107 16.91 8.72107L16.87 6.32104C16.87 6.15104 16.74 6.02106 16.57 6.02106L13.87 6.06107C12.21 6.09107 10.89 7.45105 10.92 9.11105L10.97 11.8611C10.98 12.1411 10.76 12.3611 10.48 12.3711L9.28 12.3911C9.11 12.3911 8.98001 12.521 8.98001 12.691L9.01001 14.5911C9.01001 14.7611 9.14 14.8911 9.31 14.8911L10.51 14.8711C10.79 14.8711 11.01 15.0911 11.02 15.3611L11.11 21.0611C11.12 21.6211 10.67 22.0811 10.11 22.0811H7.81C4.17 22.0811 2 19.911 2 16.261V7.89105C2 4.25105 4.17 2.08105 7.81 2.08105H16.19C19.83 2.08105 22 4.25105 22 7.89105V16.2711Z"
                                        fill="white"/>
                                </svg>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="m-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 4.08105H7C4 4.08105 2 6.08105 2 9.08105V15.0811C2 18.0811 4 20.0811 7 20.0811H17C20 20.0811 22 18.0811 22 15.0811V9.08105C22 6.08105 20 4.08105 17 4.08105ZM13.89 13.1111L11.42 14.5911C10.42 15.1911 9.59998 14.7311 9.59998 13.5611V10.5911C9.59998 9.42106 10.42 8.96107 11.42 9.56107L13.89 11.041C14.84 11.621 14.84 12.5411 13.89 13.1111Z"
                                        fill="white"/>
                                </svg>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="m-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.98 11.491C21.64 5.69101 16.37 1.22102 10.3 2.22102C6.12004 2.91102 2.77005 6.301 2.12005 10.481C1.74005 12.901 2.24007 15.191 3.33007 17.081L2.44006 20.391C2.24006 21.141 2.93004 21.821 3.67004 21.611L6.93005 20.711C8.41005 21.581 10.14 22.081 11.99 22.081C17.63 22.081 22.31 17.111 21.98 11.491ZM16.8801 15.801C16.7901 15.981 16.68 16.151 16.54 16.311C16.29 16.581 16.02 16.781 15.72 16.901C15.42 17.031 15.09 17.091 14.74 17.091C14.23 17.091 13.68 16.971 13.11 16.721C12.53 16.471 11.9601 16.141 11.3901 15.731C10.8101 15.311 10.2701 14.841 9.75005 14.331C9.23005 13.811 8.77003 13.261 8.35003 12.691C7.94003 12.121 7.61005 11.551 7.37005 10.981C7.13005 10.411 7.01006 9.86101 7.01006 9.34101C7.01006 9.00101 7.07006 8.67101 7.19006 8.37101C7.31006 8.06101 7.50007 7.78101 7.77007 7.53101C8.09007 7.21101 8.44005 7.06101 8.81005 7.06101C8.95005 7.06101 9.09002 7.09101 9.22002 7.15101C9.35002 7.21101 9.47005 7.30101 9.56005 7.43101L10.72 9.07099C10.81 9.20099 10.88 9.311 10.92 9.421C10.97 9.531 10.99 9.631 10.99 9.731C10.99 9.851 10.9501 9.97101 10.8801 10.091C10.8101 10.211 10.72 10.331 10.6 10.451L10.22 10.851C10.16 10.911 10.1401 10.971 10.1401 11.051C10.1401 11.091 10.15 11.131 10.16 11.171C10.18 11.211 10.1901 11.241 10.2001 11.271C10.2901 11.441 10.45 11.651 10.67 11.911C10.9 12.171 11.1401 12.441 11.4001 12.701C11.6701 12.971 11.9301 13.211 12.2001 13.441C12.4601 13.661 12.68 13.811 12.85 13.901C12.88 13.911 12.9101 13.931 12.9401 13.941C12.9801 13.961 13.0201 13.961 13.0701 13.961C13.1601 13.961 13.2201 13.931 13.2801 13.871L13.66 13.491C13.79 13.361 13.9101 13.271 14.0201 13.211C14.1401 13.141 14.2501 13.101 14.3801 13.101C14.4801 13.101 14.5801 13.121 14.6901 13.171C14.8001 13.221 14.92 13.281 15.04 13.371L16.7001 14.551C16.8301 14.641 16.92 14.751 16.98 14.871C17.03 15.001 17.0601 15.121 17.0601 15.261C17.0001 15.431 16.9601 15.621 16.8801 15.801Z"
                                        fill="white"/>
                                </svg>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="m-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.19 2.08105H7.81C4.17 2.08105 2 4.25105 2 7.89105V16.2611C2 19.9111 4.17 22.0811 7.81 22.0811H16.18C19.82 22.0811 21.99 19.9111 21.99 16.2711V7.89105C22 4.25105 19.83 2.08105 16.19 2.08105ZM12 15.9611C9.86 15.9611 8.12 14.2211 8.12 12.0811C8.12 9.94105 9.86 8.20105 12 8.20105C14.14 8.20105 15.88 9.94105 15.88 12.0811C15.88 14.2211 14.14 15.9611 12 15.9611ZM17.92 6.96105C17.87 7.08105 17.8 7.19105 17.71 7.29105C17.61 7.38105 17.5 7.45105 17.38 7.50105C17.26 7.55105 17.13 7.58105 17 7.58105C16.73 7.58105 16.48 7.48105 16.29 7.29105C16.2 7.19105 16.13 7.08105 16.08 6.96105C16.03 6.84105 16 6.71105 16 6.58105C16 6.45105 16.03 6.32105 16.08 6.20105C16.13 6.07105 16.2 5.97105 16.29 5.87105C16.52 5.64105 16.87 5.53105 17.19 5.60105C17.26 5.61105 17.32 5.63105 17.38 5.66105C17.44 5.68105 17.5 5.71105 17.56 5.75105C17.61 5.78105 17.66 5.83105 17.71 5.87105C17.8 5.97105 17.87 6.07105 17.92 6.20105C17.97 6.32105 18 6.45105 18 6.58105C18 6.71105 17.97 6.84105 17.92 6.96105Z"
                                        fill="white"/>
                                </svg>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="m-1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.1066 8.71529C20.0826 8.49182 20.0546 8.31274 20.0316 8.18511L21.9161 5.3584C22.0345 5.18068 22.027 4.94731 21.8974 4.77756C21.7677 4.60781 21.5446 4.53917 21.3419 4.60671L18.7212 5.48027C18.5827 5.27371 18.3773 5.00125 18.1036 4.7275C17.5491 4.173 16.6794 3.58105 15.5 3.58105C14.2775 3.58105 13.3727 3.92323 12.7266 4.485C12.0872 5.041 11.75 5.76974 11.5775 6.45979C11.4052 7.14894 11.3898 7.82716 11.4147 8.32477C11.422 8.46989 11.4327 8.60123 11.4444 8.71489C10.1893 8.9818 8.87591 8.57293 7.58934 7.8094C6.17064 6.96746 4.87015 5.74406 3.85358 4.7275C3.71259 4.58651 3.50131 4.54277 3.31593 4.61618C3.13054 4.6896 3.0065 4.86614 3.00027 5.06544C2.87287 9.14225 3.71338 14.0768 7.51119 16.5791C5.9138 17.4432 4.34766 17.8462 2.43801 18.0849C2.21938 18.1122 2.04441 18.2795 2.00721 18.4966C1.97001 18.7138 2.07935 18.9297 2.27642 19.0283C7.43512 21.6076 14.1199 21.4212 17.9 16.3811C19.467 14.2917 19.9921 12.197 20.1233 10.6226C20.1888 9.83625 20.1563 9.17914 20.1066 8.71529Z"
                                        fill="white"/>
                                </svg>


                            </div>
                        </div>
                        <div className="hidden xl:block">
                            <h2 className="text-orange mb-4">Navigation</h2>
                            <ul>
                                <li className="py-2 hover:text-orange duration-300">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="py-2 hover:text-orange duration-300">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="py-2 hover:text-orange duration-300">
                                    <Link href="/services">
                                        Services
                                    </Link>
                                </li>
                                <li className="py-2 hover:text-orange duration-300">
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="py-2 hover:text-orange duration-300">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-orange mb-4">Contact</h2>
                            <div className="py-2">
                                <p>+48 888 899 404</p>
                            </div>
                            <div className="py-2">
                                <p>damiantadla@gmail.com</p>
                            </div>
                            <div className="py-2">
                                <p>tadla.me</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-orange mb-6">Get the latest information</h2>
                            <div className="flex">
                                <input type="text" placeholder="Email Address"
                                       className="placeholder:text-lightBlack text-lightBlack text-sm py-2 px-4 focus rounded-l-[14px] focus:outline-none focus:border-none" onChange={handleChange} onKeyPress={handleKeyPress} value={email} />
                                <button className="flex items-center justify-center bg-orange p-2 rounded-r-[14px]" onClick={sendEmail}>
                                    {
                                        loading ? <CircularProgress size={24} color="inherit"/> :
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className=""
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.29602 3.48708C3.91012 2.38589 1.36183 4.66673 2.19279 7.15964L3.45424 10.9007C3.59136 11.3074 3.97267 11.5812 4.40182 11.5812H13C13.5523 11.5812 14 12.0289 14 12.5812C14 13.1335 13.5523 13.5812 13 13.5812H4.40182C3.97267 13.5812 3.59136 13.855 3.45424 14.2617L2.19281 18.0028C1.36183 20.4957 3.91012 22.7765 6.29603 21.6754L20.0983 15.3051C22.422 14.2326 22.422 10.9299 20.0983 9.85737L6.29602 3.48708Z"
                                                    fill="#FCFCFD"/>
                                            </svg>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <LineSvg/>
                    <div className="flex flex-col md:flex-row justify-between items-end font-normal mt-6 pb-4 text-end">
                        <p>Copyright© 2024 Damian Tadla. All Rights Reserved.</p>
                        <div>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default FooterView;