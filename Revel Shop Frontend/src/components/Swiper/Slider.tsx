import { useEffect, useState } from "react";
import SwiperCard from "./SwiperCard";

import axios from "axios";
interface Data {
  _id: any;
  name: string;
  slug: string;
  price: number;
  rating: any;
  image: string[];
}
interface Props {
  For: string;
  limit?: number;
}
export default function SliderSection({ For, limit }: Props) {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/${For}/?limit=${limit}`)
      .then((res) => {
        if (For === "men") setData(res.data.data.men);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <img src="" alt="" />
      <div className="flex items-center justify-center">
        <div className="hidden lg:block">
          <SwiperCard data={data} Desktop={true} />
        </div>
        <div className="hidden md:block lg:hidden">
          <SwiperCard data={data} Tabalet={true} />
        </div>
        <div className="md:hidden">
          <SwiperCard data={data} mobile={true} />
        </div>
      </div>
    </>
  );
}
