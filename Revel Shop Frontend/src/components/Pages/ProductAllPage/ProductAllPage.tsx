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
      <div className="w-full text-center pt-12 space-y-3">
        <h1 className="font-bold text-4xl">All Products We Have To Offer</h1>
        <p className="italic opacity-70 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
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
