import FooterHeader from "./FooterHeader";
import FooterBody from "./FooterBody";

export default function FooterSection() {
  return (
    <div className="bg-neutral-900 text-white py-14">
      <div className="container mx-auto max-w-7xl space-y-10">
        {/* Footer header */}
        <FooterHeader />
        {/* border */}
        <div className="w-full h-[1px] bg-white opacity-10"></div>
        {/* Footer body */}
        <FooterBody />
      </div>
    </div>
  );
}
