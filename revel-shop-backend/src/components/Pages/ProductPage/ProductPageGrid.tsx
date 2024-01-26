import ProductPageCard from "./ProductPageCards";
import apiClient from "../../resusableCom/apiClient";
import { useEffect, useState } from "react";
interface Data {
  _id: any;
  name: string;
  slug: string;
  price: number;
  rating: any;
  image: string[];
}
interface Props {
  For: string | any;
  sortby: string;
}
export default function ProductPageGrid({ sortby, For }: Props) {
  const [data, setData] = useState([]);
  let [sortString, setSortString] = useState("");
  useEffect(() => {
    const val = sortby.split("/");
    if (!val[1]) setSortString(val[0]);
    else if (val[1]) setSortString(val[0] + "," + val[1]);
    apiClient.get(`/${For}/?sort=${sortString}`).then((res) => {
      if (For === "men") setData(res.data.data.men);
      else if (For === "women") setData(res.data.data.women);
      else if (For === "kids") setData(res.data.data.kids);
      else if (For === "accessories") setData(res.data.data.accessories);
    });
  }, [sortby, sortString, For]);

  return (
    <>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-16">
        {data?.map((el: Data, index: number) => (
          <ProductPageCard
            price={el.price}
            img={el.image}
            name={el.name}
            rating={el.rating}
            link={`/${For}/${el.slug}`}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
