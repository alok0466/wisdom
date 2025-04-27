import { Helmet } from "react-helmet";
import ContactSection from "@/components/contact/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | UrbanVision Interior Design</title>
        <meta name="description" content="Get in touch with UrbanVision Interior Design to discuss your project or schedule a consultation." />
      </Helmet>
      
      <main className="pt-24">
        <ContactSection />
      </main>
    </>
  );
};

export default ContactPage;
