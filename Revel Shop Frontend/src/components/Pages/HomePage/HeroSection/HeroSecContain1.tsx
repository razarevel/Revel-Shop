import img from "./images/heroImage.jpg";

export default function HeroSecContain1() {
  return (
    <>
      <div className="relative flex items-center justify-center  md:justify-start">
        <img src={img} alt="" className="w-full" />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-70"></div>
        {/* context */}
        <div className="absolute text-white md:left-[13%] space-y-5 text-center md:text-start ">
          <h1 className="text-3xl md:text-5xl font-bold">We Are Revel Shop</h1>
          <p className="italic opacity-60">
            Awesome, clean & creative Online Shop
          </p>
          <button className="border text-sm px-4 py-2 duration-300 hover:bg-white hover:text-black opacity-80">
            Purchase Now!
          </button>
        </div>
      </div>
    </>
  );
}
