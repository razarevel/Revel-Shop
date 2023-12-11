import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
export default function SocialMedia() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <div className="container mx-auto max-w-[75rem] py-16 space-y-10 ">
        {/* header */}
        <div>
          <h1 className="text-3xl font-bold">Social Media</h1>
          <p className="font-medium opacity-50 italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            autem amet magni modi, non nisi?
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-0">
          {images.map((el, index) => (
            <img src={el} alt="" key={index} />
          ))}
        </div>
      </div>
      <div className="border-t-[3px] border-dotted"></div>
    </div>
  );
}
