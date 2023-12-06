import { useSwiper } from "swiper/react";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="absolute z-50 top-0 left-[-26%] h-full w-[25%] bg-white items-center justify-end  flex 
        lg:left-[-30%] xl:left-[-28%]
      "
      >
        <button
          className="border border-spacing-x-1.5 border-black p-1"
          onClick={() => swiper.slidePrev()}
        >
          <MdChevronLeft size="32" />
        </button>
      </div>
      <div
        className="absolute z-50 top-0 right-[-26%] h-full w-[25%] bg-white items-center justify-start  flex 
         lg:right-[-30%] xl:right-[-28%]
        "
      >
        <button
          className="border border-spacing-x-1.5 border-black p-1"
          onClick={() => swiper.slideNext()}
        >
          <MdChevronRight size="32" />
        </button>
      </div>
    </>
  );
}
