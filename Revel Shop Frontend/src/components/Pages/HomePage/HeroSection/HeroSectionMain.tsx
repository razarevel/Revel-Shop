import HeroSecContain1 from "./HeroSecContain1";
import HeroSecContain2 from "./HeroSecContain2";

export default function HeroSectionMain() {
  return (
    <div id="hero w-full">
      {/* hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full container mx-auto  px-4 gap-8 py-14">
        {/* container 1 */}
        <HeroSecContain1 />
        {/* container 2 */}
        <HeroSecContain2 />
      </div>
      <div className="border-t-[3px] border-dotted"></div>
    </div>
  );
}
