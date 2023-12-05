import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import SlideNextButton from "./Swiperbutton";
export function Swiper1f() {
  return (
    <>
      <div className="max-w-[1440px] w-full lg:px-[100px]  overflow-hidden relative mt-32 px-10 md:px-10">
        <Swiper
          loop={true}
          className="my-swiper"
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
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
          <SlideNextButton />
        </Swiper>
      </div>
    </>
  );
}
