import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import img from "./signupPNG.png";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../../resusableCom/apiClient";
const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});
type FormData = z.infer<typeof schema>;
export default function SiginInForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState(false);
  const [existError, setExistError] = useState(false);
  useEffect(() => {
    if (!data) return;
    setLoading(true);
    apiClient
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setExistError(false);
        setLoading(false);
        setInterval(() => {
          window.location.reload();
        }, 500);
      })
      .catch(() => {
        setExistError(true);
        setLoading(false);
      });
  }, [data]);
  const onSubmit = (data: FieldValues) => {
    setData(data);
  };
  if (localStorage.getItem("token")) return <Navigate to={"/"} />;
  return (
    <div className={`space-y-14 relative ${isLoading && "opacity-70"}`}>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full z-20"></div>
      )}
      <h1 className="text-3xl font-semibold">Sign in:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* email */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Enter your Name"
          />
        </div>
        {/* password */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Enter your Password"
          />
          {existError && (
            <div className=" font-medium italic opacity-70">
              Email or Password incorrects
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          {/* remember me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 cursor-pointer"
            />
            <p className="font-medium">Remember me</p>
          </div>
          <p className="italic font-medium opacity-70 duration-300 hover:opacity-100 hover:underline cursor-pointer">
            Forgot Password
          </p>
        </div>

        <button
          disabled={!isValid}
          className={`border w-full border-black font-medium py-2 duration-300 ${
            isValid ? " hover:bg-black hover:text-white" : "opacity-70"
          }`}
        >
          Login
        </button>
      </form>
      <div className="flex items-center justify-center mt-4 space-x-1">
        <div className="w-full border-t border-black opacity-40"></div>
        <div className="text-sm font-medium opacity-70">Or</div>
        <div className="w-full border-t border-black opacity-40"></div>
      </div>
      <div className="flex items-center justify-end mt-5 font-medium space-x-1">
        <p className="opacity-70">Create a new account.</p>
        <Link to={"/signup"}>
          <div className="flex items-center justify-center cursor-pointer group space-x-1">
            <p className="group-hover:underline">Sign up</p>
            <img
              src={img}
              alt=""
              className="w-6 h-6 group-hover:opacity-100 opacity-80 duration-300 self-end"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
