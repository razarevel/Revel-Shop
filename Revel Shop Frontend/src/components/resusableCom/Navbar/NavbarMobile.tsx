import { useEffect, useState } from "react";
import img from "../../../assets/blackLogo.png";
import { Link } from "react-router-dom";
import useCounter from "../../../useCounter";
interface Props {
  setShowCart: () => void;
}
export default function NavbarMobile({ setShowCart }: Props) {
  const [show, setShow] = useState(false);
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
    <div>
      <div className="relative">
        {/* Nav */}
        <div className="flex items-center justify-between md:hidden px-4 py-5 sm:px-10 relative z-30 bg-white">
          <img src={img} alt="" className="w-44" />
          {/* button */}
          <div className="flex items-center space-x-3">
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
            {/* add to cart */}
            <button
              onClick={setShowCart}
              className={
                "w-14 h-14 border flex items-center justify-center rounded-full border-gray-900 group hover:bg-black duration-300 " +
                (!localStorage.getItem("add_to_carts") && " hidden")
              }
            >
              <svg
                className="group-hover:fill-white duration-300"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455.297 455.297"
              >
                <g>
                  <circle cx="65.993" cy="417.586" r="35" />
                  <path d="M30.993,322.586v30h182.879c-5.914-9.267-10.676-19.335-14.094-30H30.993z" />
                  <path
                    d="M323.059,412.586c-12.147,0-23.907-1.686-35.062-4.829c-0.912,3.118-1.404,6.416-1.404,9.829c0,19.33,15.67,35,35,35
		c19.33,0,35-15.67,35-35c0-3.145-0.421-6.19-1.2-9.089C345.054,411.166,334.219,412.586,323.059,412.586z"
                  />
                  <path
                    d="M393.673,2.711l-12.294,75H0l25.888,158.454c2.833,17.282,19.479,31.422,36.992,31.422h131.688
		c7.715-64.052,62.392-113.859,128.49-113.859c26.887,0,51.884,8.244,72.6,22.333l23.496-143.349h36.142v-30H393.673z"
                  />
                  <path
                    d="M323.059,183.727c-54.826,0-99.431,44.604-99.431,99.429s44.604,99.429,99.431,99.429
		c54.825,0,99.429-44.604,99.429-99.429S377.884,183.727,323.059,183.727z M367.452,317.264l-44.394-44.394l-44.394,44.394
		l-21.213-21.213l65.606-65.606l65.606,65.606L367.452,317.264z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        {/* border After Nav */}
        <div className="border-t-[3px] border-dotted md:hidden"></div>
        {/* list */}
        <div
          key={renderKey}
          className={`absolute w-full md:hidden z-20  ${
            show ? " top-[5.8rem] " : " -top-52 "
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
  );
}
