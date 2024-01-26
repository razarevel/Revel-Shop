import { useState, useEffect } from "react";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import useCounter from "../../../useCounter";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import PurchasePageGrid from "./PurchasePageGrid";

export default function PurchasesPage() {
  const [show, setShow] = useState(false);
  const { setNavNum } = useCounter();
  useEffect(() => {
    setNavNum(8);
  }, []);
  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <PurchasePageGrid />
      <FooterSection />
    </>
  );
}
