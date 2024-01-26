import Stare from "../../resusableCom/Swiper/Stares";
interface Props {
  image: string | any;
  name: string | any;
  price: number | any;
  rating: number | any;
}
export default function BuyProductCard({ image, name, price, rating }: Props) {
  return (
    <div className="w-full flex items-center justify-end order-1 md:order-2">
      <div className="space-y-4 max-w-sm">
        <img src={image} alt="" className="w-full" />
        <h1 className="text-2xl font-semibold">{name}</h1>
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg opacity-70">${price}.00</p>
          <div className="flex items-center">
            <Stare rating={rating} />
          </div>
        </div>
        <p className="font-medium italic opacity-70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nostrum
          tempore, quam labore beatae sunt dolorum odio. Necessitatibus nulla,
          nostrum facilis inventore voluptas numquam est maxime cumque culpa
          labore at eligendi, eos minima quas dolorum distinctio ex consectetur
          quisquam ab praesentium id voluptate consequuntur commodi placeat?
          Sequi praesentium vero vitae.
        </p>
      </div>
    </div>
  );
}
