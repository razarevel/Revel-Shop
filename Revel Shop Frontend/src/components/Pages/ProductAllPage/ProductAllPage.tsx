import FooterSection from "../../resusableCom/Footer/FooterSection";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import SliderSection from "../../resusableCom/Swiper/Slider";

export default function ProductAllPage() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
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
