import { useEffect, useState } from "react";
import apiClient from "../../../resusableCom/apiClient";
import Stare from "../../../resusableCom/Swiper/Stares";
import ProductDetailButtons from "./ProductDetailButtons";
import useCounter from "../../../../useCounter";
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
  const { isInView, setIsInView, Add_to_cart, setaddToCart } = useCounter();

  useEffect(() => {
    apiClient.get(`/${For}/${slug}`).then((res) => setData(res.data.data));
  }, []);
  // handle Cart
  const handleAddToCart = (num: number) => {
    const newData = {
      name: data?.name,
      slug: data?.slug,
      price: data?.price,
      rating: data?.rating,
      img: data?.image[0],
      quantity: num,
      For: For,
    };

    if (localStorage.getItem("add_to_carts")) {
      const cartsJSON = localStorage.getItem("add_to_carts");
      let carts = [];
      if (cartsJSON !== null) {
        carts = JSON.parse(cartsJSON);
      }
      const existingItem = carts.find((el: any) => el.slug === newData.slug);
      if (existingItem) {
        // Item already exists, update quantity
        existingItem.quantity = newData.quantity;
        setaddToCart(Add_to_cart + 1);
      } else {
        // Item doesn't exist, add it to the array
        carts.push(newData);
      }
      localStorage.setItem("add_to_carts", JSON.stringify(carts));
    } else {
      localStorage.setItem("add_to_carts", JSON.stringify([newData]));
    }
    setIsInView(!isInView);
  };
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
          <ProductDetailButtons
            handleCart={handleAddToCart}
            For={For}
            slug={data?.slug}
          />
        </div>
      </div>
    </div>
  );
}
