import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../../../assets/blackLogo.png";
import apiClient from "../../resusableCom/apiClient";
import BuyForm from "./BuyForm";
import BuyProductCard from "./BuyProductCard";
interface Data {
  name: string;
  image: [string];
  price: number;
  rating: number | any;
  slug: string;
  _id: any;
}
export default function BuyPageGrid() {
  const param = useParams();
  const [data, setData] = useState<Data>();
  const [showCoun, setShowCoun] = useState(false);
  useEffect(() => {
    if (!param) return;
    apiClient
      .get(`/${param.for}/${param.slug}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [param]);
  return (
    <div
      className="w-ful"
      onClick={() => {
        if (showCoun) setShowCoun(false);
      }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center py-32">
          <img src={img} alt="" />
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 pb-32">
          {/* form */}
          <div className="order-2 md:order-1">
            <BuyForm
              For={param.for}
              slug={data?.slug}
              show={showCoun}
              setShow={() => setShowCoun(!showCoun)}
            />
          </div>
          {/* productCard */}
          <BuyProductCard
            name={data?.name}
            image={data?.image[0]}
            price={data?.price}
            rating={data?.rating}
          />
        </div>
      </div>
    </div>
  );
}
