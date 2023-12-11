import Logo from "../../../assets/blackLogo.png";
import Add_To_CartGrid from "./Add_To_CartGrid";
interface Props {
  show: boolean;
  setShow: () => void;
}
export default function Add_To_Cart({ setShow, show }: Props) {
  return (
    <div className="cart">
      <div
        className={
          "fixed w-full min-h-full bg-black z-40 right-0 opacity-80 " +
          (show && "hidden")
        }
      ></div>
      {/* context */}
      <div
        className={
          "fixed z-50 w-full bg-white h-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[20%] right-0 space-y-4 duration-300 " +
          (show && " translate-x-full")
        }
      >
        {/* cross */}
        <div className="w-full flex items-center justify-end p-5">
          <div
            onClick={setShow}
            className="relative w-10 h-10 flex items-center justify-center cursor-pointer opacity-75 duration-300 hover:opacity-100
            
            "
          >
            <div className="w-full h-0.5 bg-black absolute rotate-45"></div>
            <div className="w-full h-0.5 bg-black absolute -rotate-45"></div>
          </div>
        </div>
        {/* logo */}
        <div className="px-4">
          <img src={Logo} alt="" className="w-56" />
        </div>
        <Add_To_CartGrid />
      </div>
    </div>
  );
}
