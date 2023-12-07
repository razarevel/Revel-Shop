interface Props {
  rating: number;
}
function splitFloatNumber(floatNumber: number) {
  const integerPart = Math.floor(floatNumber);
  const fractionalPart = Math.floor((floatNumber - integerPart) * 10);

  const resultObject = {
    integer: integerPart,
    floating: fractionalPart,
  };
  return resultObject;
}
function generateStare(num: number) {
  let nums = [];
  for (let i = 0; i < num; i++) {
    nums.push(i);
  }
  return nums;
}
export default function Stare({ rating }: Props) {
  const result = splitFloatNumber(rating);
  const divs = generateStare(result.integer);
  return (
    <>
      <div
        className={
          "w-4 h-4 stare bg-gray-400 flex items-center justify-end " +
          (result.floating === 0 && " hidden ")
        }
      >
        <div className={"h-full bg-black " + `w-[${result.floating}0%]`}></div>
      </div>
      {divs.map((el, index) => (
        <div key={index} className="stare bg-black w-4 h-4"></div>
      ))}
    </>
  );
}
