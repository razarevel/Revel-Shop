import SwiperCard from "./SwiperCard";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// interface Data {
//   _id: any;
//   name: string;
//   slug: string;
//   price: number;
//   rating: any;
//   image: string[];
// }
interface Props {
  For: string;
  limit?: number;
}
export default function SliderSection({ For, limit }: Props) {
  // const [data, setData] = useState<Data[]>([]);

  const FetchData = () =>
    axios
      .get(`http://127.0.0.1:3000/api/${For}/?limit=${limit}`)
      .then((res) => {
        if (For === "men") return res.data.data.men;
        else if (For === "women") return res.data.data.women;
        else if (For === "kids") return res.data.data.kids;
        else if (For === "accessories") return res.data.data.accessories;
      });
  const { data } = useQuery({
    queryKey: [For],
    queryFn: FetchData,
  });
  const header = [
    {
      heading: "Men's latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
      link: "/men",
    },
    {
      heading: "Women's Latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
      link: "/women",
    },
    {
      heading: "Kid's Latest",
      para: "Details to details is what makes Revel Shop different from the other themes.",
      link: "/kids",
    },
  ];
  let SwiperHeader = "";
  let SwiperPara = "";
  let SwiperLink = "";
  if (For === "men") {
    SwiperHeader = header[0].heading;
    SwiperPara = header[0].para;
    SwiperLink = header[0].link;
  } else if (For === "women") {
    SwiperHeader = header[1].heading;
    SwiperPara = header[1].para;
    SwiperLink = header[1].link;
  } else if (For === "kids") {
    SwiperHeader = header[2].heading;
    SwiperPara = header[2].para;
    SwiperLink = header[2].link;
  } 
  
  return (
    <>
      <div className="py-16">
        {/* Swipper */}
        <div className="flex items-center justify-center">
          <div className="hidden lg:block">
            <SwiperCard
              data={data}
              Desktop={true}
              heading={SwiperHeader}
              para={SwiperPara}
              link={SwiperLink}
            />
          </div>
          <div className="hidden md:block lg:hidden">
            <SwiperCard
              data={data}
              Tabalet={true}
              heading={SwiperHeader}
              para={SwiperPara}
              link={SwiperLink}
            />
          </div>
          <div className="md:hidden">
            <SwiperCard
              data={data}
              mobile={true}
              heading={SwiperHeader}
              para={SwiperPara}
              link={SwiperLink}
            />
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-dotted"></div>
    </>
  );
}
