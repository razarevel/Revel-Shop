import { useState } from "react";
interface Props {
  heading: string;
}
export default function RawPageFAQ({ heading }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      {/* container */}
      <div className={`border  border-black  faq`}>
        <div className="flex items-center justify-between  px-4 py-3">
          <p className="font-medium">{heading}</p>
          <button
            className="relative  border-black w-5 h-5 flex items-center justify-center opacity-80 "
            onClick={() => setShow(!show)}
          >
            <div className="w-full h-0.5 bg-black absolute left-0"></div>
            <div
              className={
                "w-full h-0.5 bg-black absolute left-0 duration-300  " +
                (show ? "rotate-0" : "rotate-90")
              }
            ></div>
          </button>
        </div>
        <div
          className={`space-y-4   overflow-hidden ${
            !show ? "hideFaq" : "showFaq"
          }`}
        >
          {/* border */}
          <div className="w-[90%] h-[1px] mx-auto   bg-black opacity-40"></div>
          {/* context */}
          <div className="px-5 font-medium italic opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
            odio, impedit eaque asperiores sed corrupti deleniti illum,
            accusamus, dicta sunt? Ad totam, earum, consequatur facilis ipsum
            quibusdam ipsa perspiciatis et hic dolor, laudantium inventore!
            Pariatur dolore debitis maiores optio.
          </div>
        </div>
      </div>
    </div>
  );
}
