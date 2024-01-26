export default function ProductDetailHeader() {
  return (
    <>
      <div
        className="min-w-full h-[700px] relative flex items-center justify-center"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2954405/pexels-photo-2954405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="bg-black absolute top-0 left-0 w-full h-full opacity-80 z-10"></div>
        <div className="text-white relative z-20 text-center space-y-2 italic">
          <h1 className="text-5xl font-semibold ">Revel Shop</h1>
          <p className="opacity-75">
            Best online shopping webiste to buy clothes and accessories
          </p>
        </div>
      </div>
    </>
  );
}
