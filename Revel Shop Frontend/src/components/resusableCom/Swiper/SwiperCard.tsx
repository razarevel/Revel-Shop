import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import Stare from "./Stares";

import { Link } from "react-router-dom";
interface Data {
  _id: any;
  name: string;
  slug: string;
  price: number;
  rating: number;
  image: string[];
}
interface Props {
  data: Data[];
  Desktop?: boolean;
  Tabalet?: boolean;
  mobile?: boolean;
  heading: string;
  para: string;
  link: string;
  For:string;
}
export default function SwiperCard({
  data,
  Desktop,
  Tabalet,
  mobile,
  heading,
  para,
  link,
  For
}: Props) {
  const swiperRef = useRef<any>(null);
  const navLeft = useRef<HTMLButtonElement | null>(null);
  const navRight = useRef<HTMLButtonElement | null>(null);
  const slidPer = () => {
    if (Desktop) return 3;
    else if (Tabalet) return 2;
    else if (mobile) return 1;
    return 1;
  };

  return (
    <div
      className={`relative flex items-center justify-center px-10  ${
        mobile ? " space-x-1 max-w-sm " : " space-x-4 "
      } container mx-auto `}
    >
      <div>
        <button
          className="border border-spacing-x-1.5 border-black p-3 group hover:bg-black duration-300"
          ref={navLeft}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <svg
            className="fill-black group-hover:fill-white duration-300"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_92_"
              d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
	l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
	C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
            />
          </svg>
        </button>
      </div>
      <div className={"overflow-hidden space-y-10 " + (mobile && "w-[80%]")}>
        <div className="flex items-center justify-between">
          <div className="text-center md:text-start italic space-y-2">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="opacity-40 font-medium">{para}</p>
          </div>
          <Link to={link}>
            <button className="border border-black font-medium px-4 py-2 hover:text-white hover:bg-black duration-300">
              View More
            </button>
          </Link>
        </div>
        <Swiper
          ref={swiperRef}
          loop={true}
          spaceBetween={20}
          slidesPerView={slidPer()}
        >
          {data?.map((el) => (
            <SwiperSlide key={el._id}>
              <Link to={`/${For}/${el.slug}`}>
                <div className="flex flex-col items-start space-y-4 duration-300 hover:scale-105">
                  <img src={el.image[0]} alt="" className="w-full" />
                  <div className="w-full">
                    {/* card body */}
                    <div className="flex items-center justify-between lg:px-1">
                      {/* name */}
                      <h1 className="text-2xl font-bold">{el.name}</h1>{" "}
                      {/* stares */}
                      <div className=" flex">
                        <Stare rating={el.rating} />
                      </div>
                    </div>
                    <p className="text-xl font-semibold opacity-60">
                      ${el.price}.00
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className="border border-spacing-x-1.5 border-black p-3 group hover:bg-black duration-300"
        ref={navRight}
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <svg
          className="fill-black group-hover:fill-white duration-300 rotate-180"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_92_"
            d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
	l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
	C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
          />
        </svg>
      </button>
    </div>
  );
}
