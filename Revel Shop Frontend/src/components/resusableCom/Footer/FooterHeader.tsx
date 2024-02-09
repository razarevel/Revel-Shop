import { Link } from "react-router-dom";
import img from "../../../assets/whiteLogo.png";
import footerContext from "./footerContext";
export default function FooterHeader() {
  return (
    <>
      <div className="text-center space-y-12 md:text-left md:space-y-0 md:grid md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-4 lg:px-4">
        <div className="space-y-5 flex flex-col items-center justify-center w-full md:items-start md:justify-start">
          <Link to="/">
            <img src={img} alt="" className="w-56 cursor-pointer" />
          </Link>
          {/* first */}
          <div className="space-y-2 opacity-80">
            <p className="md:w-60">
              1650 Collgx Exo, Wally Isles Town Fl 3316, Japan
            </p>
            <p>
              <a href="mailto:razarevel@gmail.com">razarevel@gmail.com</a>
            </p>
            <p>03285467479</p>
          </div>
        </div>
        {footerContext.map((el, index) => (
          <div className="space-y-5" key={index}>
            <h1 className="font-bold">{el.heading}</h1>
            <div className="space-y-3">
              {el.sections.map((el, index) => (
                <p
                  className="text-sm opacity-60 duration-300 hover:opacity-100 hover:translate-x-2"
                  key={index}
                >
                  <Link to={el.link}>{el.text}</Link>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
