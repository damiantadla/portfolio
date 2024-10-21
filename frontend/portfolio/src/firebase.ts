// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD8mJzx5ncJkt0NgVnKT58kDk_2sIVP5Y",
    authDomain: "tadlame.firebaseapp.com",
    projectId: "tadlame",
    storageBucket: "tadlame.appspot.com",
    messagingSenderId: "580383357603",
    appId: "1:580383357603:web:1fb740bd3d962b46a6dd16",
    measurementId: "G-W79843DRT9"
};
let analytics;
export const initializeAnalytics = async () => {
    const supported = await isSupported();
    if (supported) {
        analytics = getAnalytics(app);
    } else {
        console.warn('Firebase Analytics is not supported in this environment');
    }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);