"use client"

import React, { useState } from "react";
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
}

interface State {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info';
}

const SectionSendEmail = ()  => {

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
        } catch (error) {
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
            <section
                className="flex flex-col items-center justify-center mx-auto h-auto bg-white max-w-5xl px-4 sm:px-6 my-12 md:my-32">
                <div className="text-4xl sm:text-6xl font-semibold text-center">
                    <h1>Have an Awesome Project Idea? <span className="text-orange">Let’s Discuss</span></h1>
                </div>
                <div className="w-full mt-4">
                    <div
                        className="flex items-center justify-between mt-4  px-2 md:px-3 rounded-[50px] border-[1px] border-solid border-[#E4E7EC]">
                        <div className="flex flex-grow items-center">
                            <div
                                className="flex items-center justify-center my-2 h-[54px] w-[58px] bg-[#FFEAD5] rounded-[50px]">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.6666 4.74756H9.33329C5.33329 4.74756 2.66663 6.74756 2.66663 11.4142V20.7476C2.66663 25.4142 5.33329 27.4142 9.33329 27.4142H22.6666C26.6666 27.4142 29.3333 25.4142 29.3333 20.7476V11.4142C29.3333 6.74756 26.6666 4.74756 22.6666 4.74756ZM23.2933 12.8676L19.12 16.2009C18.24 16.9076 17.12 17.2542 16 17.2542C14.88 17.2542 13.7466 16.9076 12.88 16.2009L8.70663 12.8676C8.27996 12.5209 8.21329 11.8809 8.54663 11.4542C8.89329 11.0276 9.51996 10.9476 9.94663 11.2942L14.12 14.6276C15.1333 15.4409 16.8533 15.4409 17.8666 14.6276L22.04 11.2942C22.4666 10.9476 23.1066 11.0142 23.44 11.4542C23.7866 11.8809 23.72 12.5209 23.2933 12.8676Z"
                                        fill="#FD853A"/>
                                </svg>
                            </div>
                            <input
                                className="ml-4 placeholder:text-black focus:outline-none focus:border-none text-sm md:text-xl flex-grow"
                                type="text" placeholder="Enter Email Address" onChange={handleChange} onKeyPress={handleKeyPress} value={email} />
                        </div>

                        <button
                            className="flex items-center justify-center px-[20px] py-[14px] md:px-[40px] md:py-[14px] text-center bg-orange rounded-[50px] text-white"
                            onClick={sendEmail}>
                            {loading? (
                                <CircularProgress size={26} color="inherit"/>
                            ) : (
                                'Send'
                            )}
                        </button>

                    </div>

                    <div className="flex flex-col sm:flex-row justify-between mx-6 mt-4 text-sm sm:text-base">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <svg className="mr-1" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.3899 5.29084L16.7999 8.11084C16.9899 8.50084 17.4999 8.87084 17.9299 8.95084L20.4799 9.37084C22.1099 9.64084 22.4899 10.8208 21.3199 12.0008L19.3299 13.9908C18.9999 14.3208 18.8099 14.9708 18.9199 15.4408L19.4899 17.9008C19.9399 19.8408 18.8999 20.6008 17.1899 19.5808L14.7999 18.1608C14.3699 17.9008 13.6499 17.9008 13.2199 18.1608L10.8299 19.5808C9.11994 20.5908 8.07994 19.8408 8.52994 17.9008L9.09994 15.4408C9.18994 14.9608 8.99994 14.3108 8.66994 13.9808L6.67994 11.9908C5.50994 10.8208 5.88994 9.64084 7.51994 9.36084L10.0699 8.94084C10.4999 8.87084 11.0099 8.49084 11.1999 8.10084L12.6099 5.28084C13.3799 3.76084 14.6199 3.76084 15.3899 5.29084Z"
                                    fill="#292D32"/>
                                <path
                                    d="M8 5.83105H2C1.59 5.83105 1.25 5.49105 1.25 5.08105C1.25 4.67105 1.59 4.33105 2 4.33105H8C8.41 4.33105 8.75 4.67105 8.75 5.08105C8.75 5.49105 8.41 5.83105 8 5.83105Z"
                                    fill="#292D32"/>
                                <path
                                    d="M5 19.8311H2C1.59 19.8311 1.25 19.4911 1.25 19.0811C1.25 18.6711 1.59 18.3311 2 18.3311H5C5.41 18.3311 5.75 18.6711 5.75 19.0811C5.75 19.4911 5.41 19.8311 5 19.8311Z"
                                    fill="#292D32"/>
                                <path
                                    d="M3 12.8311H2C1.59 12.8311 1.25 12.4911 1.25 12.0811C1.25 11.6711 1.59 11.3311 2 11.3311H3C3.41 11.3311 3.75 11.6711 3.75 12.0811C3.75 12.4911 3.41 12.8311 3 12.8311Z"
                                    fill="#292D32"/>
                            </svg>
                            <p>4.9/5 Average Ratings</p>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.54 4.2009L13.04 2.1409C12.47 1.9309 11.54 1.9309 10.97 2.1409L5.47005 4.2009C4.41005 4.6009 3.55005 5.8409 3.55005 6.9709V15.0709C3.55005 15.8809 4.08005 16.9509 4.73005 17.4309L10.23 21.5409C11.2 22.2709 12.79 22.2709 13.76 21.5409L19.26 17.4309C19.91 16.9409 20.4401 15.8809 20.4401 15.0709V6.9709C20.4501 5.8409 19.59 4.6009 18.54 4.2009ZM15.48 9.8009L11.18 14.1009C11.03 14.2509 10.84 14.3209 10.65 14.3209C10.46 14.3209 10.27 14.2509 10.12 14.1009L8.52005 12.4809C8.23005 12.1909 8.23005 11.7109 8.52005 11.4209C8.81005 11.1309 9.29005 11.1309 9.58005 11.4209L10.66 12.5009L14.43 8.7309C14.72 8.4409 15.2 8.4409 15.49 8.7309C15.78 9.0209 15.78 9.5109 15.48 9.8009Z"
                                    fill="#292D32"/>
                            </svg>

                            <p>10+ Projects Completed</p>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.54 4.2009L13.04 2.1409C12.47 1.9309 11.54 1.9309 10.97 2.1409L5.47005 4.2009C4.41005 4.6009 3.55005 5.8409 3.55005 6.9709V15.0709C3.55005 15.8809 4.08005 16.9509 4.73005 17.4309L10.23 21.5409C11.2 22.2709 12.79 22.2709 13.76 21.5409L19.26 17.4309C19.91 16.9409 20.4401 15.8809 20.4401 15.0709V6.9709C20.4501 5.8409 19.59 4.6009 18.54 4.2009ZM15.48 9.8009L11.18 14.1009C11.03 14.2509 10.84 14.3209 10.65 14.3209C10.46 14.3209 10.27 14.2509 10.12 14.1009L8.52005 12.4809C8.23005 12.1909 8.23005 11.7109 8.52005 11.4209C8.81005 11.1309 9.29005 11.1309 9.58005 11.4209L10.66 12.5009L14.43 8.7309C14.72 8.4409 15.2 8.4409 15.49 8.7309C15.78 9.0209 15.78 9.5109 15.48 9.8009Z"
                                    fill="#292D32"/>
                            </svg>

                            <p>10+ Projects Completed</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};

export default SectionSendEmail;