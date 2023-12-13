import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
import img from "./customerPNG.png";
import apiClient from "../../resusableCom/apiClient";
import { Buffer } from "buffer";
const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
  passwordConfrom: z.string().min(1),
});
type FormData = z.infer<typeof schema>;
export default function SiginUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [file, setFiles] = useState<any>();
  const [showError, setShowError] = useState(false);
  const [existError, setExistError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememCheck, setRememCheck] = useState(false);
  const [preview, setPreview] = useState<any>();
  const [data, setData] = useState<any>(false);
  useEffect(() => {
    if (!file) return;
    let tmp = URL.createObjectURL(file);
    setPreview(tmp);
  }, [file]);
  useEffect(() => {
    if (!data) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("passwordConfrom", data.passwordConfrom);
    apiClient
      .post("/signup", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setExistError(false);
        setIsLoading(false);
        reset();
        setInterval(() => {
          window.location.reload();
        }, 500);
      })
      .catch(() => {
        setExistError(true);
        setIsLoading(false);
      });
  }, [data]);
  const onSubmit = async (data: FieldValues) => {
    if (data.password !== data.passwordConfrom) return setShowError(true);
    setShowError(false);
    // console.log(rememCheck);
    setData(data);
    if (file) {
      const buffer = await file.arrayBuffer();
      data.image = Buffer.from(buffer);
    }
    // console.log(data);
    setData(data);
  };
  if (localStorage.getItem("token")) return <Navigate to={"/"} />;
  return (
    <div className={`space-y-4 relative ${isLoading && "opacity-70"}`}>
      {/* loading */}
      {isLoading && (
        <div className="absolute top-0 left-0  w-full h-full z-20"></div>
      )}
      <h1 className="text-2xl font-semibold">Sign Up:</h1>
      {/* profil pics */}
      <div className="flex flex-col items-center justify-center pb-5 group">
        <div className="w-20 h-20 border-2 rounded-full cursor-pointer relative">
          {/* img */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20">
            {!file && <img src={img} alt="" className="" />}
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center
           font-medium bg-black rounded-full opacity-0  text-white hover:opacity-70 duration-300"
          >
            <label htmlFor="upload-photo" className="cursor-pointer">
              upload
            </label>
            <input
              className="w-full h-full cursor-pointer"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              name="photo"
              id="upload-photo"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0)
                  setFiles(e.target.files[0]);
              }}
            />
          </div>
          <div className="overflow-hidden rounded-full w-full h-full">
            {file && <img src={preview} alt="" className="" />}
          </div>
        </div>
        <p className="font-medium opacity-70">Profil Pic</p>
      </div>
      {existError && (
        <div className="text-center italic font-medium opacity-70">
          Email Already Exit. Please Logged in
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* names */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="name" className="text-lg font-medium">
            First Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Enter your Name"
          />
        </div>
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
            placeholder="Please Enter your Email"
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
        </div>
        {/* password Confrom */}
        <div className="flex flex-col space-y-3">
          <label htmlFor="passwordConfrom" className="text-lg font-medium">
            Password Confrom
          </label>
          <input
            {...register("passwordConfrom")}
            type="password"
            name="passwordConfrom"
            id="passwordConfrom"
            className="focus:outline-none border border-black px-4 py-2 font-medium opacity-80"
            placeholder="Please Confrom your Password"
          />
          {showError && (
            <p className="font-medium italic opacity-70">
              Password and Confrom Password not same.
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          {/* Policy */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 cursor-pointer"
            />
            <p className="font-medium">Agree to Revel terms and policy</p>
          </div>
          {/* remember me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 cursor-pointer"
              checked={rememCheck}
              onClick={() => setRememCheck(!rememCheck)}
            />
            <p className="font-medium">Remember me</p>
          </div>
        </div>

        <button
          disabled={!isValid}
          className={`border w-full border-black font-medium py-2 duration-300 ${
            isValid ? " hover:bg-black hover:text-white" : "opacity-70"
          }`}
        >
          Sign up
        </button>
      </form>
      <div className="flex items-center justify-center mt-4 space-x-1">
        <div className="w-full border-t border-black opacity-40"></div>
        <div className="text-sm font-medium opacity-70">Or</div>
        <div className="w-full border-t border-black opacity-40"></div>
      </div>
      <div className="flex items-center justify-end mt-5 font-medium space-x-1">
        <p className="opacity-70">Already have a account.</p>
        <Link to={"/signin"}>
          <div className="flex items-center justify-center cursor-pointer group space-x-1">
            <p className="group-hover:underline">Sign in</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
