import { useEffect, useState } from "react";
import { SwiperForDesktop } from "./Swiper/SwiperForDesktop";
import { SwiperForMobile } from "./Swiper/SwiperForMobile";
import { SwiperForTable } from "./Swiper/SwiperForTable";
import axios from "axios";
interface Props {
  _id: any;
  name: string;
  slug: string;
  price: number;
  rating: number;
  image: string[];
}
export default function SliderSection() {
  const [data, setData] = useState<Props[]>([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/men/?limit=10")
      .then((res) => setData(res.data.data.men))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <img src="" alt="" />
      <div className="flex items-center justify-center">
        <div className="hidden lg:block">
          <SwiperForDesktop data={data} />
        </div>
        <div className="hidden md:block lg:hidden">
          <SwiperForTable />
        </div>
        <div className="md:hidden">
          <SwiperForMobile />
        </div>
      </div>
    </>
  );
}
