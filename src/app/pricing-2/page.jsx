import BannerFour from "@/components/BannerFour";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PriceAreaThree from "@/components/PriceAreaThree";


export const metadata = {
  title: "Price || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Pricing'} />

      {/* Banner Four */} 
      <BannerFour />

      {/* PriceAreaThree */}
      <PriceAreaThree />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
