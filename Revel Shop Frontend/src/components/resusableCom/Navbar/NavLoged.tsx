import { MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import customer from "./customerPNG.png";
import { useEffect, useState } from "react";
import apiClient from "../apiClient";
interface Data {
  email: string;
  name: string;
  image: string;
}
export default function NavLoged() {
  const [data, setData] = useState<Data>();
  const [img, setImg] = useState<string>(customer);
  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    apiClient
      .get("/user")
      .then((res) => {
        setData(res.data.data.user);
      })
      .catch((err: any) => {
        if (err.response && err.response.status === 401) {
          // Unauthorized error (invalid token)
          // localStorage.removeItem("token");
          console.log("Invalid token. Token removed.");
        } else {
          // Other errors
          console.log(err);
        }
      });
  }, []);
  useEffect(() => {
    if (data?.image !== "no" && data?.image) {
      setImg(data.image);
    } else {
      setImg(customer);
    }
  }, [data]);
  const personContext = [
    { context: data?.name || "Profil", link: "/profil" },
    { context: "All Carts", link: "/add_to_cart" },
    { context: "Purchases", link: "/purchases" },
  ];
  return (
    <div className="relative product group">
      <Link to={"/"}>
        <div className={"text-lg font-medium flex items-center justify-center"}>
          <div className="border rounded-full overflow-hidden w-14 h-14 flex items-center justify-center">
            <img
              src={img}
              alt=""
              className={`${img !== customer ? "opacity-100" : "opacity-20"}`}
            />
          </div>
          <div className="-rotate-90 duration-300 group-hover:rotate-90 translate-y-2">
            <MdChevronLeft size="25" />
          </div>
        </div>
      </Link>
      <div
        className="absolute bg-white shadow-lg w-36  px-6 -translate-x-6 space-y-5 flex flex-col items-start justify-center  z-40 overflow-hidden
     all_product"
      >
        {personContext.map((el, index) => (
          <Link to={el.link} key={index}>
            <p className={"text-lg font-medium "}>{el.context}</p>
          </Link>
        ))}
        <button
          className="w-full bg-black text-white absolute bottom-0 left-0 py-1"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
