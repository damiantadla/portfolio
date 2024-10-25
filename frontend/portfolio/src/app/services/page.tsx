import HeaderView from "@/views/header/HeaderView";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionResults from "@/views/sectionResults/SectionResults";
import SectionPortfolio from "@/views/sectionPortfolio/SectionPortfolio";

export default function Home() {

    return (
        <>
            <div className="mt-20 w-full px-10">
                <SectionPortfolio showButton={false}/>
            </div>

        </>
    );
}
