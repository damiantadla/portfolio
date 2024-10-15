import Image from "next/image";
import HeaderView from "@/views/header/HeaderView"
import ServicesComponent from "@/components/servicesComponent/ServicesComponent"
import SectionWorkExp from "@/views/sectionWorkExp/SectionWorkExp";
import SectionMyServices from "@/views/sectionMyServices/SectionMyServices";
import FooterView from "@/views/footer/FooterView";
import SectionContact from "@/views/sectionContact/SectionContact";

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
              <section className="relative h-[70vh]  bg-[rgba(0,0,0,0.5)] rounded-[40px] z-10">
                  <div
                      className="absolute inset-0 rounded-[40px] bg-back-pattern bg-center bg-cover bg-no-repeat z-0">

                  </div>
              </section>
              <section className="h-[50vh] bg-white">

              </section>

              <FooterView/>
          </main>

      </>
  );
}
