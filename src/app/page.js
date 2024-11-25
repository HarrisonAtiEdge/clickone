
import AboutAreaOne from "@/components/AboutAreaOne";
import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerTwo from "@/components/BannerTwo";
import CounterAreaOne from "@/components/CounterAreaOne";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ServiceAreaOne from "@/components/ServiceAreaOne";


export const metadata = {

  title: "Home || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
};

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner Two */}
      <BannerTwo />
      
      {/* <AboutAreaTwo /> */}
      <AboutAreaTwo/>

      {/* About Area One */}
      <AboutAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Footer One */}
      <FooterOne />


    </>
  );
};

export default page;
