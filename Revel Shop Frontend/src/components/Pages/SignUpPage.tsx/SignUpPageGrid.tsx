import RawPageFAQ from "../RawPage/RawPageFAQ";
import SiginUpForm from "./SignUpForm";

export default function SignUpPageGrid() {
  const FAQHeader = [
    "Are All The Clother are branded",
    "How Can I Get A Refund",
    "Can We Deliver Product To Your Country",
    "Delivery Time Based On Location",
    "How To Get Coupen Free",
    "How To Open A Shop on Our site",
    "Is this All Real or Fake ",
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl py-20 px-4 gap-10">
        <div className="xl:w-[70%]">
          <SiginUpForm />
        </div>
        <div className="space-y-5 hidden md:block">
          {FAQHeader.map((el, index) => (
            <RawPageFAQ heading={el} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
