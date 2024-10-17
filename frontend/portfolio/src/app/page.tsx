import Image from "next/image";
import HeaderView from "@/views/header/HeaderView"
import ServicesComponent from "@/components/servicesComponent/ServicesComponent"
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import FooterView from "@/views/footer/FooterView";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionSendEmail from "@/views/sectionSendEmail/SectionSendEmail";
import SectionResults from "@/views/sectionResults/SectionResults";
import SectionPortfolio from "@/views/sectionPortfolio/SectionPortfolio";

export default function Home() {

  return (
      <>
          <HeaderView/>
          <main>
              <SectionMyServices/>

              <SectionWorkExp/>

              <SectionContact/>

              <SectionPortfolio/>

              <SectionResults/>
          </main>

      </>
  );
}
