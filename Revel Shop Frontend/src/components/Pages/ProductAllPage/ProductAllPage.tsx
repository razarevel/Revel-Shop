import { useState } from "react";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import SliderSection from "../../resusableCom/Swiper/Slider";

export default function ProductAllPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <div>
        <SliderSection For="men" limit={10} />
        <SliderSection For="women" limit={10} />
        <SliderSection For="kids" limit={10} />
        <SliderSection For="accessories" limit={10} />
      </div>
      <FooterSection />
    </>
  );
}
