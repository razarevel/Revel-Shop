import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
export function SwiperForTable() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const navLeft = useRef<HTMLButtonElement | null>(null);
  const navRight = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative mt-32 flex items-center justify-center px-10  space-x-4 container mx-auto">
      <button
        className="border border-spacing-x-1.5 border-black p-1"
        ref={navLeft}
        onClick={() => swiper.slidePrev()}
      >
        <MdChevronLeft size="32" />
      </button>
      <div className="w-[80%]  overflow-hidden">
        <Swiper
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          loop={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: navLeft.current,
            nextEl: navRight.current,
          }}
        >
          <SwiperSlide className="bg-red-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-green-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-yellow-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-emerald-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-blue-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-purple-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-gray-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-orange-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-gray-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-green-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          <SwiperSlide className="bg-yellow-200 w-96 h-96 flex-shrink-0"></SwiperSlide>
          {/* <SlideNextButton /> */}
        </Swiper>
      </div>

      <button
        className="border border-spacing-x-1.5 border-black p-1"
        ref={navRight}
        onClick={() => swiper.slideNext()}
      >
        <MdChevronRight size="32" />
      </button>
    </div>
  );
}
