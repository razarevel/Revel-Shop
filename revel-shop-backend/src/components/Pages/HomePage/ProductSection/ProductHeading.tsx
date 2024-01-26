import { Link } from "react-router-dom";

export default function ProductHeading() {
  return (
    <>
      <div className="space-y-6 text-center md:text-left md:px-10 lg:w-[50%]">
        <h1 className="text-4xl font-bold">Explore Our Products</h1>
        <p className="opacity-50 font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quo
          facilis, ipsa ad illum saepe nisi corrupti, ab, omnis neque qui
          voluptates iusto consequuntur quis eius aliquam officiis possimus
          architecto!
        </p>
        {/* svg */}
        <div className="flex items-center justify-center space-x-3 px-4 md:px-0">
          <div>
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 123.961 123.961"
            >
              <g>
                <path
                  d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                />
                <path
                  d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                />
              </g>
            </svg>
          </div>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nam accusamus quod.
          </p>
        </div>
        <p className="opacity-50 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil
          doloribus nostrum aspernatur error nisi accusamus tenetur aut
          reprehenderit, laborum deleniti minus. Asperiores, veritatis
          consequuntur.
        </p>
        <p>
          <span className="opacity-50 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
          </span>{" "}
          <span className="hover:underline text-sky-600 font-medium">
            <a href="https://www.linkedin.com/in/raza-revel-4241a5276/">
              Support us
            </a>
          </span>{" "}
          <span className="opacity-50 font-medium">
            numquam aliquam ratione sint autem impedit ex.
          </span>
        </p>
        <Link to={"all-products"}>
          <button className="px-4 py-2 border border-black font-medium hover:bg-black hover:text-white duration-300">
            View All Product
          </button>
        </Link>
      </div>
    </>
  );
}
