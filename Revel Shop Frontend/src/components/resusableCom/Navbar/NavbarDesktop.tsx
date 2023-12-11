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
          <div className="flex items-center justify-center space-x-6">
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
            <button className="w-14 h-14 border flex items-center justify-center rounded-full border-gray-900 group hover:bg-black duration-300">
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
        <div className="border-t-[3px] border-dotted"></div>
      </div>
    </>
  );
}
