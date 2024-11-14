"use client";

import Image from "next/image";
import Foto from "../../../public/damiablack.png";
import React, { useRef, useState } from "react";
import { firestore } from '@/firebase';
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const validationEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

interface State {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
}

const SectionContact = () => {
    const ref = useRef(null);

    // State variables
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [stateSnack, setStateSnack] = useState<State>({
        open: false,
        message: '',
        severity: 'error',
    });

    const handleClose = () => {
        setStateSnack({ open: false, message: '', severity: 'error' });
    };

    const sendEmail = async () => {
        console.log('Send email', name, email, message);
        if (!validationEmail(email)) {
            setStateSnack({
                open: true,
                message: 'Invalid email address ',
                severity: 'error',
            });
            return;
        }

        if (!name || !message) {
            setStateSnack({
                open: true,
                message: 'Please fill in all fields',
                severity: 'error',
            });
            return;
        }

        try {
            setLoading(true);
            await addDoc(collection(firestore, 'emails'), {
                name: name,
                email: email,
                message: message,
                createdAt: serverTimestamp(),
            });
            setStateSnack({
                open: true,
                message: 'Email sent successfully',
                severity: 'success',
            });
        } catch (error){
            setStateSnack({
                open: true,
                message: 'Failed to send email',
                severity: "error",
            });
        } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section className="relative h-auto lg:h-[70vh] bg-back-grey bg-center bg-cover flex justify-center items-center mx-auto py-10 lg:py-0">
            <div className="absolute inset-0 bg-white opacity-40 z-0"></div>

            <div className="relative w-full max-w-7xl flex flex-col lg:flex-row z-10">
                <div className="hidden md:flex justify-center lg:justify-between items-center w-full lg:w-1/2 mb-8 lg:mb-0 ">
                    <div className="w-full max-w-[420px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#feb173] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-[70px] shadow-lg flex items-end overflow-hidden mx-auto">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-[70px]">
                            <Image
                                src={Foto}
                                alt="Damian"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col space-y-4">
                    <h1
                        ref={ref}
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-darkBlue mb-4 text-center lg:text-left"
                    >
                        Contact <span className="text-orange">Me</span>
                    </h1>

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full py-3 px-4 bg-white border-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition rounded-[24px]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full py-3 px-4 bg-white border-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition rounded-[20px]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea
                        placeholder="Message"
                        className="w-full h-32 sm:h-40 bg-white py-3 px-4 border-2 border-gray-300 focus:outline-none focus:border-[#feb173] transition resize-none rounded-[20px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <div className="flex justify-center lg:justify-start">
                        <button
                            className="px-[20px] sm:px-[40px] py-[15px] sm:py-[20px] bg-orange rounded-[50px] text-white transition duration-300 border border-transparent hover:bg-white hover:text-orange hover:border-orange"
                            onClick={sendEmail}
                        >
                            {loading ? (
                                <CircularProgress size={26} color="inherit" />
                            ) : (
                                'Send'
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Snackbar for notifications */}
            <Snackbar
                open={stateSnack.open}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <SnackbarContent
                    message={
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {stateSnack.severity === 'success' ? (
                                <CheckCircleIcon style={{ color: 'white' }} />
                            ) : (
                                <ErrorIcon style={{ color: 'white' }} />
                            )}
                            <span style={{ marginLeft: 8 }}>{stateSnack.message}</span>
                        </span>
                    }
                    style={{
                        backgroundColor: stateSnack.severity === 'success' ? '#FD853A' : '#FD853A',
                        borderRadius: '40px',
                    }}
                    action={[
                        <IconButton key="close" aria-label="close" onClick={handleClose} sx={{ color: "white", fontSize: "24px" }}>
                            <span>&times;</span>
                        </IconButton>
                    ]}
                />
            </Snackbar>
        </section>
    );
};

export default SectionContact;
