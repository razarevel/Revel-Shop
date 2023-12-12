import { useState } from "react";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import RawPageHeader from "./RawPageHeader";
import ContactusForm from "./ContactusForm";

export default function RawPage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <RawPageHeader />
      {/* map */}

      <iframe
        className="w-full h-[30rem] my-10"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d52462.488897444455!2d135.3645918994295!3d34.732774902836915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x6000efb488f2c329%3A0x93978126e69f7a8d!2zQW1hZ2FzYWtpIOWwvOW0juW4gg!3m2!1d34.7327113!2d135.4057914!4m5!1s0x6000efb488f2c329%3A0x93978126e69f7a8d!2sAmagasaki%2C%20Hyogo%2C%20Japan!3m2!1d34.7327113!2d135.4057914!5e0!3m2!1sen!2s!4v1702401941482!5m2!1sen!2s"
        loading="lazy"
      ></iframe>
      <ContactusForm />
      <FooterSection />
    </>
  );
}
