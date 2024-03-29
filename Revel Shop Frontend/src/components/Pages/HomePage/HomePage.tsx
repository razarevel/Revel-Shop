import { useEffect, useState } from "react";
import useCounter from "../../../useCounter";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import HeroSectionMain from "./HeroSection/HeroSectionMain";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import SliderSection from "../../resusableCom/Swiper/Slider";
import ProductSection from "./ProductSection/ProductSection";
import SocialMedia from "./SocialMedia/SocialMedia";
import ContactSection from "./ContactSection/ContactSection";
import { useInView } from "react-hook-inview";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";

export default function HomePage() {
  // functions
  const [ref, inView] = useInView();

  // set zustand
  const { navNum, setNavNum, setFor, isInView, setIsInView } = useCounter();
  useEffect(() => {
    setNavNum(0);
    setFor("");

    if (inView) {
      setIsInView(true);
    } else if (!inView) setIsInView(false);
  }, [navNum, setNavNum, isInView]);
  const [show, setShow] = useState(false);

  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <HeroSectionMain />
      <SliderSection For="men" limit={10} />
      <div ref={ref}>
        <SliderSection For="women" limit={10} />
        <SliderSection For="kids" limit={10} />
        <ProductSection />
        <SocialMedia />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
