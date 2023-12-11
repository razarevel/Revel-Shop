import { useEffect, useState } from "react";
import apiClient from "../../../resusableCom/apiClient";
import Stare from "../../../resusableCom/Swiper/Stares";
import ProductDetailButtons from "./ProductDetailButtons";
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
  slug: string;
}
export default function ProductDetailCard({ For, slug }: Props) {
  const [data, setData] = useState<Data>();
  useEffect(() => {
    apiClient.get(`/${For}/${slug}`).then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="container mx-auto max-w-7xl py-20 md:py-32 flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center space-y-14
       md:space-y-0 md:flex-row md:items-start md:space-x-10"
      >
        {/* images */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-10 px-4 md:w-[50%] lg:w-[30%]">
          <img src={data?.image[0]} alt="" className="w-full" />
          <img src={data?.image[1]} alt="" className="w-full" />
        </div>
        {/* context */}
        <div className="px-4 space-y-10 md:w-[50%]">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{data?.name}</h1>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium opacity-60">
                ${data?.price}.00
              </p>
              <div className="flex">
                <Stare rating={data?.rating} />
              </div>
            </div>
            <p className="opacity-70 font-medium italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quibusdam sapiente eaque consequuntur perferendis ad molestias
              iste corrupti sunt soluta consectetur ipsa dignissimos dolorem
              natus libero, ipsam magni, tenetur itaque, nobis facere quam
              architecto? Fugiat facilis eaque architecto ipsum nobis a quam
              delectus, voluptates explicabo dolores, tempora harum laudantium
              natus.
            </p>
          </div>
          <ProductDetailButtons slug={data?.slug} For={For} />
        </div>
      </div>
    </div>
  );
}
