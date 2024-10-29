"use client";
import HeaderView from "@/views/header/HeaderView";
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyPortfolio from "@/views/sectionMyServices/SectionMyPortfolio";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionResults from "@/views/sectionResults/SectionResults";
import SectionPortfolio from "@/views/sectionPortfolio/SectionPortfolio";

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
