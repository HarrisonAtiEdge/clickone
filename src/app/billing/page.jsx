import AboutAreaFive from "@/components/AboutAreaFive";
import Breadcrumb from "@/components/Breadcrumb";
import CareerAreaOne from "@/components/CareerAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import WorkProcessOne from "@/components/WorkProcessOne";


export const metadata = {
  title: "Billing || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
  };
  
  
  const page = () => {
    return (
      <>
        {/* Navigation Bar */}
        <NavBar />
  
        {/* Breadcrumb */}
        <Breadcrumb title={'Billing'} /> 

        {/* About Area Five */}
      <AboutAreaFive />

       {/* Career Area One */}
       <CareerAreaOne/>

       {/* WorkProcessOne */}
       <WorkProcessOne /> 
       
        {/* Footer One */}
        <FooterOne />
  
      </>
    );
  };
  
  export default page;
  