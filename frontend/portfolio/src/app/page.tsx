"use client";
import HeaderView from "@/views/header/HeaderView";
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyPortfolio from "@/views/sectionMyServices/SectionMyPortfolio";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionResults from "@/views/sectionResults/SectionResults";
import SectionPortfolio from "@/views/sectionPortfolio/SectionPortfolio";
import dynamic from 'next/dynamic';

// Dynamiczny import ReactPlayer z wyłączonym SSR
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export default function Home() {
    return (
        <>
            <HeaderView />
            <main>
                <SectionMyPortfolio />
                <SectionWorkExp />
                <SectionContact />
                <SectionPortfolio showButton={true} />
                <SectionResults />
            </main>
        </>
    );
}
