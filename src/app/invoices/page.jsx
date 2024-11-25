import BannerSeven from "@/components/BannerSeven";
import Breadcrumb from "@/components/Breadcrumb";
import FinanceInner from "@/components/finance";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import WhyChoose from "@/components/WhyChoose";


export const metadata = {
  title: "Invoice || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
  };
  
  
  const page = () => {
    return (
      <>
        {/* Navigation Bar */}
        <NavBar />
  
        {/* Breadcrumb */} 
        <Breadcrumb title={'invoices'} />

        {/* Banner Seven */}
        <BannerSeven />

        <FinanceInner/>

        {/* Why Choose */}
        <WhyChoose />
  
        {/* Footer One */}
        <FooterOne />
  
      </>
    );
  };
  
  export default page;
  