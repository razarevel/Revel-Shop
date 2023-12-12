import Add_To_CartGrid from "../../resusableCom/Add_To_Cart/Add_To_CartGrid";
import Logo from "../../../assets/blackLogo.png";
import useCounter from "../../../useCounter";
import { useEffect, useState } from "react";
export default function AddToCartGrid() {
  const { Add_to_cart, setaddToCart, setIsInView, isInView } = useCounter();
  const [renderkey, setRenderKey] = useState(0);
  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, [isInView]);
  return (
    <>
      <div
        className="container mx-auto grid gird-cols-1 md:grid-cols-2 max-w-7xl py-14 gap-10"
        key={renderkey}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">All Carts:</p>
            <button
              className="border border-black font-medium hover:bg-black hover:text-white px-4 py-2 duration-300"
              onClick={() => {
                localStorage.removeItem("add_to_carts");
                setaddToCart(Add_to_cart + 1);
                setIsInView(!isInView);
              }}
            >
              Delete All Carts
            </button>
          </div>

          <Add_To_CartGrid />
        </div>
        <div className="hidden md:flex items-start justify-between">
          <div className="flex flex-col items-center justify-center space-y-14">
            <img src={Logo} alt="" className="w-[50%]" />
            <p className="font-medium italic opacity-70 text-center w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deserunt qui necessitatibus voluptate ullam quos. Rem quisquam
              possimus, odit fugit amet ratione omnis voluptas distinctio?
              Tenetur magnam iusto itaque eligendi ullam voluptatum, atque ipsa
              vel nemo facilis recusandae qui sapiente sit quaerat adipisci
              dolor assumenda dicta ducimus natus ad? Porro molestiae
              perferendis consequuntur, quasi, optio asperiores eum enim
              voluptas officiis at harum repudiandae debitis. Quae porro
              dignissimos sapiente adipisci repellendus, magni optio, quis
              dolores aperiam nisi rem doloribus nemo voluptatum, blanditiis
              iusto fugiat nihil! Dicta, eius eligendi, nemo sunt, excepturi
              perferendis at quaerat quia repudiandae quisquam fugiat corporis
              accusamus eaque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
