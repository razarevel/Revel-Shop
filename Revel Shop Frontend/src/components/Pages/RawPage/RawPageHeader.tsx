import Logo from "../../../assets/blackLogo.png";
import RawPageFAQ from "./RawPageFAQ";
export default function RawPageHeader() {
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
    <div className="container mx-auto max-w-7xl py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="hidden md:flex items-start justify-between">
        <div className="flex flex-col items-center justify-center space-y-14">
          <img src={Logo} alt="" className="w-[50%]" />
          <p className="font-medium italic opacity-70 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            deserunt qui necessitatibus voluptate ullam quos. Rem quisquam
            possimus, odit fugit amet ratione omnis voluptas distinctio? Tenetur
            magnam iusto itaque eligendi ullam voluptatum, atque ipsa vel nemo
            facilis recusandae qui sapiente sit quaerat adipisci dolor assumenda
            dicta ducimus natus ad? Porro molestiae perferendis consequuntur,
            quasi, optio asperiores eum enim voluptas officiis at harum
            repudiandae debitis. Quae porro dignissimos sapiente adipisci
            repellendus, magni optio, quis dolores aperiam nisi rem doloribus
            nemo voluptatum, blanditiis iusto fugiat nihil! Dicta, eius
            eligendi, nemo sunt, excepturi perferendis at quaerat quia
            repudiandae quisquam fugiat corporis accusamus eaque!
          </p>
        </div>
      </div>
      {/* FAQ's */}
      <div className="space-y-5">
        {FAQHeader.map((el, index) => (
          <RawPageFAQ heading={el} key={index} />
        ))}
      </div>
    </div>
  );
}
