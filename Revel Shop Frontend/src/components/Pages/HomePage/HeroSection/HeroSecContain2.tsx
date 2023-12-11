import { Link } from "react-router-dom";
import img1 from "./images/heroImage1.jpg";
import img2 from "./images/heroImage2.jpg";
import img3 from "./images/heroImage3.jpg";
import img4 from "./images/heroImage4.jpg";
export default function HeroSecContain2() {
  const context = [
    { name: "Women", text: "Best Clothes For Women", img: img1, link: "/page/women" },
    { name: "Men", text: "Best Clothes For Men", img: img2, link: "/page/men" },
    { name: "Kids", text: "Best Clothes For Kids", img: img3, link: "/page/kids" },
    {
      name: "Accessories",
      text: "Best Trend Accessories",
      img: img4,
      link: "/page/accessories",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {context.map((el, index) => (
          <div key={index} className="relative group">
            <img src={el.img} alt="" />
            <div className="bg-black w-full h-full absolute top-0 left-0 opacity-[0.45]"></div>
            <div
              className="w-full h-full absolute top-0 left-0 bg-black  text-center 
              space-y-4 flex flex-col items-center justify-center text-white duration-500  origin-center
                opacity-0 group-hover:opacity-95"
            >
              <h1 className="text-2xl font-bold">{el.name}</h1>
              <p className="opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                magnam!
              </p>
              <Link to={el.link}>
                <button className="border px-5 py-2 text-sm duration-300 hover:text-black hover:bg-white">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
