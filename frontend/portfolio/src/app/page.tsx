"use client";
import HeaderView from "@/views/header/HeaderView";
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionResults from "@/views/sectionResults/SectionResults";
import SectionPortfolio from "@/views/sectionPortfolio/SectionPortfolio";
import { initializeAnalytics } from "@/firebase";
import { useEffect } from "react";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

export default function Home() {
    useEffect(() => {
        const initAnalytics = async () => {
            await initializeAnalytics();
        };
        initAnalytics();
    }, []);

    return (
        <>
            <HeaderView />
            <main>
                <SectionMyServices />
                <SectionWorkExp />
                <SectionContact />
                <SectionPortfolio />
                <SectionResults />
            </main>
        </>
    );
}
