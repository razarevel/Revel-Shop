import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import countries from "./countries";
import { MdChevronLeft } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import apiClient from "../../resusableCom/apiClient";
import { Navigate } from "react-router-dom";

interface Props {
  For: string | any;
  slug: any;
  show: boolean;
  setShow: () => void;
}
export default function BuyForm({ For, slug, show, setShow }: Props) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [country, setCountry] = useState({ alias: "", flag: "" });
  const [valid, setValid] = useState(false);
  const [num, setNum] = useState(1);
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [toHome, setToHome] = useState(false);
  useEffect(() => {
    if (isValid && country.alias !== "" && num !== 0) setValid(true);
    if (!isValid || !country || !num) setValid(false);
  }, [country, isValid, num]);
  const onSubmit = (data: FieldValues) => {
    data.country = country.alias;
    data.quantity = num;
    setData(data);
  };
  useEffect(() => {
    if (!data) return;
    setIsLoading(true);
    data.purchases = {
      product_slug: slug,
      section: For,
    };
    apiClient
      .post("/purchase", data)
      .then(() => {
        setIsLoading(false);
        setInterval(() => {
          setToHome(true);
        }, 200);
      })
      .then((err) => console.log(err));
  }, [data]);
  if (toHome) return <Navigate to={"/"} />;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-5 relative ${
        isLoading ? "opacity-70" : "opacity-100"
      }`}
    >
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full z-30"></div>
      )}
      {/* email */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80 remove-arrow"
          placeholder="Please Enter your Number"
        />
      </div>

      {/* country */}
      <div className="space-y-3 ">
        <label htmlFor="country" className="text-lg font-medium">
          Country
        </label>
        <div className="relative flex flex-col country ">
          {/* input */}
          <div className="w-full relative ">
            <div
              className="absolute top-0 left-0  w-full h-full z-20 cursor-pointer "
              onClick={setShow}
            ></div>
            <div className="flex items-center justify-between border border-black px-4 py-2">
              <div className="flex space-x-2">
                <img src={country.flag} alt="" />
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="focus:outline-none  font-medium opacity-80 remove-arrow w-full"
                  placeholder="Please Select your country"
                  value={country.alias}
                />
              </div>
              <MdChevronLeft
                size={28}
                className={`${show ? "duration-300 rotate-90" : "-rotate-90"}`}
              />
            </div>
          </div>
          {/* countryLists */}
          <div
            className={`w-full  bg-slate-100  overflow-y-scroll duration-300 absolute top-11 left-0 ${
              show ? "showCountries" : "hideCountries"
            } z-20`}
          >
            {countries.map((el, index) => (
              <div
                key={index}
                onClick={() => {
                  const val = {
                    alias: el.alias,
                    flag: el.mini,
                  };
                  setCountry(val);
                }}
                className="flex items-center space-x-2 border border-black p-4 cursor-pointer group"
              >
                <img src={el.mini} alt="" className="" />
                <p className="font-medium opacity-70 group-hover:opacity-100">
                  {el.alias}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* town */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="town" className="text-lg font-medium">
          Town/City
        </label>
        <input
          {...register("town", { required: true })}
          type="text"
          name="town"
          id="town"
          className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
          placeholder="Please Enter your Town Name"
        />
      </div>
      {/* address */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="address" className="text-lg font-medium">
          Address
        </label>
        <input
          {...register("address", { required: true })}
          type="text"
          name="address"
          id="address"
          className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
          placeholder="Please Enter your Address"
        />
      </div>
      {/* code */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="code" className="text-lg font-medium">
          Postol Code
        </label>
        <input
          {...register("code", { valueAsNumber: true, required: true })}
          type="number"
          name="code"
          id="code"
          className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80 remove-arrow"
          placeholder="Please Enter your Postol Code"
        />
      </div>
      {/* counter */}
      <div className="flex items-center space-x-6 ">
        <div
          className={
            "border border-black w-10 h-10 flex items-center justify-center duration-300 cursor-pointer " +
            (!(num > 0) && "opacity-40 cursor-default")
          }
          onClick={() => {
            if (num > 0) setNum(num - 1);
          }}
        >
          <FaMinus />
        </div>
        <p className="text-xl font-medium opacity-70">{num}</p>
        <div
          className={
            "border border-black w-10 h-10 flex items-center justify-center duration-300 cursor-pointer " +
            (!(num < 5) && "opacity-40 cursor-default")
          }
          onClick={() => {
            if (num < 5) setNum(num + 1);
          }}
        >
          <FaPlus />
        </div>
      </div>
      {/* submit */}
      <button
        disabled={!valid}
        className={`bg-black text-white font-medium px-4 py-2 ${
          valid ? " opacity-[0.85] hover:opacity-100" : "opacity-70"
        } duration-300`}
      >
        Buy Now
      </button>
    </form>
  );
}
