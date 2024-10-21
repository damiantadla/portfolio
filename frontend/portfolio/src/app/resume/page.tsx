import HeaderView from "@/views/header/HeaderView";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionResults from "@/views/sectionResults/SectionResults";
import { Viewer } from '@react-pdf-viewer/core';
import ArticleIcon from '@mui/icons-material/Article';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Home() {
    // Use the correct path for the PDF
    const pdfUrl = "/WZÓR-UCHWAŁY-monitoring-garaż-WM-CT-2024 (1).pdf";

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-lightBlack">My <span className="text-orange">Curriculum Vitae</span></h1>
                <a href={pdfUrl} download="WZÓR-UCHWAŁY-monitoring-garaż-WM-CT-2024 (1).pdf" className="bg-orange text-white px-10 py-5 rounded-[40px]" >
                    Pobierz PDF
                </a>
            </div>
            <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] xl:h-[90vh] max-w-7xl max-h-[1000px] mx-auto mt-20 ">
                <embed src={pdfUrl} width="100%" height="100%" type="application/pdf"/>
            </div>

        </div>
    );
}
