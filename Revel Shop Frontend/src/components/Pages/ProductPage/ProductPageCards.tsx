import { Link } from "react-router-dom";
import Stare from "../../resusableCom/Swiper/Stares";

interface Props {
  img: string[];
  name: string;
  rating: number;
  price: number;
  link: string;
}
export default function ProductPageCard({
  img,
  name,
  rating,
  price,
  link,
}: Props) {
  return (
    <Link to={link}>
      <div className="flex flex-col items-start space-y-4  duration-300 hover:bg-slate-50 group">
        <div className="w-full overflow-hidden">
          <img
            src={img[0]}
            alt=""
            className="w-full group-hover:scale-110 duration-300"
          />
        </div>
        <div className="w-full">
          {/* card body */}
          <div className="flex items-center justify-between lg:px-1">
            {/* name */}
            <h1 className="text-2xl font-bold">{name}</h1> {/* stares */}
            <div className=" flex">
              <Stare rating={rating} />
            </div>
          </div>
          <p className="text-xl font-semibold opacity-60">${price}.00</p>
        </div>
      </div>
    </Link>
  );
}
