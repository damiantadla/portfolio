import HeaderView from "@/views/header/HeaderView"
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import SectionContact from "@/views/sectionContact/SectionContact";
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
