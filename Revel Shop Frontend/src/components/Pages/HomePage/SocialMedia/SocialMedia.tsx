import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import insta from "./instagram.png";
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
            <a href={"https://www.instagram.com/otakuraza/"} target="_blank">
              <div className="relative group">
                <div className="absolute w-full h-full top-0 left-0 duration-500 group-hover:bg-black opacity-80"></div>
                {/* insta */}
                <div className="absolute  bottom-0 left-[5%] duration-500  text-white flex items-center justify-center flex-col opacity-0 group-hover:opacity-50">
                  <img src={insta} alt="" />
                  <p>Instagram</p>
                </div>
                <img src={el} alt="" key={index} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t-[3px] border-dotted"></div>
    </div>
  );
}
