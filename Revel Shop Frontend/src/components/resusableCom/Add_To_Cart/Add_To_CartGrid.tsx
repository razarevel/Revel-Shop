import { useEffect, useState } from "react";
import Add_To_CartCard from "./Add_To_CartCard";
import useCounter from "../../../useCounter";

interface local {
  name: string;
  slug: string;
  price: number;
  rating: number;
  img: string;
  quantity: number;
  For: string;
}
export default function Add_To_CartGrid() {
  const { Add_to_cart } = useCounter();
  const [data, setData] = useState<local[]>([]);
  const [num, setNum] = useState(0);
  const FilterCart = (slug: string) => {
    const result = data.filter((el) => el.slug !== slug);
    localStorage.setItem("add_to_carts", JSON.stringify(result));
    setNum(num + 1);
  };
  const [renderKey, setRenderKey] = useState(0);
  const cartsJSON = localStorage.getItem("add_to_carts");
  useEffect(() => {
    if (cartsJSON !== null && cartsJSON?.length !== 0) {
      const result = JSON.parse(cartsJSON);
      setData(result);
      if (result.length === 0) {
        localStorage.removeItem("add_to_carts");
      }
    }
    setRenderKey((prevKey) => prevKey + 1);
  }, [num, Add_to_cart, cartsJSON]);
  if (data.length === 0)
    return (
      <p className="px-4 font-medium opacity-70 italic pt-10">
        No item in Cart
      </p>
    );

  return (
    <div
      className="flex flex-col space-y-2 overflow-hidden border relative"
      key={renderKey}
    >
      {data.map((el, index) => (
        <Add_To_CartCard
          name={el.name}
          rating={el.rating}
          img={el.img}
          price={el.price}
          key={index}
          slug={el.slug}
          quantity={el.quantity}
          For={el.For}
          filterCart={FilterCart}
        />
      ))}
    </div>
  );
}
