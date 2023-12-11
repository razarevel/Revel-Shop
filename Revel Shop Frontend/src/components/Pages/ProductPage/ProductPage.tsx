import { useEffect, useState } from "react";
import useCounter from "../../../useCounter";
import NavbarDesktop from "../../resusableCom/Navbar/NavbarDesktop";
import { useLocation } from "react-router-dom";
import NavbarMobile from "../../resusableCom/Navbar/NavbarMobile";
import FooterSection from "../../resusableCom/Footer/FooterSection";

import ProductPageHeader from "./ProductPageHeader";

import ProductPageGrid from "./ProductPageGrid";
import Add_To_Cart from "../../resusableCom/Add_To_Cart/Add_To_Cart";

export default function ProductPage() {
  const { navNum, setNavNum, setFor, setIsInView, sortPrice, sortRating } =
    useCounter();
  //   access url
  const location = useLocation();
  let currentPath = location.pathname;
  const parts = currentPath.split("/");
  const lastPart = parts.filter((part) => part !== "").pop();

  //   seting the zustand
  useEffect(() => {
    if (lastPart === "men") {
      setFor(lastPart);
      setNavNum(1);
    } else if (lastPart === "women") {
      setFor(lastPart);
      setNavNum(2);
    } else if (lastPart === "kids") {
      setFor(lastPart);
      setNavNum(3);
    } else if (lastPart === "accessories") {
      setFor(lastPart);
      setNavNum(4);
    }
    setIsInView(false);
  }, [navNum, setNavNum]);

  const header = [
    {
      heading: "Men's latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
    },
    {
      heading: "Women's Latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
    },
    {
      heading: "Kid's Latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
    },
    {
      heading: "Accessories's Latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
    },
  ];
  let SwiperHeader = "";
  let SwiperPara = "";
  if (lastPart === "men") {
    SwiperHeader = header[0].heading;
    SwiperPara = header[0].para;
  } else if (lastPart === "women") {
    SwiperHeader = header[1].heading;
    SwiperPara = header[1].para;
  } else if (lastPart === "kids") {
    SwiperHeader = header[2].heading;
    SwiperPara = header[2].para;
  } else if (lastPart === "accessories") {
    SwiperHeader = header[3].heading;
    SwiperPara = header[3].para;
  }
  const [show, setShow] = useState(false);
  return (
    <>
      <Add_To_Cart setShow={() => setShow(!show)} show={!show} />
      <NavbarDesktop setShow={() => setShow(!show)} />
      <NavbarMobile setShowCart={() => setShow(!show)} />
      <ProductPageHeader heading={SwiperHeader} context={SwiperPara} />
      {/* grid */}
      <ProductPageGrid For={lastPart} sortby={sortPrice + "/" + sortRating} />
      <FooterSection />
    </>
  );
}
