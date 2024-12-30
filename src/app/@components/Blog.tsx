
import React from "react";
import Man from "../../../public/man.png";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slufy";

function Blog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20 gap-10 bg-lavender px-6 md:px-14 h-auto">
      {/* Text Content */}
      <div className="space-y-6 text-center md:text-left">
        {/* Featured Post Text */}
        <p className="uppercase text-xs md:text-sm font-medium text-blue font-inter tracking-[3px] md:tracking-[4px]">
          Featured Post
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold font-sen leading-snug text-blue">
          Step-by-step guide to choosing great font pairs
        </h1>

        {/* Author and Date */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-xs md:text-sm font-inter justify-center md:justify-start">
          <p>
            By <span className="text-purple">James West</span> | May 23, 2022
          </p>
        </div>

        {/* Description Text */}
        <p className="text-medium_grey-0 text-xs md:text-sm font-inter text-center md:text-left">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>

        {/* Button */}
        <Link href={`/blogs/${slugify('Step-by-step guide to choosing great font pairs')}`}>
        <button className="bg-yellow text-gray-900 px-6 py-3 md:px-8 text-xs md:text-sm font-sen font-bold mt-6 md:mt-8 hover:bg-yellow-400">
         Read More &gt;
        </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end items-center">
        <Image
          src={Man}
          width={500}
          height={500}
          alt="Man illustration"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Blog;

// import React from "react";
// import Man from "../../../public/man.png";
// import Image from "next/image";

// function Blog() {
//   return (
//     <div className="grid grid-cols-2 py-20 h-[80vh] gap-10 bg-lavender px-14 ">
//       <div className="  space-y-6 text-center md:text-left">
//         {/* Posted on text */}
//         <p className="uppercase text-sm font-medium text-blue font-inter tracking-[4px]">
//         Featured Post
//         </p>

//         {/* Main heading */}
//         <h1 className="text-4xl font-bold font-sen leading-tight sm:text-3xl md:text-4xl  text-blue">
//           Step-by-step guide to choosing great font pairs
//         </h1>

//         {/* Author and date */}
//         <div className="flex items-center space-x-4 text-sm font-inter justify-center md:justify-start">
//           <p>
//             By <span className="text-purple">James West</span> | May 23, 2022
//           </p>
//         </div>

//         {/* Description text */}
//         <p className="text-medium_grey-0 text-sm font-inter text-center md:text-left">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//           proident.
//         </p>

//         {/* Button */}
//         <button className="bg-yellow text-gray-900 px-8 py-3 text-sm font-sen font-bold mt-8 hover:bg-yellow-400">
//           Read More &gt;
//         </button>
//       </div>
//       <Image src={Man} width={500} height={500} alt="ikamge " className="items-end"/>


//     </div>
//   );
// }

// export default Blog;