
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCD8mJzx5ncJkt0NgVnKT58kDk_2sIVP5Y",
    authDomain: "tadlame.firebaseapp.com",
    projectId: "tadlame",
    storageBucket: "tadlame.appspot.com",
    messagingSenderId: "580383357603",
    appId: "1:580383357603:web:1fb740bd3d962b46a6dd16",
    measurementId: "G-W79843DRT9"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// @ts-ignore
export let analytics;
export const initializeAnalytics = async () => {
    const supported = await isSupported();
    if (supported) {
        analytics = getAnalytics(app);
    } else {
        console.warn('Firebase Analytics is not supported in this environment');
    }
};
