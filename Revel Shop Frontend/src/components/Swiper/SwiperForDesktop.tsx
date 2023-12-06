import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
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
}
export function SwiperForDesktop({ data }: Props) {
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
      <div className="  overflow-hidden">
        <Swiper
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          loop={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            prevEl: navLeft.current,
            nextEl: navRight.current,
          }}
        >
          {data.map((el) => (
            <SwiperSlide key={el._id}>
              <div>
                <img src={el.image[0]} alt="" />
              </div>
            </SwiperSlide>
          ))}
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
