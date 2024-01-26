import { useEffect, useState } from "react";
import apiClient from "../../resusableCom/apiClient";

interface Props {
  email: string | any;
}
interface Data {
  product_slug: string;
  section: string;
  productQuantity: string;
  purchaseAt: string;
}
export default function Purchases({ email }: Props) {
  const [data, setData] = useState<Data>();
  useEffect(() => {
    apiClient
      .get(`/purchase/${email}`)
      .then((res) => setData(res.data.data.purchases.purchases))
      .catch((err) => console.log(err));
  }, [email]);
  return (
    <>
      <div className="flex">

      </div>
    </>
  );
}
