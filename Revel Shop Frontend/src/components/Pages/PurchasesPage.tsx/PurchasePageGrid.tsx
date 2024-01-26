import { useEffect, useState } from "react";
import Profil from "./Profile";
import Purchases from "./Purchases";
import apiClient from "../../resusableCom/apiClient";
interface User {
  _id: any;
  image: string;
  name: string;
  email: string;
}
export default function PurchasePageGrid() {
  const [data, setData] = useState<User>();
  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    apiClient
      .get("/user")
      .then((res) => setData(res.data.data.user))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* profil */}
        <Profil image={data?.image} name={data?.name} email={data?.email} />
        {/* purchases */}
        <Purchases email={data?.email} />
      </div>
    </>
  );
}
