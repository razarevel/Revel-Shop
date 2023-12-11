import { useEffect, useState } from "react";
import img from "../../../assets/blackLogo.png";
import { Link } from "react-router-dom";
import useCounter from "../../../useCounter";
interface Props {
  secNav?: boolean;
}
export default function NavbarMobile({ secNav }: Props) {
  const [show, setShow] = useState(false);
  const { navNum, isInView,setNavNum } = useCounter();
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
    <div>
      <div className="relative">
        {/* Nav */}
        <div className="flex items-center justify-between md:hidden px-4 py-5 sm:px-10 relative z-50 bg-white">
          <img src={img} alt="" className="w-56" />
          {/* button */}
          <div
            className="w-9 h-9  flex flex-col items-start justify-center space-y-2"
            onClick={() => setShow(!show)}
          >
            <div
              className={
                "w-[70%] h-0.5 bg-black duration-300 " +
                (show && " w-full -rotate-45 translate-y-2 translate-x-0.5")
              }
            ></div>
            <div
              className={
                "w-full h-0.5 bg-black duration-300 " +
                (show && " rotate-45 -translate-y-0.5 translate-x-0.5")
              }
            ></div>
            <div
              className={
                "w-[70%] h-0.5 bg-black duration-300 " + (show && " opacity-0")
              }
            ></div>
          </div>
        </div>
        {/* border After Nav */}
        <div className="border-t-[3px] border-dotted md:hidden"></div>
        {/* list */}
        <div
          key={renderKey}
          className={`absolute w-full md:hidden z-30  ${
            show ? " top-[6.6rem] " : " -top-40 "
          }  bg-gray-100 duration-500 overflow-hidden flex flex-col items-center justify-center`}
        >
          {nav.map((el, index) => (
            <Link
              to={el.link}
              key={index}
              className="w-full border-b text-center"
            >
              <p
                className={
                  "text-lg font-medium py-3   " +
                  (el.id === navNum && " opacity-30 ")
                }
              >
                {el.context}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {secNav && (
        <div
          className={` fixed w-full bg-white z-50 ${
            !isInView ? " -top-24" : " top-0 "
          } shadow-lg duration-300  `}
        >
          <div className="relative">
            {/* Nav */}
            <div className="flex items-center justify-between md:hidden px-4 py-5 sm:px-10 relative z-50 bg-white">
              <img src={img} alt="" className="w-56" />
              {/* button */}
              <div
                className="w-9 h-9  flex flex-col items-start justify-center space-y-2"
                onClick={() => setShow(!show)}
              >
                <div
                  className={
                    "w-[70%] h-0.5 bg-black duration-300 " +
                    (show && " w-full -rotate-45 translate-y-2 translate-x-0.5")
                  }
                ></div>
                <div
                  className={
                    "w-full h-0.5 bg-black duration-300 " +
                    (show && " rotate-45 -translate-y-0.5 translate-x-0.5")
                  }
                ></div>
                <div
                  className={
                    "w-[70%] h-0.5 bg-black duration-300 " +
                    (show && " opacity-0")
                  }
                ></div>
              </div>
            </div>
            {/* border After Nav */}
            <div className="border-t-[3px] border-dotted md:hidden"></div>
            {/* list */}
            <div
              key={renderKey}
              className={`absolute w-full md:hidden z-30  ${
                show ? " top-[6.6rem] " : " -top-40 "
              }  bg-gray-100 duration-500 overflow-hidden flex flex-col items-center justify-center`}
            >
              {nav.map((el, index) => (
                <Link
                  to={el.link}
                  key={index}
                  className="w-full border-b text-center"
                >
                  <p
                    className={
                      "text-lg font-medium py-3   " +
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
      )}
    </div>
  );
}
