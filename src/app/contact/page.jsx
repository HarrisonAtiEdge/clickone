import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import ContactMain from "@/components/ContactMain";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar"; 

export const metadata = {
  title: "Contact || ClickOnes",
  description:
    "ClickOnes offers an all-in-one platform for businesses to send invoices, receive payments, and manage cash flow seamlessly. With options like cards, bank transfers, ATMs, and cash.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Area One */}
      {/* <ContactAreaOne /> */}

      {/* Contact Main */}
      <ContactMain /> 

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
