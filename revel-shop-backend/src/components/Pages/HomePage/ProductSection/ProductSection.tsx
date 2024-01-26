import ProductHeading from "./ProductHeading";
import img from "./accessories.jpg";
import img1 from "./women.jpg";
export default function ProductSection() {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-16">
        <div className="flex flex-col  items-center justify-center space-y-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <ProductHeading />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center text-center flex-col bg-slate-100 w-[263px] h-[263px]">
              <h1 className="text-[1.7rem] font-bold">Leather Bags</h1>
              <p className="font-medium italic opacity-50">Latest Collection</p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="flex items-center justify-center text-center flex-col bg-slate-100 w-[263px] h-[263px]">
              <h1 className="text-[1.7rem] font-bold">Different Types</h1>
              <p className="font-medium italic opacity-50">Over 304 Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-dotted"></div>
    </>
  );
}
