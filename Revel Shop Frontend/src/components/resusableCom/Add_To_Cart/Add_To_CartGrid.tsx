import Add_To_CartCard from "./Add_To_CartCard";

interface local {
  slug: string;
  quantity: number;
  For: string;
}
export default function Add_To_CartGrid() {
  const cartsJSON = localStorage.getItem("add_to_carts");
  let data: local[] = [];

  if (cartsJSON !== null) {
    data = JSON.parse(cartsJSON);
  }

  return (
    <div className="flex flex-col space-y-2">
      {data.map((el, index) => (
        <Add_To_CartCard
          key={index}
          slug={el.slug}
          quantity={el.quantity}
          For={el.For}
        />
      ))}
    </div>
  );
}
