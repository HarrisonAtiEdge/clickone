import BannerThree from "@/components/BannerThree";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import ServiceAreaSix from "@/components/ServiceAreaSix";
import TeamDetailsGroup from "@/components/TeamDetailsGroup";
import WhyChooseTwo from "@/components/WhyChooseTwo"; 


export const metadata = {
  title: "About || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* Banner Three*/}
      <BannerThree/>

      {/* WhyChooseTwo */}
      <WhyChooseTwo/>

      <ServiceAreaSix/>

      {/* Team Details Group */}
      <TeamDetailsGroup/>

      {/* <AboutAreaOne /> */} 

      <ServiceAreaOne />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
