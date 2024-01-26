import { useEffect, useState } from "react";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import BuyPageGrid from "./BuyPageGrid";
import useCounter from "../../../useCounter";
import { useParams } from "react-router-dom";
export default function BuyPage() {
  const [show, setShow] = useState(false);
  const { setNavNum } = useCounter();
  const params = useParams();
  useEffect(() => {
    if (params.for === "men") setNavNum(1);
    if (params.for === "women") setNavNum(2);
    if (params.for === "kids") setNavNum(3);
    if (params.for === "accessories") setNavNum(4);
  }, [params]);
  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <BuyPageGrid />
      <FooterSection />
    </>
  );
}
