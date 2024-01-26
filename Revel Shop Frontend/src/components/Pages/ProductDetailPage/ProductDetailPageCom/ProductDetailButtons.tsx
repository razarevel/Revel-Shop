import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  handleCart: (num: number) => void;
  For: string;
  slug: any;
}
export default function ProductDetailButtons({ handleCart, For, slug }: Props) {
  const [num, setNum] = useState(1);
  return (
    <div
      className="flex flex-col space-y-10 sm:flex-row sm:space-y-0 md:flex-col md:space-y-10
     md:items-start items-center justify-between lg:flex-row lg:space-y-0"
    >
      {/* counter */}
      <div className="flex items-center justify-center space-x-6 ">
        <button
          disabled={!(num > 0)}
          className={
            "border border-black w-10 h-10 flex items-center justify-center duration-300 " +
            (!(num > 0) && "opacity-40")
          }
          onClick={() => {
            if (num > 0) setNum(num - 1);
          }}
        >
          <FaMinus />
        </button>
        <p className="text-xl font-medium opacity-70">{num}</p>
        <button
          disabled={!(num < 5)}
          className={
            "border border-black w-10 h-10 flex items-center justify-center duration-300 " +
            (!(num < 5) && "opacity-40")
          }
          onClick={() => {
            if (num < 5) setNum(num + 1);
          }}
        >
          <FaPlus />
        </button>
      </div>
      {/* buyer and add to card */}
      <div className="space-x-4 flex">
        <button
          className={
            "border font-medium border-black px-4 py-2 " +
            (!(num === 0) && " hover:bg-black hover:text-white duration-300")
          }
          disabled={num === 0}
          onClick={() => handleCart(num)}
        >
          Add To Cart
        </button>
        <Link to={`/${For}/${slug}/buy`}>
          <button
            className={
              "px-4 py-2 bg-black text-white duration-300 font-medium opacity-80 " +
              (!(num === 0) && " hover:opacity-100")
            }
            disabled={num === 0}
          >
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
}
