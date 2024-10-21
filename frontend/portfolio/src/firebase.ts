// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD8mJzx5ncJkt0NgVnKT58kDk_2sIVP5Y",
    authDomain: "tadlame.firebaseapp.com",
    projectId: "tadlame",
    storageBucket: "tadlame.appspot.com",
    messagingSenderId: "580383357603",
    appId: "1:580383357603:web:1fb740bd3d962b46a6dd16",
    measurementId: "G-W79843DRT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// @ts-ignore
export let analytics;
export const initializeAnalytics = async () => {
    const supported = await isSupported();
    console.log('Analytics supported:', supported);

    if (supported) {
        analytics = getAnalytics(app);
        console.log('Analytics initialized:', analytics);
    } else {
        console.warn('Firebase Analytics is not supported in this environment');
    }
};
