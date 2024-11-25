import BannerOne from "@/components/BannerOne";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaTwo from "@/components/ContactAreaTwo";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import WorkProcessTwo from "@/components/WorkProcessTwo"; 


export const metadata = {
  title: "Payment || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
  };


  const page = () => {
    return (
      <>
        {/* Navigation Bar */}
      <NavBar />

       {/* Navigation Bar */}
       <Breadcrumb title={"Payments"} />

        {/* Banner One */}
      <BannerOne />

       {/* Contact Area Two */}
      <ContactAreaTwo />

       {/* Work Process Two */}
       <WorkProcessTwo />

       {/* Footer One */}
      <FooterOne />
  
      </>
    );
  };
  
  export default page;