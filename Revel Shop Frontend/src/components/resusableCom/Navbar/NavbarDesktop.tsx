import { Link } from "react-router-dom";
import img from "../../../assets/blackLogo.png";
import useCounter from "../../../useCounter";
import { useState, useEffect } from "react";

export default function NavbarDesktop() {
  const { navNum, isInView, setNavNum } = useCounter();
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, [navNum, isInView]);
  const nav = [
    { id: 0, context: "Home", link: "/", func: () => setNavNum(0) },
    { id: 1, context: "Men's", link: "/men", func: () => setNavNum(1) },
    {
      id: 2,
      context: "Women's",
      link: "/women",
      func: () => setNavNum(2),
    },
    { id: 3, context: "Kid's", link: "/kids", func: () => setNavNum(3) },
    {
      id: 4,
      context: "Accessories's",
      link: "/accessories",
      func: () => setNavNum(4),
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <div
          className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-7"
          key={renderKey}
        >
          {/* Logo */}
          <img src={img} alt="" className="w-56" />
          <div className="flex space-x-6">
            {nav.map((el, index) => (
              <Link to={el.link} key={index}>
                <p
                  onClick={el.func}
                  className={
                    "text-lg font-medium " +
                    (el.id === navNum && " opacity-30 ")
                  }
                >
                  {el.context}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* border After Nav */}
        <div className="border-t-[3px] border-dotted"></div>
      </div>
      {/* fixed Nav */}
      <div
        className={` fixed w-full bg-white z-50 ${
          !isInView ? " -top-24" : " top-0 "
        } shadow-lg duration-300  `}
      >
        <div
          className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-2"
          key={renderKey}
        >
          {/* Logo */}
          <img src={img} alt="" className="w-56" />
          <div className="flex space-x-6">
            {nav.map((el, index) => (
              <Link to={el.link} key={index}>
                <p
                  className={
                    "text-lg font-medium " +
                    (el.id === navNum && " opacity-30 ")
                  }
                >
                  {el.context}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
