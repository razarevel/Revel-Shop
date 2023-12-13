import { useEffect, useState } from "react";
import useCounter from "../../../useCounter";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import SigninPageGrid from "./SigninPageGrid";

export default function SigninPage() {
  const [show, setShow] = useState(false);
  const { setNavNum } = useCounter();
  useEffect(() => {
    setNavNum(6);
  }, []);

  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <SigninPageGrid />
      <FooterSection />
    </>
  );
}
