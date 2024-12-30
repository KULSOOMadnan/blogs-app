import React from "react";
import economy from "../../../public/economy (1).svg";
import cyborg from "../../../public/cyborg.svg";
import icon from "../../../public/Icon.svg";
import Image, { StaticImageData } from "next/image";


interface Card {
  id: number;
  svg: StaticImageData;
  title: string;
  description: string;
}

const CatagorysItems: Card[] = [
  {
    id: 1,
    svg: icon,
    title: "Business",
    description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    svg: cyborg,
    title: "Startup",
    description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 3,
    svg: economy,
    title: "Economy",
    description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 3,
    svg: cyborg,
    title: "Technology",
    description: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

function Category() {

    return (
        <div className="flex flex-col p-10 items-center gap-8 h-auto">
          <h1 className="text-blue text-3xl font-sen font-bold text-center">
            Choose A Category
          </h1>
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl cursor-pointer">
            {CatagorysItems.map((cate) => (
              <div
                key={cate.id}
                className="border border-medium_grey-1 p-5 py-7 hover:bg-yellow transition-all duration-300"
              >
                <div className="flex flex-col gap-5 ">
                  <div className="bg-light_yellow w-8 h-8 rounded-md flex items-center justify-center">
                    <Image src={cate.svg} alt="imag" />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <h3 className="font-sen text-lg text-blue font-bold">{cate.title}</h3>
                    <p className="text-medium_grey-0 font-sen text-xs">
                      {cate.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
//   return (
//     <div className="flex flex-col p-10 h-[60vh] items-center gap-8 ">
//       <h1 className="text-blue text-3xl font-sen font-bold text-center">
//         {" "}
//         Choose A Catagory
//       </h1>
//       <div className="grid grid-cols-4 gap-3 ">
//         {CatagorysItems.map((cate) => (
//           <div className="  w-[250px] border-medium_grey-1 py-7 border p-5 hover:bg-yellow  ">
//             <div
//               className="flex flex-col transition-all duration-300 gap-5"
//               key={cate.id}
//             >
//               <div className="bg-light_yellow w-8 h-8 rounded-md flex items-center justify-center">
//                 <Image src={cate.svg} alt="imag" />
//               </div>
//               <div className="flex flex-col gap-1">

//               <h3 className="font-sen text-lg font-bold">{cate.title}</h3>
//               <p className="text-medium_grey-0 font-sen text-xs ">
//                 {cate.description}
//               </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
}

export default Category;
