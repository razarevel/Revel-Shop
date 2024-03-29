import { useState } from "react";
import Stare from "../Swiper/Stares";
import useCounter from "../../../useCounter";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  price: number;
  rating: number;
  img: string;
  quantity: number;
  slug: string;
  For: string;
  filterCart: (slug: string) => void;
}
export default function Add_To_CartCard({
  name,
  price,
  rating,
  img,
  quantity,
  slug,
  For,
  filterCart,
}: Props) {
  const [num, setNum] = useState(quantity);
  const [show, setShow] = useState(false);
  const { isInView, setIsInView } = useCounter();
  return (
    <>
      <div className="border w-full p-2 space-y-3 cartCard">
        <div
          className={
            "flex items-start space-x-4 duration-300 " +
            (!show && " hover:scale-105 cursor-pointer")
          }
          onClick={() => {
            if (!show) setShow(true);
          }}
        >
          <img src={img} alt="" className="w-14" />
          <div className="w-full">
            {show ? (
              <Link
                to={`/${For}/${slug}`}
                className="text-lg font-semibold hover:underline "
                onClick={() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 100);
                }}
              >
                {name}
              </Link>
            ) : (
              <h1 className="text-lg font-semibold">{name}</h1>
            )}
            <div className="flex items-center justify-between">
              <p className="font-medium opacity-75">${price}.00</p>
              <div className="flex">
                <Stare rating={rating} />
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div
          className={
            "flex flex-col space-y-2 overflow-hidden relative " +
            (show ? " showCard" : " hideCard")
          }
        >
          {/* cross */}
          <div
            className={
              "absolute right-0 w-6 h-6  flex items-center justify-center duration-500 cursor-pointer hover:scale-105 " +
              (show ? "opacity-100" : "opacity-0")
            }
            onClick={() => {
              if (show) setShow(false);
            }}
          >
            <div className="w-full h-[1px] bg-black rotate-45 absolute"></div>
            <div className="w-full h-[1px] bg-black -rotate-45 absolute"></div>
          </div>
          {/* counter */}
          <div className="flex items-center space-x-6 ">
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
                "border font-medium border-black px-4 py-2 hidden sm:block " +
                (!(num === 0) &&
                  " hover:bg-black hover:text-white duration-300")
              }
              disabled={num === 0}
              onClick={() => {
                const data = {
                  slug: slug,
                  quantity: num,
                  For: For,
                };
                if (localStorage.getItem("add_to_carts")) {
                  const cartsJSON = localStorage.getItem("add_to_carts");
                  let carts = [];
                  if (cartsJSON !== null) {
                    carts = JSON.parse(cartsJSON);
                  }
                  carts.map((el: any) =>
                    el.slug === slug ? (el.quantity = num) : null
                  );
                  localStorage.setItem("add_to_carts", JSON.stringify(carts));
                } else {
                  localStorage.setItem("add_to_carts", JSON.stringify([data]));
                }
                setIsInView(!isInView);
              }}
            >
              Update Cart
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
            <button
              className={
                "px-4 py-2 bg-black text-white duration-300 font-medium opacity-80 hover:opacity-100 "
              }
              onClick={() => {
                filterCart(slug);
                setIsInView(!isInView);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
