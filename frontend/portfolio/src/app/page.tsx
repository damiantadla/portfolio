import Image from "next/image";
import HeaderView from "@/views/header/HeaderView"
import ServicesComponent from "@/components/servicesComponent/ServicesComponent"
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import FooterView from "@/views/footer/FooterView";
import SectionContact from "@/views/sectionContact/SectionContact";
import SectionSendEmail from "@/views/sectionSendEmail/SectionSendEmail";
import SectionResults from "@/views/SectionResults/SectionResults";

export default function Home() {

  return (
      <>
          <HeaderView/>
          <main>
              <SectionMyServices/>

              <SectionWorkExp/>

              <SectionContact/>
              <section className="h-[100vh] bg-white">

              </section>

              <SectionResults/>
          </main>

      </>
  );
}
