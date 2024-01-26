import useCounter from "../../../useCounter";
import img from "./icons8-sort-24.png";
interface Props {
  heading: string;
  context: string;
}
export default function ProductPageHeader({ heading, context }: Props) {
  const { setSortPrice, sortPrice, sortRating, setSortRating } = useCounter();

  const Context = [
    {
      heading: "Sort By Price",
      sections: [
        {
          text: "High to Low",
          func: () => {
            if (sortPrice === "-price") {
              setSortPrice("");
              return;
            }
            setSortPrice("-price");
          },
        },
        {
          text: "Low to High",
          func: () => {
            if (sortPrice === "price") {
              setSortPrice("");
              return;
            }
            setSortPrice("price");
          },
        },
      ],
    },
    {
      heading: "Sort By Rating",
      sections: [
        { text: "High to Low", func: () => {
          if(sortRating) return setSortRating("")
          setSortRating("-rating")
        } },
        { text: "Low to High", func: () => {
          if(sortRating) return setSortRating("")
          setSortRating("rating")
        } },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between pt-16 pb-5">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="italic font-medium opacity-50">{context}</p>
      </div>
      <div className="flex items-end justify-end -translate-x-4 space-x-6 md:translate-x-0">
        {/* pirce */}
        {Context.map((el, index) => (
          <div className={`parent${index}`} key={index}>
            <div className="flex items-center justify-center group cursor-pointer">
              <p className="text-lg font-medium ">{el.heading}</p>
              <img
                src={img}
                alt=""
                className="w-6 group-hover:scale-105 duration-300"
              />
            </div>
            <div
              className={`bg-slate-100 absolute w-full duration-300 h-0 overflow-hidden child${index}`}
            >
              {el.sections.map((el, index) => (
                <div className="py-4 border" key={index}>
                  <p
                    className="cursor-pointer px-2 font-normal opacity-50 hover:opacity-100"
                    onClick={el.func}
                  >
                    {el.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
