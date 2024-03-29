import { useLocation } from "react-router-dom";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import FooterSection from "../../resusableCom/Footer/FooterSection";
import { useEffect, useState } from "react";
import useCounter from "../../../useCounter";
import ProductDetailHeader from "./ProductDetailPageCom/ProductDetailHeader";
import ProductDetailCard from "./ProductDetailPageCom/ProductDetailCard";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";
export default function ProductDetailPage() {
  const { navNum, setNavNum, setFor, setIsInView } = useCounter();
  const location = useLocation();
  let currentPath = location.pathname;
  const parts = currentPath.split("/");
  useEffect(() => {
    if (parts[1] === "men") {
      setFor(parts[1]);
      setNavNum(1);
    } else if (parts[1] === "women") {
      setFor(parts[1]);
      setNavNum(2);
    } else if (parts[1] === "kids") {
      setFor(parts[1]);
      setNavNum(3);
    } else if (parts[1] === "accessories") {
      setFor(parts[1]);
      setNavNum(4);
    }
    setIsInView(false);
  }, [navNum, setNavNum]);
  const [show, setShow] = useState(false);
 
  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <ProductDetailHeader />
      <ProductDetailCard For={parts[1]} slug={parts[2]} />
      <FooterSection />
    </>
  );
}
